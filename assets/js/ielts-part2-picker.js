(() => {
  'use strict';

  const STORAGE_KEY = `ielts-part2-picker:v2:${location.pathname}`;
  const CATEGORY_LABELS = {
    person: '人物',
    place: '地点',
    thing: '事物',
    event: '事件'
  };
  const CATEGORY_MAP = new Map([
    ['人物类', 'person'],
    ['地点类', 'place'],
    ['事物类', 'thing'],
    ['事件类', 'event']
  ]);

  const normalize = (value = '') => value.replace(/\s+/g, ' ').trim();
  const exactText = (el) => normalize(el?.textContent || '');

  function hashString(str) {
    let hash = 2166136261;
    for (let i = 0; i < str.length; i += 1) {
      hash ^= str.charCodeAt(i);
      hash = Math.imul(hash, 16777619);
    }
    return (hash >>> 0).toString(36);
  }

  function cleanTitle(title) {
    return normalize(title)
      .replace(/\s*[（(][^）)]*(?:新题|保留题)[^）)]*[）)]\s*$/u, '')
      .trim();
  }

  function findContentRoot() {
    const selectors = [
      'article .post-content',
      'article .entry-content',
      '.post-content',
      '.entry-content',
      'article',
      'main'
    ];

    let best = document.body;
    let bestCount = 0;

    selectors.forEach((selector) => {
      document.querySelectorAll(selector).forEach((candidate) => {
        const count = [...candidate.querySelectorAll('h1,h2,h3,h4,h5,h6,p,strong')]
          .filter((el) => exactText(el) === 'Part 2').length;
        if (count > bestCount) {
          best = candidate;
          bestCount = count;
        }
      });
    });

    return best;
  }

  function parseTopics() {
    const root = findContentRoot();
    const blocks = [...root.querySelectorAll('h1,h2,h3,h4,h5,h6,p,ul,ol')];
    const topics = [];
    let section = null;
    let category = null;

    const isHeading = (el) => /^H[1-6]$/.test(el.tagName);

    for (let i = 0; i < blocks.length; i += 1) {
      const block = blocks[i];
      const text = exactText(block);

      if (isHeading(block)) {
        if (/^一、?新题/u.test(text)) {
          section = 'new';
          category = null;
        } else if (/^二、?保留题/u.test(text)) {
          section = 'retained';
          category = null;
        } else if (/^(三、?必考题|四、?补充报告题)/u.test(text)) {
          section = 'ignore';
          category = null;
        }

        if (text === 'Part 1') {
          category = null;
        } else if (CATEGORY_MAP.has(text)) {
          category = CATEGORY_MAP.get(text);
        }
      }

      if (text !== 'Part 2' || !['new', 'retained'].includes(section) || !category) {
        continue;
      }

      let title = '';
      for (let p = i - 1; p >= 0; p -= 1) {
        const candidate = exactText(blocks[p]);
        if (!candidate) continue;
        if (/^(Part 1|Part 2|Part 3|You should say:?)$/i.test(candidate)) continue;
        if (/^Practice wording standardized/i.test(candidate)) continue;
        if (CATEGORY_MAP.has(candidate)) break;
        if (/^(一、?新题|二、?保留题|三、?必考题|四、?补充报告题)/u.test(candidate)) break;
        if (candidate.length <= 100) {
          title = cleanTitle(candidate);
          break;
        }
      }

      let question = '';
      let cues = [];
      let foundCueLabel = false;

      for (let j = i + 1; j < blocks.length; j += 1) {
        const candidateBlock = blocks[j];
        const candidateText = exactText(candidateBlock);

        if (candidateText === 'Part 3' || candidateText === 'Part 2') break;

        if (/^You should say:?$/i.test(candidateText)) {
          foundCueLabel = true;
          continue;
        }

        if (!question && !foundCueLabel && candidateText && candidateBlock.tagName === 'P') {
          question = candidateText;
          continue;
        }

        if (foundCueLabel && /^(UL|OL)$/.test(candidateBlock.tagName)) {
          cues = [...candidateBlock.querySelectorAll(':scope > li')]
            .map((li) => exactText(li))
            .filter(Boolean);
          break;
        }
      }

      if (!title || !question || cues.length === 0) continue;

      const id = hashString(`${section}|${category}|${title}|${question}`);
      topics.push({ id, section, category, title, question, cues });
    }

    const unique = new Map();
    topics.forEach((topic) => unique.set(topic.id, topic));
    return [...unique.values()];
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) throw new Error('empty');
      const state = JSON.parse(raw);
      return {
        used: Array.isArray(state.used) ? state.used : [],
        history: Array.isArray(state.history) ? state.history : [],
        currentId: state.currentId || null,
        statusFilter: ['all', 'new', 'retained'].includes(state.statusFilter) ? state.statusFilter : 'all',
        categoryFilter: ['all', 'person', 'place', 'thing', 'event'].includes(state.categoryFilter) ? state.categoryFilter : 'all'
      };
    } catch {
      return {
        used: [],
        history: [],
        currentId: null,
        statusFilter: 'all',
        categoryFilter: 'all'
      };
    }
  }

  const topics = parseTopics();
  if (!topics.length) {
    console.warn('[IELTS Part 2 Picker] No Part 2 topics found on this page.');
    return;
  }

  const validIds = new Set(topics.map((topic) => topic.id));
  const state = loadState();
  state.used = state.used.filter((id) => validIds.has(id));
  state.history = state.history.filter((id) => validIds.has(id));
  if (!validIds.has(state.currentId)) state.currentId = null;

  const topicById = new Map(topics.map((topic) => [topic.id, topic]));

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // The picker still works if localStorage is unavailable.
    }
  }

  const style = document.createElement('style');
  style.textContent = `
    :root {
      --ielts-bg: #0b1020;
      --ielts-panel: #131a2c;
      --ielts-panel-2: #1b2439;
      --ielts-text: #f7f8fb;
      --ielts-muted: #aab4cc;
      --ielts-line: rgba(255,255,255,.12);
      --ielts-accent: #78d6ff;
      --ielts-accent-2: #9be6bc;
      --ielts-warn: #ffd17a;
      --ielts-danger: #ff9a9a;
      --ielts-shadow: 0 20px 60px rgba(0,0,0,.42);
    }

    #ielts-part2-launcher {
      position: fixed;
      right: 22px;
      bottom: 22px;
      z-index: 9998;
      border: 1px solid rgba(255,255,255,.16);
      border-radius: 999px;
      padding: 13px 18px;
      background: var(--ielts-panel);
      color: var(--ielts-text);
      font: 700 15px/1.2 -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
      box-shadow: 0 10px 28px rgba(0,0,0,.28);
      cursor: pointer;
      transition: transform .15s ease, background .15s ease;
    }
    #ielts-part2-launcher:hover { transform: translateY(-2px); background: var(--ielts-panel-2); }
    #ielts-part2-launcher:focus-visible,
    .ielts-picker button:focus-visible { outline: 3px solid var(--ielts-accent); outline-offset: 3px; }

    .ielts-picker[hidden] { display: none !important; }
    .ielts-picker {
      position: fixed;
      inset: 0;
      z-index: 9999;
      display: grid;
      grid-template-rows: auto auto 1fr auto;
      background: radial-gradient(circle at top, #172342 0%, var(--ielts-bg) 45%);
      color: var(--ielts-text);
      font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"PingFang SC","Microsoft YaHei",sans-serif;
      overflow: auto;
    }

    .ielts-picker__topbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      padding: 18px 24px 12px;
      border-bottom: 1px solid var(--ielts-line);
    }
    .ielts-picker__brand { display: flex; align-items: baseline; gap: 10px; flex-wrap: wrap; }
    .ielts-picker__brand strong { font-size: clamp(18px,2vw,24px); }
    .ielts-picker__brand span { color: var(--ielts-muted); font-size: 14px; }

    .ielts-picker__icon-btn,
    .ielts-picker__btn {
      appearance: none;
      border: 1px solid var(--ielts-line);
      background: var(--ielts-panel-2);
      color: var(--ielts-text);
      border-radius: 12px;
      cursor: pointer;
      font: inherit;
      font-weight: 700;
    }
    .ielts-picker__icon-btn { width: 44px; height: 44px; font-size: 20px; }
    .ielts-picker__icon-btn:hover,
    .ielts-picker__btn:hover { filter: brightness(1.1); }
    .ielts-picker__btn:disabled { opacity: .42; cursor: default; filter: none; }

    .ielts-picker__filters {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px 18px;
      flex-wrap: wrap;
      padding: 12px 20px 6px;
    }
    .ielts-picker__filter-group {
      display: flex;
      gap: 6px;
      padding: 5px;
      border: 1px solid var(--ielts-line);
      border-radius: 14px;
      background: rgba(255,255,255,.035);
    }
    .ielts-picker__filter {
      border: 0;
      border-radius: 10px;
      padding: 8px 11px;
      background: transparent;
      color: var(--ielts-muted);
      cursor: pointer;
      font: 700 13px/1.1 inherit;
    }
    .ielts-picker__filter.is-active { background: var(--ielts-panel-2); color: var(--ielts-text); }

    .ielts-picker__stage {
      width: min(1100px, calc(100% - 32px));
      margin: 14px auto;
      display: grid;
      place-items: center;
    }
    .ielts-picker__card {
      width: 100%;
      border: 1px solid var(--ielts-line);
      border-radius: 24px;
      background: rgba(19,26,44,.94);
      box-shadow: var(--ielts-shadow);
      padding: clamp(22px,4vw,44px);
    }
    .ielts-picker__meta {
      display: flex;
      gap: 8px;
      align-items: center;
      flex-wrap: wrap;
      margin-bottom: 18px;
    }
    .ielts-picker__chip {
      display: inline-flex;
      align-items: center;
      min-height: 28px;
      padding: 4px 9px;
      border-radius: 999px;
      background: rgba(120,214,255,.12);
      border: 1px solid rgba(120,214,255,.28);
      color: var(--ielts-accent);
      font-size: 12px;
      font-weight: 800;
      letter-spacing: .04em;
    }
    .ielts-picker__chip--retained {
      background: rgba(155,230,188,.11);
      border-color: rgba(155,230,188,.27);
      color: var(--ielts-accent-2);
    }
    .ielts-picker__remaining { margin-left: auto; color: var(--ielts-muted); font-size: 13px; font-weight: 700; }

    .ielts-picker__cn-title {
      margin: 0 0 12px;
      color: var(--ielts-text);
      font-size: clamp(24px,3vw,38px);
      line-height: 1.2;
      font-weight: 850;
    }
    .ielts-picker__question {
      margin: 0 0 24px;
      max-width: 980px;
      font-size: clamp(25px,3.4vw,44px);
      line-height: 1.22;
      font-weight: 800;
      letter-spacing: -.02em;
    }
    .ielts-picker__cue-label {
      margin: 0 0 10px;
      color: var(--ielts-muted);
      font-size: clamp(14px,1.4vw,18px);
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: .06em;
    }
    .ielts-picker__cues {
      display: grid;
      gap: 10px;
      margin: 0;
      padding-left: 1.3em;
      font-size: clamp(19px,2vw,27px);
      line-height: 1.38;
    }
    .ielts-picker__empty {
      padding: 48px 12px;
      text-align: center;
      color: var(--ielts-muted);
    }
    .ielts-picker__empty strong { display: block; margin-bottom: 8px; color: var(--ielts-text); font-size: 24px; }

    .ielts-picker__controls {
      position: sticky;
      bottom: 0;
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: center;
      gap: 12px;
      padding: 12px 20px 18px;
      background: linear-gradient(to top, var(--ielts-bg) 70%, rgba(11,16,32,0));
    }
    .ielts-picker__left,
    .ielts-picker__right { display: flex; align-items: center; gap: 8px; }
    .ielts-picker__right { justify-content: flex-end; }
    .ielts-picker__btn { min-height: 46px; padding: 10px 14px; }
    .ielts-picker__btn--primary {
      min-width: min(300px, 38vw);
      min-height: 56px;
      padding: 12px 22px;
      background: var(--ielts-accent);
      border-color: transparent;
      color: #07131d;
      font-size: 17px;
    }
    .ielts-picker__btn--danger { color: var(--ielts-danger); }

    .ielts-picker__timer {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 7px;
      border: 1px solid var(--ielts-line);
      border-radius: 14px;
      background: rgba(255,255,255,.035);
    }
    .ielts-picker__time {
      min-width: 66px;
      text-align: center;
      font-variant-numeric: tabular-nums;
      font-size: 20px;
      font-weight: 850;
    }
    .ielts-picker__time.is-low { color: var(--ielts-warn); }
    .ielts-picker__time.is-done { color: var(--ielts-danger); }

    .ielts-picker__toast {
      position: fixed;
      left: 50%;
      bottom: 92px;
      transform: translateX(-50%) translateY(12px);
      opacity: 0;
      pointer-events: none;
      padding: 10px 14px;
      border: 1px solid var(--ielts-line);
      border-radius: 12px;
      background: #202941;
      color: var(--ielts-text);
      box-shadow: var(--ielts-shadow);
      font-size: 14px;
      font-weight: 700;
      transition: opacity .18s ease, transform .18s ease;
    }
    .ielts-picker__toast.is-visible { opacity: 1; transform: translateX(-50%) translateY(0); }

    @media (max-width: 760px) {
      #ielts-part2-launcher { right: 14px; bottom: 14px; }
      .ielts-picker__topbar { padding: 14px 14px 10px; }
      .ielts-picker__filters { justify-content: flex-start; overflow-x: auto; flex-wrap: nowrap; padding: 10px 14px 4px; }
      .ielts-picker__filter-group { flex: 0 0 auto; }
      .ielts-picker__stage { width: min(100% - 20px, 1100px); margin: 8px auto; }
      .ielts-picker__card { border-radius: 18px; padding: 22px 18px; }
      .ielts-picker__remaining { width: 100%; margin-left: 0; }
      .ielts-picker__controls { grid-template-columns: 1fr; padding: 10px 10px 14px; }
      .ielts-picker__left, .ielts-picker__right { justify-content: center; flex-wrap: wrap; }
      .ielts-picker__btn--primary { grid-row: 1; min-width: 100%; width: 100%; }
    }

    @media (prefers-reduced-motion: reduce) {
      #ielts-part2-launcher,
      .ielts-picker__toast { transition: none; }
    }
  `;
  document.head.appendChild(style);

  const launcher = document.createElement('button');
  launcher.id = 'ielts-part2-launcher';
  launcher.type = 'button';
  launcher.setAttribute('aria-haspopup', 'dialog');
  launcher.textContent = '🎲 Random Part 2';

  const modal = document.createElement('section');
  modal.className = 'ielts-picker';
  modal.hidden = true;
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-label', 'IELTS Part 2 random topic picker');
  modal.innerHTML = `
    <div class="ielts-picker__topbar">
      <div class="ielts-picker__brand">
        <strong>IELTS Part 2 Picker</strong>
        <span>${topics.length} topics found on this page</span>
      </div>
      <button class="ielts-picker__icon-btn" type="button" data-action="close" aria-label="Close picker">×</button>
    </div>

    <div class="ielts-picker__filters" aria-label="Topic filters">
      <div class="ielts-picker__filter-group" data-filter-group="status">
        <button class="ielts-picker__filter" type="button" data-status="all">All</button>
        <button class="ielts-picker__filter" type="button" data-status="new">New</button>
        <button class="ielts-picker__filter" type="button" data-status="retained">Retained</button>
      </div>
      <div class="ielts-picker__filter-group" data-filter-group="category">
        <button class="ielts-picker__filter" type="button" data-category="all">All types</button>
        <button class="ielts-picker__filter" type="button" data-category="person">人物</button>
        <button class="ielts-picker__filter" type="button" data-category="place">地点</button>
        <button class="ielts-picker__filter" type="button" data-category="thing">事物</button>
        <button class="ielts-picker__filter" type="button" data-category="event">事件</button>
      </div>
    </div>

    <div class="ielts-picker__stage">
      <article class="ielts-picker__card" aria-live="polite">
        <div class="ielts-picker__meta">
          <span class="ielts-picker__chip" data-role="status-chip"></span>
          <span class="ielts-picker__chip" data-role="category-chip"></span>
          <span class="ielts-picker__remaining" data-role="remaining"></span>
        </div>
        <div data-role="topic-content"></div>
      </article>
    </div>

    <div class="ielts-picker__controls">
      <div class="ielts-picker__left">
        <button class="ielts-picker__btn" type="button" data-action="undo">↩ Undo</button>
        <button class="ielts-picker__btn ielts-picker__btn--danger" type="button" data-action="reset-used">Reset used</button>
      </div>

      <button class="ielts-picker__btn ielts-picker__btn--primary" type="button" data-action="next">🎲 Pick next topic</button>

      <div class="ielts-picker__right">
        <div class="ielts-picker__timer" aria-label="One minute preparation timer">
          <span class="ielts-picker__time" data-role="time">1:00</span>
          <button class="ielts-picker__btn" type="button" data-action="timer-toggle">Start</button>
          <button class="ielts-picker__btn" type="button" data-action="timer-reset">Reset</button>
        </div>
      </div>
    </div>

    <div class="ielts-picker__toast" data-role="toast" aria-live="polite"></div>
  `;

  document.body.append(launcher, modal);

  const els = {
    topicContent: modal.querySelector('[data-role="topic-content"]'),
    statusChip: modal.querySelector('[data-role="status-chip"]'),
    categoryChip: modal.querySelector('[data-role="category-chip"]'),
    remaining: modal.querySelector('[data-role="remaining"]'),
    undo: modal.querySelector('[data-action="undo"]'),
    next: modal.querySelector('[data-action="next"]'),
    resetUsed: modal.querySelector('[data-action="reset-used"]'),
    time: modal.querySelector('[data-role="time"]'),
    timerToggle: modal.querySelector('[data-action="timer-toggle"]'),
    toast: modal.querySelector('[data-role="toast"]')
  };

  let timerSeconds = 60;
  let timerHandle = null;
  let toastHandle = null;
  let previousBodyOverflow = '';

  function matchingTopics() {
    return topics.filter((topic) => {
      const statusOK = state.statusFilter === 'all' || topic.section === state.statusFilter;
      const categoryOK = state.categoryFilter === 'all' || topic.category === state.categoryFilter;
      return statusOK && categoryOK;
    });
  }

  function remainingTopics() {
    const used = new Set(state.used);
    return matchingTopics().filter((topic) => !used.has(topic.id));
  }

  function showToast(message) {
    els.toast.textContent = message;
    els.toast.classList.add('is-visible');
    clearTimeout(toastHandle);
    toastHandle = setTimeout(() => els.toast.classList.remove('is-visible'), 1800);
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  function renderFilters() {
    modal.querySelectorAll('[data-status]').forEach((button) => {
      button.classList.toggle('is-active', button.dataset.status === state.statusFilter);
      button.setAttribute('aria-pressed', button.dataset.status === state.statusFilter ? 'true' : 'false');
    });
    modal.querySelectorAll('[data-category]').forEach((button) => {
      button.classList.toggle('is-active', button.dataset.category === state.categoryFilter);
      button.setAttribute('aria-pressed', button.dataset.category === state.categoryFilter ? 'true' : 'false');
    });
  }

  function renderTopic() {
    const topic = topicById.get(state.currentId);
    const pool = matchingTopics();
    const remaining = remainingTopics();

    renderFilters();
    els.undo.disabled = state.history.length < 2;
    els.next.disabled = pool.length === 0;
    els.resetUsed.disabled = state.used.length === 0;

    if (!topic) {
      els.statusChip.hidden = true;
      els.categoryChip.hidden = true;
      els.remaining.textContent = pool.length ? `${remaining.length} of ${pool.length} available` : 'No matching topics';
      els.topicContent.innerHTML = `
        <div class="ielts-picker__empty">
          <strong>${pool.length ? 'Ready to pick a topic' : 'No topics match these filters'}</strong>
          <span>${pool.length ? 'Press “Pick next topic” to begin.' : 'Try another filter.'}</span>
        </div>`;
      return;
    }

    els.statusChip.hidden = false;
    els.categoryChip.hidden = false;
    els.statusChip.textContent = topic.section === 'new' ? 'NEW' : 'RETAINED';
    els.statusChip.classList.toggle('ielts-picker__chip--retained', topic.section === 'retained');
    els.categoryChip.textContent = CATEGORY_LABELS[topic.category] || topic.category;
    els.categoryChip.classList.remove('ielts-picker__chip--retained');
    els.remaining.textContent = `${remaining.length} of ${pool.length} left with current filters`;

    els.topicContent.innerHTML = `
      <h2 class="ielts-picker__cn-title">${escapeHtml(topic.title)}</h2>
      <p class="ielts-picker__question">${escapeHtml(topic.question)}</p>
      <p class="ielts-picker__cue-label">You should say:</p>
      <ul class="ielts-picker__cues">
        ${topic.cues.map((cue) => `<li>${escapeHtml(cue)}</li>`).join('')}
      </ul>`;
  }

  function resetTimer() {
    clearInterval(timerHandle);
    timerHandle = null;
    timerSeconds = 60;
    els.timerToggle.textContent = 'Start';
    renderTimer();
  }

  function renderTimer() {
    const minutes = Math.floor(timerSeconds / 60);
    const seconds = String(timerSeconds % 60).padStart(2, '0');
    els.time.textContent = `${minutes}:${seconds}`;
    els.time.classList.toggle('is-low', timerSeconds > 0 && timerSeconds <= 10);
    els.time.classList.toggle('is-done', timerSeconds === 0);
  }

  function beep() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioContext();
      const oscillator = ctx.createOscillator();
      const gain = ctx.createGain();
      oscillator.connect(gain);
      gain.connect(ctx.destination);
      oscillator.frequency.value = 740;
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
      oscillator.start();
      oscillator.stop(ctx.currentTime + 0.25);
    } catch {
      // Audio is optional.
    }
  }

  function toggleTimer() {
    if (timerHandle) {
      clearInterval(timerHandle);
      timerHandle = null;
      els.timerToggle.textContent = 'Resume';
      return;
    }

    if (timerSeconds === 0) timerSeconds = 60;
    els.timerToggle.textContent = 'Pause';
    timerHandle = setInterval(() => {
      timerSeconds -= 1;
      renderTimer();
      if (timerSeconds <= 0) {
        clearInterval(timerHandle);
        timerHandle = null;
        els.timerToggle.textContent = 'Start';
        beep();
      }
    }, 1000);
  }

  function pickNext() {
    const pool = matchingTopics();
    const available = remainingTopics();

    if (!pool.length) {
      showToast('No topics match the current filters.');
      return;
    }

    if (!available.length) {
      state.currentId = null;
      saveState();
      renderTopic();
      showToast('All matching topics have been used. Reset used topics to start again.');
      return;
    }

    let candidates = available;
    if (state.currentId && available.length > 1) {
      candidates = available.filter((topic) => topic.id !== state.currentId);
    }

    const topic = candidates[Math.floor(Math.random() * candidates.length)];
    state.currentId = topic.id;
    if (!state.used.includes(topic.id)) state.used.push(topic.id);
    state.history.push(topic.id);
    saveState();
    resetTimer();
    renderTopic();
  }

  function undo() {
    if (state.history.length < 2) {
      showToast('Nothing to undo yet.');
      return;
    }

    const removed = state.history.pop();
    state.used = state.used.filter((id) => id !== removed);
    state.currentId = state.history[state.history.length - 1] || null;
    saveState();
    resetTimer();
    renderTopic();
  }

  function resetUsed() {
    const count = state.used.length;
    if (!count) return;
    if (!window.confirm(`Reset ${count} used topic${count === 1 ? '' : 's'}?`)) return;
    state.used = [];
    state.history = [];
    state.currentId = null;
    saveState();
    resetTimer();
    renderTopic();
    showToast('Used-topic history cleared.');
  }

  function setFilter(kind, value) {
    state[kind] = value;
    saveState();
    renderTopic();
  }

  function openPicker() {
    previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    modal.hidden = false;
    renderTopic();
    requestAnimationFrame(() => modal.querySelector('[data-action="close"]').focus());
    if (!state.currentId) pickNext();
  }

  function closePicker() {
    modal.hidden = true;
    document.body.style.overflow = previousBodyOverflow;
    launcher.focus();
  }

  launcher.addEventListener('click', openPicker);

  modal.addEventListener('click', (event) => {
    const button = event.target.closest('button');
    if (!button) return;

    if (button.dataset.status) {
      setFilter('statusFilter', button.dataset.status);
      return;
    }
    if (button.dataset.category) {
      setFilter('categoryFilter', button.dataset.category);
      return;
    }

    switch (button.dataset.action) {
      case 'close': closePicker(); break;
      case 'next': pickNext(); break;
      case 'undo': undo(); break;
      case 'reset-used': resetUsed(); break;
      case 'timer-toggle': toggleTimer(); break;
      case 'timer-reset': resetTimer(); break;
      default: break;
    }
  });

  document.addEventListener('keydown', (event) => {
    if (modal.hidden) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      closePicker();
    } else if (event.key.toLowerCase() === 'n') {
      event.preventDefault();
      pickNext();
    } else if (event.key.toLowerCase() === 'u') {
      event.preventDefault();
      undo();
    } else if (event.code === 'Space' && !['INPUT', 'TEXTAREA', 'BUTTON'].includes(document.activeElement?.tagName)) {
      event.preventDefault();
      toggleTimer();
    }
  });

  saveState();
  renderTimer();
  renderTopic();
})();

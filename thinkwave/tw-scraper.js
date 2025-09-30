// == ThinkWave Roster Scraper v1.1 ==
// - Scrapes ALL subjects from the sidebar (same-origin).
// - For each subject, fetches the page (fallback to hidden iframe if needed).
// - Extracts roster: display, english (title-cased), family, given, key, studentId
// - Filters "Quick fill:" and tidies stray commas/spaces.
// - Downloads ONE JSON + copies to clipboard + caches to localStorage.

(async () => {
  // ---------- tiny overlay UI ----------
  const VERSION = 'tw-scraper v1.2';
  const ui = (() => {
    const el = document.createElement('div');
    el.style.cssText = 'position:fixed;right:12px;bottom:12px;z-index:2147483647;background:#111;color:#fff;padding:12px 14px;border-radius:10px;font:12px/1.4 -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Arial;box-shadow:0 6px 18px rgba(0,0,0,.3);max-width:360px;';
    el.innerHTML = '<div style="font-weight:600;margin-bottom:6px">ThinkWave Scraper</div><div id="twlog"></div><div id="twbar" style="height:6px;background:#444;border-radius:4px;overflow:hidden;margin-top:8px;"><div id="twfill" style="height:100%;width:0%;background:#4caf50;"></div></div>';
    document.body.appendChild(el);
    const logEl = el.querySelector('#twlog'); const fill = el.querySelector('#twfill');
    const line = (t, color) => { const d = document.createElement('div'); d.textContent = t; if (color) d.style.color = color; logEl.appendChild(d); };
    return {
      log: (m) => line(m),
      warn: (m) => line('⚠️ ' + m, '#ffd54f'),
      error: (m) => line('❌ ' + m, '#ef9a9a'),
      success: (m) => line('✅ ' + m, '#a5d6a7'),
      progress: (i, total, label) => { fill.style.width = ((i / total) * 100).toFixed(1) + '%'; if (label) line(label); },
      finish: (m) => { line('✔ ' + m); setTimeout(() => el.remove(), 10000); }
    };
  })();

  ui.log('Loaded ' + VERSION);

  const delay = (ms) => new Promise(r => setTimeout(r, ms));

  // ---------- helpers ----------
  const titleCase = s => s ? s.replace(/\S+/g, w => w[0].toUpperCase() + w.slice(1).toLowerCase()) : s;

  const tidyDisplay = s => (s || '')
      .replace(/[“”]/g, '"')       // smart double → straight
      .replace(/[‘’]/g, "'")       // smart single → straight
      .replace(/\s+/g, ' ')        // collapse spaces
      .replace(/\s*,"\s*/g, '", ') // fix quote+comma spacing (e.g., …",Name)
      .replace(/\s*,\s*$/,'')      // trim trailing comma
      .trim();

  function parseName(displayRaw) {
    const display = tidyDisplay(displayRaw);
  
    // 1) Try to extract English/nickname in quotes (double first, then single)
    //    We allow any content inside, but only treat as nickname when there is a closing quote.
    let english = null;
  
    // Double quotes: "…"
    let m = display.match(/"([^"]*?)"\s*$/);
    if (m) english = m[1].trim();
  
    // Single quotes: '…'  (avoid matching apostrophes inside words by anchoring to end)
    if (!english) {
      m = display.match(/'([^']*?)'\s*$/);
      if (m) english = m[1].trim();
    }
  
    // 2) Remove any trailing quoted nickname (double or single), anchored to the end
    //    This won't affect O'Connor because there's no closing quote at the end.
    let main = display
      .replace(/"[^"]*"\s*$/, '')  // strip trailing "…"
      .replace(/'[^']*'\s*$/, '')  // strip trailing '…'
      .trim();
  
    // 3) Some ESL lists look like: Last, first, English (no quotes)
    if (!english && (main.split(',').length === 3)) {
      const parts3 = main.split(',').map(s => s.trim());
      if (parts3[2] && /^[A-Za-z][A-Za-z\s.'-]*$/.test(parts3[2])) {
        english = titleCase(parts3[2]);
      }
    }
  
    // 4) Split family/given from the remaining "main"
    let family = null, given = null;
    if (main.includes(',')) {
      [family, given] = main.split(',', 2).map(s => s.trim());
    } else {
      const parts = main.split(/\s+/);
      family = parts.pop() || null;
      given  = parts.join(' ') || null;
    }
  
    // 5) Title-case english (if found)
    const englishTC = english ? titleCase(english) : null;
  
    // 6) Build key (letters+digits only)
    const keyBase = (family || '') + (given || '') + (englishTC || '');
    const key = keyBase.toLowerCase().replace(/[^a-z0-9]/g, '');
  
    return {
      displayRaw: display,      // original, untouched (keep for audit/debug)
      display: main,            // core without trailing "…" or '…'
      english: englishTC,
      family,
      given,
      key
    };

  }


  // ---------- subject discovery ----------
  function collectSubjects(root = document) {
    const sel = '#newList a.list-group-item, .list-group a.list-group-item, nav .list-group-item';
    let as = Array.from(root.querySelectorAll(sel)).filter(a => a.href);
    const subs = as.map(a => {
      const name = a.textContent.trim().replace(/\s+/g, ' ');
      const href = new URL(a.getAttribute('href'), location.href).href;
      const idm = (a.getAttribute('href') || '').match(/sec\d+/);
      return { id: idm ? idm[0] : name.toLowerCase().replace(/[^a-z0-9]+/g, '_'), name, url: href };
    });
    const seen = new Set();
    return subs.filter(s => { const k = s.id || s.url; if (seen.has(k)) return false; seen.add(k); return true; });
  }

  // ---------- HTML fetch & parse ----------
  async function fetchDoc(url) {
    const res = await fetch(url, { credentials: 'include' });
    const text = await res.text();
    return new DOMParser().parseFromString(text, 'text/html');
  }

  function extractRosterFromDoc(doc) {
    const anchors = Array.from(doc.querySelectorAll(
      'td.gradebookstudentname a, td.student-name a, a[href*="/st/"]'
    ));
    const rows = anchors.map(a => {
      const disp = a.textContent ? a.textContent.trim() : '';
      const href = a.getAttribute('href') || '';
      const idm = href.match(/\/st\/(\d+)\//);
      const studentId = idm ? idm[1] : null;
      return { disp, href, studentId };
    }).filter(r => r.disp && !/^Quick fill:?$/i.test(r.disp));

    // Map to normalized objects
    const roster = rows.map(r => {
      const p = parseName(r.disp);
      return { display: p.display, english: p.english, family: p.family, given: p.given, key: p.key, studentId: r.studentId };
    });

    // Stable de-dupe: keep DOM order; upgrade existing item if a later one has studentId
    const out = [];
    const posById  = new Map(); // studentId -> index in out
    const posByKey = new Map(); // key       -> index in out
    
    for (const st of roster) {
      if (st.studentId) {
        if (posById.has(st.studentId)) {
          // same studentId seen already — replace/merge (should be rare)
          const idx = posById.get(st.studentId);
          out[idx] = { ...out[idx], ...st, studentId: st.studentId };
          continue;
        }
        if (posByKey.has(st.key)) {
          // we saw the same logical person earlier without an id — upgrade in place
          const idx = posByKey.get(st.key);
          out[idx] = { ...out[idx], ...st, studentId: st.studentId };
          posById.set(st.studentId, idx);
          continue;
        }
        // first time we see this person, with id
        const idx = out.push(st) - 1;
        posById.set(st.studentId, idx);
        posByKey.set(st.key, idx);
      } else {
        // no studentId
        if (posByKey.has(st.key)) continue; // already have them
        const idx = out.push(st) - 1;
        posByKey.set(st.key, idx);
      }
    }
    
    return out;
    
  }

  // ---------- iframe fallback ----------
  function extractViaIframe(url) {
    return new Promise((resolve, reject) => {
      const ifr = document.createElement('iframe');
      ifr.style.display = 'none'; ifr.src = url; document.body.appendChild(ifr);
      const clean = (e) => { try { document.body.removeChild(ifr); } catch {} e ? reject(e) : resolve([]); };
      const timeout = setTimeout(() => clean(new Error('iframe timeout')), 30000);
      ifr.onload = () => {
        setTimeout(() => {
          try {
            const idoc = ifr.contentDocument;
            const scrollEl = idoc.scrollingElement || idoc.body;
            let prevH = 0, still = 0;
            const tick = () => {
              const h = scrollEl.scrollHeight;
              if (h > prevH) { prevH = h; scrollEl.scrollTop = h; still = 0; } else still++;
              const names = extractRosterFromDoc(idoc);
              if (names.length > 0 && still > 3) { clearTimeout(timeout); clean(); resolve(names); }
              else if (still > 8) { clearTimeout(timeout); clean(); resolve(names); }
              else setTimeout(tick, 350);
            };
            tick();
          } catch (e) { clearTimeout(timeout); clean(e); }
        }, 600);
      };
    });
  }

  async function scrapeSubject(subj, index, total) {
    ui.progress(index, total, `Fetching: ${subj.name}`);
    try {
      const doc = await fetchDoc(subj.url);
      let roster = extractRosterFromDoc(doc);
      if (roster.length === 0) {
        ui.warn(`No names in fetched HTML for "${subj.name}". Trying iframe…`);
        roster = await extractViaIframe(subj.url);
      }
      // unique keys per subject (suffix duplicates)
      const seen = new Set();
      roster.forEach(st => {
        let k = st.studentId || st.key || 'student';
        while (seen.has(k)) k = k + '-2';
        seen.add(k);
      });
      return { ...subj, sourceUrl: new URL(subj.url, location.href).pathname, roster };
    } catch (e) {
      ui.warn(`Failed: ${subj.name} — ${e.message}`);
      return { ...subj, sourceUrl: subj.url, roster: [], error: e.message };
    } finally { await delay(400); }
  }

  function downloadJSON(obj, filename) {
    const blob = new Blob([JSON.stringify(obj, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = filename;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 4000);
  }

  async function copyToClipboard(obj) {
    const data = JSON.stringify(obj, null, 2);
    if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(data);
  }

  // ---------- run ----------
  ui.log('Reading subjects from sidebar…');
  let subjects = collectSubjects(document);
  if (!subjects.length) { ui.error('No subjects found. Open a Gradebook page with the sidebar.'); return; }
  ui.log(`Found ${subjects.length} subjects.`);

  const out = { generatedAt: new Date().toISOString(), host: location.host, url: location.href, subjects: [] };
  for (let i = 0; i < subjects.length; i++) out.subjects.push(await scrapeSubject(subjects[i], i + 1, subjects.length));

  const fnameTS = (() => {
    const d = new Date();
    const pad = n => String(n).padStart(2,'0');
    return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}_${pad(d.getHours())}-${pad(d.getMinutes())}-${pad(d.getSeconds())}`;
  })();

  ui.log('Preparing JSON (download + clipboard)…');
  downloadJSON(out, `thinkwave_rosters_${fnameTS}.json`);
  try { await copyToClipboard(out); ui.success('Copied JSON to clipboard.'); } catch { ui.warn('Clipboard copy failed — download is saved.'); }
  localStorage.setItem('tw_rosters_v1', JSON.stringify(out));
  ui.finish('All subjects processed.');
})();

<script>
// == ThinkWave Roster Scraper v1.0 ==
// One click on a ThinkWave gradebook page → fetch all subjects → parse each page → download one JSON (and copy to clipboard).

(async () => {
  // ---------- small UI ----------
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

  const delay = (ms) => new Promise(r => setTimeout(r, ms));

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
    // de-dupe by id/url
    const seen = new Set();
    return subs.filter(s => { const k = s.id || s.url; if (seen.has(k)) return false; seen.add(k); return true; });
  }

  // ---------- HTML fetch & parse ----------
  async function fetchDoc(url) {
    const res = await fetch(url, { credentials: 'include' });
    const text = await res.text();
    return new DOMParser().parseFromString(text, 'text/html');
  }

  // ---------- name parsing ----------
  function normalizeStudent(display) {
    const englishMatch = display.match(/["“](.*?)["”]/);
    const english = englishMatch ? englishMatch[1].trim() : null;
    const main = display.replace(/["“].*$/, '').trim();

    let family = null, given = null;
    if (main.includes(',')) {
      [family, given] = main.split(',', 2).map(s => s.trim());
    } else {
      const parts = main.split(/\s+/); family = parts.pop() || null; given = parts.join(' ') || null;
    }

    const keyBase = (family || '') + (given || '') + (english || '');
    const key = keyBase.toLowerCase().replace(/[^a-z0-9]/g, '');
    return { display, english, family, given, key };
  }

  function extractRosterFromDoc(doc) {
    // Try several robust selectors
    let nodes = Array.from(doc.querySelectorAll(
      'td.gradebookstudentname a span, td.gradebookstudentname a, td.gradebookstudentname, td.student-name a, td.student-name, .gradebookstudentname a span'
    ));
    let names = nodes.map(n => (n.textContent || '').trim()).filter(Boolean);

    // Fallback: anchors to student pages
    if (names.length === 0) {
      const anchors = Array.from(doc.querySelectorAll('a[href*="/students/"], a[href*="/student/"]'));
      names = anchors.map(a => a.textContent.trim()).filter(Boolean);
    }

    // De-dupe & clean obvious non-names
    names = names.filter((t, i) =>
      names.indexOf(t) === i && !/^(Overall|Quick fill|Add Assignment)$/i.test(t)
    );

    return names.map(normalizeStudent);
  }

  // ---------- iframe fallback (if fetch HTML doesn’t contain rendered roster) ----------
  function extractViaIframe(url, uiLabel) {
    return new Promise((resolve, reject) => {
      const ifr = document.createElement('iframe');
      ifr.style.display = 'none';
      ifr.src = url;
      document.body.appendChild(ifr);

      const kill = (e) => { try { document.body.removeChild(ifr); } catch {} e ? reject(e) : resolve([]); };
      const timeout = setTimeout(() => kill(new Error('iframe timeout')), 30000);

      ifr.onload = () => {
        setTimeout(() => {
          try {
            const idoc = ifr.contentDocument;
            // auto-scroll to load virtualized rows (if any)
            const scrollEl = idoc.scrollingElement || idoc.body;
            let prevH = 0, still = 0;

            const tick = () => {
              const h = scrollEl.scrollHeight;
              if (h > prevH) { prevH = h; scrollEl.scrollTop = h; still = 0; }
              else still++;

              const names = extractRosterFromDoc(idoc);
              if (names.length > 0 && still > 3) { clearTimeout(timeout); kill(); resolve(names); }
              else if (still > 8) { clearTimeout(timeout); kill(); resolve(names); }
              else setTimeout(tick, 350);
            };
            tick();
          } catch (e) { clearTimeout(timeout); kill(e); }
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
      // ensure unique keys per subject
      const seen = new Map();
      roster.forEach(st => {
        let k = st.key || 'student';
        if (seen.has(k)) { const n = seen.get(k) + 1; st.key = `${k}-${n}`; seen.set(k, n); }
        else seen.set(k, 1);
      });
      return { ...subj, sourceUrl: new URL(subj.url, location.href).pathname, roster };
    } catch (e) {
      ui.warn(`Failed: ${subj.name} — ${e.message}`);
      return { ...subj, sourceUrl: subj.url, roster: [], error: e.message };
    } finally {
      await delay(500);
    }
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
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(data);
    } else {
      const ta = document.createElement('textarea');
      ta.value = data; document.body.appendChild(ta); ta.select();
      document.execCommand('copy'); document.body.removeChild(ta);
    }
  }

  // ---------- run ----------
  ui.log('Reading subjects from sidebar…');
  let subjects = collectSubjects(document);
  if (!subjects.length) { ui.error('No subjects found. Open a Gradebook page with the sidebar.'); return; }
  ui.log(`Found ${subjects.length} subjects.`);

  const out = { generatedAt: new Date().toISOString(), host: location.host, url: location.href, subjects: [] };
  for (let i = 0; i < subjects.length; i++) {
    const entry = await scrapeSubject(subjects[i], i + 1, subjects.length);
    out.subjects.push({
      id: entry.id, name: entry.name, sourceUrl: entry.sourceUrl, roster: entry.roster, error: entry.error
    });
  }

  ui.log('Preparing JSON (download + clipboard)…');
  const fname = 'thinkwave_rosters_' + new Date().toISOString().slice(0, 10) + '.json';
  downloadJSON(out, fname);
  try { await copyToClipboard(out); ui.success('Copied JSON to clipboard.'); } catch { ui.warn('Clipboard copy failed — download is saved.'); }
  localStorage.setItem('tw_rosters_v1', JSON.stringify(out));
  ui.finish('All subjects processed.');
})();
</script>

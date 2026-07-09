# pH-enomenal Chemistry

**The pH-natics** — an interactive site for the Victoria School Sec 3 Chemistry graded assignment *"pH-enomenal Chemistry: The Ultimate Indicator Challenge."*

Static site: plain HTML5 + modern CSS + vanilla ES6 JavaScript. No dependencies, no server, no API keys, no build step. Works offline once loaded.

The JavaScript is written as plain classic `<script>` files, not ES modules. Chrome (and most browsers) refuse to load `type="module"` scripts at all over a bare `file://` URL — that's a stricter block than just `fetch()` failing, so a module-based build would go blank the moment someone double-clicks `index.html` instead of running a server. Classic scripts don't have that restriction, so this works either way.

## Preview locally

**Option A — just open `index.html`:** double-click it, or drag it into a browser. Works directly — no server needed.

**Option B — local server:**

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`. Only real difference from Option A: `/data/*.json` loads via `fetch()` instead of the `js/data.js` fallback (see below), which is otherwise invisible.

**Why there's a fallback at all:** `fetch()` of local JSON files is *also* blocked over `file://` in most browsers (a separate restriction from the module one above). So even with the classic-script fix, `/data/*.json` still can't load via `fetch()` when the page is opened directly. `js/data.js` carries the same content as `/data/*.json` inlined into a plain script; `main.js` tries `fetch()` first and falls back to loading `js/data.js` if that fails. If you edit anything in `/data/*.json`, regenerate `js/data.js` to match — see "Editing content" below.

## Deploy

**Netlify (drag-and-drop):**

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag the whole `pH-enomenal-website` folder onto the page.
3. Netlify gives you a live URL immediately. Copy it into Google Classroom.

**GitHub Pages:**

1. Push this folder to a GitHub repo.
2. Repo Settings → Pages → Deploy from branch → pick `main` and `/ (root)`.
3. GitHub gives you a `https://<username>.github.io/<repo>/` URL after a minute or two.

Either way, nothing needs building — it's the same static files either way.

## Project structure

```
index.html          all page sections, sticky nav
css/styles.css       house styles (palette derived from the calibration data itself)
css/print.css        isolates the reference card for Print / Save
js/main.js           data loading, nav, scroll reveal, section rendering
js/color.js          sRGB<->LAB, CIEDE2000/CIE76 delta-E, pH interpolation
js/slider.js         the pH slider (Section 5.2)
js/estimator.js      the AI pH Estimator (Section 6)
js/data.js           inlined fallback copy of /data/*.json (file:// preview)
data/*.json          all content and calibration data
assets/              favicon + Live Lab Practicum photo slots
```

## A note on the dataset

This build is the maximum-AI arm of a class experiment comparing AI-assisted and human-produced coursework (see the footer note on the live site). The calibration and practicum numbers throughout are illustrative and AI-generated for the demo, grounded in real indicator chemistry (how anthocyanins, curcumin and betalains each respond to pH) but **not real lab readings**. Swap in real data from the group's own trials before treating this as a submission of fact.

All chemistry copy on the site is written at Sec 3 O-level syllabus level (pH scale, acids producing H+ ions, alkalis producing OH- ions, indicators changing colour with pH) — deliberately not A-level/university vocabulary, since this is a real Sec 3 student's submission.

## Owner to-do before submitting

- [ ] Confirm/replace the group name (currently "The pH-natics" — alternates "Litmus League", "Anthocyanin Alliance", "The Indicators" are listed in `groupNameAlternates` in `data/members.json`; `groupName` is a single field, easy to swap).
- [ ] Confirm the plant-to-member assignment (currently Peiyu = red cabbage, Kang Jun = turmeric, Josiah = beetroot). Swap freely in `data/members.json` and `data/calibration.json`.
- [ ] Drop real Live Lab Practicum photos into `/assets` as `practicum-U1.jpg` … `practicum-U5.jpg` — the `<img>` slots are already wired up in the practicum cards and will replace the colour-swatch placeholders automatically once the files exist.
- [ ] Insert three verified, checkable journal references for the literature review cards in `data/members.json` (each is currently `[insert verified reference]` — do not invent authors or DOIs).
- [ ] **Page 5 of the source assignment brief was missing** when this was built, so the exact required Results/Discussion sub-heading names may not match the rubric exactly. The site covers the standard scientific-method structure (Introduction, Science, Group Optimisation, Reference Card, Practicum, AI Estimator, Discussion) — cross-check against page 5 and rename headings if needed.
- [ ] Deploy (see above) and paste the URL into Google Classroom.

## Editing content

Everything text-based lives in `/data/*.json` — no HTML/JS editing needed for wording changes:

- `members.json` — group name, member names/plants, and each member's literature review card. Also still carries each member's planning/analysis/evaluation write-up (aim, hypothesis, procedure, safety, evaluation) from the original Individual Investigations section — that section was removed from the page, but the content is kept here in case it's wanted again; nothing currently renders it.
- `calibration.json` — individual plant data tables (no longer rendered on the page, kept for reference) + the master 3:1:1 mixture ladder that drives the slider, reference card and AI estimator.
- `practicum.json` — the five Live Lab Practicum unknowns.
- `content.json` — hero, introduction, science explainer, group optimisation narrative, discussion/conclusion, footer note.

After editing any `/data/*.json` file, regenerate `js/data.js` so the `file://` fallback stays in sync, from the project root (requires Node.js):

```bash
node -e "
const fs = require('fs');
const files = ['members', 'calibration', 'practicum', 'content'];
const data = Object.fromEntries(files.map(f => [f, JSON.parse(fs.readFileSync('data/' + f + '.json'))]));
const body = files.map(f => '  ' + f + ': ' + JSON.stringify(data[f], null, 2).replace(/\n/g, '\n  ') + ',').join('\n');
const out = '// data.js — inlined fallback copy of /data/*.json, used only when the ordinary\n' +
  '// fetch() of local JSON files fails (typically previewing over a bare file://\n' +
  '// URL, where script type=module loading itself is blocked — see color.js).\n' +
  '// Plain classic script (not an ES module), loaded on demand by main.js.\n' +
  '// Generated from the JSON files; keep them in sync if you edit either.\n' +
  '// Regeneration command: see README.md \"Editing content\".\n\n' +
  '(function (global) {\n  global.PH_DATA_FALLBACK = {\n' + body + '\n  };\n})(typeof window !== \"undefined\" ? window : globalThis);\n';
fs.writeFileSync('js/data.js', out);
console.log('wrote js/data.js');
"
```

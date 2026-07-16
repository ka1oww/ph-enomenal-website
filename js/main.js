// main.js — nav, scroll reveal, and wiring of all data-driven sections.
//
// Plain classic script (not an ES module): Chrome refuses to load
// type="module" scripts at all over file://, which would break the site for
// anyone who just double-clicks index.html instead of running a local server.
// color.js / slider.js / estimator.js are classic scripts too, loaded before
// this one (see index.html) and exposed as PhColor / PhSlider / PhEstimator
// on window.

(function () {
  const { rgbToHex, classifyBand, bandClassName } = window.PhColor;
  const { initSlider } = window.PhSlider;
  const { initEstimator } = window.PhEstimator;

// ---------- data loading ----------

async function loadJSON(path) {
  const res = await fetch(path);
  if (!res.ok) throw new Error(`Failed to fetch ${path}: ${res.status}`);
  return res.json();
}

// Loads js/data.js as a classic <script> tag and resolves once it has set
// window.PH_DATA_FALLBACK. A dynamic import() would hit the same file://
// module-loading block as main.js itself, so this uses plain script injection.
function loadFallbackScript() {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'js/data.js';
    script.onload = () => resolve(window.PH_DATA_FALLBACK);
    script.onerror = () => reject(new Error('Failed to load js/data.js fallback'));
    document.head.appendChild(script);
  });
}

async function loadData() {
  const paths = {
    members: 'data/members.json',
    calibration: 'data/calibration.json',
    practicum: 'data/practicum.json',
    content: 'data/content.json',
  };
  try {
    const entries = await Promise.all(
      Object.entries(paths).map(async ([key, path]) => [key, await loadJSON(path)])
    );
    return Object.fromEntries(entries);
  } catch (err) {
    // fetch() of local JSON is blocked under file:// in most browsers.
    // Fall back to the inlined copy in data.js, kept in sync with /data/*.json.
    console.warn('fetch() of /data/*.json failed (likely a file:// preview) — using data.js fallback.', err);
    return loadFallbackScript();
  }
}

// ---------- small render helpers ----------

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'class') node.className = v;
    else if (k === 'html') node.innerHTML = v;
    else if (k.startsWith('on') && typeof v === 'function') node.addEventListener(k.slice(2), v);
    else node.setAttribute(k, v);
  }
  for (const child of [].concat(children)) {
    if (child == null) continue;
    node.appendChild(typeof child === 'string' ? document.createTextNode(child) : child);
  }
  return node;
}

function setText(id, text) {
  const node = document.getElementById(id);
  if (node) node.textContent = text;
}

function bandChip(ph) {
  const band = classifyBand(ph);
  return el('span', { class: `band-chip ${bandClassName(band)}` }, band);
}

// ---------- hero ----------

function renderHero(data) {
  const { members, content } = data;
  setText('navGroupName', members.groupName);
  setText('heroGroupName', members.groupName);
  setText('heroTitle', content.hero.title);
  setText('heroTheme', content.hero.themeLine);
  setText('heroScrollCue', content.hero.scrollCue);

  const list = document.getElementById('heroMembers');
  list.replaceChildren(...members.members.map((m) => el('li', {}, m.name)));
}

// ---------- introduction + literature ----------

function renderIntroduction(data) {
  const { content, members } = data;
  const paraWrap = document.getElementById('introParagraphs');
  paraWrap.replaceChildren(...content.introduction.paragraphs.map((p) => el('p', {}, p)));
  setText('literatureCardsHeading', content.introduction.literatureCardsHeading);

  const cards = document.getElementById('literatureCards');
  cards.replaceChildren(
    ...members.members.map((m) =>
      el('div', { class: 'lit-card' }, [
        el('p', { class: 'lit-card__member' }, `${m.name} (${m.plant})`),
        el('h4', { class: 'lit-card__focus' }, m.literatureReview.focus),
        el('p', { class: 'lit-card__summary' }, m.literatureReview.summary),
        el('p', { class: 'lit-card__citation' }, m.literatureReview.citation),
      ])
    )
  );
}

// ---------- science ----------

function renderScience(data) {
  const { content } = data;
  setText('scienceSubheading', content.science.subheading);
  const wrap = document.getElementById('scienceExplainer');
  wrap.replaceChildren(...content.science.explainer.map((p) => el('p', { html: p })));
}

// ---------- individual investigation tabs ----------
// Internal subheadings ("Materials & Methods" / "Results" / "Discussion") use
// the exact wording from the teacher's checklist, so a grader scanning for
// those terms can find them without hunting.

function planBlock(heading, node) {
  return el('div', { class: 'plan-block' }, [el('h4', {}, heading), node]);
}

function listOf(items) {
  return el(
    'ul',
    {},
    items.map((i) => el('li', {}, i))
  );
}

function orderedListOf(items) {
  return el(
    'ol',
    {},
    items.map((i) => el('li', {}, i))
  );
}

function renderMemberDataTable(points) {
  return el('div', { class: 'data-table-wrap' }, [
    el('table', { class: 'data-table' }, [
      el('thead', {}, el('tr', {}, [el('th', {}, 'pH'), el('th', {}, 'Swatch'), el('th', {}, 'Colour name'), el('th', {}, 'RGB')])),
      el(
        'tbody',
        {},
        points.map((p) =>
          el('tr', {}, [
            el('td', {}, String(p.ph)),
            el('td', {}, el('span', { class: 'swatch-chip', style: `background:${rgbToHex(p.rgb)}` })),
            el('td', {}, p.colourName),
            el('td', { class: 'mono' }, `${p.rgb[0]}, ${p.rgb[1]}, ${p.rgb[2]}`),
          ])
        )
      ),
    ]),
  ]);
}

function renderPhotoGallery(photos, size) {
  if (!photos || !photos.length) {
    return el('p', { class: 'hint' }, 'Photos pending.');
  }
  const galleryClass = size === 'large' ? 'photo-gallery photo-gallery--large' : 'photo-gallery';
  return el(
    'div',
    { class: galleryClass },
    photos.map((p) =>
      el('figure', { class: 'photo-gallery__item' }, [
        el('img', { src: p.src, alt: p.caption, loading: 'lazy' }),
        el('figcaption', {}, p.caption),
      ])
    )
  );
}

function renderTabPanel(member, calibration) {
  const points = calibration.individual[member.plantKey]?.points || [];
  const planning = member.planning;

  const materialsMethods = el('div', {}, [
    el('h3', { class: 'section__subheading', style: 'margin-top:0' }, 'Materials & Methods'),
    planning.materials ? planBlock('Materials', listOf(planning.materials)) : null,
    planBlock('Aim', el('p', {}, planning.aim)),
    planBlock('Hypothesis', el('p', {}, planning.hypothesis)),
    planBlock(
      'Variables',
      el('div', {}, [
        el('p', {}, [el('strong', {}, 'Independent: '), planning.variables.independent]),
        el('p', {}, [el('strong', {}, 'Dependent: '), planning.variables.dependent]),
        el('p', {}, [el('strong', {}, 'Controlled:')]),
        listOf(planning.variables.controlled),
      ])
    ),
    planBlock('Procedure', orderedListOf(planning.procedure)),
    planBlock('Safety', listOf(planning.safety)),
    planBlock('Assumptions', listOf(planning.assumptions)),
  ]);

  const results = el('div', {}, [
    el('h3', { class: 'section__subheading', style: 'margin-top:0' }, 'Results'),
    points.length ? renderMemberDataTable(points) : null,
    el('p', { html: member.analysis }),
    el('h4', {}, 'Photos'),
    renderPhotoGallery(member.photos),
  ]);

  const discussion = el('div', {}, [
    el('h3', { class: 'section__subheading' }, 'Discussion'),
    el('div', { class: 'evaluation-box' }, [
      el('p', {}, [el('strong', {}, 'Strengths')]),
      listOf(member.evaluation.strengths),
      el('p', { style: 'margin-top:0.8em' }, [el('strong', {}, 'Limitations')]),
      listOf(member.evaluation.limitations),
      el('p', { style: 'margin-top:0.8em' }, [el('strong', {}, 'Improvement: ')]),
      el('p', {}, member.evaluation.improvement),
    ]),
  ]);

  return el('div', { class: 'tabpanel__grid' }, [materialsMethods, el('div', {}, [results, discussion])]);
}

function setupTabKeyboardNav(tabs) {
  tabs.forEach((tab, i) => {
    tab.addEventListener('keydown', (e) => {
      let next = null;
      if (e.key === 'ArrowRight') next = (i + 1) % tabs.length;
      else if (e.key === 'ArrowLeft') next = (i - 1 + tabs.length) % tabs.length;
      else if (e.key === 'Home') next = 0;
      else if (e.key === 'End') next = tabs.length - 1;
      if (next !== null) {
        e.preventDefault();
        tabs[next].click();
        tabs[next].focus();
      }
    });
  });
}

function renderTabs(data) {
  const { members, calibration } = data;
  const tabList = document.getElementById('tabList');
  const panelsWrap = document.getElementById('tabPanels');
  if (!tabList || !panelsWrap) return;

  const tabs = [];
  const panels = [];

  members.members.forEach((member, i) => {
    const tabId = `tab-${member.plantKey}`;
    const panelId = `panel-${member.plantKey}`;

    const tab = el(
      'button',
      {
        role: 'tab',
        id: tabId,
        class: 'tab',
        'aria-selected': i === 0 ? 'true' : 'false',
        'aria-controls': panelId,
        tabindex: i === 0 ? '0' : '-1',
      },
      `${member.name} (${member.plant})`
    );
    tab.addEventListener('click', () => {
      tabs.forEach((t, j) => {
        const selected = t === tab;
        t.setAttribute('aria-selected', String(selected));
        t.tabIndex = selected ? 0 : -1;
        panels[j].hidden = !selected;
      });
    });

    const panel = el(
      'div',
      {
        role: 'tabpanel',
        id: panelId,
        'aria-labelledby': tabId,
        hidden: i === 0 ? null : '',
      },
      renderTabPanel(member, calibration)
    );
    if (i === 0) panel.removeAttribute('hidden');
    else panel.setAttribute('hidden', '');

    tabs.push(tab);
    panels.push(panel);
  });

  tabList.replaceChildren(...tabs);
  panelsWrap.replaceChildren(...panels);
  setupTabKeyboardNav(tabs);
}

// ---------- group optimisation ----------

function renderOptimisation(data) {
  const { content, calibration } = data;
  const wrap = document.getElementById('optimisationNarrative');
  wrap.replaceChildren(...content.groupOptimisation.narrative.map((p) => el('p', {}, p)));

  const ratioGrid = document.getElementById('ratioComparison');
  ratioGrid.replaceChildren(
    ...calibration.mixture.ratioTested.map((r) => {
      const isWinner = r.verdict.toLowerCase().includes('winner');
      return el('div', { class: `ratio-card${isWinner ? ' is-winner' : ''}` }, [
        isWinner ? el('span', { class: 'ratio-card__badge' }, 'Winner') : null,
        el('div', { class: 'ratio-card__label mono' }, r.ratio),
        el('div', { class: 'ratio-card__verdict' }, r.verdict),
      ]);
    })
  );

  const photosWrap = document.getElementById('optimisationPhotos');
  if (photosWrap) photosWrap.replaceChildren(renderPhotoGallery(content.groupOptimisation.photos, 'large'));
}

// ---------- reference card ----------

function renderReferenceCard(data) {
  const { calibration, members } = data;
  setText('referenceCardTitle', `Master Scale: ${calibration.mixture.ratioLabel}`);
  setText('referenceCardGroup', members.groupName);

  const ladder = document.getElementById('referenceCardLadder');
  ladder.replaceChildren(
    ...calibration.mixture.points.map((p) =>
      el('div', { class: 'ladder-block' }, [
        el('div', { class: 'ladder-block__swatch', style: `background:${rgbToHex(p.rgb)}` }),
        el('div', { class: 'ladder-block__ph' }, `pH ${p.ph}`),
        el('div', { class: 'ladder-block__band' }, p.band),
        el('div', { class: 'ladder-block__hex mono' }, rgbToHex(p.rgb).toUpperCase()),
      ])
    )
  );

  document.getElementById('printBtn')?.addEventListener('click', () => window.print());
}

// ---------- practicum ----------

function renderPracticum(data) {
  const { practicum } = data;
  const grid = document.getElementById('practicumGrid');

  grid.replaceChildren(
    ...practicum.unknowns.map((u) => {
      const card = el(
        'div',
        { class: 'practicum-card', role: 'button', tabindex: '0', 'aria-pressed': 'false', 'aria-label': `Unknown ${u.id}, tap to reveal identity` },
        el('div', { class: 'practicum-card__inner' }, [
          el('div', { class: 'practicum-card__face practicum-card__face--front' }, [
            el('span', { class: 'practicum-card__id mono' }, u.id),
            el('img', {
              class: 'practicum-photo',
              src: u.image,
              alt: `Photo of unknown ${u.id} test solution`,
              style: 'display:none',
              onerror: function () {
                this.style.display = 'none';
              },
              onload: function () {
                this.style.display = 'block';
              },
            }),
            el('div', { class: 'practicum-card__swatch', style: `background:${rgbToHex(u.rgb)}` }),
            el('span', { class: 'practicum-card__caption' }, `${u.observedColour} (colour swatch, photo placeholder)`),
          ]),
          el('div', { class: 'practicum-card__face practicum-card__face--back' }, [
            el('span', { class: 'practicum-card__id mono' }, u.id),
            el('div', { class: 'practicum-card__identity' }, u.identity),
            el('div', { class: 'practicum-card__ph' }, `Estimated pH ${u.estimatedPh}`),
            bandChip(parseFloat(u.estimatedPh.replace('~', ''))),
          ]),
        ])
      );

      function toggle() {
        const flipped = card.classList.toggle('is-flipped');
        card.setAttribute('aria-pressed', String(flipped));
      }
      card.addEventListener('click', toggle);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggle();
        }
      });

      return card;
    })
  );

  const body = document.getElementById('practicumResultsBody');
  body.replaceChildren(
    ...practicum.unknowns.map((u) =>
      el('tr', {}, [
        el('td', { class: 'mono' }, u.id),
        el('td', {}, u.observedColour),
        el('td', { class: 'mono' }, u.estimatedPh),
        el('td', {}, bandChip(parseFloat(u.estimatedPh.replace('~', '')))),
        el('td', {}, u.identity),
      ])
    )
  );
}

// ---------- discussion ----------

function renderDiscussion(data) {
  const { content } = data;
  setText('discussionSynthesis', content.discussion.synthesis);
  document.getElementById('discussionStrengths').replaceChildren(...content.discussion.strengths.map((s) => el('li', {}, s)));
  document.getElementById('discussionLimitations').replaceChildren(...content.discussion.limitations.map((s) => el('li', {}, s)));
  document.getElementById('discussionRecommendations').replaceChildren(...content.discussion.recommendations.map((s) => el('li', {}, s)));
}

// ---------- footer ----------

function renderFooter(data) {
  setText('aboutBuildNote', data.content.aboutBuild);
}

// ---------- nav ----------

function initNav() {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  links.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      links.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    })
  );
}

// ---------- scroll reveal ----------

function initScrollReveal() {
  const targets = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    targets.forEach((t) => t.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  targets.forEach((t) => observer.observe(t));
}

// ---------- init ----------

async function init() {
  const data = await loadData();

  renderHero(data);
  renderIntroduction(data);
  renderScience(data);
  renderTabs(data);
  renderOptimisation(data);
  renderReferenceCard(data);
  renderPracticum(data);
  renderDiscussion(data);
  renderFooter(data);

  initNav();
  initScrollReveal();
  initSlider(data.calibration);
  initEstimator(data.calibration, data.practicum);
}

init();

})();

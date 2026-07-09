// estimator.js — the AI pH Estimator (Section 6). Fully client-side: an
// uploaded or sample image is drawn to a canvas, a user-selected region is
// pixel-sampled with outlier trimming, and the resulting colour is matched
// against the mixture calibration via color.js's CIEDE2000 interpolation.
//
// Plain classic script (not an ES module) — see color.js for why.

(function (global) {
  const { interpolatePh, rgbToHex, bandClassName } = global.PhColor;

function trimmedAverageRgb(imageData) {
  const { data, width, height } = imageData;
  const n = width * height;
  const pixels = [];
  for (let i = 0; i < n; i++) {
    const o = i * 4;
    const a = data[o + 3];
    if (a < 10) continue; // skip fully transparent pixels
    const r = data[o];
    const g = data[o + 1];
    const b = data[o + 2];
    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    pixels.push([r, g, b, luminance]);
  }
  if (!pixels.length) return [0, 0, 0];

  pixels.sort((p, q) => p[3] - q[3]);
  const cut = Math.floor(pixels.length * 0.1);
  const usable = pixels.length - 2 * cut >= 1 ? pixels.slice(cut, pixels.length - cut) : pixels;

  const sum = usable.reduce(
    (acc, p) => {
      acc[0] += p[0];
      acc[1] += p[1];
      acc[2] += p[2];
      return acc;
    },
    [0, 0, 0]
  );
  return [Math.round(sum[0] / usable.length), Math.round(sum[1] / usable.length), Math.round(sum[2] / usable.length)];
}

// Generates a stand-in "photo" for a U1-U5 sample so the estimator has
// something plausible to sample from before real practicum photos are
// dropped into /assets. Adds gentle noise and a few glare/shadow pixels so
// the outlier-trimming step in Section 6 step 3 has something to do.
function drawSyntheticSwatch(ctx, w, h, [r, g, b]) {
  const imageData = ctx.createImageData(w, h);
  const data = imageData.data;
  for (let i = 0; i < w * h; i++) {
    const o = i * 4;
    const noise = (Math.random() - 0.5) * 14;
    data[o] = Math.min(255, Math.max(0, r + noise));
    data[o + 1] = Math.min(255, Math.max(0, g + noise));
    data[o + 2] = Math.min(255, Math.max(0, b + noise));
    data[o + 3] = 255;
  }
  // scatter a handful of glare (near-white) and shadow (near-black) outlier pixels
  const outliers = Math.round(w * h * 0.03);
  for (let k = 0; k < outliers; k++) {
    const x = Math.floor(Math.random() * w);
    const y = Math.floor(Math.random() * h);
    const o = (y * w + x) * 4;
    const glare = Math.random() > 0.5;
    const v = glare ? 245 : 12;
    data[o] = v;
    data[o + 1] = v;
    data[o + 2] = v;
  }
  ctx.putImageData(imageData, 0, 0);
}

function initEstimator(calibration, practicum) {
  const points = calibration.mixture.points;

  const fileInput = document.getElementById('estimatorFile');
  const samplesWrap = document.getElementById('estimatorSamples');
  const workspace = document.getElementById('estimatorWorkspace');
  const canvas = document.getElementById('estimatorCanvas');
  const canvasWrap = canvas?.parentElement;
  const selectionEl = document.getElementById('estimatorSelection');
  const sampleBtn = document.getElementById('estimatorSampleBtn');
  const outputWrap = document.getElementById('estimatorOutput');

  if (!canvas || !canvasWrap) return;
  const ctx = canvas.getContext('2d');

  let selection = { left: 0, top: 0, w: 0, h: 0 };
  let dragging = false;
  let dragStart = null;

  function positionSelection() {
    selectionEl.style.left = `${selection.left}px`;
    selectionEl.style.top = `${selection.top}px`;
    selectionEl.style.width = `${selection.w}px`;
    selectionEl.style.height = `${selection.h}px`;
  }

  function resetDefaultSelection() {
    const rect = canvasWrap.getBoundingClientRect();
    const size = Math.max(24, Math.min(60, rect.width * 0.35, rect.height * 0.35));
    selection = { left: (rect.width - size) / 2, top: (rect.height - size) / 2, w: size, h: size };
    positionSelection();
  }

  function showImageOnCanvas(draw, naturalW, naturalH) {
    const maxW = 480;
    const scale = naturalW > maxW ? maxW / naturalW : 1;
    canvas.width = Math.round(naturalW * scale);
    canvas.height = Math.round(naturalH * scale);
    draw(canvas.width, canvas.height);
    workspace.hidden = false;
    outputWrap.hidden = true;
    resetDefaultSelection();
  }

  fileInput?.addEventListener('change', () => {
    const file = fileInput.files?.[0];
    if (!file) return;
    const img = new Image();
    img.onload = () => {
      showImageOnCanvas((w, h) => ctx.drawImage(img, 0, 0, w, h), img.naturalWidth, img.naturalHeight);
      URL.revokeObjectURL(img.src);
    };
    img.src = URL.createObjectURL(file);
  });

  function renderSampleButtons() {
    if (!samplesWrap) return;
    samplesWrap.replaceChildren(
      ...practicum.unknowns.map((u) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'estimator-sample-btn';
        btn.style.background = rgbToHex(u.rgb);
        btn.title = `Try sample ${u.id}`;
        btn.setAttribute('aria-label', `Try sample ${u.id}`);
        btn.addEventListener('click', () => {
          showImageOnCanvas((w, h) => drawSyntheticSwatch(ctx, w, h, u.rgb), 400, 300);
        });
        return btn;
      })
    );
  }
  renderSampleButtons();

  // ---------- drag selection ----------

  canvasWrap.addEventListener('pointerdown', (e) => {
    if (workspace.hidden) return;
    const rect = canvasWrap.getBoundingClientRect();
    dragStart = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    dragging = true;
    canvasWrap.setPointerCapture(e.pointerId);
  });

  canvasWrap.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    const rect = canvasWrap.getBoundingClientRect();
    const x = Math.min(Math.max(e.clientX - rect.left, 0), rect.width);
    const y = Math.min(Math.max(e.clientY - rect.top, 0), rect.height);
    selection = {
      left: Math.min(x, dragStart.x),
      top: Math.min(y, dragStart.y),
      w: Math.abs(x - dragStart.x),
      h: Math.abs(y - dragStart.y),
    };
    positionSelection();
  });

  canvasWrap.addEventListener('pointerup', () => {
    dragging = false;
    if (selection.w < 8 || selection.h < 8) resetDefaultSelection();
  });

  // ---------- estimate ----------

  function sampleSelectionRgb() {
    const rect = canvasWrap.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const sx = Math.round(selection.left * scaleX);
    const sy = Math.round(selection.top * scaleY);
    const sw = Math.round(selection.w * scaleX);
    const sh = Math.round(selection.h * scaleY);

    const clampedSx = Math.max(0, Math.min(sx, canvas.width - 1));
    const clampedSy = Math.max(0, Math.min(sy, canvas.height - 1));
    const clampedSw = Math.max(1, Math.min(sw, canvas.width - clampedSx));
    const clampedSh = Math.max(1, Math.min(sh, canvas.height - clampedSy));

    const imageData = ctx.getImageData(clampedSx, clampedSy, clampedSw, clampedSh);
    return trimmedAverageRgb(imageData);
  }

  sampleBtn?.addEventListener('click', () => {
    const sampleRgb = sampleSelectionRgb();
    const result = interpolatePh(sampleRgb, points);
    renderOutput(sampleRgb, result);
  });

  function renderOutput(sampleRgb, result) {
    document.getElementById('sampledSwatch').style.background = rgbToHex(sampleRgb);
    document.getElementById('nearestSwatch').style.background = rgbToHex(result.nearest.rgb);
    document.getElementById('estimatedPhValue').textContent = result.estimatedPh.toFixed(1);

    const bandEl = document.getElementById('estimatedBand');
    bandEl.textContent = result.band;
    bandEl.className = `band-chip ${bandClassName(result.band)}`;

    const confidenceEl = document.getElementById('estimatedConfidence');
    const outOfRangeNote = result.confidence === 'low' ? ', colour is outside the calibrated range' : '';
    confidenceEl.textContent = `${result.confidence}${outOfRangeNote}`;

    const trackMin = points[0].ph;
    const trackMax = points[points.length - 1].ph;
    const pct = Math.max(0, Math.min(100, ((result.estimatedPh - trackMin) / (trackMax - trackMin)) * 100));
    document.getElementById('scaleMarker').style.left = `${pct}%`;

    outputWrap.hidden = false;
  }

  window.addEventListener('resize', () => {
    if (!workspace.hidden) resetDefaultSelection();
  });
}

  global.PhEstimator = { initEstimator };
})(typeof window !== 'undefined' ? window : globalThis);

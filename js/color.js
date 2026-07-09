// color.js — colour maths for the pH-enomenal site.
// sRGB <-> CIELAB, CIEDE2000 / CIE76 delta-E, and pH interpolation against a
// calibration ladder. No dependencies.
//
// Plain classic script (not an ES module): Chrome refuses to load
// type="module" scripts at all over file://, which would break the site for
// anyone who just double-clicks index.html. Everything here attaches to the
// shared PhColor namespace on globalThis instead of using import/export.

(function (global) {

// ---------- sRGB <-> linear sRGB ----------

function srgbChannelToLinear(c) {
  const v = c / 255;
  return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
}

function linearChannelToSrgb(v) {
  const c = v <= 0.0031308 ? v * 12.92 : 1.055 * Math.pow(v, 1 / 2.4) - 0.055;
  return Math.min(255, Math.max(0, Math.round(c * 255)));
}

// ---------- sRGB <-> XYZ (D65) ----------
// Reference white D65: Xn = 95.047, Yn = 100.0, Zn = 108.883

const WHITE = { x: 95.047, y: 100.0, z: 108.883 };

function rgb2xyz([r, g, b]) {
  const rl = srgbChannelToLinear(r);
  const gl = srgbChannelToLinear(g);
  const bl = srgbChannelToLinear(b);

  const x = (rl * 0.4124564 + gl * 0.3575761 + bl * 0.1804375) * 100;
  const y = (rl * 0.2126729 + gl * 0.7151522 + bl * 0.0721750) * 100;
  const z = (rl * 0.0193339 + gl * 0.1191920 + bl * 0.9503041) * 100;
  return [x, y, z];
}

function xyz2rgb([x, y, z]) {
  const xn = x / 100, yn = y / 100, zn = z / 100;
  const rl = xn * 3.2404542 + yn * -1.5371385 + zn * -0.4985314;
  const gl = xn * -0.9692660 + yn * 1.8760108 + zn * 0.0415560;
  const bl = xn * 0.0556434 + yn * -0.2040259 + zn * 1.0572252;
  return [linearChannelToSrgb(rl), linearChannelToSrgb(gl), linearChannelToSrgb(bl)];
}

// ---------- XYZ <-> CIELAB ----------

const LAB_EPS = Math.pow(6 / 29, 3);
const LAB_KAPPA = 1 / (3 * Math.pow(6 / 29, 2));

function labF(t) {
  return t > LAB_EPS ? Math.cbrt(t) : LAB_KAPPA * t + 4 / 29;
}

function labFInv(t) {
  const t3 = t * t * t;
  return t3 > LAB_EPS ? t3 : (t - 4 / 29) / LAB_KAPPA;
}

// rgb2lab([255,255,255]) -> [100, 0, 0]      (white)
// rgb2lab([0,0,0])       -> [0, 0, 0]        (black)
// rgb2lab([255,0,0])     -> [~53.24, ~80.09, ~67.20]  (sRGB red)
function rgb2lab(rgb) {
  const [x, y, z] = rgb2xyz(rgb);
  const fx = labF(x / WHITE.x);
  const fy = labF(y / WHITE.y);
  const fz = labF(z / WHITE.z);

  const l = 116 * fy - 16;
  const a = 500 * (fx - fy);
  const b = 200 * (fy - fz);
  return [l, a, b];
}

// lab2rgb([100,0,0]) -> [255,255,255]
// lab2rgb([0,0,0])   -> [0,0,0]
function lab2rgb([l, a, b]) {
  const fy = (l + 16) / 116;
  const fx = fy + a / 500;
  const fz = fy - b / 200;

  const x = WHITE.x * labFInv(fx);
  const y = WHITE.y * labFInv(fy);
  const z = WHITE.z * labFInv(fz);
  return xyz2rgb([x, y, z]);
}

function rgbToHex([r, g, b]) {
  return '#' + [r, g, b].map((c) => Math.round(c).toString(16).padStart(2, '0')).join('');
}

// ---------- delta-E ----------

// deltaE76([100,0,0], [0,0,0]) -> 100  (plain Euclidean distance in Lab)
function deltaE76(labA, labB) {
  const dl = labA[0] - labB[0];
  const da = labA[1] - labB[1];
  const db = labA[2] - labB[2];
  return Math.sqrt(dl * dl + da * da + db * db);
}

// CIEDE2000, the perceptually-tuned delta-E used for the AI estimator.
// deltaE2000(lab, lab) -> 0 for identical colours.
function deltaE2000(labA, labB) {
  const [L1, a1, b1] = labA;
  const [L2, a2, b2] = labB;

  const kL = 1, kC = 1, kH = 1;

  const C1 = Math.sqrt(a1 * a1 + b1 * b1);
  const C2 = Math.sqrt(a2 * a2 + b2 * b2);
  const Cbar = (C1 + C2) / 2;

  const Cbar7 = Math.pow(Cbar, 7);
  const G = 0.5 * (1 - Math.sqrt(Cbar7 / (Cbar7 + Math.pow(25, 7))));

  const a1p = a1 * (1 + G);
  const a2p = a2 * (1 + G);

  const C1p = Math.sqrt(a1p * a1p + b1 * b1);
  const C2p = Math.sqrt(a2p * a2p + b2 * b2);

  const h1p = (Math.atan2(b1, a1p) * 180) / Math.PI + (b1 === 0 && a1p === 0 ? 0 : 0);
  const h2p = (Math.atan2(b2, a2p) * 180) / Math.PI;

  const hue1 = h1p >= 0 ? h1p : h1p + 360;
  const hue2 = h2p >= 0 ? h2p : h2p + 360;

  const dLp = L2 - L1;
  const dCp = C2p - C1p;

  let dhp;
  if (C1p * C2p === 0) {
    dhp = 0;
  } else if (Math.abs(hue2 - hue1) <= 180) {
    dhp = hue2 - hue1;
  } else if (hue2 - hue1 > 180) {
    dhp = hue2 - hue1 - 360;
  } else {
    dhp = hue2 - hue1 + 360;
  }
  const dHp = 2 * Math.sqrt(C1p * C2p) * Math.sin(((dhp / 2) * Math.PI) / 180);

  const Lbarp = (L1 + L2) / 2;
  const Cbarp = (C1p + C2p) / 2;

  let hbarp;
  if (C1p * C2p === 0) {
    hbarp = hue1 + hue2;
  } else if (Math.abs(hue1 - hue2) <= 180) {
    hbarp = (hue1 + hue2) / 2;
  } else if (hue1 + hue2 < 360) {
    hbarp = (hue1 + hue2 + 360) / 2;
  } else {
    hbarp = (hue1 + hue2 - 360) / 2;
  }

  const T =
    1 -
    0.17 * Math.cos(((hbarp - 30) * Math.PI) / 180) +
    0.24 * Math.cos((2 * hbarp * Math.PI) / 180) +
    0.32 * Math.cos(((3 * hbarp + 6) * Math.PI) / 180) -
    0.2 * Math.cos(((4 * hbarp - 63) * Math.PI) / 180);

  const dTheta = 30 * Math.exp(-Math.pow((hbarp - 275) / 25, 2));
  const Cbarp7 = Math.pow(Cbarp, 7);
  const Rc = 2 * Math.sqrt(Cbarp7 / (Cbarp7 + Math.pow(25, 7)));
  const Sl = 1 + (0.015 * Math.pow(Lbarp - 50, 2)) / Math.sqrt(20 + Math.pow(Lbarp - 50, 2));
  const Sc = 1 + 0.045 * Cbarp;
  const Sh = 1 + 0.015 * Cbarp * T;
  const Rt = -Math.sin((2 * dTheta * Math.PI) / 180) * Rc;

  const termL = dLp / (kL * Sl);
  const termC = dCp / (kC * Sc);
  const termH = dHp / (kH * Sh);

  return Math.sqrt(termL * termL + termC * termC + termH * termH + Rt * termC * termH);
}

const deltaE = deltaE2000;

// ---------- LAB interpolation ----------

// labLerp([0,0,0],[100,0,0], 0.5) -> [50,0,0]
function labLerp(labA, labB, t) {
  return [
    labA[0] + (labB[0] - labA[0]) * t,
    labA[1] + (labB[1] - labA[1]) * t,
    labA[2] + (labB[2] - labA[2]) * t,
  ];
}

// Interpolate the RGB swatch for an arbitrary pH against a sorted calibration
// ladder [{ph, rgb}, ...]. Interpolates in LAB space, converts back to RGB.
// pH values outside the ladder's own range are clamped to the nearest end
// point's colour (the ladder only carries chemistry-backed data from pH 1-13).
function rgbAtPh(ph, points) {
  const sorted = [...points].sort((p, q) => p.ph - q.ph);
  if (ph <= sorted[0].ph) return sorted[0].rgb;
  if (ph >= sorted[sorted.length - 1].ph) return sorted[sorted.length - 1].rgb;

  for (let i = 0; i < sorted.length - 1; i++) {
    const a = sorted[i];
    const b = sorted[i + 1];
    if (ph >= a.ph && ph <= b.ph) {
      const t = (ph - a.ph) / (b.ph - a.ph);
      const lab = labLerp(rgb2lab(a.rgb), rgb2lab(b.rgb), t);
      return lab2rgb(lab);
    }
  }
  return sorted[sorted.length - 1].rgb;
}

// ---------- pH estimation from a sampled colour ----------

// Thresholds tuned to the Section 4.3 mixture ladder's own band labels
// (pH 9 -> weak alkali, pH 11 -> strong alkali), not just the spec midpoints.
// classifyBand(2) -> 'strong acid'; classifyBand(9.5) -> 'weak alkali'
function classifyBand(ph) {
  if (ph <= 3) return 'strong acid';
  if (ph <= 6) return 'weak acid';
  if (ph <= 8) return 'neutral';
  if (ph <= 10) return 'weak alkali';
  return 'strong alkali';
}

// bandClassName('strong acid') -> 'band--strong-acid' (matches styles.css)
function bandClassName(band) {
  return 'band--' + band.replace(/\s+/g, '-');
}

function confidenceFromDeltaE(minDeltaE) {
  if (minDeltaE < 10) return 'high';
  if (minDeltaE <= 25) return 'medium';
  return 'low';
}

// Estimate pH for a sampled RGB against a calibration ladder [{ph, rgb}, ...].
// Finds the two nearest calibration points by CIEDE2000 delta-E and blends
// their pH values, weighted by inverse distance, so the estimate reads as
// continuous rather than snapping to the nearest sample.
function interpolatePh(sampleRgb, points) {
  const sampleLab = rgb2lab(sampleRgb);

  const withDeltaE = points.map((p) => ({
    ...p,
    lab: rgb2lab(p.rgb),
    deltaE: deltaE2000(sampleLab, rgb2lab(p.rgb)),
  }));

  withDeltaE.sort((a, b) => a.deltaE - b.deltaE);
  const [nearest, secondNearest] = withDeltaE;

  const minDeltaE = nearest.deltaE;

  let estimatedPh;
  if (minDeltaE < 1e-6 || !secondNearest) {
    estimatedPh = nearest.ph;
  } else {
    const wNearest = 1 / nearest.deltaE;
    const wSecond = 1 / secondNearest.deltaE;
    estimatedPh = (nearest.ph * wNearest + secondNearest.ph * wSecond) / (wNearest + wSecond);
  }

  return {
    estimatedPh,
    band: classifyBand(estimatedPh),
    confidence: confidenceFromDeltaE(minDeltaE),
    minDeltaE,
    nearest,
    secondNearest,
  };
}

global.PhColor = {
  rgb2xyz,
  xyz2rgb,
  rgb2lab,
  lab2rgb,
  rgbToHex,
  deltaE76,
  deltaE2000,
  deltaE,
  labLerp,
  rgbAtPh,
  classifyBand,
  bandClassName,
  confidenceFromDeltaE,
  interpolatePh,
};

})(typeof window !== 'undefined' ? window : globalThis);

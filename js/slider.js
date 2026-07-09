// slider.js — the pH slider (Section 5.2). The track's gradient is not a
// decorative CSS gradient: it is painted by sampling rgbAtPh() across the
// real LAB-interpolated mixture calibration, so the slider IS the chemistry.
//
// Plain classic script (not an ES module) — see color.js for why.

(function (global) {
  const { rgbAtPh, rgbToHex, classifyBand } = global.PhColor;

  function buildTrackGradient(points, steps = 48) {
    const stops = [];
    for (let i = 0; i <= steps; i++) {
      const ph = (14 * i) / steps;
      const rgb = rgbAtPh(ph, points);
      const pct = ((i / steps) * 100).toFixed(2);
      stops.push(`${rgbToHex(rgb)} ${pct}%`);
    }
    return `linear-gradient(90deg, ${stops.join(', ')})`;
  }

  function initSlider(calibration) {
    const points = calibration.mixture.points;
    const slider = document.getElementById('phSlider');
    const swatch = document.getElementById('sliderSwatch');
    const phValueEl = document.getElementById('sliderPhValue');
    const bandEl = document.getElementById('sliderBand');
    const hexEl = document.getElementById('sliderHex');
    const rgbEl = document.getElementById('sliderRgb');
    const heroMarker = document.getElementById('heroThumbMarker');

    if (!slider) return;

    slider.style.background = buildTrackGradient(points);

    function render() {
      const ph = parseFloat(slider.value);
      const rgb = rgbAtPh(ph, points);
      const hex = rgbToHex(rgb);
      const band = classifyBand(ph);

      swatch.style.backgroundColor = hex;
      phValueEl.textContent = `pH ${ph.toFixed(1)}`;
      bandEl.textContent = band;
      hexEl.textContent = hex.toUpperCase();
      rgbEl.textContent = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;

      // hero thumbnail (5.0) is a live preview of this slider, not decoration
      if (heroMarker) {
        heroMarker.style.left = `${(ph / 14) * 100}%`;
        heroMarker.style.backgroundColor = hex;
      }
    }

    slider.addEventListener('input', render);
    render();
  }

  global.PhSlider = { initSlider };
})(typeof window !== 'undefined' ? window : globalThis);

// Reference thresholds for the Adult ADHD Self-Report Scale (ASRS v1.1).
// Grounded in the published Harvard/WHO scoring guidance.

// ---- Your own result, shown as the default "My Result" comparison ----
// PLACEHOLDER values — swap in your real Part A and Part B scores.
// (total is auto-computed as partA + partB; keep it in sync if you set it by hand)
const MY_RESULT = {
  label: 'My Result',
  partA: 17,   // Part A sum, 0–24  (the part that decides the screen)
  partB: 31,   // Part B sum, 0–48
  total: 48,   // Full-scale total, 0–72  (= partA + partB)
  color: '#8b9a6b',
};

const YOUR_RESULT_COLOR = '#4a6fa5';

// ---- Established screening thresholds ----
const THRESHOLDS = {
  partAShadedPositive: 4,   // 4+ shaded-box answers (of 6) = positive screen (paper form)
  partASumPositive: 14,     // 14+ on the 0–24 Part A sum = positive (2024 Harvard update)
  partAMax: 24,
  partBMax: 48,
  totalMax: 72,
  totalHighMarker: 40,      // 40+ falls above ~79th percentile in the general population
};

// ---- Total-score context bands (symptom-frequency context, NOT diagnosis) ----
// Anchored to the published 79th-percentile marker at 40.
const TOTAL_BANDS = [
  { name: 'Low',      min: 0,  max: 23, note: 'Few symptoms reported at clinically notable frequency.' },
  { name: 'Moderate', min: 24, max: 39, note: 'Some symptoms reported often; below the high-frequency marker.' },
  { name: 'High',     min: 40, max: 72, note: 'Above the ~79th percentile of the general population.' },
];

// ---- Screener performance (Kessler et al., 2005), for context ----
const SCREENER_STATS = {
  sensitivity: 68.7,
  specificity: 99.5,
  ppv: 97.4,
};

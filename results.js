/* ASRS v1.1 results interpretation + charts (Part A + Part B) */

let partAChart = null;
let stackChart = null;
let visitor = null; // { partA, partB, total }

/* ---- Plugin: draw a dashed cutoff line on the Part A chart ---- */
const cutoffLinePlugin = {
  id: 'cutoffLine',
  afterDraw(chart, args, opts) {
    if (!opts || opts.value == null) return;
    const { ctx, chartArea, scales } = chart;
    const x = scales.x.getPixelForValue(opts.value);
    if (x == null || isNaN(x)) return;
    ctx.save();
    ctx.beginPath();
    ctx.setLineDash([6, 4]);
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#b5642f';
    ctx.moveTo(x, chartArea.top);
    ctx.lineTo(x, chartArea.bottom);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = '#b5642f';
    ctx.font = '600 11px "Source Sans 3", sans-serif';
    ctx.textAlign = 'center';
    const label = opts.label || `Cutoff ${opts.value}`;
    ctx.fillText(label, x, chartArea.top - 6);
    ctx.restore();
  },
};

/* ---- Helpers ---- */
function fmt(v) {
  return v == null || v === '' || isNaN(v) ? '—' : String(v);
}

function num(id) {
  const el = document.getElementById(id);
  if (!el || el.value === '') return null;
  const v = Number(el.value);
  return isNaN(v) ? null : v;
}

function isPositiveScreen(r) {
  return r != null && r.partA != null && r.partA >= THRESHOLDS.partASumPositive;
}

function totalBandFor(total) {
  if (total == null) return null;
  return TOTAL_BANDS.find((b) => total >= b.min && total <= b.max) || null;
}

/* ---- My Result summary ---- */
function renderMyResult() {
  document.getElementById('score-my-partA').textContent = fmt(MY_RESULT.partA);
  document.getElementById('score-my-partB').textContent = fmt(MY_RESULT.partB);
  const myTotal = MY_RESULT.total != null
    ? MY_RESULT.total
    : (MY_RESULT.partA != null && MY_RESULT.partB != null ? MY_RESULT.partA + MY_RESULT.partB : null);
  document.getElementById('score-my-total').textContent = fmt(myTotal);
}

/* ---- Verdict box ---- */
function renderVerdict() {
  const box = document.getElementById('verdict');
  if (!visitor) {
    box.classList.remove('visible');
    return;
  }
  const positive = isPositiveScreen(visitor);
  box.classList.add('visible');
  box.classList.toggle('positive', positive);
  box.classList.toggle('negative', !positive);

  const basisText = `a Part A score of ${visitor.partA}/24 (positive at ${THRESHOLDS.partASumPositive}+)`;

  if (positive) {
    box.innerHTML = `
      <span class="verdict-tag">Positive screen</span>
      <h2>Your responses are consistent with adult ADHD</h2>
      <p>Based on ${basisText}, your result meets the threshold for a positive ASRS screen.
      That means your symptoms are frequent enough to be worth a closer look.</p>
      <p>A positive screen is <strong>not a diagnosis</strong> — the recommended next step is a full
      evaluation with a qualified clinician, who can weigh your history, real-world impairment, and
      other possible explanations before reaching any conclusion.</p>`;
  } else {
    box.innerHTML = `
      <span class="verdict-tag">Below threshold</span>
      <h2>Your responses fall below the screening cutoff</h2>
      <p>Based on ${basisText}, your result is below the threshold for a positive ASRS screen.</p>
      <p>The screener is deliberately cautious and can miss some real cases (about 69% sensitivity).
      If ADHD-type difficulties are genuinely affecting your daily life, it's still reasonable to
      talk to a clinician — a below-threshold screen doesn't rule ADHD out.</p>`;
  }
}

/* ---- Visitor summary card ---- */
function renderVisitorCard() {
  const card = document.getElementById('visitor-score-card');
  document.getElementById('score-visitor-partA').textContent = visitor ? fmt(visitor.partA) : '—';
  document.getElementById('score-visitor-partB').textContent = visitor ? fmt(visitor.partB) : '—';
  document.getElementById('score-visitor-total').textContent = visitor ? fmt(visitor.total) : '—';
  card.classList.toggle('has-data', !!visitor);
}

/* ---- Severity bands ---- */
function renderSeverityBands() {
  const wrap = document.getElementById('severity-bands');
  const total = visitor ? visitor.total : null;
  const active = totalBandFor(total);
  wrap.innerHTML = TOTAL_BANDS.map((b) => {
    const on = active && active.name === b.name;
    return `<div class="severity-band${on ? ' active' : ''}">
      <div class="band-name">${b.name}</div>
      <div class="band-range">Total ${b.min}–${b.max}</div>
      <div class="band-note" style="margin-top:6px;color:var(--muted);font-size:0.78rem">${b.note}</div>
    </div>`;
  }).join('');
}

/* ---- Part A chart ---- */
function renderPartAChart() {
  const ctx = document.getElementById('partA-chart');
  const labels = [];
  const data = [];
  const colors = [];

  if (visitor && visitor.partA != null) {
    labels.push('Your Result');
    data.push(visitor.partA);
    colors.push(YOUR_RESULT_COLOR);
  }
  if (MY_RESULT.partA != null) {
    labels.push('My Result');
    data.push(MY_RESULT.partA);
    colors.push(MY_RESULT.color);
  }

  if (partAChart) partAChart.destroy();
  partAChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        label: 'Part A score',
        data,
        backgroundColor: colors,
        borderRadius: 6,
        barThickness: 38,
      }],
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        cutoffLine: { value: THRESHOLDS.partASumPositive, label: `Positive screen ≥ ${THRESHOLDS.partASumPositive}` },
        tooltip: { callbacks: { label: (c) => `Part A: ${c.parsed.x} / ${THRESHOLDS.partAMax}` } },
      },
      scales: {
        x: { min: 0, max: THRESHOLDS.partAMax, grid: { color: '#e8e4dc' }, title: { display: true, text: 'Part A score (0–24)' } },
        y: { grid: { display: false } },
      },
    },
    plugins: [cutoffLinePlugin],
  });
}

/* ---- Stacked total chart (Part A + Part B) ---- */
function renderStackChart() {
  const ctx = document.getElementById('stack-chart');
  const labels = [];
  const partAData = [];
  const partBData = [];

  if (visitor) {
    labels.push('Your Result');
    partAData.push(visitor.partA);
    partBData.push(visitor.partB);
  }
  if (MY_RESULT.partA != null && MY_RESULT.partB != null) {
    labels.push('My Result');
    partAData.push(MY_RESULT.partA);
    partBData.push(MY_RESULT.partB);
  }

  if (stackChart) stackChart.destroy();
  stackChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [
        { label: 'Part A (0–24)', data: partAData, backgroundColor: '#4a6fa5', borderRadius: 4, stack: 's' },
        { label: 'Part B (0–48)', data: partBData, backgroundColor: '#9bb0d4', borderRadius: 4, stack: 's' },
      ],
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'bottom' },
        tooltip: {
          callbacks: {
            footer: (items) => {
              const sum = items.reduce((a, it) => a + (it.parsed.x || 0), 0);
              return `Total: ${sum} / ${THRESHOLDS.totalMax}`;
            },
          },
        },
      },
      scales: {
        x: { stacked: true, min: 0, max: THRESHOLDS.totalMax, grid: { color: '#e8e4dc' }, title: { display: true, text: 'Total score (0–72)' } },
        y: { stacked: true, grid: { display: false } },
      },
    },
  });
}

/* ---- Orchestration ---- */
function renderAll() {
  renderVerdict();
  renderVisitorCard();
  renderSeverityBands();
  renderPartAChart();
  renderStackChart();
}

function updateComputedTotal() {
  const a = num('input-partA');
  const b = num('input-partB');
  const el = document.querySelector('#computed-total strong');
  el.textContent = (a != null && b != null) ? String(a + b) : '—';
}

function readForm() {
  const partA = num('input-partA');
  const partB = num('input-partB');
  if (partA == null) {
    alert('Please enter your Part A score (0–24) — it\u2019s the part that decides the screen.');
    return null;
  }
  if (partB == null) {
    alert('Please enter your Part B score (0–48).');
    return null;
  }
  const a = Math.max(0, Math.min(24, partA));
  const b = Math.max(0, Math.min(48, partB));
  return { partA: a, partB: b, total: a + b };
}

document.getElementById('input-partA').addEventListener('input', updateComputedTotal);
document.getElementById('input-partB').addEventListener('input', updateComputedTotal);

document.getElementById('score-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const r = readForm();
  if (!r) return;
  visitor = r;
  renderAll();
  document.getElementById('verdict').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

document.getElementById('clear-results-btn').addEventListener('click', () => {
  visitor = null;
  document.getElementById('score-form').reset();
  updateComputedTotal();
  renderAll();
});

/* ---- Init ---- */
renderMyResult();
renderAll();

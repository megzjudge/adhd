/* DIVA-5 self-check interpretation + charts */

let totalChart = null;
let profileChart = null;
let visitor = null; // { total, inattention, hyperactivity, impulsivity }

/* ---- Plugin: dashed threshold line on the total chart ---- */
const thresholdLinePlugin = {
  id: 'thresholdLine',
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
    ctx.fillText(opts.label || `Threshold ${opts.value}`, x, chartArea.top - 6);
    ctx.restore();
  },
};

/* ---- Helpers ---- */
const fmt = (v) => (v == null || v === '' || isNaN(v) ? '—' : String(v));
function num(id) {
  const el = document.getElementById(id);
  if (!el || el.value === '') return null;
  const v = Number(el.value);
  return isNaN(v) ? null : v;
}
const aboveThreshold = (r) => r != null && r.total != null && r.total >= THRESHOLDS.clinicalThreshold;

function dominantCategory(r) {
  const cats = [
    ['Inattention', r.inattention],
    ['Hyperactivity', r.hyperactivity],
    ['Impulsivity', r.impulsivity],
  ].filter(([, v]) => v != null);
  if (!cats.length) return null;
  return cats.reduce((a, b) => (b[1] > a[1] ? b : a));
}

/* ---- My Result summary ---- */
function renderMyResult() {
  document.getElementById('score-my-total').textContent = `${fmt(MY_RESULT.total)}/72`;
  document.getElementById('score-my-inatt').textContent = fmt(MY_RESULT.inattention);
  document.getElementById('score-my-hyper').textContent = fmt(MY_RESULT.hyperactivity);
  document.getElementById('score-my-impul').textContent = fmt(MY_RESULT.impulsivity);
}

/* ---- Verdict ---- */
function renderVerdict() {
  const box = document.getElementById('verdict');
  if (!visitor) { box.classList.remove('visible'); return; }
  const above = aboveThreshold(visitor);
  box.classList.add('visible');
  box.classList.toggle('positive', above);
  box.classList.toggle('negative', !above);

  const pct = Math.round((visitor.total / THRESHOLDS.totalMax) * 100);
  const dom = dominantCategory(visitor);
  const domLine = dom
    ? ` Your most prominent cluster is <strong>${dom[0].toLowerCase()}</strong> (average ${dom[1]} of 4).`
    : '';

  if (above) {
    box.innerHTML = `
      <span class="verdict-tag">Above threshold</span>
      <h2>Your self-check is above the threshold</h2>
      <p>Your total of <strong>${visitor.total}/72</strong> (${pct}%) meets or exceeds the self-check
      threshold of ${THRESHOLDS.clinicalThreshold}.${domLine}</p>
      <p>This isn't a diagnosis — it means your responses are worth following up. The recommended next
      step is a full DIVA-5 with a qualified clinician, who will also look at childhood onset, lifelong
      pattern, impairment across life domains, and other possible explanations.</p>`;
  } else {
    box.innerHTML = `
      <span class="verdict-tag">Below threshold</span>
      <h2>Your self-check is below the threshold</h2>
      <p>Your total of <strong>${visitor.total}/72</strong> (${pct}%) is below the self-check
      threshold of ${THRESHOLDS.clinicalThreshold}.${domLine}</p>
      <p>A self-check can under-count, especially if symptoms cluster in one area. If ADHD-type
      difficulties genuinely affect your daily life, it's still reasonable to speak with a clinician.</p>`;
  }
}

/* ---- Visitor card ---- */
function renderVisitorCard() {
  document.getElementById('visitor-score-card').classList.toggle('has-data', !!visitor);
  document.getElementById('score-visitor-total').textContent = visitor ? `${fmt(visitor.total)}/72` : '—';
  document.getElementById('score-visitor-inatt').textContent = visitor ? fmt(visitor.inattention) : '—';
  document.getElementById('score-visitor-hyper').textContent = visitor ? fmt(visitor.hyperactivity) : '—';
  document.getElementById('score-visitor-impul').textContent = visitor ? fmt(visitor.impulsivity) : '—';
}

/* ---- Total chart ---- */
function renderTotalChart() {
  const labels = [], data = [], colors = [];
  if (visitor && visitor.total != null) { labels.push('Your Result'); data.push(visitor.total); colors.push(YOUR_RESULT_COLOR); }
  labels.push('My Result'); data.push(MY_RESULT.total); colors.push(MY_RESULT.color);

  if (totalChart) totalChart.destroy();
  totalChart = new Chart(document.getElementById('total-chart'), {
    type: 'bar',
    data: { labels, datasets: [{ label: 'Total', data, backgroundColor: colors, borderRadius: 6, barThickness: 38 }] },
    options: {
      indexAxis: 'y', responsive: true, maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        thresholdLine: { value: THRESHOLDS.clinicalThreshold, label: `Threshold ${THRESHOLDS.clinicalThreshold}` },
        tooltip: { callbacks: { label: (c) => `Total: ${c.parsed.x} / 72` } },
      },
      scales: {
        x: { min: 0, max: THRESHOLDS.totalMax, grid: { color: '#e8e4dc' }, title: { display: true, text: 'Total score (0–72)' } },
        y: { grid: { display: false } },
      },
    },
    plugins: [thresholdLinePlugin],
  });
}

/* ---- Profile chart (three category averages) ---- */
function renderProfileChart() {
  const datasets = [];
  if (visitor && (visitor.inattention != null || visitor.hyperactivity != null || visitor.impulsivity != null)) {
    datasets.push({
      label: 'Your Result',
      data: [visitor.inattention, visitor.hyperactivity, visitor.impulsivity],
      backgroundColor: YOUR_RESULT_COLOR, borderRadius: 6,
    });
  }
  datasets.push({
    label: 'My Result',
    data: [MY_RESULT.inattention, MY_RESULT.hyperactivity, MY_RESULT.impulsivity],
    backgroundColor: MY_RESULT.color, borderRadius: 6,
  });

  if (profileChart) profileChart.destroy();
  profileChart = new Chart(document.getElementById('profile-chart'), {
    type: 'bar',
    data: { labels: ['Inattention', 'Hyperactivity', 'Impulsivity'], datasets },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: datasets.length > 1, position: 'bottom' },
        tooltip: { callbacks: { label: (c) => `${c.dataset.label}: ${c.parsed.y} / 4` } } },
      scales: {
        y: { min: 0, max: 4, grid: { color: '#e8e4dc' }, title: { display: true, text: 'Average intensity (0–4)' } },
        x: { grid: { display: false } },
      },
    },
  });
}

/* ---- Orchestration ---- */
function renderAll() {
  renderVerdict();
  renderVisitorCard();
  renderTotalChart();
  renderProfileChart();
}

function readForm() {
  const total = num('input-total');
  if (total == null) { alert('Please enter your total score (0–72).'); return null; }
  return {
    total: Math.max(0, Math.min(72, total)),
    inattention: num('input-inatt'),
    hyperactivity: num('input-hyper'),
    impulsivity: num('input-impul'),
  };
}

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
  renderAll();
});

/* ---- Init ---- */
renderMyResult();
renderAll();

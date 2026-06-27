/* Walkthrough page: summary, 18 responses, full DIVA render, lightbox. */
// Summary cards
const pct = Math.round((MY_RESULT.total / THRESHOLDS.totalMax) * 100);
document.getElementById('summary-grid').innerHTML = [
  ['Total score', `${MY_RESULT.total}/72`, `${pct}%`],
  ['Status', `${pct}%`, MY_RESULT.total >= THRESHOLDS.clinicalThreshold ? 'Above threshold' : 'Below threshold'],
  ['Threshold', `${THRESHOLDS.clinicalThreshold}`, MY_RESULT.total >= THRESHOLDS.clinicalThreshold ? 'Met' : 'Not met'],
  ['Inattention', MY_RESULT.inattention, 'avg / 4'],
  ['Hyperactivity', MY_RESULT.hyperactivity, 'avg / 4'],
  ['Impulsivity', MY_RESULT.impulsivity, 'avg / 4'],
].map(([k, v, s]) => `<div class="summary-cell"><div class="summary-k">${k}</div><div class="summary-v">${v}</div><div class="summary-s">${s}</div></div>`).join('');

// Responses table grouped by category
const byCat = { inattention: [], hyperactivity: [], impulsivity: [] };
MY_RESPONSES.forEach((r) => byCat[r.cat].push(r));
const catName = { inattention: 'Inattention', hyperactivity: 'Hyperactivity', impulsivity: 'Impulsivity' };
const intensity = (a) => RESPONSE_SCALE.indexOf(a); // 0–4
document.getElementById('responses-table').innerHTML = Object.keys(byCat).map((cat) => `
  <div class="resp-group">
    <div class="resp-group-head">${catName[cat]}</div>
    ${byCat[cat].map((r) => `
      <div class="resp-row">
        <span class="resp-q">${r.q}</span>
        <span class="resp-a resp-lvl-${intensity(r.a)}">${r.a}</span>
      </div>`).join('')}
  </div>`).join('');

// ---- Full completed DIVA-5 ----
const esc = (s) => String(s == null ? '' : s)
  .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');

// Escape everything, then re-enable a small whitelist of inline tags inside
// comment paragraphs: <a href="…">, <br>, <strong>/<em>/<b>/<i>.
function richText(s) {
  let out = esc(s);
  // markdown-style links: [text](https://url)  — the easiest, quote-free form
  out = out.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
    (m, txt, href) => `<a href="${href}" target="_blank" rel="noopener">${txt}</a>`);
  // shorthand: <https://url>text</a>  (missing the "a href=")
  out = out.replace(/&lt;(https?:\/\/[^\s&]+)&gt;([\s\S]*?)&lt;\/a&gt;/gi,
    (m, href, txt) => `<a href="${href}" target="_blank" rel="noopener">${txt}</a>`);
  // escaped-quote href: <a href="https://url">  (quotes were written as \" in the data)
  out = out.replace(/&lt;a\s+href=&quot;(.*?)&quot;.*?&gt;/gi,
    (m, href) => `<a href="${href}" target="_blank" rel="noopener">`);
  // unquoted href: <a href=https://url>  (recommended inside the JS strings)
  out = out.replace(/&lt;a\s+href=([^\s&]+)\s*&gt;/gi,
    (m, href) => `<a href="${href}" target="_blank" rel="noopener">`);
  // remaining close tags + simple inline tags
  out = out.replace(/&lt;\/a&gt;/gi, '</a>')
           .replace(/&lt;br\s*\/?&gt;/gi, '<br>');
  ['strong','em','b','i'].forEach((t) => {
    out = out.replace(new RegExp('&lt;(/?)' + t + '&gt;', 'gi'), '<$1' + t + '>');
  });
  return out;
}

function renderExamples(list) {
  if (!list || !list.length) return '<p class="dv-empty">—</p>';
  return '<ul class="dv-list">' + list.map((it) =>
    `<li class="${it.c ? 'on' : 'off'}">${it.c ? '<span class="tick">✓</span>' : '<span class="tick-empty"></span>'}${esc(it.t)}</li>`
  ).join('') + '</ul>';
}
function renderComments(comments, sec) {
  return (comments || []).filter((c) => c.sec === sec)
    .map((c) => {
      const paras = Array.isArray(c.paras) ? c.paras : String(c.text || '').split(/\n+/);
      const imgs = c.images || c.childImages;   // images can be attached to a comment
      return `<div class="dv-comment">${paras.map((p) => `<p>${richText(p)}</p>`).join('')}</div>`
        + (imgs ? renderImages(imgs) : '')
        + (c.preview ? renderPreview(c.preview) : '');
    }).join('');
}
function renderImages(imgs) {
  if (!imgs) return '';
  return `<figure class="dv-figure"><figcaption>${esc(imgs.caption)}</figcaption>` +
    imgs.src.map((s) => `<img class="dv-lightbox-img" src="${esc(s)}" alt="${esc(imgs.caption)}" loading="lazy" />`).join('') +
    `</figure>`;
}
// Blurred rectangular teaser for a sensitive document: label + button to the PDF.
function renderPreview(p) {
  if (!p || !p.pdf) return '';
  const label = esc(p.label || 'Document');
  const bg = p.image ? `<img class="doc-preview-bg" src="${esc(p.image)}" alt="" loading="lazy" />` : '';
  return `<div class="doc-preview">${bg}
    <div class="doc-preview-overlay">
      <span class="doc-preview-label">${label}</span>
      <a class="doc-preview-btn" href="${esc(p.pdf)}" target="_blank" rel="noopener">View ${label} ↗</a>
    </div>
  </div>`;
}

document.getElementById('diva-full').innerHTML = DIVA_FULL.map((n) => {
  if (n.type === 'part') return `<div class="dv-part">${esc(n.title)}</div>`;
  const isDomain = n.type === 'domain';
  const head = isDomain
    ? `<div class="dv-head"><span class="dv-code dv-code-domain">Part 3</span><span class="dv-q">${esc(n.title)}</span></div>`
    : `<div class="dv-head"><span class="dv-code">${esc(n.code)}</span><span class="dv-q">${esc(n.question)}</span></div>`;
  const notes = (n.notes && n.notes.length)
    ? `<div class="dv-notes">${n.notes.map(esc).join(' ')}</div>` : '';
  return `<div class="dv-item">
    ${head}
    <div class="dv-cols">
      <div class="dv-col">
        <div class="dv-col-h"><span class="ac-chip ac-a">A</span> Adulthood</div>
        ${renderExamples(n.adult)}
        ${renderComments(n.comments, 'A')}
      </div>
      <div class="dv-col">
        <div class="dv-col-h"><span class="ac-chip ac-c">C</span> Childhood</div>
        ${renderExamples(n.child)}
        ${renderComments(n.comments, 'C')}
        ${renderImages(n.childImages)}
      </div>
    </div>
    ${notes}
  </div>`;
}).join('');

// ---- Lightbox for embedded images ----
(function () {
  const lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.innerHTML = '<button class="lightbox-close" aria-label="Close">&times;</button><img alt="" />';
  document.body.appendChild(lb);
  const lbImg = lb.querySelector('img');
  function open(src, alt) { lbImg.src = src; lbImg.alt = alt || ''; lb.classList.add('open'); document.body.style.overflow = 'hidden'; }
  function close() { lb.classList.remove('open'); document.body.style.overflow = ''; lbImg.src = ''; }
  document.addEventListener('click', (e) => {
    const t = e.target;
    if (t.classList && t.classList.contains('dv-lightbox-img')) { open(t.src, t.alt); }
    else if (t === lb || (t.classList && t.classList.contains('lightbox-close'))) { close(); }
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
})();

# DIVA-5 · Adult ADHD

A small, static, three-page website about the **DIVA-5 (Diagnostic Interview for ADHD in
Adults)** — the most in-depth adult ADHD instrument in wide use. The site explains the
instrument, points people to a free online self-check to take it, interprets the resulting
score, and publishes a fully worked example of a completed interview.

The test is **not hosted here.** Visitors go off-site to take the self-check, so no responses
are ever collected, stored, or processed by this site. It is informational only and is **not a
diagnostic service** — a real assessment requires a qualified clinician.

---

## Pages

| File | Page | What it does |
|------|------|--------------|
| `index.html` | **About** | What the DIVA-5 is, why it goes deeper than a screener, its three-part structure, how it's scored, and download links (full interview PDF + online self-check). |
| `results.html` | **Compare Results** | Enter your self-check **total (/72)** plus the three **category averages**; get an above/below-threshold verdict, a total-vs-threshold chart, and a symptom-profile chart, with the owner's result shown as a comparison. |
| `walkthrough.html` | **My Test Answers** | A complete worked example: the self-check summary, the 18 responses (colour-graded), and the **entire filled DIVA-5** — every criterion, every ticked example across adulthood and childhood, written notes, and the Part 3 impairment domains (with childhood school-report scans). |

---

## Scoring model

Mirrors the **adhdprep.com DIVA-5 self-check** report:

- **Total** 0–72 — the 18 items, each scored 0–4 (Never → Very Often).
- **Threshold 24** — at or above is flagged "above threshold."
- **Three category averages** (0–4): **Inattention** (9 items), **Hyperactivity** (5 items), **Impulsivity** (4 items).

The **About** page also explains the *clinical* DIVA-5 logic (≥6 of 9 criteria per domain, with
research suggesting ≥4 may suffice in adults; lifelong pattern; impairment in ≥2 domains), which
is what a clinician actually uses.

---

## File structure

```
.
├── index.html              # About
├── results.html            # Compare Results (charts)
├── walkthrough.html        # My Test Answers (full filled interview)
├── styles.css              # Single shared stylesheet (cream/sage theme)
├── data.js                 # MY_RESULT, thresholds, categories, 18 responses
├── results.js              # Verdict + Chart.js charts for results.html
├── diva-full.js            # The complete filled DIVA-5 (generated from ADHD.ods)
├── README.md
└── images/
    ├── icon.png                                  # rabbit favicon + hero emblem
    ├── DIVA_Diagnostic_Interview_for_ADHD.pdf    # blank full interview (download)
    ├── DIVA_5_Assessment_Report_2026_06_26.pdf   # owner's self-check report (download)
```

External runtime dependency: **Chart.js 4.4.1** (loaded from jsDelivr CDN) on `results.html` only.
Fonts: Source Serif 4 + Source Sans 3.

---

## Keywords

`adhd` · `adult-adhd` · `diva-5` · `diva` · `adhd-screening` · `adhd-test` · `dsm-5` · 
`mental-health` · `self-assessment` · `inattention` · `hyperactivity` · `impulsivity` · 
`adult ADHD test` · `ADHD self-assessment` · `DIVA-5` · `DIVA adult ADHD interview` · 
`ADHD screening tool` · `DSM-5 ADHD criteria` · `inattentive` · `hyperactive` · `impulsive`,
`am I ADHD` · `ADHD symptoms checklist` · `free ADHD test`.

# Adult ADHD Self-Report Scale (ASRS v1.1)

A small two-page site, themed to match the Systems & Feelings layout. It explains the
ASRS v1.1 adult ADHD screener, sends people to the **official test** to take it, and lets
them enter the **Part A and Part B** scores they got back to see what those scores mean.

The test itself is **not hosted here** — visitors are linked out to the official screener so
the test makers (not this site) collect responses. This site only explains and interprets.

## Pages

| File | Purpose |
|------|---------|
| `index.html` | About the ASRS v1.1, scoring overview, and a link to take the official test |
| `results.html` | Score entry (Part A + Part B) + interpretation against the screening thresholds |

## What the results page does

- Visitor enters **Part A (0–24)** and **Part B (0–48)**; the **total (0–72)** auto-computes.
- Shows a **positive / below-threshold verdict** from the Part A cutoff.
- Plots **Part A vs the positive-screen cutoff (14)** with your own score as the default
  "My Result" comparison.
- Shows a **stacked Part A + Part B total** bar, you vs My Result.
- Shows where the **total score** sits relative to the ~79th-percentile marker (40).

## Scoring thresholds used (`data.js`)

- Part A numeric rule: **14+ of 24** = positive screen (2024 Harvard update). The original
  paper form uses a shaded-box rule (**4+ of 6**) that maps to the same screen.
- Part B: **no pass/fail cutoff of its own** — it contributes to the total.
- Full scale: **0–72**; **40+** is above ~the 79th percentile of the general population.
- Screener performance (Kessler et al., 2005): sensitivity 68.7%, specificity 99.5%, PPV 97.4%.

## ⚠️ Set your own "My Result"

In `data.js`, `MY_RESULT` currently holds **placeholder** numbers (Part A 17, Part B 31,
total 48). Replace `partA` and `partB` with your real scores (and set `total` to their sum)
and they'll become the default comparison shown on every chart.

## Not a diagnosis

The ASRS is a screening aid. A positive screen means a full clinical evaluation is worth
pursuing — it does not confirm ADHD. This is stated on both pages.

## Sources

Schweitzer JB et al., *Med Clin North Am* 85(3):757–777, 2001 · APA *DSM-IV-TR*, 2000 ·
Biederman J et al., *Am J Psychiatry* 150:1792–1798, 1993 · Barkley RA, *ADHD Handbook*, 1998.

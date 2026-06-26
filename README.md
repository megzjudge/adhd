# DIVA-5 — Adult ADHD site

A three-page site built around the **DIVA-5** (Diagnostic Interview for ADHD in Adults).
It explains the DIVA, sends people to a free online self-check to take it, and interprets
the score. The test is **not hosted here** — visitors go offsite to take it, so responses
aren't collected by this site.

## Pages

| File | Purpose |
|------|---------|
| `index.html` | About the DIVA-5: what it is, why it's deep, structure, scoring, downloads |
| `results.html` | Enter your self-check total + category averages → interpretation + charts |
| `walkthrough.html` | A completed DIVA-5 (the owner's own answers) as a worked example of the depth |

## Links wired in

- **Take the self-check:** https://www.adhdprep.com/screeners/diva-5
- **Full DIVA interview (download):** `images/DIVA_Diagnostic_Interview_for_ADHD.pdf`
  *(source: OHSU — see note below)*

## Scoring model (`data.js`)

Matches the adhdprep DIVA-5 self-check report:
- **Total** 0–72 (18 items × 0–4), **threshold 24** = "above threshold".
- Three **category averages** (0–4): Inattention (9 items), Hyperactivity (5), Impulsivity (4).
- The owner's result is the default **My Result**: total 53/72, inattention 2.89,
  hyperactivity 2.40, impulsivity 3.75.

## Your files

Placed in `images/`:
- `diva_5_assessment_report_2026-06-26.pdf` — site owner's self-check report (linked on the walkthrough page)

The walkthrough narrative (`walkthrough-data.js`) is built from your written answers, mapped to the
criterion each one belongs to. Edit or trim freely — it's your own account and entirely optional.

## Not a diagnosis

Every page states it: the self-check is a screening/reflection aid, the full DIVA-5 is meant to be
done with a clinician, and a positive result means "worth following up", not "confirmed".

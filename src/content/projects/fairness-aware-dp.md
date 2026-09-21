---
title: "Fairness-Aware Optimization Under Differential Privacy"
shortTitle: "Fairness under differential privacy"
kicker: "Published master’s thesis"
summary: "A privacy-accounted controller that adapts learning-rate behavior when an underrepresented group falls behind."
year: 2026
status: "Available in AUB Library"
role: "Researcher and ML engineer"
team: "Individual research with academic supervision"
featured: true
order: 1
tags: ["Differential privacy", "Optimization", "Fairness"]
metrics:
  - label: "Minority-class accuracy"
    value: "65.30%"
    comparison: "+17.18 pp vs DP FixedLR"
  - label: "Final group gap"
    value: "29.25 pp"
  - label: "Compared at"
    value: "ε = 2"
image: "/images/projects/thesis/adult-skewed-method-metrics.png"
imageAlt: "Six charts comparing overall and balanced accuracy, female and male accuracy, demographic parity ratio, and group-accuracy gap across four methods on skewed Adult"
imageCaption: "Skewed Adult outcomes across four training methods."
links:
  - label: "Read the thesis"
    href: "https://hdl.handle.net/10938/35513"
---

## Research question

Differential privacy limits what a model can reveal about any one training record, but the clipping and noise that provide that protection can also redistribute errors unevenly. My thesis asks a narrower engineering question: can an adaptive optimizer respond when an underrepresented group is learning more slowly, while keeping the control path inside the privacy accounting?

## What I built

I developed and evaluated DP-SGD training pipelines, reproduced fixed-learning-rate and ADADP baselines, and built a fairness-aware extension to ADADP. The controller compares relative group-loss progress and conservatively restrains learning-rate growth when the monitored group lags.

The first controller used raw group losses and was useful as a mechanism prototype, but it was not end-to-end private. The final version clips the signal, releases it with Gaussian noise on a schedule, and composes that cost with the training privacy budget.

## Experimental design

- Skewed MNIST tests a deliberately underrepresented digit.
- Adult tests a protected demographic attribute under natural and skewed group ratios.
- Five paired seeds keep method comparisons aligned.
- The analysis reports overall and balanced accuracy, group accuracy, group gap, demographic parity ratio, and privacy expenditure.
- Private methods are compared at the same total privacy budget.

## Results

On skewed MNIST, the underrepresented digit-8 accuracy was 48.12% with DP FixedLR, 60.40% with vanilla ADADP, and 65.30% with the final privacy-accounted fairness-aware controller. The group gap fell from 45.71 to 33.03 to 29.25 percentage points, respectively, at the same total ε = 2.

On Adult, the controller improved predictive utility but did not improve demographic parity ratio. That distinction matters: better group accuracy is not the same thing as equal positive prediction rates.

## What the result means

This is a fairness-aware optimization heuristic, not a fairness guarantee. It shows that private optimization can react to group learning dynamics without silently spending extra privacy budget; it does not establish one universally best definition of fairness.

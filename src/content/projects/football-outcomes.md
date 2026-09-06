---
title: "Predicting the Game: A Data-Driven Approach to Football Outcomes"
shortTitle: "Predicting football outcomes"
kicker: "Data science · University project"
summary: "A leakage-aware EPL pipeline for predicting match outcomes and both teams’ goal totals."
year: 2025
status: "Completed course project"
role: "Data scientist and ML engineer"
team: "Three-person project team"
featured: true
order: 4
tags: ["Gradient boosting", "Forecasting", "Data engineering"]
metrics:
  - label: "Fixtures"
    value: "1,472"
  - label: "Outcome accuracy"
    value: "≈56%"
  - label: "Goal MAE"
    value: "0.97 / 0.78"
links:
  - label: "Project repository"
    href: "https://github.com/Aya-El-Bokhary/Predicting_the_Game"
---

## Problem

Football scores are low-count, noisy outcomes. We framed the project as two connected tasks: classify a home win, draw, or away win, and jointly predict home and away goals.

## Building the dataset

Existing sources were incomplete or inconsistent, so the team reconstructed 1,472 English Premier League fixtures across the 2021–2025 seasons and merged statistics from more than 30 FBref tables.

The pipeline calculated home–away feature differences, applied a one-match lag to stop target leakage, built ten-match rolling averages, standardized names, encoded outcomes, and reduced the feature space using correlation, domain knowledge, and random-forest permutation importance.

## Model comparison

We evaluated Poisson, Negative Binomial, and Tweedie regressions alongside logistic regression, random forests, an MLP, XGBoost, HistGradientBoosting, and soft-voting ensembles. Multi-output regression predicted both teams’ goals within one pipeline.

## Results

Tuned HistGradientBoosting gave the strongest generalization: approximately 56% holdout accuracy for win/draw/loss and goal MAEs of 0.97 for the home team and 0.78 for the away team. Negative Binomial regression reached 57.89% outcome accuracy on its evaluated split, while Poisson and Tweedie produced sharper exact-score estimates.

## What the result means

The gap between cross-validation and unseen-season performance is part of the finding. Historical team statistics capture signal, but lineups, injuries, tactics, and match events leave a high irreducible uncertainty that a larger model alone cannot remove.

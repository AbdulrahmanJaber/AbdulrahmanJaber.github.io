---
title: "Aerial Crowd Localization and Counting"
shortTitle: "Aerial crowd localization"
kicker: "Computer vision · University project"
summary: "An empirical comparison of detection and transfer-learning approaches for dense aerial crowd scenes."
year: 2024
status: "Completed course project"
role: "ML engineer, dataset and model analysis"
team: "Four-person project team"
featured: true
order: 3
tags: ["Computer vision", "YOLOv8", "Transfer learning"]
metrics:
  - label: "Counting MAE"
    value: "0.1416"
  - label: "Localization MAE"
    value: "0.2694"
  - label: "Models compared"
    value: "4"
links: []
---

## Problem

People occupy very few pixels in aerial imagery, while dense scenes introduce occlusion and large scale variation. The project investigated whether one model family could handle both counting and localization across these conditions.

## Data pipeline

We used ShanghaiTech Part A. The pipeline loaded image and MATLAB annotations, resized and normalized inputs, derived count targets and bounding-box coordinates, and applied augmentation for training robustness. Localization targets were padded or truncated to a fixed number of boxes for the VGG experiments.

## Models

The study compared YOLOv8, VGG16, VGG19, and ResNet-50. VGG backbones were fine-tuned separately for scalar count regression and bounding-box regression. YOLO combined counting and localization through detection, while ResNet-50 served as a deeper transfer-learning baseline.

## Results

The VGG experiments produced the lowest reported errors in dense scenes: 0.1416 MAE for counting and 0.2694 localization MAE with VGG16. YOLOv8 was more effective on lower-density scenes and better aligned with real-time detection. The ResNet experiment generalized poorly, showing that architecture depth alone did not solve the data and training constraints.

## What I learned

The most useful result was not a single winning architecture. It was the boundary between approaches: dense crowd estimation, sparse detection, and fixed-box regression are different problems and should not be collapsed into one metric.

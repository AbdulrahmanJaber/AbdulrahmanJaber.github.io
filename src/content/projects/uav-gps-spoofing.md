---
title: "Enhancing UAV Security Against GPS Spoofing Attacks"
shortTitle: "UAV GPS spoofing detection"
kicker: "Published research · Bachelor’s FYP"
summary: "A genetic-algorithm search over LSTM configurations for classifying authentic and spoofed UAV GPS signals."
year: 2025
status: "Published in Information"
role: "ML engineer and co-author"
team: "Five-author research team"
featured: true
order: 2
tags: ["LSTM", "Genetic algorithms", "UAV security"]
metrics:
  - label: "Accuracy"
    value: "93.12%"
  - label: "F1 score"
    value: "93.39%"
  - label: "Accuracy gain"
    value: "+4.70 pp"
image: "/images/projects/uav/model-comparison.png"
imageAlt: "Comparison of baseline LSTM, LSTM-GA, and expanded-search LSTM-GA performance"
links:
  - label: "Read the paper"
    href: "https://doi.org/10.3390/info16020115"
---

## Problem

UAV navigation depends heavily on GPS. A spoofing attacker can transmit convincing false signals and steer a vehicle away from its intended route. Detection therefore needs to distinguish legitimate and malicious temporal signal patterns without assuming abundant onboard compute.

## Approach

Our team paired a long short-term memory network with a genetic algorithm. Each candidate encoded an LSTM configuration; selection, crossover, mutation, and elitism progressively searched for a stronger detector.

The expanded search covered the number of layers, units per layer, dropout, batch size, and training epochs. Fitness was based on validation performance, while the final evaluation used held-out flight data containing authentic GPS signals and multiple simulated spoofing conditions.

## Results

The baseline LSTM achieved 88.42% accuracy and an 87.63% F1 score. The expanded LSTM–GA search reached 93.12% accuracy and a 93.39% F1 score. Prediction traces also showed closer alignment with the ground-truth attack categories.

## Engineering trade-off

The search improves model selection, but it is computationally and memory intensive. The paper therefore treats onboard latency and energy use as deployment questions rather than claiming they were measured. That limitation is important for a vehicle constrained by size, weight, and power.

## Publication

Published in *Information*, volume 16, article 115, in February 2025. The paper is open access under CC BY 4.0.

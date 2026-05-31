# DAM Audit Lite Scoring Model v1.0

## Purpose

This document defines the official scoring methodology used by DAM Audit Lite.

The purpose of the scoring model is to measure a brand's Digital Perception Readiness across five GEO-DAM dimensions.

The scoring system is intentionally simple in Version 1.0 to maximize completion rates and dataset consistency.

---

# Assessment Structure

Total Categories: 5

* Entity Presence
* Authority Signals
* Knowledge Layer
* AI Visibility
* Perception Layer

Total Signals: 25

Signals Per Category: 5

Total Questions: 25

Maximum Score: 100

---

# Answer Values

Each question uses a standardized three-level response model.

| Answer    | Value |
| --------- | ----- |
| No        | 0     |
| Partially | 2     |
| Yes       | 4     |

---

# Signal Scoring

Each signal is represented by a single question in Version 1.0.

Maximum Signal Score:

```text
4
```

Minimum Signal Score:

```text
0
```

Signal Formula:

```text
Signal Score = Answer Value
```

Example:

```text
EP1 = Yes

Signal Score = 4
```

---

# Category Scoring

Each category contains five signals.

Formula:

```text
Category Score =
Signal 1 +
Signal 2 +
Signal 3 +
Signal 4 +
Signal 5
```

Maximum Category Score:

```text
20
```

Minimum Category Score:

```text
0
```

Example:

```text
4 + 4 + 2 + 4 + 0 = 14
```

Category Score:

```text
14 / 20
```

---

# Total DAM Score

The DAM Score represents overall Digital Perception Readiness.

Formula:

```text
DAM Score =
Entity Presence +
Authority Signals +
Knowledge Layer +
AI Visibility +
Perception Layer
```

Maximum Score:

```text
100
```

Minimum Score:

```text
0
```

---

# Score Classification

## 0 - 20

Digital Blind Spot

The brand lacks sufficient digital signals for reliable AI understanding and recommendation.

---

## 21 - 40

Emerging Presence

Basic digital signals exist but significant perception gaps remain.

---

## 41 - 60

Developing Authority

The brand demonstrates foundational authority and visibility signals.

---

## 61 - 80

Strong Digital Presence

The brand has established meaningful digital perception and discoverability.

---

## 81 - 100

AI-Ready Brand

The brand demonstrates strong Digital Perception Readiness across GEO-DAM dimensions.

---

# Critical Signal Detection

Version 1.0 tracks several Critical Signals.

Critical Signals:

* entity_foundation
* business_legitimacy
* external_validation
* semantic_structure
* machine_readability
* ai_discoverability
* ai_accuracy
* ai_recommendation
* trust_signals
* differentiation
* positioning_clarity

Purpose:

Critical signals are highlighted separately in reports even when the total score is high.

Example:

A brand may score:

```text
78 / 100
```

but still have:

```text
ai_recommendation = 0
```

In this case the report should identify a critical perception weakness.

---

# PDF Report Logic

The report generator should identify:

## Strongest Signals

Top scoring signals.

---

## Weakest Signals

Lowest scoring signals.

---

## Critical Gaps

Critical signals scoring:

```text
0
or
2
```

---

## Recommended Actions

Generated from:

* Weak signals
* Critical gaps
* Category performance

---

# Dataset Compatibility

Each stored answer should contain:

```json
{
  "question_id": "EP1",
  "signal": "entity_foundation",
  "category": "entity_presence",
  "answer": 4,
  "score": 4
}
```

This enables:

* Industry benchmarks
* Signal benchmarks
* GEO-DAM Index development
* Digital Perception Dataset research

---

# Version Roadmap

## Version 1.0

* Equal weights
* Manual assessment
* 25 signals
* Maximum score: 100

## Version 2.0

* Weighted signals
* Hybrid detection
* Automated website analysis

## Version 3.0

* Industry-specific scoring
* Benchmark-adjusted scoring
* GEO-DAM Index integration

```
```

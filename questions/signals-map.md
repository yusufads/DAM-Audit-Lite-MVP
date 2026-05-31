# DAM Signals Map v1.0

## Purpose

This document defines the operational signal map used by DAM Audit Lite.

Each signal is classified according to:

* Category
* Importance Level
* Detection Method
* Audit Source

The signal map serves as the bridge between:

* GEO-DAM Framework
* Audit Questions
* Detection Engine
* Scoring Engine
* Digital Perception Dataset

---

# Importance Levels

## Critical

Signals that directly influence AI understanding, recommendation and trust.

## High

Signals that strongly support digital perception and authority.

## Medium

Signals that improve visibility and confidence but are not primary ranking factors.

---

# Detection Methods

## Automatic

Can be detected by a crawler or audit engine.

Examples:

* About page
* Schema markup
* FAQ pages
* Contact information

## Manual

Requires human judgment or business knowledge.

Examples:

* Positioning clarity
* Differentiation
* Industry reputation

## Hybrid

Combination of system detection and user confirmation.

Examples:

* Expert authority
* AI visibility
* Media presence

---

# Entity Presence

| Signal                     | Importance | Detection | Audit Source   |
| -------------------------- | ---------- | --------- | -------------- |
| entity_foundation          | Critical   | Automatic | Website        |
| brand_identity             | High       | Hybrid    | Website + User |
| expert_association         | High       | Hybrid    | Website + User |
| cross_platform_consistency | High       | Hybrid    | Website + User |
| business_legitimacy        | Critical   | Automatic | Website        |

---

# Authority Signals

| Signal               | Importance | Detection | Audit Source            |
| -------------------- | ---------- | --------- | ----------------------- |
| external_validation  | Critical   | Hybrid    | User + External Sources |
| citation_strength    | High       | Hybrid    | User + External Sources |
| media_presence       | High       | Hybrid    | User + External Sources |
| expert_authority     | High       | Hybrid    | User + Website          |
| industry_recognition | Medium     | Manual    | User                    |

---

# Knowledge Layer

| Signal              | Importance | Detection | Audit Source |
| ------------------- | ---------- | --------- | ------------ |
| knowledge_depth     | High       | Hybrid    | Website      |
| faq_coverage        | High       | Automatic | Website      |
| semantic_structure  | Critical   | Automatic | Website      |
| content_authority   | High       | Hybrid    | Website      |
| machine_readability | Critical   | Automatic | Website      |

---

# AI Visibility

| Signal             | Importance | Detection | Audit Source      |
| ------------------ | ---------- | --------- | ----------------- |
| ai_discoverability | Critical   | Hybrid    | User + AI Systems |
| ai_accuracy        | Critical   | Manual    | User              |
| ai_association     | High       | Manual    | User              |
| ai_recommendation  | Critical   | Manual    | User              |
| ai_optimization    | High       | Manual    | User              |

---

# Perception Layer

| Signal                 | Importance | Detection | Audit Source   |
| ---------------------- | ---------- | --------- | -------------- |
| trust_signals          | Critical   | Automatic | Website        |
| proof_signals          | High       | Hybrid    | Website        |
| differentiation        | Critical   | Manual    | User           |
| positioning_clarity    | Critical   | Manual    | User           |
| reputation_consistency | High       | Hybrid    | User + Website |

---

# Audit Coverage Summary

## Automatic Signals

* entity_foundation
* business_legitimacy
* faq_coverage
* semantic_structure
* machine_readability
* trust_signals

Total: 6

---

## Hybrid Signals

* brand_identity
* expert_association
* cross_platform_consistency
* external_validation
* citation_strength
* media_presence
* expert_authority
* knowledge_depth
* content_authority
* ai_discoverability
* proof_signals
* reputation_consistency

Total: 12

---

## Manual Signals

* industry_recognition
* ai_accuracy
* ai_association
* ai_recommendation
* ai_optimization
* differentiation
* positioning_clarity

Total: 7

---

# Strategic Note

The long-term goal of DAM Audit Lite is to reduce reliance on manual answers.

Future versions should gradually increase automatic and hybrid detection while minimizing subjective user input.

Version 1.0 will primarily operate as a self-assessment model.

Version 2.0 should evolve toward a hybrid audit model powered by automated signal detection.

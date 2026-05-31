# Question Object Schema

## Purpose

This document defines the official question structure used by DAM Audit Lite.

All assessment questions must follow this schema to ensure consistency across:

- Scoring Engine
- PDF Report Generator
- Digital Perception Dataset
- Future DAM Audit Versions

---

## Question Structure

Each question is represented as a structured object.

```json
{
  "id": "EP1",
  "category": "entity_presence",
  "signal": "entity_foundation",
  "type": "manual",
  "weight": 4,
  "question": {
    "en": "Does your brand have a clearly identifiable official website or primary digital home?",
    "tr": "Markanızın açık şekilde tanımlanabilen resmi bir web sitesi veya dijital merkezi bulunuyor mu?"
  },
  "description": {
    "en": "AI systems need a reliable primary source to understand the brand.",
    "tr": "Yapay zekâ sistemleri markayı anlamak için güvenilir bir ana kaynağa ihtiyaç duyar."
  },
  "feedback": {
    "positive": {
      "en": "Your brand has a strong primary entity foundation.",
      "tr": "Markanız güçlü bir dijital varlık temeline sahip."
    },
    "negative": {
      "en": "Your brand lacks a clear primary entity source.",
      "tr": "Markanızın belirgin bir dijital varlık merkezi bulunmuyor."
    }
  }
}

# Field Definitions
id

Unique identifier for the question.

Examples:

EP1
AS2
KL3
AV4
PL5

# Rules:

Must be unique.
Must not change between versions.
Used for scoring and dataset records.

# category

Defines the DAM dimension the question belongs to.

# Allowed values:

entity_presence
authority_signals
knowledge_layer
ai_visibility
perception_layer

# signal

Defines the specific signal being measured.

Examples:

entity_foundation
expert_association
brand_consistency
external_validation
knowledge_depth
semantic_structure
ai_discoverability
trust_signals
differentiation

Purpose:

Signals enable deeper dataset analysis beyond category scores.

# type

Defines how the answer is collected.

Allowed values:

manual
automatic
hybrid

Definitions:

manual: User provides the answer.
automatic: System detects the signal automatically.
hybrid: Combination of system detection and user input.

# weight

Determines the contribution of the question to the category score.

Version 1.0:

"weight": 4

All questions use equal weight in v1.0.

# question

The actual question presented to the user.

Supports multilingual content.

{
  "en": "...",
  "tr": "..."
}

# description

Provides context and explains why the signal matters.

Supports multilingual content.

{
  "en": "...",
  "tr": "..."
}

feedback

Used by the PDF Report Generator.

Contains predefined feedback for positive and negative outcomes.

{
  "positive": {
    "en": "...",
    "tr": "..."
  },
  "negative": {
    "en": "...",
    "tr": "..."
  }
}

## Answer Model

All questions use the same answer model.

[
  {
    "label": {
      "en": "No",
      "tr": "Hayır"
    },
    "value": 0
  },
  {
    "label": {
      "en": "Partially",
      "tr": "Kısmen"
    },
    "value": 2
  },
  {
    "label": {
      "en": "Yes",
      "tr": "Evet"
    },
    "value": 4
  }
]

# Scoring Logic

Per question:

No = 0
Partially = 2
Yes = 4

Per category:

5 questions x 4 points = 20

Overall audit:

5 categories x 20 points = 100

# Dataset Mapping

Each answer record should contain:

{
  "question_id": "EP1",
  "category": "entity_presence",
  "signal": "entity_foundation",
  "answer": 4
}

This structure enables future analysis of:

Category trends
Signal trends
Industry benchmarks
Digital Perception Dataset reports

## Versioning Policy

Version 1.0:

25 questions
5 categories
Equal weights
Manual assessment

# Future versions may:

Add new signals
Add industry-specific questions
Add automatic detection methods
Introduce weighted scoring

Question IDs should remain stable whenever possible.



# Question Object Schema

## Purpose

This document defines the official question structure used by DAM Audit Lite.

All assessment questions must follow this schema to ensure consistency across:

- Scoring Engine
- PDF Report Generator
- Digital Perception Dataset
- Future DAM Audit Versions

# Question Object Schema

## Required Fields

| Field       | Type    | Description                           |
| ----------- | ------- | ------------------------------------- |
| id          | string  | Unique question identifier            |
| category    | string  | DAM category                          |
| signal      | string  | Signal being measured                 |
| type        | string  | manual, automatic or hybrid           |
| weight      | integer | Question weight                       |
| question    | object  | Localized question text               |
| description | object  | Localized explanation                 |
| feedback    | object  | Positive and negative report messages |

---

## Categories

* entity_presence
* authority_signals
* knowledge_layer
* ai_visibility
* perception_layer

---

## Question Types

* manual
* automatic
* hybrid

---

## Answer Values

| Answer    | Value |
| --------- | ----- |
| No        | 0     |
| Partially | 2     |
| Yes       | 4     |

---

## Dataset Mapping

Each answer record should store:

* question_id
* category
* signal
* answer

---

## Version 1.0 Rules

* 25 questions
* 5 categories
* 5 questions per category
* Equal weight scoring
* Maximum score: 100


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


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

Field Definitions
id

Unique identifier for the question.

Examples:

EP1
AS2
KL3
AV4
PL5

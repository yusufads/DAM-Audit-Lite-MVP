# DAM Audit Lite Report Rules v1.0

## Purpose

This document defines the report generation logic used by DAM Audit Lite.

Each signal can produce:

* Findings
* Warnings
* Recommendations
* Priority Actions

The report engine evaluates signals individually before generating category-level and overall recommendations.

---

# Rule Severity Levels

## Critical

Immediate improvement required.

Usually triggered when:

```text
Score = 0
```

and signal importance is Critical.

---

## High

Important weakness that should be addressed soon.

Usually triggered when:

```text
Score = 0 or 2
```

---

## Medium

Opportunity for improvement.

Usually triggered when:

```text
Score = 2
```

---

# Entity Presence

## entity_foundation

Importance:
Critical

Condition:

```text
Score = 0
```

Finding:

The brand lacks a clearly identifiable primary digital source.

Recommendation:

Establish and maintain an official website that acts as the central source of brand information.

Priority:

Critical

---

## brand_identity

Importance:
High

Condition:

```text
Score <= 2
```

Finding:

The brand identity may be unclear or difficult for users and AI systems to understand.

Recommendation:

Clearly define who the brand is, what it does and who it serves.

Priority:

High

---

## expert_association

Importance:
High

Condition:

```text
Score <= 2
```

Finding:

The brand lacks visible human expertise signals.

Recommendation:

Increase visibility of founders, experts and key representatives.

Priority:

High

---

## cross_platform_consistency

Importance:
High

Condition:

```text
Score <= 2
```

Finding:

Brand identity appears inconsistent across digital platforms.

Recommendation:

Standardize branding, messaging and entity references across all channels.

Priority:

High

---

## business_legitimacy

Importance:
Critical

Condition:

```text
Score = 0
```

Finding:

The business lacks sufficient public legitimacy signals.

Recommendation:

Improve visibility of business details, contact information and trust indicators.

Priority:

Critical

---

# Authority Signals

## external_validation

Importance:
Critical

Condition:

```text
Score <= 2
```

Finding:

The brand lacks sufficient third-party validation.

Recommendation:

Increase mentions, references and recognition from external sources.

Priority:

High

---

## citation_strength

Importance:
High

Condition:

```text
Score <= 2
```

Finding:

Citation strength is limited.

Recommendation:

Improve visibility through industry references and trusted sources.

Priority:

High

---

## media_presence

Importance:
High

Condition:

```text
Score <= 2
```

Finding:

Media visibility is limited.

Recommendation:

Increase participation in media, publications and industry discussions.

Priority:

Medium

---

## expert_authority

Importance:
High

Condition:

```text
Score <= 2
```

Finding:

Expert authority signals are weak.

Recommendation:

Publish expert-led content and professional contributions.

Priority:

High

---

## industry_recognition

Importance:
Medium

Condition:

```text
Score <= 2
```

Finding:

Industry recognition remains limited.

Recommendation:

Strengthen visibility within the professional ecosystem.

Priority:

Medium

---

# Knowledge Layer

## knowledge_depth

Recommendation:

Expand informational depth across key pages.

---

## faq_coverage

Recommendation:

Create FAQ resources that answer common customer questions.

---

## semantic_structure

Recommendation:

Improve semantic content organization and information architecture.

---

## content_authority

Recommendation:

Increase educational and expertise-driven content production.

---

## machine_readability

Recommendation:

Improve machine-readable content structure and technical discoverability.

---

# AI Visibility

## ai_discoverability

Recommendation:

Increase entity signals that help AI systems identify and discover the brand.

---

## ai_accuracy

Recommendation:

Improve consistency and clarity of publicly available brand information.

---

## ai_association

Recommendation:

Strengthen content around desired expertise and topic areas.

---

## ai_recommendation

Recommendation:

Develop content and authority signals that support AI-driven recommendations.

---

## ai_optimization

Recommendation:

Implement a structured AI visibility strategy aligned with GEO principles.

---

# Perception Layer

## trust_signals

Recommendation:

Increase visible trust indicators across digital properties.

---

## proof_signals

Recommendation:

Publish measurable results, case studies and evidence-based content.

---

## differentiation

Recommendation:

Clarify what makes the brand unique within its category.

---

## positioning_clarity

Recommendation:

Strengthen and simplify the brand positioning statement.

---

## reputation_consistency

Recommendation:

Ensure the brand is represented consistently across all digital touchpoints.

---

# Report Generation Logic

The report engine should generate:

## Top Strengths

Signals scoring:

```text
4
```

---

## Improvement Opportunities

Signals scoring:

```text
2
```

---

## Critical Gaps

Critical signals scoring:

```text
0
```

---

## Priority Actions

Generated from:

* Critical Gaps
* High Severity Signals
* Weakest Categories

---

## 90-Day Roadmap

Generated from the three highest-priority recommendations.

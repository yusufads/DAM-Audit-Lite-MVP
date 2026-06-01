# DAM Audit Lite App Structure v1.0

## Goal

Create the simplest possible MVP capable of:

* Running the audit
* Calculating scores
* Capturing leads
* Generating reports

---

# Route Structure

/

Landing Page

---

/audit/start

Brand Information

---

/audit/questions

25 Questions

---

/audit/results

Score Preview

---

/audit/report

Email Capture

---

/audit/success

Confirmation

---

# Data Flow

User

↓

Brand Information

↓

Answers

↓

Score Engine

↓

Report Engine

↓

Email Capture

↓

PDF Delivery

↓

Dataset Storage

---

# MVP Components

## Landing Page

Component:

Hero

Benefits

Framework

CTA

---

## Assessment Engine

Component:

Question Cards

Progress Bar

Navigation

---

## Scoring Engine

Component:

Category Scores

Total Score

Classification

---

## Lead Capture

Component:

Name

Email

Optional Phone

---

## Report Generator

Component:

PDF Output

Recommendations

Roadmap

---

# MVP Technology

Frontend:

HTML

Tailwind CSS

Vanilla JavaScript

Backend:

Supabase

or

Firebase

Database:

Audit Results

Lead Records

Dataset Records

---

# Version 1.0 Rule

No Authentication

No User Accounts

No Dashboard

No Saved Reports

No Team Features

Focus:

Audit Completion
Email Capture
Dataset Growth

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import NextProject from "../../components/NextProject";

const CSS = `
  .dc-page { font-family: var(--font-dm-sans, 'DM Sans', sans-serif); background: #FAFAF8; color: #1C1A16; }

  /* Skip link */
  .dc-skip { position: absolute; top: -100%; left: 16px; background: #2B5EE8; color: #fff; padding: 8px 16px; font-size: 14px; font-weight: 600; z-index: 200; text-decoration: none; }
  .dc-skip:focus { top: 8px; outline: 2px solid #fff; outline-offset: 2px; }

  /* Nav */
  .dc-nav { position: sticky; top: 0; z-index: 50; background: rgba(250,250,248,0.92); backdrop-filter: blur(12px); padding: 0 48px; height: 52px; display: flex; align-items: center; justify-content: space-between; }
  .dc-nav.scrolled { border-bottom: 1px solid #E4E0DB; }
  .dc-nav-logo { display: flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 600; color: #1C1A16; }
  .dc-nav-dot { width: 8px; height: 8px; border-radius: 50%; background: #2B5EE8; flex-shrink: 0; }
  .dc-nav-links { display: flex; gap: 28px; }
  .dc-nav-links a { font-size: 12px; color: #9B9690; text-decoration: none; }
  .dc-nav-links a:hover { color: #1C1A16; }
  .dc-nav-links a:focus-visible { outline: 2px solid #2B5EE8; outline-offset: 3px; color: #1C1A16; }
  @media (max-width: 768px) { .dc-nav { padding: 0 24px; } .dc-nav-links { display: none; } }

  /* Layout */
  .dc-container { max-width: 1100px; margin: 0 auto; padding: 0 48px; }
  .dc-prose { max-width: 680px; }
  @media (max-width: 768px) { .dc-container { padding: 0 24px; } }

  /* Sections */
  .dc-section { border-top: 1px solid #E4E0DB; padding: 96px 0; scroll-margin-top: 52px; }
  .dc-section-first { border-top: none !important; }
  .dc-section-compact { padding: 72px 0; }

  /* Typography */
  .dc-eyebrow { font-family: var(--font-dm-mono, 'DM Mono', monospace); font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: #2B5EE8; margin-bottom: 12px; }
  .dc-rule { width: 40px; height: 2px; background: #2B5EE8; margin: 20px 0; }
  .dc-pullquote { border-left: 3px solid #2B5EE8; padding-left: 24px; margin: 32px 0; font-size: 18px; font-weight: 300; font-style: italic; color: #1C1A16; line-height: 1.65; }
  .dc-section h2 { text-wrap: balance; }
  .dc-section h3 { text-wrap: balance; }
  .dc-hero-title { font-size: clamp(38px, 5vw, 54px); line-height: 1.1; text-wrap: balance; }
  .dc-hero-title .t-light { font-weight: 300; }
  .dc-hero-title .t-bold { font-weight: 600; }
  .dc-hero-title .t-blue { color: #2B5EE8; font-weight: 600; }

  /* Chips */
  .dc-chip { font-family: var(--font-dm-mono, 'DM Mono', monospace); font-size: 10px; background: #EEF2FD; color: #2B5EE8; padding: 3px 8px; display: inline-block; }
  .dc-chip-neutral { background: #FAFAF8; color: #4A4740; border: 1px solid #E4E0DB; }
  .dc-chips-row { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 8px; }

  /* Data table */
  .dc-table { border: 1px solid #E4E0DB; width: 100%; }
  .dc-row { display: grid; grid-template-columns: minmax(100px, 160px) 1fr; border-bottom: 1px solid #E4E0DB; }
  .dc-row:last-child { border-bottom: none; }
  .dc-label { padding: 12px 16px; font-family: var(--font-dm-mono, 'DM Mono', monospace); font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em; color: #9B9690; background: #FAFAF8; border-right: 1px solid #E4E0DB; }
  .dc-value { padding: 12px 16px; font-size: 13px; color: #4A4740; line-height: 1.6; }
  @media (max-width: 480px) { .dc-row { grid-template-columns: 1fr; } .dc-label { border-right: none; border-bottom: 1px solid #E4E0DB; } }

  /* Screen placeholder */
  .dc-screen { background: #FFFFFF; border: 1px solid #E4E0DB; height: 320px; display: flex; align-items: center; justify-content: center; font-family: var(--font-dm-mono, 'DM Mono', monospace); font-size: 12px; color: #9B9690; margin: 20px 0; }
  .dc-screen-tall { height: 380px; }
  .dc-screen-row { display: flex; flex-wrap: wrap; gap: 16px; margin: 20px 0; align-items: center; }
  .dc-screen-img { flex-shrink: 0; }
  .dc-screen-img img { height: 380px; width: auto; display: block; border-radius: 12px; }

  /* Stats */
  .dc-stats { display: flex; border: 1px solid #E4E0DB; margin-top: 32px; flex-wrap: wrap; }
  .dc-stat { padding: 16px 20px; border-right: 1px solid #E4E0DB; flex: 1; min-width: 72px; }
  .dc-stat:last-child { border-right: none; }
  .dc-stat-num { font-size: 24px; font-weight: 600; color: #1C1A16; display: block; }
  .dc-stat-label { font-family: var(--font-dm-mono, 'DM Mono', monospace); font-size: 10px; color: #9B9690; display: block; margin-top: 2px; }

  /* Hero grid */
  .dc-hero-grid { display: grid; grid-template-columns: 55% 45%; gap: 60px; align-items: start; }
  @media (max-width: 900px) { .dc-hero-grid { grid-template-columns: 1fr; gap: 40px; } }

  /* Insight preview card */
  .dc-insight-preview { background: #FFFFFF; border: 1px solid #E4E0DB; margin-top: 20px; }
  .dc-insight-preview-header { font-family: var(--font-dm-mono, 'DM Mono', monospace); font-size: 10px; color: #9B9690; padding: 14px 18px; border-bottom: 1px solid #E4E0DB; text-transform: uppercase; letter-spacing: 0.08em; }
  .dc-insight-preview-row { display: flex; gap: 12px; padding: 10px 18px; border-bottom: 1px solid #E4E0DB; align-items: flex-start; }
  .dc-insight-preview-row:last-child { border-bottom: none; }
  .dc-insight-num { font-family: var(--font-dm-mono, 'DM Mono', monospace); font-size: 10px; color: #2B5EE8; flex-shrink: 0; padding-top: 2px; }
  .dc-insight-text { font-size: 13px; color: #4A4740; }

  /* Two column */
  .dc-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; }
  @media (max-width: 900px) { .dc-grid-2 { grid-template-columns: 1fr; gap: 32px; } }

  /* Problem list */
  .dc-problem-list { list-style: none; padding: 0; margin: 0; }
  .dc-problem-item { border-top: 1px solid #E4E0DB; padding: 16px 0; font-size: 14px; color: #4A4740; display: flex; gap: 16px; align-items: flex-start; }
  .dc-problem-num { font-family: var(--font-dm-mono, 'DM Mono', monospace); font-size: 10px; color: #2B5EE8; flex-shrink: 0; padding-top: 2px; }

  /* Persona */
  .dc-persona { background: #FFFFFF; border: 1px solid #E4E0DB; margin-top: 24px; }
  .dc-persona-header { background: #2B5EE8; padding: 12px 16px; }
  .dc-persona-name { font-size: 14px; font-weight: 600; color: #FFFFFF; }
  .dc-persona-sub { font-family: var(--font-dm-mono, 'DM Mono', monospace); font-size: 10px; color: rgba(255,255,255,0.65); margin-top: 2px; }
  .dc-persona-quote { padding: 14px 16px; font-size: 14px; font-style: italic; color: #4A4740; border-bottom: 1px solid #E4E0DB; line-height: 1.6; }

  /* Insights */
  .dc-insight-row { position: relative; border-top: 1px solid #E4E0DB; padding: 28px 0 28px 20px; display: flex; gap: 28px; align-items: flex-start; }
  .dc-insight-strip { position: absolute; left: 0; top: 0; bottom: 0; width: 2px; background: #2B5EE8; }
  .dc-insight-number { font-family: var(--font-dm-mono, 'DM Mono', monospace); font-size: 10px; color: #2B5EE8; flex-shrink: 0; padding-top: 4px; }
  .dc-insight-content { flex: 1; }
  .dc-insight-title { font-size: 16px; font-weight: 500; color: #1C1A16; margin-bottom: 8px; text-wrap: balance; }
  .dc-insight-body { font-size: 14px; color: #4A4740; line-height: 1.7; margin-bottom: 8px; }
  .dc-insight-impl { font-size: 13px; color: #4A4740; font-style: italic; margin-bottom: 10px; }

  /* HMW */
  .dc-hmw-list { list-style: none; padding: 0; margin: 0; }
  .dc-hmw-item { border-top: 1px solid #E4E0DB; padding: 14px 0; font-size: 14px; color: #4A4740; display: flex; gap: 12px; align-items: flex-start; }
  .dc-hmw-prefix { font-family: var(--font-dm-mono, 'DM Mono', monospace); font-size: 10px; color: #2B5EE8; flex-shrink: 0; padding-top: 2px; }

  /* IA list */
  .dc-ia-list { list-style: none; padding: 0; margin: 0; }
  .dc-ia-item { display: flex; gap: 12px; padding: 10px 0; border-bottom: 1px solid #E4E0DB; }
  .dc-ia-item:last-child { border-bottom: none; }
  .dc-ia-name { font-size: 13px; font-weight: 500; color: #1C1A16; min-width: 80px; }
  .dc-ia-desc { font-size: 13px; color: #9B9690; }

  /* Journey map */
  .dc-journey-wrap { border: 1px solid #E4E0DB; background: #FFFFFF; padding: 32px 24px 24px; margin-top: 32px; overflow-x: auto; -webkit-overflow-scrolling: touch; }
  .dc-journey-title { font-family: var(--font-dm-mono, 'DM Mono', monospace); font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em; color: #9B9690; margin-bottom: 24px; display: flex; gap: 24px; align-items: center; }
  .dc-journey-legend { display: flex; gap: 16px; }
  .dc-legend-item { display: flex; align-items: center; gap: 6px; font-size: 10px; color: #4A4740; }
  .dc-legend-dot { width: 10px; height: 10px; flex-shrink: 0; }

  /* Design principles */
  .dc-principles-list { list-style: none; padding: 0; margin: 0; }
  .dc-principle-item { border-top: 1px solid #E4E0DB; padding: 20px 0; display: flex; gap: 20px; align-items: flex-start; }
  .dc-principle-num { font-family: var(--font-dm-mono, 'DM Mono', monospace); font-size: 10px; color: #2B5EE8; flex-shrink: 0; padding-top: 4px; min-width: 20px; }
  .dc-principle-name { font-size: 15px; font-weight: 600; color: #1C1A16; margin-bottom: 4px; }
  .dc-principle-desc { font-size: 13px; color: #4A4740; line-height: 1.6; }

  /* Design decisions */
  .dc-decision { border-top: 1px solid #E4E0DB; padding-top: 40px; margin-bottom: 40px; }
  .dc-decision-label { font-family: var(--font-dm-mono, 'DM Mono', monospace); font-size: 11px; color: #9B9690; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 8px; }
  .dc-decision-headline { font-size: 22px; font-weight: 600; color: #1C1A16; margin-bottom: 16px; line-height: 1.3; text-wrap: balance; }

  /* Usability testing */
  .dc-finding { border-top: 1px solid #E4E0DB; padding: 20px 0; display: flex; gap: 20px; align-items: flex-start; }
  .dc-finding-num { font-family: var(--font-dm-mono, 'DM Mono', monospace); font-size: 10px; color: #2B5EE8; flex-shrink: 0; padding-top: 3px; min-width: 20px; }
  .dc-finding-title { font-size: 14px; font-weight: 600; color: #1C1A16; margin-bottom: 4px; }
  .dc-finding-body { font-size: 13px; color: #4A4740; line-height: 1.6; }
  .dc-changes-list { list-style: none; padding: 0; margin: 0; }
  .dc-change-item { border-top: 1px solid #E4E0DB; padding: 14px 0; font-size: 14px; color: #4A4740; display: flex; gap: 16px; align-items: flex-start; }
  .dc-change-mark { font-family: var(--font-dm-mono, 'DM Mono', monospace); font-size: 10px; color: #2B5EE8; flex-shrink: 0; padding-top: 2px; }

  /* Final screens */
  .dc-screen-group { margin-bottom: 56px; }
  .dc-screen-group-header { display: flex; align-items: baseline; gap: 10px; margin-bottom: 4px; flex-wrap: wrap; }
  .dc-screen-group-name { font-size: 18px; font-weight: 600; color: #1C1A16; display: block; }
  .dc-screen-group-sep { color: #E4E0DB; }
  .dc-screen-group-desc { font-size: 14px; color: #9B9690; }
  .dc-screen-bullets { list-style: disc; padding-left: 20px; margin-top: 12px; }
  .dc-screen-bullets li { font-size: 13px; color: #9B9690; margin-bottom: 4px; }

  /* Reflection */
  h3.dc-refl-sub { font-size: 18px; font-weight: 600; color: #1C1A16; margin: 32px 0 8px; }
  .dc-refl-list { list-style: disc; padding-left: 20px; }
  .dc-refl-list li { font-size: 15px; color: #4A4740; margin-bottom: 6px; line-height: 1.7; }
`;

// ── Data ──────────────────────────────────────────────────────────────────────

const insights = [
  {
    num: "01",
    title: "Confirmation is the real unmet need",
    body: "Users were often unsure whether they had already taken a medication, especially when managing multiple doses across the day. No existing tool gave them a reliable way to check.",
    impl: "→ Design implication: prioritize explicit dose confirmation over reminders.",
    chips: ["#confirmation", "#uncertainty", "#trust"],
  },
  {
    num: "02",
    title: "Notification fatigue undermines adherence",
    body: "Frequent, undifferentiated alerts trained users to ignore reminders entirely. Mrs. Eleanor's son reported she would dismiss notifications out of habit even when they were important.",
    impl: "→ Design implication: fewer, more meaningful alerts — not more.",
    chips: ["#notification-fatigue", "#signal-vs-noise"],
  },
  {
    num: "03",
    title: "Complex app entry creates a barrier at onboarding",
    body: "Existing apps like Perx required manual prescription entry with medical terminology. Participants abandoned setup mid-flow or relied on family members to complete it.",
    impl: "→ Design implication: barcode scanning as the primary entry — manual as fallback only.",
    chips: ["#onboarding", "#friction", "#scan-first"],
  },
  {
    num: "04",
    title: "Simplicity enables independence",
    body: "Older adults wanted to remain in control of their own routines but needed interfaces that felt calm, clear, and low-effort. Complexity forced reliance on others.",
    impl: "→ Design implication: each screen focuses on one task — no feature overload.",
    chips: ["#autonomy", "#simplicity", "#calm-design"],
  },
  {
    num: "05",
    title: "Accessibility is foundational, not optional",
    body: "Readability, tap target size, and clear interaction patterns are central when serving 65+ users managing medication under cognitive or physical constraints.",
    impl: "→ Design implication: accessibility shapes layout, hierarchy, and feedback everywhere.",
    chips: ["#a11y", "#older-adults", "#readability"],
  },
];

const hmwItems = [
  "Help Mrs. Eleanor confirm whether a dose has actually been taken",
  "Reduce notification volume without reducing adherence reliability",
  "Make adding medication feel approachable and error-proof from the first interaction",
  "Give her son visibility into exceptions without overstepping her autonomy",
  "Build trust through clear confirmation states and straightforward language",
];

const iaItems = [
  { name: "Home", desc: "Today-focused dose feed with confirmation actions" },
  { name: "Medication", desc: "Detailed medication info, schedules, and side effects" },
  { name: "Scan / Add", desc: "Barcode-first entry with manual fallback" },
  { name: "Care", desc: "Lightweight doctor communication for medication questions" },
  { name: "Profile", desc: "Preferences, settings, and caregiver access controls" },
];

const principles = [
  { name: "Confirmation First", desc: "The system should make it easy to record whether medication has actually been taken. Confirmation is the core interaction — not reminders." },
  { name: "Simplicity Over Completeness", desc: "Each screen focuses on the most important task. Secondary details appear when needed, never all at once." },
  { name: "Progressive Disclosure", desc: "Refill info, side effect details, and educational content surface on demand — not upfront." },
  { name: "Accessibility by Default", desc: "Large typography, clear contrast, 48pt minimum touch targets, and icon + label status states. Designed for 65+ from the ground up." },
  { name: "Autonomy With Support", desc: "Users feel independent while having access to caregiver visibility and doctor communication — when they choose it." },
];

const decisions = [
  {
    label: "Decision 01 — Home Screen",
    headline: "Today-only view as single source of truth",
    rows: [
      { label: "Decision", value: "Home screen shows only today's doses with confirm / skip actions." },
      { label: "Alternatives", value: "Full calendar view, multi-week schedule, notification-only model." },
      { label: "Reasoning", value: "Limiting scope to today makes the current task immediately obvious and reduces anxiety from seeing future complexity." },
      { label: "Linked insights", value: "#01 Confirmation · #04 Simplicity · #02 Notification fatigue" },
    ],
  },
  {
    label: "Decision 02 — Dose Confirmation",
    headline: "Confirmation embedded directly in the feed",
    rows: [
      { label: "Decision", value: "Users confirm upcoming doses from the home feed without deeper navigation." },
      { label: "Alternatives", value: "Dedicated confirmation screen, pop-up modal, notification reply." },
      { label: "Reasoning", value: "The confirmation-first model must be instantly accessible — not buried one tap away." },
      { label: "Linked insights", value: "#01 Confirmation · #04 Simplicity · #05 Accessibility" },
    ],
  },
  {
    label: "Decision 03 — Scan to Add",
    headline: "Barcode scanning as the primary entry",
    rows: [
      { label: "Decision", value: "Barcode-first onboarding auto-fills pill name, dosage, and instructions. Manual entry sits below as fallback." },
      { label: "Alternatives", value: "Manual form only, search-by-name, photo recognition." },
      { label: "Reasoning", value: "Perx research showed manual entry caused abandonment. Scanning removes the complexity that forced users to ask for help." },
      { label: "Linked insights", value: "#03 Onboarding · #04 Simplicity · #01 Trust" },
    ],
  },
  {
    label: "Decision 04 — Smarter Notifications",
    headline: "Fewer alerts, higher signal",
    rows: [
      { label: "Decision", value: "Notifications fire only at scheduled dose times and for missed doses — not for every action." },
      { label: "Alternatives", value: "Frequent check-in notifications, caregiver-triggered alerts, push on every event." },
      { label: "Reasoning", value: "Notification fatigue was a root cause of non-adherence in research. Reducing alert volume increases the weight of each one." },
      { label: "Linked insights", value: "#02 Notification fatigue · #04 Simplicity" },
    ],
  },
  {
    label: "Decision 05 — Medication Detail",
    headline: "Education and clarity balanced in one view",
    rows: [
      { label: "Decision", value: "Key warnings surface first; longer educational content stays accessible but collapsed." },
      { label: "Alternatives", value: "Flat list of all info, external pharmacy links only." },
      { label: "Reasoning", value: "Progressive disclosure keeps the screen informative without overwhelming — especially for users managing 5–7 medications." },
      { label: "Linked insights", value: "#04 Simplicity · #01 Trust · #05 Accessibility" },
    ],
  },
  {
    label: "Decision 06 — Caregiver Visibility",
    headline: "Exception-only signals for caregivers",
    rows: [
      { label: "Decision", value: "Caregivers see missed dose alerts and today's summary — not the full schedule or history." },
      { label: "Alternatives", value: "Full schedule view, real-time tracking dashboard, no caregiver access." },
      { label: "Reasoning", value: "Mrs. Eleanor's son called daily to verify. The design reduces that burden while preserving her autonomy — he sees exceptions, not surveillance." },
      { label: "Linked insights", value: "#02 Notification fatigue · #04 Autonomy" },
    ],
  },
];

const findings = [
  {
    num: "01",
    title: "Users were unsure where to begin adding medication",
    body: "Add-medication flow had 80% completion but 40% of users hesitated at the entry point — it was not self-explanatory enough.",
    metric: "80% completion · 40% hesitation at entry",
  },
  {
    num: "02",
    title: "Reminder confirmation was easy to complete",
    body: "The reminder confirmation flow reached 100% task completion. Users found the action-oriented interaction clear and satisfying.",
    metric: "100% completion · positive sentiment",
  },
  {
    num: "03",
    title: "Medication information entry point was too subtle",
    body: "80% completion rate on the medication info task. One participant could not find the information button — the access point needed more prominence.",
    metric: "80% completion · 1 user failed to locate",
  },
];

const designChanges = [
  { mark: "→", text: "Removed redundancy between scan and add entry points — consolidated into a single clear CTA." },
  { mark: "→", text: "Replaced \u201cSkip\u201d with \u201cLater\u201d \u2014 felt more natural and less punitive for older adults." },
  { mark: "→", text: "Made the medication information entry point more direct and visually prominent." },
];

const v1Screens = [
  {
    name: "Home",
    desc: "Initial dose feed concept",
    bullets: ["Flat list with no time grouping", "Combined confirm + skip into one ambiguous tap", "No visual confirmation state"],
    images: [
      { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757774/portfolio/projects/dosecare/home.png", alt: "DoseCare home screen v1" },
      { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757775/portfolio/projects/dosecare/home1.png", alt: "DoseCare home screen v1 variant" },
    ],
  },
  {
    name: "Add Medication",
    desc: "Manual-first entry",
    bullets: ["Required medical terminology upfront", "Scan as secondary option, buried below form", "No auto-fill after scan"],
    images: [
      { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757765/portfolio/projects/dosecare/Scan.png", alt: "DoseCare scan screen v1" },
      { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757781/portfolio/projects/dosecare/scan-confirm.png", alt: "DoseCare scan confirmation v1" },
      { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757770/portfolio/projects/dosecare/add.png", alt: "DoseCare add medication v1" },
    ],
  },
  {
    name: "Medication Detail",
    desc: "All info shown at once",
    bullets: ["Flat dump of warnings, dosage, schedule, side effects", "No progressive disclosure", "Information overload for 65+ users"],
    images: [
      { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757777/portfolio/projects/dosecare/medicine.png", alt: "DoseCare medication detail v1" },
      { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757778/portfolio/projects/dosecare/refill.png", alt: "DoseCare refill screen v1" },
    ],
  },
];

const screenGroups = [
  {
    name: "Home & Confirmation",
    desc: "The single source of truth for today's doses",
    noWrap: true,
    bullets: [
      "Today-only dose feed — one task at a time, no future complexity",
      "Confirm or skip directly from the feed, no extra navigation",
      "Dynamic Island integration for ambient dose reminders without interruption",
    ],
    images: [
      { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757727/portfolio/projects/dosecare/Home/Dynamic-Island-1.png", alt: "DoseCare dynamic island notification" },
      { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757728/portfolio/projects/dosecare/Home/Dynamic-Island-2.png", alt: "DoseCare dynamic island expanded" },
      { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773760253/portfolio/projects/dosecare/Home/Home-1.png", alt: "DoseCare home variant" },
      { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773760254/portfolio/projects/dosecare/Home/home-2.png", alt: "DoseCare home screen" },
      { src: "/projects/dosecare/Apple-Watch-Ultra.png", alt: "DoseCare Apple Watch Ultra — Home & Confirmation", imgStyle: { height: "240px", width: "auto" } },
    ],
  },
  {
    name: "Medications",
    desc: "Full medication management with progressive disclosure",
    bullets: [
      "Medication list with dosage, schedule, and status at a glance",
      "Detail view reveals warnings and side effects on demand — not upfront",
      "Refill flow connects directly to doctor or pharmacy in one tap",
    ],
    images: [
      { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757734/portfolio/projects/dosecare/Med/Medication-List.png", alt: "DoseCare medication list" },
      { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757733/portfolio/projects/dosecare/Med/Medication-List-6.png", alt: "DoseCare medication list variant" },
      { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757732/portfolio/projects/dosecare/Med/Medication-Info-2.png", alt: "DoseCare medication info" },
      { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757731/portfolio/projects/dosecare/Med/Medication-Enter-Time-2.png", alt: "DoseCare enter time" },
      { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757730/portfolio/projects/dosecare/Med/Medication-Enter-Time-1-2.png", alt: "DoseCare enter time variant" },
      { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757734/portfolio/projects/dosecare/Med/Medication-refill-2.png", alt: "DoseCare medication refill" },
      { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757735/portfolio/projects/dosecare/Med/Medication-refill-Doctor-2.png", alt: "DoseCare refill doctor" },
      { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757736/portfolio/projects/dosecare/Med/Medication-refill-Pharma-2.png", alt: "DoseCare refill pharmacy" },
    ],
  },
  {
    name: "Onboarding",
    desc: "Scan-first setup that anyone can complete independently",
    bullets: [
      "Barcode scan auto-fills pill name, dosage, and instructions — no medical knowledge required",
      "Schedule confirmation in plain language, no terminology",
      "DOSE TAG pairing for physical confirmation without unlocking the phone",
    ],
    images: [
      { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773760257/portfolio/projects/dosecare/Onboard/Add-Medicine-2.png", alt: "Step 1 — Find Your Medicine" },
      { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773760256/portfolio/projects/dosecare/Onboard/Add-Medicine-1-2.png", alt: "Scan prescription" },
      { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757753/portfolio/projects/dosecare/Onboard/Confirm-2.png", alt: "Step 2 — Confirm Medicine" },
      { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773760259/portfolio/projects/dosecare/Onboard/Add-Medicine.png", alt: "Step 3 — Set Time" },
      { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757763/portfolio/projects/dosecare/Onboard/Tag-6.png", alt: "Step 4 — Add Tag" },
    ],
  },
  {
    name: "Trends & History",
    desc: "Adherence insights without data overload",
    bullets: [
      "Weekly adherence score with trend line across medications",
      "AI-generated insight cards surface patterns the user might miss",
      "History calendar for reviewing past doses at a glance",
    ],
    images: [
      { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757769/portfolio/projects/dosecare/Trend/Trend.png", alt: "DoseCare trend insights" },
      { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757768/portfolio/projects/dosecare/Trend/History-2.png", alt: "DoseCare history" },
    ],
  },
  {
    name: "Caregiver & Profile",
    desc: "Autonomy preserved, support available when needed",
    bullets: [
      "Caregiver view shows only missed dose exceptions — not full schedule surveillance",
      "Profile manages notification preferences and accessibility settings",
      "Caregiver access is opt-in and controlled entirely by the patient",
    ],
    images: [
      { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757724/portfolio/projects/dosecare/Caregiver%20and%20profile/Caregiver-3.png", alt: "DoseCare caregiver view" },
      { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757725/portfolio/projects/dosecare/Caregiver%20and%20profile/Profile-3.png", alt: "DoseCare profile settings" },
    ],
  },
];

const a11yRows = [
  { label: "Typography", value: "15pt minimum body, 1.8 line-height" },
  { label: "Touch targets", value: "48pt minimum for all interactive elements" },
  { label: "Color system", value: "#2B5EE8 primary — 4.5:1 contrast minimum against background" },
  { label: "Motion", value: "prefers-reduced-motion respected; no parallax or auto-play" },
  { label: "Status states", value: "Icon + label for all states — never color alone" },
];

// ── Information Architecture Diagram ─────────────────────────────────────────

function IADiagram() {
  const LINE = '#C8C6C1';

  const ns = (type: 'root' | 'l1' | 'l2' | 'l3' | 'onboard' | 'sblue' | 'sgreen', extra?: React.CSSProperties): React.CSSProperties => {
    const base: React.CSSProperties = { borderRadius: 8, textAlign: 'center', whiteSpace: 'nowrap', lineHeight: 1.5 };
    const map: Record<string, React.CSSProperties> = {
      root:   { ...base, background: '#fff', border: '2px solid rgba(0,0,0,0.07)', borderRadius: 10, padding: '10px 24px', fontSize: 15, fontWeight: 600 },
      l1:     { ...base, background: '#fff', border: '2px solid rgba(0,0,0,0.07)', padding: '8px 14px', fontSize: 13, fontWeight: 600 },
      l2:     { ...base, background: '#fff', border: '1px solid #E4E0DB', padding: '8px 12px', fontSize: 13 },
      l3:     { ...base, background: '#F1F1F1', border: '1px solid #909090', padding: '7px 10px', fontSize: 12, color: '#4A4740' },
      onboard:{ ...base, background: '#EEF2F6', border: '1px solid #B8C2CC', padding: '8px 12px', fontSize: 13 },
      sblue:  { ...base, background: '#E8EFFA', border: '2px solid #2E5AAC', padding: '8px 16px', fontSize: 13, color: '#1C1F24' },
      sgreen: { ...base, background: '#E8F3EC', border: '2px solid #2E7D5B', padding: '8px 16px', fontSize: 13 },
    };
    return extra ? { ...map[type], ...extra } : map[type];
  };

  const vl = (h = 16) => (
    <div style={{ width: 1, height: h, background: LINE, margin: '0 auto', flexShrink: 0 }} />
  );

  const sections = [
    {
      name: 'Dashboard',
      items: [
        { type: 'l2', label: 'Daily Timeline View' },
        { type: 'l2', label: 'Priority Section' },
        { type: 'l2', label: 'Today Overview' },
        { type: 'l3', label: 'Completed / Total' },
        { type: 'l3', label: 'Next Dose Countdown' },
        { type: 'l3', label: 'Missed Indicator' },
      ],
    },
    {
      name: 'Medications',
      items: [
        { type: 'l2', label: 'Search List' },
        { type: 'l2', label: 'Medication Detail' },
        { type: 'l3', label: 'Dosage & Schedule' },
        { type: 'l3', label: 'Instructions' },
        { type: 'l3', label: 'AI Summary' },
        { type: 'l3', label: 'Refill Status' },
      ],
    },
    {
      name: 'Insights',
      items: [
        { type: 'l2', label: 'Trend' },
        { type: 'l3', label: 'Trend Chart' },
        { type: 'l3', label: 'AI Insight Card' },
        { type: 'l3', label: 'Weekly Score' },
        { type: 'l2', label: 'History' },
        { type: 'l3', label: 'Medicine Breakdown' },
        { type: 'l3', label: 'History Calendar' },
      ],
    },
    {
      name: 'Care Network',
      items: [
        { type: 'l2', label: 'Caregiver List' },
        { type: 'l2', label: 'Permission' },
      ],
    },
    {
      name: 'Profile',
      items: [
        { type: 'l2', label: 'Personal Info' },
        { type: 'l2', label: 'Accessibility' },
        { type: 'l2', label: 'Notification Settings' },
        { type: 'l2', label: 'Device Settings' },
        { type: 'l3', label: 'Watch' },
        { type: 'l3', label: 'Tag' },
      ],
    },
  ];

  return (
    <div
      style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', background: '#F9F9F6', border: '1px solid #E4E0DB', borderRadius: 8, padding: '36px 28px 28px' }}
      role="img"
      aria-label="DoseCare information architecture — Main App branches into Dashboard, Medications, Insights, Care Network, and Profile. Separate Onboarding flow and System Layers shown below."
    >
      <div style={{ minWidth: 860 }}>

        {/* Root node */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={ns('root')}>Main App</div>
          {vl(20)}
        </div>

        {/* Horizontal trunk + columns */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: 1, background: LINE }} />
          <div style={{ display: 'flex', gap: 12 }}>
            {sections.map((sec) => (
              <div key={sec.name} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                {vl(20)}
                <div style={{ ...ns('l1'), width: '100%' }}>{sec.name}</div>
                {sec.items.map((item, i) => (
                  <div
                    key={i}
                    style={{ ...ns(item.type as 'l2' | 'l3'), width: item.type === 'l3' ? '88%' : '100%' }}
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Onboarding flow */}
        <div style={{ marginTop: 28, border: '1px dashed #909090', borderRadius: 8, padding: '16px 20px' }}>
          <div style={{ fontFamily: "var(--font-dm-mono,'DM Mono',monospace)", fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#9B9690', marginBottom: 12 }}>
            Onboarding Flow
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 0, flexWrap: 'wrap' }}>
            {['Role', 'Accessibility Setup', 'Add Medication', 'Reminder Setup', 'DOSE TAG Setup'].map((step, i, arr) => (
              <div key={step} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                <div style={ns('onboard')}>{step}</div>
                {i < arr.length - 1 && (
                  <span style={{ color: '#909090', fontSize: 14, padding: '0 4px', fontFamily: "var(--font-dm-mono,'DM Mono',monospace)" }}>→</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* System Layers */}
        <div style={{ marginTop: 10, border: '1px dashed #909090', borderRadius: 8, padding: '16px 20px' }}>
          <div style={{ fontFamily: "var(--font-dm-mono,'DM Mono',monospace)", fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#9B9690', marginBottom: 12 }}>
            System Layers
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <div style={ns('sblue')}>Watch Confirm</div>
            <div style={ns('sblue')}>Push Reminder</div>
            <div style={ns('sblue')}>Caregiver Alert</div>
            <div style={ns('sgreen')}>DOSE TAG</div>
          </div>
        </div>

      </div>
    </div>
  );
}

// ── Journey Map SVG ───────────────────────────────────────────────────────────

function JourneyMap() {
  const W = 860;
  const H = 260;
  const PAD_L = 72;
  const PAD_R = 32;
  const PAD_T = 24;
  const PAD_B = 72;
  const neutral = PAD_T + (H - PAD_T - PAD_B) / 2; // y = neutral line

  // 6 stages, evenly spaced
  const stages = [
    { label: "Forgets medicine\nbody not healthy", before: 0.55, after: 0.55 },
    { label: "Doctor gives\nprescription", before: 0.48, after: 0.45 },
    { label: "Struggles with\nPerx entry", before: 0.72, after: 0.28 },
    { label: "Son helps\nschedule", before: 0.62, after: 0.18 },
    { label: "Notification fatigue\nstill forgets", before: 0.75, after: 0.10 },
    { label: "Health outcome", before: 0.88, after: 0.05 },
  ];

  const innerW = W - PAD_L - PAD_R;
  const innerH = H - PAD_T - PAD_B;
  const xStep = innerW / (stages.length - 1);

  const sx = (i: number) => PAD_L + i * xStep;
  const sy = (v: number) => PAD_T + v * innerH; // 0=top positive, 1=bottom negative

  // Build smooth paths using cubic bezier
  const smoothPath = (points: [number, number][]) => {
    let d = `M ${points[0][0]} ${points[0][1]}`;
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const cx = (prev[0] + curr[0]) / 2;
      d += ` C ${cx} ${prev[1]}, ${cx} ${curr[1]}, ${curr[0]} ${curr[1]}`;
    }
    return d;
  };

  const beforePts = stages.map((s, i): [number, number] => [sx(i), sy(s.before)]);
  const afterPts = stages.map((s, i): [number, number] => [sx(i), sy(s.after)]);

  const beforePath = smoothPath(beforePts);
  const afterPath = smoothPath(afterPts);

  // Area paths (close to bottom)
  const bottom = PAD_T + innerH;
  const beforeArea = `${beforePath} L ${sx(stages.length - 1)} ${bottom} L ${sx(0)} ${bottom} Z`;
  const afterArea = `${afterPath} L ${sx(stages.length - 1)} ${bottom} L ${sx(0)} ${bottom} Z`;

  return (
    <div className="dc-journey-wrap">
      <div className="dc-journey-title">
        Mrs. Eleanor — Medication Management Journey
        <div className="dc-journey-legend">
          <div className="dc-legend-item">
            <div className="dc-legend-dot" style={{ background: "#6B9E8A" }} aria-hidden="true" />
            Before DoseCare
          </div>
          <div className="dc-legend-item">
            <div className="dc-legend-dot" style={{ background: "#2B5EE8" }} aria-hidden="true" />
            After DoseCare
          </div>
        </div>
      </div>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width={W}
        style={{ display: "block", overflow: "visible" }}
        aria-label="User journey map showing Mrs. Eleanor's emotional experience before and after DoseCare. Before: consistently negative and declining. After: improving trajectory from stage 3 onwards."
        role="img"
      >
        {/* Y-axis labels */}
        <text x={PAD_L - 8} y={PAD_T + 14} textAnchor="end" fontSize="9" fill="#9B9690" fontFamily="var(--font-dm-mono,'DM Mono',monospace)">POSITIVE</text>
        <text x={PAD_L - 8} y={PAD_T + innerH - 4} textAnchor="end" fontSize="9" fill="#9B9690" fontFamily="var(--font-dm-mono,'DM Mono',monospace)">NEGATIVE</text>

        {/* Neutral axis */}
        <line x1={PAD_L} y1={neutral} x2={W - PAD_R} y2={neutral} stroke="#E4E0DB" strokeWidth="1" />

        {/* Before area */}
        <path d={beforeArea} fill="#6B9E8A" fillOpacity="0.18" />
        {/* After area */}
        <path d={afterArea} fill="#2B5EE8" fillOpacity="0.15" />

        {/* Before line */}
        <path d={beforePath} fill="none" stroke="#6B9E8A" strokeWidth="2" />
        {/* After line */}
        <path d={afterPath} fill="none" stroke="#2B5EE8" strokeWidth="2" />

        {/* Stage dots and labels */}
        {stages.map((s, i) => {
          const x = sx(i);
          const lines = s.label.split("\n");
          return (
            <g key={i}>
              {/* Before dot */}
              <circle cx={x} cy={sy(s.before)} r="5" fill="#6B9E8A" />
              {/* After dot */}
              <circle cx={x} cy={sy(s.after)} r="5" fill="#2B5EE8" />
              {/* Vertical tick */}
              <line x1={x} y1={PAD_T + innerH + 8} x2={x} y2={PAD_T + innerH + 2} stroke="#E4E0DB" strokeWidth="1" />
              {/* Stage label */}
              {lines.map((line, li) => (
                <text
                  key={li}
                  x={x}
                  y={PAD_T + innerH + 20 + li * 14}
                  textAnchor="middle"
                  fontSize="10"
                  fill="#4A4740"
                  fontFamily="var(--font-dm-sans,'DM Sans',sans-serif)"
                >
                  {line}
                </text>
              ))}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function DoseCarePage() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{CSS}</style>
      <div className="dc-page">

        <a className="dc-skip" href="#main-content">Skip to main content</a>

        {/* ── Back link ── */}
        <div className="relative z-20" style={{ padding: "14px 48px" }}>
          <Link href="/" style={{ fontSize: 12, color: "#9B9690", textDecoration: "none", fontFamily: "var(--font-dm-mono,'DM Mono',monospace)", letterSpacing: "0.06em" }}>← Home</Link>
        </div>

        {/* ── Nav ── */}
        <nav className={`dc-nav${scrolled ? " scrolled" : ""}`} aria-label="DoseCare case study">
          <div className="dc-nav-logo">
            <span className="dc-nav-dot" aria-hidden="true" />
            DoseCare
          </div>
          <div className="dc-nav-links">
            <a href="#problem">Problem</a>
            <a href="#research">Research</a>
            <a href="#insights">Insights</a>
            <a href="#design">Design</a>
            <a href="#testing">Testing</a>
            <a href="#outcomes">Outcomes</a>
          </div>
        </nav>

        {/* ── 01 Hero ── */}
        <section className="dc-section dc-section-first" id="main-content">
          <div className="dc-container">
            <div className="dc-hero-grid">
              {/* Left: all text content */}
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                <div className="dc-eyebrow">UX Case Study · iOS · 2025</div>
                <h1 className="dc-hero-title">
                  <span className="t-light">Medication</span><br />
                  <span className="t-bold">adherence</span><br />
                  <span className="t-light">for adults </span><span className="t-blue">65+</span>
                </h1>
                <div className="dc-rule" aria-hidden="true" />
                <p style={{ fontSize: 15, color: "#4A4740", lineHeight: 1.8, marginBottom: 24 }}>
                  DoseCare is a medication management iOS app built around one core unmet need — confirmation. Designed from 9 user interviews and 129 research notes.
                </p>
                <div className="dc-stats" role="list" aria-label="Project statistics">
                  {[
                    { num: "9", label: "Interviews" },
                    { num: "129", label: "Notes" },
                    { num: "5", label: "Insights" },
                    { num: "65+", label: "Target age" },
                  ].map((s) => (
                    <div className="dc-stat" role="listitem" key={s.label}>
                      <span className="dc-stat-num">{s.num}</span>
                      <span className="dc-stat-label">{s.label}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 24 }}>
                  <div style={{ fontFamily: "var(--font-dm-mono,'DM Mono',monospace)", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.08em", color: "#9B9690", marginBottom: 8 }}>
                    Role &amp; Tools
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    <span className="dc-chip">Solo UX Designer</span>
                    {["Figma", "Stark", "SF Symbols", "iOS"].map((t) => (
                      <span key={t} className="dc-chip dc-chip-neutral">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
              {/* Right: visual asset */}
              <div>
                <img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773788345/portfolio/projects/dosecare/hero.jpg" alt="DoseCare app on phone" style={{ width: '100%', borderRadius: '16px', display: 'block' }} />
              </div>
            </div>
          </div>
        </section>

        {/* ── 02 Problem ── */}
        <section className="dc-section" id="problem">
          <div className="dc-container">
            <div className="dc-prose">
            <div className="dc-eyebrow">02 — Problem</div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 24, color: "#1C1A16" }}>
              The gap existing apps don&apos;t address
            </h2>
            <p style={{ fontSize: 15, color: "#4A4740", lineHeight: 1.8, marginBottom: 20 }}>
              Older adults managing multiple daily medications face a problem that goes beyond scheduling. The challenge is often not remembering to take medication — it&apos;s remembering whether it was already taken. Existing reminder apps send alerts but offer no confirmation, no recovery from uncertainty, and no way to prove adherence.
            </p>
            <p style={{ fontSize: 15, color: "#4A4740", lineHeight: 1.8, marginBottom: 20 }}>
              Apps like Perx require complex manual prescription entry that many 65+ users cannot complete independently. This creates a reliance on family members at the very first step — before the product has delivered any value.
            </p>
            <blockquote className="dc-pullquote">
              &ldquo;How might we design a medication experience that helps older adults stay independent while making adherence more visible, understandable, and trustworthy?&rdquo;
            </blockquote>
            <ul className="dc-problem-list" aria-label="Core problem areas">
              {[
                "Reminders arrive but users have no way to confirm a dose was taken",
                "Notification fatigue causes important alerts to be dismissed",
                "Complex app onboarding forces reliance on family members",
                "Caregivers have no reliable source of truth without overstepping",
                "Doctor communication is fragmented from the medication record",
              ].map((item, i) => (
                <li className="dc-problem-item" key={i}>
                  <span className="dc-problem-num" aria-hidden="true">0{i + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            </div>
          </div>
        </section>

        {/* ── 03 Research ── */}
        <section className="dc-section" id="research">
          <div className="dc-container">
            <div className="dc-eyebrow">03 — Research</div>
            <div className="dc-grid-2">
              <div>
                <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 16, color: "#1C1A16" }}>
                  9 interviews · 129 notes
                </h2>
                <p style={{ fontSize: 15, color: "#4A4740", lineHeight: 1.8, marginBottom: 16 }}>
                  Semi-structured interviews with patients and caregivers, secondary research on the doctor perspective, and affinity mapping with tag-based synthesis. 129 notes were cleaned, tagged, and grouped into themes around uncertainty, overload, reminder fatigue, and weak support loops.
                </p>
                <p style={{ fontSize: 15, color: "#4A4740", lineHeight: 1.8, marginBottom: 24 }}>
                  The core finding shifted the product direction: adherence is not a scheduling problem — it is a confidence problem.
                </p>

                <div style={{ fontFamily: "var(--font-dm-mono,'DM Mono',monospace)", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.08em", color: "#9B9690", marginBottom: 12 }}>
                  Methodology
                </div>
                <div className="dc-table" role="table" aria-label="Research methodology">
                  {[
                    { label: "Methods", value: "Semi-structured interviews (patients + caregivers), secondary research (doctor perspective), affinity mapping + tag synthesis" },
                    { label: "Participants", value: "9 total · patients + caregivers · primary: 65+ adults with chronic conditions" },
                    { label: "Session length", value: "45–60 minutes each" },
                    { label: "Notes", value: "129 notes tagged and grouped into themes" },
                    { label: "Focus areas", value: "Current routines, missed-dose causes, caregiver verification, doctor communication patterns" },
                    { label: "Key finding", value: "Adherence is not a scheduling problem — it is a confidence problem" },
                  ].map((r) => (
                    <div className="dc-row" role="row" key={r.label}>
                      <div className="dc-label" role="rowheader">{r.label}</div>
                      <div className="dc-value" role="cell">{r.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Primary Persona */}
                <div className="dc-persona" aria-label="Primary persona: Mrs. Eleanor">
                  <div className="dc-persona-header">
                    <div className="dc-persona-name">Mrs. Eleanor</div>
                    <div className="dc-persona-sub">71 · Lives alone · Son is remote caregiver</div>
                  </div>
                  <div className="dc-persona-quote">
                    &ldquo;I&apos;ve taken so many pills I can&apos;t always remember if I already took today&apos;s.&rdquo;
                  </div>
                  <div className="dc-table" role="table" aria-label="Eleanor persona details">
                    {[
                      { label: "Situation", value: "Manages 6 medications daily. Previously tried Perx but abandoned it mid-setup." },
                      { label: "Goals", value: "Stay independent, feel certain she's managing her health correctly, avoid involving her son unless necessary." },
                      { label: "Frustrations", value: "Can't remember if she already took a dose. Too many notifications she's learned to dismiss. App entry felt medical and overwhelming." },
                    ].map((r) => (
                      <div className="dc-row" role="row" key={r.label}>
                        <div className="dc-label" role="rowheader">{r.label}</div>
                        <div className="dc-value" role="cell">{r.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Secondary Persona */}
                <div className="dc-persona" style={{ marginTop: 16 }} aria-label="Secondary persona: Michael">
                  <div className="dc-persona-header" style={{ background: "#4A4740" }}>
                    <div className="dc-persona-name">Michael</div>
                    <div className="dc-persona-sub">44 · Eleanor&apos;s son · Remote caregiver</div>
                  </div>
                  <div className="dc-persona-quote">
                    &ldquo;I call her every day just to make sure she&apos;s taken her medication. I can&apos;t always tell if she actually has.&rdquo;
                  </div>
                  <div className="dc-table" role="table" aria-label="Michael persona details">
                    {[
                      { label: "Primary need", value: "Exception-based visibility — know when something is wrong, not a full daily log." },
                      { label: "Core tension", value: "Wants to support his mother without making her feel monitored or incapable." },
                    ].map((r) => (
                      <div className="dc-row" role="row" key={r.label}>
                        <div className="dc-label" role="rowheader">{r.label}</div>
                        <div className="dc-value" role="cell">{r.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 04 Key Insights ── */}
        <section className="dc-section" id="insights">
          <div className="dc-container">
            <div className="dc-prose">
              <div className="dc-eyebrow">04 — Key Insights</div>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 600, letterSpacing: "-0.02em", color: "#1C1A16", marginBottom: 8 }}>
                What research revealed
              </h2>
              <p style={{ fontSize: 15, color: "#9B9690", marginBottom: 40 }}>
                9 interviews · 129 notes · affinity mapping → 5 findings
              </p>
              <div>
                {insights.map((ins, i) => (
                  <div className="dc-insight-row" key={ins.num}>
                    <div className="dc-insight-strip" aria-hidden="true" />
                    <span className="dc-insight-number">{ins.num}</span>
                    <div className="dc-insight-content">
                      <h3 className="dc-insight-title">{ins.title}</h3>
                      <div className="dc-insight-body">{ins.body}</div>
                      <div className="dc-insight-impl">{ins.impl}</div>
                      <div className="dc-chips-row">
                        {ins.chips.map((chip) => (
                          <span key={chip} className="dc-chip">{chip}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 05 Define ── */}
        <section className="dc-section" id="define">
          <div className="dc-container">
            <div className="dc-eyebrow">05 — Define</div>
            <div>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 600, letterSpacing: "-0.02em", color: "#1C1A16", marginBottom: 24 }}>
                How Might We
              </h2>
              <ul className="dc-hmw-list" aria-label="How Might We statements">
                {hmwItems.map((item, i) => (
                  <li className="dc-hmw-item" key={i}>
                    <span className="dc-hmw-prefix">HMW</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <JourneyMap />
          </div>
        </section>

        {/* ── 06 Design Decisions ── */}
        <section className="dc-section" id="design">
          <div className="dc-container">
            <div className="dc-prose">
              <div className="dc-eyebrow">06 — Design Decisions</div>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 600, letterSpacing: "-0.02em", color: "#1C1A16", marginBottom: 8 }}>
                Why simpler won every time
              </h2>
              <p style={{ fontSize: 15, color: "#9B9690", marginBottom: 48 }}>
                Each decision prioritized reducing friction over adding features.
              </p>
              {decisions.map((d) => (
                <div className="dc-decision" key={d.label}>
                  <p className="dc-decision-label">{d.label}</p>
                  <h3 className="dc-decision-headline">{d.headline}</h3>
                  <div className="dc-table" role="table" aria-label={`${d.label} details`}>
                    {d.rows.map((r) => (
                      <div className="dc-row" role="row" key={r.label}>
                        <div className="dc-label" role="rowheader">{r.label}</div>
                        <div className="dc-value" role="cell">{r.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 07 Design Principles ── */}
        <section className="dc-section dc-section-compact" id="principles">
          <div className="dc-container">
            <div className="dc-prose">
            <div className="dc-eyebrow">07 — Design Principles</div>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 600, letterSpacing: "-0.02em", color: "#1C1A16", marginBottom: 8 }}>
              Five values that shaped every decision
            </h2>
            <p style={{ fontSize: 15, color: "#9B9690", marginBottom: 32 }}>
              Derived directly from research insights. Each design decision was evaluated against these principles.
            </p>
            <ul className="dc-principles-list" aria-label="Design principles">
              {principles.map((p, i) => (
                <li className="dc-principle-item" key={p.name}>
                  <span className="dc-principle-num" aria-hidden="true">0{i + 1}</span>
                  <div>
                    <div className="dc-principle-name">{p.name}</div>
                    <div className="dc-principle-desc">{p.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
            </div>
          </div>
        </section>

        {/* ── 08 v1 Screens ── */}
        <section className="dc-section" id="v1-screens">
          <div className="dc-container">
            <div className="dc-eyebrow">08 — First Version</div>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 600, letterSpacing: "-0.02em", color: "#1C1A16", marginBottom: 8 }}>
              Hi-fi v1 — tested, not shipped
            </h2>
            <p style={{ fontSize: 15, color: "#9B9690", marginBottom: 48 }}>
              Built directly from design decisions. Usability testing revealed where these assumptions broke down.
            </p>
            {v1Screens.map((group) => (
              <div className="dc-screen-group" key={group.name}>
                <div className="dc-screen-group-header">
                  <h3 className="dc-screen-group-name">{group.name}</h3>
                  <span className="dc-screen-group-sep" aria-hidden="true">—</span>
                  <span className="dc-screen-group-desc">{group.desc}</span>
                </div>
                <div className="dc-screen-row">
                  {group.images.map((img) => (
                    <div className="dc-screen-img" key={img.src}>
                      <img src={img.src} alt={img.alt} />
                    </div>
                  ))}
                </div>
                <ul className="dc-screen-bullets">
                  {group.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── 09 Usability Testing ── */}
        <section className="dc-section" id="testing">
          <div className="dc-container">
            <div className="dc-eyebrow">09 — Usability Testing</div>
            <div className="dc-grid-2">
              <div>
                <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 600, letterSpacing: "-0.02em", color: "#1C1A16", marginBottom: 16 }}>
                  Did it work?
                </h2>
                <p style={{ fontSize: 15, color: "#4A4740", lineHeight: 1.8, marginBottom: 24 }}>
                  Task-based testing across three core flows: adding a medication, responding to a reminder, and finding medication information. The goal was to identify where users hesitated, what felt intuitive, and what needed clearer guidance.
                </p>
                <div>
                  {findings.map((f) => (
                    <div className="dc-finding" key={f.num}>
                      <span className="dc-finding-num" aria-hidden="true">{f.num}</span>
                      <div>
                        <div className="dc-finding-title">{f.title}</div>
                        <div className="dc-finding-body">{f.body}</div>
                        <div style={{ fontFamily: "var(--font-dm-mono,'DM Mono',monospace)", fontSize: 10, color: "#2B5EE8", marginTop: 6 }}>{f.metric}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-dm-mono,'DM Mono',monospace)", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.08em", color: "#9B9690", marginBottom: 16 }}>
                  Design changes from testing
                </div>
                <ul className="dc-changes-list" aria-label="Design changes informed by testing">
                  {designChanges.map((c, i) => (
                    <li className="dc-change-item" key={i}>
                      <span className="dc-change-mark" aria-hidden="true">{c.mark}</span>
                      <span>{c.text}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: 32, fontFamily: "var(--font-dm-mono,'DM Mono',monospace)", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.08em", color: "#9B9690", marginBottom: 16 }}>
                  Reflection on testing
                </div>
                <p style={{ fontSize: 14, color: "#4A4740", lineHeight: 1.7 }}>
                  Testing confirmed that the reminder confirmation flow was clear and satisfying — validating the confirmation-first model. It also exposed friction in onboarding and information discovery, reinforcing that clarity at entry points is as important as clarity in the core flow.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 10 Information Architecture ── */}
        <section className="dc-section" id="ia">
          <div className="dc-container">
            <div className="dc-eyebrow">10 — Information Architecture</div>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 600, letterSpacing: "-0.02em", color: "#1C1A16", marginBottom: 8 }}>
              Final app structure
            </h2>
            <p style={{ fontSize: 15, color: "#9B9690", marginBottom: 32 }}>
              Patient app — 5 tabs. Refined after usability testing.
            </p>
            <IADiagram />
          </div>
        </section>

        {/* ── 11 Final Design ── */}
        <section className="dc-section" id="final-design">
          <div className="dc-container">
            <div className="dc-eyebrow">11 — Final Design</div>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 600, letterSpacing: "-0.02em", color: "#1C1A16", marginBottom: 48 }}>
              High-fidelity screens
            </h2>
            {screenGroups.map((group) => (
              <div className="dc-screen-group" key={group.name}>
                <div className="dc-screen-group-header">
                  <h3 className="dc-screen-group-name">{group.name}</h3>
                  <span className="dc-screen-group-sep" aria-hidden="true">—</span>
                  <span className="dc-screen-group-desc">{group.desc}</span>
                </div>
                {"images" in group && group.images ? (
                  <div className="dc-screen-row" style={"noWrap" in group && group.noWrap ? { flexWrap: "nowrap", overflowX: "auto" } : undefined}>
                    {(group.images as { src: string; alt: string; imgStyle?: React.CSSProperties }[]).map((img) => (
                      <div className="dc-screen-img" key={img.src}>
                        <img src={img.src} alt={img.alt} style={img.imgStyle} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="dc-screen" role="img" aria-label={`${group.name} screen placeholder`}>
                    [ Design in progress ]
                  </div>
                )}
                <ul className="dc-screen-bullets">
                  {group.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── 10 Reflection ── */}
        <section className="dc-section" id="outcomes">
          <div className="dc-container">
            <div className="dc-prose">
            <div className="dc-eyebrow">12 — Reflection</div>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 600, letterSpacing: "-0.02em", color: "#1C1A16", marginBottom: 32 }}>
              Outcomes &amp; Reflection
            </h2>
            <h3 className="dc-refl-sub">What worked well</h3>
            <ul className="dc-refl-list">
              <li>The confirmation-first model gave older adults a tangible sense of completion — testing validated this with 100% task completion on the reminder flow</li>
              <li>Barcode-first onboarding directly addressed the Perx pain point, reducing setup friction without requiring medical knowledge</li>
              <li>Exception-only caregiver alerts reduced Michael&apos;s daily check-in burden while preserving Eleanor&apos;s sense of independence</li>
              <li>Research clearly revealed that confidence — not reminders — was the real problem, which gave the whole design direction strong justification</li>
            </ul>
            <h3 className="dc-refl-sub">What I&apos;d do differently</h3>
            <ul className="dc-refl-list">
              <li>Test the scan fallback earlier — barcode errors needed better recovery guidance that only surfaced in usability testing</li>
              <li>Run moderated sessions with more 65+ participants specifically to surface accessibility issues in context</li>
              <li>Design the caregiver app in parallel rather than as an afterthought to the patient flow</li>
            </ul>
            <h3 className="dc-refl-sub">Next steps</h3>
            <ul className="dc-refl-list">
              <li>Additional moderated testing with 65+ demographic, focused on onboarding and information discovery</li>
              <li>Prototype caregiver dashboard with exception-only alerting</li>
              <li>Explore calendar and pharmacy integrations for doctor notes and refill schedules</li>
              <li>Investigate voice reminders as an alternative confirmation method for low-vision users</li>
            </ul>
            <blockquote className="dc-pullquote" style={{ marginTop: 48 }}>
              &ldquo;DoseCare taught me that the best design for vulnerable users is not more features — it&apos;s relentless focus on a single core problem.&rdquo;
            </blockquote>
            </div>
          </div>
        </section>

      </div>
      <NextProject href="/projects/agrox" title="Agrox" role="UX Designer" theme="light" />
    </>
  );
}

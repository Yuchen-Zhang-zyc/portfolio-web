"use client";

import { useEffect, useState } from "react";

const CSS = `
  .dc-page {
    font-family: var(--font-dm-sans, 'DM Sans', sans-serif);
    background: #FAFAF8;
    color: #1C1A16;
  }
  .dc-mono {
    font-family: var(--font-dm-mono, 'DM Mono', monospace) !important;
  }
  .dc-nav {
    position: sticky;
    top: 0;
    z-index: 50;
    background: rgba(250,250,248,0.92);
    backdrop-filter: blur(12px);
    padding: 0 48px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .dc-nav.scrolled { border-bottom: 1px solid #E4E0DB; }
  .dc-nav-logo { display: flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 600; color: #1C1A16; }
  .dc-nav-dot { width: 8px; height: 8px; border-radius: 50%; background: #2B5EE8; flex-shrink: 0; }
  .dc-nav-links { display: flex; gap: 28px; }
  .dc-nav-links a { font-size: 12px; color: #9B9690; text-decoration: none; }
  .dc-nav-links a:hover { color: #1C1A16; }
  @media (max-width: 768px) {
    .dc-nav { padding: 0 24px; }
    .dc-nav-links { display: none; }
  }
  .dc-container { max-width: 1100px; margin: 0 auto; padding: 0 48px; }
  @media (max-width: 768px) { .dc-container { padding: 0 24px; } }
  .dc-section { border-top: 1px solid #E4E0DB; padding: 96px 0; }
  .dc-section-first { border-top: none !important; }
  .dc-eyebrow {
    font-family: var(--font-dm-mono, 'DM Mono', monospace);
    font-size: 10px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #2B5EE8;
    margin-bottom: 12px;
  }
  .dc-rule { width: 40px; height: 2px; background: #2B5EE8; margin: 20px 0; }
  .dc-pullquote {
    border-left: 3px solid #2B5EE8;
    padding-left: 24px;
    margin: 32px 0;
    font-size: 18px;
    font-weight: 300;
    font-style: italic;
    color: #1C1A16;
    line-height: 1.65;
  }
  .dc-chip {
    font-family: var(--font-dm-mono, 'DM Mono', monospace);
    font-size: 10px;
    background: #EEF2FD;
    color: #2B5EE8;
    padding: 3px 8px;
    display: inline-block;
  }
  .dc-chip-neutral { background: #FAFAF8; color: #4A4740; border: 1px solid #E4E0DB; }
  .dc-table { border: 1px solid #E4E0DB; width: 100%; }
  .dc-row { display: grid; grid-template-columns: 160px 1fr; border-bottom: 1px solid #E4E0DB; }
  .dc-row:last-child { border-bottom: none; }
  .dc-label {
    padding: 12px 16px;
    font-family: var(--font-dm-mono, 'DM Mono', monospace);
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #9B9690;
    background: #FAFAF8;
    border-right: 1px solid #E4E0DB;
  }
  .dc-value { padding: 12px 16px; font-size: 13px; color: #4A4740; line-height: 1.6; }
  .dc-screen {
    background: #FFFFFF;
    border: 1px solid #E4E0DB;
    height: 320px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-dm-mono, 'DM Mono', monospace);
    font-size: 12px;
    color: #9B9690;
    margin: 20px 0;
  }
  .dc-stats { display: flex; border: 1px solid #E4E0DB; margin-top: 32px; width: fit-content; }
  .dc-stat { padding: 16px 20px; border-right: 1px solid #E4E0DB; }
  .dc-stat:last-child { border-right: none; }
  .dc-stat-num { font-size: 24px; font-weight: 600; color: #1C1A16; display: block; }
  .dc-stat-label { font-family: var(--font-dm-mono, 'DM Mono', monospace); font-size: 10px; color: #9B9690; display: block; margin-top: 2px; }
  .dc-hero-grid { display: grid; grid-template-columns: 55% 45%; gap: 60px; align-items: start; }
  @media (max-width: 900px) { .dc-hero-grid { grid-template-columns: 1fr; gap: 40px; } }
  .dc-hero-title { font-size: clamp(38px, 5vw, 54px); line-height: 1.1; }
  .dc-hero-title .t-light { font-weight: 300; }
  .dc-hero-title .t-bold { font-weight: 600; }
  .dc-hero-title .t-blue { color: #2B5EE8; font-weight: 600; }
  .dc-insight-preview { background: #FFFFFF; border: 1px solid #E4E0DB; margin-top: 20px; }
  .dc-insight-preview-header {
    font-family: var(--font-dm-mono, 'DM Mono', monospace);
    font-size: 10px; color: #9B9690; padding: 14px 18px;
    border-bottom: 1px solid #E4E0DB;
    text-transform: uppercase; letter-spacing: 0.08em;
  }
  .dc-insight-preview-row { display: flex; gap: 12px; padding: 10px 18px; border-bottom: 1px solid #E4E0DB; align-items: flex-start; }
  .dc-insight-preview-row:last-child { border-bottom: none; }
  .dc-insight-num { font-family: var(--font-dm-mono, 'DM Mono', monospace); font-size: 10px; color: #2B5EE8; flex-shrink: 0; padding-top: 2px; }
  .dc-insight-preview-text { font-size: 13px; color: #4A4740; }
  .dc-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; }
  @media (max-width: 900px) { .dc-grid-2 { grid-template-columns: 1fr; gap: 32px; } }
  .dc-problem-list { list-style: none; padding: 0; margin: 0; }
  .dc-problem-item { border-top: 1px solid #E4E0DB; padding: 16px 0; font-size: 14px; color: #4A4740; display: flex; gap: 16px; align-items: flex-start; }
  .dc-problem-num { font-family: var(--font-dm-mono, 'DM Mono', monospace); font-size: 10px; color: #2B5EE8; flex-shrink: 0; padding-top: 2px; }
  .dc-persona { background: #FFFFFF; border: 1px solid #E4E0DB; margin-top: 24px; }
  .dc-persona-header { background: #2B5EE8; padding: 12px 16px; }
  .dc-persona-name { font-size: 14px; font-weight: 600; color: #FFFFFF; }
  .dc-persona-sub { font-family: var(--font-dm-mono, 'DM Mono', monospace); font-size: 10px; color: rgba(255,255,255,0.65); margin-top: 2px; }
  .dc-insight-row { position: relative; border-top: 1px solid #E4E0DB; padding: 28px 0 28px 20px; display: flex; gap: 28px; align-items: flex-start; }
  .dc-insight-row-first { border-top: 2px solid #2B5EE8 !important; }
  .dc-insight-strip { position: absolute; left: 0; top: 0; bottom: 0; width: 2px; background: #2B5EE8; }
  .dc-insight-number { font-family: var(--font-dm-mono, 'DM Mono', monospace); font-size: 10px; color: #2B5EE8; flex-shrink: 0; padding-top: 4px; }
  .dc-insight-content { flex: 1; }
  .dc-insight-title { font-size: 16px; font-weight: 500; color: #1C1A16; margin-bottom: 8px; }
  .dc-insight-body { font-size: 14px; color: #4A4740; line-height: 1.7; margin-bottom: 8px; }
  .dc-insight-impl { font-size: 13px; color: #4A4740; font-style: italic; margin-bottom: 10px; }
  .dc-chips-row { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 8px; }
  .dc-hmw-list { list-style: none; padding: 0; margin: 0; }
  .dc-hmw-item { border-top: 1px solid #E4E0DB; padding: 14px 0; font-size: 14px; color: #4A4740; display: flex; gap: 12px; align-items: flex-start; }
  .dc-hmw-prefix { font-family: var(--font-dm-mono, 'DM Mono', monospace); font-size: 10px; color: #2B5EE8; flex-shrink: 0; padding-top: 2px; }
  .dc-ia-list { list-style: none; padding: 0; margin: 0; }
  .dc-ia-item { display: flex; gap: 12px; padding: 10px 0; border-bottom: 1px solid #E4E0DB; }
  .dc-ia-item:last-child { border-bottom: none; }
  .dc-ia-name { font-size: 13px; font-weight: 500; color: #1C1A16; min-width: 60px; }
  .dc-ia-desc { font-size: 13px; color: #9B9690; }
  .dc-decision { border-top: 1px solid #E4E0DB; padding-top: 40px; margin-bottom: 40px; }
  .dc-decision-name { font-family: var(--font-dm-mono, 'DM Mono', monospace); font-size: 11px; color: #9B9690; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 8px; }
  .dc-decision-headline { font-size: 22px; font-weight: 600; color: #1C1A16; margin-bottom: 16px; line-height: 1.3; }
  .dc-screen-group { margin-bottom: 56px; }
  .dc-screen-group-header { display: flex; align-items: baseline; gap: 10px; margin-bottom: 4px; flex-wrap: wrap; }
  .dc-screen-group-name { font-size: 18px; font-weight: 600; color: #1C1A16; }
  .dc-screen-group-sep { color: #E4E0DB; }
  .dc-screen-group-desc { font-size: 14px; color: #9B9690; }
  .dc-screen-bullets { list-style: disc; padding-left: 20px; margin-top: 12px; }
  .dc-screen-bullets li { font-size: 13px; color: #9B9690; margin-bottom: 4px; }
  .dc-refl-sub { font-size: 18px; font-weight: 600; color: #1C1A16; margin: 32px 0 8px; }
  .dc-refl-list { list-style: disc; padding-left: 20px; }
  .dc-refl-list li { font-size: 15px; color: #4A4740; margin-bottom: 6px; line-height: 1.7; }
`;

const insights = [
  {
    num: "01",
    title: "Confirmation is the real unmet need",
    body: "Users were often unsure whether they had already taken a medication, especially when managing multiple doses across the day.",
    impl: "→ Design implication: prioritize explicit dose confirmation rather than relying only on reminders.",
    chips: ["#confirmation", "#uncertainty", "#cognitive-load"],
  },
  {
    num: "02",
    title: "Too much information increases cognitive load",
    body: "Medication details, schedules, refill information, and warning labels can become overwhelming when shown all at once.",
    impl: "→ Design implication: use progressive disclosure and focus attention on the most relevant action.",
    chips: ["#progressive-disclosure", "#information-overload"],
  },
  {
    num: "03",
    title: "Simplicity supports independence",
    body: "Older adults wanted to remain in control of their own routines, but needed interfaces that felt calm, clear, and low-effort.",
    impl: "→ Design implication: reduce friction so users can complete key tasks without outside assistance.",
    chips: ["#autonomy", "#simplicity", "#calm-design"],
  },
  {
    num: "04",
    title: "Trust matters in healthcare interactions",
    body: "Users need to feel confident that scanned information, medication details, and communication tools are accurate and reliable.",
    impl: "→ Design implication: reinforce trust through straightforward language and clear confirmation states.",
    chips: ["#trust", "#healthcare", "#reliability"],
  },
  {
    num: "05",
    title: "Accessibility is foundational, not optional",
    body: "Because the core users are older adults, readability, tap target size, and clear interaction patterns are central to the product.",
    impl: "→ Design implication: accessibility shapes navigation, layout, hierarchy, and feedback everywhere.",
    chips: ["#a11y", "#older-adults", "#readability"],
  },
];

const hmwItems = [
  "Help older adults easily confirm whether a dose has actually been taken",
  "Surface the most important medication action without overwhelming the screen",
  "Support caregivers with clear, exception-based signals rather than full data streams",
  "Make adding medication feel approachable and error-proof from the first interaction",
  "Build trust through clear confirmation states, language, and reliable information",
];

const iaItems = [
  { name: "Home", desc: "Today-focused dose feed with confirmation actions" },
  { name: "Medication", desc: "Detailed medication info, schedules, and side effects" },
  { name: "Scan / Add", desc: "Barcode-first entry with manual fallback" },
  { name: "Care", desc: "Lightweight doctor communication for medication questions" },
  { name: "Profile", desc: "Preferences, settings, and caregiver access controls" },
];

const decisions = [
  {
    name: "Decision 01 — Home Screen",
    headline: "Today-only view as single source of truth",
    rows: [
      { label: "Decision", value: "Home screen shows only today's doses with confirm/skip actions." },
      { label: "Alternatives", value: "Full calendar view, multi-week schedule, or notification-only model." },
      { label: "Reasoning", value: "Clear daily rituals reduce anxiety. Limiting scope to today makes the task immediately obvious." },
      { label: "Linked insights", value: "#01 Confirmation · #02 Cognitive load · #03 Simplicity" },
    ],
  },
  {
    name: "Decision 02 — Dose Confirmation",
    headline: "Confirmation embedded directly in the feed",
    rows: [
      { label: "Decision", value: "Users confirm upcoming doses from the home feed without deeper navigation." },
      { label: "Alternatives", value: "Dedicated confirmation screen, pop-up modal, or push notification reply." },
      { label: "Reasoning", value: "Reduces friction for the most frequent action. The confirmation-first model must be instantly accessible." },
      { label: "Linked insights", value: "#01 Confirmation · #03 Simplicity · #05 Accessibility" },
    ],
  },
  {
    name: "Decision 03 — Scan to Add",
    headline: "Barcode scanning as the primary entry",
    rows: [
      { label: "Decision", value: "Barcode-first onboarding surfaces pill name, dosage, and instructions automatically." },
      { label: "Alternatives", value: "Manual form entry, search-by-name, or photo recognition." },
      { label: "Reasoning", value: "Manual entry is tedious and error-prone. Scanning is faster and more approachable for older adults." },
      { label: "Linked insights", value: "#02 Cognitive load · #03 Simplicity · #04 Trust" },
    ],
  },
  {
    name: "Decision 04 — Medication Detail",
    headline: "Education and clarity balanced in a single view",
    rows: [
      { label: "Decision", value: "Key warnings surface first; longer educational content stays accessible but collapsed." },
      { label: "Alternatives", value: "Flat list of all info, external links only, or no educational content." },
      { label: "Reasoning", value: "Progressive disclosure keeps the screen informative without overwhelming the user." },
      { label: "Linked insights", value: "#02 Cognitive load · #04 Trust · #05 Accessibility" },
    ],
  },
  {
    name: "Decision 05 — Doctor Communication",
    headline: "Lightweight messaging keeps support close",
    rows: [
      { label: "Decision", value: "Direct messaging flow tied to specific medications, without full EHR complexity." },
      { label: "Alternatives", value: "Phone-only, third-party telehealth link, or in-app symptom log only." },
      { label: "Reasoning", value: "Users need fast clarification about symptoms or side effects without the app feeling clinical." },
      { label: "Linked insights", value: "#04 Trust · #03 Simplicity" },
    ],
  },
  {
    name: "Decision 06 — Accessibility System",
    headline: "Large targets, color independence, and calm layouts",
    rows: [
      { label: "Decision", value: "48pt minimum tap targets, 15pt minimum body type, statuses communicated with icon + label (never color alone)." },
      { label: "Alternatives", value: "Standard 44pt targets, smaller body type, color-only status indicators." },
      { label: "Reasoning", value: "Serving 65+ users requires accessibility to be a hard constraint, not a preference." },
      { label: "Linked insights", value: "#05 Accessibility · #03 Simplicity · #02 Cognitive load" },
    ],
  },
];

const screenGroups = [
  { name: "Home Screen", desc: "Today-focused dose confirmation feed", bullets: ["Today's dose cards with confirm / skip", "Time-grouped medications", "Confirmed state stamp"] },
  { name: "Medication List & Detail", desc: "Education, schedules, and warnings", bullets: ["Sortable medication list", "Detail with progressive disclosure", "Warning and refill indicators"] },
  { name: "Add Medication Flow", desc: "Barcode-first onboarding", bullets: ["Scanner view with barcode detection", "Auto-filled detail form", "Manual entry fallback"] },
  { name: "Profile & Settings", desc: "Personal preferences and caregiver access", bullets: ["Notification preferences", "Caregiver permissions", "Account and support"] },
  { name: "Doctor Communication", desc: "Lightweight medication-linked messaging", bullets: ["Message thread per medication", "Structured question templates", "Status and read receipts"] },
  { name: "Caregiver App", desc: "Exception-only visibility for remote caregivers", bullets: ["Missed dose alerts", "Today's adherence summary", "Quick message to patient"] },
];

const a11yRows = [
  { label: "Typography", value: "15pt minimum body, 1.8 line-height, DM Sans weight 400" },
  { label: "Touch targets", value: "48pt minimum for all interactive elements" },
  { label: "Color system", value: "#2B5EE8 primary, #5B8DEF secondary — 4.5:1 contrast minimum" },
  { label: "Motion", value: "prefers-reduced-motion respected; no parallax or auto-play" },
  { label: "Status states", value: "Icon + label for all states — never color alone" },
];

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

        {/* Sticky nav */}
        <nav className={`dc-nav${scrolled ? " scrolled" : ""}`}>
          <div className="dc-nav-logo">
            <span className="dc-nav-dot" />
            DoseCare
          </div>
          <div className="dc-nav-links">
            <a href="#problem">Problem</a>
            <a href="#research">Research</a>
            <a href="#insights">Insights</a>
            <a href="#design">Design</a>
            <a href="#outcomes">Outcomes</a>
          </div>
        </nav>

        {/* 01 Hero */}
        <section className="dc-section dc-section-first" id="hero">
          <div className="dc-container">
            <div className="dc-hero-grid">
              <div>
                <div className="dc-eyebrow">UX Case Study · iOS · 2024</div>
                <h1 className="dc-hero-title">
                  <span className="t-light">Medication</span><br />
                  <span className="t-bold">adherence</span><br />
                  <span className="t-light">for adults </span><span className="t-blue">65+</span>
                </h1>
                <div className="dc-rule" />
                <p style={{ fontSize: 15, color: "#4A4740", maxWidth: 420, lineHeight: 1.8 }}>
                  DoseCare is a medication management iOS app designed around one core unmet need — confirmation. Built from 9 user interviews and 129 research notes.
                </p>
                <div className="dc-stats">
                  {[{ num: "9", label: "Interviews" }, { num: "129", label: "Notes" }, { num: "5", label: "Insights" }, { num: "65+", label: "Target age" }].map((s) => (
                    <div className="dc-stat" key={s.label}>
                      <span className="dc-stat-num">{s.num}</span>
                      <span className="dc-stat-label">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-dm-mono, 'DM Mono', monospace)", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.08em", color: "#9B9690", marginBottom: 10 }}>
                  Role &amp; Tools
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  <span className="dc-chip">Solo UX Designer</span>
                  {["Figma", "Stark", "SF Symbols", "iOS"].map((t) => (
                    <span key={t} className="dc-chip dc-chip-neutral">{t}</span>
                  ))}
                </div>
                <div className="dc-insight-preview">
                  <div className="dc-insight-preview-header">5 Core Insights</div>
                  {insights.map((ins) => (
                    <div className="dc-insight-preview-row" key={ins.num}>
                      <span className="dc-insight-num">{ins.num}</span>
                      <span className="dc-insight-preview-text">{ins.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="dc-screen" style={{ marginTop: 48 }}>[ Hero device mockup ]</div>
          </div>
        </section>

        {/* 02 Problem */}
        <section className="dc-section" id="problem">
          <div className="dc-container" style={{ maxWidth: "calc(680px + 96px)" }}>
            <div className="dc-eyebrow">02 — Problem</div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 24, color: "#1C1A16" }}>
              The gap existing apps don&apos;t address
            </h2>
            <p style={{ fontSize: 15, color: "#4A4740", lineHeight: 1.8, marginBottom: 20 }}>
              Medication adherence is especially difficult for older adults who often manage several prescriptions with different schedules, refill needs, and side effects. In many cases, the challenge is not only remembering to take medication, but remembering whether it was already taken.
            </p>
            <p style={{ fontSize: 15, color: "#4A4740", lineHeight: 1.8, marginBottom: 20 }}>
              Existing reminder apps often emphasize notifications but do not adequately support confirmation, reassurance, or recovery from uncertainty. This creates unnecessary cognitive load and reduces confidence in daily medication management.
            </p>
            <blockquote className="dc-pullquote">
              &ldquo;How might we design a medication experience that helps older adults stay independent while making adherence more visible, understandable, and trustworthy?&rdquo;
            </blockquote>
            <ul className="dc-problem-list">
              {[
                "Reminders arrive but users have no way to confirm whether a dose was taken",
                "Cognitive overload when multiple medications appear simultaneously",
                "Caregivers lack a reliable source of truth without overstepping autonomy",
                "Doctor communication is fragmented and unconnected to medication records",
                "Confidence drops when routines shift — leading to missed or double doses",
              ].map((item, i) => (
                <li className="dc-problem-item" key={i}>
                  <span className="dc-problem-num">0{i + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 03 Research */}
        <section className="dc-section" id="research">
          <div className="dc-container">
            <div className="dc-eyebrow">03 — Research</div>
            <div className="dc-grid-2">
              <div>
                <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 16, color: "#1C1A16" }}>
                  9 interviews · 129 notes
                </h2>
                <p style={{ fontSize: 15, color: "#4A4740", lineHeight: 1.8, marginBottom: 16 }}>
                  A mixed research approach: semi-structured interviews with patients and caregivers, secondary research on the doctor perspective, and affinity mapping with tag-based synthesis. 9 interviews of 45–60 minutes generated 129 notes cleaned, tagged, and grouped into themes.
                </p>
                <p style={{ fontSize: 15, color: "#4A4740", lineHeight: 1.8, marginBottom: 24 }}>
                  Patterns around uncertainty, information overload, reminder fatigue, and weak support loops were consolidated into the 5 core insights that shaped the product direction.
                </p>
                <div className="dc-persona">
                  <div className="dc-persona-header">
                    <div className="dc-persona-name">Ellen Morris</div>
                    <div className="dc-persona-sub">72 · Savannah, GA</div>
                  </div>
                  <div style={{ padding: 0 }}>
                    <div className="dc-table">
                      {[
                        { label: "Situation", value: "Lives alone, manages 6 medications daily using a pill organizer and phone alarms" },
                        { label: "Primary fear", value: "Missing a dose or accidentally double-dosing when her routine shifts" },
                        { label: "Core needs", value: "Schedule confidence, easy doctor notes, ability to prove adherence to herself and her daughter" },
                      ].map((r) => (
                        <div className="dc-row" key={r.label}>
                          <div className="dc-label">{r.label}</div>
                          <div className="dc-value">{r.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-dm-mono, 'DM Mono', monospace)", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.08em", color: "#9B9690", marginBottom: 12 }}>
                  Methodology
                </div>
                <div className="dc-table">
                  {[
                    { label: "Methods", value: "Semi-structured interviews (patients + caregivers), secondary research (doctor perspective), affinity mapping + tag synthesis" },
                    { label: "Participants", value: "9 total · patients + caregivers · 65+ adults with chronic conditions" },
                    { label: "Session length", value: "45–60 minutes each" },
                    { label: "Notes generated", value: "129 notes tagged and grouped into themes" },
                    { label: "Focus areas", value: "Current routines, missed-dose causes, caregiver verification, doctor communication patterns" },
                    { label: "Key finding", value: "Adherence is not a scheduling problem — it is a confidence problem" },
                  ].map((r) => (
                    <div className="dc-row" key={r.label}>
                      <div className="dc-label">{r.label}</div>
                      <div className="dc-value">{r.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 04 Key Insights */}
        <section className="dc-section" id="insights">
          <div className="dc-container">
            <div className="dc-eyebrow">04 — Key Insights</div>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 600, letterSpacing: "-0.02em", color: "#1C1A16", marginBottom: 8 }}>
              What research revealed
            </h2>
            <p style={{ fontSize: 15, color: "#9B9690", marginBottom: 40 }}>
              9 interviews · 129 notes · affinity mapping → 5 findings
            </p>
            <div>
              {insights.map((ins, i) => (
                <div className={`dc-insight-row${i === 0 ? " dc-insight-row-first" : ""}`} key={ins.num}>
                  {i === 0 && <div className="dc-insight-strip" />}
                  <span className="dc-insight-number">{ins.num}</span>
                  <div className="dc-insight-content">
                    <div className="dc-insight-title">{ins.title}</div>
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
        </section>

        {/* 05 Define */}
        <section className="dc-section" id="define">
          <div className="dc-container">
            <div className="dc-eyebrow">05 — Define</div>
            <div className="dc-grid-2">
              <div>
                <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 600, letterSpacing: "-0.02em", color: "#1C1A16", marginBottom: 24 }}>
                  How Might We
                </h2>
                <ul className="dc-hmw-list">
                  {hmwItems.map((item, i) => (
                    <li className="dc-hmw-item" key={i}>
                      <span className="dc-hmw-prefix">HMW</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-dm-mono, 'DM Mono', monospace)", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.08em", color: "#9B9690", marginBottom: 4 }}>
                  Information Architecture
                </div>
                <div style={{ fontSize: 13, color: "#9B9690", marginBottom: 16 }}>Patient App — 5 tabs</div>
                <ul className="dc-ia-list">
                  {iaItems.map((item) => (
                    <li className="dc-ia-item" key={item.name}>
                      <span className="dc-ia-name">{item.name}</span>
                      <span className="dc-ia-desc">{item.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 06 Design Decisions */}
        <section className="dc-section" id="design">
          <div className="dc-container">
            <div className="dc-eyebrow">06 — Design Decisions</div>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 600, letterSpacing: "-0.02em", color: "#1C1A16", marginBottom: 8 }}>
              Why simpler won every time
            </h2>
            <p style={{ fontSize: 15, color: "#9B9690", marginBottom: 48 }}>
              Each decision prioritized reducing friction over adding features.
            </p>
            {decisions.map((d) => (
              <div className="dc-decision" key={d.name}>
                <div className="dc-decision-name">{d.name}</div>
                <div className="dc-decision-headline">{d.headline}</div>
                <div className="dc-table">
                  {d.rows.map((r) => (
                    <div className="dc-row" key={r.label}>
                      <div className="dc-label">{r.label}</div>
                      <div className="dc-value">{r.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 07 Accessibility */}
        <section className="dc-section" id="accessibility">
          <div className="dc-container" style={{ maxWidth: "calc(680px + 96px)" }}>
            <div className="dc-eyebrow">07 — Accessibility</div>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 600, letterSpacing: "-0.02em", color: "#1C1A16", marginBottom: 16 }}>
              Designed for 65+ from the ground up
            </h2>
            <p style={{ fontSize: 15, color: "#4A4740", lineHeight: 1.8, marginBottom: 32 }}>
              Accessibility was treated as a core design requirement because the product serves older adults who may be managing medication under cognitive or physical constraints.
            </p>
            <div className="dc-table">
              {a11yRows.map((r) => (
                <div className="dc-row" key={r.label}>
                  <div className="dc-label">{r.label}</div>
                  <div className="dc-value">{r.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 08 Final Design */}
        <section className="dc-section" id="final-design">
          <div className="dc-container">
            <div className="dc-eyebrow">08 — Final Design</div>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 600, letterSpacing: "-0.02em", color: "#1C1A16", marginBottom: 48 }}>
              High-fidelity screens
            </h2>
            {screenGroups.map((group) => (
              <div className="dc-screen-group" key={group.name}>
                <div className="dc-screen-group-header">
                  <span className="dc-screen-group-name">{group.name}</span>
                  <span className="dc-screen-group-sep">—</span>
                  <span className="dc-screen-group-desc">{group.desc}</span>
                </div>
                <div className="dc-screen">[ {group.name} ]</div>
                <ul className="dc-screen-bullets">
                  {group.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 09 Outcomes */}
        <section className="dc-section" id="outcomes">
          <div className="dc-container" style={{ maxWidth: "calc(680px + 96px)" }}>
            <div className="dc-eyebrow">09 — Outcomes</div>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 600, letterSpacing: "-0.02em", color: "#1C1A16", marginBottom: 32 }}>
              Outcomes &amp; Reflection
            </h2>
            <div className="dc-refl-sub">What worked well</div>
            <ul className="dc-refl-list">
              <li>Confirmation-first interactions gave older adults a tangible sense of completion and reduced dose uncertainty anxiety</li>
              <li>Scan-first onboarding reduced setup friction significantly compared to manual entry flows</li>
              <li>Research synthesis revealed that confirmation — not reminders — was the real unmet need, directly shaping the product direction</li>
              <li>Usability testing validated the reminder confirmation flow with 100% task completion</li>
            </ul>
            <div className="dc-refl-sub">What I&apos;d do differently</div>
            <ul className="dc-refl-list">
              <li>Test the scan flow fallback earlier — barcode errors lacked sufficient recovery guidance in early iterations</li>
              <li>Run more moderated sessions with 65+ participants to surface accessibility issues earlier</li>
              <li>Explore a caregiver dashboard more deeply as a parallel experience rather than an afterthought</li>
            </ul>
            <div className="dc-refl-sub">Next steps</div>
            <ul className="dc-refl-list">
              <li>Additional moderated testing with more participants in the 65+ demographic</li>
              <li>Refine medication onboarding and information entry points based on observed hesitation</li>
              <li>Prototype caregiver dashboard with exception-only alerting</li>
              <li>Explore calendar integration for doctor notes and prescription schedules</li>
            </ul>
            <blockquote className="dc-pullquote" style={{ marginTop: 48 }}>
              &ldquo;DoseCare taught me that the best design for vulnerable users is not more features — it&apos;s relentless focus on a single core problem.&rdquo;
            </blockquote>
          </div>
        </section>

      </div>
    </>
  );
}

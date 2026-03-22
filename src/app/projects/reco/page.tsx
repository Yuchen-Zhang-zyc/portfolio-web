"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import NextProject from "../../components/NextProject";

const CSS = `
  .reco-page { font-family: var(--font-dm-sans, 'DM Sans', sans-serif); background: #0D0D0F; color: #F0EEE9; min-height: 100vh; }

  /* Nav */
  .reco-nav { position: sticky; top: 0; z-index: 50; background: rgba(13,13,15,0.85); backdrop-filter: blur(16px); padding: 0 48px; height: 52px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.06); }
  .reco-nav-logo { font-size: 14px; font-weight: 600; color: #F0EEE9; letter-spacing: 0.02em; }
  .reco-nav-back { font-family: var(--font-dm-mono, 'DM Mono', monospace); font-size: 11px; color: rgba(240,238,233,0.4); text-decoration: none; letter-spacing: 0.06em; transition: color 0.2s; }
  .reco-nav-back:hover { color: rgba(240,238,233,0.8); }
  @media (max-width: 768px) { .reco-nav { padding: 0 24px; } }

  /* Layout */
  .reco-container { max-width: 1100px; margin: 0 auto; padding: 0 48px; }
  @media (max-width: 768px) { .reco-container { padding: 0 24px; } }

  /* Section */
  .reco-section { padding: 96px 0; border-top: 1px solid rgba(255,255,255,0.07); }
  .reco-section-first { border-top: none; padding-top: 80px; }

  /* Typography */
  .reco-eyebrow { font-family: var(--font-dm-mono, 'DM Mono', monospace); font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: #5B8CF5; margin-bottom: 12px; }
  .reco-h1 { font-size: clamp(48px, 7vw, 80px); font-weight: 700; line-height: 1.0; letter-spacing: -0.03em; margin-bottom: 24px; }
  .reco-h2 { font-size: clamp(24px, 3vw, 36px); font-weight: 600; letter-spacing: -0.02em; line-height: 1.2; color: #F0EEE9; margin-bottom: 16px; }
  .reco-lead { font-size: 17px; color: rgba(240,238,233,0.65); line-height: 1.8; max-width: 600px; }

  /* Meta grid */
  .reco-meta { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.07); margin-top: 56px; }
  .reco-meta-cell { padding: 20px; background: #0D0D0F; }
  .reco-meta-label { font-family: var(--font-dm-mono, 'DM Mono', monospace); font-size: 9px; text-transform: uppercase; letter-spacing: 0.12em; color: rgba(240,238,233,0.3); margin-bottom: 6px; }
  .reco-meta-value { font-size: 13px; color: rgba(240,238,233,0.75); font-weight: 500; }
  @media (max-width: 640px) { .reco-meta { grid-template-columns: 1fr 1fr; } }

  /* Role highlight */
  .reco-role-badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(91,140,245,0.12); border: 1px solid rgba(91,140,245,0.25); padding: 6px 14px; border-radius: 100px; font-size: 12px; color: #7AABFF; font-family: var(--font-dm-mono, 'DM Mono', monospace); letter-spacing: 0.04em; margin-bottom: 24px; }
  .reco-role-dot { width: 6px; height: 6px; border-radius: 50%; background: #5B8CF5; flex-shrink: 0; }

  /* Two col */
  .reco-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start; }
  @media (max-width: 860px) { .reco-grid-2 { grid-template-columns: 1fr; gap: 40px; } }

  /* Tech stack cards */
  .reco-stack { display: flex; flex-direction: column; gap: 1px; background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.07); }
  .reco-stack-row { display: grid; grid-template-columns: 200px 1fr; background: #0D0D0F; }
  .reco-stack-label { padding: 16px 20px; font-family: var(--font-dm-mono, 'DM Mono', monospace); font-size: 11px; color: rgba(240,238,233,0.35); text-transform: uppercase; letter-spacing: 0.08em; border-right: 1px solid rgba(255,255,255,0.07); display: flex; align-items: center; }
  .reco-stack-value { padding: 16px 20px; font-size: 13px; color: rgba(240,238,233,0.7); line-height: 1.6; display: flex; align-items: center; gap: 10px; }
  .reco-stack-tag { font-family: var(--font-dm-mono, 'DM Mono', monospace); font-size: 10px; background: rgba(91,140,245,0.12); color: #7AABFF; padding: 3px 8px; border-radius: 4px; white-space: nowrap; }
  @media (max-width: 640px) { .reco-stack-row { grid-template-columns: 1fr; } .reco-stack-label { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.07); } }

  /* Contribution items */
  .reco-contrib-list { list-style: none; padding: 0; margin: 0; }
  .reco-contrib-item { border-top: 1px solid rgba(255,255,255,0.07); padding: 24px 0; display: flex; gap: 20px; }
  .reco-contrib-num { font-family: var(--font-dm-mono, 'DM Mono', monospace); font-size: 10px; color: #5B8CF5; flex-shrink: 0; padding-top: 4px; min-width: 24px; }
  .reco-contrib-title { font-size: 15px; font-weight: 600; color: #F0EEE9; margin-bottom: 6px; }
  .reco-contrib-body { font-size: 13px; color: rgba(240,238,233,0.55); line-height: 1.7; }

  /* Feature image */
  .reco-feature-img { width: 100%; border-radius: 12px; display: block; margin-top: 16px; }

  /* Feature cards */
  .reco-features { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.07); margin-top: 40px; }
  .reco-feature-card { background: #0D0D0F; padding: 28px 24px; }
  .reco-feature-icon { font-size: 22px; margin-bottom: 12px; }
  .reco-feature-name { font-size: 15px; font-weight: 600; color: #F0EEE9; margin-bottom: 8px; }
  .reco-feature-desc { font-size: 13px; color: rgba(240,238,233,0.5); line-height: 1.65; }
  @media (max-width: 700px) { .reco-features { grid-template-columns: 1fr; } }

  /* Stat row */
  .reco-stats { display: flex; gap: 1px; background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.07); margin-top: 40px; flex-wrap: wrap; }
  .reco-stat { padding: 24px 28px; background: #0D0D0F; flex: 1; min-width: 120px; }
  .reco-stat-num { font-size: 32px; font-weight: 700; color: #F0EEE9; display: block; letter-spacing: -0.03em; }
  .reco-stat-label { font-family: var(--font-dm-mono, 'DM Mono', monospace); font-size: 10px; color: rgba(240,238,233,0.35); display: block; margin-top: 4px; text-transform: uppercase; letter-spacing: 0.08em; }

  /* Pullquote */
  .reco-pullquote { border-left: 2px solid #5B8CF5; padding-left: 24px; margin: 40px 0; font-size: 18px; font-weight: 300; font-style: italic; color: rgba(240,238,233,0.65); line-height: 1.65; }

  /* HiFi gallery */
  .reco-hifi-scroll { display: flex; gap: 16px; overflow-x: auto; padding-bottom: 16px; margin-top: 40px; scrollbar-width: thin; scrollbar-color: rgba(255,255,255,0.15) transparent; }
  .reco-hifi-scroll::-webkit-scrollbar { height: 4px; }
  .reco-hifi-scroll::-webkit-scrollbar-track { background: transparent; }
  .reco-hifi-scroll::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 2px; }
  .reco-hifi-frame { flex-shrink: 0; width: 220px; border-radius: 28px; overflow: hidden; border: 1px solid rgba(255,255,255,0.08); background: #111114; box-shadow: 0 12px 32px rgba(0,0,0,0.35); }
  .reco-hifi-frame img { width: 100%; height: auto; display: block; }
`;

export default function RecoPage() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{CSS}</style>
      <div className="reco-page">

        {/* Back link */}
        <div className="relative z-20" style={{ padding: "14px 48px" }}>
          <Link href="/" style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", textDecoration: "none", fontFamily: "monospace", letterSpacing: "0.06em" }}>← Home</Link>
        </div>

        {/* Nav */}
        <nav className="reco-nav relative z-20">
          <span className="reco-nav-logo">RECO</span>
        </nav>

        {/* 01 Hero */}
        <section className="reco-section reco-section-first" id="main-content">
          <div className="reco-container">
            <div className="reco-eyebrow">School Competition · iOS · Group Busy BEE · 2024</div>
            <h1 className="reco-h1">
              <span style={{ color: "rgba(240,238,233,0.9)" }}>RECO</span>
            </h1>
            <p className="reco-lead">
              An AI-powered rehabilitation companion for athletes recovering from ACL surgery — helping them stay motivated through months of repetitive home exercise with psychological support, smart tracking, and medical-grade guidance.
            </p>

            <div className="reco-meta">
              {[
                { label: "My Role", value: "API Integration & Frontend" },
                { label: "Team", value: "Group Busy BEE" },
                { label: "Type", value: "School Competition" },
                { label: "Platform", value: "iOS Mobile" },
              ].map((m) => (
                <div className="reco-meta-cell" key={m.label}>
                  <div className="reco-meta-label">{m.label}</div>
                  <div className="reco-meta-value">{m.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 02 Problem */}
        <section className="reco-section" id="problem">
          <div className="reco-container">
            <div className="reco-grid-2">
              <div>
                <div className="reco-eyebrow">02 — Problem</div>
                <h2 className="reco-h2">The biggest challenge isn&apos;t physical — it&apos;s psychological.</h2>
                <p style={{ fontSize: 15, color: "rgba(240,238,233,0.6)", lineHeight: 1.8, marginBottom: 20 }}>
                  Teen and college-aged athletes struggle to stay motivated through repetitive, months-long home exercise programs after ACL surgery. Daily stress and negative mood directly correlate with lower exercise adherence.
                </p>
                <blockquote className="reco-pullquote">
                  &ldquo;You feel depressed and powerless. Recovery feels endless. Every day you do small, repetitive exercises, but you don&apos;t know if you&apos;re getting better.&rdquo;
                </blockquote>
              </div>
              <div>
                <div className="reco-stats">
                  {[
                    { num: "41.8%", label: "Athletes experiencing anxiety & depression post-surgery" },
                    { num: "40%", label: "Reported depression rate during ACL recovery" },
                  ].map((s) => (
                    <div className="reco-stat" key={s.label}>
                      <span className="reco-stat-num">{s.num}</span>
                      <span className="reco-stat-label">{s.label}</span>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 12, color: "rgba(240,238,233,0.25)", marginTop: 12, lineHeight: 1.6, fontFamily: "var(--font-dm-mono,'DM Mono',monospace)" }}>
                  Source: Caumeil et al. — Reinjury Anxiety and Return to Sport After ACL Reconstruction, 162 athletes
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 03 Solution */}
        <section className="reco-section" id="solution">
          <div className="reco-container">
            <div className="reco-eyebrow">03 — Solution</div>
            <h2 className="reco-h2">Autonomy, Competence, Relatedness — the three pillars of motivation.</h2>
            <p style={{ fontSize: 15, color: "rgba(240,238,233,0.6)", lineHeight: 1.8, maxWidth: 640, marginBottom: 40 }}>
              RECO is an AI chatbot grounded in Self-Determination Theory (SDT). It restores motivation by giving athletes a sense of control over their recovery, clear progress signals, and an emotionally supportive companion — VITA.
            </p>

            <div className="reco-features">
              {[
                {
                  icon: "🤖",
                  name: "Character — VITA",
                  desc: "AI-driven companion with medical knowledge, trained on PubMed research. Provides rehabilitation guidance with expertise in nutrition and recovery science.",
                },
                {
                  icon: "📱",
                  name: "Smartphone IMU",
                  desc: "Uses phone sensors to measure the angle of leg lift, speed, and amplitude — giving accurate, quantitative feedback on exercise form and progress.",
                },
                {
                  icon: "🟩",
                  name: "Widgets",
                  desc: "Home screen widgets showing recovery day count and daily check-ins, increasing utilization and giving athletes a stronger sense of companionship.",
                },
              ].map((f) => (
                <div className="reco-feature-card" key={f.name}>
                  <div className="reco-feature-icon">{f.icon}</div>
                  <div className="reco-feature-name">{f.name}</div>
                  <div className="reco-feature-desc">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 04 HiFi Prototype */}
        <section className="reco-section" id="hifi">
          <div className="reco-container">
            <div className="reco-eyebrow">04 — HiFi Prototype</div>
            <h2 className="reco-h2">BoKnee — the companion in action.</h2>
            <p style={{ fontSize: 15, color: "rgba(240,238,233,0.6)", lineHeight: 1.8, maxWidth: 600 }}>
              High-fidelity screens showing VITA&apos;s emotional check-in flow, mood tracking, and the app&apos;s visual language — warm, approachable, and designed to feel more companion than clinical tool.
            </p>
            <div className="reco-hifi-scroll">
              {[1,2,3,4,5,6,7,8,9].map((n) => (
                <div className="reco-hifi-frame" key={n}>
                  <img
                    src={`/projects/reco/hifi-${n}.png`}
                    alt={`BoKnee HiFi screen ${n}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 05 My Contribution */}
        <section className="reco-section" id="contribution">
          <div className="reco-container">
            <div className="reco-eyebrow">05 — My Contribution</div>
            <div style={{ marginBottom: 16 }}>
              <span className="reco-role-badge">
                <span className="reco-role-dot" />
                API Integration &amp; Frontend Development
              </span>
            </div>
            <h2 className="reco-h2">Building the technical layer that made the AI possible.</h2>
            <p style={{ fontSize: 15, color: "rgba(240,238,233,0.6)", lineHeight: 1.8, maxWidth: 600, marginBottom: 40 }}>
              My focus was on the technical infrastructure — connecting external AI and medical APIs to the frontend, and building the interface components that brought the product to life.
            </p>
            <ul className="reco-contrib-list">
              {[
                {
                  num: "01",
                  title: "ChatGPT-4o.mini API Integration",
                  body: "Integrated OpenAI's GPT-4o.mini as the conversational engine powering VITA. Designed the system prompt to constrain responses to rehabilitation and nutrition domains, reducing hallucination risk in a medical context.",
                },
                {
                  num: "02",
                  title: "Entrez PubMed API — Medical Knowledge Pipeline",
                  body: "Connected to the NCBI Entrez PubMed API to fetch peer-reviewed research on ACL recovery. This gave VITA access to real medical literature, making responses more credible and evidence-based.",
                },
                {
                  num: "03",
                  title: "Supabase API Key Encryption",
                  body: "Implemented server-side API key management using Supabase to prevent key exposure on the client. Ensured OpenAI and PubMed credentials were never accessible in the frontend bundle.",
                },
                {
                  num: "04",
                  title: "Frontend Development",
                  body: "Built the chat interface, feature screens, and widget components. Focused on creating a calm, approachable visual language that matched the emotional tone needed for a mental health-adjacent recovery product.",
                },
              ].map((c) => (
                <li className="reco-contrib-item" key={c.num}>
                  <span className="reco-contrib-num">{c.num}</span>
                  <div>
                    <div className="reco-contrib-title">{c.title}</div>
                    <div className="reco-contrib-body">{c.body}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 06 Tech Stack */}
        <section className="reco-section" id="tech">
          <div className="reco-container">
            <div className="reco-eyebrow">06 — Tech Stack</div>
            <h2 className="reco-h2">What we built with.</h2>
            <div style={{ marginTop: 32 }}>
              <div className="reco-stack">
                {[
                  { label: "AI Model", value: "ChatGPT-4o.mini", tag: "OpenAI API" },
                  { label: "Medical Data", value: "Entrez PubMed API — NCBI peer-reviewed research database", tag: "MED-API" },
                  { label: "Security", value: "Supabase Key Encryption — server-side API key storage and management", tag: "Encryption" },
                  { label: "Platform", value: "iOS Mobile Application", tag: "Swift / React Native" },
                  { label: "SDT Framework", value: "Self-Determination Theory — Autonomy · Competence · Relatedness", tag: "Psychology" },
                ].map((r) => (
                  <div className="reco-stack-row" key={r.label}>
                    <div className="reco-stack-label">{r.label}</div>
                    <div className="reco-stack-value">
                      <span style={{ flex: 1 }}>{r.value}</span>
                      <span className="reco-stack-tag">{r.tag}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 07 Reflection */}
        <section className="reco-section" id="reflection">
          <div className="reco-container">
            <div style={{ maxWidth: 680 }}>
              <div className="reco-eyebrow">07 — Reflection</div>
              <h2 className="reco-h2">What I learned from building with AI APIs.</h2>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  { mark: "→", text: "Securing API keys server-side is non-negotiable — even in a competition prototype, exposing credentials in a frontend bundle is a real risk." },
                  { mark: "→", text: "Grounding an LLM with domain-specific data (PubMed) significantly improves response quality for specialized use cases." },
                  { mark: "→", text: "System prompts are a design artifact — constraining the AI's behavior is as much a design decision as the interface itself." },
                  { mark: "→", text: "For health-adjacent products, the tone of AI responses matters as much as their accuracy. Designing the model's personality is part of the work." },
                ].map((item, i) => (
                  <li key={i} style={{ borderTop: "1px solid rgba(255,255,255,0.07)", padding: "18px 0", display: "flex", gap: 16, fontSize: 14, color: "rgba(240,238,233,0.6)", lineHeight: 1.7 }}>
                    <span style={{ fontFamily: "var(--font-dm-mono,'DM Mono',monospace)", fontSize: 11, color: "#5B8CF5", flexShrink: 0, paddingTop: 2 }}>{item.mark}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

      </div>
      <NextProject href="/projects/this-website" title="This Website" role="Designer & Developer" theme="dark" />
    </>
  );
}

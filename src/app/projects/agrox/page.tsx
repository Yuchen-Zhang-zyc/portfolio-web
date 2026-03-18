"use client";

import Link from "next/link";

import React from "react";
import NextProject from "../../components/NextProject";

const CSS = `
  /* Base Variables - Glassmorphism / Spatial UI */
  .ag-page {
    --bg-gradient: linear-gradient(135deg, #F0F4F8 0%, #E2E8F0 100%);
    --glass-bg: rgba(255, 255, 255, 0.6);
    --glass-border: rgba(255, 255, 255, 0.8);
    --text-main: #1E293B;
    --text-muted: #64748B;
    --accent: #0EA5E9; /* Fresh Ocean Blue */
    --accent-green: #10B981;
    
    font-family: var(--font-inter, 'Inter', sans-serif);
    background: var(--bg-gradient);
    color: var(--text-main);
    min-height: 100vh;
    padding-bottom: 120px;
    position: relative;
    overflow: hidden;
  }

  /* Fixed Background Shapes for Glass Effect */
  .ag-page-bg {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    pointer-events: none;
    overflow: hidden;
  }

  .ag-page-bg::before,
  .ag-page-bg::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    filter: blur(100px);
    opacity: 0.6;
  }

  .ag-page-bg::before {
    width: 80vw;
    height: 80vw;
    max-width: 800px;
    max-height: 800px;
    background: #E0F2FE;
    top: -10%;
    left: -10%;
  }

  .ag-page-bg::after {
    width: 60vw;
    height: 60vw;
    max-width: 600px;
    max-height: 600px;
    background: #D1FAE5;
    bottom: -10%;
    right: -10%;
  }

  .ag-container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 40px;
    position: relative;
    z-index: 1; /* Above background blobs */
  }

  .ag-section {
    padding: 80px 0;
  }

  .ag-section-border {
    border-top: 1px solid rgba(15, 23, 42, 0.08);
  }

  /* Typography */
  .ag-eyebrow {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 20px;
    display: inline-block;
    background: rgba(14, 165, 233, 0.1);
    padding: 6px 16px;
    border-radius: 100px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.5);
  }

  .ag-title {
    font-size: clamp(36px, 5vw, 56px);
    font-weight: 400;
    letter-spacing: -0.03em;
    line-height: 1.1;
    margin-bottom: 24px;
    max-width: 800px;
    color: #0F172A;
  }

  .ag-title strong {
    font-weight: 600;
    background: linear-gradient(90deg, #0EA5E9, #10B981);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .ag-desc {
    font-size: 18px;
    font-weight: 400;
    color: var(--text-muted);
    line-height: 1.6;
    max-width: 680px;
    margin-bottom: 48px;
  }

  /* Hero Section */
  .ag-hero {
    padding: 160px 0 80px;
  }
  
  .ag-hero-title {
    font-size: clamp(48px, 8vw, 80px);
    font-weight: 700;
    letter-spacing: -0.04em;
    margin-bottom: 16px;
    color: #0F172A;
  }

  .ag-hero-subtitle {
    font-size: clamp(20px, 3vw, 28px);
    color: var(--text-muted);
    font-weight: 300;
    margin-bottom: 64px;
  }

  .ag-meta-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
    padding-top: 40px;
    border-top: 1px solid rgba(15, 23, 42, 0.1);
  }

  @media (max-width: 768px) {
    .ag-meta-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; }
  }

  .ag-meta-label {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--text-muted);
    margin-bottom: 8px;
    font-weight: 600;
  }

  .ag-meta-value {
    font-size: 15px;
    color: #0F172A;
    font-weight: 500;
    line-height: 1.5;
  }

  /* Grid Layouts */
  .ag-glass-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    margin-bottom: 64px;
  }

  .ag-grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
  }

  .ag-grid-2-asym {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 48px;
  }

  @media (max-width: 900px) {
    .ag-glass-grid, .ag-grid-2, .ag-grid-2-asym {
      grid-template-columns: 1fr;
    }
  }

  /* Glass Cards */
  .ag-glass-card {
    background: var(--glass-bg);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border: 1px solid var(--glass-border);
    border-radius: 24px;
    padding: 40px 32px;
    box-shadow: 
      0 4px 24px -1px rgba(0, 0, 0, 0.05),
      inset 0 0 0 1px rgba(255, 255, 255, 0.5);
    display: flex;
    flex-direction: column;
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
    position: relative;
    overflow: hidden;
  }

  .ag-glass-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 150px;
    background: linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 100%);
    pointer-events: none;
  }

  .ag-glass-card:hover {
    transform: translateY(-4px);
    box-shadow: 
      0 12px 32px -8px rgba(0, 0, 0, 0.1),
      0 0 0 1px var(--accent),
      inset 0 0 0 1px rgba(255, 255, 255, 0.8);
  }

  /* Specific Card variants */
  .ag-card-stat {
    padding: 32px;
    text-align: center;
    justify-content: center;
  }

  .ag-stat-num {
    font-size: 48px;
    font-weight: 700;
    color: var(--accent);
    margin-bottom: 8px;
    line-height: 1;
  }

  .ag-stat-label {
    font-size: 14px;
    color: var(--text-muted);
    font-weight: 500;
  }

  .ag-card-icon {
    width: 48px;
    height: 48px;
    background: #FFFFFF;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 32px;
    color: var(--accent);
    box-shadow: 0 4px 12px rgba(0,0,0,0.04);
    position: relative;
    z-index: 1;
  }

  .ag-card-title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 16px;
    letter-spacing: -0.01em;
    position: relative;
    z-index: 1;
    color: #0F172A;
  }

  .ag-card-body {
    font-size: 15px;
    color: var(--text-muted);
    line-height: 1.6;
    flex-grow: 1;
    position: relative;
    z-index: 1;
  }

  /* Convergence Pill */
  .ag-convergence-pill {
    background: var(--glass-bg);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border: 1px solid var(--glass-border);
    border-radius: 100px;
    padding: 24px 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    box-shadow: 0 12px 32px rgba(0,0,0,0.05);
  }

  @media (max-width: 900px) {
    .ag-convergence-pill {
      flex-direction: column;
      border-radius: 32px;
      padding: 32px;
      text-align: center;
    }
  }

  .ag-equation {
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 20px;
    font-weight: 500;
    color: #0F172A;
    white-space: nowrap;
  }

  .ag-plus {
    color: var(--accent);
    font-weight: 300;
  }

  .ag-conv-text {
    font-size: 16px;
    color: var(--text-muted);
    line-height: 1.5;
    text-align: left;
  }

  @media (max-width: 900px) {
    .ag-conv-text { text-align: center; }
  }

  /* Lists & Quotes */
  .ag-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .ag-list li {
    position: relative;
    padding-left: 24px;
    margin-bottom: 16px;
    font-size: 16px;
    color: var(--text-muted);
    line-height: 1.5;
  }

  .ag-list li::before {
    content: '→';
    position: absolute;
    left: 0;
    color: var(--accent);
    font-weight: 600;
  }

  .ag-quote {
    font-size: 24px;
    font-weight: 300;
    font-style: italic;
    color: #0F172A;
    line-height: 1.5;
    padding-left: 24px;
    border-left: 3px solid var(--accent);
    margin: 32px 0;
  }

  /* Image Placeholders */
  .ag-img-placeholder {
    width: 100%;
    background: rgba(255,255,255,0.4);
    border: 1px dashed rgba(15,23,42,0.2);
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-muted);
    font-family: monospace;
    font-size: 14px;
    margin-bottom: 24px;
    overflow: hidden;
    position: relative;
  }
  
  .ag-img-placeholder img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  /* Feature Rows for Final Product */
  .ag-feature-row {
    display: flex;
    align-items: center;
    gap: 64px;
    margin-bottom: 80px;
  }

  .ag-feature-row.reverse {
    flex-direction: row-reverse;
  }

  @media (max-width: 900px) {
    .ag-feature-row, .ag-feature-row.reverse {
      flex-direction: column;
      gap: 32px;
    }
  }

  .ag-feature-text {
    flex: 1;
  }

  .ag-feature-visual {
    flex: 1.2;
  }
`;

export default function AgroxProject() {
  return (
    <>
      <style>{CSS}</style>
      <div className="ag-page">
        {/* Background Blobs */}
        <div className="ag-page-bg"></div>

        {/* ── Back link ── */}
        <div className="relative z-20" style={{ padding: '14px 48px' }}>
          <Link href="/" style={{ fontSize: 12, color: 'rgba(100,116,139,0.7)', textDecoration: 'none', fontFamily: 'monospace', letterSpacing: '0.06em' }}>← Home</Link>
        </div>

        {/* ── HERO SECTION ── */}
        <section className="ag-hero ag-container">
          <h1 className="ag-hero-title">Agrox</h1>
          <p className="ag-hero-subtitle">Autonomous & Chemical-Free Pest Management</p>
          
          <div style={{ marginBottom: "64px" }}>
            <img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773793073/portfolio/projects/agrox/hero.jpg" alt="Agrox product render" style={{ width: "100%", borderRadius: "24px", display: "block" }} />
          </div>

          <div className="ag-meta-grid">
            <div>
              <div className="ag-meta-label">Team</div>
              <div className="ag-meta-value">Yuchen Zhang<br/>Yi He</div>
            </div>
            <div>
              <div className="ag-meta-label">Role</div>
              <div className="ag-meta-value">UX Design<br/>Hardware Concept</div>
            </div>
            <div>
              <div className="ag-meta-label">Timeline</div>
              <div className="ag-meta-value">Academic Project<br/>2025</div>
            </div>
            <div>
              <div className="ag-meta-label">Domain</div>
              <div className="ag-meta-value">AgriTech<br/>Robotics</div>
            </div>
          </div>
        </section>

        {/* ── 01 RESEARCH GOAL ── */}
        <section className="ag-section ag-section-border ag-container">
          <span className="ag-eyebrow">01 — Research</span>
          <div className="ag-grid-2-asym">
            <div>
              <h2 className="ag-title">Understanding the<br /><strong>core challenges.</strong></h2>
              <p className="ag-desc">
                We conducted field interviews with 5 small-scale organic farms — 4 at Forsyth Park Farmers Market and 1 in South Carolina — to understand how farmers actually detect and respond to pest problems day-to-day. We focused on four questions: their current pain points, how they judge crop conditions, what tools they use, and whether they&apos;d accept technological intervention.
              </p>
            </div>
            <div className="ag-glass-grid" style={{ gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: 0 }}>
              <div className="ag-glass-card ag-card-stat">
                <div className="ag-stat-num">4</div>
                <div className="ag-stat-label">Farms at Forsyth Park<br/>Farmers Market</div>
              </div>
              <div className="ag-glass-card ag-card-stat">
                <div className="ag-stat-num">1</div>
                <div className="ag-stat-label">Farm in<br/>South Carolina</div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "48px", display: "flex", flexDirection: "column", gap: "16px" }}>
            <h3 style={{ fontSize: "18px", fontWeight: 600, color: "#0F172A" }}>What farmers told us</h3>
            {[
              { quote: "Yeah. I mean, there's tons of risks, like pests. Sometimes we just… we're just picking bugs off by hand.", insight: "Manual removal is the default — not a choice, but a last resort." },
              { quote: "We spray organic stuff — neem oil, BT — but when the pest pressure is high, it's hard not to use something stronger.", insight: "Organic methods fail under pressure, putting certification at risk." },
              { quote: "Tend is super complicated. Too many features. It'd be nice if we could just choose the ones we need.", insight: "Existing software is built for scale, not for small farms with limited bandwidth." },
              { quote: "Give me the date, what crop it was, what pest we saw, and maybe which garden it happened in. That's all I need.", insight: "Farmers want minimal, structured data — not comprehensive dashboards." },
            ].map(({ quote, insight }, i) => (
              <div key={i} className="ag-glass-card" style={{ padding: "24px 32px", display: "flex", flexDirection: "column", gap: "12px" }}>
                <p style={{ fontSize: "16px", fontStyle: "italic", color: "#334155", lineHeight: 1.6 }}>&ldquo;{quote}&rdquo;</p>
                <p style={{ fontSize: "14px", color: "#0EA5E9", fontWeight: 500 }}>→ {insight}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 02 THE PROBLEM ── */}
        <section className="ag-section ag-section-border ag-container">
          <span className="ag-eyebrow">02 — The Problem</span>
          <h2 className="ag-title">The burden of<br /><strong>organic pest control.</strong></h2>

          <div className="ag-grid-2">
            <div>
              <p className="ag-desc" style={{ marginBottom: "24px" }}>
                Globally, pests destroy 20–40% of crops annually. For organic farms, the constraint is even sharper: they cannot use synthetic pesticides, so when pest pressure spikes, their only options are labor-intensive manual methods or accepting crop loss.
              </p>
              <p className="ag-desc">
                What surprised us was that the problem isn&apos;t just about killing pests — it&apos;s about <strong>knowing where they are</strong> before the damage is visible. By the time a farmer walks the field and spots an outbreak, entire rows are already unmarketable.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div className="ag-glass-card" style={{ padding: "28px 32px" }}>
                <h3 style={{ fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600, color: "#0EA5E9", marginBottom: "12px" }}>Insight 01</h3>
                <p style={{ fontSize: "16px", color: "#0F172A", lineHeight: 1.6 }}><strong>No systematic tracking.</strong> Pest identification relies on intuition. There&apos;s no consistent record of where outbreaks occur, making prevention nearly impossible.</p>
              </div>
              <div className="ag-glass-card" style={{ padding: "28px 32px" }}>
                <h3 style={{ fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600, color: "#F59E0B", marginBottom: "12px" }}>Insight 02</h3>
                <p style={{ fontSize: "16px", color: "#0F172A", lineHeight: 1.6 }}><strong>Organic methods break down at scale.</strong> Neem oil and BT work at low pressure, but farmers feel forced to choose between their certification and their crop.</p>
              </div>
              <div className="ag-glass-card" style={{ padding: "28px 32px" }}>
                <h3 style={{ fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600, color: "#EF4444", marginBottom: "12px" }}>Insight 03</h3>
                <p style={{ fontSize: "16px", color: "#0F172A", lineHeight: 1.6 }}><strong>Technology adoption fails at complexity.</strong> Tools like Tend are abandoned because the learning curve outweighs the benefit for small operations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 03 PERSONA & HMW ── */}
        <section className="ag-section ag-section-border ag-container">
          <span className="ag-eyebrow">03 — Target User</span>
          <h2 className="ag-title">Designing for the<br /><strong>everyday farmer.</strong></h2>
          
          <div className="ag-grid-2">
            <div>
              <div className="ag-quote">
                "I want something that just works. I don&apos;t have time to learn another complicated app."
              </div>
              <div style={{ marginTop: "40px", padding: "32px", background: "rgba(14, 165, 233, 0.05)", borderRadius: "24px", border: "1px solid rgba(14, 165, 233, 0.2)" }}>
                <h3 style={{ fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600, color: "#0EA5E9", marginBottom: "16px" }}>How Might We</h3>
                <p style={{ fontSize: "20px", color: "#0F172A", lineHeight: 1.5, fontWeight: 500 }}>
                  How might we help organic farmers monitor and control pests with minimal effort, while keeping the process eco-friendly and data-informed?
                </p>
              </div>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div className="ag-glass-card" style={{ padding: "24px 32px" }}>
                <h3 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "12px", color: "#0F172A" }}>Core Needs</h3>
                <ul className="ag-list" style={{ fontSize: "14px" }}>
                  <li>A simple visual system to monitor outbreaks without walking every field.</li>
                  <li>A non-chemical control method aligning with organic certification.</li>
                  <li>An affordable, zero-training solution.</li>
                  <li>A way to track effectiveness of pest control over time.</li>
                </ul>
              </div>
              <div className="ag-glass-card" style={{ padding: "24px 32px" }}>
                <h3 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "12px", color: "#0F172A" }}>Frustrations</h3>
                <ul className="ag-list" style={{ fontSize: "14px" }}>
                  <li>Current solutions are too expensive or too complicated.</li>
                  <li>Manual scouting is exhausting and unreliable, especially during rainy days.</li>
                  <li>Lack of data to understand where pests are spreading or recurring.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── 04 TECHNICAL EXPLORATION ── */}
        <section className="ag-section ag-section-border ag-container">
          <span className="ag-eyebrow">04 — Technical Exploration</span>
          <h2 className="ag-title">Six ideas before<br /><strong>one answer.</strong></h2>
          <p className="ag-desc">
            We didn&apos;t start with a robot. We began by surveying academic literature and existing technologies to find what was scientifically viable and organically compliant. This produced six distinct concepts — each grounded in a different intervention logic.
          </p>

          <div style={{ marginTop: "48px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px" }}>
            {[
              { name: "CrawlerVac", tag: "Selected", tagColor: "#10B981", desc: "Tracked robot chassis + vacuum suction. Can autonomously patrol fields and remove surface pests without chemicals. Validated by D-vac research from WSU and California Strawberry Commission.", selected: true },
              { name: "VibeTrap", tag: "Narrowed out", tagColor: "#94A3B8", desc: "60Hz vibration lures spotted lanternfly toward an electric trap. Effective for one specific pest, but too species-specific for general farm use.", selected: false },
              { name: "LycormaHunter", tag: "Narrowed out", tagColor: "#94A3B8", desc: "Robotic arm + AI recognition to physically strike individual pests on tree trunks. High precision, but impractical for open field crops at scale.", selected: false },
              { name: "SteamBerry", tag: "Merged into final", tagColor: "#F59E0B", desc: "Low-temperature steam targets strawberry mites with IoT control. Highly effective (4-hour treatment kills all mite stages), but crop-specific.", selected: false },
              { name: "SteamSoil", tag: "Selected", tagColor: "#10B981", desc: "High-temperature steam injected into soil kills underground eggs and nematodes. Backed by research showing complete sterilization without chemical residue.", selected: true },
              { name: "PestVision", tag: "Partially selected", tagColor: "#F59E0B", desc: "Dual-mode detection: image recognition + sound spectrum analysis for early outbreak warning. We implemented the visual layer; sound analysis remains a future direction.", selected: false },
            ].map(({ name, tag, tagColor, desc, selected }) => (
              <div key={name} className="ag-glass-card" style={{ padding: "24px", opacity: selected ? 1 : 0.7, border: selected ? "1px solid rgba(16,185,129,0.3)" : undefined }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                  <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#0F172A" }}>{name}</h3>
                  <span style={{ fontSize: "11px", fontWeight: 600, color: tagColor, background: `${tagColor}18`, padding: "3px 8px", borderRadius: "20px", whiteSpace: "nowrap" }}>{tag}</span>
                </div>
                <p style={{ fontSize: "14px", color: "#64748B", lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>

          <div className="ag-convergence-pill" style={{ marginTop: "48px" }}>
            <div className="ag-equation">
              <span>CrawlerVac</span>
              <span className="ag-plus">+</span>
              <span>SteamSoil</span>
              <span className="ag-plus">+</span>
              <span>PestVision</span>
            </div>
            <div className="ag-conv-text">
              The three selected concepts converge into one autonomous system: the robot <strong>identifies</strong> pests visually, <strong>vacuums</strong> surface adults, and <strong>sterilizes</strong> soil-level eggs — all without chemicals.
            </div>
          </div>
        </section>

        {/* ── 05 PRODUCT FEATURES ── */}
        <section className="ag-section ag-section-border ag-container">
          <span className="ag-eyebrow">05 — The Product</span>
          <h2 className="ag-title">Hardware & Interface.</h2>
          <p className="ag-desc">
            Translating the technical requirements into a robust physical robot and an intuitive digital dashboard for the farmers.
          </p>

          <div style={{ marginTop: "64px" }}>
            
            {/* Feature 1: AI Recognition */}
            <div className="ag-feature-row">
              <div className="ag-feature-text">
                <h3 style={{ fontSize: "28px", fontWeight: 600, marginBottom: "16px", color: "#0F172A" }}>A.I. Visual Pest Recognition</h3>
                <p style={{ fontSize: "16px", color: "var(--text-muted)", lineHeight: 1.6 }}>
                  The robot&apos;s onboard cameras scan crops in real-time. The AI model identifies pest types and severity, logging the data to the farmer&apos;s dashboard without requiring manual field walks.
                </p>
              </div>
              <div className="ag-feature-visual">
                <img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773790504/portfolio/projects/agrox/hifi-field.png" alt="AI Visual Pest Recognition" style={{ width: "100%", borderRadius: "16px", display: "block" }} />
              </div>
            </div>

            {/* Feature 2: Autonomous Management */}
            <div className="ag-feature-row reverse">
              <div className="ag-feature-text">
                <h3 style={{ fontSize: "28px", fontWeight: 600, marginBottom: "16px", color: "#0F172A" }}>Autonomous Pest Management</h3>
                <p style={{ fontSize: "16px", color: "var(--text-muted)", lineHeight: 1.6 }}>
                  Once deployed, the robot navigates the farm autonomously. It uses a combination of bug vacuuming for adult insects and steam sterilization for soil-level eggs, ensuring a 100% chemical-free process.
                </p>
              </div>
              <div className="ag-feature-visual">
                <img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773790506/portfolio/projects/agrox/hifi-vacuum.png" alt="Autonomous Pest Management" style={{ width: "100%", borderRadius: "16px", display: "block" }} />
              </div>
            </div>

            {/* Feature 3: Heatmap */}
            <div className="ag-feature-row">
              <div className="ag-feature-text">
                <h3 style={{ fontSize: "28px", fontWeight: 600, marginBottom: "16px", color: "#0F172A" }}>Pest Heatmap Dashboard</h3>
                <p style={{ fontSize: "16px", color: "var(--text-muted)", lineHeight: 1.6 }}>
                  Data collected by the robot is visualized on a simple mobile and web app. Farmers can instantly see which areas of the farm have high pest pressure and track the effectiveness of the robot&apos;s interventions over time.
                </p>
              </div>
              <div className="ag-feature-visual">
                <img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773790505/portfolio/projects/agrox/hifi-info.png" alt="Pest Heatmap Dashboard" style={{ width: "100%", borderRadius: "16px", display: "block" }} />
              </div>
            </div>

          </div>
        </section>

        {/* ── 06 DESIGN PROCESS (Gallery) ── */}
        <section className="ag-section ag-section-border ag-container">
          <span className="ag-eyebrow">06 — Design Process</span>
          <h2 className="ag-title">From sketch to reality.</h2>
          
          <div style={{ marginTop: "48px", display: "flex", flexDirection: "column", gap: "48px" }}>
            <div>
              <h4 style={{ fontSize: "16px", fontWeight: 600, color: "#0F172A", marginBottom: "16px" }}>01. Sketch</h4>
              <div style={{ display: "flex", gap: "12px" }}>
                <img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773790734/portfolio/projects/agrox/sketch-1.png" alt="Agrox sketch 1" style={{ width: "50%", borderRadius: "12px", display: "block", border: "1.5px dashed #94A3B8" }} />
                <img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773790735/portfolio/projects/agrox/sketch-2.png" alt="Agrox sketch 2" style={{ width: "50%", borderRadius: "12px", display: "block", border: "1.5px dashed #94A3B8" }} />
              </div>
            </div>
            <div>
              <h4 style={{ fontSize: "16px", fontWeight: 600, color: "#0F172A", marginBottom: "16px" }}>02. Hifi</h4>
              <img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773791068/portfolio/projects/agrox/hifi-overview.png" alt="Agrox hifi overview" style={{ width: "100%", borderRadius: "12px", display: "block" }} />
            </div>
            <div>
              <h4 style={{ fontSize: "16px", fontWeight: 600, color: "#0F172A", marginBottom: "16px" }}>03. Model</h4>
              <img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773791363/portfolio/projects/agrox/model.png" alt="Agrox physical model" style={{ width: "100%", borderRadius: "12px", display: "block" }} />
            </div>
          </div>
        </section>

        {/* ── 07 REFLECTION ── */}
        <section className="ag-section ag-section-border ag-container">
          <span className="ag-eyebrow">07 — Reflection</span>
          <h2 className="ag-title">What we learned.<br /><strong>What remains open.</strong></h2>

          <div className="ag-grid-2" style={{ marginTop: "48px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div className="ag-glass-card" style={{ padding: "28px 32px" }}>
                <h3 style={{ fontSize: "16px", fontWeight: 600, color: "#0F172A", marginBottom: "12px" }}>Hardware constrains UI design</h3>
                <p style={{ fontSize: "15px", color: "#64748B", lineHeight: 1.7 }}>The vacuum and steam modules can&apos;t operate simultaneously — this physical constraint directly shaped how we designed the device status UI. Modes needed to be explicit and mutually exclusive, not hidden in settings.</p>
              </div>
              <div className="ag-glass-card" style={{ padding: "28px 32px" }}>
                <h3 style={{ fontSize: "16px", fontWeight: 600, color: "#0F172A", marginBottom: "12px" }}>Tablet over phone — a research-driven call</h3>
                <p style={{ fontSize: "15px", color: "#64748B", lineHeight: 1.7 }}>We initially prototyped a mobile interface. Field context changed our minds: farmers in muddy gloves need larger targets, better readability in sunlight, and a device they can prop up hands-free. iPad became the primary platform.</p>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div className="ag-glass-card" style={{ padding: "28px 32px", border: "1px solid rgba(239,68,68,0.2)" }}>
                <h3 style={{ fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600, color: "#EF4444", marginBottom: "12px" }}>Still unresolved</h3>
                <p style={{ fontSize: "15px", color: "#64748B", lineHeight: 1.7 }}>AI recognition accuracy drops in low light and dense foliage — conditions common in real farms. Sound spectrum analysis (from PestVision) could supplement visual detection, but we didn&apos;t have time to validate the model. This is the most significant open question for a next iteration.</p>
              </div>
              <div className="ag-glass-card" style={{ padding: "28px 32px", border: "1px solid rgba(239,68,68,0.2)" }}>
                <h3 style={{ fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600, color: "#EF4444", marginBottom: "12px" }}>User adoption is untested</h3>
                <p style={{ fontSize: "15px", color: "#64748B", lineHeight: 1.7 }}>We designed for low technical literacy, but never ran usability tests with actual farmers. The gap between &quot;intuitive in research&quot; and &quot;usable in a field&quot; is real — and we know it.</p>
              </div>
            </div>
          </div>
        </section>

      </div>
      <NextProject href="/projects/nirvana" title="Nirvana" role="Team Leader" theme="light" />
    </>
  );
}

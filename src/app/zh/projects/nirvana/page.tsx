"use client";

import Link from "next/link";

import NextProject from "../../../components/NextProject";

// ── Image asset constants ──────────────────────────────────────────────────────
const imgIphone13MockupPm032 = "https://res.cloudinary.com/dj13he2xu/image/upload/v1773758050/portfolio/projects/nirvana/assets/c4a2c290c1426f7d36eb0348a3784b5ee4f110c6.png";
const imgPortraitManLaughing1 = "https://res.cloudinary.com/dj13he2xu/image/upload/v1773758089/portfolio/projects/nirvana/assets/ec3d268fd7bd600042056bf1a15a6f6a95a292f5.jpg";
const imgPortraitModernMan1 = "https://res.cloudinary.com/dj13he2xu/image/upload/v1773758070/portfolio/projects/nirvana/assets/da452b31d659e523d727e50399ce3120de623225.jpg";
const imgExpressiveWomanPosingOutdoor1 = "https://res.cloudinary.com/dj13he2xu/image/upload/v1773758084/portfolio/projects/nirvana/assets/e2e62a763aa3abeb680a7ab00f95e926c120f242.jpg";
const imgWorldfaceSpanishManWhiteBackground1 = "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757949/portfolio/projects/nirvana/assets/66c97cef08f1e823e2c50152a6b95f0adb62740a.jpg";
const imgYellowSportCar = "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757967/portfolio/projects/nirvana/assets/7aef6df31a85f1cfa8f525bf47d0073a6c386015.jpg";
const imgSilverCar = "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757946/portfolio/projects/nirvana/assets/65d8e96a7f5c94a8b9d9c695af1e817005f8602b.jpg";
const imgGroup657 = "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757923/portfolio/projects/nirvana/assets/4f330399ebd067ddae8dcf6dd05ca508218464f9.svg";
const imgGroup659 = "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757936/portfolio/projects/nirvana/assets/5804fda5c77639851fddabb551fb49544f3a6503.svg";
const imgGroup661 = "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757879/portfolio/projects/nirvana/assets/0be58a62524079bf55f8e0ab34e2fe2b4291fa9c.svg";
const imgGroup660 = "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757971/portfolio/projects/nirvana/assets/7f08e23cf098f9cafc03572036a7da9c7e572c94.svg";
const imgGroup662 = "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757875/portfolio/projects/nirvana/assets/06d80642d673eb64143a58203c214cbcd616645c.svg";
const imgGroup658 = "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757928/portfolio/projects/nirvana/assets/505dd6424aa3dad0e9f90211c81e5a5b5890df16.svg";

// suppress "unused" lint
void imgWorldfaceSpanishManWhiteBackground1;

// ── CSS ───────────────────────────────────────────────────────────────────────
const CSS = `
  /* Phase colour tokens */
  [data-phase="research"]  { --phase-color: #06b6d4; --phase-rgb: 6,182,212; }
  [data-phase="discovery"] { --phase-color: #a78bfa; --phase-rgb: 167,139,250; }
  [data-phase="explore"]   { --phase-color: #ea7e2b; --phase-rgb: 234,126,43; }
  [data-phase="design"]    { --phase-color: #22c55e; --phase-rgb: 34,197,94; }

  /* Base */
  .nv-page { font-family: var(--font-body, Inter, sans-serif); font-size: 16px; background: #222222; color: #d1d5db; line-height: 1.7; }
  .nv-page *, .nv-page *::before, .nv-page *::after { box-sizing: border-box; margin: 0; padding: 0; }
  .nv-page h1, .nv-page h2, .nv-page h3, .nv-page h4 { text-wrap: balance; }

  /* Skip link */
  .nv-skip { position: absolute; top: -100%; left: 16px; background: #06b6d4; color: #fff; padding: 8px 16px; font-size: 14px; font-weight: 600; z-index: 300; text-decoration: none; border-radius: 4px; }
  .nv-skip:focus { top: 8px; outline: 2px solid #fff; outline-offset: 2px; }

  /* Sticky subnav */
  .nv-subnav { position: sticky; top: 0; z-index: 100; background: rgba(34,34,34,0.88); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); border-bottom: 1px solid #333; padding: 0 48px; height: 48px; display: flex; align-items: center; justify-content: space-between; }
  .nv-subnav-brand { font-size: 15px; font-style: italic; color: #fff; font-weight: 500; }
  .nv-subnav-links { display: flex; gap: 28px; }
  .nv-subnav-links a { font-size: 13px; color: #9ca3af; text-decoration: none; transition: color 0.15s; }
  .nv-subnav-links a:hover { color: #fff; }
  .nv-subnav-links a:focus-visible { outline: 2px solid #06b6d4; outline-offset: 3px; color: #fff; }
  @media (max-width: 768px) { .nv-subnav { padding: 0 20px; } .nv-subnav-links { gap: 16px; } .nv-subnav-links a { font-size: 12px; } }

  /* Layout */
  .nv-container { max-width: 1100px; margin: 0 auto; padding: 0 48px; }
  @media (max-width: 768px) { .nv-container { padding: 0 24px; } }

  /* Section */
  .nv-section { padding: 80px 0; border-top: 1px solid #333; scroll-margin-top: 52px; }
  .nv-section-first { border-top: none; padding-top: 64px; }

  /* Phase header */
  .nv-phase-header { margin-bottom: 60px; }
  .nv-phase-label { font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--phase-color); font-weight: 600; margin-bottom: 12px; }
  .nv-phase-title { font-family: var(--font-serif, 'DM Serif Display', serif); font-size: clamp(48px, 6vw, 80px); font-weight: 400; color: var(--phase-color); line-height: 1; margin-bottom: 20px; }
  .nv-phase-desc { font-size: 17px; color: #9ca3af; max-width: 640px; line-height: 1.65; }

  /* Sub-section label */
  .nv-sub { margin-bottom: 36px; }
  .nv-sub-num { display: block; font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--phase-color); font-weight: 600; margin-bottom: 8px; }
  .nv-sub h3 { font-size: 24px; font-weight: 700; color: #fff; text-wrap: balance; }
  .nv-sub-body { margin-top: 16px; color: #d1d5db; max-width: 680px; }

  /* Section spacer */
  .nv-block { margin-bottom: 64px; }
  .nv-block:last-child { margin-bottom: 0; }

  /* Grids */
  .nv-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: start; }
  .nv-grid-2-center { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }
  .nv-grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 24px; }
  @media (max-width: 768px) {
    .nv-grid-2 { grid-template-columns: 1fr; gap: 28px; }
    .nv-grid-2-center { grid-template-columns: 1fr; gap: 28px; }
    .nv-grid-3 { grid-template-columns: 1fr; }
  }

  /* Card */
  .nv-card { background: #353535; border-radius: 12px; padding: 24px; }

  /* Callout */
  .nv-callout { border-radius: 12px; border: 1px solid rgba(var(--phase-rgb), 0.3); background: rgba(var(--phase-rgb), 0.08); padding: 28px 40px; }
  .nv-callout-title { font-size: 13px; letter-spacing: 0.12em; text-transform: uppercase; font-weight: 700; color: var(--phase-color); margin-bottom: 12px; }
  .nv-callout p { color: #d1d5db; line-height: 1.7; }
  .nv-callout strong { color: #fff; }

  /* Horizontal bar chart */
  .nv-bar-chart { display: flex; flex-direction: column; gap: 10px; }
  .nv-bar-row { display: grid; grid-template-columns: 160px 1fr 44px; align-items: center; gap: 12px; font-size: 13px; }
  .nv-bar-label { color: #d1d5db; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .nv-bar-track { height: 8px; background: #3a3a3a; border-radius: 4px; overflow: hidden; }
  .nv-bar-fill { height: 100%; border-radius: 4px; background: var(--phase-color); }
  .nv-bar-pct { font-size: 12px; color: #9ca3af; text-align: right; }
  @media (max-width: 600px) { .nv-bar-row { grid-template-columns: 120px 1fr 36px; font-size: 12px; } }

  /* Market stats */
  .nv-stats-row { display: flex; flex-wrap: wrap; gap: 0; margin: 32px 0; }
  .nv-stat { flex: 1; min-width: 140px; padding: 20px 24px; border: 1px solid #333; }
  .nv-stat + .nv-stat { border-left: none; }
  .nv-stat-value { font-size: 22px; font-weight: 700; color: var(--phase-color); display: block; margin-bottom: 4px; }
  .nv-stat-label { font-size: 12px; color: #9ca3af; }

  /* Workflow steps */
  .nv-workflow-step { list-style: none; display: flex; flex-direction: column; gap: 0; }
  .nv-workflow-step li { display: flex; align-items: center; gap: 14px; padding: 12px 0; border-bottom: 1px solid #333; font-size: 14px; color: #d1d5db; }
  .nv-workflow-step li:last-child { border-bottom: none; }
  .nv-step-num { width: 28px; height: 28px; border-radius: 50%; background: rgba(var(--phase-rgb), 0.15); border: 1px solid rgba(var(--phase-rgb), 0.4); color: var(--phase-color); font-size: 12px; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }

  /* Interview cards */
  .nv-interview-list { display: flex; flex-direction: column; }
  .nv-interview { padding: 24px 0; border-bottom: 1px solid #333; }
  .nv-interview:first-child { padding-top: 0; }
  .nv-interview:last-child { border-bottom: none; }
  .nv-interview-meta { display: flex; align-items: center; gap: 12px; margin-bottom: 10px; }
  .nv-interview-avatar { width: 52px; height: 52px; border-radius: 50%; object-fit: cover; object-position: center top; flex-shrink: 0; }
  .nv-interview-name { font-size: 15px; font-weight: 700; color: #fff; }
  .nv-interview-car { font-size: 13px; color: #9ca3af; }
  .nv-interview-quote { font-size: 15px; color: #d1d5db; font-style: italic; line-height: 1.65; }
  .nv-interview-quote .hl { color: var(--phase-color); font-style: normal; font-weight: 500; }

  /* Persona cards */
  .nv-persona { background: #353535; border-radius: 12px; overflow: hidden; }
  .nv-persona-header { background: #2a2a2a; padding: 20px; display: flex; align-items: center; gap: 16px; border-bottom: 2px solid var(--phase-color); }
  .nv-persona-avatar { width: 60px; height: 60px; border-radius: 50%; object-fit: cover; object-position: center top; flex-shrink: 0; }
  .nv-persona-name { font-size: 16px; font-weight: 700; color: #fff; }
  .nv-persona-role { font-size: 12px; color: var(--phase-color); font-weight: 600; margin-top: 2px; }
  .nv-persona-body { padding: 20px; }
  .nv-persona-row { margin-bottom: 14px; }
  .nv-persona-row:last-child { margin-bottom: 0; }
  .nv-persona-row-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.12em; color: #9ca3af; font-weight: 600; margin-bottom: 4px; }
  .nv-persona-row-text { font-size: 13px; color: #d1d5db; line-height: 1.55; }

  /* Pain items */
  .nv-pain-list { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; align-items: stretch; }
  .nv-pain-item { display: flex; align-items: center; gap: 16px; background: #353535; border-radius: 12px; padding: 20px 18px; min-height: 88px; height: 100%; box-sizing: border-box; }
  .nv-pain-icon { width: 44px; height: 44px; flex-shrink: 0; }
  .nv-pain-text { font-size: 14px; color: #d1d5db; line-height: 1.5; padding-top: 2px; }
  .nv-pain-text strong { display: block; color: #fff; font-size: 15px; margin-bottom: 4px; }
  @media (max-width: 600px) { .nv-pain-list { grid-template-columns: 1fr; } }

  /* Journey map SVG */
  .nv-journey-wrap { width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; border-radius: 12px; background: #2a2a2a; padding: 8px 0 0; }

  /* Concept / brainstorm tags */
  .nv-tag-group { display: flex; flex-direction: column; gap: 8px; }
  .nv-tag-group-label { font-size: 13px; font-weight: 700; color: #fff; margin-bottom: 4px; }
  .nv-tags { display: flex; flex-wrap: wrap; gap: 8px; }
  .nv-tag { display: inline-block; padding: 6px 14px; border-radius: 20px; font-size: 13px; border: 1px solid rgba(var(--phase-rgb), 0.4); color: var(--phase-color); background: rgba(var(--phase-rgb), 0.08); }

  /* System actors */
  .nv-actors { display: flex; flex-wrap: wrap; gap: 10px; margin: 20px 0; }
  .nv-actor { padding: 8px 18px; border-radius: 20px; font-size: 14px; font-weight: 600; background: rgba(var(--phase-rgb), 0.1); border: 1px solid rgba(var(--phase-rgb), 0.35); color: var(--phase-color); }
  .nv-actor-arrow { color: #555; font-size: 18px; align-self: center; }

  /* Function cards 2x2 */
  .nv-fn-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
  .nv-fn-num { font-size: 36px; font-weight: 800; color: var(--phase-color); line-height: 1; margin-bottom: 8px; opacity: 0.7; }
  .nv-fn-title { font-size: 16px; font-weight: 700; color: #fff; margin-bottom: 8px; }
  .nv-fn-desc { font-size: 14px; color: #9ca3af; line-height: 1.55; }
  @media (max-width: 600px) { .nv-fn-grid { grid-template-columns: 1fr; } }

  /* Hi-fi screen grid */
  .nv-screen-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 12px; margin-top: 24px; }
  .nv-screen-grid img { width: 100%; aspect-ratio: 390/844; border-radius: 8px; object-fit: cover; display: block; background: #2a2a2a; }

  /* Blueprint table */
  .nv-blueprint { width: 100%; border-collapse: collapse; font-size: 13px; margin-top: 24px; }
  .nv-blueprint th { background: #2a2a2a; color: var(--phase-color); text-align: left; padding: 10px 14px; border-bottom: 2px solid var(--phase-color); font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; white-space: nowrap; }
  .nv-blueprint td { padding: 10px 14px; border-bottom: 1px solid #333; color: #d1d5db; vertical-align: top; }
  .nv-blueprint tr:last-child td { border-bottom: none; }
  .nv-blueprint tr:nth-child(even) td { background: rgba(255,255,255,0.02); }
  .nv-blueprint-wrap { overflow-x: auto; border-radius: 12px; border: 1px solid #333; }

  /* Storyboard grid */
  .nv-story-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 24px; }
  .nv-story-item { background: #353535; border-radius: 12px; padding: 20px; text-align: center; }
  .nv-story-num { font-size: 24px; font-weight: 800; color: var(--phase-color); margin-bottom: 8px; }
  .nv-story-text { font-size: 14px; color: #d1d5db; line-height: 1.5; }
  @media (max-width: 600px) { .nv-story-grid { grid-template-columns: 1fr 1fr; } }

  /* Hero */
  .nv-hero { padding: 72px 0 64px; }
  .nv-hero-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px; }
  .nv-hero-tag { font-size: 12px; font-weight: 600; padding: 5px 14px; border-radius: 20px; background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.15); color: #d1d5db; }
  .nv-hero-subtitle { font-size: 18px; font-style: italic; color: #9ac1f0; margin-bottom: 16px; line-height: 1.5; }
  .nv-hero-title { font-size: clamp(40px, 6vw, 64px); font-weight: 800; color: #fff; line-height: 1.05; margin-bottom: 28px; text-wrap: balance; }
  .nv-hero-body { font-size: 17px; color: #9ca3af; max-width: 700px; line-height: 1.7; }
  .nv-hero-mockup { width: 100%; border-radius: 12px; margin-top: 40px; display: block; object-fit: contain; }

  /* Image helpers */
  .nv-img-fill { width: 100%; border-radius: 12px; display: block; height: 220px; object-fit: cover; }
  .nv-img-stack { display: flex; flex-direction: column; gap: 16px; }

  /* Chart caption */
  .nv-caption { font-size: 12px; color: #6b7280; margin-top: 12px; font-style: italic; }

  /* Section divider spacing */
  .nv-mt-8 { margin-top: 8px; }
  .nv-mt-16 { margin-top: 16px; }
  .nv-mt-24 { margin-top: 24px; }
  .nv-mt-32 { margin-top: 32px; }
  .nv-mt-40 { margin-top: 40px; }
  .nv-mt-48 { margin-top: 48px; }
  .nv-mb-8  { margin-bottom: 8px; }
  .nv-mb-16 { margin-bottom: 16px; }
  .nv-mb-24 { margin-bottom: 24px; }
  .nv-mb-32 { margin-bottom: 32px; }

  /* Responsive phase title */
  @media (max-width: 768px) { .nv-phase-title { font-size: 48px; } }
`;

// ── Bar chart helper ──────────────────────────────────────────────────────────
function BarChart({ rows }: { rows: { label: string; pct: number }[] }) {
  return (
    <div className="nv-bar-chart">
      {rows.map((r) => (
        <div className="nv-bar-row" key={r.label}>
          <span className="nv-bar-label">{r.label}</span>
          <div className="nv-bar-track">
            <div className="nv-bar-fill" style={{ width: `${r.pct}%` }} />
          </div>
          <span className="nv-bar-pct">{r.pct}%</span>
        </div>
      ))}
    </div>
  );
}

// ── Page component ────────────────────────────────────────────────────────────
export default function NirvanaPageZh() {
  return (
    <div className="nv-page">
      <style>{CSS}</style>

      <a href="#research" className="nv-skip">跳过至主要内容</a>

      {/* ── Back link ── */}
      <div className="relative z-20" style={{ padding: "14px 48px" }}>
        <Link href="/zh" style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", textDecoration: "none", fontFamily: "monospace", letterSpacing: "0.06em" }}>← 首页</Link>
      </div>

      {/* ── Sticky Subnav ── */}
      <nav className="nv-subnav" aria-label="案例研究章节">
        <span className="nv-subnav-brand">&lsquo;Nirvana&rsquo;</span>
        <div className="nv-subnav-links">
          <a href="#research">研究</a>
          <a href="#discovery">发现</a>
          <a href="#explore">探索</a>
          <a href="#design">设计</a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="nv-hero nv-section-first">
        <div className="nv-container">
          <div className="nv-hero-tags">
            {["独立项目", "服务设计", "交互设计", "3D 可视化"].map((t) => (
              <span className="nv-hero-tag" key={t}>{t}</span>
            ))}
          </div>
          <p className="nv-hero-subtitle">为汽车改装旅程设计更可预期的体验</p>
          <h1 className="nv-hero-title">&lsquo;Nirvana&rsquo; Project</h1>
          <p className="nv-hero-body">
            汽车爱好者在规划改装时往往依赖碎片化且不可靠的信息，导致他们难以预判效果、选择合适零件、与店家沟通，以及控制预算。VroomVision 是一个概念平台，帮助用户在动手改装之前预览效果、制定清晰的项目计划，并以更透明的方式完成整个服务流程。
          </p>
          <img
            src={imgIphone13MockupPm032}
            alt="Nirvana VroomVision 应用展示于 iPhone 模型上"
            className="nv-hero-mockup"
          />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          PHASE 01 — RESEARCH
      ══════════════════════════════════════════════════════════════ */}
      <section id="research" data-phase="research" className="nv-section">
        <div className="nv-container">

          <header className="nv-phase-header">
            <p className="nv-phase-label">阶段 01</p>
            <h2 className="nv-phase-title">Research</h2>
            <p className="nv-phase-desc">了解行业全貌——市场数据、实地观察，以及与汽车改装爱好者的深度访谈。</p>
          </header>

          {/* 01 — Background */}
          <div className="nv-block">
            <div className="nv-sub">
              <span className="nv-sub-num">01 — 背景</span>
              <h3>从个人热情到设计问题</h3>
            </div>
            <div className="nv-grid-2-center">
              <div>
                <p className="nv-sub-body">
                  从小看《头文字 D》长大，后来在美国亲自改装了自己的车，切身体会到爱好者面临的种种困境——信息碎片化、建议不可靠、结果难以预期。这段亲身经历成为整个项目的起点。
                </p>
              </div>
              <div className="nv-img-stack">
                <img src={imgYellowSportCar} alt="黄色跑车行驶在公路上" className="nv-img-fill" />
                <img src={imgSilverCar} alt="银色 Mini Cooper 在阳光下" className="nv-img-fill" />
              </div>
            </div>
          </div>

          {/* 02 — Market Research */}
          <div className="nv-block">
            <div className="nv-sub">
              <span className="nv-sub-num">02 — 市场调研</span>
              <h3>市场持续增长，渠道高度分散</h3>
            </div>
            <div className="nv-stats-row">
              <div className="nv-stat">
                <span className="nv-stat-value">$52M → $68M</span>
                <span className="nv-stat-label">市场规模（美国，2021–2029）</span>
              </div>
              <div className="nv-stat">
                <span className="nv-stat-value">CAGR 3.45%</span>
                <span className="nv-stat-label">年均复合增长率</span>
              </div>
              <div className="nv-stat">
                <span className="nv-stat-value">55%</span>
                <span className="nv-stat-label">北美占全球份额</span>
              </div>
            </div>
            <p className="nv-sub-body nv-mb-16">爱好者获取灵感的渠道</p>
            <BarChart rows={[
              { label: "互联网",      pct: 32 },
              { label: "线下交流",    pct: 28 },
              { label: "社交媒体",    pct: 17 },
              { label: "车展",        pct: 15 },
              { label: "改装店",      pct: 14 },
              { label: "经销商",      pct: 13 },
              { label: "街头偶遇",    pct: 11 },
              { label: "电影",        pct: 10 },
            ]} />
          </div>

          {/* 03 — Questionnaire */}
          <div className="nv-block">
            <div className="nv-sub">
              <span className="nv-sub-num">03 — 问卷调查（n=167）</span>
              <h3>车主最常改装的部位</h3>
            </div>
            <BarChart rows={[
              { label: "轮毂 / 轮胎",    pct: 49 },
              { label: "车身外观",        pct: 42 },
              { label: "内饰",            pct: 36 },
              { label: "灯光",            pct: 33 },
              { label: "发动机 / 电气",   pct: 29 },
              { label: "悬挂 / 制动",     pct: 27 },
              { label: "进气 / 排气",     pct: 22 },
              { label: "发动机内部",      pct: 19 },
              { label: "外部配件",        pct: 18 },
              { label: "传动系统",        pct: 15 },
            ]} />
            <p className="nv-caption">167 名参与者 · 在线问卷 · 以北美为主</p>
          </div>

          {/* 04 — Field Research */}
          <div className="nv-block">
            <div className="nv-sub">
              <span className="nv-sub-num">04 — 田野调研</span>
              <h3>走访 All Star Auto 改装店</h3>
            </div>
            <p style={{ color: "#d1d5db", marginBottom: 24, maxWidth: 640 }}>
              我在特拉华州纽瓦克市的一家改装店进行了实地观察，完整跟踪了从咨询、规划到施工、交车的全流程。
            </p>
            <ol className="nv-workflow-step">
              {[
                "初步咨询与规划",
                "选择零件与配件",
                "报价与确认协议",
                "车辆初步检查",
                "改装施工",
                "质量控制与测试",
                "最终检验与审批",
                "交车",
              ].map((step, i) => (
                <li key={step}>
                  <span className="nv-step-num">{String(i + 1).padStart(2, "0")}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          {/* 05 — Interview */}
          <div className="nv-block">
            <div className="nv-sub">
              <span className="nv-sub-num">05 — 用户访谈</span>
              <h3>4 位爱好者，4 种视角</h3>
            </div>
            <div className="nv-interview-list">

              <div className="nv-interview">
                <div className="nv-interview-meta">
                  <img src={imgPortraitManLaughing1} alt="Alex 的照片" className="nv-interview-avatar" />
                  <div>
                    <div className="nv-interview-name">Alex</div>
                    <div className="nv-interview-car">1993 Nissan GTR</div>
                  </div>
                </div>
                <p className="nv-interview-quote">
                  &ldquo;从小就接触汽车，到现在已经 22 年了……
                  <span className="hl">我越来越想让更多人了解改装车和汽车文化，把自己的知识和想法分享出去。</span>
                  &rdquo;
                </p>
              </div>

              <div className="nv-interview">
                <div className="nv-interview-meta">
                  <img src={imgPortraitModernMan1} alt="Mike 的照片" className="nv-interview-avatar" />
                  <div>
                    <div className="nv-interview-name">Mike</div>
                    <div className="nv-interview-car">2016 BMW M5</div>
                  </div>
                </div>
                <p className="nv-interview-quote">
                  &ldquo;汽车的加速感和发动机的轰鸣让我肾上腺素飙升……
                  <span className="hl">亲身感受赛车的刺激与极速。</span>
                  &rdquo;
                </p>
              </div>

              <div className="nv-interview">
                <div className="nv-interview-meta">
                  <img src={imgExpressiveWomanPosingOutdoor1} alt="Marcos 的照片" className="nv-interview-avatar" />
                  <div>
                    <div className="nv-interview-name">Marcos</div>
                    <div className="nv-interview-car">1996 Mazda RX7</div>
                  </div>
                </div>
                <p className="nv-interview-quote">
                  &ldquo;通过观看 GT 和 WRC 等知名赛事……
                  <span className="hl">我也深刻感受到了汽车文化的发展脉络，以及车迷之间的情感共鸣。</span>
                  &rdquo;
                </p>
              </div>

              <div className="nv-interview">
                <div className="nv-interview-meta">
                  <img src={imgWorldfaceSpanishManWhiteBackground1} alt="Sergio 的照片" className="nv-interview-avatar" />
                  <div>
                    <div className="nv-interview-name">Sergio</div>
                    <div className="nv-interview-car">2021 Dodge Challenger Hellcat</div>
                  </div>
                </div>
                <p className="nv-interview-quote">
                  &ldquo;第一次接触汽车是通过《速度与激情》……
                  <span className="hl">我需要更多渠道和资源，来更深入地了解汽车和汽车文化。</span>
                  &rdquo;
                </p>
              </div>

            </div>
          </div>

          {/* Research Insight callout */}
          <div className="nv-callout">
            <p className="nv-callout-title">研究洞察</p>
            <p>汽车改装的信息渠道普遍缺乏可信度和全面性。无论经验深浅，爱好者都在与碎片化知识、流程不透明和结果难以预测等问题作斗争。</p>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          PHASE 02 — DISCOVERY
      ══════════════════════════════════════════════════════════════ */}
      <section id="discovery" data-phase="discovery" className="nv-section">
        <div className="nv-container">

          <header className="nv-phase-header">
            <p className="nv-phase-label">阶段 02</p>
            <h2 className="nv-phase-title">Discovery</h2>
            <p className="nv-phase-desc">将所有研究提炼成清晰图景——绘制用户旅程地图、定义用户原型，并梳理出核心待解问题。</p>
          </header>

          {/* 05 — User Journey Map */}
          <div className="nv-block">
            <div className="nv-sub">
              <span className="nv-sub-num">05 — 用户旅程地图</span>
              <h3>绘制情绪过山车</h3>
            </div>
            <div className="nv-journey-wrap">
              <svg
                width="900"
                height="420"
                viewBox="0 0 900 420"
                style={{ display: "block", width: "100%" }}
                role="img"
                aria-label="用户旅程地图，展示汽车改装体验的 5 个阶段。情绪曲线从好奇开始，在咨询阶段跌至困惑，在规划阶段回升至兴奋，随后在改装和测试阶段经历复杂情绪。"
              >
                <rect width="900" height="420" fill="#2a2a2a" rx="12" />
                {[180, 360, 540, 720].map((x) => (
                  <line key={x} x1={x} y1={40} x2={x} y2={380} stroke="#333" strokeWidth="1" strokeDasharray="4 4" />
                ))}
                {[
                  { x: 90, label: "动机" },
                  { x: 270, label: "咨询" },
                  { x: 450, label: "制定计划" },
                  { x: 630, label: "改装施工" },
                  { x: 810, label: "测试验收" },
                ].map(({ x, label }) => (
                  <text key={label} x={x} y={28} textAnchor="middle" fill="#a78bfa" fontSize="12" fontWeight="700" letterSpacing="0.08em">
                    {label}
                  </text>
                ))}
                {[
                  { x: 90,  text: "寻找改装店" },
                  { x: 270, text: "了解流程与费用" },
                  { x: 450, text: "选定零件并确认方案" },
                  { x: 630, text: "交车并跟踪进度" },
                  { x: 810, text: "测试与提车" },
                ].map(({ x, text }) => (
                  <text key={text} x={x} y={48} textAnchor="middle" fill="#6b7280" fontSize="10">
                    {text}
                  </text>
                ))}
                <path
                  d="M 90,160 C 150,160 200,310 250,310 C 310,310 380,80 450,80 C 520,80 590,200 650,200 C 720,200 770,120 820,120 C 840,120 855,200 860,260"
                  fill="none"
                  stroke="#a78bfa"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                {[
                  { cx: 90,  cy: 160, label: "好奇 / 向往",      dy: -14 },
                  { cx: 250, cy: 310, label: "困惑 / 担忧",       dy: 20  },
                  { cx: 450, cy: 80,  label: "热情 / 兴奋",       dy: -14 },
                  { cx: 650, cy: 200, label: "焦虑 / 满足",       dy: -14 },
                  { cx: 820, cy: 120, label: "自豪 / 失落",       dy: -14 },
                ].map(({ cx, cy, label, dy }) => (
                  <g key={label}>
                    <circle cx={cx} cy={cy} r={6} fill="#a78bfa" />
                    <text x={cx} y={cy + dy} textAnchor="middle" fill="#e5e7eb" fontSize="10">
                      {label}
                    </text>
                  </g>
                ))}
                {[
                  { x: 90,  text: "优化新用户引导" },
                  { x: 270, text: "透明化报价信息" },
                  { x: 450, text: "3D 预览工具" },
                  { x: 630, text: "进度实时追踪" },
                  { x: 810, text: "顺畅的交车流程" },
                ].map(({ x, text }) => (
                  <text key={text} x={x} y={400} textAnchor="middle" fill="#6b7280" fontSize="10" fontStyle="italic">
                    {text}
                  </text>
                ))}
                <line x1={40} y1={200} x2={880} y2={200} stroke="#333" strokeWidth="1" />
                <text x={34} y={204} textAnchor="end" fill="#6b7280" fontSize="10">+</text>
                <text x={34} y={320} textAnchor="end" fill="#6b7280" fontSize="10">−</text>
              </svg>
            </div>
          </div>

          {/* 07 — Persona */}
          <div className="nv-block">
            <div className="nv-sub">
              <span className="nv-sub-num">07 — 用户画像</span>
              <h3>三类用户原型</h3>
            </div>
            <div className="nv-grid-3">

              <div className="nv-persona">
                <div className="nv-persona-header">
                  <img src={imgPortraitManLaughing1} alt="Tony 用户画像照片" className="nv-persona-avatar" />
                  <div>
                    <div className="nv-persona-name">Tony</div>
                    <div className="nv-persona-role">新手</div>
                  </div>
                </div>
                <div className="nv-persona-body">
                  <div className="nv-persona-row">
                    <div className="nv-persona-row-label">背景</div>
                    <div className="nv-persona-row-text">受《速度与激情》启发，刚开始接触汽车改装</div>
                  </div>
                  <div className="nv-persona-row">
                    <div className="nv-persona-row-label">目标</div>
                    <div className="nv-persona-row-text">学习改装基础知识，获得专业引导</div>
                  </div>
                  <div className="nv-persona-row">
                    <div className="nv-persona-row-label">痛点</div>
                    <div className="nv-persona-row-text">不知从何入手，也找不到可信赖的信息来源</div>
                  </div>
                </div>
              </div>

              <div className="nv-persona">
                <div className="nv-persona-header">
                  <img src={imgExpressiveWomanPosingOutdoor1} alt="Lena 用户画像照片" className="nv-persona-avatar" />
                  <div>
                    <div className="nv-persona-name">Lena</div>
                    <div className="nv-persona-role">有经验用户</div>
                  </div>
                </div>
                <div className="nv-persona-body">
                  <div className="nv-persona-row">
                    <div className="nv-persona-row-label">背景</div>
                    <div className="nv-persona-row-text">活跃的赛车迷，定期改装爱车</div>
                  </div>
                  <div className="nv-persona-row">
                    <div className="nv-persona-row-label">目标</div>
                    <div className="nv-persona-row-text">更快获取信息，获得更理想的改装效果</div>
                  </div>
                  <div className="nv-persona-row">
                    <div className="nv-persona-row-label">痛点</div>
                    <div className="nv-persona-row-text">知识局限导致改装结果难以令人满意</div>
                  </div>
                </div>
              </div>

              <div className="nv-persona">
                <div className="nv-persona-header">
                  <img src={imgPortraitModernMan1} alt="Eric 用户画像照片" className="nv-persona-avatar" />
                  <div>
                    <div className="nv-persona-name">Eric</div>
                    <div className="nv-persona-role">资深专家</div>
                  </div>
                </div>
                <div className="nv-persona-body">
                  <div className="nv-persona-row">
                    <div className="nv-persona-row-label">背景</div>
                    <div className="nv-persona-row-text">入行 20 年，改装汽车是他生活的核心</div>
                  </div>
                  <div className="nv-persona-row">
                    <div className="nv-persona-row-label">目标</div>
                    <div className="nv-persona-row-text">分享知识，获取最新的产品信息</div>
                  </div>
                  <div className="nv-persona-row">
                    <div className="nv-persona-row-label">痛点</div>
                    <div className="nv-persona-row-text">缺乏一个能高效传播知识的集中平台</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* 08 — Define Problems */}
          <div className="nv-block">
            <div className="nv-sub">
              <span className="nv-sub-num">08 — 问题定义</span>
              <h3>6 大核心痛点</h3>
            </div>
            <div className="nv-pain-list">
              {[
                { icon: imgGroup657, title: "技术知识匮乏",    desc: "难以找到可靠的技术参考资料" },
                { icon: imgGroup659, title: "预算超支",         desc: "隐性费用导致实际花费远超预期" },
                { icon: imgGroup661, title: "时间浪费",         desc: "沟通不畅造成不必要的延误" },
                { icon: imgGroup660, title: "信息时效性差",     desc: "零件数据和行业趋势过时或分散" },
                { icon: imgGroup662, title: "额外附加条件",     desc: "改装店事先未披露的附加要求" },
                { icon: imgGroup658, title: "结果不符预期",     desc: "最终效果与最初设想存在落差" },
              ].map(({ icon, title, desc }) => (
                <div className="nv-pain-item" key={title}>
                  <img src={icon} alt="" aria-hidden="true" className="nv-pain-icon" />
                  <div className="nv-pain-text">
                    <strong>{title}</strong>
                    {desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Design Opportunity callout */}
          <div className="nv-callout">
            <p className="nv-callout-title">设计机会</p>
            <p>通过整合<strong>线上与线下交互</strong>，让爱好者能更便捷地了解和规划改装——在一个快速增长的市场中，弥补信息、规划和体验层面的缺口。</p>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          PHASE 03 — EXPLORE
      ══════════════════════════════════════════════════════════════ */}
      <section id="explore" data-phase="explore" className="nv-section">
        <div className="nv-container">

          <header className="nv-phase-header">
            <p className="nv-phase-label">阶段 03</p>
            <h2 className="nv-phase-title">Explore</h2>
            <p className="nv-phase-desc">从发散式头脑风暴到聚焦方案——确定概念方向，并梳理其在更大生态系统中的运作方式。</p>
          </header>

          {/* 09 — Brainstorm */}
          <div className="nv-block">
            <div className="nv-sub">
              <span className="nv-sub-num">09 — 头脑风暴</span>
              <h3>发散思维</h3>
            </div>
            <div className="nv-grid-2">
              <div className="nv-card">
                <div className="nv-tag-group">
                  <div className="nv-tag-group-label">线上</div>
                  <div className="nv-tags">
                    {["论坛", "博客", "杂志", "仿真模拟", "试驾体验", "APP", "YouTube", "社交媒体", "直播", "AR 预览", "社群", "用户评测"].map((t) => (
                      <span className="nv-tag" key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="nv-card">
                <div className="nv-tag-group">
                  <div className="nv-tag-group-label">线下</div>
                  <div className="nv-tags">
                    {["技师", "家人", "朋友", "车展", "汽配店", "改装工坊", "经销商", "车友会", "展厅", "专家咨询", "试驾活动", "社群聚会"].map((t) => (
                      <span className="nv-tag" key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 10 — New Concept */}
          <div className="nv-block">
            <div className="nv-sub">
              <span className="nv-sub-num">10 — 新概念</span>
              <h3>双轨并行方案</h3>
            </div>
            <div className="nv-grid-2">
              <div className="nv-card">
                <p style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--phase-color)", fontWeight: 700, marginBottom: 12 }}>线上</p>
                <p style={{ color: "#d1d5db", lineHeight: 1.65 }}>一个集中化平台，供汽车爱好者在正式改装前学习、规划并可视化改装方案。</p>
              </div>
              <div className="nv-card">
                <p style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--phase-color)", fontWeight: 700, marginBottom: 12 }}>线下</p>
                <p style={{ color: "#d1d5db", lineHeight: 1.65 }}>部署于改装店的沉浸式 VR 体验设备，让用户在任何实际施工前就能感受改装效果。</p>
              </div>
            </div>
          </div>

          {/* 11 — New System Map */}
          <div className="nv-block">
            <div className="nv-sub">
              <span className="nv-sub-num">11 — 系统架构图</span>
              <h3>全局连接方式</h3>
            </div>
            <p className="nv-sub-body">
              完整生态系统：用户通过 App（3D 模型、社群、规划）与线上端交互，经由设备连接改装店进行咨询和 VR 体验，技师负责实际施工——整个系统由制造商和供应商支撑的数据库驱动。
            </p>
            <div className="nv-actors nv-mt-24">
              {[
                "用户", "→", "App", "→", "设备", "→", "改装店", "→", "技师", "→", "数据库", "→", "零件供应商", "→", "汽车制造商",
              ].map((item, i) =>
                item === "→" ? (
                  <span className="nv-actor-arrow" key={i}>→</span>
                ) : (
                  <span className="nv-actor" key={item}>{item}</span>
                )
              )}
            </div>
            <div className="nv-actors" style={{ marginTop: 12 }}>
              {[
                "发送项目方案",
                "预约服务",
                "产品发布公告",
                "数据支持",
                "任务分配",
                "线下咨询",
                "虚拟体验",
                "测试与交付",
              ].map((r) => (
                <span key={r} style={{ fontSize: 12, color: "#9ca3af", padding: "4px 12px", border: "1px solid #444", borderRadius: 20 }}>{r}</span>
              ))}
            </div>
          </div>

          {/* Solution Direction callout */}
          <div className="nv-callout">
            <p className="nv-callout-title">解决方向</p>
            <p>VroomVision——一个数据驱动的平台，线上整合 3D 可视化、社群功能与项目规划，线下提供沉浸式模拟体验。四大支柱：<strong>交流与学习</strong>、<strong>项目规划</strong>、<strong>创新体验</strong>、<strong>信息数据库</strong>。</p>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          PHASE 04 — DESIGN
      ══════════════════════════════════════════════════════════════ */}
      <section id="design" data-phase="design" className="nv-section">
        <div className="nv-container">

          <header className="nv-phase-header">
            <p className="nv-phase-label">阶段 04</p>
            <h2 className="nv-phase-title">Design</h2>
            <p className="nv-phase-desc">从概念到高保真——将研究成果与战略方向转化为连贯的产品与服务体验。</p>
          </header>

          {/* 12 — Design Function */}
          <div className="nv-block">
            <div className="nv-sub">
              <span className="nv-sub-num">12 — 设计功能</span>
              <h3>产品如何运作</h3>
            </div>
            <div className="nv-fn-grid">
              {[
                { num: "01", title: "交流与学习",  desc: "与社群一起学习和分享改装知识" },
                { num: "02", title: "项目规划",     desc: "管理预算、零件清单和时间线，制定完整改装方案" },
                { num: "03", title: "创新体验",     desc: "通过 3D 可视化和 VR 仿真提前预览改装效果" },
                { num: "04", title: "信息数据库",   desc: "获取最新零件数据和改装参考资料" },
              ].map(({ num, title, desc }) => (
                <div className="nv-card" key={num}>
                  <div className="nv-fn-num">{num}</div>
                  <div className="nv-fn-title">{title}</div>
                  <div className="nv-fn-desc">{desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 13 — Hi-Fi Screens */}
          <div className="nv-block">
            <div className="nv-sub">
              <span className="nv-sub-num">13 — 最终设计：高保真</span>
              <h3>高保真界面</h3>
            </div>
            <img
              src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773805006/portfolio/projects/nirvana/hifi.png"
              alt="VroomVision 高保真界面截图"
              style={{ width: "100%", borderRadius: "12px", display: "block" }}
            />
          </div>

          {/* 13 — Service Blueprint */}
          <div className="nv-block">
            <div className="nv-sub">
              <span className="nv-sub-num">13 — 服务蓝图</span>
              <h3>服务蓝图</h3>
            </div>
            <img
              src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773805178/portfolio/projects/nirvana/service-blueprint.png"
              alt="服务蓝图，展示各阶段：App 制定方案、预约预订、店内咨询、模拟器体验、排期安排、报到、施工改装、测试与交车"
              style={{ width: "100%", borderRadius: "12px", display: "block", marginTop: "24px" }}
            />
          </div>

          {/* 13 — Storyboard */}
          <div className="nv-block">
            <div className="nv-sub">
              <span className="nv-sub-num">13 — 故事板</span>
              <h3>故事板</h3>
            </div>
            <img
              src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773804915/portfolio/projects/nirvana/storyboard.png"
              alt="故事板，展示 6 个步骤：在广告牌上发现 App、产生改装想法、前往改装店、进行咨询、施工改装、试驾提车"
              style={{ width: "100%", borderRadius: "12px", display: "block" }}
            />
          </div>

          {/* Reflection callout */}
          <div className="nv-callout">
            <p className="nv-callout-title">项目反思</p>
            <p>Nirvana 项目让我深刻认识到，服务设计从来不只是关于 App 本身。真正的挑战在于弥合碎片化的线下体验与数字化连接之间的鸿沟。如果继续推进，我会专门开发两条细分赛道——经典车修复和电动车改装——这两个高增长领域同样急需这个项目所聚焦的透明度和沉浸式规划体验。</p>
          </div>

        </div>
      </section>

      <NextProject href="/zh/projects/reco" title="RECO" role="UX 设计师" theme="dark" />
    </div>
  );
}

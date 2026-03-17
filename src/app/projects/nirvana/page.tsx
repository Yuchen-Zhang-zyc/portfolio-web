"use client";

import NextProject from "../../components/NextProject";

// ── Image asset constants ──────────────────────────────────────────────────────
const imgIphone13MockupPm032 = "https://res.cloudinary.com/dj13he2xu/image/upload/v1773758050/portfoliohttps://res.cloudinary.com/dj13he2xu/image/upload/v1773758050/portfoliohttps://res.cloudinary.com/dj13he2xu/image/upload/v1773758050/portfolio/projects/nirvana/assets/c4a2c290c1426f7d36eb0348a3784b5ee4f110c6.png";
const imgPortraitManLaughing1 = "https://res.cloudinary.com/dj13he2xu/image/upload/v1773758089/portfolio/projects/nirvana/assets/ec3d268fd7bd600042056bf1a15a6f6a95a292f5.jpg";
const imgPortraitModernMan1 = "https://res.cloudinary.com/dj13he2xu/image/upload/v1773758070/portfolio/projects/nirvana/assets/da452b31d659e523d727e50399ce3120de623225.jpg";
const imgExpressiveWomanPosingOutdoor1 = "https://res.cloudinary.com/dj13he2xu/image/upload/v1773758084/portfolio/projects/nirvana/assets/e2e62a763aa3abeb680a7ab00f95e926c120f242.jpg";
const imgWorldfaceSpanishManWhiteBackground1 = "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757949/portfolio/projects/nirvana/assets/66c97cef08f1e823e2c50152a6b95f0adb62740a.jpg";
const imgYellowSportCar = "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757967/portfolio/projects/nirvana/assets/7aef6df31a85f1cfa8f525bf47d0073a6c386015.jpg";
const imgSilverCar = "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757946/portfolio/projects/nirvana/assets/65d8e96a7f5c94a8b9d9c695af1e817005f8602b.jpg";
const imgGroup657 = "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757923/portfoliohttps://res.cloudinary.com/dj13he2xu/image/upload/v1773757923/portfoliohttps://res.cloudinary.com/dj13he2xu/image/upload/v1773757923/portfolio/projects/nirvana/assets/4f330399ebd067ddae8dcf6dd05ca508218464f9.svg";
const imgGroup659 = "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757936/portfoliohttps://res.cloudinary.com/dj13he2xu/image/upload/v1773757936/portfoliohttps://res.cloudinary.com/dj13he2xu/image/upload/v1773757936/portfolio/projects/nirvana/assets/5804fda5c77639851fddabb551fb49544f3a6503.svg";
const imgGroup661 = "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757879/portfoliohttps://res.cloudinary.com/dj13he2xu/image/upload/v1773757879/portfoliohttps://res.cloudinary.com/dj13he2xu/image/upload/v1773757879/portfolio/projects/nirvana/assets/0be58a62524079bf55f8e0ab34e2fe2b4291fa9c.svg";
const imgGroup660 = "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757971/portfoliohttps://res.cloudinary.com/dj13he2xu/image/upload/v1773757971/portfoliohttps://res.cloudinary.com/dj13he2xu/image/upload/v1773757971/portfolio/projects/nirvana/assets/7f08e23cf098f9cafc03572036a7da9c7e572c94.svg";
const imgGroup662 = "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757875/portfoliohttps://res.cloudinary.com/dj13he2xu/image/upload/v1773757875/portfoliohttps://res.cloudinary.com/dj13he2xu/image/upload/v1773757875/portfolio/projects/nirvana/assets/06d80642d673eb64143a58203c214cbcd616645c.svg";
const imgGroup658 = "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757928/portfoliohttps://res.cloudinary.com/dj13he2xu/image/upload/v1773757928/portfoliohttps://res.cloudinary.com/dj13he2xu/image/upload/v1773757928/portfolio/projects/nirvana/assets/505dd6424aa3dad0e9f90211c81e5a5b5890df16.svg";
const imgCapture1 = "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757926/portfoliohttps://res.cloudinary.com/dj13he2xu/image/upload/v1773757926/portfoliohttps://res.cloudinary.com/dj13he2xu/image/upload/v1773757926/portfolio/projects/nirvana/assets/4f5176d24ccdd4bf9c6250abd96ae53c728624e9.png";
const imgG11 = "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757910/portfoliohttps://res.cloudinary.com/dj13he2xu/image/upload/v1773757910/portfoliohttps://res.cloudinary.com/dj13he2xu/image/upload/v1773757910/portfolio/projects/nirvana/assets/2bc41bdc6cd3ec37112a6429a2299d3535ff8780.png";
const imgG51 = "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757920/portfoliohttps://res.cloudinary.com/dj13he2xu/image/upload/v1773757920/portfoliohttps://res.cloudinary.com/dj13he2xu/image/upload/v1773757920/portfolio/projects/nirvana/assets/49e1da4af6cb67e4a6ff5c8c5471dd5ae8a9c02f.png";
const imgG8 = "https://res.cloudinary.com/dj13he2xu/image/upload/v1773758010/portfoliohttps://res.cloudinary.com/dj13he2xu/image/upload/v1773758010/portfoliohttps://res.cloudinary.com/dj13he2xu/image/upload/v1773758010/portfolio/projects/nirvana/assets/9446e3f03cf71fcfd62780a2321bf6d08622788d.png";
const imgG9 = "https://res.cloudinary.com/dj13he2xu/image/upload/v1773758048/portfoliohttps://res.cloudinary.com/dj13he2xu/image/upload/v1773758048/portfoliohttps://res.cloudinary.com/dj13he2xu/image/upload/v1773758048/portfolio/projects/nirvana/assets/c37a4463ce3e03e4dd43fb447b9d5f24efc731d9.png";
const imgG7 = "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757943/portfoliohttps://res.cloudinary.com/dj13he2xu/image/upload/v1773757943/portfoliohttps://res.cloudinary.com/dj13he2xu/image/upload/v1773757943/portfolio/projects/nirvana/assets/60d9a64ee2c2bd40542148127de2c35dce925121.png";
const imgG102 = "https://res.cloudinary.com/dj13he2xu/image/upload/v1773758051/portfoliohttps://res.cloudinary.com/dj13he2xu/image/upload/v1773758051/portfoliohttps://res.cloudinary.com/dj13he2xu/image/upload/v1773758051/portfolio/projects/nirvana/assets/c6341db63d330b00d43faca0569c9461441c6961.png";
const img1232 = "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757899/portfoliohttps://res.cloudinary.com/dj13he2xu/image/upload/v1773757899/portfoliohttps://res.cloudinary.com/dj13he2xu/image/upload/v1773757899/portfolio/projects/nirvana/assets/1d24a2435e9496d02e7c7b29f6be1a9675bf0300.png";
const img123123211 = "https://res.cloudinary.com/dj13he2xu/image/upload/v1773758039/portfoliohttps://res.cloudinary.com/dj13he2xu/image/upload/v1773758039/portfoliohttps://res.cloudinary.com/dj13he2xu/image/upload/v1773758039/portfolio/projects/nirvana/assets/bd9e9a682a3bf5e4ffee8b11cbbb2503c30099c3.png";
const img42933721 = "https://res.cloudinary.com/dj13he2xu/image/upload/v1773758065/portfoliohttps://res.cloudinary.com/dj13he2xu/image/upload/v1773758065/portfoliohttps://res.cloudinary.com/dj13he2xu/image/upload/v1773758065/portfolio/projects/nirvana/assets/d468783a9c50d68875aef07a19122dec49c75e8a.png";
const img31 = "https://res.cloudinary.com/dj13he2xu/image/upload/v1773758036/portfoliohttps://res.cloudinary.com/dj13he2xu/image/upload/v1773758036/portfoliohttps://res.cloudinary.com/dj13he2xu/image/upload/v1773758036/portfolio/projects/nirvana/assets/bca4bc6109c2e3758c9c0af77a70761e8e20dcbf.png";
const img42211201 = "https://res.cloudinary.com/dj13he2xu/image/upload/v1773758052/portfoliohttps://res.cloudinary.com/dj13he2xu/image/upload/v1773758052/portfoliohttps://res.cloudinary.com/dj13he2xu/image/upload/v1773758052/portfolio/projects/nirvana/assets/c97a9904c2f9747096195916e7f89d4ef6685394.png";
const img51 = "https://res.cloudinary.com/dj13he2xu/image/upload/v1773758063/portfoliohttps://res.cloudinary.com/dj13he2xu/image/upload/v1773758063/portfoliohttps://res.cloudinary.com/dj13he2xu/image/upload/v1773758063/portfolio/projects/nirvana/assets/d050720e817b01aaa7b94736a9a1c601f83f988c.png";
const img1331 = "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757950/portfoliohttps://res.cloudinary.com/dj13he2xu/image/upload/v1773757950/portfoliohttps://res.cloudinary.com/dj13he2xu/image/upload/v1773757950/portfolio/projects/nirvana/assets/6962b0d7ede6d407276d0318f2a228d8568994b9.png";
const img21211 = "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757956/portfoliohttps://res.cloudinary.com/dj13he2xu/image/upload/v1773757956/portfoliohttps://res.cloudinary.com/dj13he2xu/image/upload/v1773757956/portfolio/projects/nirvana/assets/6c00c43b365af2c8b7ef87a717289720766928a7.png";
const img52 = "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757920/portfoliohttps://res.cloudinary.com/dj13he2xu/image/upload/v1773757920/portfoliohttps://res.cloudinary.com/dj13he2xu/image/upload/v1773757920/portfolio/projects/nirvana/assets/498d6730bce448a5faedf957bfe4335535b87026.png";
const img32 = "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757909/portfoliohttps://res.cloudinary.com/dj13he2xu/image/upload/v1773757909/portfoliohttps://res.cloudinary.com/dj13he2xu/image/upload/v1773757909/portfolio/projects/nirvana/assets/2b2ea2499294eba544ca6b45fead1f15f726eaf8.png";
const img34 = "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757935/portfoliohttps://res.cloudinary.com/dj13he2xu/image/upload/v1773757935/portfoliohttps://res.cloudinary.com/dj13he2xu/image/upload/v1773757935/portfolio/projects/nirvana/assets/573aebba26f00120a8548a573ada19d0eaffd6b8.png";
const img53 = "https://res.cloudinary.com/dj13he2xu/image/upload/v1773758035/portfoliohttps://res.cloudinary.com/dj13he2xu/image/upload/v1773758035/portfoliohttps://res.cloudinary.com/dj13he2xu/image/upload/v1773758035/portfolio/projects/nirvana/assets/b5d6f8718f9679a5ab5067b1c878a70a769ea47d.png";

// suppress "unused" lint for assets not used in JSX
void imgG8; void imgG9; void imgG11; void imgG51; void imgWorldfaceSpanishManWhiteBackground1;

// ── CSS ───────────────────────────────────────────────────────────────────────
const CSS = `
  /* Phase colour tokens */
  [data-phase="research"]  { --phase-color: #06b6d4; --phase-rgb: 6,182,212; }
  [data-phase="discovery"] { --phase-color: #a78bfa; --phase-rgb: 167,139,250; }
  [data-phase="explore"]   { --phase-color: #ea7e2b; --phase-rgb: 234,126,43; }
  [data-phase="design"]    { --phase-color: #22c55e; --phase-rgb: 34,197,94; }

  /* Base */
  .nv-page { font-family: var(--font-inter, Inter, sans-serif); font-size: 16px; background: #222222; color: #d1d5db; line-height: 1.7; }
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
  .nv-phase-title { font-size: clamp(48px, 6vw, 80px); font-weight: 800; color: var(--phase-color); line-height: 1; margin-bottom: 20px; }
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

  /* Hi-fi screen grid — mobile portrait screenshots, fixed aspect ratio */
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
  /* Hero mockup — portrait iPhone, let it breathe, don't crop */
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
export default function NirvanaPage() {
  return (
    <div className="nv-page">
      <style>{CSS}</style>

      <a href="#research" className="nv-skip">Skip to main content</a>

      {/* ── Back link ── */}
      <div style={{ padding: "14px 48px" }}>
        <a href="/" style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", textDecoration: "none", fontFamily: "monospace", letterSpacing: "0.06em" }}>← Home</a>
      </div>

      {/* ── Sticky Subnav ── */}
      <nav className="nv-subnav" aria-label="Case study sections">
        <span className="nv-subnav-brand">&lsquo;Nirvana&rsquo;</span>
        <div className="nv-subnav-links">
          <a href="#research">Research</a>
          <a href="#discovery">Discovery</a>
          <a href="#explore">Explore</a>
          <a href="#design">Design</a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="nv-hero nv-section-first">
        <div className="nv-container">
          <div className="nv-hero-tags">
            {["Individual Project", "Service Design", "Interaction Design", "3D Visualization"].map((t) => (
              <span className="nv-hero-tag" key={t}>{t}</span>
            ))}
          </div>
          <p className="nv-hero-subtitle">Designing a more predictable car modification journey</p>
          <h1 className="nv-hero-title">&lsquo;Nirvana&rsquo; Project</h1>
          <p className="nv-hero-body">
            Car enthusiasts often rely on fragmented and unreliable information when planning modifications. As a result, they struggle to predict outcomes, choose suitable parts, communicate with shops, and stay within budget. VroomVision is a concept platform that helps users preview modifications before committing, build clearer project plans, and navigate the service process with greater transparency.
          </p>
          <img
            src={imgIphone13MockupPm032}
            alt="Nirvana VroomVision app shown on iPhone mockup"
            className="nv-hero-mockup"
          />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          PHASE 01 — RESEARCH
      ══════════════════════════════════════════════════════════════ */}
      <section id="research" data-phase="research" className="nv-section">
        <div className="nv-container">

          {/* Phase header */}
          <header className="nv-phase-header">
            <p className="nv-phase-label">PHASE 01</p>
            <h2 className="nv-phase-title">Research</h2>
            <p className="nv-phase-desc">Understanding the landscape — market data, field observation, and direct interviews with car modification enthusiasts.</p>
          </header>

          {/* 01 — Background */}
          <div className="nv-block">
            <div className="nv-sub">
              <span className="nv-sub-num">01 — Background</span>
              <h3>From Personal Passion to Design Problem</h3>
            </div>
            <div className="nv-grid-2-center">
              <div>
                <p className="nv-sub-body">
                  Growing up watching Initial D, I later modified my own car in the U.S. and experienced firsthand the difficulties enthusiasts face — fragmented information, unreliable advice, and unpredictable outcomes. This personal frustration became the project&apos;s starting point.
                </p>
              </div>
              <div className="nv-img-stack">
                <img src={imgYellowSportCar} alt="Yellow sport car on road" className="nv-img-fill" />
                <img src={imgSilverCar} alt="Silver mini coupe in sunlight" className="nv-img-fill" />
              </div>
            </div>
          </div>

          {/* 02 — Market Research */}
          <div className="nv-block">
            <div className="nv-sub">
              <span className="nv-sub-num">02 — Market Research</span>
              <h3>Growing Market, Fragmented Channels</h3>
            </div>
            <div className="nv-stats-row">
              <div className="nv-stat">
                <span className="nv-stat-value">$52M → $68M</span>
                <span className="nv-stat-label">Market size (US, 2021–2029)</span>
              </div>
              <div className="nv-stat">
                <span className="nv-stat-value">CAGR 3.45%</span>
                <span className="nv-stat-label">Annual growth rate</span>
              </div>
              <div className="nv-stat">
                <span className="nv-stat-value">55%</span>
                <span className="nv-stat-label">North America global share</span>
              </div>
            </div>
            <p className="nv-sub-body nv-mb-16">Where enthusiasts find inspiration</p>
            <BarChart rows={[
              { label: "Internet",      pct: 32 },
              { label: "In person",     pct: 28 },
              { label: "Social media",  pct: 17 },
              { label: "Car show",      pct: 15 },
              { label: "Auto shop",     pct: 14 },
              { label: "Dealership",    pct: 13 },
              { label: "On the street", pct: 11 },
              { label: "Movie",         pct: 10 },
            ]} />
          </div>

          {/* 03 — Questionnaire */}
          <div className="nv-block">
            <div className="nv-sub">
              <span className="nv-sub-num">03 — Questionnaire (n=167)</span>
              <h3>What Owners Modify</h3>
            </div>
            <BarChart rows={[
              { label: "Wheels / Tires",        pct: 49 },
              { label: "Exterior Body",          pct: 42 },
              { label: "Interiors",              pct: 36 },
              { label: "Lighting",               pct: 33 },
              { label: "Engine / Electrical",    pct: 29 },
              { label: "Suspension / Brakes",    pct: 27 },
              { label: "Intake / Exhaust",       pct: 22 },
              { label: "Engine Internal",        pct: 19 },
              { label: "Exterior Accessories",   pct: 18 },
              { label: "Drivetrain",             pct: 15 },
            ]} />
            <p className="nv-caption">167 participants · online questionnaire · North America focus</p>
          </div>

          {/* 04 — Field Research */}
          <div className="nv-block">
            <div className="nv-sub">
              <span className="nv-sub-num">04 — Field Research</span>
              <h3>Visiting All Star Auto</h3>
            </div>
            <p style={{ color: "#d1d5db", marginBottom: 24, maxWidth: 640 }}>
              I observed the real modification workflow at a shop in Newark, DE — from consultation and planning to modification and delivery.
            </p>
            <ol className="nv-workflow-step">
              {[
                "Consultation and planning",
                "Selecting parts & components",
                "Quotation & agreement",
                "First inspection",
                "Modification work",
                "Quality control & testing",
                "Final inspection & approval",
                "Delivery",
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
              <span className="nv-sub-num">05 — Interview</span>
              <h3>4 Enthusiasts, 4 Perspectives</h3>
            </div>
            <div className="nv-interview-list">

              <div className="nv-interview">
                <div className="nv-interview-meta">
                  <img src={imgPortraitManLaughing1} alt="Portrait of Alex" className="nv-interview-avatar" />
                  <div>
                    <div className="nv-interview-name">Alex</div>
                    <div className="nv-interview-car">1993 Nissan GTR</div>
                  </div>
                </div>
                <p className="nv-interview-quote">
                  &ldquo;I have been in contact with cars since I was a child, and it has been 22 years now...&nbsp;
                  <span className="hl">Now I want more and more people to know about modified cars and car culture, and share my knowledge and ideas</span>
                  &rdquo;
                </p>
              </div>

              <div className="nv-interview">
                <div className="nv-interview-meta">
                  <img src={imgPortraitModernMan1} alt="Portrait of Mike" className="nv-interview-avatar" />
                  <div>
                    <div className="nv-interview-name">Mike</div>
                    <div className="nv-interview-car">2016 BMW M5</div>
                  </div>
                </div>
                <p className="nv-interview-quote">
                  &ldquo;The acceleration and roaring engine of a car make my adrenaline surge...&nbsp;
                  <span className="hl">experience the thrill and extreme speed of racing cars firsthand</span>
                  &rdquo;
                </p>
              </div>

              <div className="nv-interview">
                <div className="nv-interview-meta">
                  <img src={imgExpressiveWomanPosingOutdoor1} alt="Portrait of Marcos" className="nv-interview-avatar" />
                  <div>
                    <div className="nv-interview-name">Marcos</div>
                    <div className="nv-interview-car">1996 Mazda RX7</div>
                  </div>
                </div>
                <p className="nv-interview-quote">
                  &ldquo;By participating in and watching famous car races like GT and WRC...&nbsp;
                  <span className="hl">I also gained insight into the development of car culture and the emotional resonance of car fans.</span>
                  &rdquo;
                </p>
              </div>

              <div className="nv-interview">
                <div className="nv-interview-meta">
                  <img src={imgWorldfaceSpanishManWhiteBackground1} alt="Portrait of Sergio" className="nv-interview-avatar" />
                  <div>
                    <div className="nv-interview-name">Sergio</div>
                    <div className="nv-interview-car">2021 Dodge Challenger Hellcat</div>
                  </div>
                </div>
                <p className="nv-interview-quote">
                  &ldquo;First came into contact with cars in the Fast and Furious movie...&nbsp;
                  <span className="hl">I need more channels and resources to better understand cars and car culture.</span>
                  &rdquo;
                </p>
              </div>

            </div>
          </div>

          {/* Research Insight callout */}
          <div className="nv-callout">
            <p className="nv-callout-title">Research Insight</p>
            <p>Information channels for car modification lack credibility and comprehensiveness. Enthusiasts at every level struggle with fragmented knowledge, unclear processes, and unpredictable outcomes.</p>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          PHASE 02 — DISCOVERY
      ══════════════════════════════════════════════════════════════ */}
      <section id="discovery" data-phase="discovery" className="nv-section">
        <div className="nv-container">

          <header className="nv-phase-header">
            <p className="nv-phase-label">PHASE 02</p>
            <h2 className="nv-phase-title">Discovery</h2>
            <p className="nv-phase-desc">Synthesizing all research into a clear picture — mapping the user journey, defining user archetypes, and distilling the core problems to solve.</p>
          </header>

          {/* 05 — User Journey Map */}
          <div className="nv-block">
            <div className="nv-sub">
              <span className="nv-sub-num">05 — User Journey Map</span>
              <h3>Mapping the Emotional Rollercoaster</h3>
            </div>
            <div className="nv-journey-wrap">
              <svg
                width="900"
                height="420"
                viewBox="0 0 900 420"
                style={{ display: "block", width: "100%" }}
                role="img"
                aria-label="User journey map showing 5 phases of car modification experience. Emotional curve starts curious, drops to confused during consultation, rises with excitement during planning, then experiences mixed emotions through modification and testing."
              >
                {/* Background */}
                <rect width="900" height="420" fill="#2a2a2a" rx="12" />

                {/* Phase column separators */}
                {[180, 360, 540, 720].map((x) => (
                  <line key={x} x1={x} y1={40} x2={x} y2={380} stroke="#333" strokeWidth="1" strokeDasharray="4 4" />
                ))}

                {/* Phase labels */}
                {[
                  { x: 90, label: "Motivation" },
                  { x: 270, label: "Consultation" },
                  { x: 450, label: "Plan Making" },
                  { x: 630, label: "Modification" },
                  { x: 810, label: "Testing" },
                ].map(({ x, label }) => (
                  <text key={label} x={x} y={28} textAnchor="middle" fill="#a78bfa" fontSize="12" fontWeight="700" letterSpacing="0.08em">
                    {label.toUpperCase()}
                  </text>
                ))}

                {/* Action labels */}
                {[
                  { x: 90,  text: "Find shops" },
                  { x: 270, text: "Learn process & costs" },
                  { x: 450, text: "Select parts & finalize" },
                  { x: 630, text: "Drop off & track" },
                  { x: 810, text: "Test & delivery" },
                ].map(({ x, text }) => (
                  <text key={text} x={x} y={48} textAnchor="middle" fill="#6b7280" fontSize="10">
                    {text}
                  </text>
                ))}

                {/* Emotional curve */}
                <path
                  d="M 90,160 C 150,160 200,310 250,310 C 310,310 380,80 450,80 C 520,80 590,200 650,200 C 720,200 770,120 820,120 C 840,120 855,200 860,260"
                  fill="none"
                  stroke="#a78bfa"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                {/* Emotion dots */}
                {[
                  { cx: 90,  cy: 160, label: "Curious / Longing",         dy: -14 },
                  { cx: 250, cy: 310, label: "Confused / Fear",            dy: 20  },
                  { cx: 450, cy: 80,  label: "Enthusiasm / Excitement",    dy: -14 },
                  { cx: 650, cy: 200, label: "Worried / Satisfied",        dy: -14 },
                  { cx: 820, cy: 120, label: "Proud / Frustration",        dy: -14 },
                ].map(({ cx, cy, label, dy }) => (
                  <g key={label}>
                    <circle cx={cx} cy={cy} r={6} fill="#a78bfa" />
                    <text x={cx} y={cy + dy} textAnchor="middle" fill="#e5e7eb" fontSize="10">
                      {label}
                    </text>
                  </g>
                ))}

                {/* Opportunity labels */}
                {[
                  { x: 90,  text: "Better onboarding" },
                  { x: 270, text: "Clearer pricing info" },
                  { x: 450, text: "3D preview tools" },
                  { x: 630, text: "Progress tracking" },
                  { x: 810, text: "Seamless checkout" },
                ].map(({ x, text }) => (
                  <text key={text} x={x} y={400} textAnchor="middle" fill="#6b7280" fontSize="10" fontStyle="italic">
                    {text}
                  </text>
                ))}

                {/* Axis line */}
                <line x1={40} y1={200} x2={880} y2={200} stroke="#333" strokeWidth="1" />
                <text x={34} y={204} textAnchor="end" fill="#6b7280" fontSize="10">+</text>
                <text x={34} y={320} textAnchor="end" fill="#6b7280" fontSize="10">−</text>
              </svg>
            </div>
          </div>

          {/* 07 — Persona */}
          <div className="nv-block">
            <div className="nv-sub">
              <span className="nv-sub-num">07 — Persona</span>
              <h3>Three User Archetypes</h3>
            </div>
            <div className="nv-grid-3">

              <div className="nv-persona">
                <div className="nv-persona-header">
                  <img src={imgPortraitManLaughing1} alt="Tony persona photo" className="nv-persona-avatar" />
                  <div>
                    <div className="nv-persona-name">Tony</div>
                    <div className="nv-persona-role">Newbie</div>
                  </div>
                </div>
                <div className="nv-persona-body">
                  <div className="nv-persona-row">
                    <div className="nv-persona-row-label">Background</div>
                    <div className="nv-persona-row-text">Inspired by Fast &amp; Furious, new to car modification</div>
                  </div>
                  <div className="nv-persona-row">
                    <div className="nv-persona-row-label">Goal</div>
                    <div className="nv-persona-row-text">Learn modification basics and get guidance</div>
                  </div>
                  <div className="nv-persona-row">
                    <div className="nv-persona-row-label">Frustration</div>
                    <div className="nv-persona-row-text">Doesn&apos;t know where to start or find reliable info</div>
                  </div>
                </div>
              </div>

              <div className="nv-persona">
                <div className="nv-persona-header">
                  <img src={imgExpressiveWomanPosingOutdoor1} alt="Lena persona photo" className="nv-persona-avatar" />
                  <div>
                    <div className="nv-persona-name">Lena</div>
                    <div className="nv-persona-role">Experienced</div>
                  </div>
                </div>
                <div className="nv-persona-body">
                  <div className="nv-persona-row">
                    <div className="nv-persona-row-label">Background</div>
                    <div className="nv-persona-row-text">Active racing fan, regularly modifies cars</div>
                  </div>
                  <div className="nv-persona-row">
                    <div className="nv-persona-row-label">Goal</div>
                    <div className="nv-persona-row-text">Faster access to information, better modification results</div>
                  </div>
                  <div className="nv-persona-row">
                    <div className="nv-persona-row-label">Frustration</div>
                    <div className="nv-persona-row-text">Limited knowledge leads to unsatisfying results</div>
                  </div>
                </div>
              </div>

              <div className="nv-persona">
                <div className="nv-persona-header">
                  <img src={imgPortraitModernMan1} alt="Eric persona photo" className="nv-persona-avatar" />
                  <div>
                    <div className="nv-persona-name">Eric</div>
                    <div className="nv-persona-role">Expert</div>
                  </div>
                </div>
                <div className="nv-persona-body">
                  <div className="nv-persona-row">
                    <div className="nv-persona-row-label">Background</div>
                    <div className="nv-persona-row-text">20 years in the field, modifying cars is his life</div>
                  </div>
                  <div className="nv-persona-row">
                    <div className="nv-persona-row-label">Goal</div>
                    <div className="nv-persona-row-text">Share knowledge, access latest product information</div>
                  </div>
                  <div className="nv-persona-row">
                    <div className="nv-persona-row-label">Frustration</div>
                    <div className="nv-persona-row-text">No central platform to share knowledge efficiently</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* 08 — Define Problems */}
          <div className="nv-block">
            <div className="nv-sub">
              <span className="nv-sub-num">08 — Define Problems</span>
              <h3>6 Core Pain Points</h3>
            </div>
            <div className="nv-pain-list">
              {[
                { icon: imgGroup657, title: "Technical knowledge",    desc: "Hard to find reliable technical know-how" },
                { icon: imgGroup659, title: "Budget overruns",        desc: "Hidden fees push costs beyond the original plan" },
                { icon: imgGroup661, title: "Time wasted",            desc: "Poor communication causes unnecessary delays" },
                { icon: imgGroup660, title: "Information timeliness", desc: "Parts data and trends are outdated or scattered" },
                { icon: imgGroup662, title: "Extra requirements",     desc: "Shops add conditions not disclosed upfront" },
                { icon: imgGroup658, title: "Unsatisfied goals",      desc: "Final results don't match expectations" },
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
            <p className="nv-callout-title">Design Opportunity</p>
            <p>By combining <strong>Online and Offline Interactions</strong>, enthusiasts can more conveniently understand and modify cars — addressing information, planning, and experience gaps in a growing market.</p>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          PHASE 03 — EXPLORE
      ══════════════════════════════════════════════════════════════ */}
      <section id="explore" data-phase="explore" className="nv-section">
        <div className="nv-container">

          <header className="nv-phase-header">
            <p className="nv-phase-label">PHASE 03</p>
            <h2 className="nv-phase-title">Explore</h2>
            <p className="nv-phase-desc">From divergent brainstorming to a converged solution — defining the concept direction and mapping how it operates within the broader ecosystem.</p>
          </header>

          {/* 09 — Brainstorm */}
          <div className="nv-block">
            <div className="nv-sub">
              <span className="nv-sub-num">09 — Brainstorm</span>
              <h3>Divergent Thinking</h3>
            </div>
            <div className="nv-grid-2">
              <div className="nv-card">
                <div className="nv-tag-group">
                  <div className="nv-tag-group-label">Online</div>
                  <div className="nv-tags">
                    {["Forum", "Blog", "Magazine", "Simulation", "Test Drive", "APP", "YouTube", "Social Media", "Live Stream", "AR Preview", "Community", "Review"].map((t) => (
                      <span className="nv-tag" key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="nv-card">
                <div className="nv-tag-group">
                  <div className="nv-tag-group-label">Offline</div>
                  <div className="nv-tags">
                    {["Technician", "Family", "Friend", "Car Show", "Auto Parts Store", "Workshop", "Dealership", "Car Club", "Showroom", "Expert Consultation", "Test Drive Event", "Community Meetup"].map((t) => (
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
              <span className="nv-sub-num">10 — New Concept</span>
              <h3>Two-Pronged Solution</h3>
            </div>
            <div className="nv-grid-2">
              <div className="nv-card">
                <p style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--phase-color)", fontWeight: 700, marginBottom: 12 }}>Online</p>
                <p style={{ color: "#d1d5db", lineHeight: 1.65 }}>A centralized platform for car enthusiasts to learn, plan, and visualize modifications before committing.</p>
              </div>
              <div className="nv-card">
                <p style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--phase-color)", fontWeight: 700, marginBottom: 12 }}>Offline</p>
                <p style={{ color: "#d1d5db", lineHeight: 1.65 }}>An immersive VR experience device at modification shops that lets users feel their modifications before any real work begins.</p>
              </div>
            </div>
          </div>

          {/* 11 — New System Map */}
          <div className="nv-block">
            <div className="nv-sub">
              <span className="nv-sub-num">11 — New System Map</span>
              <h3>How It All Connects</h3>
            </div>
            <p className="nv-sub-body">
              The full ecosystem: Customers interact with the App (3D model, groups, planning) online, connect to the Shop for consultation and VR experience via Device, actual modifications by Mechanics — all powered by a Database backed by manufacturers and suppliers.
            </p>
            <div className="nv-actors nv-mt-24">
              {[
                "Customer", "→", "App", "→", "Device", "→", "Shop", "→", "Mechanic", "→", "Database", "→", "Product Supplier", "→", "Car Manufacturer",
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
                "Send Project Plan",
                "Schedule Appointment",
                "Product Announcement",
                "Data Support",
                "Assign tasks",
                "Consultation",
                "Virtual Experience",
                "Test & Delivery",
              ].map((r) => (
                <span key={r} style={{ fontSize: 12, color: "#9ca3af", padding: "4px 12px", border: "1px solid #444", borderRadius: 20 }}>{r}</span>
              ))}
            </div>
          </div>

          {/* Solution Direction callout */}
          <div className="nv-callout">
            <p className="nv-callout-title">Solution Direction</p>
            <p>VroomVision — a data-driven platform combining 3D visualization, community features, and project planning online, with an immersive simulator experience offline. Four pillars: <strong>Communication &amp; Learn</strong>, <strong>Project Planning</strong>, <strong>Innovative Experience</strong>, <strong>Information &amp; Database</strong>.</p>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          PHASE 04 — DESIGN
      ══════════════════════════════════════════════════════════════ */}
      <section id="design" data-phase="design" className="nv-section">
        <div className="nv-container">

          <header className="nv-phase-header">
            <p className="nv-phase-label">PHASE 04</p>
            <h2 className="nv-phase-title">Design</h2>
            <p className="nv-phase-desc">From concept to high-fidelity — translating research and strategy into a connected product and service experience.</p>
          </header>

          {/* 12 — Design Function */}
          <div className="nv-block">
            <div className="nv-sub">
              <span className="nv-sub-num">12 — Design Function</span>
              <h3>How It Works</h3>
            </div>
            <div className="nv-fn-grid">
              {[
                { num: "01", title: "Communication & Learn",  desc: "Learn and share modification knowledge with the community" },
                { num: "02", title: "Project Planning",        desc: "Plan modifications with budget, parts, and timeline management" },
                { num: "03", title: "Innovative Experience",   desc: "Preview modifications through 3D visualization and VR simulation" },
                { num: "04", title: "Information Database",    desc: "Access up-to-date parts data and modification references" },
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
              <span className="nv-sub-num">13 — Final Design: Hi-Fi</span>
              <h3>High-Fidelity Screens</h3>
            </div>
            <div className="nv-screen-grid">
              {[
                { src: imgCapture1,   alt: "VroomVision screen: main view" },
                { src: imgG7,         alt: "VroomVision screen: G7 view" },
                { src: imgG102,       alt: "VroomVision screen: G102 view" },
                { src: img1232,       alt: "VroomVision screen: 1232 view" },
                { src: img123123211,  alt: "VroomVision screen: 123123211 view" },
                { src: img42933721,   alt: "VroomVision screen: 42933721 view" },
                { src: img31,         alt: "VroomVision screen: 31 view" },
                { src: img42211201,   alt: "VroomVision screen: 42211201 view" },
                { src: img51,         alt: "VroomVision screen: 51 view" },
                { src: img1331,       alt: "VroomVision screen: 1331 view" },
                { src: img21211,      alt: "VroomVision screen: 21211 view" },
                { src: img52,         alt: "VroomVision screen: 52 view" },
                { src: img32,         alt: "VroomVision screen: 32 view" },
                { src: img34,         alt: "VroomVision screen: 34 view" },
                { src: img53,         alt: "VroomVision screen: 53 view" },
              ].map(({ src, alt }) => (
                <img key={src} src={src} alt={alt} />
              ))}
            </div>
          </div>

          {/* 13 — Service Blueprint */}
          <div className="nv-block">
            <div className="nv-sub">
              <span className="nv-sub-num">13 — Service Blueprint</span>
              <h3>Service Blueprint</h3>
            </div>
            <p className="nv-sub-body">
              The end-to-end service flow connecting customer touchpoints, employee actions, frontstage, and backstage processes — from app planning through test drive and delivery.
            </p>
            <div className="nv-blueprint-wrap nv-mt-24">
              <table className="nv-blueprint">
                <thead>
                  <tr>
                    <th>Phase</th>
                    <th>Customer Journey</th>
                    <th>Employee Action</th>
                    <th>Device / App</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Make plan on app",       "Create plan on app",      "—",                  "APP",    "30 min"],
                    ["Appointment Booking",    "Book appointment",        "Confirm booking",    "APP",    "5 min"],
                    ["In-store Consultation",  "Consult with staff",      "Discussion",         "—",      "30–60 min"],
                    ["Simulator Experience",   "Experience simulator",    "Simulator setup",    "Device", "30–60 min"],
                    ["Schedule Timeline",      "—",                       "Create work schedule","APP",   "10 min"],
                    ["Check-in",               "Drop off vehicle",        "Record check-in",    "APP",    "5 min"],
                    ["Modification",           "—",                       "Modifying / tuning", "—",      "Based on plan"],
                    ["Test & Check Out",       "Test drive & checkout",   "Check-in / out",     "APP",    "15 min"],
                  ].map(([phase, customer, employee, device, time]) => (
                    <tr key={phase}>
                      <td style={{ fontWeight: 600, color: "#fff", whiteSpace: "nowrap" }}>{phase}</td>
                      <td>{customer}</td>
                      <td>{employee}</td>
                      <td style={{ color: "var(--phase-color)", fontWeight: 600 }}>{device}</td>
                      <td style={{ whiteSpace: "nowrap", color: "#9ca3af" }}>{time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 13 — Storyboard */}
          <div className="nv-block">
            <div className="nv-sub">
              <span className="nv-sub-num">13 — Storyboard</span>
              <h3>Storyboard</h3>
            </div>
            <div className="nv-story-grid">
              {[
                "See the app on the ad board",
                "Creating ideas on VroomVision app",
                "Go to the car modification shop",
                "Consultation with staff",
                "Car modification in mechanic space",
                "Test drive and check out",
              ].map((text, i) => (
                <div className="nv-story-item" key={text}>
                  <div className="nv-story-num">{String(i + 1).padStart(2, "0")}</div>
                  <div className="nv-story-text">{text}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Reflection callout */}
          <div className="nv-callout">
            <p className="nv-callout-title">Reflection</p>
            <p>The Nirvana project taught me that service design is never just about the app. The real challenge was bridging the gap between a fragmented offline experience and a connected digital one. If I were to continue, I would develop two specialized tracks — classic car restoration and electric vehicle modification — both high-growth areas that demand the same transparency and immersive planning this project was built around.</p>
          </div>

        </div>
      </section>

      <NextProject href="/projects/vr-simulation" title="VR Tire Change Simulation" role="Solo Designer & Developer" theme="dark" />
    </div>
  );
}

"use client";

import Link from "next/link";
import React from "react";
import NextProject from "../../../components/NextProject";

const CSS = `
  .ag-page {
    --bg-gradient: linear-gradient(135deg, #F0F4F8 0%, #E2E8F0 100%);
    --glass-bg: rgba(255, 255, 255, 0.6);
    --glass-border: rgba(255, 255, 255, 0.8);
    --text-main: #1E293B;
    --text-muted: #64748B;
    --accent: #0EA5E9;
    --accent-green: #10B981;
    font-family: var(--font-body, 'Inter', sans-serif);
    background: var(--bg-gradient);
    color: var(--text-main);
    min-height: 100vh;
    padding-bottom: 120px;
    position: relative;
    overflow: hidden;
  }
  .ag-page-bg { position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 0; pointer-events: none; overflow: hidden; }
  .ag-page-bg::before, .ag-page-bg::after { content: ''; position: absolute; border-radius: 50%; filter: blur(100px); opacity: 0.6; }
  .ag-page-bg::before { width: 80vw; height: 80vw; max-width: 800px; max-height: 800px; background: #E0F2FE; top: -10%; left: -10%; }
  .ag-page-bg::after { width: 60vw; height: 60vw; max-width: 600px; max-height: 600px; background: #D1FAE5; bottom: -10%; right: -10%; }
  .ag-container { max-width: 1100px; margin: 0 auto; padding: 0 40px; position: relative; z-index: 1; }
  .ag-section { padding: 80px 0; }
  .ag-section-border { border-top: 1px solid rgba(15, 23, 42, 0.08); }
  .ag-eyebrow { font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--accent); margin-bottom: 20px; display: inline-block; background: rgba(14, 165, 233, 0.1); padding: 6px 16px; border-radius: 100px; backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.5); }
  .ag-title { font-size: clamp(36px, 5vw, 56px); font-weight: 400; letter-spacing: -0.03em; line-height: 1.1; margin-bottom: 24px; max-width: 800px; color: #0F172A; }
  .ag-title strong { font-weight: 600; background: linear-gradient(90deg, #0EA5E9, #10B981); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
  .ag-desc { font-size: 18px; font-weight: 400; color: var(--text-muted); line-height: 1.6; max-width: 680px; margin-bottom: 48px; }
  .ag-hero { padding: 160px 0 80px; }
  .ag-hero-title { font-size: clamp(48px, 8vw, 80px); font-weight: 700; letter-spacing: -0.04em; margin-bottom: 16px; color: #0F172A; }
  .ag-hero-subtitle { font-size: clamp(20px, 3vw, 28px); color: var(--text-muted); font-weight: 300; margin-bottom: 64px; }
  .ag-meta-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; padding-top: 40px; border-top: 1px solid rgba(15, 23, 42, 0.1); }
  @media (max-width: 768px) { .ag-meta-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; } }
  .ag-meta-label { font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); margin-bottom: 8px; font-weight: 600; }
  .ag-meta-value { font-size: 15px; color: #0F172A; font-weight: 500; line-height: 1.5; }
  .ag-glass-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; margin-bottom: 64px; }
  .ag-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; }
  .ag-grid-2-asym { display: grid; grid-template-columns: 1.2fr 1fr; gap: 48px; }
  @media (max-width: 900px) { .ag-glass-grid, .ag-grid-2, .ag-grid-2-asym { grid-template-columns: 1fr; } }
  .ag-glass-card { background: var(--glass-bg); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); border: 1px solid var(--glass-border); border-radius: 24px; padding: 40px 32px; box-shadow: 0 4px 24px -1px rgba(0, 0, 0, 0.05), inset 0 0 0 1px rgba(255, 255, 255, 0.5); display: flex; flex-direction: column; transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease; position: relative; overflow: hidden; }
  .ag-glass-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 150px; background: linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 100%); pointer-events: none; }
  .ag-glass-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px -8px rgba(0, 0, 0, 0.1), 0 0 0 1px var(--accent), inset 0 0 0 1px rgba(255, 255, 255, 0.8); }
  .ag-card-stat { padding: 24px 32px; text-align: center; justify-content: center; aspect-ratio: 1 / 1; }
  .ag-stat-num { font-size: 48px; font-weight: 700; color: var(--accent); margin-bottom: 8px; line-height: 1; }
  .ag-stat-label { font-size: 14px; color: var(--text-muted); font-weight: 500; }
  .ag-card-icon { width: 48px; height: 48px; background: #FFFFFF; border-radius: 16px; display: flex; align-items: center; justify-content: center; margin-bottom: 32px; color: var(--accent); box-shadow: 0 4px 12px rgba(0,0,0,0.04); position: relative; z-index: 1; }
  .ag-card-title { font-size: 20px; font-weight: 600; margin-bottom: 16px; letter-spacing: -0.01em; position: relative; z-index: 1; color: #0F172A; }
  .ag-card-body { font-size: 15px; color: var(--text-muted); line-height: 1.6; flex-grow: 1; position: relative; z-index: 1; }
  .ag-ia-node { background: rgba(255,255,255,0.75); border: 1.5px solid rgba(191,191,161,0.6); border-radius: 20px; padding: 10px 18px; font-size: 13px; font-weight: 500; color: #1E293B; white-space: nowrap; text-align: center; box-shadow: 0 4px 16px rgba(0,0,0,0.06); display: inline-flex; align-items: center; justify-content: center; }
  .ag-ia-node-l0 { background: #0F172A; border-color: #0F172A; color: #fff; font-size: 14px; font-weight: 700; padding: 12px 28px; border-radius: 24px; }
  .ag-ia-node-l1 { background: rgba(14,165,233,0.1); border-color: rgba(14,165,233,0.35); font-weight: 700; font-size: 14px; padding: 10px 20px; }
  .ag-convergence-pill { background: var(--glass-bg); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); border: 1px solid var(--glass-border); border-radius: 100px; padding: 24px 48px; display: flex; align-items: center; justify-content: space-between; gap: 40px; box-shadow: 0 12px 32px rgba(0,0,0,0.05); }
  @media (max-width: 900px) { .ag-convergence-pill { flex-direction: column; border-radius: 32px; padding: 32px; text-align: center; } }
  .ag-equation { display: flex; align-items: center; gap: 16px; font-size: 20px; font-weight: 500; color: #0F172A; white-space: nowrap; }
  .ag-plus { color: var(--accent); font-weight: 300; }
  .ag-conv-text { font-size: 16px; color: var(--text-muted); line-height: 1.5; text-align: left; }
  @media (max-width: 900px) { .ag-conv-text { text-align: center; } }
  .ag-list { list-style: none; padding: 0; margin: 0; }
  .ag-list li { position: relative; padding-left: 24px; margin-bottom: 16px; font-size: 16px; color: var(--text-muted); line-height: 1.5; }
  .ag-list li::before { content: '→'; position: absolute; left: 0; color: var(--accent); font-weight: 600; }
  .ag-quote { font-size: 24px; font-weight: 300; font-style: italic; color: #0F172A; line-height: 1.5; padding-left: 24px; border-left: 3px solid var(--accent); margin: 32px 0; }
  .ag-img-placeholder { width: 100%; background: rgba(255,255,255,0.4); border: 1px dashed rgba(15,23,42,0.2); border-radius: 24px; display: flex; align-items: center; justify-content: center; color: var(--text-muted); font-family: monospace; font-size: 14px; margin-bottom: 24px; overflow: hidden; position: relative; }
  .ag-img-placeholder img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .ag-feature-row { display: flex; align-items: center; gap: 64px; margin-bottom: 80px; }
  .ag-feature-row.reverse { flex-direction: row-reverse; }
  @media (max-width: 900px) { .ag-feature-row, .ag-feature-row.reverse { flex-direction: column; gap: 32px; } }
  .ag-feature-text { flex: 1; }
  .ag-feature-visual { flex: 1.2; }
`;

export default function AgroxProjectZh() {
  return (
    <>
      <style>{CSS}</style>
      <div className="ag-page">
        <div className="ag-page-bg"></div>

        <div className="relative z-20" style={{ padding: '14px 48px' }}>
          <Link href="/zh" style={{ fontSize: 12, color: 'rgba(100,116,139,0.7)', textDecoration: 'none', fontFamily: 'monospace', letterSpacing: '0.06em' }}>← 首页</Link>
        </div>

        {/* ── HERO ── */}
        <section className="ag-hero ag-container">
          <h1 className="ag-hero-title">Agrox</h1>
          <p className="ag-hero-subtitle">自主化无农药病虫害管理</p>

          <div style={{ marginBottom: "64px" }}>
            <img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773793073/portfolio/projects/agrox/hero.jpg" alt="Agrox 产品渲染图" style={{ width: "100%", borderRadius: "24px", display: "block" }} />
          </div>

          <div className="ag-meta-grid">
            <div>
              <div className="ag-meta-label">团队</div>
              <div className="ag-meta-value">Yuchen Zhang<br/>Yi He</div>
            </div>
            <div>
              <div className="ag-meta-label">职责</div>
              <div className="ag-meta-value">UX 设计<br/>硬件概念</div>
            </div>
            <div>
              <div className="ag-meta-label">时间线</div>
              <div className="ag-meta-value">学术项目<br/>2025</div>
            </div>
            <div>
              <div className="ag-meta-label">领域</div>
              <div className="ag-meta-value">农业科技<br/>机器人</div>
            </div>
          </div>
        </section>

        {/* ── 01 研究 ── */}
        <section className="ag-section ag-section-border ag-container">
          <span className="ag-eyebrow">01 — 研究</span>
          <div className="ag-grid-2-asym">
            <div>
              <h2 className="ag-title">深入理解<br /><strong>核心挑战。</strong></h2>
              <p className="ag-desc">
                我们对 5 家小规模有机农场进行了实地访谈——4 家位于福赛斯公园农贸市场，1 家在南卡罗来纳州——以了解农民在日常工作中如何识别和应对病虫害问题。我们重点关注四个问题：当前痛点、如何判断作物状况、使用哪些工具，以及是否愿意接受技术介入。
              </p>
            </div>
            <div className="ag-glass-grid" style={{ gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: 0, alignSelf: "center" }}>
              <div className="ag-glass-card ag-card-stat">
                <div className="ag-stat-num">4</div>
                <div className="ag-stat-label">福赛斯公园<br/>农贸市场农场</div>
              </div>
              <div className="ag-glass-card ag-card-stat">
                <div className="ag-stat-num">1</div>
                <div className="ag-stat-label">南卡罗来纳州<br/>农场</div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "48px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773794759/portfolio/projects/agrox/research-market.png" alt="福赛斯公园农贸市场实地访谈" style={{ width: "100%", borderRadius: "12px", display: "block", aspectRatio: "3/4", objectFit: "cover" }} />
              <p style={{ fontSize: "12px", color: "#94A3B8", textAlign: "center" }}>福赛斯公园农贸市场</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773794761/portfolio/projects/agrox/research-pest-damage.png" alt="小白菜叶片上可见的虫害损伤" style={{ width: "100%", borderRadius: "12px", display: "block", aspectRatio: "3/4", objectFit: "cover" }} />
              <p style={{ fontSize: "12px", color: "#94A3B8", textAlign: "center" }}>农产品上可见的虫害损伤</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773794762/portfolio/projects/agrox/research-greenhouse.png" alt="南卡罗来纳州农场的拱形温室" style={{ width: "100%", borderRadius: "12px", display: "block", aspectRatio: "3/4", objectFit: "cover" }} />
              <p style={{ fontSize: "12px", color: "#94A3B8", textAlign: "center" }}>南卡罗来纳州农场实地走访</p>
            </div>
          </div>

          <div style={{ marginTop: "48px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", alignItems: "stretch" }}>
            <div className="ag-glass-card" style={{ padding: "32px", background: "rgba(239, 68, 68, 0.04)", borderColor: "rgba(239, 68, 68, 0.2)" }}>
              <div style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700, color: "#EF4444", marginBottom: "12px" }}>初始假设</div>
              <h3 style={{ fontSize: "18px", fontWeight: 600, color: "#0F172A", marginBottom: "12px" }}>环境污染问题</h3>
              <p style={{ fontSize: "15px", color: "#64748B", lineHeight: 1.65 }}>
                我们最初认为小型有机农场最头疼的是土壤污染、水土流失和农药法规——这些话题在农业政策讨论中频繁出现。
              </p>
            </div>
            <div className="ag-glass-card" style={{ padding: "32px", background: "rgba(14, 165, 233, 0.05)", borderColor: "rgba(14, 165, 233, 0.25)" }}>
              <div style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700, color: "#0EA5E9", marginBottom: "12px" }}>实地研究的发现</div>
              <h3 style={{ fontSize: "18px", fontWeight: 600, color: "#0F172A", marginBottom: "12px" }}>病虫害管理</h3>
              <p style={{ fontSize: "15px", color: "#64748B", lineHeight: 1.65 }}>
                我们采访的每一位农民都在前几分钟内主动提到了病虫害——没有任何引导。真正的危机不是合规问题，而是每天不可预测地在没有化学工具的情况下保护作物。
              </p>
            </div>
          </div>
          <div style={{ marginTop: "12px", padding: "16px 24px", background: "rgba(14, 165, 233, 0.05)", borderRadius: "12px", borderLeft: "3px solid #0EA5E9" }}>
            <p style={{ fontSize: "14px", color: "#334155", lineHeight: 1.65 }}>
              <strong>这次转向至关重要。</strong>如果我们按照原有假设设计，会做出一个合规或报告工具——解决的是农民并不迫切的问题。实地研究迫使我们重新定义整个设计命题。
            </p>
          </div>

          <div style={{ marginTop: "48px", display: "flex", flexDirection: "column", gap: "16px" }}>
            <h3 style={{ fontSize: "18px", fontWeight: 600, color: "#0F172A" }}>农民告诉我们的</h3>
            {[
              { quote: "对，有很多风险，比如虫害。有时候我们就……只能用手把虫子一个个摘掉。", insight: "手工摘虫是默认做法——不是选择，而是最后的手段。" },
              { quote: "我们用有机的东西——印楝油、苏云金杆菌——但虫害压力大的时候，很难不用更强效的东西。", insight: "有机方法在压力下失效，有机认证岌岌可危。" },
              { quote: "Tend 太复杂了，功能太多。要是能选自己需要的就好了。", insight: "现有软件是为大型农场设计的，不适合资源有限的小农场。" },
              { quote: "给我日期、作物种类、发现的害虫，可能再加上在哪块地。这些就够了。", insight: "农民想要简洁、结构化的数据——而不是全面的仪表盘。" },
            ].map(({ quote, insight }, i) => (
              <div key={i} className="ag-glass-card" style={{ padding: "24px 32px", display: "flex", flexDirection: "column", gap: "12px" }}>
                <p style={{ fontSize: "16px", fontStyle: "italic", color: "#334155", lineHeight: 1.6 }}>&ldquo;{quote}&rdquo;</p>
                <p style={{ fontSize: "14px", color: "#0EA5E9", fontWeight: 500 }}>→ {insight}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 02 问题 ── */}
        <section className="ag-section ag-section-border ag-container">
          <span className="ag-eyebrow">02 — 问题</span>
          <h2 className="ag-title">有机病虫害防控的<br /><strong>重担。</strong></h2>

          <div className="ag-grid-2">
            <div>
              <p className="ag-desc" style={{ marginBottom: "24px" }}>
                全球每年因病虫害损失 20–40% 的农作物。对有机农场而言，约束更为严苛：不能使用合成农药，一旦虫害压力激增，只能依靠劳动密集型手工方法，或承受减产损失。
              </p>
              <p className="ag-desc">
                令我们意外的是，问题不仅仅是消灭害虫——而是在损害可见之前<strong>知道它们在哪里</strong>。当农民走遍田间发现虫害暴发时，整排作物往往已经无法销售。
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div className="ag-glass-card" style={{ padding: "28px 32px" }}>
                <h3 style={{ fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600, color: "#0EA5E9", marginBottom: "12px" }}>洞察 01</h3>
                <p style={{ fontSize: "16px", color: "#0F172A", lineHeight: 1.6 }}><strong>缺乏系统性追踪。</strong>害虫识别依赖直觉，没有记录暴发位置的固定方式，预防几乎无从谈起。</p>
              </div>
              <div className="ag-glass-card" style={{ padding: "28px 32px" }}>
                <h3 style={{ fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600, color: "#F59E0B", marginBottom: "12px" }}>洞察 02</h3>
                <p style={{ fontSize: "16px", color: "#0F172A", lineHeight: 1.6 }}><strong>有机方法在规模化时失效。</strong>印楝油和苏云金杆菌在低压力下有效，但农民往往被迫在有机认证和保住收成之间二选一。</p>
              </div>
              <div className="ag-glass-card" style={{ padding: "28px 32px" }}>
                <h3 style={{ fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600, color: "#EF4444", marginBottom: "12px" }}>洞察 03</h3>
                <p style={{ fontSize: "16px", color: "#0F172A", lineHeight: 1.6 }}><strong>技术采用因复杂性而受阻。</strong>Tend 等工具被放弃，因为对小型农场而言，学习成本超过了收益。</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 03 目标用户 ── */}
        <section className="ag-section ag-section-border ag-container">
          <span className="ag-eyebrow">03 — 目标用户</span>
          <h2 className="ag-title">为<strong>日常农民</strong><br />而设计。</h2>

          <div className="ag-grid-2">
            <div>
              <div className="ag-quote">
                "我想要一个开箱即用的东西。我没时间再学一个复杂的 App。"
              </div>
              <div style={{ marginTop: "40px", padding: "32px", background: "rgba(14, 165, 233, 0.05)", borderRadius: "24px", border: "1px solid rgba(14, 165, 233, 0.2)" }}>
                <h3 style={{ fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600, color: "#0EA5E9", marginBottom: "16px" }}>我们如何……</h3>
                <p style={{ fontSize: "20px", color: "#0F172A", lineHeight: 1.5, fontWeight: 500 }}>
                  如何帮助有机农民以最小的精力监测和控制病虫害，同时保持环保和数据驱动？
                </p>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div className="ag-glass-card" style={{ padding: "24px 32px" }}>
                <h3 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "12px", color: "#0F172A" }}>核心需求</h3>
                <ul className="ag-list" style={{ fontSize: "14px" }}>
                  <li>一套简单的可视化系统，无需走遍每块田地即可监测虫害暴发。</li>
                  <li>符合有机认证的非化学防控方式。</li>
                  <li>零培训、低成本的解决方案。</li>
                  <li>能随时间追踪病虫害防控效果的方式。</li>
                </ul>
              </div>
              <div className="ag-glass-card" style={{ padding: "24px 32px" }}>
                <h3 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "12px", color: "#0F172A" }}>痛点</h3>
                <ul className="ag-list" style={{ fontSize: "14px" }}>
                  <li>现有方案要么太贵，要么太复杂。</li>
                  <li>人工巡查耗时费力且不可靠，尤其在下雨天。</li>
                  <li>缺乏数据来理解病虫害的扩散规律和复发情况。</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── 04 技术探索 ── */}
        <section className="ag-section ag-section-border ag-container">
          <span className="ag-eyebrow">04 — 技术探索</span>
          <h2 className="ag-title">六个方案，<br /><strong>一个答案。</strong></h2>
          <p className="ag-desc">
            我们并不是一开始就想到机器人。我们先梳理了学术文献和现有技术，寻找科学可行且符合有机标准的方向，最终提出了六个基于不同干预逻辑的独立概念。
          </p>

          <div style={{ marginTop: "40px", padding: "28px 32px", background: "rgba(15,23,42,0.03)", borderRadius: "16px", border: "1px solid rgba(15,23,42,0.08)" }}>
            <p style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700, color: "#94A3B8", marginBottom: "16px" }}>我们从 4 个维度评估每个方案</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "16px" }}>
              {[
                { icon: "🌿", label: "有机合规", desc: "不能留下任何化学残留" },
                { icon: "📐", label: "可扩展性", desc: "适用于不同作物和田地规模" },
                { icon: "⚙️", label: "技术可行性", desc: "可用现有硬件实现" },
                { icon: "🧑‍🌾", label: "农民接受度", desc: "学习曲线低、维护成本低" },
              ].map(({ icon, label, desc }) => (
                <div key={label} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ fontSize: "20px" }}>{icon}</span>
                  <span style={{ fontSize: "13px", fontWeight: 600, color: "#0F172A" }}>{label}</span>
                  <span style={{ fontSize: "12px", color: "#94A3B8", lineHeight: 1.5 }}>{desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: "32px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px" }}>
            {[
              {
                name: "PestVision", tag: "部分选用", tagColor: "#F59E0B", selected: false,
                img: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773795418/portfolio/projects/agrox/ideation-camera-sensor.png",
                desc: "田间传感器，搭载低功耗摄像头和 MEMS 麦克风，支持双模式害虫检测。",
                why: "声音分析对物种识别过于依赖，难以验证。最终仅保留视觉部分。",
                scores: ["✓", "✓", "~", "✓"],
              },
              {
                name: "CrawlerVac", tag: "已选用", tagColor: "#10B981", selected: true,
                img: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773795422/portfolio/projects/agrox/ideation-vacuum-robot.png",
                desc: "履带机器人，搭载激光雷达导航和真空吸口，自主收集地面害虫。",
                why: "经华盛顿州立大学和加州草莓委员会的 D-vac 研究验证。无化学残留、广谱、自主性强。",
                scores: ["✓", "✓", "✓", "✓"],
              },
              {
                name: "VibeTrap", tag: "已淘汰", tagColor: "#94A3B8", selected: false,
                img: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773795421/portfolio/projects/agrox/ideation-electrode-grid.png",
                desc: "60Hz 交流电升压至 800V 直流电极网格，专门针对斑衣蜡蝉。",
                why: "仅适用于单一害虫物种，完全不满足可扩展性标准。",
                scores: ["✓", "✗", "✓", "~"],
              },
              {
                name: "LycormaHunter", tag: "已淘汰", tagColor: "#94A3B8", selected: false,
                img: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773795421/portfolio/projects/agrox/ideation-robot-arm.png",
                desc: "机械臂搭配 AI 识别，逐一击打树干上的害虫。",
                why: "在开放田地中速度太慢。机械臂增加了小农场无法承受的成本和复杂性。",
                scores: ["✓", "✗", "~", "✗"],
              },
              {
                name: "SteamBerry", tag: "合并入最终方案", tagColor: "#F59E0B", selected: false,
                img: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773795417/portfolio/projects/agrox/ideation-steam-conveyor.png",
                desc: "传送带将幼苗送过低温蒸汽腔，一次性杀灭各生命阶段的螨虫。",
                why: "蒸汽处理机制经过验证，已并入 SteamSoil。仅限育苗阶段，应用场景太窄。",
                scores: ["✓", "✗", "✓", "~"],
              },
              {
                name: "SteamSoil", tag: "已选用", tagColor: "#10B981", selected: true,
                img: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773795419/portfolio/projects/agrox/ideation-heat-injection.png",
                desc: "保温覆盖物和注射管网通过高温蒸汽对土壤灭菌，杀灭虫卵和线虫。",
                why: "解决了地下害虫生命周期的问题——这是地面真空吸虫无法覆盖的盲区。无残留，文献验证充分。",
                scores: ["✓", "✓", "✓", "✓"],
              },
            ].map(({ name, tag, tagColor, desc, why, selected, img, scores }) => (
              <div key={name} className="ag-glass-card" style={{ padding: "0", overflow: "hidden", opacity: selected ? 1 : 0.55, border: selected ? "2px solid #10B981" : "2px solid transparent", display: "flex", flexDirection: "column", filter: selected ? "none" : "grayscale(25%)" }}>
                <div style={{ position: "relative" }}>
                  <img src={img} alt={name + " 概念草图"} style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover", display: "block" }} />
                  <div style={{ position: "absolute", top: "12px", left: "12px" }}>
                    <span style={{ fontSize: "11px", fontWeight: 700, color: selected ? "#fff" : tagColor, background: selected ? "#10B981" : `rgba(255,255,255,0.9)`, padding: "4px 10px", borderRadius: "20px", letterSpacing: "0.04em" }}>
                      {selected ? "✓ 已选用" : tag}
                    </span>
                  </div>
                </div>
                <div style={{ padding: "18px 20px 20px", display: "flex", flexDirection: "column", gap: "10px", flex: 1 }}>
                  <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#0F172A" }}>{name}</h3>
                  <p style={{ fontSize: "13px", color: "#64748B", lineHeight: 1.6 }}>{desc}</p>
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                    {["有机", "可扩展", "可行", "易上手"].map((label, i) => (
                      <span key={label} style={{ fontSize: "11px", padding: "2px 8px", borderRadius: "12px", fontWeight: 600,
                        background: scores[i] === "✓" ? "rgba(16,185,129,0.12)" : scores[i] === "✗" ? "rgba(239,68,68,0.1)" : "rgba(245,158,11,0.1)",
                        color: scores[i] === "✓" ? "#10B981" : scores[i] === "✗" ? "#EF4444" : "#F59E0B"
                      }}>{scores[i]} {label}</span>
                    ))}
                  </div>
                  <p style={{ fontSize: "12px", color: "#94A3B8", lineHeight: 1.6, borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: "10px", fontStyle: "italic" }}>{why}</p>
                </div>
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
              三个入选方案分别解决同一问题的不同层次：视觉<strong>检测</strong>早期虫害、真空<strong>清除</strong>地面成虫、蒸汽<strong>灭杀</strong>地下虫卵——共同构成一套完整的无化学品系统。
            </div>
          </div>
        </section>

        {/* ── 05 信息架构 ── */}
        <section id="ia-section" className="ag-section ag-section-border ag-container">
          <span className="ag-eyebrow">05 — 信息架构</span>
          <h2 className="ag-title">应用的<br /><strong>结构设计。</strong></h2>
          <p className="ag-desc">
            在设计界面之前，我们梳理了涵盖三个维度的完整应用结构：实时数据、设备控制和系统配置——最小化导航层级，以适应时间敏感的田间操作场景。
          </p>
          <div style={{ marginTop: "48px" }}>
            <img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773802868/portfolio/projects/agrox/ia-diagram-hd.png" alt="信息架构图" style={{ width: "100%", borderRadius: "16px", display: "block" }} />
          </div>
        </section>

        {/* ── 06 产品功能 ── */}
        <section className="ag-section ag-section-border ag-container">
          <span className="ag-eyebrow">06 — 产品</span>
          <h2 className="ag-title">硬件与界面。</h2>
          <p className="ag-desc">
            将技术需求转化为一台稳健的实体机器人，以及一套为农民设计的直觉化数字控制台。
          </p>

          <div style={{ marginTop: "64px" }}>
            <div className="ag-feature-row">
              <div className="ag-feature-text">
                <h3 style={{ fontSize: "28px", fontWeight: 600, marginBottom: "16px", color: "#0F172A" }}>AI 视觉害虫识别</h3>
                <p style={{ fontSize: "16px", color: "var(--text-muted)", lineHeight: 1.6 }}>
                  机器人的车载摄像头实时扫描作物。AI 模型识别害虫种类和危害程度，并将数据记录到农民的控制台——无需人工巡田。
                </p>
              </div>
              <div className="ag-feature-visual">
                <img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773790504/portfolio/projects/agrox/hifi-field.png" alt="AI 视觉害虫识别" style={{ width: "100%", borderRadius: "16px", display: "block" }} />
              </div>
            </div>

            <div className="ag-feature-row reverse">
              <div className="ag-feature-text">
                <h3 style={{ fontSize: "28px", fontWeight: 600, marginBottom: "16px", color: "#0F172A" }}>自主病虫害管理</h3>
                <p style={{ fontSize: "16px", color: "var(--text-muted)", lineHeight: 1.6 }}>
                  部署后，机器人自主在农场内导航巡逻。结合真空吸虫（清除成虫）和蒸汽灭菌（处理土壤中的虫卵）两种方式，全程零化学品。
                </p>
              </div>
              <div className="ag-feature-visual">
                <img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773790506/portfolio/projects/agrox/hifi-vacuum.png" alt="自主病虫害管理" style={{ width: "100%", borderRadius: "16px", display: "block" }} />
              </div>
            </div>

            <div className="ag-feature-row">
              <div className="ag-feature-text">
                <h3 style={{ fontSize: "28px", fontWeight: 600, marginBottom: "16px", color: "#0F172A" }}>虫害热力图控制台</h3>
                <p style={{ fontSize: "16px", color: "var(--text-muted)", lineHeight: 1.6 }}>
                  机器人采集的数据通过简洁的移动端和网页应用可视化呈现。农民可以即时看到农场哪些区域虫害压力较高，并随时间追踪机器人干预的效果。
                </p>
              </div>
              <div className="ag-feature-visual">
                <img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773790505/portfolio/projects/agrox/hifi-info.png" alt="虫害热力图控制台" style={{ width: "100%", borderRadius: "16px", display: "block" }} />
              </div>
            </div>
          </div>
        </section>

        {/* ── 07 设计过程 ── */}
        <section className="ag-section ag-section-border ag-container">
          <span className="ag-eyebrow">07 — 设计过程</span>
          <h2 className="ag-title">从草图到现实。</h2>

          <div style={{ marginTop: "48px", display: "flex", flexDirection: "column", gap: "48px" }}>
            <div>
              <h4 style={{ fontSize: "16px", fontWeight: 600, color: "#0F172A", marginBottom: "16px" }}>01. 草图</h4>
              <div style={{ display: "flex", gap: "12px" }}>
                <img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773790734/portfolio/projects/agrox/sketch-1.png" alt="Agrox 草图 1" style={{ width: "50%", borderRadius: "12px", display: "block", border: "1.5px dashed #94A3B8" }} />
                <img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773790735/portfolio/projects/agrox/sketch-2.png" alt="Agrox 草图 2" style={{ width: "50%", borderRadius: "12px", display: "block", border: "1.5px dashed #94A3B8" }} />
              </div>
            </div>
            <div>
              <h4 style={{ fontSize: "16px", fontWeight: 600, color: "#0F172A", marginBottom: "16px" }}>02. 高保真</h4>
              <img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773791068/portfolio/projects/agrox/hifi-overview.png" alt="Agrox 高保真总览" style={{ width: "100%", borderRadius: "12px", display: "block" }} />
            </div>
            <div>
              <h4 style={{ fontSize: "16px", fontWeight: 600, color: "#0F172A", marginBottom: "16px" }}>03. 模型</h4>
              <img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773791363/portfolio/projects/agrox/model.png" alt="Agrox 实体模型" style={{ width: "100%", borderRadius: "12px", display: "block" }} />
            </div>
          </div>
        </section>

        {/* ── 08 反思 ── */}
        <section className="ag-section ag-section-border ag-container">
          <span className="ag-eyebrow">08 — 项目反思</span>
          <h2 className="ag-title">我们学到了什么，<br /><strong>还有什么悬而未决。</strong></h2>

          <div className="ag-grid-2" style={{ marginTop: "48px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div className="ag-glass-card" style={{ padding: "28px 32px" }}>
                <h3 style={{ fontSize: "16px", fontWeight: 600, color: "#0F172A", marginBottom: "12px" }}>硬件约束影响 UI 设计</h3>
                <p style={{ fontSize: "15px", color: "#64748B", lineHeight: 1.7 }}>真空和蒸汽模块无法同时运行——这个物理约束直接影响了设备状态 UI 的设计。模式需要明确且互斥，而不是隐藏在设置深处。</p>
              </div>
              <div className="ag-glass-card" style={{ padding: "28px 32px" }}>
                <h3 style={{ fontSize: "16px", fontWeight: 600, color: "#0F172A", marginBottom: "12px" }}>平板优于手机——研究驱动的决定</h3>
                <p style={{ fontSize: "15px", color: "#64748B", lineHeight: 1.7 }}>我们最初做的是手机界面。田间场景改变了我们的判断：戴着泥手套的农民需要更大的触控目标、在阳光下更好的可读性，以及能免手持放置的设备。iPad 成为主要平台。</p>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div className="ag-glass-card" style={{ padding: "28px 32px", border: "1px solid rgba(239,68,68,0.2)" }}>
                <h3 style={{ fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600, color: "#EF4444", marginBottom: "12px" }}>尚未解决</h3>
                <p style={{ fontSize: "15px", color: "#64748B", lineHeight: 1.7 }}>AI 识别精度在弱光和密集植被条件下会下降——而这在真实农场中很常见。PestVision 的声音频谱分析可以作为视觉检测的补充，但我们没有时间验证模型。这是下一次迭代中最关键的开放问题。</p>
              </div>
              <div className="ag-glass-card" style={{ padding: "28px 32px", border: "1px solid rgba(239,68,68,0.2)" }}>
                <h3 style={{ fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600, color: "#EF4444", marginBottom: "12px" }}>用户采用尚未测试</h3>
                <p style={{ fontSize: "15px", color: "#64748B", lineHeight: 1.7 }}>我们为低技术熟练度用户设计，但从未与真实农民进行可用性测试。"研究中看起来直觉化"和"田间实际可用"之间的差距是真实存在的——我们清楚地知道这一点。</p>
              </div>
            </div>
          </div>
        </section>

      </div>
      <NextProject href="/zh/projects/nirvana" title="Nirvana" role="团队负责人" theme="light" />
    </>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import NextProject from "../../../components/NextProject";

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
`;

export default function RecoPageZh() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  void scrolled;

  return (
    <>
      <style>{CSS}</style>
      <div className="reco-page">

        {/* Back link */}
        <div className="relative z-20" style={{ padding: "14px 48px" }}>
          <Link href="/zh" style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", textDecoration: "none", fontFamily: "monospace", letterSpacing: "0.06em" }}>← 首页</Link>
        </div>

        {/* Nav */}
        <nav className="reco-nav relative z-20">
          <span className="reco-nav-logo">RECO</span>
        </nav>

        {/* 01 Hero */}
        <section className="reco-section reco-section-first" id="main-content">
          <div className="reco-container">
            <div className="reco-eyebrow">学校竞赛 · iOS · Group Busy BEE · 2024</div>
            <h1 className="reco-h1">
              <span style={{ color: "rgba(240,238,233,0.9)" }}>RECO</span>
            </h1>
            <p className="reco-lead">
              一款面向 ACL 术后康复运动员的 AI 伴侣应用——通过心理支持、智能追踪和专业医学引导，帮助他们在数月枯燥的居家康复训练中保持动力。
            </p>

            <div className="reco-meta">
              {[
                { label: "我的角色", value: "API 集成 & 前端开发" },
                { label: "团队", value: "Group Busy BEE" },
                { label: "类型", value: "学校竞赛" },
                { label: "平台", value: "iOS 移动端" },
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
                <div className="reco-eyebrow">02 — 问题</div>
                <h2 className="reco-h2">最大的挑战不是身体，而是心理。</h2>
                <p style={{ fontSize: 15, color: "rgba(240,238,233,0.6)", lineHeight: 1.8, marginBottom: 20 }}>
                  青少年和大学生运动员在 ACL 手术后，很难在长达数月、枯燥重复的居家康复训练中保持动力。日常压力和负面情绪与训练依从性下降直接相关。
                </p>
                <blockquote className="reco-pullquote">
                  &ldquo;你会感到沮丧和无力。康复过程感觉遥遥无期。每天做同样的小动作，却不知道自己是否在好转。&rdquo;
                </blockquote>
              </div>
              <div>
                <div className="reco-stats">
                  {[
                    { num: "41.8%", label: "术后出现焦虑与抑郁的运动员比例" },
                    { num: "40%", label: "ACL 康复期间的抑郁发生率" },
                  ].map((s) => (
                    <div className="reco-stat" key={s.label}>
                      <span className="reco-stat-num">{s.num}</span>
                      <span className="reco-stat-label">{s.label}</span>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 12, color: "rgba(240,238,233,0.25)", marginTop: 12, lineHeight: 1.6, fontFamily: "var(--font-dm-mono,'DM Mono',monospace)" }}>
                  数据来源：Caumeil 等 — ACL 重建术后的再损伤焦虑与重返运动，162 名运动员
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 03 Solution */}
        <section className="reco-section" id="solution">
          <div className="reco-container">
            <div className="reco-eyebrow">03 — 解决方案</div>
            <h2 className="reco-h2">自主、能力、归属——动机的三大支柱。</h2>
            <p style={{ fontSize: 15, color: "rgba(240,238,233,0.6)", lineHeight: 1.8, maxWidth: 640, marginBottom: 40 }}>
              RECO 是一款基于自我决定理论（SDT）的 AI 聊天伴侣。它通过让运动员重获对康复进程的掌控感、清晰的进步反馈，以及情感支持型 AI 伴侣 VITA，来重建康复动力。
            </p>

            <div className="reco-features">
              {[
                {
                  icon: "🤖",
                  name: "角色——VITA",
                  desc: "基于 PubMed 医学研究训练的 AI 伴侣，具备专业医学知识，可提供康复指导，涵盖营养和恢复科学领域。",
                },
                {
                  icon: "📱",
                  name: "手机 IMU 传感器",
                  desc: "利用手机传感器测量腿部抬起角度、速度和幅度，对运动动作质量和进展给出精准量化反馈。",
                },
                {
                  icon: "🟩",
                  name: "桌面小组件",
                  desc: "主屏幕小组件显示康复天数和每日打卡，提升使用频率，让运动员更有陪伴感。",
                },
              ].map((f) => (
                <div className="reco-feature-card" key={f.name}>
                  <div className="reco-feature-icon">{f.icon}</div>
                  <div className="reco-feature-name">{f.name}</div>
                  <div className="reco-feature-desc">{f.desc}</div>
                </div>
              ))}
            </div>

            <img
              src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773758102/portfolio/projects/reco/features.jpg"
              alt="RECO 功能展示——VITA AI 伴侣、手机 IMU 康复追踪、主屏幕小组件"
              className="reco-feature-img"
            />
          </div>
        </section>

        {/* 04 My Contribution */}
        <section className="reco-section" id="contribution">
          <div className="reco-container">
            <div className="reco-eyebrow">04 — 我的贡献</div>
            <div style={{ marginBottom: 16 }}>
              <span className="reco-role-badge">
                <span className="reco-role-dot" />
                API 集成 &amp; 前端开发
              </span>
            </div>
            <h2 className="reco-h2">构建让 AI 成为可能的技术底层。</h2>
            <p style={{ fontSize: 15, color: "rgba(240,238,233,0.6)", lineHeight: 1.8, maxWidth: 600, marginBottom: 40 }}>
              我的重心在技术基础设施上——将外部 AI 和医疗 API 连接到前端，并构建让产品真正运转起来的界面组件。
            </p>
            <ul className="reco-contrib-list">
              {[
                {
                  num: "01",
                  title: "ChatGPT-4o.mini API 集成",
                  body: "将 OpenAI 的 GPT-4o.mini 作为驱动 VITA 的对话引擎。设计系统提示词，将模型输出限定在康复和营养领域，降低医疗场景下出现幻觉的风险。",
                },
                {
                  num: "02",
                  title: "Entrez PubMed API——医学知识管道",
                  body: "接入 NCBI Entrez PubMed API，获取关于 ACL 康复的同行评审研究文献。这让 VITA 能够访问真实的医学文献，使回答更具可信度和循证基础。",
                },
                {
                  num: "03",
                  title: "Supabase API Key 加密",
                  body: "使用 Supabase 实现服务端 API Key 管理，防止密钥暴露在客户端。确保 OpenAI 和 PubMed 的凭证不会出现在前端打包文件中。",
                },
                {
                  num: "04",
                  title: "前端开发",
                  body: "构建聊天界面、功能页面和小组件组件。专注于打造平静、亲切的视觉语言，与这款心理健康相关康复产品所需要的情感基调相匹配。",
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

        {/* 05 Tech Stack */}
        <section className="reco-section" id="tech">
          <div className="reco-container">
            <div className="reco-eyebrow">05 — 技术栈</div>
            <h2 className="reco-h2">我们用什么构建的。</h2>
            <div style={{ marginTop: 32 }}>
              <div className="reco-stack">
                {[
                  { label: "AI 模型", value: "ChatGPT-4o.mini", tag: "OpenAI API" },
                  { label: "医疗数据", value: "Entrez PubMed API——NCBI 同行评审研究数据库", tag: "MED-API" },
                  { label: "安全加密", value: "Supabase Key 加密——服务端 API Key 存储与管理", tag: "Encryption" },
                  { label: "平台", value: "iOS 移动端应用", tag: "Swift / React Native" },
                  { label: "SDT 框架", value: "自我决定理论——自主 · 能力 · 归属", tag: "心理学" },
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

        {/* 06 Reflection */}
        <section className="reco-section" id="reflection">
          <div className="reco-container">
            <div style={{ maxWidth: 680 }}>
              <div className="reco-eyebrow">06 — 项目反思</div>
              <h2 className="reco-h2">从使用 AI API 构建产品中学到的。</h2>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  { mark: "→", text: "服务端管理 API Key 是不可妥协的底线——即使是竞赛原型，将凭证暴露在前端包中也是真实的安全风险。" },
                  { mark: "→", text: "用领域专属数据（PubMed）增强 LLM 的知识底座，能显著提升专业场景下的回答质量。" },
                  { mark: "→", text: "系统提示词是一种设计产出——约束 AI 行为本身就是一个设计决策，和界面设计同等重要。" },
                  { mark: "→", text: "对于健康相关产品，AI 回应的语气和口吻与内容准确性同样重要。设计模型的人格，是工作的一部分。" },
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
      <NextProject href="/zh/projects/this-website" title="This Website" role="设计师 & 开发者" theme="dark" />
    </>
  );
}

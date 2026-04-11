"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import NextProject from "../../../components/NextProject";

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
    title: "确认感才是真正未被满足的需求",
    body: "用户常常不确定自己是否已经服过某次药，尤其在一天内需要服用多种药物时。没有任何现有工具能提供可靠的确认方式。",
    impl: "→ 设计启示：将明确的服药确认置于核心，而非仅靠提醒。",
    chips: ["#确认感", "#不确定性", "#信任"],
  },
  {
    num: "02",
    title: "通知疲劳削弱了服药依从性",
    body: "频繁、无差别的提醒让用户习惯性地忽视通知。Eleanor 的儿子反映，她会下意识关闭通知，即使那条通知很重要。",
    impl: "→ 设计启示：更少但更有意义的提醒——而不是更多。",
    chips: ["#通知疲劳", "#信噪比"],
  },
  {
    num: "03",
    title: "复杂的录入流程造成注册门槛",
    body: "Perx 等应用要求手动输入处方信息，涉及医学术语。参与者往往在设置过程中放弃，或依赖家人代为完成。",
    impl: "→ 设计启示：条形码扫描作为主要录入方式，手动输入仅作备选。",
    chips: ["#引导流程", "#摩擦", "#扫描优先"],
  },
  {
    num: "04",
    title: "简洁才能保持独立性",
    body: "老年用户希望掌控自己的日常用药，但需要界面足够平静、清晰、低认知负担。复杂的操作迫使他们求助于他人。",
    impl: "→ 设计启示：每个页面聚焦一个任务，不堆砌功能。",
    chips: ["#自主性", "#简洁", "#平静设计"],
  },
  {
    num: "05",
    title: "无障碍是基础，而非选项",
    body: "对于 65 岁以上、在认知或身体条件受限下管理用药的用户，可读性、点击区域大小和清晰的交互模式至关重要。",
    impl: "→ 设计启示：无障碍设计贯穿布局、层级与反馈的每一处。",
    chips: ["#a11y", "#老年用户", "#可读性"],
  },
];

const hmwItems = [
  "帮助 Eleanor 女士确认某次药物是否已经服用",
  "在不降低服药可靠性的前提下减少通知数量",
  "让首次添加药物的操作感觉简单易懂、不易出错",
  "让她的儿子在不越权的情况下了解异常情况",
  "通过清晰的确认状态和直白的语言建立信任感",
];

const iaItems = [
  { name: "首页", desc: "以今日为中心的服药清单，支持确认操作" },
  { name: "药物", desc: "药物详细信息、用药计划和副作用说明" },
  { name: "扫描/添加", desc: "条形码优先录入，支持手动备选" },
  { name: "护理", desc: "轻量级医患沟通，用于咨询用药问题" },
  { name: "个人", desc: "偏好设置、系统设置和护理人员访问控制" },
];

const principles = [
  { name: "确认优先", desc: "系统应让用户轻松记录药物是否已实际服用。确认是核心交互——而非提醒。" },
  { name: "简洁胜于完整", desc: "每个页面聚焦最重要的任务。次要信息按需展示，绝不一次性全部呈现。" },
  { name: "渐进式披露", desc: "补药信息、副作用详情和科普内容按需展示，不在首屏堆砌。" },
  { name: "无障碍即默认", desc: "大字体、高对比度、最小 48pt 点击区域，以及图标 + 标签的状态组合。从立项起就为 65+ 用户设计。" },
  { name: "支持中保持自主", desc: "用户感受到掌控感，同时可按需获得护理人员可见性和医患沟通——由用户自主选择启用。" },
];

const decisions = [
  {
    label: "决策 01 — 首页",
    headline: "以今日视图作为唯一信息来源",
    rows: [
      { label: "决策", value: "首页仅显示今日服药计划，提供确认/跳过操作。" },
      { label: "备选方案", value: "完整日历视图、多周计划、纯通知模式。" },
      { label: "理由", value: "将范围限定在今日，让当前任务一目了然，减少因看到未来复杂性而产生的焦虑。" },
      { label: "关联洞察", value: "#01 确认感 · #04 简洁 · #02 通知疲劳" },
    ],
  },
  {
    label: "决策 02 — 服药确认",
    headline: "将确认操作直接嵌入服药清单",
    rows: [
      { label: "决策", value: "用户可直接在首页清单中确认即将到来的服药，无需深层导航。" },
      { label: "备选方案", value: "独立确认页面、弹窗、通知回复。" },
      { label: "理由", value: "确认优先的设计理念要求操作即时可达，不能埋藏在一层点击之后。" },
      { label: "关联洞察", value: "#01 确认感 · #04 简洁 · #05 无障碍" },
    ],
  },
  {
    label: "决策 03 — 扫描添加",
    headline: "以条形码扫描作为主要录入方式",
    rows: [
      { label: "决策", value: "条形码优先的引导流程自动填充药品名称、剂量和说明。手动输入作为备选置于下方。" },
      { label: "备选方案", value: "纯手动表单、按名称搜索、拍照识别。" },
      { label: "理由", value: "对 Perx 的研究表明手动录入会导致用户放弃。扫描消除了迫使用户求助的复杂性。" },
      { label: "关联洞察", value: "#03 引导流程 · #04 简洁 · #01 信任" },
    ],
  },
  {
    label: "决策 04 — 智能通知",
    headline: "更少提醒，更高信噪比",
    rows: [
      { label: "决策", value: "通知仅在预定服药时间和漏服时触发，而非每次操作都推送。" },
      { label: "备选方案", value: "频繁签到通知、护理人员触发提醒、每次事件都推送。" },
      { label: "理由", value: "通知疲劳是研究中发现的不服药根本原因之一。减少通知量能提升每条通知的分量。" },
      { label: "关联洞察", value: "#02 通知疲劳 · #04 简洁" },
    ],
  },
  {
    label: "决策 05 — 药物详情",
    headline: "在单一视图中平衡教育性与清晰度",
    rows: [
      { label: "决策", value: "关键警告优先展示；较长的科普内容保持可访问但默认折叠。" },
      { label: "备选方案", value: "所有信息平铺显示、仅提供外部药房链接。" },
      { label: "理由", value: "渐进式披露让页面保持信息丰富而不造成压迫感——对于管理 5–7 种药物的用户尤其重要。" },
      { label: "关联洞察", value: "#04 简洁 · #01 信任 · #05 无障碍" },
    ],
  },
  {
    label: "决策 06 — 护理人员可见性",
    headline: "仅向护理人员展示异常信号",
    rows: [
      { label: "决策", value: "护理人员只能看到漏服提醒和今日摘要，而非完整计划或历史记录。" },
      { label: "备选方案", value: "完整计划视图、实时追踪看板、完全不提供护理人员访问。" },
      { label: "理由", value: "Eleanor 的儿子每天打电话确认。这个设计减轻了他的负担，同时保留了她的自主权——他看到的是异常，而非监控。" },
      { label: "关联洞察", value: "#02 通知疲劳 · #04 自主性" },
    ],
  },
];

const findings = [
  {
    num: "01",
    title: "用户不确定从哪里开始添加药物",
    body: "添加药物流程完成率为 80%，但 40% 的用户在入口处犹豫——入口的引导性不够直观。",
    metric: "完成率 80% · 40% 在入口处犹豫",
  },
  {
    num: "02",
    title: "提醒确认操作完成顺畅",
    body: "提醒确认流程达到 100% 任务完成率。用户认为这种以操作为导向的交互清晰且令人满意。",
    metric: "完成率 100% · 正向情感反馈",
  },
  {
    num: "03",
    title: "药物信息入口过于隐蔽",
    body: "药物信息任务完成率 80%。一名参与者找不到信息按钮——入口需要更突出的视觉呈现。",
    metric: "完成率 80% · 1 名用户未能找到入口",
  },
];

const designChanges = [
  { mark: "→", text: "移除了扫描与添加两个入口之间的重复，整合为一个清晰的主操作按钮。" },
  { mark: "→", text: "将\u201c跳过\u201d替换为\u201c稍后\u201d——对老年用户而言感觉更自然、更少惩罚感。" },
  { mark: "→", text: "让药物信息入口更直接、视觉上更突出。" },
];

const v1Screens = [
  {
    name: "首页",
    desc: "初版服药清单设计",
    bullets: ["无时间分组的平铺列表", "确认与跳过合并为一个模糊的点击", "无视觉确认状态"],
    images: [
      { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757774/portfolio/projects/dosecare/home.png", alt: "DoseCare 首页 v1" },
      { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757775/portfolio/projects/dosecare/home1.png", alt: "DoseCare 首页 v1 变体" },
    ],
  },
  {
    name: "添加药物",
    desc: "手动优先录入",
    bullets: ["首屏即要求输入医学术语", "扫描作为次要选项，埋藏在表单下方", "扫描后无自动填充"],
    images: [
      { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757765/portfolio/projects/dosecare/Scan.png", alt: "DoseCare 扫描页 v1" },
      { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757781/portfolio/projects/dosecare/scan-confirm.png", alt: "DoseCare 扫描确认 v1" },
      { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757770/portfolio/projects/dosecare/add.png", alt: "DoseCare 添加药物 v1" },
    ],
  },
  {
    name: "药物详情",
    desc: "一次性展示所有信息",
    bullets: ["警告、剂量、计划、副作用全部平铺", "无渐进式披露", "对 65+ 用户造成信息过载"],
    images: [
      { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757777/portfolio/projects/dosecare/medicine.png", alt: "DoseCare 药物详情 v1" },
      { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757778/portfolio/projects/dosecare/refill.png", alt: "DoseCare 补药页 v1" },
    ],
  },
];

const screenGroups = [
  {
    name: "首页与确认",
    desc: "今日服药的唯一信息来源",
    noWrap: true,
    bullets: [
      "仅显示今日服药——一次一个任务，不展示未来复杂性",
      "直接在清单中确认或跳过，无需额外导航",
      "Dynamic Island 集成，以环境感知方式提醒服药，不打断当前操作",
    ],
    images: [
      { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757727/portfolio/projects/dosecare/Home/Dynamic-Island-1.png", alt: "DoseCare Dynamic Island 通知" },
      { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757728/portfolio/projects/dosecare/Home/Dynamic-Island-2.png", alt: "DoseCare Dynamic Island 展开" },
      { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773760253/portfolio/projects/dosecare/Home/Home-1.png", alt: "DoseCare 首页变体" },
      { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773760254/portfolio/projects/dosecare/Home/home-2.png", alt: "DoseCare 首页" },
      { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1774491245/portfolio/projects/dosecare/Apple-Watch-Ultra.png", alt: "DoseCare Apple Watch Ultra — 首页与确认", imgStyle: { height: "240px", width: "auto" } },
    ],
  },
  {
    name: "药物管理",
    desc: "渐进式披露的完整药物管理",
    bullets: [
      "药物列表一览剂量、计划和状态",
      "详情页按需展示警告和副作用，不在首屏堆砌",
      "补药流程一键直达医生或药房",
    ],
    images: [
      { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757734/portfolio/projects/dosecare/Med/Medication-List.png", alt: "DoseCare 药物列表" },
      { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757733/portfolio/projects/dosecare/Med/Medication-List-6.png", alt: "DoseCare 药物列表变体" },
      { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757732/portfolio/projects/dosecare/Med/Medication-Info-2.png", alt: "DoseCare 药物信息" },
      { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757731/portfolio/projects/dosecare/Med/Medication-Enter-Time-2.png", alt: "DoseCare 设置时间" },
      { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757730/portfolio/projects/dosecare/Med/Medication-Enter-Time-1-2.png", alt: "DoseCare 设置时间变体" },
      { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757734/portfolio/projects/dosecare/Med/Medication-refill-2.png", alt: "DoseCare 药物补充" },
      { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757735/portfolio/projects/dosecare/Med/Medication-refill-Doctor-2.png", alt: "DoseCare 联系医生" },
      { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757736/portfolio/projects/dosecare/Med/Medication-refill-Pharma-2.png", alt: "DoseCare 联系药房" },
    ],
  },
  {
    name: "引导注册",
    desc: "任何人都能独立完成的扫描优先注册",
    bullets: [
      "条形码扫描自动填充药品名称、剂量和说明——无需医学知识",
      "以日常语言确认用药计划，无医学术语",
      "DOSE TAG 配对，无需解锁手机即可完成物理确认",
    ],
    images: [
      { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773760257/portfolio/projects/dosecare/Onboard/Add-Medicine-2.png", alt: "第 1 步——找到你的药物" },
      { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773760256/portfolio/projects/dosecare/Onboard/Add-Medicine-1-2.png", alt: "扫描处方" },
      { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757753/portfolio/projects/dosecare/Onboard/Confirm-2.png", alt: "第 2 步——确认药物" },
      { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773760259/portfolio/projects/dosecare/Onboard/Add-Medicine.png", alt: "第 3 步——设置时间" },
      { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757763/portfolio/projects/dosecare/Onboard/Tag-6.png", alt: "第 4 步——添加标签" },
    ],
  },
  {
    name: "趋势与历史",
    desc: "不造成数据过载的依从性洞察",
    bullets: [
      "各药物的每周依从性评分与趋势折线",
      "AI 生成的洞察卡片，呈现用户可能忽视的规律",
      "历史日历，一览过去服药记录",
    ],
    images: [
      { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757769/portfolio/projects/dosecare/Trend/Trend.png", alt: "DoseCare 趋势洞察" },
      { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757768/portfolio/projects/dosecare/Trend/History-2.png", alt: "DoseCare 历史记录" },
    ],
  },
  {
    name: "护理人员与个人",
    desc: "自主性得到保障，支持随时可用",
    bullets: [
      "护理人员视图仅显示漏服异常——而非完整计划监控",
      "个人页面管理通知偏好和无障碍设置",
      "护理人员访问权限为选择性开启，完全由患者控制",
    ],
    images: [
      { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757724/portfolio/projects/dosecare/Caregiver%20and%20profile/Caregiver-3.png", alt: "DoseCare 护理人员视图" },
      { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757725/portfolio/projects/dosecare/Caregiver%20and%20profile/Profile-3.png", alt: "DoseCare 个人设置" },
    ],
  },
];

const a11yRows = [
  { label: "排版", value: "正文最小 15pt，行高 1.8" },
  { label: "触控区域", value: "所有交互元素最小 48pt" },
  { label: "配色系统", value: "#2B5EE8 主色——相对背景最低 4.5:1 对比度" },
  { label: "动效", value: "遵守 prefers-reduced-motion；无视差或自动播放" },
  { label: "状态表达", value: "所有状态使用图标 + 标签——不依赖单一颜色传达信息" },
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
      name: '仪表盘',
      items: [
        { type: 'l2', label: '每日时间线视图' },
        { type: 'l2', label: '优先事项区块' },
        { type: 'l2', label: '今日概览' },
        { type: 'l3', label: '已完成 / 总数' },
        { type: 'l3', label: '下次服药倒计时' },
        { type: 'l3', label: '漏服提示' },
      ],
    },
    {
      name: '药物',
      items: [
        { type: 'l2', label: '搜索列表' },
        { type: 'l2', label: '药物详情' },
        { type: 'l3', label: '剂量与计划' },
        { type: 'l3', label: '服用说明' },
        { type: 'l3', label: 'AI 摘要' },
        { type: 'l3', label: '补药状态' },
      ],
    },
    {
      name: '趋势',
      items: [
        { type: 'l2', label: '趋势' },
        { type: 'l3', label: '趋势图表' },
        { type: 'l3', label: 'AI 洞察卡片' },
        { type: 'l3', label: '周评分' },
        { type: 'l2', label: '历史' },
        { type: 'l3', label: '药物分项' },
        { type: 'l3', label: '历史日历' },
      ],
    },
    {
      name: '护理网络',
      items: [
        { type: 'l2', label: '护理人员列表' },
        { type: 'l2', label: '权限管理' },
      ],
    },
    {
      name: '个人',
      items: [
        { type: 'l2', label: '个人信息' },
        { type: 'l2', label: '无障碍设置' },
        { type: 'l2', label: '通知设置' },
        { type: 'l2', label: '设备设置' },
        { type: 'l3', label: 'Apple Watch' },
        { type: 'l3', label: 'Tag 标签' },
      ],
    },
  ];

  return (
    <div
      style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', background: '#F9F9F6', border: '1px solid #E4E0DB', borderRadius: 8, padding: '36px 28px 28px' }}
      role="img"
      aria-label="DoseCare 信息架构——主应用分为仪表盘、药物、趋势、护理网络和个人五个模块。另有独立的引导流程和系统层。"
    >
      <div style={{ minWidth: 860 }}>

        {/* Root node */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={ns('root')}>主应用</div>
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
            引导注册流程
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 0, flexWrap: 'wrap' }}>
            {['角色选择', '无障碍设置', '添加药物', '提醒设置', 'DOSE TAG 配对'].map((step, i, arr) => (
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
            系统层
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <div style={ns('sblue')}>Watch 确认</div>
            <div style={ns('sblue')}>推送提醒</div>
            <div style={ns('sblue')}>护理人员提醒</div>
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
  const neutral = PAD_T + (H - PAD_T - PAD_B) / 2;

  const stages = [
    { label: "忘记服药\n身体不适", before: 0.55, after: 0.55 },
    { label: "医生开具\n处方", before: 0.48, after: 0.45 },
    { label: "Perx 录入\n困难重重", before: 0.72, after: 0.28 },
    { label: "儿子协助\n设置计划", before: 0.62, after: 0.18 },
    { label: "通知疲劳\n仍然忘服", before: 0.75, after: 0.10 },
    { label: "健康结果", before: 0.88, after: 0.05 },
  ];

  const innerW = W - PAD_L - PAD_R;
  const innerH = H - PAD_T - PAD_B;
  const xStep = innerW / (stages.length - 1);

  const sx = (i: number) => PAD_L + i * xStep;
  const sy = (v: number) => PAD_T + v * innerH;

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

  const bottom = PAD_T + innerH;
  const beforeArea = `${beforePath} L ${sx(stages.length - 1)} ${bottom} L ${sx(0)} ${bottom} Z`;
  const afterArea = `${afterPath} L ${sx(stages.length - 1)} ${bottom} L ${sx(0)} ${bottom} Z`;

  return (
    <div className="dc-journey-wrap">
      <div className="dc-journey-title">
        Eleanor 女士 — 用药管理旅程
        <div className="dc-journey-legend">
          <div className="dc-legend-item">
            <div className="dc-legend-dot" style={{ background: "#6B9E8A" }} aria-hidden="true" />
            使用 DoseCare 之前
          </div>
          <div className="dc-legend-item">
            <div className="dc-legend-dot" style={{ background: "#2B5EE8" }} aria-hidden="true" />
            使用 DoseCare 之后
          </div>
        </div>
      </div>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width={W}
        style={{ display: "block", overflow: "visible" }}
        aria-label="用户旅程图，展示 Eleanor 女士使用 DoseCare 前后的情感体验。使用前：持续负面并呈下降趋势。使用后：从第 3 阶段开始呈改善轨迹。"
        role="img"
      >
        <text x={PAD_L - 8} y={PAD_T + 14} textAnchor="end" fontSize="9" fill="#9B9690" fontFamily="var(--font-dm-mono,'DM Mono',monospace)">正面</text>
        <text x={PAD_L - 8} y={PAD_T + innerH - 4} textAnchor="end" fontSize="9" fill="#9B9690" fontFamily="var(--font-dm-mono,'DM Mono',monospace)">负面</text>

        <line x1={PAD_L} y1={neutral} x2={W - PAD_R} y2={neutral} stroke="#E4E0DB" strokeWidth="1" />

        <path d={beforeArea} fill="#6B9E8A" fillOpacity="0.18" />
        <path d={afterArea} fill="#2B5EE8" fillOpacity="0.15" />

        <path d={beforePath} fill="none" stroke="#6B9E8A" strokeWidth="2" />
        <path d={afterPath} fill="none" stroke="#2B5EE8" strokeWidth="2" />

        {stages.map((s, i) => {
          const x = sx(i);
          const lines = s.label.split("\n");
          return (
            <g key={i}>
              <circle cx={x} cy={sy(s.before)} r="5" fill="#6B9E8A" />
              <circle cx={x} cy={sy(s.after)} r="5" fill="#2B5EE8" />
              <line x1={x} y1={PAD_T + innerH + 8} x2={x} y2={PAD_T + innerH + 2} stroke="#E4E0DB" strokeWidth="1" />
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

export default function DoseCarePageZh() {
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

        <a className="dc-skip" href="#main-content">跳转到主内容</a>

        {/* ── Back link ── */}
        <div className="relative z-20" style={{ padding: "14px 48px" }}>
          <Link href="/zh" style={{ fontSize: 12, color: "#9B9690", textDecoration: "none", fontFamily: "var(--font-dm-mono,'DM Mono',monospace)", letterSpacing: "0.06em" }}>← 首页</Link>
        </div>

        {/* ── Nav ── */}
        <nav className={`dc-nav${scrolled ? " scrolled" : ""}`} aria-label="DoseCare 案例研究">
          <div className="dc-nav-logo">
            <span className="dc-nav-dot" aria-hidden="true" />
            DoseCare
          </div>
          <div className="dc-nav-links">
            <a href="#problem">问题</a>
            <a href="#research">研究</a>
            <a href="#insights">洞察</a>
            <a href="#design">设计</a>
            <a href="#testing">测试</a>
            <a href="#outcomes">总结</a>
          </div>
        </nav>

        {/* ── 01 Hero ── */}
        <section className="dc-section dc-section-first" id="main-content">
          <div className="dc-container">
            <div className="dc-hero-grid">
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                <div className="dc-eyebrow">UX 案例研究 · iOS · 2025</div>
                <h1 className="dc-hero-title">
                  <span className="t-light">面向</span><span className="t-blue">65+</span><br />
                  <span className="t-light">老年人的</span><br />
                  <span className="t-bold">用药依从</span>
                </h1>
                <div className="dc-rule" aria-hidden="true" />
                <p style={{ fontSize: 15, color: "#4A4740", lineHeight: 1.8, marginBottom: 24 }}>
                  DoseCare 是一款专为老年用户设计的 iOS 用药管理应用，聚焦于一个核心未满足需求——服药确认感。基于 9 次用户访谈和 129 条研究笔记构建。
                </p>
                <div className="dc-stats" role="list" aria-label="项目数据统计">
                  {[
                    { num: "9", label: "访谈人数" },
                    { num: "129", label: "研究笔记" },
                    { num: "5", label: "关键洞察" },
                    { num: "65+", label: "目标年龄" },
                  ].map((s) => (
                    <div className="dc-stat" role="listitem" key={s.label}>
                      <span className="dc-stat-num">{s.num}</span>
                      <span className="dc-stat-label">{s.label}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 24 }}>
                  <div style={{ fontFamily: "var(--font-dm-mono,'DM Mono',monospace)", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.08em", color: "#9B9690", marginBottom: 8 }}>
                    角色与工具
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    <span className="dc-chip">独立 UX 设计师</span>
                    {["Figma", "Stark", "SF Symbols", "iOS"].map((t) => (
                      <span key={t} className="dc-chip dc-chip-neutral">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773788345/portfolio/projects/dosecare/hero.jpg" alt="DoseCare 应用展示" style={{ width: '100%', borderRadius: '16px', display: 'block' }} />
              </div>
            </div>
          </div>
        </section>

        {/* ── 02 Problem ── */}
        <section className="dc-section" id="problem">
          <div className="dc-container">
            <div className="dc-prose">
            <div className="dc-eyebrow">02 — 问题</div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 24, color: "#1C1A16" }}>
              现有应用未能解决的缺口
            </h2>
            <p style={{ fontSize: 15, color: "#4A4740", lineHeight: 1.8, marginBottom: 20 }}>
              管理多种每日药物的老年人面临的挑战不仅仅是按时服药。问题往往不在于记住要吃药——而在于记不清是否已经吃过了。现有的提醒类应用只会发送通知，却无法提供确认、无法应对不确定状态，也无法证明服药依从性。
            </p>
            <p style={{ fontSize: 15, color: "#4A4740", lineHeight: 1.8, marginBottom: 20 }}>
              Perx 等应用要求手动输入复杂的处方信息，许多 65 岁以上的用户无法独立完成。这导致在产品还未创造任何价值之前，用户就不得不依赖家人——从第一步就开始了。
            </p>
            <blockquote className="dc-pullquote">
              &ldquo;我们如何设计一种用药体验，既帮助老年人保持独立，又让服药依从性变得更可见、更易理解、更值得信赖？&rdquo;
            </blockquote>
            <ul className="dc-problem-list" aria-label="核心问题领域">
              {[
                "提醒到达了，但用户没有办法确认是否已经服过药",
                "通知疲劳导致重要提醒被习惯性忽视",
                "复杂的应用注册流程迫使用户依赖家人",
                "护理人员无法获得可靠的服药信息，又怕越权干涉",
                "医患沟通与用药记录相互割裂",
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
            <div className="dc-eyebrow">03 — 研究</div>
            <div className="dc-grid-2">
              <div>
                <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 16, color: "#1C1A16" }}>
                  9 次访谈 · 129 条笔记
                </h2>
                <p style={{ fontSize: 15, color: "#4A4740", lineHeight: 1.8, marginBottom: 16 }}>
                  针对患者和护理人员进行半结构化访谈，对医生视角进行二手研究，并通过亲和图与标签化方式进行分析综合。129 条笔记经过清洗、标记并归纳为不确定性、信息过载、提醒疲劳和支持断层等主题。
                </p>
                <p style={{ fontSize: 15, color: "#4A4740", lineHeight: 1.8, marginBottom: 24 }}>
                  核心发现改变了产品方向：服药依从性不是调度问题，而是信心问题。
                </p>

                <div style={{ fontFamily: "var(--font-dm-mono,'DM Mono',monospace)", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.08em", color: "#9B9690", marginBottom: 12 }}>
                  研究方法
                </div>
                <div className="dc-table" role="table" aria-label="研究方法详情">
                  {[
                    { label: "方法", value: "半结构化访谈（患者 + 护理人员）、二手研究（医生视角）、亲和图 + 标签综合分析" },
                    { label: "参与者", value: "共 9 人 · 患者 + 护理人员 · 主要受访者：患有慢性病的 65 岁以上成人" },
                    { label: "访谈时长", value: "每次 45–60 分钟" },
                    { label: "笔记", value: "129 条笔记，标记并归纳为主题" },
                    { label: "关注领域", value: "现有日常习惯、漏服原因、护理人员核实方式、医患沟通模式" },
                    { label: "核心发现", value: "服药依从性不是调度问题——而是信心问题" },
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
                <div className="dc-persona" aria-label="主要用户画像：Eleanor 女士">
                  <div className="dc-persona-header">
                    <div className="dc-persona-name">Eleanor 女士</div>
                    <div className="dc-persona-sub">71 岁 · 独居 · 儿子为远程护理人员</div>
                  </div>
                  <div className="dc-persona-quote">
                    &ldquo;我吃了这么多年的药，有时真的记不清今天的药吃了没有。&rdquo;
                  </div>
                  <div className="dc-table" role="table" aria-label="Eleanor 用户画像详情">
                    {[
                      { label: "现状", value: "每天管理 6 种药物。曾尝试使用 Perx，但在注册中途放弃。" },
                      { label: "目标", value: "保持独立，确信自己在正确管理健康，尽量不麻烦儿子。" },
                      { label: "痛点", value: "不确定是否已经服过某次药。太多通知让她学会了习惯性忽视。应用录入感觉像填写医疗表格，让她不知所措。" },
                    ].map((r) => (
                      <div className="dc-row" role="row" key={r.label}>
                        <div className="dc-label" role="rowheader">{r.label}</div>
                        <div className="dc-value" role="cell">{r.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Secondary Persona */}
                <div className="dc-persona" style={{ marginTop: 16 }} aria-label="次要用户画像：Michael">
                  <div className="dc-persona-header" style={{ background: "#4A4740" }}>
                    <div className="dc-persona-name">Michael</div>
                    <div className="dc-persona-sub">44 岁 · Eleanor 的儿子 · 远程护理人员</div>
                  </div>
                  <div className="dc-persona-quote">
                    &ldquo;我每天都要给她打电话确认她吃药了。但我真的没办法判断她到底有没有吃。&rdquo;
                  </div>
                  <div className="dc-table" role="table" aria-label="Michael 用户画像详情">
                    {[
                      { label: "核心需求", value: "只在出现异常时收到通知——而非完整的每日记录。" },
                      { label: "核心矛盾", value: "想支持母亲，但不希望让她感到被监视或被认为无能。" },
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
              <div className="dc-eyebrow">04 — 关键洞察</div>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 600, letterSpacing: "-0.02em", color: "#1C1A16", marginBottom: 8 }}>
                研究揭示了什么
              </h2>
              <p style={{ fontSize: 15, color: "#9B9690", marginBottom: 40 }}>
                9 次访谈 · 129 条笔记 · 亲和图分析 → 5 项发现
              </p>
              <div>
                {insights.map((ins) => (
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
            <div className="dc-eyebrow">05 — 定义问题</div>
            <div>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 600, letterSpacing: "-0.02em", color: "#1C1A16", marginBottom: 24 }}>
                我们如何……
              </h2>
              <ul className="dc-hmw-list" aria-label="设计机会陈述">
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
              <div className="dc-eyebrow">06 — 设计决策</div>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 600, letterSpacing: "-0.02em", color: "#1C1A16", marginBottom: 8 }}>
                为什么每次都选择更简单
              </h2>
              <p style={{ fontSize: 15, color: "#9B9690", marginBottom: 48 }}>
                每一个决策都将减少摩擦置于增加功能之上。
              </p>
              {decisions.map((d) => (
                <div className="dc-decision" key={d.label}>
                  <p className="dc-decision-label">{d.label}</p>
                  <h3 className="dc-decision-headline">{d.headline}</h3>
                  <div className="dc-table" role="table" aria-label={`${d.label} 详情`}>
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
            <div className="dc-eyebrow">07 — 设计原则</div>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 600, letterSpacing: "-0.02em", color: "#1C1A16", marginBottom: 8 }}>
              影响每一个决策的五条价值观
            </h2>
            <p style={{ fontSize: 15, color: "#9B9690", marginBottom: 32 }}>
              直接从研究洞察中提炼而来。每个设计决策都依据这些原则进行评估。
            </p>
            <ul className="dc-principles-list" aria-label="设计原则">
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
            <div className="dc-eyebrow">08 — 初版设计</div>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 600, letterSpacing: "-0.02em", color: "#1C1A16", marginBottom: 8 }}>
              高保真 v1——经过测试，未正式发布
            </h2>
            <p style={{ fontSize: 15, color: "#9B9690", marginBottom: 48 }}>
              直接基于设计决策构建。可用性测试揭示了这些假设在哪里失效。
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
            <div className="dc-eyebrow">09 — 可用性测试</div>
            <div className="dc-grid-2">
              <div>
                <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 600, letterSpacing: "-0.02em", color: "#1C1A16", marginBottom: 16 }}>
                  它真的好用吗？
                </h2>
                <p style={{ fontSize: 15, color: "#4A4740", lineHeight: 1.8, marginBottom: 24 }}>
                  围绕三个核心流程进行任务式测试：添加药物、响应提醒和查找药物信息。目标是识别用户在哪里犹豫、哪些操作符合直觉，以及哪些需要更清晰的引导。
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
                  测试后的设计改动
                </div>
                <ul className="dc-changes-list" aria-label="测试驱动的设计改动">
                  {designChanges.map((c, i) => (
                    <li className="dc-change-item" key={i}>
                      <span className="dc-change-mark" aria-hidden="true">{c.mark}</span>
                      <span>{c.text}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: 32, fontFamily: "var(--font-dm-mono,'DM Mono',monospace)", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.08em", color: "#9B9690", marginBottom: 16 }}>
                  测试反思
                </div>
                <p style={{ fontSize: 14, color: "#4A4740", lineHeight: 1.7 }}>
                  测试验证了提醒确认流程清晰且令人满意——印证了确认优先模式的正确性。同时暴露了引导注册和信息发现中的摩擦，再次证明入口处的清晰度与核心流程同样重要。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 10 Information Architecture ── */}
        <section className="dc-section" id="ia">
          <div className="dc-container">
            <div className="dc-eyebrow">10 — 信息架构</div>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 600, letterSpacing: "-0.02em", color: "#1C1A16", marginBottom: 8 }}>
              最终应用结构
            </h2>
            <p style={{ fontSize: 15, color: "#9B9690", marginBottom: 32 }}>
              患者端应用——5 个标签页。经可用性测试后优化。
            </p>
            <IADiagram />
          </div>
        </section>

        {/* ── 11 Final Design ── */}
        <section className="dc-section" id="final-design">
          <div className="dc-container">
            <div className="dc-eyebrow">11 — 最终设计</div>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 600, letterSpacing: "-0.02em", color: "#1C1A16", marginBottom: 48 }}>
              高保真界面
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
                  <div className="dc-screen" role="img" aria-label={`${group.name} 占位图`}>
                    [ 设计进行中 ]
                  </div>
                )}
                <ul className="dc-screen-bullets">
                  {group.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── 12 Reflection ── */}
        <section className="dc-section" id="outcomes">
          <div className="dc-container">
            <div className="dc-prose">
            <div className="dc-eyebrow">12 — 项目反思</div>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 600, letterSpacing: "-0.02em", color: "#1C1A16", marginBottom: 32 }}>
              成果与反思
            </h2>
            <h3 className="dc-refl-sub">做得好的地方</h3>
            <ul className="dc-refl-list">
              <li>确认优先模式让老年用户获得了切实的完成感——测试中提醒流程的 100% 任务完成率印证了这一点</li>
              <li>条形码优先的引导注册直接解决了 Perx 的痛点，无需医学知识即可完成设置</li>
              <li>仅推送异常的护理人员提醒减轻了 Michael 每日打电话确认的负担，同时保留了 Eleanor 的独立感</li>
              <li>研究清晰揭示出"信心"而非"提醒"才是真正的问题所在，为整个设计方向提供了有力依据</li>
            </ul>
            <h3 className="dc-refl-sub">如果重来我会怎么做</h3>
            <ul className="dc-refl-list">
              <li>更早测试扫描备选方案——条形码识别失败时的错误恢复引导只在可用性测试中才暴露出来</li>
              <li>专门针对 65 岁以上用户开展更多有主持人的测试，以便在实际使用场景中发现无障碍问题</li>
              <li>将护理人员端应用与患者流程并行设计，而非事后补充</li>
            </ul>
            <h3 className="dc-refl-sub">下一步</h3>
            <ul className="dc-refl-list">
              <li>针对 65 岁以上用户群体进行更多有主持人的测试，重点关注引导注册和信息发现环节</li>
              <li>设计仅推送异常提醒的护理人员看板原型</li>
              <li>探索日历和药房集成，用于医生备注和补药计划</li>
              <li>研究语音提醒作为低视力用户的替代确认方式</li>
            </ul>
            <blockquote className="dc-pullquote" style={{ marginTop: 48 }}>
              &ldquo;DoseCare 让我明白，为脆弱用户群体设计的最佳方案不是更多功能——而是对单一核心问题的极致专注。&rdquo;
            </blockquote>
            </div>
          </div>
        </section>

      </div>
      <NextProject href="/zh/projects/agrox" title="Agrox" role="UX 设计师" theme="light" />
    </>
  );
}

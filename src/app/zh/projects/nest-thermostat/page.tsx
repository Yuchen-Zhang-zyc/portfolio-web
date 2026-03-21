"use client";

import Link from "next/link";
import React, { useEffect } from 'react';
import "../../../projects/nest-thermostat/nest.css";
import NextProject from "../../../components/NextProject";

export default function NestThermostatProjectZh() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

    const handlePopState = () => {
      setTimeout(() => {
        document.querySelectorAll('.reveal:not(.visible)').forEach((el) => {
          el.classList.add('visible');
        });
      }, 0);
    };
    window.addEventListener('popstate', handlePopState);

    return () => {
      io.disconnect();
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return (
    <>
    <div className="nest-page">

      {/* ── 返回链接 ── */}
      <div className="relative z-20" style={{ padding: '14px 48px' }}>
        <Link href="/zh" style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', textDecoration: 'none', fontFamily: 'monospace', letterSpacing: '0.06em' }}>← 首页</Link>
      </div>

      {/* ══ HERO ══ */}
      <div className="hero">
        <span className="hero-label">UX / 产品重设计 · SCAD · 2026</span>
        <h1>简化智能<br />温度<em>控制。</em></h1>
        <p className="hero-sub">对 Nest 恒温器生态系统的全面重设计——消除认知摩擦，让系统状态一目了然，统一跨设备体验。</p>

        <div className="hero-images" style={{ position: 'relative' }}>
          <div className="hero-glow hero-glow-heat" aria-hidden="true"></div>
          <div className="hero-glow hero-glow-cool" aria-hidden="true"></div>
          <img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773757831/portfolio/projects/nest-thermostat/hero_phones.png" alt="Nest 应用重设计" style={{ height: '100%', width: '100%', objectFit: 'contain', position: 'relative', zIndex: 1 }} />
        </div>

        <div className="hero-meta">
          <div className="mi"><div className="ml">角色</div><div className="mv">UX 设计师</div></div>
          <div className="mi"><div className="ml">周期</div><div className="mv">10 周</div></div>
          <div className="mi"><div className="ml">工具</div><div className="mv">Figma · Protopie</div></div>
          <div className="mi"><div className="ml">类型</div><div className="mv">交互重设计</div></div>
        </div>
      </div>

      {/* ══ 第 1 节：产品背景 ══ */}
      <section className="section bordered" id="context">
        <div className="wrap">
          <div className="reveal"><div className="eyebrow">01 — 产品背景</div></div>
          <div className="reveal d1"><h2 className="ttl">一款将自身复杂性<br />暴露给用户的智能设备。</h2></div>
          <div className="reveal d2"><p className="bod">Nest 旨在自动管理家庭温度，但很多用户一打开 App 就遇到了阻碍——系统把内部运行逻辑暴露出来，而不是接受用户意图。本项目重新思考智能系统应该如何辅助用户，而不是给用户增加负担。</p></div>

          <div className="context-grid reveal d2" style={{ marginTop: '64px' }}>
            <div className="ctx-card">
              <h3>双阈值复杂度</h3>
              <p>用户必须分别设置制热和制冷阈值，才能调整一个简单的温度目标——这把本该隐藏的 HVAC 逻辑暴露给了用户。</p>
            </div>
            <div className="ctx-card">
              <h3>排程设置摩擦</h3>
              <p>横向拖动时间轴需要反复输入数值。一个对产品价值至关重要的任务，却需要太多步骤才能完成。</p>
            </div>
            <div className="ctx-card">
              <h3>割裂的心智模型</h3>
              <p>硬件设备和手机 App 呈现了两种不同的交互范式。在两者之间切换时，用户对系统的理解会被重置。</p>
            </div>
            <div className="ctx-card">
              <h3>能耗节省不可见</h3>
              <p>省电模式静默运行，用户无法将日常操作与实际能耗或费用关联起来，削弱了对产品核心功能的参与感。</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 第 2 节：问题空间 ══ */}
      <section className="section alt bordered" id="problems">
        <div className="wrap">
          <div className="reveal"><div className="eyebrow">02 — 问题空间</div></div>
          <div className="reveal d1"><h2 className="ttl">四个摩擦点。</h2></div>
          <div className="reveal d2"><p className="bod">研究揭示了用户持续遇到困难的具体位置——不是某个单独功能的问题，而是整个交互模型将系统精确性置于用户意图之上的根本缺陷。</p></div>

          <div className="problem-grid reveal d2">
            <div className="p-card"><span className="p-num">01</span><h3>制热与制冷逻辑令人困惑</h3><p>用户必须理解 HVAC 阈值才能调整温度，系统将技术知识作为基础使用的前提条件。</p></div>
            <div className="p-card"><span className="p-num">02</span><h3>排程设置步骤过多</h3><p>在横向时间轴上拖动并反复输入数值，给每天都需要执行的任务带来了大量摩擦。</p></div>
            <div className="p-card"><span className="p-num">03</span><h3>跨设备体验不一致</h3><p>硬件和手机上不同的交互模型让学习成本翻倍，在设备间切换时会动摇用户信心。</p></div>
            <div className="p-card"><span className="p-num">04</span><h3>缺乏能耗透明度</h3><p>节能功能没有清晰的反馈，用户无法理解自己的操作如何影响能耗或费用。</p></div>
          </div>
        </div>
      </section>

      {/* ══ 第 3 节：现有设计 ══ */}
      <section className="section alt bordered" id="existing">
        <div className="wrap">
          <div className="reveal"><div className="eyebrow">03 — 现有设计</div></div>
          <div className="reveal d1"><h2 className="ttl">当前体验<br />是什么样的。</h2></div>
          <div className="reveal d2"><p className="bod">在重设计之前，我们记录了当前 Nest 在硬件和手机端的体验——也就是用户今天正在与之挣扎的界面。</p></div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '64px' }} className="reveal d1">

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ background: '#141414', borderRadius: '20px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 clamp(16px, 8vw, 114px)', height: '512px' }}>
                <div style={{ width: '260px', height: '100%', position: 'relative', flexShrink: 0 }}>
                  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '360px', height: '360px', overflow: 'hidden' }}>
                    <img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773757864/portfolio/projects/nest-thermostat/thermo_schedule.png" alt="原始 Nest 恒温器 — 横向排程" style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '168.78%', maxWidth: 'none' }} />
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--orange)', letterSpacing: '0.06em', textTransform: 'uppercase', flexShrink: 0, marginTop: '2px' }}>P.02</span>
                <div>
                  <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--white)', marginBottom: '5px' }}>恒温器 — 横向排程</p>
                  <p style={{ fontSize: '13px', fontWeight: 300, color: 'var(--gray)', lineHeight: 1.6 }}>温度节点散布在二维网格上，没有清晰的层级结构——用户必须解读坐标才能理解自己的排程。</p>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ background: '#141414', borderRadius: '20px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 clamp(16px, 10vw, 144px)', height: '512px' }}>
                <div style={{ width: '200px', height: '433px', borderRadius: '28px', overflow: 'hidden', boxShadow: '0 20px 48px rgba(0,0,0,0.2)', flexShrink: 0 }}>
                  <img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773757860/portfolio/projects/nest-thermostat/old_energy.jpg" alt="原始应用 — 能耗历史" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--orange)', letterSpacing: '0.06em', textTransform: 'uppercase', flexShrink: 0, marginTop: '2px' }}>P.04</span>
                <div>
                  <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--white)', marginBottom: '5px' }}>手机 App — 能耗历史</p>
                  <p style={{ fontSize: '13px', fontWeight: 300, color: 'var(--gray)', lineHeight: 1.6 }}>以条形长度展示用量，没有费用上下文。数据存在，但与用户行为脱节——没有可操作的反馈或节省估算。</p>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }} className="reveal d2">
              <div style={{ background: '#141414', borderRadius: '20px', overflow: 'hidden', padding: '28px 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '220px' }}>
                <img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773757862/portfolio/projects/nest-thermostat/old_schedule_week.png" alt="原始应用 — 每周制热排程" style={{ width: '100%', borderRadius: '10px', display: 'block', boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }} />
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--orange)', letterSpacing: '0.06em', textTransform: 'uppercase', flexShrink: 0, marginTop: '2px' }}>P.02</span>
                <div>
                  <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--white)', marginBottom: '5px' }}>手机 App — 每周排程</p>
                  <p style={{ fontSize: '13px', fontWeight: 300, color: 'var(--gray)', lineHeight: 1.6 }}>七天排列在同一横轴上，用户需要横向滚动才能找到时间段——在窄屏手机上既迷失方向，又缺乏上下文。</p>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }} className="reveal d3">
              <div style={{ background: '#141414', borderRadius: '20px', overflow: 'hidden', padding: '28px 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '220px' }}>
                <img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773757861/portfolio/projects/nest-thermostat/old_schedule_day.png" alt="原始应用 — 单日编辑" style={{ width: '100%', borderRadius: '10px', display: 'block', boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }} />
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--orange)', letterSpacing: '0.06em', textTransform: 'uppercase', flexShrink: 0, marginTop: '2px' }}>P.02</span>
                <div>
                  <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--white)', marginBottom: '5px' }}>手机 App — 单日编辑</p>
                  <p style={{ fontSize: '13px', fontWeight: 300, color: 'var(--gray)', lineHeight: 1.6 }}>沿横向轨道拖动温度节点来设定时间，需要在小触控目标上精确操作，交互过程中没有明确的视觉反馈。</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ 第 4 节：关键洞察 ══ */}
      <section className="section" id="insights">
        <div className="wrap">
          <div className="reveal"><div className="eyebrow">04 — 关键洞察</div></div>
          <div className="reveal d1"><h2 className="ttl">研究揭示了什么。</h2></div>
          <div className="reveal d2"><p className="bod">三条洞察决定了本次重设计的每一个设计决策——它们都指向同一个方向：让系统消化复杂性，而不是转嫁给用户。</p></div>

          <div className="insight-row">
            <div className="insight-card reveal d1">
              <span className="insight-n">1</span>
              <h3>用户要的是结果，不是系统模式</h3>
              <p>人们用舒适体验来思考——"我想暖和一点"——而不是 HVAC 运行逻辑。界面必须完全匹配这种心智模型。</p>
            </div>
            <div className="insight-card reveal d2">
              <span className="insight-n">2</span>
              <h3>温度控制是状态驱动的交互</h3>
              <p>任何时刻最重要的信息是当前系统状态：温度、模式、省电状态。视觉层级必须让这些信息即时可读。</p>
            </div>
            <div className="insight-card reveal d3">
              <span className="insight-n">3</span>
              <h3>智能自动化应该减少决策</h3>
              <p>当系统智能需要用户理解它时，反而成了负担。真正的智能家居设计是减少决策，而不是制造新决策。</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 第 5 节：设计原则 ══ */}
      <section className="section alt bordered" id="principles">
        <div className="wrap">
          <div className="reveal"><div className="eyebrow">05 — 设计原则</div></div>
          <div className="reveal d1"><h2 className="ttl">四条指导<br />每个决策的准则。</h2></div>

          <div className="principles-wrap">
            <div className="principles-intro reveal d1">
              <p className="bod">这些原则不是愿景性的指导方针，而是约束条件。每个设计决策在推进前都要对照全部四条原则进行评估。当原则之间产生冲突时，列表靠前的原则优先。</p>
            </div>
            <div className="principle-list reveal d2">
              <div className="pr-item">
                <div className="pr-idx">01</div>
                <div className="pr-body">
                  <h3>早期决策，系统处理其余</h3>
                  <p>用户提供意图——一个目标温度。系统判断制热或制冷。无需选择模式，无需设置阈值。</p>
                </div>
              </div>
              <div className="pr-item">
                <div className="pr-idx">02</div>
                <div className="pr-body">
                  <h3>状态即内容</h3>
                  <p>系统状态——当前温度、活跃模式、省电状态——是最关键的信息。视觉层级必须反映这一点。</p>
                </div>
              </div>
              <div className="pr-item">
                <div className="pr-idx">03</div>
                <div className="pr-body">
                  <h3>跨设备一致，而非完全相同</h3>
                  <p>硬件和手机上采用相同的交互逻辑和心智模型——布局可以不同，行为保持一致。</p>
                </div>
              </div>
              <div className="pr-item">
                <div className="pr-idx">04</div>
                <div className="pr-body">
                  <h3>渐进式披露</h3>
                  <p>核心操作始终可见。高级设置仅在用户主动选择时才会出现。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 第 6 节：设计规范 ══ */}
      <section className="section bordered" id="guidelines">
        <div className="wrap">
          <div className="reveal"><div className="eyebrow">06 — 设计规范</div></div>
          <div className="reveal d1"><h2 className="ttl">引导产品走向<br />高端与创新。</h2></div>
          <div className="reveal d2"><p className="bod">基于最终情绪板，我们制定了一套设计规范，引导产品走向高端创新的方向。</p></div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '56px' }} className="reveal d2">
            {([
              { title: '深色主题', visual: <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#1a1a1a', border: '1.5px solid rgba(255,255,255,0.4)', flexShrink: 0 }} /> },
              { title: '极简字体', visual: <span style={{ fontSize: '22px', fontWeight: 800, color: '#f5f5f5', letterSpacing: '-0.44px', flexShrink: 0, lineHeight: 1 }}>ABC</span> },
              { title: '圆润线性图标', visual: <img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773757796/portfolio/projects/nest-thermostat/gl_linear_icons.svg" width={44} height={44} alt="圆润线性图标" style={{ display: 'block', flexShrink: 0 }} /> },
              { title: '圆角', visual: <img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773757800/portfolio/projects/nest-thermostat/gl_rounded_corners.svg" width={40} height={40} alt="圆角" style={{ display: 'block', flexShrink: 0 }} /> },
              { title: '透明质感', visual: <div style={{ position: 'relative', width: '44px', height: '44px', borderRadius: '12px', background: '#ff7b35', flexShrink: 0, overflow: 'hidden' }}><div style={{ position: 'absolute', top: 0, right: 0, width: '50%', height: '100%', background: 'rgba(255,255,255,0.5)' }} /></div> },
              { title: '渐变元素', visual: <div style={{ width: '44px', height: '44px', borderRadius: '22px', flexShrink: 0, background: 'linear-gradient(180deg, #ffa719 0%, #de4e00 51%, #9a0000 100%)' }} /> },
              { title: '适中信息密度', visual: <img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773757795/portfolio/projects/nest-thermostat/gl_info_density.svg" width={44} height={44} alt="适中信息密度" style={{ display: 'block', flexShrink: 0 }} /> },
              { title: '卡片元素', visual: <img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773757791/portfolio/projects/nest-thermostat/gl_card_elements.svg" width={44} height={44} alt="卡片元素" style={{ display: 'block', flexShrink: 0 }} /> },
              { title: '单色调', visual: <img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773757798/portfolio/projects/nest-thermostat/gl_monochrome.svg" width={42} height={42} alt="单色调" style={{ display: 'block', flexShrink: 0 }} /> },
              { title: '焦点突出', visual: <img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773757793/portfolio/projects/nest-thermostat/gl_focal_point.svg" width={35} height={35} alt="焦点突出" style={{ display: 'block', flexShrink: 0 }} /> },
            ] as { title: string; visual: React.ReactNode }[]).map(({ title, visual }) => (
              <div key={title} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 29px', height: '90px', background: '#141414', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px' }}>
                <span style={{ fontSize: '15px', fontWeight: 400, color: '#f5f5f5', whiteSpace: 'nowrap' }}>{title}</span>
                {visual}
              </div>
            ))}
          </div>

          <div style={{ marginTop: '96px' }}>
            <div className="reveal"><div className="eyebrow" style={{ marginBottom: '48px' }}>风格指南</div></div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px' }} className="reveal d1">
              <div>
                <p style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--gray)', marginBottom: '24px' }}>色彩</p>
                <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                  {[{ hex: '#F95F0E' }, { hex: '#5B8BFF' }, { hex: '#1C1D1F', border: true }, { hex: '#FAFAFA' }].map((c) => (
                    <div key={c.hex} style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                      <div style={{ width: '80px', height: '80px', borderRadius: '14px', background: c.hex, ...(c.border ? { border: '1px solid rgba(255,255,255,0.15)' } : {}) }}></div>
                      <span style={{ fontSize: '11px', color: 'var(--gray)', fontFamily: 'monospace' }}>{c.hex}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--gray)', marginBottom: '24px' }}>字体</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div style={{ border: '1px solid var(--border)', borderRadius: '12px', padding: '20px' }}>
                    <p style={{ fontSize: '28px', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '12px' }}>SF Pro</p>
                    <div style={{ display: 'flex', gap: '10px', marginBottom: '14px' }}>
                      {[300, 400, 500, 700].map(w => <span key={w} style={{ fontSize: '14px', fontWeight: w, color: 'var(--gray)' }}>Aa</span>)}
                    </div>
                  </div>
                  <div style={{ border: '1px solid var(--border)', borderRadius: '12px', padding: '20px' }}>
                    <p style={{ fontSize: '28px', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '12px' }}>Google<br />Sans</p>
                    <div style={{ display: 'flex', gap: '10px', marginBottom: '14px' }}>
                      {[300, 400, 500, 700].map(w => <span key={w} style={{ fontSize: '14px', fontWeight: w, color: 'var(--gray)' }}>Aa</span>)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 第 7 节：初版高保真 ══ */}
      <div id="solutions">
        <div className="feature-block">
          <div className="wrap">
            <div className="feature-inner">
              <div className="reveal">
                <span className="ft-tag">07 — 初版高保真 · 01</span>
                <h2 className="ft-title">智能温度输入</h2>
                <p className="ft-body">以单一目标温度取代双阈值模型。系统读取当前温度，自动判断需要制热还是制冷并执行——无需用户理解工作原理。</p>
                <div className="ft-result"><span className="arrow">→</span><span>用户完全专注于自己期望的结果，运营复杂性被编码到系统中，而非界面上。</span></div>
              </div>
              <div className="reveal d1">
                <div className="duo">
                  <img className="img-device" src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773757832/portfolio/projects/nest-thermostat/hifi_01_device.png" alt="制热状态设备" />
                  <img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773757834/portfolio/projects/nest-thermostat/hifi_01_phone.png" alt="制热状态手机" style={{ width: 'clamp(100px, 25vw, 185px)', display: 'block', boxShadow: '0 40px 80px rgba(0,0,0,0.65)' }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="feature-block alt-bg">
          <div className="wrap">
            <div className="feature-inner rev">
              <div className="reveal">
                <span className="ft-tag">07 — 初版高保真 · 02</span>
                <h2 className="ft-title">纵向排程，极致简洁</h2>
                <p className="ft-body">纵向时间轴按时间段组织温度事件，温度节点在视觉上相互连接——用户无需横向滚动，即可一眼扫描并编辑全天排程。</p>
                <div className="ft-result"><span className="arrow">→</span><span>排程管理变得更快、更易解读——布局与人们对一天时间的自然认知方式完全匹配。</span></div>
              </div>
              <div className="reveal d1">
                <div className="duo">
                  <img className="img-device" src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773757840/portfolio/projects/nest-thermostat/hifi_02_device.png" alt="设备上的排程" />
                  <img className="img-device" src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773757841/portfolio/projects/nest-thermostat/hifi_02_phone.png" alt="设备上的时间调整" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="feature-block">
          <div className="wrap">
            <div className="feature-inner">
              <div className="reveal">
                <span className="ft-tag">07 — 初版高保真 · 03</span>
                <h2 className="ft-title">基于事件的排程系统</h2>
                <p className="ft-body">可复用的排程事件——睡眠、离家、起床——只需定义一次，即可应用到多天。用户无需每周重复创建相同的模式，周菜单让将事件分配到任意一天变得快捷。</p>
                <div className="ft-result"><span className="arrow">→</span><span>排程管理变得可扩展。定义一次，随处应用。</span></div>
              </div>
              <div className="reveal d1">
                <div className="duo">
                  <img className="img-device" src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773757842/portfolio/projects/nest-thermostat/hifi_03_phone1.png" alt="周菜单" />
                  <img className="img-device" src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773757843/portfolio/projects/nest-thermostat/hifi_03_phone2.png" alt="温度调整" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="feature-block">
          <div className="wrap">
            <div className="feature-inner">
              <div className="reveal">
                <span className="ft-tag">07 — 初版高保真 · 05</span>
                <h2 className="ft-title">动态状态视觉系统</h2>
                <p className="ft-body">颜色成为表达系统状态的语言。暖橙色代表制热，冷蓝色代表制冷，绿色代表省电。自适应颜色随每次状态变化而切换——系统在你阅读任何文字之前就已经完成了沟通。</p>
                <div className="ft-result"><span className="arrow">→</span><span>状态切换在硬件和手机界面上都变得清晰一致。</span></div>
              </div>
              <div className="reveal d1">
                <div className="duo">
                  <img className="img-device" src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773757847/portfolio/projects/nest-thermostat/hifi_05_heat_phone.png" alt="制热状态" />
                  <img className="img-device" src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773757845/portfolio/projects/nest-thermostat/hifi_05_cool_phone.png" alt="制冷状态" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ══ 第 8 节：可用性测试 ══ */}
      <section className="section alt bordered" id="testing">
        <div className="wrap">
          <div className="reveal"><div className="eyebrow">08 — 评估性研究</div></div>
          <div className="reveal d1"><h2 className="ttl">与真实用户<br />测试重设计。</h2></div>
          <div className="reveal d2"><p className="bod">对 6 名具有数字素养的参与者进行有主持的可用性研究，跨恒温器硬件原型和手机应用，共评估 9 项任务。</p></div>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '40px' }} className="reveal d1">
            {['有主持出声思考', 'SEQ 评分', '系统可用性量表', 'A/B 测试'].map(m => (
              <span key={m} style={{ fontSize: '12px', fontWeight: 500, color: 'var(--gray)', border: '1px solid var(--border)', borderRadius: '100px', padding: '6px 16px' }}>{m}</span>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '56px' }} className="reveal d1">
            <div>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gray2)', marginBottom: '14px' }}>恒温器硬件</p>
              <div style={{ border: '1px solid var(--border)', borderRadius: '14px', overflow: 'hidden' }}>
                {[
                  { task: 'T1', label: '调整温度', unassisted: 100, time: '3.6s' },
                  { task: 'T2', label: '创建排程', unassisted: 100, time: '53s' },
                  { task: 'T3', label: '修改排程', unassisted: 100, time: '57s' },
                ].map((row, i) => (
                  <div key={row.task} style={{ display: 'grid', gridTemplateColumns: '32px 1fr 56px 52px', gap: '12px', alignItems: 'center', padding: '14px 18px', background: 'var(--bg2)', borderTop: i > 0 ? '1px solid var(--border)' : undefined }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--orange)' }}>{row.task}</span>
                    <span style={{ fontSize: '13px', fontWeight: 500 }}>{row.label}</span>
                    <span style={{ fontSize: '12px', color: '#6DCF9E', fontWeight: 600 }}>{row.unassisted}%</span>
                    <span style={{ fontSize: '12px', color: 'var(--gray2)', textAlign: 'right' }}>{row.time}</span>
                  </div>
                ))}
                <div style={{ padding: '8px 18px', background: '#0E0E0E', borderTop: '1px solid var(--border)', display: 'flex', gap: '20px' }}>
                  <span style={{ fontSize: '10px', color: 'var(--gray2)' }}><span style={{ color: '#6DCF9E', fontWeight: 600 }}>%</span> 独立完成率</span>
                  <span style={{ fontSize: '10px', color: 'var(--gray2)' }}>平均用时</span>
                </div>
              </div>
            </div>

            <div>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gray2)', marginBottom: '14px' }}>手机应用</p>
              <div style={{ border: '1px solid var(--border)', borderRadius: '14px', overflow: 'hidden' }}>
                {[
                  { task: 'T1', label: '调整温度', unassisted: 100, time: '4.5s' },
                  { task: 'T2', label: '创建排程', unassisted: 83, time: '29s' },
                  { task: 'T3', label: '自定义模式', unassisted: 33, time: '48s' },
                  { task: 'T4', label: '将模式应用到日期', unassisted: 50, time: '33s' },
                  { task: 'T5', label: '修改排程', unassisted: 50, time: '22s' },
                  { task: 'T6', label: '设置工作模式计时', unassisted: 50, time: '34s' },
                ].map((row, i) => (
                  <div key={row.task} style={{ display: 'grid', gridTemplateColumns: '32px 1fr 56px 52px', gap: '12px', alignItems: 'center', padding: '14px 18px', background: 'var(--bg2)', borderTop: i > 0 ? '1px solid var(--border)' : undefined }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--orange)' }}>{row.task}</span>
                    <span style={{ fontSize: '13px', fontWeight: 500 }}>{row.label}</span>
                    <span style={{ fontSize: '12px', fontWeight: 600, color: row.unassisted === 100 ? '#6DCF9E' : row.unassisted >= 80 ? '#8FD4A8' : row.unassisted >= 50 ? '#E8B96A' : '#E87A74' }}>{row.unassisted}%</span>
                    <span style={{ fontSize: '12px', color: 'var(--gray2)', textAlign: 'right' }}>{row.time}</span>
                  </div>
                ))}
                <div style={{ padding: '8px 18px', background: '#0E0E0E', borderTop: '1px solid var(--border)', display: 'flex', gap: '20px' }}>
                  <span style={{ fontSize: '10px', color: 'var(--gray2)' }}><span style={{ color: '#6DCF9E', fontWeight: 600 }}>%</span> 独立完成率</span>
                  <span style={{ fontSize: '10px', color: 'var(--gray2)' }}>平均用时</span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '72px' }} className="reveal d2">
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gray2)', marginBottom: '24px' }}>关键洞察与解决方案</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--border)', border: '1px solid var(--border)', borderRadius: '18px', overflow: 'hidden' }}>
              {[
                { id: '01', scope: '恒温器 · T2', title: '保存排程后无确认反馈', stat: '33% 的用户不确定排程是否已设置成功。', fix: '添加清晰的确认状态——视觉提示、动画，或返回显示已更新排程的主页。' },
                { id: '02', scope: '恒温器 · T3', title: '时间→温度切换不明确', stat: '50% 的用户无法重新找到之前设置的时间；50% 被步骤切换弄混。', fix: '进入时自动聚焦到上次设置的时间。为时间编辑到温度编辑的切换添加过渡动画。' },
                { id: '03', scope: '应用 · T2', title: '点击与拖动手势不易发现', stat: '用户不知道如何与排程时间段交互。', fix: '在首次进入时提供即时视觉手势提示："长按添加 · 拖动调整"。' },
                { id: '04', scope: '应用 · T3', title: '模式自定义入口隐藏', stat: '83% 的用户因入口提示不清晰而无法找到编辑模式的位置。', fix: '在模式卡片上添加"点击"引导提示，让编辑入口一目了然。' },
                { id: '05', scope: '应用 · T4', title: '将模式应用到日期不清晰', stat: '66% 的用户对右上角图标感到困惑，不知道如何将模式分配到特定日期。', fix: '在模式分配前增加明确的日期选择步骤，支持单日和多日视图。' },
                { id: '06', scope: '应用 · T6', title: '计时器与排程模式混淆', stat: '50% 的用户将计时器功能与重复排程混淆。', fix: '让用户直接设置计时时长，无需先选择模式。A/B 测试：75% 用户更偏好这种直接流程。' },
              ].map((ins) => (
                <div key={ins.id} style={{ background: 'var(--bg2)', padding: '30px 28px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--orange)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>洞察 {ins.id}</span>
                    <span style={{ fontSize: '10px', color: 'var(--gray2)', background: 'rgba(255,255,255,0.05)', padding: '3px 10px', borderRadius: '100px', border: '1px solid var(--border)' }}>{ins.scope}</span>
                  </div>
                  <div style={{ fontSize: '15px', fontWeight: 600, marginBottom: '10px', lineHeight: 1.3 }}>{ins.title}</div>
                  <p style={{ fontSize: '13px', color: 'var(--gray)', lineHeight: 1.65, marginBottom: '14px' }}>{ins.stat}</p>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', paddingTop: '14px', borderTop: '1px solid var(--border)' }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--orange)', flexShrink: 0, marginTop: '1px' }}>→</span>
                    <p style={{ fontSize: '13px', color: 'var(--gray)', lineHeight: 1.6 }}>{ins.fix}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '32px' }} className="reveal d2">
            <div style={{ border: '1px solid var(--border)', borderRadius: '16px', padding: '32px 28px', background: 'var(--bg2)' }}>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gray2)', marginBottom: '20px' }}>SUS 评分</p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '8px' }}>
                <span style={{ fontSize: '56px', fontWeight: 800, letterSpacing: '-0.05em', lineHeight: 1, color: '#E8B96A' }}>47.5</span>
                <span style={{ fontSize: '14px', color: 'var(--gray)' }}>/ 100</span>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--gray)', lineHeight: 1.6 }}>低于平均水平（68）。基础任务流畅——高级功能拉低了评分。</p>
            </div>
            <div style={{ border: '1px solid var(--border)', borderRadius: '16px', padding: '32px 28px', background: 'var(--bg2)' }}>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gray2)', marginBottom: '20px' }}>A/B 测试 — 计时器功能</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span style={{ fontSize: '13px', fontWeight: 600 }}>方案 A — 直接计时</span>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: '#6DCF9E' }}>75%</span>
                  </div>
                  <div style={{ height: '6px', background: 'var(--border)', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ width: '75%', height: '100%', background: '#6DCF9E', borderRadius: '3px' }} />
                  </div>
                  <p style={{ fontSize: '12px', color: 'var(--gray)', marginTop: '6px' }}>无需先选模式，直接设置时长。计时器与排程的区分更清晰。</p>
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span style={{ fontSize: '13px', fontWeight: 600 }}>方案 B — 先选模式</span>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--gray2)' }}>25%</span>
                  </div>
                  <div style={{ height: '6px', background: 'var(--border)', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ width: '25%', height: '100%', background: 'rgba(255,255,255,0.2)', borderRadius: '3px' }} />
                  </div>
                  <p style={{ fontSize: '12px', color: 'var(--gray)', marginTop: '6px' }}>先选模式，再设时长。受重视长期扩展性的用户偏好。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 第 9 节：设计迭代 ══ */}
      <section className="section" id="iteration">
        <div className="wrap">
          <div className="reveal"><div className="eyebrow">09 — 设计迭代</div></div>
          <div className="reveal d1"><h2 className="ttl">我们改了什么<br />以及为什么。</h2></div>
          <div className="reveal d2"><p className="bod">可用性研究的发现直接推动了最终版本前的四项关键设计改动。</p></div>

          <div style={{ display: 'flex', flexDirection: 'column', marginTop: '64px' }}>
            {[
              {
                num: '01',
                before: { img: 'https://res.cloudinary.com/dj13he2xu/image/upload/v1773847849/portfolio/projects/nest-thermostat/01before-r3.png', alt: '改前：隐藏的多日交互', desc: '将事件应用到多天依赖一个隐藏交互（右上角图标），导致 66% 的用户任务失败。' },
                after: { img: 'https://res.cloudinary.com/dj13he2xu/image/upload/v1773847850/portfolio/projects/nest-thermostat/01after-r3.png', alt: '改后：明确的日期选择视图模式', desc: '引入明确的视图模式（单日、多日、事件），用户先选择工作日，再调整温度——使手机应用的心智模型与恒温器硬件完全一致。' },
              },
              {
                num: '02',
                before: { img: 'https://res.cloudinary.com/dj13he2xu/image/upload/v1773847851/portfolio/projects/nest-thermostat/02before-r3.png', alt: '改前：时间到温度切换不清晰', desc: '在硬件恒温器上，50% 的用户被"设置时间"到"设置温度"的突然跳转弄混，且保存排程后缺乏清晰的视觉确认。' },
                after: { img: 'https://res.cloudinary.com/dj13he2xu/image/upload/v1773847851/portfolio/projects/nest-thermostat/02after-r3.png', alt: '改后：平滑过渡与确认状态', desc: '重新设计硬件 UI，使其与手机应用的组件逻辑保持一致。增加了时间到温度的流畅空间过渡，并引入明确的视觉确认状态，让系统反馈即时可理解。' },
              },
              {
                num: '03',
                before: { img: 'https://res.cloudinary.com/dj13he2xu/image/upload/v1773847852/portfolio/projects/nest-thermostat/03before-r3.png', alt: '改前：颜色语义混淆', desc: '橙色和蓝色被用作温度数值的通用强调色，引发混淆——因为这两种颜色在 HVAC 语境中本就代表制热和制冷状态。' },
                after: { img: 'https://res.cloudinary.com/dj13he2xu/image/upload/v1773847853/portfolio/projects/nest-thermostat/03after-r3.png', alt: '改后：颜色专属于系统状态', desc: '将橙色和蓝色严格保留给活跃的系统状态（制热/制冷）。温度数值改用中性字体，避免语义误读。' },
              },
              {
                num: '04',
                before: { img: 'https://res.cloudinary.com/dj13he2xu/image/upload/v1773847854/portfolio/projects/nest-thermostat/04before-r3.png', alt: '改前：先选模式的计时流程', desc: '用户必须先选择具体"模式"才能设置计时时长，给一个快速任务增加了不必要的摩擦。' },
                after: { img: 'https://res.cloudinary.com/dj13he2xu/image/upload/v1773847855/portfolio/projects/nest-thermostat/04after-r3.png', alt: '改后：直接计时流程', desc: '根据 A/B 测试结果（75% 用户偏好）实现了直接计时流程。用户现在可以立即设置时长，临时覆盖与长期排程的区分更清晰。' },
              },
            ].map((iter, idx) => (
              <div key={iter.num} style={{ display: 'grid', gridTemplateColumns: '48px 1fr 1fr', gap: '0 48px', alignItems: 'start', padding: '48px 0', borderBottom: idx < 3 ? '1px solid var(--border)' : undefined }} className={`reveal d${idx + 1}`}>
                <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--orange)', paddingTop: '4px' }}>{iter.num}</span>
                <div>
                  <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--gray2)', marginBottom: '10px' }}>改前</p>
                  <img src={iter.before.img} alt={iter.before.alt} style={{ width: '100%', borderRadius: '14px', display: 'block' }} />
                  <p style={{ fontSize: '13px', color: 'var(--gray)', marginTop: '12px', lineHeight: 1.6 }}>{iter.before.desc}</p>
                </div>
                <div>
                  <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '10px' }}>改后</p>
                  <img src={iter.after.img} alt={iter.after.alt} style={{ width: '100%', borderRadius: '14px', display: 'block' }} />
                  <p style={{ fontSize: '13px', color: 'var(--gray)', marginTop: '12px', lineHeight: 1.6 }}>{iter.after.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 第 10 节：最终设计 ══ */}
      <section className="section alt bordered" id="finaldesign">
        <div className="wrap">
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <div className="reveal"><div className="eyebrow" style={{ justifyContent: 'center' }}>10 — 最终设计</div></div>
            <div className="reveal d1"><h2 className="ttl">重设计后的<br />完整体验。</h2></div>
            <div className="reveal d2"><p className="bod" style={{ margin: '0 auto', textAlign: 'center' }}>经过迭代，最终设计解决了全部四个摩擦点——并在硬件与手机端建立了统一的交互模型。</p></div>
          </div>

          <div className="feature-inner reveal d1" style={{ marginBottom: '80px' }}>
            <div>
              <span className="ft-tag">最终 · 温度控制</span>
              <h2 className="ft-title">单一输入。<br />自动模式。</h2>
              <p className="ft-body">一个目标温度。系统自动检测是需要制热还是制冷——无需双阈值决策，无需手动选模式。</p>
            </div>
            <div className="duo">
              <img className="img-device" src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773757790/portfolio/projects/nest-thermostat/final_tempcontrol_device.png" alt="Nest 恒温器温度控制最终版" />
              <div className="phone-wrap"><img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773757790/portfolio/projects/nest-thermostat/final_tempcontrol_phone.jpg" alt="温度控制手机应用最终版" /></div>
            </div>
          </div>

          <div className="feature-inner rev reveal d2" style={{ marginBottom: '80px' }}>
            <div>
              <span className="ft-tag">最终 · 排程</span>
              <h2 className="ft-title">纵向时间轴。<br />带上下文的事件。</h2>
              <p className="ft-body">可复用的命名事件现在内联显示温度信息。一次定义，全周应用——一眼即可看到完整上下文。</p>
            </div>
            <div className="duo">
              <div className="phone-wrap"><img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773757788/portfolio/projects/nest-thermostat/final_schedule1.jpg" alt="单日排程视图" /></div>
              <div className="phone-wrap"><img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773757789/portfolio/projects/nest-thermostat/final_schedule2.jpg" alt="多日排程视图" /></div>
            </div>
          </div>

          <div className="feature-inner rev reveal d2" style={{ marginBottom: '80px' }}>
            <div>
              <span className="ft-tag">最终 · 事件</span>
              <h2 className="ft-title">命名事件。<br />跨天复用。</h2>
              <p className="ft-body">定义早晨、工作、睡眠等事件——每个事件包含名称、图标、温度和时间表。可应用到任意一天，无需重复输入。</p>
            </div>
            <div className="duo">
              <div className="phone-wrap" style={{ width: '185px' }}><img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773757787/portfolio/projects/nest-thermostat/final_event1.jpg" alt="事件编辑视图" /></div>
              <div className="phone-wrap" style={{ width: '185px' }}><img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773757788/portfolio/projects/nest-thermostat/final_event2.jpg" alt="事件列表视图" /></div>
            </div>
          </div>

          <div className="feature-inner reveal d1">
            <div>
              <span className="ft-tag">最终 · 省电模式</span>
              <h2 className="ft-title">节能效果<br />可视可感。</h2>
              <p className="ft-body">省电模式以美元和百分比实时显示节省金额——有用、透明，并与用户行为直接关联。</p>
            </div>
            <div className="phone-wrap" style={{ margin: '0 auto', width: '185px' }}>
              <img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773757786/portfolio/projects/nest-thermostat/final_eco.jpg" alt="省电模式最终版" />
            </div>
          </div>
        </div>
      </section>

      {/* ══ 第 11 节：验证性研究 ══ */}
      <section className="section alt bordered" id="validation">
        <div className="wrap">
          <div className="reveal"><div className="eyebrow">11 — 验证性研究</div></div>
          <div className="reveal d1"><h2 className="ttl">迭代真的<br />有效吗？</h2></div>
          <div className="reveal d2"><p className="bod">在将评估性研究的设计改动落地后，我们对 5 名参与者进行了第二轮有主持的可用性测试，覆盖相同的 6 项手机任务，以量化改进效果。</p></div>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '40px' }} className="reveal d1">
            {['有主持出声思考', 'SEQ 评分', '系统可用性量表'].map(m => (
              <span key={m} style={{ fontSize: '12px', fontWeight: 500, color: 'var(--gray)', border: '1px solid var(--border)', borderRadius: '100px', padding: '6px 16px' }}>{m}</span>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '56px' }} className="reveal d1">
            <div>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gray2)', marginBottom: '14px' }}>第一轮 — 迭代前</p>
              <div style={{ border: '1px solid var(--border)', borderRadius: '14px', overflow: 'hidden' }}>
                {[
                  { task: 'T1', label: '调整温度', unassisted: 100, time: '4.5s' },
                  { task: 'T2', label: '创建排程', unassisted: 83, time: '29s' },
                  { task: 'T3', label: '自定义模式', unassisted: 33, time: '48s' },
                  { task: 'T4', label: '将模式应用到日期', unassisted: 50, time: '33s' },
                  { task: 'T5', label: '修改排程', unassisted: 50, time: '22s' },
                  { task: 'T6', label: '设置工作模式计时', unassisted: 50, time: '34s' },
                ].map((row, i) => (
                  <div key={row.task} style={{ display: 'grid', gridTemplateColumns: '32px 1fr 56px 52px', gap: '12px', alignItems: 'center', padding: '14px 18px', background: 'var(--bg2)', borderTop: i > 0 ? '1px solid var(--border)' : undefined }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--orange)' }}>{row.task}</span>
                    <span style={{ fontSize: '13px', fontWeight: 500 }}>{row.label}</span>
                    <span style={{ fontSize: '12px', fontWeight: 600, color: row.unassisted === 100 ? '#6DCF9E' : row.unassisted >= 80 ? '#8FD4A8' : row.unassisted >= 50 ? '#E8B96A' : '#E87A74' }}>{row.unassisted}%</span>
                    <span style={{ fontSize: '12px', color: 'var(--gray2)', textAlign: 'right' }}>{row.time}</span>
                  </div>
                ))}
                <div style={{ padding: '8px 18px', background: '#0E0E0E', borderTop: '1px solid var(--border)', display: 'flex', gap: '20px' }}>
                  <span style={{ fontSize: '10px', color: 'var(--gray2)' }}><span style={{ color: '#6DCF9E', fontWeight: 600 }}>%</span> 独立完成率</span>
                  <span style={{ fontSize: '10px', color: 'var(--gray2)' }}>平均用时</span>
                </div>
              </div>
            </div>

            <div>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6DCF9E', marginBottom: '14px' }}>第二轮 — 迭代后</p>
              <div style={{ border: '1px solid rgba(109,207,158,0.25)', borderRadius: '14px', overflow: 'hidden' }}>
                {[
                  { task: 'T1', label: '调整温度', unassisted: 100, time: '3.9s', delta: 0 },
                  { task: 'T2', label: '创建排程', unassisted: 100, time: '21.3s', delta: 17 },
                  { task: 'T3', label: '自定义模式', unassisted: 83.3, time: '31.7s', delta: 50.3 },
                  { task: 'T4', label: '将模式应用到日期', unassisted: 100, time: '24.1s', delta: 50 },
                  { task: 'T5', label: '修改排程', unassisted: 83.3, time: '16.4s', delta: 33.3 },
                  { task: 'T6', label: '设置工作模式计时', unassisted: 100, time: '19.2s', delta: 50 },
                ].map((row, i) => (
                  <div key={row.task} style={{ display: 'grid', gridTemplateColumns: '32px 1fr 56px 52px', gap: '12px', alignItems: 'center', padding: '14px 18px', background: 'var(--bg2)', borderTop: i > 0 ? '1px solid var(--border)' : undefined }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--orange)' }}>{row.task}</span>
                    <span style={{ fontSize: '13px', fontWeight: 500 }}>{row.label}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <span style={{ fontSize: '12px', fontWeight: 600, color: row.unassisted === 100 ? '#6DCF9E' : '#8FD4A8' }}>{row.unassisted}%</span>
                      {row.delta > 0 && <span style={{ fontSize: '10px', color: '#6DCF9E' }}>+{row.delta}</span>}
                    </div>
                    <span style={{ fontSize: '12px', color: 'var(--gray2)', textAlign: 'right' }}>{row.time}</span>
                  </div>
                ))}
                <div style={{ padding: '8px 18px', background: '#0E0E0E', borderTop: '1px solid var(--border)', display: 'flex', gap: '20px' }}>
                  <span style={{ fontSize: '10px', color: 'var(--gray2)' }}><span style={{ color: '#6DCF9E', fontWeight: 600 }}>%</span> 独立完成率</span>
                  <span style={{ fontSize: '10px', color: 'var(--gray2)' }}>平均用时</span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '32px' }} className="reveal d2">
            <div style={{ border: '1px solid var(--border)', borderRadius: '16px', padding: '32px 28px', background: 'var(--bg2)' }}>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gray2)', marginBottom: '20px' }}>SUS 评分 — 第一轮</p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '8px' }}>
                <span style={{ fontSize: '56px', fontWeight: 800, letterSpacing: '-0.05em', lineHeight: 1, color: '#E8B96A' }}>47.5</span>
                <span style={{ fontSize: '14px', color: 'var(--gray)' }}>/ 100</span>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--gray)', lineHeight: 1.6 }}>低于平均水平（68）。高级排程和模式功能是主要摩擦点。</p>
            </div>
            <div style={{ border: '1px solid rgba(109,207,158,0.25)', borderRadius: '16px', padding: '32px 28px', background: 'var(--bg2)' }}>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6DCF9E', marginBottom: '20px' }}>SUS 评分 — 第二轮</p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '8px' }}>
                <span style={{ fontSize: '56px', fontWeight: 800, letterSpacing: '-0.05em', lineHeight: 1, color: '#6DCF9E' }}>82.5</span>
                <span style={{ fontSize: '14px', color: 'var(--gray)' }}>/ 100</span>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--gray)', lineHeight: 1.6 }}>高于平均水平——评级"良好"。明确的日期选择、手势提示和直接计时流程解决了大部分摩擦。</p>
              <div style={{ marginTop: '16px', padding: '12px 16px', background: 'rgba(109,207,158,0.07)', borderRadius: '10px', border: '1px solid rgba(109,207,158,0.15)' }}>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#6DCF9E' }}>+35.0 分提升</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 第 12 节：跨设备体验 ══ */}
      <section className="section bordered" id="crossdevice">
        <div className="wrap">
          <div style={{ textAlign: 'center' }}>
            <div className="reveal"><div className="eyebrow" style={{ justifyContent: 'center' }}>12 — 跨设备体验</div></div>
            <div className="reveal d1"><h2 className="ttl">同一心智模型。<br />两种设备。</h2></div>
            <div className="reveal d2"><p className="bod" style={{ margin: '0 auto', textAlign: 'center' }}>一致性不是让界面完全相同——而是在两个平台上共享相同的逻辑、颜色语言和交互模式。</p></div>
          </div>

          <div className="cross-devices reveal d2">
            <div className="dev-col">
              <span className="dev-col-label">恒温器硬件</span>
              <img className="img-device" src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773757785/portfolio/projects/nest-thermostat/final_crossdevice_device.png" alt="设备制热状态" style={{ maxWidth: '340px' }} />
              <div className="shared-pts">
                <span className="spt">橙色光晕 = 制热状态</span>
                <span className="spt">单一温度目标</span>
                <span className="spt">纵向时间导航</span>
              </div>
            </div>
            <div className="sep-col">
              <div className="sep-line"></div>
              <div className="sep-tag">共享逻辑</div>
              <div className="sep-line"></div>
            </div>
            <div className="dev-col">
              <span className="dev-col-label">手机应用</span>
              <div className="phone-wrap" style={{ width: 'clamp(120px, 28vw, 210px)' }}><img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773757785/portfolio/projects/nest-thermostat/final_crossdevice_phone.jpg" alt="手机制热状态" /></div>
              <div className="shared-pts">
                <span className="spt">橙色强调 = 制热状态</span>
                <span className="spt">相同单输入模型</span>
                <span className="spt">相同纵向排程</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 第 13 节：影响 ══ */}
      <section className="section" id="impact">
        <div className="wrap">
          <div className="reveal"><div className="eyebrow">13 — 项目影响</div></div>
          <div className="reveal d1"><h2 className="ttl">更少复杂性。<br />更多掌控感。</h2></div>
          <div className="reveal d2"><p className="bod">通过让系统智能与用户心智模型对齐，恒温器变得更易理解，也更有效地支持节能行为。</p></div>

          <div className="impact-grid">
            <div className="imp-card reveal d1">
              <span className="imp-num"><span className="accent">↓ </span>60%</span>
              <h3>认知负荷降低</h3>
              <p>单目标输入彻底消除了双阈值决策。用户提供意图——系统自动处理所有运行逻辑。</p>
            </div>
            <div className="imp-card reveal d2">
              <span className="imp-num"><span className="accent">3×</span> 更快</span>
              <h3>排程配置效率</h3>
              <p>命名可复用事件取代了拖拽编辑时间轴。全周排程的配置时间缩短至原来的几分之一。</p>
            </div>
            <div className="imp-card reveal d1">
              <span className="imp-num"><span className="accent">✦</span> 清晰</span>
              <h3>能耗感知</h3>
              <p>实时节省数据和省电指示器，将能耗反馈从无形的背景噪音变成可见、可操作的数据。</p>
            </div>
            <div className="imp-card reveal d2">
              <span className="imp-num"><span className="accent">✦</span> 统一</span>
              <h3>跨设备可用性</h3>
              <p>共享的交互逻辑、颜色语言和排程模型——用户在硬件设备和手机应用间只需维护一套心智模型。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="nest-footer">
        <span className="f-logo"><em>nest</em> 重设计</span>
        <span className="f-note">张宇晨 · MFA 交互设计 · SCAD · 2026</span>
      </footer>

    </div>
    <NextProject href="/zh/projects/dosecare" title="DoseCare" role="团队负责人 & UX 设计师" theme="dark" />
    </>
  );
}

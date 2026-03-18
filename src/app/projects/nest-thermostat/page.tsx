"use client";

import Link from "next/link";
import React, { useEffect } from 'react';
import "./nest.css";
import NextProject from "../../components/NextProject";

export default function NestThermostatProject() {
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

    // When navigating back to this page from Next.js router cache, the component
    // may not re-mount, so useEffect won't re-run. Force-reveal on popstate.
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

      {/* ── Back link ── */}
      <div className="relative z-20" style={{ padding: '14px 48px' }}>
        <Link href="/" style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', textDecoration: 'none', fontFamily: 'monospace', letterSpacing: '0.06em' }}>← Home</Link>
      </div>

      {/* ══ HERO ══ */}
      <div className="hero">
        <span className="hero-label">UX / Product Redesign · SCAD · 2026</span>
        <h1>Simplifying smart<br />temperature <em>control.</em></h1>
        <p className="hero-sub">A redesign of the Nest thermostat ecosystem — removing cognitive friction, making system states legible, and unifying the experience across devices.</p>

        <div className="hero-images" style={{ position: 'relative' }}>
          <div className="hero-glow hero-glow-heat" aria-hidden="true"></div>
          <div className="hero-glow hero-glow-cool" aria-hidden="true"></div>
          <img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773757831/portfolio/projects/nest-thermostat/hero_phones.png" alt="Nest app redesign" style={{ height: '100%', width: '100%', objectFit: 'contain', position: 'relative', zIndex: 1 }} />
        </div>

        <div className="hero-meta">
          <div className="mi"><div className="ml">Role</div><div className="mv">UX Designer</div></div>
          <div className="mi"><div className="ml">Duration</div><div className="mv">10 Weeks</div></div>
          <div className="mi"><div className="ml">Tools</div><div className="mv">Figma · Protopie</div></div>
          <div className="mi"><div className="ml">Type</div><div className="mv">Interaction Redesign</div></div>
        </div>
      </div>

      {/* ══ SECTION 1: PRODUCT CONTEXT ══ */}
      <section className="section bordered" id="context">
        <div className="wrap">
          <div className="reveal"><div className="eyebrow">01 — Product Context</div></div>
          <div className="reveal d1"><h2 className="ttl">A smart device that<br />exposes its own complexity.</h2></div>
          <div className="reveal d2"><p className="bod">Nest is designed to automate home temperature management. But many users encounter friction the moment they open the app — the system surfaces internal logic instead of accepting user intent. This project rethinks how intelligence should support users, not burden them.</p></div>

          <div className="context-grid reveal d2" style={{ marginTop: '64px' }}>
            <div className="ctx-card">
              <h3>Dual-threshold complexity</h3>
              <p>Users must configure separate heating and cooling thresholds before setting a simple temperature — exposing HVAC logic that should be invisible.</p>
            </div>
            <div className="ctx-card">
              <h3>Scheduling friction</h3>
              <p>The horizontal drag timeline forces repetitive value entry. A task central to the product&apos;s value requires too many steps to complete.</p>
            </div>
            <div className="ctx-card">
              <h3>Split mental models</h3>
              <p>The hardware device and mobile app present different interaction paradigms. Switching between them resets the user&apos;s understanding of the system.</p>
            </div>
            <div className="ctx-card">
              <h3>Invisible energy savings</h3>
              <p>Eco mode runs silently. Users can&apos;t connect daily choices to real energy or cost outcomes — reducing engagement with one of the product&apos;s key features.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 2: PROBLEM SPACE ══ */}
      <section className="section alt bordered" id="problems">
        <div className="wrap">
          <div className="reveal"><div className="eyebrow">02 — Problem Space</div></div>
          <div className="reveal d1"><h2 className="ttl">Four friction points.</h2></div>
          <div className="reveal d2"><p className="bod">Research surfaced where users consistently struggled — not with individual features, but with the underlying interaction model that prioritizes system accuracy over user intent.</p></div>

          <div className="problem-grid reveal d2">
            <div className="p-card"><span className="p-num">01</span><h3>Confusing heating &amp; cooling logic</h3><p>Users must understand HVAC thresholds before adjusting temperature. The system demands technical knowledge as a prerequisite for basic use.</p></div>
            <div className="p-card"><span className="p-num">02</span><h3>Schedule setup requires too many steps</h3><p>Dragging across a horizontal time axis and repeatedly entering values creates friction for a task users need to do every day.</p></div>
            <div className="p-card"><span className="p-num">03</span><h3>Inconsistent cross-device experience</h3><p>Different interaction models on hardware and mobile double the learning cost and erode user confidence when switching devices.</p></div>
            <div className="p-card"><span className="p-num">04</span><h3>Lack of energy transparency</h3><p>Energy-saving features provide no clear feedback. Users cannot understand how their actions impact consumption or cost.</p></div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 3: EXISTING DESIGN ══ */}
      <section className="section alt bordered" id="existing">
        <div className="wrap">
          <div className="reveal"><div className="eyebrow">03 — Existing Design</div></div>
          <div className="reveal d1"><h2 className="ttl">What the current<br />experience looks like.</h2></div>
          <div className="reveal d2"><p className="bod">Before redesigning, we documented the existing Nest experience across hardware and mobile — the interfaces users struggle with today.</p></div>

          {/* 2x2 grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '64px' }} className="reveal d1">

            {/* 1. Old thermostat device */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ background: '#141414', borderRadius: '20px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 clamp(16px, 8vw, 114px)', height: '512px' }}>
                <div style={{ width: '260px', height: '100%', position: 'relative', flexShrink: 0 }}>
                  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '360px', height: '360px', overflow: 'hidden' }}>
                    <img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773757864/portfolio/projects/nest-thermostat/thermo_schedule.png" alt="Original Nest thermostat — horizontal schedule" style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '168.78%', maxWidth: 'none' }} />
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--orange)', letterSpacing: '0.06em', textTransform: 'uppercase', flexShrink: 0, marginTop: '2px' }}>P.02</span>
                <div>
                  <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--white)', marginBottom: '5px' }}>Thermostat — Horizontal Schedule</p>
                  <p style={{ fontSize: '13px', fontWeight: 300, color: 'var(--gray)', lineHeight: 1.6 }}>Temperature nodes scattered across a 2D grid. No clear hierarchy — users must interpret coordinates to understand their own schedule.</p>
                </div>
              </div>
            </div>

            {/* 2. Old energy history */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ background: '#141414', borderRadius: '20px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 clamp(16px, 10vw, 144px)', height: '512px' }}>
                <div style={{ width: '200px', height: '433px', borderRadius: '28px', overflow: 'hidden', boxShadow: '0 20px 48px rgba(0,0,0,0.2)', flexShrink: 0 }}>
                  <img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773757860/portfolio/projects/nest-thermostat/old_energy.jpg" alt="Original app — energy history" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--orange)', letterSpacing: '0.06em', textTransform: 'uppercase', flexShrink: 0, marginTop: '2px' }}>P.04</span>
                <div>
                  <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--white)', marginBottom: '5px' }}>Mobile App — Energy History</p>
                  <p style={{ fontSize: '13px', fontWeight: 300, color: 'var(--gray)', lineHeight: 1.6 }}>Usage shown as bar lengths with no cost context. Data is present but disconnected from user behavior — no actionable feedback or savings estimate.</p>
                </div>
              </div>
            </div>

            {/* 3. Old weekly schedule */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }} className="reveal d2">
              <div style={{ background: '#141414', borderRadius: '20px', overflow: 'hidden', padding: '28px 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '220px' }}>
                <img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773757862/portfolio/projects/nest-thermostat/old_schedule_week.png" alt="Original app — weekly heat schedule" style={{ width: '100%', borderRadius: '10px', display: 'block', boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }} />
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--orange)', letterSpacing: '0.06em', textTransform: 'uppercase', flexShrink: 0, marginTop: '2px' }}>P.02</span>
                <div>
                  <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--white)', marginBottom: '5px' }}>Mobile App — Weekly Schedule</p>
                  <p style={{ fontSize: '13px', fontWeight: 300, color: 'var(--gray)', lineHeight: 1.6 }}>Seven days on one horizontal axis. Users scroll sideways to find time slots — disorienting on a narrow phone screen with no room for context.</p>
                </div>
              </div>
            </div>

            {/* 4. Old day editing */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }} className="reveal d3">
              <div style={{ background: '#141414', borderRadius: '20px', overflow: 'hidden', padding: '28px 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '220px' }}>
                <img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773757861/portfolio/projects/nest-thermostat/old_schedule_day.png" alt="Original app — single day editing" style={{ width: '100%', borderRadius: '10px', display: 'block', boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }} />
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--orange)', letterSpacing: '0.06em', textTransform: 'uppercase', flexShrink: 0, marginTop: '2px' }}>P.02</span>
                <div>
                  <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--white)', marginBottom: '5px' }}>Mobile App — Day Editing</p>
                  <p style={{ fontSize: '13px', fontWeight: 300, color: 'var(--gray)', lineHeight: 1.6 }}>Dragging a temperature node along a horizontal rail to set time. Requires precise touch on small targets with no clear feedback during interaction.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ SECTION 4: KEY INSIGHTS ══ */}
      <section className="section" id="insights">
        <div className="wrap">
          <div className="reveal"><div className="eyebrow">04 — Key Insights</div></div>
          <div className="reveal d1"><h2 className="ttl">What research revealed.</h2></div>
          <div className="reveal d2"><p className="bod">Three insights shaped every design decision in this redesign — each one pointing in the same direction: let the system absorb complexity so users don&apos;t have to.</p></div>

          <div className="insight-row">
            <div className="insight-card reveal d1">
              <span className="insight-n">1</span>
              <h3>Users want outcomes, not system modes</h3>
              <p>People think in terms of comfort results — &quot;I want it warmer&quot; — not HVAC operational logic. The interface must match this mental model completely.</p>
            </div>
            <div className="insight-card reveal d2">
              <span className="insight-n">2</span>
              <h3>Temperature control is state-driven interaction</h3>
              <p>The most important information at any moment is current system state: temperature, mode, eco status. Visual hierarchy must surface this instantly.</p>
            </div>
            <div className="insight-card reveal d3">
              <span className="insight-n">3</span>
              <h3>Smart automation should reduce decisions</h3>
              <p>System intelligence is a liability when it requires users to understand it. True smart home design removes decisions rather than creating new ones.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 5: DESIGN PRINCIPLES ══ */}
      <section className="section alt bordered" id="principles">
        <div className="wrap">
          <div className="reveal"><div className="eyebrow">05 — Design Principles</div></div>
          <div className="reveal d1"><h2 className="ttl">Four rules that guided<br />every decision.</h2></div>

          <div className="principles-wrap">
            <div className="principles-intro reveal d1">
              <p className="bod">These principles are not aspirational guidelines — they are constraints. Each design decision was evaluated against all four before moving forward. When in conflict, the principle higher on the list wins.</p>
            </div>
            <div className="principle-list reveal d2">
              <div className="pr-item">
                <div className="pr-idx">01</div>
                <div className="pr-body">
                  <h3>Decide Early, Let the System Handle the Rest</h3>
                  <p>Users provide intent — one target temperature. The system determines heating or cooling. No mode selection, no thresholds.</p>
                </div>
              </div>
              <div className="pr-item">
                <div className="pr-idx">02</div>
                <div className="pr-body">
                  <h3>State Is Content</h3>
                  <p>System state — current temperature, active mode, eco status — is the most critical information. Visual hierarchy must reflect this.</p>
                </div>
              </div>
              <div className="pr-item">
                <div className="pr-idx">03</div>
                <div className="pr-body">
                  <h3>Consistent Across Devices, Not Identical</h3>
                  <p>Same interaction logic and mental model on hardware and mobile — layouts differ, behavior doesn&apos;t.</p>
                </div>
              </div>
              <div className="pr-item">
                <div className="pr-idx">04</div>
                <div className="pr-body">
                  <h3>Progressive Disclosure</h3>
                  <p>Core actions stay visible. Advanced settings appear only when users choose to access them.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 6: DESIGN GUIDELINES ══ */}
      <section className="section bordered" id="guidelines">
        <div className="wrap">
          <div className="reveal"><div className="eyebrow">06 — Design Guidelines</div></div>
          <div className="reveal d1"><h2 className="ttl">Guiding the product toward<br />high-end and innovative.</h2></div>
          <div className="reveal d2"><p className="bod">Based on our final moodboard, we created a set of design guidelines that would lead our product down a high-end and innovative route.</p></div>

          {/* 10 guideline cards, 2-col grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '56px' }} className="reveal d2">

            {([
              {
                title: 'Dark Theme',
                visual: (
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#1a1a1a', border: '1.5px solid rgba(255,255,255,0.4)', flexShrink: 0 }} />
                ),
              },
              {
                title: 'Minimalist Font',
                visual: <span style={{ fontSize: '22px', fontWeight: 800, color: '#f5f5f5', letterSpacing: '-0.44px', flexShrink: 0, lineHeight: 1 }}>ABC</span>,
              },
              {
                title: 'Rounded Linear Icons',
                visual: <img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773757796/portfolio/projects/nest-thermostat/gl_linear_icons.svg" width={44} height={44} alt="Rounded Linear Icons" style={{ display: 'block', flexShrink: 0 }} />,
              },
              {
                title: 'Rounded Corners',
                visual: <img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773757800/portfolio/projects/nest-thermostat/gl_rounded_corners.svg" width={40} height={40} alt="Rounded Corners" style={{ display: 'block', flexShrink: 0 }} />,
              },
              {
                title: 'Transparent',
                visual: (
                  <div style={{ position: 'relative', width: '44px', height: '44px', borderRadius: '12px', background: '#ff7b35', flexShrink: 0, overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, right: 0, width: '50%', height: '100%', background: 'rgba(255,255,255,0.5)' }} />
                  </div>
                ),
              },
              {
                title: 'Gradient Elements',
                visual: (
                  <div style={{ width: '44px', height: '44px', borderRadius: '22px', flexShrink: 0, background: 'linear-gradient(180deg, #ffa719 0%, #de4e00 51%, #9a0000 100%)' }} />
                ),
              },
              {
                title: 'Average Information Density',
                visual: <img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773757795/portfolio/projects/nest-thermostat/gl_info_density.svg" width={44} height={44} alt="Average Information Density" style={{ display: 'block', flexShrink: 0 }} />,
              },
              {
                title: 'Card Elements',
                visual: <img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773757791/portfolio/projects/nest-thermostat/gl_card_elements.svg" width={44} height={44} alt="Card Elements" style={{ display: 'block', flexShrink: 0 }} />,
              },
              {
                title: 'Monochrome',
                visual: <img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773757798/portfolio/projects/nest-thermostat/gl_monochrome.svg" width={42} height={42} alt="Monochrome" style={{ display: 'block', flexShrink: 0 }} />,
              },
              {
                title: 'Focal Point',
                visual: <img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773757793/portfolio/projects/nest-thermostat/gl_focal_point.svg" width={35} height={35} alt="Focal Point" style={{ display: 'block', flexShrink: 0 }} />,
              },
            ] as { title: string; visual: React.ReactNode }[]).map(({ title, visual }) => (
              <div key={title} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 29px', height: '90px', background: '#141414', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px' }}>
                <span style={{ fontSize: '15px', fontWeight: 400, color: '#f5f5f5', whiteSpace: 'nowrap' }}>{title}</span>
                {visual}
              </div>
            ))}

          </div>

          {/* Style Guide subsection */}
          <div style={{ marginTop: '96px' }}>
            <div className="reveal"><div className="eyebrow" style={{ marginBottom: '48px' }}>Style Guide</div></div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px' }} className="reveal d1">

              {/* Colors */}
              <div>
                <p style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--gray)', marginBottom: '24px' }}>Color</p>
                <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                    <div style={{ width: '80px', height: '80px', borderRadius: '14px', background: '#F95F0E' }}></div>
                    <span style={{ fontSize: '11px', color: 'var(--gray)', fontFamily: 'monospace' }}>#F95F0E</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                    <div style={{ width: '80px', height: '80px', borderRadius: '14px', background: '#5B8BFF' }}></div>
                    <span style={{ fontSize: '11px', color: 'var(--gray)', fontFamily: 'monospace' }}>#5B8BFF</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                    <div style={{ width: '80px', height: '80px', borderRadius: '14px', background: '#1C1D1F', border: '1px solid rgba(255,255,255,0.15)' }}></div>
                    <span style={{ fontSize: '11px', color: 'var(--gray)', fontFamily: 'monospace' }}>#1C1D1F</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                    <div style={{ width: '80px', height: '80px', borderRadius: '14px', background: '#FAFAFA' }}></div>
                    <span style={{ fontSize: '11px', color: 'var(--gray)', fontFamily: 'monospace' }}>#FAFAFA</span>
                  </div>
                </div>
              </div>

              {/* Typography */}
              <div>
                <p style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--gray)', marginBottom: '24px' }}>Typography</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div style={{ border: '1px solid var(--border)', borderRadius: '12px', padding: '20px' }}>
                    <p style={{ fontSize: '28px', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '12px' }}>SF Pro</p>
                    <div style={{ display: 'flex', gap: '10px', marginBottom: '14px' }}>
                      <span style={{ fontSize: '14px', fontWeight: 300, color: 'var(--gray)' }}>Aa</span>
                      <span style={{ fontSize: '14px', fontWeight: 400, color: 'var(--gray)' }}>Aa</span>
                      <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--gray)' }}>Aa</span>
                      <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--gray)' }}>Aa</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                      <span style={{ fontSize: '11px', color: 'var(--gray)' }}>Title 1 – 32 Regular</span>
                      <span style={{ fontSize: '11px', color: 'var(--gray)' }}>Title 2 – 24 Regular</span>
                      <span style={{ fontSize: '11px', color: 'var(--gray)' }}>Title 3 – 20 Regular</span>
                      <span style={{ fontSize: '11px', color: 'var(--gray)' }}>Body 1 – 16 Light</span>
                    </div>
                  </div>
                  <div style={{ border: '1px solid var(--border)', borderRadius: '12px', padding: '20px' }}>
                    <p style={{ fontSize: '28px', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '12px' }}>Google<br />Sans</p>
                    <div style={{ display: 'flex', gap: '10px', marginBottom: '14px' }}>
                      <span style={{ fontSize: '14px', fontWeight: 300, color: 'var(--gray)' }}>Aa</span>
                      <span style={{ fontSize: '14px', fontWeight: 400, color: 'var(--gray)' }}>Aa</span>
                      <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--gray)' }}>Aa</span>
                      <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--gray)' }}>Aa</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                      <span style={{ fontSize: '11px', color: 'var(--gray)' }}>Title 1 – 32 Regular</span>
                      <span style={{ fontSize: '11px', color: 'var(--gray)' }}>Title 2 – 24 Regular</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ══ SECTION 07: INITIAL HIFI ══ */}
      <div id="solutions">
        <div className="feature-block">
          <div className="wrap">
            <div className="feature-inner">
              <div className="reveal">
                <span className="ft-tag">07 — Initial HiFi · 01</span>
                <h2 className="ft-title">Smart Temperature Input</h2>
                <p className="ft-body">Replace the dual-threshold model with one clear target. The system reads the current temperature, determines whether heating or cooling is required, and acts — without asking users to understand how.</p>
                <div className="ft-result"><span className="arrow">→</span><span>Users focus entirely on their desired outcome. Operational complexity is encoded into the system, not the interface.</span></div>
              </div>
              <div className="reveal d1">
                <div className="duo">
                  <img className="img-device" src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773757832/portfolio/projects/nest-thermostat/hifi_01_device.png" alt="Heating state device" />
                  <img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773757834/portfolio/projects/nest-thermostat/hifi_01_phone.png" alt="Heating state phone" style={{ width: 'clamp(100px, 25vw, 185px)', display: 'block', boxShadow: '0 40px 80px rgba(0,0,0,0.65)' }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5.2 Vertical Schedule */}
        <div className="feature-block alt-bg">
          <div className="wrap">
            <div className="feature-inner rev">
              <div className="reveal">
                <span className="ft-tag">07 — Initial HiFi · 02</span>
                <h2 className="ft-title">Streamlined Vertical Schedule</h2>
                <p className="ft-body">A vertical timeline organizes temperature events by time of day. Temperature nodes are connected visually — users can scan and edit the entire day at a glance without horizontal scrolling.</p>
                <div className="ft-result"><span className="arrow">→</span><span>Schedule management becomes faster and easier to parse — the layout maps to how people naturally think about their day.</span></div>
              </div>
              <div className="reveal d1">
                <div className="duo">
                  <img className="img-device" src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773757840/portfolio/projects/nest-thermostat/hifi_02_device.png" alt="Schedule on device" />
                  <img className="img-device" src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773757841/portfolio/projects/nest-thermostat/hifi_02_phone.png" alt="Time change on device" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5.3 Event-Based Scheduling */}
        <div className="feature-block">
          <div className="wrap">
            <div className="feature-inner">
              <div className="reveal">
                <span className="ft-tag">07 — Initial HiFi · 03</span>
                <h2 className="ft-title">Event-Based Scheduling System</h2>
                <p className="ft-body">Reusable schedule events — Sleep, Away, Wake Up — are defined once and applied across multiple days. Users stop recreating the same patterns every week. The week menu makes it fast to assign events to any day.</p>
                <div className="ft-result"><span className="arrow">→</span><span>Schedule management becomes scalable. Define once, apply anywhere.</span></div>
              </div>
              <div className="reveal d1">
                <div className="duo">
                  <img className="img-device" src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773757842/portfolio/projects/nest-thermostat/hifi_03_phone1.png" alt="Week menu" />
                  <img className="img-device" src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773757843/portfolio/projects/nest-thermostat/hifi_03_phone2.png" alt="Temp change" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5.5 Dynamic State Visuals */}
        <div className="feature-block">
          <div className="wrap">
            <div className="feature-inner">
              <div className="reveal">
                <span className="ft-tag">07 — Initial HiFi · 05</span>
                <h2 className="ft-title">Dynamic State Visual System</h2>
                <p className="ft-body">Color becomes a language representing system status. Warm orange for heating, cool blue for cooling, green for eco. Adaptive colors shift with every state change — the system communicates before you read a single word.</p>
                <div className="ft-result"><span className="arrow">→</span><span>State transitions become visually clear and consistent across both hardware and mobile interfaces.</span></div>
              </div>
              <div className="reveal d1">
                <div className="duo">
                  <img className="img-device" src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773757847/portfolio/projects/nest-thermostat/hifi_05_heat_phone.png" alt="Heating state" />
                  <img className="img-device" src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773757845/portfolio/projects/nest-thermostat/hifi_05_cool_phone.png" alt="Cooling state" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{/* end solutions */}

      {/* ══ SECTION 08: USABILITY TESTING ══ */}
      <section className="section alt bordered" id="testing">
        <div className="wrap">
          <div className="reveal"><div className="eyebrow">08 — Evaluative Study</div></div>
          <div className="reveal d1"><h2 className="ttl">Testing the redesign<br />with real users.</h2></div>
          <div className="reveal d2"><p className="bod">A moderated usability study with 6 digitally-fluent participants evaluated both the thermostat hardware prototype and the mobile app across 9 tasks total.</p></div>

          {/* Method pills */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '40px' }} className="reveal d1">
            {['Moderated Think-Aloud', 'SEQ Ratings', 'System Usability Scale', 'A/B Testing'].map(m => (
              <span key={m} style={{ fontSize: '12px', fontWeight: 500, color: 'var(--gray)', border: '1px solid var(--border)', borderRadius: '100px', padding: '6px 16px' }}>{m}</span>
            ))}
          </div>

          {/* Task results — two tables */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '56px' }} className="reveal d1">

            {/* Thermostat */}
            <div>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gray2)', marginBottom: '14px' }}>Thermostat Hardware</p>
              <div style={{ border: '1px solid var(--border)', borderRadius: '14px', overflow: 'hidden' }}>
                {[
                  { task: 'T1', label: 'Adjust temperature', unassisted: 100, time: '3.6s' },
                  { task: 'T2', label: 'Create schedule', unassisted: 100, time: '53s' },
                  { task: 'T3', label: 'Modify schedule', unassisted: 100, time: '57s' },
                ].map((row, i) => (
                  <div key={row.task} style={{ display: 'grid', gridTemplateColumns: '32px 1fr 56px 52px', gap: '12px', alignItems: 'center', padding: '14px 18px', background: 'var(--bg2)', borderTop: i > 0 ? '1px solid var(--border)' : undefined }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--orange)' }}>{row.task}</span>
                    <span style={{ fontSize: '13px', fontWeight: 500 }}>{row.label}</span>
                    <span style={{ fontSize: '12px', color: '#6DCF9E', fontWeight: 600 }}>{row.unassisted}%</span>
                    <span style={{ fontSize: '12px', color: 'var(--gray2)', textAlign: 'right' }}>{row.time}</span>
                  </div>
                ))}
                <div style={{ padding: '8px 18px', background: '#0E0E0E', borderTop: '1px solid var(--border)', display: 'flex', gap: '20px' }}>
                  <span style={{ fontSize: '10px', color: 'var(--gray2)' }}><span style={{ color: '#6DCF9E', fontWeight: 600 }}>%</span> unassisted</span>
                  <span style={{ fontSize: '10px', color: 'var(--gray2)' }}>avg time</span>
                </div>
              </div>
            </div>

            {/* Mobile App */}
            <div>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gray2)', marginBottom: '14px' }}>Mobile App</p>
              <div style={{ border: '1px solid var(--border)', borderRadius: '14px', overflow: 'hidden' }}>
                {[
                  { task: 'T1', label: 'Adjust temperature',       unassisted: 100, time: '4.5s' },
                  { task: 'T2', label: 'Create schedule',           unassisted: 83,  time: '29s'  },
                  { task: 'T3', label: 'Customize mode',            unassisted: 33,  time: '48s'  },
                  { task: 'T4', label: 'Apply mode to days',        unassisted: 50,  time: '33s'  },
                  { task: 'T5', label: 'Modify schedule',           unassisted: 50,  time: '22s'  },
                  { task: 'T6', label: 'Set Work Mode timer',       unassisted: 50,  time: '34s'  },
                ].map((row, i) => (
                  <div key={row.task} style={{ display: 'grid', gridTemplateColumns: '32px 1fr 56px 52px', gap: '12px', alignItems: 'center', padding: '14px 18px', background: 'var(--bg2)', borderTop: i > 0 ? '1px solid var(--border)' : undefined }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--orange)' }}>{row.task}</span>
                    <span style={{ fontSize: '13px', fontWeight: 500 }}>{row.label}</span>
                    <span style={{ fontSize: '12px', fontWeight: 600, color: row.unassisted === 100 ? '#6DCF9E' : row.unassisted >= 80 ? '#8FD4A8' : row.unassisted >= 50 ? '#E8B96A' : '#E87A74' }}>{row.unassisted}%</span>
                    <span style={{ fontSize: '12px', color: 'var(--gray2)', textAlign: 'right' }}>{row.time}</span>
                  </div>
                ))}
                <div style={{ padding: '8px 18px', background: '#0E0E0E', borderTop: '1px solid var(--border)', display: 'flex', gap: '20px' }}>
                  <span style={{ fontSize: '10px', color: 'var(--gray2)' }}><span style={{ color: '#6DCF9E', fontWeight: 600 }}>%</span> unassisted</span>
                  <span style={{ fontSize: '10px', color: 'var(--gray2)' }}>avg time</span>
                </div>
              </div>
            </div>
          </div>

          {/* 6 Insights */}
          <div style={{ marginTop: '72px' }} className="reveal d2">
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gray2)', marginBottom: '24px' }}>Key Insights &amp; Solutions</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--border)', border: '1px solid var(--border)', borderRadius: '18px', overflow: 'hidden' }}>
              {[
                {
                  id: '01', scope: 'Thermostat · T2',
                  title: 'No confirmation after schedule save',
                  stat: '33% of users were uncertain the schedule had been set.',
                  fix: 'Add a clear confirmation state — visual message, animation, or return to home showing the updated schedule.',
                },
                {
                  id: '02', scope: 'Thermostat · T3',
                  title: 'Unclear time→temperature transition',
                  stat: '50% couldn\'t re-identify the previously set time; 50% confused by the step change.',
                  fix: 'Auto-focus the dial on the previous time on entry. Animate the transition from time to temperature editing.',
                },
                {
                  id: '03', scope: 'App · T2',
                  title: 'Tap vs drag gestures not discoverable',
                  stat: 'Users did not know how to interact with schedule time slots.',
                  fix: 'Provide just-in-time visual gesture hints: "Hold to add · Drag to adjust" on first entry.',
                },
                {
                  id: '04', scope: 'App · T3',
                  title: 'Mode customisation entry hidden',
                  stat: '83% could not locate where to edit a mode due to unclear entry cues.',
                  fix: '"Tap" onboarding tooltip on the mode card to surface the edit entry point.',
                },
                {
                  id: '05', scope: 'App · T4',
                  title: 'Applying modes to days unclear',
                  stat: '66% confused by the top-right icon; unsure how to assign a mode to specific days.',
                  fix: 'Add an explicit day-selection step before mode assignment, supporting both single and multi-day views.',
                },
                {
                  id: '06', scope: 'App · T6',
                  title: 'Timer and schedule modes conflated',
                  stat: '50% confused the timer feature with the recurring schedule.',
                  fix: 'Let users set a timer duration directly without first selecting a mode. A/B test: 75% preferred this direct flow.',
                },
              ].map((ins, i) => (
                <div key={ins.id} style={{ background: 'var(--bg2)', padding: '30px 28px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--orange)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Insight {ins.id}</span>
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

          {/* SUS Score + A/B */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '32px' }} className="reveal d2">

            {/* SUS */}
            <div style={{ border: '1px solid var(--border)', borderRadius: '16px', padding: '32px 28px', background: 'var(--bg2)' }}>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gray2)', marginBottom: '20px' }}>SUS Score</p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '8px' }}>
                <span style={{ fontSize: '56px', fontWeight: 800, letterSpacing: '-0.05em', lineHeight: 1, color: '#E8B96A' }}>47.5</span>
                <span style={{ fontSize: '14px', color: 'var(--gray)' }}>/ 100</span>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--gray)', lineHeight: 1.6, marginBottom: '20px' }}>Below average threshold (68). Basic tasks worked smoothly — advanced features drove the score down.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {[
                  { label: 'Mean', val: '47.5' },
                  { label: 'Std deviation', val: '13.9' },
                  { label: '95% CI', val: '33.6 – 61.4' },
                  { label: 'T-value', val: '2.57' },
                ].map(r => (
                  <div key={r.label} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', padding: '6px 0', borderBottom: '1px solid var(--border)' }}>
                    <span style={{ color: 'var(--gray2)' }}>{r.label}</span>
                    <span style={{ fontWeight: 600 }}>{r.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* A/B */}
            <div style={{ border: '1px solid var(--border)', borderRadius: '16px', padding: '32px 28px', background: 'var(--bg2)' }}>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gray2)', marginBottom: '20px' }}>A/B Test — Timer Feature</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span style={{ fontSize: '13px', fontWeight: 600 }}>Version A — Direct timer</span>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: '#6DCF9E' }}>75%</span>
                  </div>
                  <div style={{ height: '6px', background: 'var(--border)', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ width: '75%', height: '100%', background: '#6DCF9E', borderRadius: '3px' }} />
                  </div>
                  <p style={{ fontSize: '12px', color: 'var(--gray)', marginTop: '6px' }}>Set duration directly without selecting a mode first. Clearer separation of timer vs schedule.</p>
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span style={{ fontSize: '13px', fontWeight: 600 }}>Version B — Mode-first</span>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--gray2)' }}>25%</span>
                  </div>
                  <div style={{ height: '6px', background: 'var(--border)', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ width: '25%', height: '100%', background: 'rgba(255,255,255,0.2)', borderRadius: '3px' }} />
                  </div>
                  <p style={{ fontSize: '12px', color: 'var(--gray)', marginTop: '6px' }}>Select mode, then set duration. Preferred by users who valued long-term scalability.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ══ SECTION 09: DESIGN ITERATION ══ */}
      <section className="section" id="iteration">
        <div className="wrap">
          <div className="reveal"><div className="eyebrow">09 — Design Iteration</div></div>
          <div className="reveal d1"><h2 className="ttl">What we changed<br />and why.</h2></div>
          <div className="reveal d2"><p className="bod">Usability findings directly informed four key changes to the design before producing the final version.</p></div>

          <div style={{ display: 'flex', flexDirection: 'column', marginTop: '64px' }}>

            {/* Iteration 01 */}
            <div style={{ display: 'grid', gridTemplateColumns: '48px 1fr 1fr', gap: '0 48px', alignItems: 'start', padding: '48px 0', borderBottom: '1px solid var(--border)' }} className="reveal d1">
              <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--orange)', paddingTop: '4px' }}>01</span>
              <div>
                <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--gray2)', marginBottom: '10px' }}>Before</p>
                <img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773846953/portfolio/projects/nest-thermostat/01before-1773846952582.png" alt="Before: hidden multi-day interaction" style={{ width: '100%', borderRadius: '14px', display: 'block' }} />
                <p style={{ fontSize: '13px', color: 'var(--gray)', marginTop: '12px', lineHeight: 1.6 }}>Applying an event to multiple days relied on a hidden interaction (top-right icon), causing 66% of users to fail the task.</p>
              </div>
              <div>
                <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '10px' }}>After</p>
                <img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773846953/portfolio/projects/nest-thermostat/01after-1773846952582.png" alt="After: explicit day-selection view modes" style={{ width: '100%', borderRadius: '14px', display: 'block' }} />
                <p style={{ fontSize: '13px', color: 'var(--gray)', marginTop: '12px', lineHeight: 1.6 }}>Introduced explicit view modes (Single Day, Multi-day, Events). Users now select the weekday first, then adjust the temperature — aligning the mobile app perfectly with the hardware thermostat&apos;s mental model.</p>
              </div>
            </div>

            {/* Iteration 02 */}
            <div style={{ display: 'grid', gridTemplateColumns: '48px 1fr 1fr', gap: '0 48px', alignItems: 'start', padding: '48px 0', borderBottom: '1px solid var(--border)' }} className="reveal d2">
              <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--orange)', paddingTop: '4px' }}>02</span>
              <div>
                <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--gray2)', marginBottom: '10px' }}>Before</p>
                <img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773846954/portfolio/projects/nest-thermostat/02before-1773846952582.png" alt="Before: unclear time to temperature transition" style={{ width: '100%', borderRadius: '14px', display: 'block' }} />
                <p style={{ fontSize: '13px', color: 'var(--gray)', marginTop: '12px', lineHeight: 1.6 }}>On the hardware thermostat, 50% of users were confused by the sudden jump from &quot;setting time&quot; to &quot;setting temperature&quot;, and lacked clear visual confirmation after saving a schedule.</p>
              </div>
              <div>
                <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '10px' }}>After</p>
                <img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773846955/portfolio/projects/nest-thermostat/02after-1773846952582.png" alt="After: smooth transition and confirmation state" style={{ width: '100%', borderRadius: '14px', display: 'block' }} />
                <p style={{ fontSize: '13px', color: 'var(--gray)', marginTop: '12px', lineHeight: 1.6 }}>Redesigned the hardware UI to mirror the mobile app&apos;s component logic. Added smooth spatial transitions between time and temperature, and introduced explicit visual confirmation states, making system feedback instantly understandable.</p>
              </div>
            </div>

            {/* Iteration 03 */}
            <div style={{ display: 'grid', gridTemplateColumns: '48px 1fr 1fr', gap: '0 48px', alignItems: 'start', padding: '48px 0', borderBottom: '1px solid var(--border)' }} className="reveal d3">
              <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--orange)', paddingTop: '4px' }}>03</span>
              <div>
                <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--gray2)', marginBottom: '10px' }}>Before</p>
                <img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773846956/portfolio/projects/nest-thermostat/03before-1773846952582.png" alt="Before: color semantic confusion" style={{ width: '100%', borderRadius: '14px', display: 'block' }} />
                <p style={{ fontSize: '13px', color: 'var(--gray)', marginTop: '12px', lineHeight: 1.6 }}>Orange and blue were used as general accent colors for temperature values, causing confusion since these colors inherently signify "heating" and "cooling" states in HVAC contexts.</p>
              </div>
              <div>
                <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '10px' }}>After</p>
                <img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773846957/portfolio/projects/nest-thermostat/03after-1773846952582.png" alt="After: reserved colors for system states only" style={{ width: '100%', borderRadius: '14px', display: 'block' }} />
                <p style={{ fontSize: '13px', color: 'var(--gray)', marginTop: '12px', lineHeight: 1.6 }}>Reserved orange and blue strictly for active system states (heating/cooling). Temperature values now use neutral typography, preventing semantic misinterpretation.</p>
              </div>
            </div>

            {/* Iteration 04 */}
            <div style={{ display: 'grid', gridTemplateColumns: '48px 1fr 1fr', gap: '0 48px', alignItems: 'start', padding: '48px 0' }} className="reveal d4">
              <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--orange)', paddingTop: '4px' }}>04</span>
              <div>
                <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--gray2)', marginBottom: '10px' }}>Before</p>
                <img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773846957/portfolio/projects/nest-thermostat/04before-1773846952582.png" alt="Before: mode-first timer flow" style={{ width: '100%', borderRadius: '14px', display: 'block' }} />
                <p style={{ fontSize: '13px', color: 'var(--gray)', marginTop: '12px', lineHeight: 1.6 }}>Users were required to select a specific "mode" before they could set a timer duration, adding unnecessary friction to a quick task.</p>
              </div>
              <div>
                <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '10px' }}>After</p>
                <img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773846958/portfolio/projects/nest-thermostat/04after-1773846952582.png" alt="After: direct timer flow" style={{ width: '100%', borderRadius: '14px', display: 'block' }} />
                <p style={{ fontSize: '13px', color: 'var(--gray)', marginTop: '12px', lineHeight: 1.6 }}>Implemented a direct timer flow based on A/B test results (preferred by 75% of users). Users can now set a duration immediately, clearly separating temporary overrides from the long-term schedule.</p>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* ══ SECTION 10: FINAL DESIGN ══ */}
      <section className="section alt bordered" id="finaldesign">
        <div className="wrap">
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <div className="reveal"><div className="eyebrow" style={{ justifyContent: 'center' }}>10 — Final Design</div></div>
            <div className="reveal d1"><h2 className="ttl">The redesigned<br />experience.</h2></div>
            <div className="reveal d2"><p className="bod" style={{ margin: '0 auto', textAlign: 'center' }}>After iteration, the final design addresses all four friction points — with a unified interaction model across hardware and mobile.</p></div>
          </div>

          <div className="feature-inner reveal d1" style={{ marginBottom: '80px' }}>
            <div>
              <span className="ft-tag">Final · Temperature Control</span>
              <h2 className="ft-title">Single input.<br />Automatic mode.</h2>
              <p className="ft-body">One target temperature. The system detects heating or cooling automatically — no dual-threshold decision, no mode selection.</p>
            </div>
            <div className="duo">
              <img className="img-device" src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773757790/portfolio/projects/nest-thermostat/final_tempcontrol_device.png" alt="Nest thermostat temperature control final" />
              <div className="phone-wrap"><img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773757790/portfolio/projects/nest-thermostat/final_tempcontrol_phone.jpg" alt="Temperature control phone app final" /></div>
            </div>
          </div>

          <div className="feature-inner rev reveal d2" style={{ marginBottom: '80px' }}>
            <div>
              <span className="ft-tag">Final · Scheduling</span>
              <h2 className="ft-title">Vertical timeline.<br />Events with context.</h2>
              <p className="ft-body">Reusable named events now display their temperature inline. Define once, apply across the week — with full context visible at a glance.</p>
            </div>
            <div className="duo">
              <div className="phone-wrap"><img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773757788/portfolio/projects/nest-thermostat/final_schedule1.jpg" alt="Schedule single day view" /></div>
              <div className="phone-wrap"><img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773757789/portfolio/projects/nest-thermostat/final_schedule2.jpg" alt="Schedule multi day view" /></div>
            </div>
          </div>

          <div className="feature-inner rev reveal d2" style={{ marginBottom: '80px' }}>
            <div>
              <span className="ft-tag">Final · Event</span>
              <h2 className="ft-title">Named events.<br />Reusable across days.</h2>
              <p className="ft-body">Define events like Morning, Work, and Sleep once — each with a name, icon, temperature, and schedule. Apply them to any day without re-entering details.</p>
            </div>
            <div className="duo">
              <div className="phone-wrap" style={{ width: '185px' }}><img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773757787/portfolio/projects/nest-thermostat/final_event1.jpg" alt="Event edit view" /></div>
              <div className="phone-wrap" style={{ width: '185px' }}><img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773757788/portfolio/projects/nest-thermostat/final_event2.jpg" alt="Event list view" /></div>
            </div>
          </div>

          <div className="feature-inner reveal d1">
            <div>
              <span className="ft-tag">Final · Eco Mode</span>
              <h2 className="ft-title">Energy savings<br />made visible.</h2>
              <p className="ft-body">Eco mode surfaces real-time savings in dollars and percentage — actionable, transparent, and connected to user behavior.</p>
            </div>
            <div className="phone-wrap" style={{ margin: '0 auto', width: '185px' }}>
              <img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773757786/portfolio/projects/nest-thermostat/final_eco.jpg" alt="Eco mode final" />
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 11: VALIDATION STUDY ══ */}
      <section className="section alt bordered" id="validation">
        <div className="wrap">
          <div className="reveal"><div className="eyebrow">11 — Validation Study</div></div>
          <div className="reveal d1"><h2 className="ttl">Did the iteration<br />actually work?</h2></div>
          <div className="reveal d2"><p className="bod">After incorporating design changes from the evaluative study, we ran a second round of moderated usability testing with 5 participants across the same 6 mobile tasks to measure improvement.</p></div>

          {/* Method pills */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '40px' }} className="reveal d1">
            {['Moderated Think-Aloud', 'SEQ Ratings', 'System Usability Scale'].map(m => (
              <span key={m} style={{ fontSize: '12px', fontWeight: 500, color: 'var(--gray)', border: '1px solid var(--border)', borderRadius: '100px', padding: '6px 16px' }}>{m}</span>
            ))}
          </div>

          {/* Before / After task comparison */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '56px' }} className="reveal d1">
            <div>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gray2)', marginBottom: '14px' }}>Round 1 — Before Iteration</p>
              <div style={{ border: '1px solid var(--border)', borderRadius: '14px', overflow: 'hidden' }}>
                {[
                  { task: 'T1', label: 'Adjust temperature',   unassisted: 100, time: '4.5s' },
                  { task: 'T2', label: 'Create schedule',       unassisted: 83,  time: '29s'  },
                  { task: 'T3', label: 'Customize mode',        unassisted: 33,  time: '48s'  },
                  { task: 'T4', label: 'Apply mode to days',    unassisted: 50,  time: '33s'  },
                  { task: 'T5', label: 'Modify schedule',       unassisted: 50,  time: '22s'  },
                  { task: 'T6', label: 'Set Work Mode timer',   unassisted: 50,  time: '34s'  },
                ].map((row, i) => (
                  <div key={row.task} style={{ display: 'grid', gridTemplateColumns: '32px 1fr 56px 52px', gap: '12px', alignItems: 'center', padding: '14px 18px', background: 'var(--bg2)', borderTop: i > 0 ? '1px solid var(--border)' : undefined }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--orange)' }}>{row.task}</span>
                    <span style={{ fontSize: '13px', fontWeight: 500 }}>{row.label}</span>
                    <span style={{ fontSize: '12px', fontWeight: 600, color: row.unassisted === 100 ? '#6DCF9E' : row.unassisted >= 80 ? '#8FD4A8' : row.unassisted >= 50 ? '#E8B96A' : '#E87A74' }}>{row.unassisted}%</span>
                    <span style={{ fontSize: '12px', color: 'var(--gray2)', textAlign: 'right' }}>{row.time}</span>
                  </div>
                ))}
                <div style={{ padding: '8px 18px', background: '#0E0E0E', borderTop: '1px solid var(--border)', display: 'flex', gap: '20px' }}>
                  <span style={{ fontSize: '10px', color: 'var(--gray2)' }}><span style={{ color: '#6DCF9E', fontWeight: 600 }}>%</span> unassisted</span>
                  <span style={{ fontSize: '10px', color: 'var(--gray2)' }}>avg time</span>
                </div>
              </div>
            </div>

            <div>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6DCF9E', marginBottom: '14px' }}>Round 2 — After Iteration</p>
              <div style={{ border: '1px solid rgba(109,207,158,0.25)', borderRadius: '14px', overflow: 'hidden' }}>
                {[
                  { task: 'T1', label: 'Adjust temperature',   unassisted: 100, time: '3.9s', delta: 0   },
                  { task: 'T2', label: 'Create schedule',       unassisted: 100, time: '21s',  delta: +17 },
                  { task: 'T3', label: 'Customize mode',        unassisted: 80,  time: '31s',  delta: +47 },
                  { task: 'T4', label: 'Apply mode to days',    unassisted: 100, time: '24s',  delta: +50 },
                  { task: 'T5', label: 'Modify schedule',       unassisted: 80,  time: '16s',  delta: +30 },
                  { task: 'T6', label: 'Set Work Mode timer',   unassisted: 100, time: '19s',  delta: +50 },
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
                  <span style={{ fontSize: '10px', color: 'var(--gray2)' }}><span style={{ color: '#6DCF9E', fontWeight: 600 }}>%</span> unassisted</span>
                  <span style={{ fontSize: '10px', color: 'var(--gray2)' }}>avg time</span>
                </div>
              </div>
            </div>
          </div>

          {/* SUS Before / After */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '32px' }} className="reveal d2">
            <div style={{ border: '1px solid var(--border)', borderRadius: '16px', padding: '32px 28px', background: 'var(--bg2)' }}>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gray2)', marginBottom: '20px' }}>SUS Score — Round 1</p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '8px' }}>
                <span style={{ fontSize: '56px', fontWeight: 800, letterSpacing: '-0.05em', lineHeight: 1, color: '#E8B96A' }}>47.5</span>
                <span style={{ fontSize: '14px', color: 'var(--gray)' }}>/ 100</span>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--gray)', lineHeight: 1.6 }}>Below average (68). Advanced scheduling and mode features were the primary friction points.</p>
            </div>
            <div style={{ border: '1px solid rgba(109,207,158,0.25)', borderRadius: '16px', padding: '32px 28px', background: 'var(--bg2)' }}>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6DCF9E', marginBottom: '20px' }}>SUS Score — Round 2</p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '8px' }}>
                <span style={{ fontSize: '56px', fontWeight: 800, letterSpacing: '-0.05em', lineHeight: 1, color: '#6DCF9E' }}>79.2</span>
                <span style={{ fontSize: '14px', color: 'var(--gray)' }}>/ 100</span>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--gray)', lineHeight: 1.6 }}>Above average — rated "Good". Explicit day-selection, gesture hints, and the direct timer flow resolved the majority of friction.</p>
              <div style={{ marginTop: '16px', padding: '12px 16px', background: 'rgba(109,207,158,0.07)', borderRadius: '10px', border: '1px solid rgba(109,207,158,0.15)' }}>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#6DCF9E' }}>+31.7 pts improvement</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ══ SECTION 12: CROSS-DEVICE ══ */}
      <section className="section bordered" id="crossdevice">
        <div className="wrap">
          <div style={{ textAlign: 'center' }}>
            <div className="reveal"><div className="eyebrow" style={{ justifyContent: 'center' }}>12 — Cross-Device Experience</div></div>
            <div className="reveal d1"><h2 className="ttl">One mental model.<br />Two devices.</h2></div>
            <div className="reveal d2"><p className="bod" style={{ margin: '0 auto', textAlign: 'center' }}>Consistency is not achieved by making interfaces identical — it&apos;s achieved by sharing the same logic, color language, and interaction patterns across both surfaces.</p></div>
          </div>

          <div className="cross-devices reveal d2">
            <div className="dev-col">
              <span className="dev-col-label">Thermostat Hardware</span>
              <img className="img-device" src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773757785/portfolio/projects/nest-thermostat/final_crossdevice_device.png" alt="Device heating" style={{ maxWidth: '340px' }} />
              <div className="shared-pts">
                <span className="spt">Orange glow = heating state</span>
                <span className="spt">Single temperature target</span>
                <span className="spt">Vertical time navigation</span>
              </div>
            </div>
            <div className="sep-col">
              <div className="sep-line"></div>
              <div className="sep-tag">Shared Logic</div>
              <div className="sep-line"></div>
            </div>
            <div className="dev-col">
              <span className="dev-col-label">Mobile Application</span>
              <div className="phone-wrap" style={{ width: 'clamp(120px, 28vw, 210px)' }}><img src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773757785/portfolio/projects/nest-thermostat/final_crossdevice_phone.jpg" alt="Phone heating" /></div>
              <div className="shared-pts">
                <span className="spt">Orange accent = heating state</span>
                <span className="spt">Same single-input model</span>
                <span className="spt">Same vertical schedule</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ══ SECTION 13: IMPACT ══ */}
      <section className="section" id="impact">
        <div className="wrap">
          <div className="reveal"><div className="eyebrow">13 — Impact</div></div>
          <div className="reveal d1"><h2 className="ttl">Less complexity.<br />More control.</h2></div>
          <div className="reveal d2"><p className="bod">By aligning system intelligence with user mental models, the thermostat becomes easier to understand and more effective at supporting energy-efficient behavior.</p></div>

          <div className="impact-grid">
            <div className="imp-card reveal d1">
              <span className="imp-num"><span className="accent">↓ </span>60%</span>
              <h3>Reduced cognitive load</h3>
              <p>Single-target input removes the dual-threshold decision entirely. Users set intent — the system handles all operational logic automatically.</p>
            </div>
            <div className="imp-card reveal d2">
              <span className="imp-num"><span className="accent">3×</span> faster</span>
              <h3>Schedule configuration</h3>
              <p>Named reusable events replace the drag-and-edit timeline. A full week schedule sets up in a fraction of the original time.</p>
            </div>
            <div className="imp-card reveal d1">
              <span className="imp-num"><span className="accent">✦</span> Clear</span>
              <h3>Energy awareness</h3>
              <p>Real-time savings metrics and Eco indicators transform energy feedback from invisible background noise into actionable, visible data.</p>
            </div>
            <div className="imp-card reveal d2">
              <span className="imp-num"><span className="accent">✦</span> Unified</span>
              <h3>Cross-device usability</h3>
              <p>Shared interaction logic, color language, and scheduling model — users carry one mental model across hardware device and mobile app.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="nest-footer">
        <span className="f-logo"><em>nest</em> redesign</span>
        <span className="f-note">Yuchen · MFA Interaction Design · SCAD · 2026</span>
      </footer>

    </div>
    <NextProject href="/projects/dosecare" title="DoseCare" role="Team Lead & UX Designer" theme="dark" />
    </>
  );
}

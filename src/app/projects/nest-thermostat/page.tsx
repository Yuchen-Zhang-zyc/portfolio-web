"use client";
import { useEffect } from 'react';

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
    return () => io.disconnect();
  }, []);

  return (
    <>
    <link rel="stylesheet" href="/projects/nest-thermostat/nest-styles.css" />
    <div className="nest-page">

      {/* ══ HERO ══ */}
      <div className="hero">
        <span className="hero-label">UX / Product Redesign · SCAD · 2024</span>
        <h1>Simplifying smart<br />temperature <em>control.</em></h1>
        <p className="hero-sub">A redesign of the Nest thermostat ecosystem — removing cognitive friction, making system states legible, and unifying the experience across devices.</p>

        <div className="hero-images" style={{ position: 'relative' }}>
          <div className="hero-glow hero-glow-heat"></div>
          <div className="hero-glow hero-glow-cool"></div>
          <img src="/projects/nest-thermostat/hero_phones.png" alt="Nest app redesign" style={{ height: '100%', objectFit: 'contain', position: 'relative', zIndex: 1 }} />
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
              <div style={{ background: '#141414', borderRadius: '20px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 114px', height: '512px' }}>
                <div style={{ width: '260px', height: '100%', position: 'relative', flexShrink: 0 }}>
                  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '360px', height: '360px', overflow: 'hidden' }}>
                    <img src="/projects/nest-thermostat/thermo_schedule.png" alt="Original Nest thermostat — horizontal schedule" style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '168.78%', maxWidth: 'none' }} />
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
              <div style={{ background: '#141414', borderRadius: '20px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 144px', height: '512px' }}>
                <div style={{ width: '200px', height: '433px', borderRadius: '28px', overflow: 'hidden', boxShadow: '0 20px 48px rgba(0,0,0,0.2)', flexShrink: 0 }}>
                  <img src="/projects/nest-thermostat/old_energy.jpg" alt="Original app — energy history" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
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
                <img src="/projects/nest-thermostat/old_schedule_week.webp" alt="Original app — weekly heat schedule" style={{ width: '100%', borderRadius: '10px', display: 'block', boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }} />
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
                <img src="/projects/nest-thermostat/old_schedule_day.webp" alt="Original app — single day editing" style={{ width: '100%', borderRadius: '10px', display: 'block', boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }} />
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

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 28px', background: '#141414', border: '1px solid var(--border)', borderRadius: '16px' }}>
              <span style={{ fontSize: '15px', fontWeight: 400, color: 'var(--white)' }}>Dark Theme</span>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#1A1A1A', border: '1px solid rgba(255,255,255,0.15)' }}></div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 28px', background: '#141414', border: '1px solid var(--border)', borderRadius: '16px' }}>
              <span style={{ fontSize: '15px', fontWeight: 400, color: 'var(--white)' }}>Minimalist Font</span>
              <span style={{ fontSize: '22px', fontWeight: 800, color: 'var(--white)', letterSpacing: '-0.02em' }}>ABC</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 28px', background: '#141414', border: '1px solid var(--border)', borderRadius: '16px' }}>
              <span style={{ fontSize: '15px', fontWeight: 400, color: 'var(--white)' }}>Rounded Icons</span>
              <img src="/projects/nest-thermostat/icon_rounded_icons.svg" width={40} height={40} alt="Rounded Icons" style={{ display: 'block' }} />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 28px', background: '#141414', border: '1px solid var(--border)', borderRadius: '16px' }}>
              <span style={{ fontSize: '15px', fontWeight: 400, color: 'var(--white)' }}>Rounded Corners</span>
              <img src="/projects/nest-thermostat/icon_rounded_corners.svg" width={40} height={40} alt="Rounded Corners" style={{ display: 'block' }} />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 28px', background: '#141414', border: '1px solid var(--border)', borderRadius: '16px' }}>
              <span style={{ fontSize: '15px', fontWeight: 400, color: 'var(--white)' }}>Warm-Neutral Color</span>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#E8420A' }}></div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 28px', background: '#141414', border: '1px solid var(--border)', borderRadius: '16px' }}>
              <span style={{ fontSize: '15px', fontWeight: 400, color: 'var(--white)' }}>Gradient Elements</span>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'radial-gradient(circle at 35% 35%, #666, #1A1A1A)' }}></div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 28px', background: '#141414', border: '1px solid var(--border)', borderRadius: '16px' }}>
              <span style={{ fontSize: '15px', fontWeight: 400, color: 'var(--white)' }}>Average Information Density</span>
              <img src="/projects/nest-thermostat/icon_info_density.svg" width={44} height={44} alt="Average Information Density" style={{ display: 'block' }} />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 28px', background: '#141414', border: '1px solid var(--border)', borderRadius: '16px' }}>
              <span style={{ fontSize: '15px', fontWeight: 400, color: 'var(--white)' }}>Card Elements</span>
              <img src="/projects/nest-thermostat/icon_card_elements.svg" width={44} height={44} alt="Card Elements" style={{ display: 'block' }} />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 28px', background: '#141414', border: '1px solid var(--border)', borderRadius: '16px' }}>
              <span style={{ fontSize: '15px', fontWeight: 400, color: 'var(--white)' }}>Monochrome</span>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'linear-gradient(to right, #888 50%, #1A1A1A 50%)' }}></div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 28px', background: '#141414', border: '1px solid var(--border)', borderRadius: '16px' }}>
              <span style={{ fontSize: '15px', fontWeight: 400, color: 'var(--white)' }}>Focal Point</span>
              <img src="/projects/nest-thermostat/icon_focal_point.svg" width={44} height={44} alt="Focal Point" style={{ display: 'block' }} />
            </div>

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

            {/* Buttons */}
            <div style={{ marginTop: '48px' }} className="reveal d2">
              <p style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--gray)', marginBottom: '24px' }}>Buttons</p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <div style={{ border: '1px solid var(--border)', borderRadius: '12px', padding: '20px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2v5M5 4.27A5 5 0 1 0 8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
                    </div>
                    <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(255,255,255,1)', border: '1px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2v5M5 4.27A5 5 0 1 0 8 3" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round"/></svg>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '20px' }}>
                    <div style={{ textAlign: 'center' }}><span style={{ fontSize: '10px', color: 'var(--gray)', display: 'block' }}>#FAFAFA</span><span style={{ fontSize: '10px', color: 'var(--gray)' }}>20%</span></div>
                    <div style={{ textAlign: 'center' }}><span style={{ fontSize: '10px', color: 'var(--gray)', display: 'block' }}>#FAFAFA</span><span style={{ fontSize: '10px', color: 'var(--gray)' }}>100%</span></div>
                  </div>
                </div>
                <div style={{ border: '1px solid var(--border)', borderRadius: '12px', padding: '20px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '16px', fontWeight: 600, color: 'white' }}>S</span>
                  </div>
                  <span style={{ fontSize: '10px', color: 'var(--gray)' }}>Weight – 1pt</span>
                  <span style={{ fontSize: '10px', color: 'var(--gray)' }}>Corner – 30</span>
                </div>
                <div style={{ border: '1px solid var(--border)', borderRadius: '12px', padding: '20px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 3c3.87 0 7 3.13 7 7s-3.13 7-7 7-7-3.13-7-7 3.13-7 7-7zm0 3v4l3 1.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><div style={{ width: '40px', height: '2px', background: 'rgba(255,255,255,0.3)', borderRadius: '1px' }}></div><span style={{ fontSize: '10px', color: 'var(--gray)' }}>70px</span></div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><div style={{ width: '20px', height: '2px', background: 'rgba(255,255,255,0.3)', borderRadius: '1px' }}></div><span style={{ fontSize: '10px', color: 'var(--gray)' }}>20px</span></div>
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
                  <img className="img-device" src="/projects/nest-thermostat/hifi_01_device.png" alt="Heating state device" />
                  <div className="phone-wrap"><img src="/projects/nest-thermostat/hifi_01_phone.png" alt="Heating state phone" /></div>
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
                  <img className="img-device" src="/projects/nest-thermostat/hifi_02_device.png" alt="Schedule on device" />
                  <img className="img-device" src="/projects/nest-thermostat/hifi_02_phone.png" alt="Time change on device" />
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
                  <img className="img-device" src="/projects/nest-thermostat/hifi_03_phone1.png" alt="Week menu" />
                  <img className="img-device" src="/projects/nest-thermostat/hifi_03_phone2.png" alt="Temp change" />
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
                  <img className="img-device" src="/projects/nest-thermostat/hifi_05_heat_phone.png" alt="Heating state" />
                  <img className="img-device" src="/projects/nest-thermostat/hifi_05_cool_phone.png" alt="Cooling state" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{/* end solutions */}

      {/* ══ SECTION 08: USABILITY TESTING ══ */}
      <section className="section alt bordered" id="testing">
        <div className="wrap">
          <div className="reveal"><div className="eyebrow">08 — Usability Testing</div></div>
          <div className="reveal d1"><h2 className="ttl">Testing the first<br />version with real users.</h2></div>
          <div className="reveal d2"><p className="bod">After completing the initial HiFi prototype, we conducted a usability test to evaluate core interaction flows and identify friction before final iteration.</p></div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', marginTop: '64px' }}>

            {/* Test setup */}
            <div className="reveal d1">
              <p style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--gray2)', marginBottom: '20px' }}>Test Setup</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', border: '1px solid var(--border)', borderRadius: '14px', overflow: 'hidden' }}>
                <div style={{ padding: '18px 22px', background: 'var(--bg2)', display: 'grid', gridTemplateColumns: '100px 1fr', gap: '16px' }}>
                  <span style={{ fontSize: '12px', color: 'var(--gray2)' }}>Participants</span>
                  <span style={{ fontSize: '14px', fontWeight: 500 }}>5 users</span>
                </div>
                <div style={{ padding: '18px 22px', background: 'var(--bg2)', display: 'grid', gridTemplateColumns: '100px 1fr', gap: '16px', borderTop: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '12px', color: 'var(--gray2)' }}>Method</span>
                  <span style={{ fontSize: '14px', fontWeight: 500 }}>Think-aloud protocol</span>
                </div>
                <div style={{ padding: '18px 22px', background: 'var(--bg2)', display: 'grid', gridTemplateColumns: '100px 1fr', gap: '16px', borderTop: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '12px', color: 'var(--gray2)' }}>Platform</span>
                  <span style={{ fontSize: '14px', fontWeight: 500 }}>Figma prototype</span>
                </div>
                <div style={{ padding: '18px 22px', background: 'var(--bg2)', display: 'grid', gridTemplateColumns: '100px 1fr', gap: '16px', borderTop: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '12px', color: 'var(--gray2)' }}>Duration</span>
                  <span style={{ fontSize: '14px', fontWeight: 500 }}>~30 min / session</span>
                </div>
              </div>
            </div>

            {/* Tasks */}
            <div className="reveal d2">
              <p style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--gray2)', marginBottom: '20px' }}>Test Tasks</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '18px 20px', border: '1px solid var(--border)', borderRadius: '12px', background: 'var(--bg2)' }}>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--orange)', flexShrink: 0 }}>T1</span>
                  <div><div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '4px' }}>Set a target temperature</div><div style={{ fontSize: '13px', color: 'var(--gray)' }}>Can users adjust temperature without understanding heating/cooling modes?</div></div>
                </div>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '18px 20px', border: '1px solid var(--border)', borderRadius: '12px', background: 'var(--bg2)' }}>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--orange)', flexShrink: 0 }}>T2</span>
                  <div><div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '4px' }}>Create a weekly schedule</div><div style={{ fontSize: '13px', color: 'var(--gray)' }}>Can users set up Sleep, Away, Wake Up events across multiple days?</div></div>
                </div>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '18px 20px', border: '1px solid var(--border)', borderRadius: '12px', background: 'var(--bg2)' }}>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--orange)', flexShrink: 0 }}>T3</span>
                  <div><div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '4px' }}>Activate and read Eco mode</div><div style={{ fontSize: '13px', color: 'var(--gray)' }}>Do users understand the energy savings feedback and what it means?</div></div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Findings */}
          <div style={{ marginTop: '64px' }} className="reveal d2">
            <p style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--gray2)', marginBottom: '20px' }}>Key Findings</p>

            <div style={{ background: 'var(--bg2)', border: '2px dashed rgba(255,255,255,0.1)', borderRadius: '20px', padding: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '12px', marginBottom: '32px', minHeight: '200px' }}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="2" y="2" width="28" height="28" rx="6" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeDasharray="4 3"/><line x1="16" y1="10" x2="16" y2="22" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round"/><line x1="10" y1="16" x2="22" y2="16" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round"/></svg>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.2)', textAlign: 'center' }}>Test session photos / affinity diagram<br />Upload when available</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1px', background: 'var(--border)', border: '1px solid var(--border)', borderRadius: '14px', overflow: 'hidden' }}>
              <div style={{ background: 'var(--bg2)', padding: '28px 24px' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--orange)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>Finding 01</div>
                <div style={{ fontSize: '15px', fontWeight: 600, marginBottom: '8px' }}>Temperature input was intuitive</div>
                <p style={{ fontSize: '13px', color: 'var(--gray)', lineHeight: 1.65 }}>All 5 users successfully set a target temperature without hesitation. No one asked about heating/cooling mode.</p>
              </div>
              <div style={{ background: 'var(--bg2)', padding: '28px 24px', borderLeft: '1px solid var(--border)' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--orange)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>Finding 02</div>
                <div style={{ fontSize: '15px', fontWeight: 600, marginBottom: '8px' }}>Schedule event naming caused confusion</div>
                <p style={{ fontSize: '13px', color: 'var(--gray)', lineHeight: 1.65 }}>3 of 5 users were unsure what &quot;Away&quot; meant as a temperature event. Labels needed clearer context.</p>
              </div>
              <div style={{ background: 'var(--bg2)', padding: '28px 24px', borderLeft: '1px solid var(--border)' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--orange)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>Finding 03</div>
                <div style={{ fontSize: '15px', fontWeight: 600, marginBottom: '8px' }}>Eco savings data was compelling</div>
                <p style={{ fontSize: '13px', color: 'var(--gray)', lineHeight: 1.65 }}>Users responded positively to the dollar savings display. 4 of 5 said it would change how they use the thermostat.</p>
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
          <div className="reveal d2"><p className="bod">Usability findings directly informed three key changes to the design before producing the final version.</p></div>

          <div style={{ display: 'flex', flexDirection: 'column', marginTop: '64px' }}>

            {/* Iteration 01 */}
            <div style={{ display: 'grid', gridTemplateColumns: '48px 1fr 1fr', gap: '0 48px', alignItems: 'start', padding: '48px 0', borderBottom: '1px solid var(--border)' }} className="reveal">
              <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--orange)', paddingTop: '4px' }}>01</span>
              <div>
                <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--gray2)', marginBottom: '10px' }}>Before</p>
                <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '14px', padding: '24px', minHeight: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '8px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="1" y="1" width="22" height="22" rx="4" stroke="rgba(255,255,255,0.15)" strokeWidth="1.2" strokeDasharray="3 2"/></svg>
                  <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.2)', textAlign: 'center' }}>Before screenshot<br />Upload when available</p>
                </div>
                <p style={{ fontSize: '13px', color: 'var(--gray)', marginTop: '12px', lineHeight: 1.6 }}>Schedule event labels — &quot;Sleep&quot;, &quot;Away&quot;, &quot;Wake Up&quot; — shown without temperature context, leaving users uncertain about what each event controls.</p>
              </div>
              <div>
                <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '10px' }}>After</p>
                <div style={{ background: 'var(--bg2)', border: '1px solid rgba(232,66,10,0.2)', borderRadius: '14px', padding: '24px', minHeight: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '8px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="1" y="1" width="22" height="22" rx="4" stroke="rgba(232,66,10,0.3)" strokeWidth="1.2" strokeDasharray="3 2"/></svg>
                  <p style={{ fontSize: '12px', color: 'rgba(232,66,10,0.3)', textAlign: 'center' }}>After screenshot<br />Upload when available</p>
                </div>
                <p style={{ fontSize: '13px', color: 'var(--gray)', marginTop: '12px', lineHeight: 1.6 }}>Each event now displays its associated temperature inline. Users immediately see what &quot;Away&quot; means in practice — 65°F, Eco active.</p>
              </div>
            </div>

            {/* Iteration 02 */}
            <div style={{ display: 'grid', gridTemplateColumns: '48px 1fr 1fr', gap: '0 48px', alignItems: 'start', padding: '48px 0', borderBottom: '1px solid var(--border)' }} className="reveal d1">
              <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--orange)', paddingTop: '4px' }}>02</span>
              <div>
                <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--gray2)', marginBottom: '10px' }}>Before</p>
                <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '14px', padding: '24px', minHeight: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '8px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="1" y="1" width="22" height="22" rx="4" stroke="rgba(255,255,255,0.15)" strokeWidth="1.2" strokeDasharray="3 2"/></svg>
                  <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.2)', textAlign: 'center' }}>Before screenshot<br />Upload when available</p>
                </div>
                <p style={{ fontSize: '13px', color: 'var(--gray)', marginTop: '12px', lineHeight: 1.6 }}>Upload your before/after iteration screenshots to replace these placeholders.</p>
              </div>
              <div>
                <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '10px' }}>After</p>
                <div style={{ background: 'var(--bg2)', border: '1px solid rgba(232,66,10,0.2)', borderRadius: '14px', padding: '24px', minHeight: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '8px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="1" y="1" width="22" height="22" rx="4" stroke="rgba(232,66,10,0.3)" strokeWidth="1.2" strokeDasharray="3 2"/></svg>
                  <p style={{ fontSize: '12px', color: 'rgba(232,66,10,0.3)', textAlign: 'center' }}>After screenshot<br />Upload when available</p>
                </div>
                <p style={{ fontSize: '13px', color: 'var(--gray)', marginTop: '12px', lineHeight: 1.6 }}>Describe the second iteration change here once you have the before/after screenshots ready.</p>
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
              <img className="img-device" src="/projects/nest-thermostat/Home_Heat.png" alt="Heating state" />
              <div className="phone-wrap"><img src="/projects/nest-thermostat/Homepage 72 to 68-2.png" alt="Heating phone" /></div>
            </div>
          </div>

          <div className="feature-inner rev reveal d2" style={{ marginBottom: '80px' }}>
            <div>
              <span className="ft-tag">Final · Scheduling</span>
              <h2 className="ft-title">Vertical timeline.<br />Events with context.</h2>
              <p className="ft-body">Reusable named events now display their temperature inline. Define once, apply across the week — with full context visible at a glance.</p>
            </div>
            <div className="duo">
              <img className="img-device" src="/projects/nest-thermostat/Schedule.png" alt="Schedule device" />
              <img className="img-device" src="/projects/nest-thermostat/Week_menu.png" alt="Week menu" />
            </div>
          </div>

          <div className="feature-inner reveal d1">
            <div>
              <span className="ft-tag">Final · Eco Mode</span>
              <h2 className="ft-title">Energy savings<br />made visible.</h2>
              <p className="ft-body">Eco mode surfaces real-time savings in dollars and percentage — actionable, transparent, and connected to user behavior.</p>
            </div>
            <div className="phone-wrap lg" style={{ margin: '0 auto' }}>
              <img src="/projects/nest-thermostat/Eco_Mode_9.png" alt="Eco mode final" />
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 11: CROSS-DEVICE ══ */}
      <section className="section bordered" id="crossdevice">
        <div className="wrap">
          <div style={{ textAlign: 'center' }}>
            <div className="reveal"><div className="eyebrow" style={{ justifyContent: 'center' }}>11 — Cross-Device Experience</div></div>
            <div className="reveal d1"><h2 className="ttl">One mental model.<br />Two devices.</h2></div>
            <div className="reveal d2"><p className="bod" style={{ margin: '0 auto', textAlign: 'center' }}>Consistency is not achieved by making interfaces identical — it&apos;s achieved by sharing the same logic, color language, and interaction patterns across both surfaces.</p></div>
          </div>

          <div className="cross-devices reveal d2">
            <div className="dev-col">
              <span className="dev-col-label">Thermostat Hardware</span>
              <img className="img-device" src="/projects/nest-thermostat/Home_Heat.png" alt="Device heating" style={{ maxWidth: '340px' }} />
              <div className="shared-pts">
                <span className="spt">Orange glow = heating state</span>
                <span className="spt">Single temperature target</span>
                <span className="spt">Vertical time navigation</span>
                <span className="spt">Eco on-device indicator</span>
              </div>
            </div>
            <div className="sep-col">
              <div className="sep-line"></div>
              <div className="sep-tag">Shared Logic</div>
              <div className="sep-line"></div>
            </div>
            <div className="dev-col">
              <span className="dev-col-label">Mobile Application</span>
              <div className="phone-wrap" style={{ width: '210px' }}><img src="/projects/nest-thermostat/Homepage 72 to 68-2.png" alt="Phone heating" /></div>
              <div className="shared-pts">
                <span className="spt">Orange accent = heating state</span>
                <span className="spt">Same single-input model</span>
                <span className="spt">Same vertical schedule</span>
                <span className="spt">Same eco feedback layer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 12: DESIGN SYSTEM ══ */}
      <section className="section alt" id="system">
        <div className="wrap">
          <div className="reveal"><div className="eyebrow">12 — Design System</div></div>
          <div className="reveal d1"><h2 className="ttl">Tokens built for<br />two platforms.</h2></div>
          <div className="reveal d2"><p className="bod">A unified design system ensures scalability and consistency across the ecosystem. Shared color tokens, typography scale, and component states mean design decisions propagate across hardware and mobile without drift.</p></div>

          <div className="token-grid reveal d2">
            <div className="tk" style={{ background: '#C43830' }}><span style={{ color: 'rgba(255,255,255,0.6)' }}>Heating</span></div>
            <div className="tk" style={{ background: '#4A7FD4' }}><span style={{ color: 'rgba(255,255,255,0.6)' }}>Cooling</span></div>
            <div className="tk" style={{ background: '#3DA870' }}><span style={{ color: 'rgba(255,255,255,0.6)' }}>Eco</span></div>
            <div className="tk" style={{ background: '#E8420A' }}><span style={{ color: 'rgba(255,255,255,0.6)' }}>Accent</span></div>
            <div className="tk" style={{ background: '#1A1A1A', border: '1px solid #2A2A2A' }}><span style={{ color: 'rgba(255,255,255,0.25)' }}>Device</span></div>
            <div className="tk" style={{ background: '#111', border: '1px solid #222' }}><span style={{ color: 'rgba(255,255,255,0.2)' }}>Surface</span></div>
            <div className="tk" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid #222' }}><span style={{ color: 'rgba(255,255,255,0.25)' }}>Overlay</span></div>
            <div className="tk" style={{ background: '#F5F5F5', border: '1px solid #ddd' }}><span style={{ color: 'rgba(0,0,0,0.35)' }}>White</span></div>
          </div>

          <div className="ds-grid reveal d2">
            <div className="ds-card">
              <div className="ds-preview">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-start' }}>
                  <div className="state-pill pill-heat"><span className="s-dot"></span>Heating</div>
                  <div className="state-pill pill-cool"><span className="s-dot"></span>Cooling</div>
                  <div className="state-pill pill-eco"><span className="s-dot"></span>Eco Active</div>
                </div>
              </div>
              <div className="ds-label">State Indicators<span className="ds-sub">Default · Active · Eco · Error</span></div>
            </div>

            <div className="ds-card">
              <div className="ds-preview">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4A7FD4', flexShrink: 0 }}></span>
                    <div><div style={{ fontSize: '13px', fontWeight: 500 }}>Sleep</div><div style={{ fontSize: '11px', color: 'var(--gray)' }}>68°F</div></div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', background: 'rgba(232,66,10,0.1)', border: '1px solid rgba(232,66,10,0.25)', borderRadius: '10px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#E8420A', flexShrink: 0 }}></span>
                    <div><div style={{ fontSize: '13px', fontWeight: 500, color: '#F5A07A' }}>Wake Up · Now</div><div style={{ fontSize: '11px', color: '#F5A07A', opacity: 0.7 }}>75°F</div></div>
                  </div>
                </div>
              </div>
              <div className="ds-label">Schedule Events<span className="ds-sub">Reusable · Named · Multi-day</span></div>
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
        <span className="f-note">Yuchen · MFA Interaction Design · SCAD · 2024</span>
      </footer>

    </div>
    </>
  );
}

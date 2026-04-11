export default function DoseCareExport() {
  const BLUE = "#2B5EE8";
  const INK = "#1C1A16";
  const MUTED = "#4A4740";
  const SUBTLE = "#9B9690";
  const LINE = "#E4E0DB";
  const BG = "#FAFAF8";

  const css = `
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html, body { background: #fff !important; color: #1C1A16 !important; }
    -webkit-print-color-adjust: exact; print-color-adjust: exact;

    /* Hide root layout chrome */
    body > div#__next > div > nav,
    body > div#__next > div > header,
    nav[class*="liquid"],
    nav[class*="top"],
    header { display: none !important; }

    /* Reset main wrapper */
    main { padding: 0 !important; margin: 0 !important; background: #fff !important; flex: none !important; }

    /* Reset body wrapper classes from root layout */
    body > div, body > div > div { background: #fff !important; }

    .page {
      width: 1280px;
      padding: 80px 96px;
      background: #fff;
      page-break-after: always;
      break-after: page;
      position: relative;
      min-height: 905px;
    }
    .page:last-child { page-break-after: avoid; break-after: avoid; }

    /* Typography */
    .eyebrow {
      font-family: 'DM Mono', monospace;
      font-size: 10px;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: ${BLUE};
      margin-bottom: 14px;
    }
    .h1 { font-size: 52px; font-weight: 700; color: ${INK}; line-height: 1.05; letter-spacing: -0.03em; }
    .h2 { font-size: 28px; font-weight: 700; color: ${INK}; line-height: 1.15; letter-spacing: -0.02em; margin-bottom: 16px; }
    .h3 { font-size: 16px; font-weight: 600; color: ${INK}; margin-bottom: 6px; }
    .body { font-size: 14px; color: ${MUTED}; line-height: 1.75; }
    .caption { font-family: 'DM Mono', monospace; font-size: 9px; color: ${SUBTLE}; text-transform: uppercase; letter-spacing: 0.1em; }

    /* Layout */
    .col2 { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; }
    .col3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 32px; }
    .col-55-45 { display: grid; grid-template-columns: 55% 45%; gap: 64px; align-items: start; }

    /* Rule */
    .rule { width: 100%; height: 1px; background: ${LINE}; margin: 32px 0; }
    .rule-sm { width: 100%; height: 1px; background: ${LINE}; margin: 20px 0; }
    .accent-bar { width: 36px; height: 3px; background: ${BLUE}; margin-bottom: 20px; }

    /* Stats row */
    .stats { display: flex; border: 1px solid ${LINE}; margin-top: 32px; }
    .stat { padding: 18px 24px; border-right: 1px solid ${LINE}; flex: 1; }
    .stat:last-child { border-right: none; }
    .stat-num { font-size: 28px; font-weight: 700; color: ${INK}; display: block; }
    .stat-label { font-family: 'DM Mono', monospace; font-size: 9px; color: ${SUBTLE}; text-transform: uppercase; letter-spacing: 0.1em; margin-top: 3px; display: block; }

    /* Chips */
    .chips { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 16px; }
    .chip { font-family: 'DM Mono', monospace; font-size: 9px; background: #EEF2FD; color: ${BLUE}; padding: 3px 8px; }
    .chip-n { background: ${BG}; color: ${MUTED}; border: 1px solid ${LINE}; }

    /* Table */
    .table { border: 1px solid ${LINE}; width: 100%; }
    .row { display: grid; grid-template-columns: 140px 1fr; border-bottom: 1px solid ${LINE}; }
    .row:last-child { border-bottom: none; }
    .td-label { padding: 10px 14px; font-family: 'DM Mono', monospace; font-size: 9px; text-transform: uppercase; letter-spacing: 0.08em; color: ${SUBTLE}; background: ${BG}; border-right: 1px solid ${LINE}; }
    .td-value { padding: 10px 14px; font-size: 12px; color: ${MUTED}; line-height: 1.6; }

    /* Insight row */
    .insight { display: flex; gap: 20px; padding: 18px 0; border-top: 1px solid ${LINE}; align-items: flex-start; }
    .insight-num { font-family: 'DM Mono', monospace; font-size: 10px; color: ${BLUE}; flex-shrink: 0; padding-top: 3px; }
    .insight-title { font-size: 13px; font-weight: 600; color: ${INK}; margin-bottom: 5px; }
    .insight-body { font-size: 12px; color: ${MUTED}; line-height: 1.65; }
    .insight-impl { font-size: 11px; color: ${BLUE}; font-style: italic; margin-top: 6px; }

    /* Decision */
    .decision { border-top: 1px solid ${LINE}; padding-top: 20px; margin-bottom: 24px; }
    .decision-label { font-family: 'DM Mono', monospace; font-size: 9px; color: ${SUBTLE}; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 6px; }
    .decision-head { font-size: 16px; font-weight: 600; color: ${INK}; margin-bottom: 12px; }

    /* Finding */
    .finding { display: flex; gap: 16px; padding: 16px 0; border-top: 1px solid ${LINE}; }
    .finding-num { font-family: 'DM Mono', monospace; font-size: 10px; color: ${BLUE}; flex-shrink: 0; padding-top: 2px; }
    .finding-title { font-size: 13px; font-weight: 600; color: ${INK}; margin-bottom: 4px; }
    .finding-body { font-size: 12px; color: ${MUTED}; line-height: 1.6; }
    .finding-metric { font-family: 'DM Mono', monospace; font-size: 9px; color: ${BLUE}; margin-top: 5px; }

    /* Persona */
    .persona { border: 1px solid ${LINE}; margin-bottom: 16px; }
    .persona-header { padding: 12px 16px; background: ${BLUE}; }
    .persona-header-dark { background: ${INK}; }
    .persona-name { font-size: 14px; font-weight: 600; color: #fff; }
    .persona-sub { font-family: 'DM Mono', monospace; font-size: 9px; color: rgba(255,255,255,0.6); margin-top: 2px; }
    .persona-quote { padding: 13px 16px; font-size: 13px; font-style: italic; color: ${MUTED}; line-height: 1.65; border-bottom: 1px solid ${LINE}; }
    .persona-detail { display: flex; flex-direction: column; }
    .persona-detail-row { display: flex; flex-direction: column; gap: 3px; padding: 10px 16px; border-bottom: 1px solid ${LINE}; }
    .persona-detail-row:last-child { border-bottom: none; }
    .persona-detail-label { font-family: 'DM Mono', monospace; font-size: 9px; text-transform: uppercase; letter-spacing: 0.1em; color: ${SUBTLE}; }
    .persona-detail-value { font-size: 12px; color: ${MUTED}; line-height: 1.6; }

    /* Screens */
    .screen-row { display: flex; gap: 16px; margin-top: 20px; align-items: flex-start; }
    .screen-img img { height: 320px; width: auto; display: block; border-radius: 10px; border: 1px solid ${LINE}; }
    .screen-label { font-family: 'DM Mono', monospace; font-size: 9px; color: ${SUBTLE}; text-transform: uppercase; letter-spacing: 0.1em; margin-top: 8px; }

    /* Pullquote */
    .pullquote { border-left: 3px solid ${BLUE}; padding-left: 20px; margin: 24px 0; font-size: 16px; font-weight: 300; font-style: italic; color: ${INK}; line-height: 1.65; }

    /* Problem list */
    .prob-list { list-style: none; }
    .prob-item { display: flex; gap: 14px; padding: 12px 0; border-top: 1px solid ${LINE}; font-size: 13px; color: ${MUTED}; }
    .prob-num { font-family: 'DM Mono', monospace; font-size: 9px; color: ${BLUE}; flex-shrink: 0; padding-top: 2px; }

    /* Changes list */
    .change { display: flex; gap: 12px; padding: 10px 0; border-top: 1px solid ${LINE}; font-size: 13px; color: ${MUTED}; }
    .change-mark { font-family: 'DM Mono', monospace; font-size: 9px; color: ${BLUE}; flex-shrink: 0; padding-top: 2px; }

    /* Refl list */
    .refl-list { list-style: disc; padding-left: 18px; margin-top: 8px; }
    .refl-list li { font-size: 13px; color: ${MUTED}; line-height: 1.7; margin-bottom: 5px; }

    /* Page number */
    .pg { position: absolute; bottom: 40px; right: 96px; font-family: 'DM Mono', monospace; font-size: 9px; color: ${SUBTLE}; }
    .pg-logo { position: absolute; bottom: 40px; left: 96px; font-family: 'DM Mono', monospace; font-size: 9px; color: ${SUBTLE}; }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {/* ── PAGE 1: Cover ── */}
      <div className="page">
        <div className="col-55-45" style={{ minHeight: 720 }}>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div className="eyebrow">UX Case Study · iOS · 2025</div>
            <h1 className="h1" style={{ marginBottom: 24 }}>
              DoseCare<br />
              <span style={{ fontWeight: 300 }}>Medication</span><br />
              <span style={{ fontWeight: 300 }}>adherence</span><br />
              <span style={{ color: BLUE }}>for adults 65+</span>
            </h1>
            <p className="body" style={{ maxWidth: 480 }}>
              A medication management iOS app built around one core unmet need — confirmation. Designed from 9 user interviews and 129 research notes, validated through usability testing, and rebuilt from the ground up after a structural pivot.
            </p>
            <div className="stats">
              {[
                { num: "9", label: "Interviews" },
                { num: "129", label: "Research notes" },
                { num: "5", label: "Insights" },
                { num: "65+", label: "Target age" },
              ].map(s => (
                <div className="stat" key={s.label}>
                  <span className="stat-num">{s.num}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 24 }}>
              <div className="caption" style={{ marginBottom: 8 }}>Role & Tools</div>
              <div className="chips">
                <span className="chip">Solo UX Designer</span>
                {["Figma", "Stark", "SF Symbols", "iOS"].map(t => (
                  <span className="chip chip-n" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773788345/portfolio/projects/dosecare/hero.jpg"
              alt="DoseCare app"
              style={{ width: "100%", borderRadius: 16, display: "block" }}
            />
          </div>
        </div>
        <span className="pg-logo">DoseCare — UX Case Study</span>
        <span className="pg">01</span>
      </div>

      {/* ── PAGE 2: Problem + Research ── */}
      <div className="page">
        <div className="col2">
          <div>
            <div className="eyebrow">02 — Problem</div>
            <h2 className="h2">The gap existing apps don&apos;t address</h2>
            <p className="body" style={{ marginBottom: 16 }}>
              Older adults managing multiple daily medications face a problem that goes beyond scheduling. The challenge is not remembering to take medication — it&apos;s remembering whether it was already taken. Existing apps send alerts but offer no confirmation.
            </p>
            <p className="body" style={{ marginBottom: 20 }}>
              Apps like Perx require complex manual prescription entry that many 65+ users cannot complete independently — creating reliance on family members before the product delivers any value.
            </p>
            <ul className="prob-list">
              {[
                "No way to confirm a dose was actually taken",
                "Notification fatigue causes alerts to be dismissed",
                "Complex onboarding forces reliance on family members",
                "Caregivers have no reliable source of truth",
              ].map((item, i) => (
                <li className="prob-item" key={i}>
                  <span className="prob-num">0{i + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="eyebrow">03 — Research</div>
            <h2 className="h2">9 interviews · 129 notes</h2>
            <div className="table" style={{ marginBottom: 20 }}>
              {[
                { label: "Methods", value: "Semi-structured interviews (patients + caregivers), secondary research (doctor perspective), affinity mapping + tag synthesis" },
                { label: "Participants", value: "9 total · patients + caregivers · primary: 65+ adults with chronic conditions" },
                { label: "Session", value: "10–20 minutes each" },
                { label: "Notes", value: "129 notes tagged and grouped into themes" },
                { label: "Key finding", value: "Adherence is not a scheduling problem — it is a confidence problem" },
              ].map(r => (
                <div className="row" key={r.label}>
                  <div className="td-label">{r.label}</div>
                  <div className="td-value">{r.value}</div>
                </div>
              ))}
            </div>
            <div className="pullquote" style={{ fontSize: 14 }}>
              &ldquo;The core finding shifted the product direction: adherence is a confidence problem, not a scheduling problem.&rdquo;
            </div>
          </div>
        </div>
        <span className="pg-logo">DoseCare — UX Case Study</span>
        <span className="pg">02</span>
      </div>

      {/* ── PAGE 3: Personas + Insights ── */}
      <div className="page">
        <div className="col2">
          <div>
            <div className="eyebrow">03 — Personas</div>
            <div className="persona">
              <div className="persona-header">
                <div className="persona-name">Mrs. Eleanor</div>
                <div className="persona-sub">71 · Lives alone · Son is remote caregiver</div>
              </div>
              <div className="persona-quote">&ldquo;I&apos;ve taken so many pills I can&apos;t always remember if I already took today&apos;s.&rdquo;</div>
              <div className="persona-detail">
                {[
                  { label: "Situation", value: "Manages 6 medications daily. Previously tried Perx but abandoned it mid-setup." },
                  { label: "Goals", value: "Stay independent, feel certain she's managing her health correctly." },
                  { label: "Frustrations", value: "Can't confirm doses. Too many notifications she's learned to dismiss." },
                ].map(r => (
                  <div className="persona-detail-row" key={r.label}>
                    <span className="persona-detail-label">{r.label}</span>
                    <span className="persona-detail-value">{r.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="persona">
              <div className="persona-header persona-header-dark">
                <div className="persona-name">Michael</div>
                <div className="persona-sub">44 · Eleanor&apos;s son · Remote caregiver</div>
              </div>
              <div className="persona-quote">&ldquo;I call her every day just to make sure she&apos;s taken her medication. I can&apos;t always tell if she actually has.&rdquo;</div>
              <div className="persona-detail">
                {[
                  { label: "Primary need", value: "Exception-based visibility — know when something is wrong, not a full daily log." },
                  { label: "Core tension", value: "Support his mother without making her feel monitored or incapable." },
                ].map(r => (
                  <div className="persona-detail-row" key={r.label}>
                    <span className="persona-detail-label">{r.label}</span>
                    <span className="persona-detail-value">{r.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="eyebrow">04 — Key Insights</div>
            <h2 className="h2">What research revealed</h2>
            {[
              { num: "01", title: "Confirmation is the real unmet need", body: "Users couldn't tell if they'd already taken a dose. No existing tool gave them a reliable way to check.", impl: "→ Prioritize explicit dose confirmation over reminders." },
              { num: "02", title: "Notification fatigue undermines adherence", body: "Frequent, undifferentiated alerts trained users to ignore reminders entirely.", impl: "→ Fewer, more meaningful alerts — not more." },
              { num: "03", title: "Complex onboarding creates a barrier", body: "Apps like Perx required manual prescription entry. Participants abandoned setup mid-flow.", impl: "→ Barcode scanning as primary entry — manual as fallback." },
              { num: "04", title: "Simplicity enables independence", body: "Older adults wanted to stay in control but needed interfaces that felt calm and low-effort.", impl: "→ Each screen focuses on one task — no feature overload." },
              { num: "05", title: "Accessibility is foundational", body: "Readability, tap target size, and clear patterns are central for 65+ users under cognitive constraints.", impl: "→ Accessibility shapes layout, hierarchy, and feedback everywhere." },
            ].map(ins => (
              <div className="insight" key={ins.num}>
                <span className="insight-num">{ins.num}</span>
                <div>
                  <div className="insight-title">{ins.title}</div>
                  <div className="insight-body">{ins.body}</div>
                  <div className="insight-impl">{ins.impl}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <span className="pg-logo">DoseCare — UX Case Study</span>
        <span className="pg">03</span>
      </div>

      {/* ── PAGE 4: Design Decisions ── */}
      <div className="page">
        <div className="eyebrow">06 — Design Decisions</div>
        <h2 className="h2" style={{ marginBottom: 4 }}>Why simpler won every time</h2>
        <p className="body" style={{ marginBottom: 32 }}>Each decision prioritized reducing friction over adding features. Every choice traces back to a specific research insight.</p>
        <div className="col2">
          <div>
            {[
              {
                label: "Decision 01 — Home Screen",
                headline: "Today-only view as single source of truth",
                rows: [
                  { label: "Decision", value: "Home screen shows only today's doses with confirm / skip actions." },
                  { label: "Reasoning", value: "Limiting scope to today makes the current task obvious and reduces anxiety from seeing future complexity." },
                  { label: "Linked insights", value: "#01 Confirmation · #04 Simplicity · #02 Notification fatigue" },
                ],
              },
              {
                label: "Decision 02 — Dose Confirmation",
                headline: "Confirmation embedded directly in the feed",
                rows: [
                  { label: "Decision", value: "Users confirm doses from the home feed without deeper navigation." },
                  { label: "Reasoning", value: "The confirmation-first model must be instantly accessible — not buried one tap away." },
                  { label: "Linked insights", value: "#01 Confirmation · #04 Simplicity · #05 Accessibility" },
                ],
              },
              {
                label: "Decision 03 — Scan to Add",
                headline: "Barcode scanning as the primary entry",
                rows: [
                  { label: "Decision", value: "Barcode-first onboarding auto-fills pill name, dosage, and instructions. Manual entry is fallback." },
                  { label: "Reasoning", value: "Perx research showed manual entry caused abandonment. Scanning removes the complexity." },
                  { label: "Linked insights", value: "#03 Onboarding · #04 Simplicity · #01 Trust" },
                ],
              },
            ].map(d => (
              <div className="decision" key={d.label}>
                <div className="decision-label">{d.label}</div>
                <div className="decision-head">{d.headline}</div>
                <div className="table">
                  {d.rows.map(r => (
                    <div className="row" key={r.label}>
                      <div className="td-label">{r.label}</div>
                      <div className="td-value">{r.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div>
            {[
              {
                label: "Decision 04 — Notifications",
                headline: "Fewer alerts, higher signal",
                rows: [
                  { label: "Decision", value: "Notifications fire only at scheduled dose times and for missed doses." },
                  { label: "Reasoning", value: "Notification fatigue was a root cause of non-adherence. Reducing volume increases weight of each alert." },
                  { label: "Linked insights", value: "#02 Notification fatigue · #04 Simplicity" },
                ],
              },
              {
                label: "Decision 05 — Medication Detail",
                headline: "Education and clarity balanced in one view",
                rows: [
                  { label: "Decision", value: "Key warnings surface first; educational content stays accessible but collapsed." },
                  { label: "Reasoning", value: "Progressive disclosure keeps the screen informative without overwhelming users managing 5–7 medications." },
                  { label: "Linked insights", value: "#04 Simplicity · #01 Trust · #05 Accessibility" },
                ],
              },
              {
                label: "Decision 06 — Caregiver Visibility",
                headline: "Exception-only signals for caregivers",
                rows: [
                  { label: "Decision", value: "Caregivers see missed dose alerts and today's summary — not the full schedule." },
                  { label: "Reasoning", value: "Reduces daily check-in burden while preserving Eleanor's autonomy — he sees exceptions, not surveillance." },
                  { label: "Linked insights", value: "#02 Notification fatigue · #04 Autonomy" },
                ],
              },
            ].map(d => (
              <div className="decision" key={d.label}>
                <div className="decision-label">{d.label}</div>
                <div className="decision-head">{d.headline}</div>
                <div className="table">
                  {d.rows.map(r => (
                    <div className="row" key={r.label}>
                      <div className="td-label">{r.label}</div>
                      <div className="td-value">{r.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <span className="pg-logo">DoseCare — UX Case Study</span>
        <span className="pg">04</span>
      </div>

      {/* ── PAGE 5: Testing + Pivot ── */}
      <div className="page">
        <div className="col2">
          <div>
            <div className="eyebrow">08–09 — v1 & Usability Testing</div>
            <h2 className="h2">Did it work?</h2>
            <p className="body" style={{ marginBottom: 20 }}>Task-based testing across three core flows: adding medication, responding to a reminder, and finding medication information.</p>

            <div className="screen-row" style={{ marginBottom: 24 }}>
              {[
                { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757774/portfolio/projects/dosecare/home.png", label: "v1 Home" },
                { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757765/portfolio/projects/dosecare/Scan.png", label: "v1 Scan" },
                { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757777/portfolio/projects/dosecare/medicine.png", label: "v1 Med Detail" },
              ].map(img => (
                <div className="screen-img" key={img.src}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img.src} alt={img.label} style={{ height: 200 }} />
                  <div className="screen-label">{img.label}</div>
                </div>
              ))}
            </div>

            {[
              { num: "01", title: "Entry point for adding medication was unclear", body: "80% task completion but 40% of users hesitated at the start — not self-explanatory enough.", metric: "80% completion · 40% hesitation at entry" },
              { num: "02", title: "Reminder confirmation was clear and effective", body: "100% task completion. Users found the action-oriented interaction clear and satisfying.", metric: "100% completion · positive sentiment" },
              { num: "03", title: "Medication info entry point was too subtle", body: "80% completion. One participant could not find the information button.", metric: "80% completion · 1 user failed to locate" },
            ].map(f => (
              <div className="finding" key={f.num}>
                <span className="finding-num">{f.num}</span>
                <div>
                  <div className="finding-title">{f.title}</div>
                  <div className="finding-body">{f.body}</div>
                  <div className="finding-metric">{f.metric}</div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="eyebrow">10 — Redesign Decision</div>
            <h2 className="h2">The project found its real problem statement</h2>
            <p className="body" style={{ marginBottom: 16 }}>
              After usability testing, structured feedback from my professor reframed how I understood the problem. The issues weren&apos;t isolated — they pointed to a deeper misalignment.
            </p>
            <p className="body" style={{ marginBottom: 16 }}>
              The v1 architecture was built around medication scheduling and reminders. But the real unmet need wasn&apos;t reminding users to take medication — it was confirming whether they actually did. No feature in v1 addressed this.
            </p>

            <ul className="prob-list" style={{ marginBottom: 20 }}>
              {[
                "Confirmation was the primary unmet need — v1 had no flow built around it",
                "IA dispersed attention across too many touchpoints, increasing cognitive load for 65+ users",
                "Text sizes, contrast ratios, and touch targets were insufficient for the target demographic",
              ].map((item, i) => (
                <li className="prob-item" key={i}>
                  <span className="prob-num">0{i + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="body" style={{ marginBottom: 20 }}>
              These weren&apos;t problems I could patch. Fixing confirmation required making it the primary interaction — not a secondary action buried in navigation. That meant rethinking the IA from the ground up, which opened the space to introduce NFC-based physical confirmation, AI-powered adherence insights, and a multi-role ecosystem connecting patients and caregivers.
            </p>

            <div className="pullquote">
              &ldquo;The full redesign wasn&apos;t a setback. It was the moment the project found its real problem statement.&rdquo;
            </div>

            <div style={{ marginTop: 24 }}>
              <div className="caption" style={{ marginBottom: 12 }}>Design changes from testing</div>
              {[
                "Removed redundancy between scan and add entry points — consolidated into a single clear CTA.",
                "Replaced \u201cSkip\u201d with \u201cLater\u201d \u2014 felt more natural and less punitive for older adults.",
                "Made the medication information entry point more direct and visually prominent.",
              ].map((c, i) => (
                <div className="change" key={i}>
                  <span className="change-mark">→</span>
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <span className="pg-logo">DoseCare — UX Case Study</span>
        <span className="pg">05</span>
      </div>

      {/* ── PAGE 6: Final Design — Home & Medications ── */}
      <div className="page">
        <div className="eyebrow">11 — Final Design</div>
        <h2 className="h2" style={{ marginBottom: 4 }}>High-fidelity screens</h2>
        <p className="body" style={{ marginBottom: 28 }}>Rebuilt after the structural pivot. Confirmation as the primary interaction, accessibility by default.</p>

        <div className="caption" style={{ marginBottom: 12 }}>Home & Confirmation — The single source of truth for today&apos;s doses</div>
        <div className="screen-row" style={{ marginBottom: 32 }}>
          {[
            { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757727/portfolio/projects/dosecare/Home/Dynamic-Island-1.png", label: "Dynamic Island reminder" },
            { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757728/portfolio/projects/dosecare/Home/Dynamic-Island-2.png", label: "Dynamic Island expanded" },
            { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1775921056/portfolio/projects/dosecare/Home/Home-new-1.png", label: "Home feed" },
            { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1775921059/portfolio/projects/dosecare/Home/Home-new-2.png", label: "Confirmation state" },
            { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1775921060/portfolio/projects/dosecare/Home/Home-new-3.png", label: "Completed view" },
          ].map(img => (
            <div className="screen-img" key={img.src}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img.src} alt={img.label} />
              <div className="screen-label">{img.label}</div>
            </div>
          ))}
        </div>

        <div className="rule-sm" />

        <div className="caption" style={{ marginBottom: 12 }}>Medications — Full management with progressive disclosure</div>
        <div className="screen-row">
          {[
            { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757733/portfolio/projects/dosecare/Med/Medication-List-6.png", label: "Medication list" },
            { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757732/portfolio/projects/dosecare/Med/Medication-Info-2.png", label: "Medication detail" },
            { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757731/portfolio/projects/dosecare/Med/Medication-Enter-Time-2.png", label: "Set time" },
            { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757734/portfolio/projects/dosecare/Med/Medication-refill-2.png", label: "Refill flow" },
          ].map(img => (
            <div className="screen-img" key={img.src}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img.src} alt={img.label} />
              <div className="screen-label">{img.label}</div>
            </div>
          ))}
        </div>
        <span className="pg-logo">DoseCare — UX Case Study</span>
        <span className="pg">06</span>
      </div>

      {/* ── PAGE 7: Final Design — Onboarding + Trends ── */}
      <div className="page">
        <div className="eyebrow">11 — Final Design (continued)</div>

        <div className="caption" style={{ marginBottom: 12 }}>Onboarding — Scan-first setup anyone can complete independently</div>
        <div className="screen-row" style={{ marginBottom: 32 }}>
          {[
            { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773760257/portfolio/projects/dosecare/Onboard/Add-Medicine-2.png", label: "Find medicine" },
            { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773760256/portfolio/projects/dosecare/Onboard/Add-Medicine-1-2.png", label: "Scan prescription" },
            { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757753/portfolio/projects/dosecare/Onboard/Confirm-2.png", label: "Confirm medicine" },
            { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773760259/portfolio/projects/dosecare/Onboard/Add-Medicine.png", label: "Set time" },
            { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757763/portfolio/projects/dosecare/Onboard/Tag-6.png", label: "Add DOSE TAG" },
          ].map(img => (
            <div className="screen-img" key={img.src}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img.src} alt={img.label} />
              <div className="screen-label">{img.label}</div>
            </div>
          ))}
        </div>

        <div className="rule-sm" />

        <div className="col2">
          <div>
            <div className="caption" style={{ marginBottom: 12 }}>Trends & History — Adherence insights without data overload</div>
            <div className="screen-row">
              {[
                { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757769/portfolio/projects/dosecare/Trend/Trend.png", label: "Trend insights" },
                { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757768/portfolio/projects/dosecare/Trend/History-2.png", label: "History calendar" },
              ].map(img => (
                <div className="screen-img" key={img.src}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img.src} alt={img.label} />
                  <div className="screen-label">{img.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="caption" style={{ marginBottom: 12 }}>Caregiver & Profile — Autonomy preserved, support available</div>
            <div className="screen-row">
              {[
                { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757724/portfolio/projects/dosecare/Caregiver%20and%20profile/Caregiver-3.png", label: "Caregiver view" },
                { src: "https://res.cloudinary.com/dj13he2xu/image/upload/v1773757725/portfolio/projects/dosecare/Caregiver%20and%20profile/Profile-3.png", label: "Profile settings" },
              ].map(img => (
                <div className="screen-img" key={img.src}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img.src} alt={img.label} />
                  <div className="screen-label">{img.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <span className="pg-logo">DoseCare — UX Case Study</span>
        <span className="pg">07</span>
      </div>

      {/* ── PAGE 8: Accessibility + Reflection ── */}
      <div className="page">
        <div className="col2">
          <div>
            <div className="eyebrow">Accessibility Specifications</div>
            <h2 className="h2">Designed for 65+ from the ground up</h2>
            <div className="table" style={{ marginBottom: 32 }}>
              {[
                { label: "Typography", value: "15pt minimum body, 1.8 line-height" },
                { label: "Touch targets", value: "48pt minimum for all interactive elements" },
                { label: "Color system", value: "#2B5EE8 primary — 4.5:1 contrast minimum against background" },
                { label: "Motion", value: "prefers-reduced-motion respected; no parallax or auto-play" },
                { label: "Status states", value: "Icon + label for all states — never color alone" },
              ].map(r => (
                <div className="row" key={r.label}>
                  <div className="td-label">{r.label}</div>
                  <div className="td-value">{r.value}</div>
                </div>
              ))}
            </div>

            <div className="accent-bar" />
            <div className="eyebrow">Design Principles</div>
            <div className="rule-sm" />
            {[
              { name: "Confirmation First", desc: "The core interaction is confirming doses — not reminders." },
              { name: "Simplicity Over Completeness", desc: "Each screen focuses on one task. Secondary details appear when needed." },
              { name: "Progressive Disclosure", desc: "Refill info, side effects, and educational content surface on demand." },
              { name: "Autonomy With Support", desc: "Users feel independent while having access to caregiver visibility and doctor communication." },
            ].map((p, i) => (
              <div key={p.name} style={{ display: "flex", gap: 14, padding: "12px 0", borderTop: `1px solid ${LINE}` }}>
                <span className="caption" style={{ flexShrink: 0, paddingTop: 2 }}>0{i + 1}</span>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: INK, marginBottom: 3 }}>{p.name}</div>
                  <div style={{ fontSize: 12, color: MUTED, lineHeight: 1.6 }}>{p.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="eyebrow">13 — Reflection</div>
            <h2 className="h2">Outcomes & Reflection</h2>

            <div className="caption" style={{ marginBottom: 8 }}>What worked well</div>
            <ul className="refl-list" style={{ marginBottom: 24 }}>
              <li>Confirmation-first model validated with 100% task completion on the reminder flow</li>
              <li>Barcode-first onboarding directly addressed the Perx pain point, removing setup friction</li>
              <li>Exception-only caregiver alerts reduced Michael&apos;s daily check-in burden while preserving Eleanor&apos;s independence</li>
              <li>Research clearly identified that confidence — not reminders — was the real problem, giving the design direction strong justification</li>
            </ul>

            <div className="caption" style={{ marginBottom: 8 }}>What I&apos;d do differently</div>
            <ul className="refl-list" style={{ marginBottom: 24 }}>
              <li>Test the scan fallback earlier — barcode errors needed better recovery guidance</li>
              <li>Run moderated sessions with more 65+ participants to surface accessibility issues in context</li>
              <li>Design the caregiver app in parallel rather than as an afterthought</li>
            </ul>

            <div className="caption" style={{ marginBottom: 8 }}>Next steps</div>
            <ul className="refl-list" style={{ marginBottom: 32 }}>
              <li>Additional moderated testing with 65+ demographic, focused on onboarding</li>
              <li>Prototype caregiver dashboard with exception-only alerting</li>
              <li>Explore calendar and pharmacy integrations for refill schedules</li>
              <li>Investigate voice reminders as an alternative confirmation method</li>
            </ul>

            <div className="pullquote">
              &ldquo;DoseCare taught me that the best design for vulnerable users is not more features — it&apos;s relentless focus on a single core problem.&rdquo;
            </div>
          </div>
        </div>
        <span className="pg-logo">DoseCare — UX Case Study</span>
        <span className="pg">08</span>
      </div>

    </>
  );
}

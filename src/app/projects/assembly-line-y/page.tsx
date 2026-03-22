import Link from "next/link";
import NextProject from "../../components/NextProject";

export default function AssemblyLineYProject() {
  const stack = [
    "Unity 6",
    "Meta Quest",
    "Claude API (Haiku)",
    "Meta Voice SDK",
    "XR Interaction Toolkit 3.3",
  ];

  const designDecisions = [
    {
      label: "Decision 01",
      title: "Sequential enforcement — lock the socket, not just the UI",
      body: "Parts can only snap into the active step's socket. All other sockets stay disabled at the XRI layer, so skipping steps is physically impossible — not just discouraged by a warning message. This makes trainees understand procedural dependencies through action, not instruction.",
    },
    {
      label: "Decision 02",
      title: "Orientation validation — reject wrong angles with haptics",
      body: "Parts placed at more than 45° off-axis are refused by the OrientationSocket, which extends XRSocketInteractor with a Vector3.Angle() check. A haptic impulse fires instantly on rejection. Wrong placement is felt, not read — matching how real assembly errors surface.",
    },
    {
      label: "Decision 03",
      title: "Lock-in-place — installed parts become permanent",
      body: "Once a part snaps correctly, its Rigidbody switches to Kinematic and the grab component is disabled. This simulates the irreversibility of physical fastening and prevents trainees from pulling parts out to game the accuracy score.",
    },
    {
      label: "Decision 04",
      title: "Sparse ARIA triggers — AI speaks only at meaningful moments",
      body: "ARIA does not narrate continuously. It responds to four events: correct placement, incorrect placement, player-initiated voice query (Right A button), and game end. Event-driven scarcity keeps guidance signal high and immersion intact.",
    },
  ];

  const assemblySteps = [
    { step: "01", part: "Pedal", note: "Sequential — must be first" },
    { step: "02", part: "Dashboard", note: "Sequential" },
    { step: "03", part: "Rear Seat", note: "Sequential" },
    { step: "04", part: "Center Console", note: "Sequential" },
    { step: "05", part: "Front Seats ×2", note: "Parallel — any order" },
    { step: "06", part: "Interior Details ×4", note: "Parallel — any order" },
    { step: "07", part: "Air Bag", note: "Sequential" },
    { step: "08", part: "Doors ×4", note: "Parallel — any order" },
  ];

  const techRows = [
    { label: "Engine", value: "Unity 6000.3.9f1" },
    { label: "Platform", value: "Meta Quest (Android / OpenXR)" },
    { label: "XR Framework", value: "XR Interaction Toolkit 3.3.1 · XR Hands 1.7.3 · Meta XR SDK Core 85.0" },
    { label: "Rendering", value: "Universal Render Pipeline (URP) 17.3" },
    { label: "AI", value: "Anthropic Claude API — claude-haiku-4-5" },
    { label: "Voice I/O", value: "Meta Voice SDK — Wit.ai STT + Meta TTS" },
    { label: "Language", value: "C# — ~1,500 lines across 24 scripts" },
    { label: "Patterns", value: "Singleton · Event-Driven · Component Architecture" },
  ];

  return (
    <div className="min-h-screen bg-[#0D1117] text-[#E5E7EB] relative overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0 bg-[linear-gradient(180deg,#0D1117_0%,#0F141B_100%)]" />
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.035] bg-[url('data:image/svg+xml,%3Csvg viewBox=%270_0_256_256%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27noise%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.9%27 numOctaves=%274%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23noise)%27 opacity=%270.9%27/%3E%3C/svg%3E')]" />

      <div className="relative z-20" style={{ padding: "14px 48px" }}>
        <Link href="/" style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", textDecoration: "none", fontFamily: "monospace", letterSpacing: "0.06em" }}>← Home</Link>
      </div>

      <main className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-[80px] pt-6 md:pt-8 pb-24 md:pb-32 flex flex-col gap-24 md:gap-28">

        {/* Hero */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end min-h-[68vh] scroll-mt-32 md:scroll-mt-24">
          <div className="lg:col-span-5 flex flex-col gap-6 md:gap-7">
            <div className="flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.18em] text-[#93A1B2]">
              <span className="px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03]">XR Training</span>
              <span className="px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03]">AI Guidance</span>
              <span className="px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03]">Enterprise Workflow</span>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-sm font-mono uppercase tracking-[0.22em] text-[#7B8794]">Assembly Line Y</p>
              <h1 className="text-[52px] sm:text-[68px] md:text-[84px] leading-[0.92] tracking-[-0.04em] font-bold text-[#F3F4F6]">
                Assembly
                <span className="block text-[#C7D0DB] font-medium">Line Y</span>
              </h1>
              <p className="text-[17px] md:text-[19px] leading-[1.8] text-[#A8B3C2] max-w-[620px]">
                An OpenXR VR training simulator for Tesla Model Y interior assembly — featuring an 8-step enforced workflow, real-time AI coaching via Claude API, voice Q&A, and a performance rating system, built in Unity 6 for Meta Quest.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-sm text-[#7B8794]">
              <span>Solo Project</span>
              <span className="text-[#4B5563]">•</span>
              <span>VR Developer & Designer</span>
              <span className="text-[#4B5563]">•</span>
              <span>Unity 6 + Meta Quest</span>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {stack.map((item) => (
                <span key={item} className="px-3 py-1.5 rounded-full border border-white/8 bg-white/[0.025] text-[13px] text-[#C7D0DB]">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-[600px]">
              <div className="rounded-[20px] border border-white/10 overflow-hidden bg-[#11161D] shadow-[0_20px_60px_rgba(0,0,0,0.28)]">
                <div className="h-11 w-full border-b border-white/8 flex items-center px-4 relative bg-[#0E1319]">
                  <div className="flex gap-2 relative z-10">
                    <div className="w-[10px] h-[10px] rounded-full bg-[#5B6673]"></div>
                    <div className="w-[10px] h-[10px] rounded-full bg-[#5B6673]"></div>
                    <div className="w-[10px] h-[10px] rounded-full bg-[#5B6673]"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center text-[11px] font-medium text-[#7B8794] tracking-[0.14em] uppercase">
                    Training System Overview
                  </div>
                </div>
                <div className="aspect-square bg-[#000]">
                  <video
                    src="https://res.cloudinary.com/dj13he2xu/video/upload/v1773869755/fxfm7hqsi7f2xqtxwcop.mp4"
                    controls
                    playsInline
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Two-scene structure */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12">
          <div className="lg:col-span-4">
            <p className="text-sm font-mono uppercase tracking-[0.22em] text-[#7B8794] mb-3">Structure</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#F3F4F6]">Two scenes, one complete workflow</h2>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-[18px] border border-white/8 bg-white/[0.025] p-7">
              <p className="text-[12px] uppercase tracking-[0.16em] text-[#8FA3BF] mb-3">Scene 01 — Lobby</p>
              <h3 className="text-xl font-semibold text-[#F3F4F6] mb-3">Skill onboarding</h3>
              <p className="text-[15px] leading-[1.75] text-[#A8B3C2]">
                Four progressive zones introduce each interaction type — grab, socket, and scanner — before trainees reach the portal into the simulation. No guessing at controls mid-assembly.
              </p>
            </div>
            <div className="rounded-[18px] border border-white/8 bg-white/[0.025] p-7">
              <p className="text-[12px] uppercase tracking-[0.16em] text-[#8FA3BF] mb-3">Scene 02 — Simulation</p>
              <h3 className="text-xl font-semibold text-[#F3F4F6] mb-3">Full assembly run</h3>
              <p className="text-[15px] leading-[1.75] text-[#A8B3C2]">
                Trainees complete all 8 interior installation steps on a Tesla Model Y. Performance is tracked throughout and ARIA delivers a final rating — Rookie, Apprentice, Expert, or Master.
              </p>
            </div>
          </div>
        </section>

        {/* 8-step sequence */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-start">
          <div className="lg:col-span-4">
            <p className="text-sm font-mono uppercase tracking-[0.22em] text-[#7B8794] mb-3">Assembly Sequence</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#F3F4F6]">8 steps, enforced by interaction logic</h2>
            <p className="text-[15px] leading-[1.8] text-[#A8B3C2] mt-4">
              Steps with dependencies are strictly sequential. Steps where real-world order doesn&apos;t matter — like installing multiple seats or doors — allow any order within the group.
            </p>
          </div>
          <div className="lg:col-span-8 rounded-[20px] border border-white/8 bg-white/[0.025] overflow-hidden">
            {assemblySteps.map((item, i) => (
              <div key={item.step} className="flex items-center gap-5 px-7 py-4 border-b border-white/[0.06] last:border-b-0">
                <span className="font-mono text-[11px] text-[#5B7A9C] w-7 flex-shrink-0">{item.step}</span>
                <span className="text-[15px] font-semibold text-[#F3F4F6] flex-1">{item.part}</span>
                <span className="font-mono text-[11px] text-[#4B5A6A] hidden sm:block">{item.note}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Why it matters */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12">
          <div className="lg:col-span-4 flex flex-col gap-4">
            <p className="text-sm font-mono uppercase tracking-[0.22em] text-[#7B8794]">Why it matters</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#F3F4F6]">Spatial memory transfers where video doesn&apos;t</h2>
          </div>
          <div className="lg:col-span-8 rounded-[20px] border border-white/8 bg-white/[0.025] p-8 md:p-10">
            <p className="text-[16px] md:text-[18px] leading-[1.9] text-[#A8B3C2] max-w-[860px]">
              Factory assembly training has three real costs: errors on a live line cause production loss, traditional video training has low knowledge retention, and on-floor apprenticeship occupies experienced workers. VR moves errors into a consequence-free environment while preserving spatial memory — the procedural knowledge that actually transfers to the job. PwC research shows VR-trained employees retain skills at roughly 40% higher rates than video-based alternatives.
            </p>
          </div>
        </section>

        {/* Design decisions */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12">
          <div className="lg:col-span-4">
            <p className="text-sm font-mono uppercase tracking-[0.22em] text-[#7B8794] mb-3">Design Decisions</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#F3F4F6]">Why the system is built the way it is</h2>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {designDecisions.map((item) => (
              <div key={item.title} className="rounded-[18px] border border-white/8 bg-white/[0.025] p-7 md:p-8">
                <p className="text-[12px] uppercase tracking-[0.16em] text-[#8FA3BF] mb-3">{item.label}</p>
                <h3 className="text-[16px] font-semibold text-[#F3F4F6] mb-3 leading-snug">{item.title}</h3>
                <p className="text-[14px] leading-[1.75] text-[#A8B3C2]">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech stack */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-start">
          <div className="lg:col-span-4">
            <p className="text-sm font-mono uppercase tracking-[0.22em] text-[#7B8794] mb-3">Tech Stack</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#F3F4F6]">What it&apos;s built with</h2>
          </div>
          <div className="lg:col-span-8 rounded-[20px] border border-white/8 bg-white/[0.025] overflow-hidden">
            {techRows.map((row) => (
              <div key={row.label} className="flex gap-0 border-b border-white/[0.06] last:border-b-0">
                <div className="w-32 flex-shrink-0 px-6 py-4 font-mono text-[11px] uppercase tracking-[0.08em] text-[#4B5A6A] border-r border-white/[0.06] flex items-center">{row.label}</div>
                <div className="px-6 py-4 text-[13px] text-[#A8B3C2] leading-[1.6] flex items-center">{row.value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Reflection */}
        <section className="rounded-[24px] border border-white/8 bg-white/[0.025] p-8 md:p-12 shadow-[0_18px_44px_rgba(0,0,0,0.18)]">
          <div className="max-w-[860px] flex flex-col gap-5">
            <p className="text-sm font-mono uppercase tracking-[0.22em] text-[#7B8794]">Reflection</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#F3F4F6]">What this project demonstrates</h2>
            <p className="text-[16px] md:text-[18px] leading-[1.9] text-[#A8B3C2]">
              Assembly Line Y shows how I think about XR products that span interaction design, systems architecture, and AI integration. The core challenge wasn&apos;t building a VR experience — it was encoding real procedural knowledge into interaction logic so the simulation teaches correct habits, not just correct clicks. Writing a Claude API HTTP client from scratch for Android, designing ARIA as a sparse-trigger event system rather than a chatbot, and building orientation-aware sockets that fail gracefully are each design decisions as much as technical ones.
            </p>
          </div>
        </section>

      </main>
      <NextProject href="/projects/tireswap" title="TireSwap VR" role="VR Developer & Designer" theme="dark" />
    </div>
  );
}

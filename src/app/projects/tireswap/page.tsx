import Link from "next/link";
import NextProject from "../../components/NextProject";

export default function TireSwapVRProject() {
  const stack = [
    "Unity 6",
    "Meta Quest",
    "XR Interaction Toolkit 3.3",
    "Unity Timeline",
    "C#",
  ];

  const workflow = [
    { step: "01", title: "Lift the vehicle", body: "Hold the lift buttons to raise the car to working height — bolts are locked and untouchable until the lift completes." },
    { step: "02", title: "Remove lug nuts", body: "Apply the torque wrench to each of the 5 bolts, holding for 1 second each. All 5 must be removed before the tire becomes grabbable." },
    { step: "03", title: "Remove the wheel hub", body: "Grab the complete tire assembly and carry it to the tire changer machine." },
    { step: "04", title: "Dismount rubber from rim", body: "Place the wheel in the tire changer socket. A dismount animation plays automatically; the rubber tire is spawned as output." },
    { step: "05", title: "Mount new tire onto rim", body: "Feed the new rubber into the changer. The install animation plays and outputs the completed wheel assembly." },
    { step: "06", title: "Balance the tire", body: "The mounted wheel goes through the balancer — a step often skipped in simplified simulations but essential before reinstallation." },
    { step: "07", title: "Install wheel back on vehicle", body: "Carry the balanced wheel to the hub and seat it onto the axle at the correct orientation." },
    { step: "08", title: "Tighten lug nuts", body: "Re-torque all 5 bolts in the correct star pattern using the wrench. Each bolt requires a full 1-second hold to register as tightened." },
    { step: "09", title: "Lower the vehicle", body: "Bring the lift back down. The TrainingSequenceManager confirms task completion and advances to the next wheel." },
  ];

  const designDecisions = [
    {
      label: "Decision 01",
      title: "Enforce procedure through locks — not warnings",
      body: "Bolts are assigned to a LockedNut interaction layer by default. The tire's grab component stays disabled until all 5 bolts are removed. The door button to the simulation is inert until lobby tasks complete. Correct sequence is the only possible sequence — not just the recommended one.",
    },
    {
      label: "Decision 02",
      title: "Two-scene structure — isolate skills before integrating them",
      body: "The Lobby teaches tool handling in isolation: place tires on a rack, apply the torque wrench to a single nut, press the door button. Only then does the simulation open. Cognitive load theory shows novices learn better when sub-skills are separated before integration.",
    },
    {
      label: "Decision 03",
      title: "Multi-sensory feedback — confirm state without breaking immersion",
      body: "Every task completion triggers three simultaneous channels: a strong short haptic pulse (versus a continuous low buzz while working), a one-shot success audio cue, and a visual material or geometry state change. Learners feel task completion the same way real technicians do — tactilely.",
    },
    {
      label: "Decision 04",
      title: "Guided attention — light and UI together",
      body: "TrainingSequenceManager activates a UI panel and a physical scene light group simultaneously for each step. The light highlights the relevant object spatially; the panel explains what to do. Pointing before explaining — the same thing a real instructor would do.",
    },
  ];

  const techRows = [
    { label: "Engine", value: "Unity 6 (6000.3.5f2)" },
    { label: "Rendering", value: "Universal Render Pipeline (URP)" },
    { label: "XR Framework", value: "XR Interaction Toolkit 3.3.1 · OpenXR 1.16.1" },
    { label: "Hand Tracking", value: "XR Hands 1.7.2" },
    { label: "Input", value: "Unity Input System 1.17.0" },
    { label: "Animation", value: "Unity Timeline 1.8.10 + Animator" },
    { label: "Materials", value: "Substance" },
    { label: "Platform", value: "Meta Quest (Android XR)" },
  ];

  return (
    <div className="min-h-screen bg-[#0D1117] text-[#E5E7EB] relative overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0 bg-[linear-gradient(180deg,#0D1117_0%,#0F141B_100%)]" />
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.035] bg-[url('data:image/svg+xml,%3Csvg viewBox=%270_0_256_256%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27noise%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.9%27 numOctaves=%274%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23noise)%27 opacity=%270.9%27/%3E%3C/svg%3E')]" />


      <main className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-[80px] pt-6 md:pt-8 pb-24 md:pb-32 flex flex-col gap-24 md:gap-28">

        {/* Hero */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end min-h-[68vh] scroll-mt-32 md:scroll-mt-24">
          <div className="lg:col-span-5 flex flex-col gap-6 md:gap-7">
            <div className="flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.18em] text-[#93A1B2]">
              <span className="px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03]">XR Training</span>
              <span className="px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03]">Procedural Simulation</span>
              <span className="px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03]">Solo Project</span>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-sm font-mono uppercase tracking-[0.22em] text-[#7B8794]">TireSwap VR</p>
              <h1 className="text-[52px] sm:text-[68px] md:text-[84px] leading-[0.92] tracking-[-0.04em] font-bold text-[#F3F4F6]">
                TireSwap
                <span className="block text-[#C7D0DB] font-medium">VR</span>
              </h1>
              <p className="text-[17px] md:text-[19px] leading-[1.8] text-[#A8B3C2] max-w-[620px]">
                A hands-on VR training simulator for the complete tire change procedure — enforcing correct step order through interaction locks, animating the tire changer machine, and delivering multi-sensory feedback at each stage.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-sm text-[#7B8794]">
              <span>Solo Project</span>
              <span className="text-[#4B5563]">•</span>
              <span>VR Developer & Designer</span>
              <span className="text-[#4B5563]">•</span>
              <span>IXDS712 Midterm · 2026</span>
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
                    Workshop Environment
                  </div>
                </div>
                <div className="bg-[#000] flex items-center justify-center">
                  <img
                    src="https://res.cloudinary.com/dj13he2xu/image/upload/v1774235432/portfolio/projects/tireswap/slide3-img0.png"
                    alt="TireSwap VR garage workshop environment"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Background */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12">
          <div className="lg:col-span-4 flex flex-col gap-4">
            <p className="text-sm font-mono uppercase tracking-[0.22em] text-[#7B8794]">Why this exists</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#F3F4F6]">Vocational training at scale is expensive and scarce</h2>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-[18px] border border-white/8 bg-white/[0.025] p-7">
              <p className="text-[28px] font-bold text-[#F3F4F6] mb-2">70K</p>
              <p className="text-[13px] leading-[1.65] text-[#A8B3C2]">New automotive technician positions open annually in the US through 2034, with 56,000+ dealership roles currently unfilled.</p>
            </div>
            <div className="rounded-[18px] border border-white/8 bg-white/[0.025] p-7">
              <p className="text-[28px] font-bold text-[#F3F4F6] mb-2">$28K</p>
              <p className="text-[13px] leading-[1.65] text-[#A8B3C2]">Maximum cost for a student to complete a physical automotive training program — equipment and lab access are major barriers.</p>
            </div>
            <div className="rounded-[18px] border border-white/8 bg-white/[0.025] p-7">
              <p className="text-[28px] font-bold text-[#F3F4F6] mb-2">275%</p>
              <p className="text-[13px] leading-[1.65] text-[#A8B3C2]">More confident applying skills after VR training versus traditional methods, according to vocational training studies.</p>
            </div>
          </div>
        </section>

        {/* Two-scene structure */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12">
          <div className="lg:col-span-4">
            <p className="text-sm font-mono uppercase tracking-[0.22em] text-[#7B8794] mb-3">Structure</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#F3F4F6]">Two scenes — practice first, then perform</h2>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-[18px] border border-white/8 bg-white/[0.025] p-7">
              <p className="text-[12px] uppercase tracking-[0.16em] text-[#8FA3BF] mb-3">Scene 01 — Lobby</p>
              <h3 className="text-xl font-semibold text-[#F3F4F6] mb-3">Tool familiarization</h3>
              <p className="text-[15px] leading-[1.75] text-[#A8B3C2]">
                Three sequential tasks: place 4 tires onto the storage rack, apply the torque wrench to a practice nut, then press the door button. Each task is locked until the previous is complete.
              </p>
            </div>
            <div className="rounded-[18px] border border-white/8 bg-white/[0.025] p-7">
              <p className="text-[12px] uppercase tracking-[0.16em] text-[#8FA3BF] mb-3">Scene 02 — Simulation</p>
              <h3 className="text-xl font-semibold text-[#F3F4F6] mb-3">Full tire change on vehicle</h3>
              <p className="text-[15px] leading-[1.75] text-[#A8B3C2]">
                Complete the 9-step procedure on the vehicle, including operating the tire changer machine and balancer. Repeat for remaining wheels.
              </p>
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-start">
          <div className="lg:col-span-4">
            <p className="text-sm font-mono uppercase tracking-[0.22em] text-[#7B8794] mb-3">Simulation Workflow</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#F3F4F6]">9 steps, enforced by interaction locks</h2>
            <p className="text-[15px] leading-[1.8] text-[#A8B3C2] mt-4">
              The tire changer handles steps 04–05 via an internal state machine. Bolts cannot be grabbed before the lift completes; the tire cannot be grabbed before all 5 bolts are removed.
            </p>
          </div>
          <div className="lg:col-span-8 rounded-[20px] border border-white/8 bg-white/[0.025] overflow-hidden">
            {workflow.map((item) => (
              <div key={item.step} className="flex items-start gap-5 px-7 py-5 border-b border-white/[0.06] last:border-b-0">
                <span className="font-mono text-[11px] text-[#5B7A9C] pt-0.5 w-7 flex-shrink-0">{item.step}</span>
                <div className="flex flex-col gap-1 min-w-0">
                  <span className="text-[15px] font-semibold text-[#F3F4F6]">{item.title}</span>
                  <span className="text-[13px] leading-[1.65] text-[#7B8794]">{item.body}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Space layout */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12">
          <div className="lg:col-span-4 flex flex-col gap-4">
            <p className="text-sm font-mono uppercase tracking-[0.22em] text-[#7B8794]">Space Design</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#F3F4F6]">Garage bay layout</h2>
            <p className="text-[15px] leading-[1.8] text-[#A8B3C2]">
              Designated zones for removed tires, new tires, lift points, and tools — spatial layout reinforces procedural habit. The player start position, torque specs display, and pneumatic wrench are all positioned to match a real shop workflow.
            </p>
          </div>
          <div className="lg:col-span-8 rounded-[20px] border border-white/8 bg-white overflow-hidden">
            <img
              src="https://res.cloudinary.com/dj13he2xu/image/upload/v1774235432/portfolio/projects/tireswap/slide3-img2.png"
              alt="Automotive garage bay floor plan sketch"
              className="w-full h-auto block"
            />
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

        {/* Asset library */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12">
          <div className="lg:col-span-4 flex flex-col gap-4">
            <p className="text-sm font-mono uppercase tracking-[0.22em] text-[#7B8794]">Asset Library</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#F3F4F6]">Custom prefabs for each interaction</h2>
            <p className="text-[15px] leading-[1.8] text-[#A8B3C2]">
              Each object — tires, rims, bolts, wrenches, lift arm, and the in-world phone UI — is individually configured with XRI grab logic, interaction layers, and snapping constraints.
            </p>
          </div>
          <div className="lg:col-span-8 rounded-[20px] border border-white/8 bg-[#1C1F26] overflow-hidden">
            <img
              src="https://res.cloudinary.com/dj13he2xu/image/upload/v1774235433/portfolio/projects/tireswap/slide6-img1.png"
              alt="Unity prefab library — bolts, tires, rims, tools, and XR interactables"
              className="w-full h-auto block"
            />
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
              <div key={row.label} className="flex border-b border-white/[0.06] last:border-b-0">
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
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#F3F4F6]">What worked and what I&apos;d push further</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
              <div>
                <p className="text-[12px] uppercase tracking-[0.16em] text-[#8FA3BF] mb-3">What worked</p>
                <p className="text-[15px] leading-[1.8] text-[#A8B3C2]">
                  The simulation delivers a complete, end-to-end tire change with correct step enforcement. The interaction lock system makes procedural discipline feel natural rather than punishing — and the tire changer state machine kept animation and logic precisely synchronized via Animator events rather than coroutine timers.
                </p>
              </div>
              <div>
                <p className="text-[12px] uppercase tracking-[0.16em] text-[#8FA3BF] mb-3">What I&apos;d push further</p>
                <p className="text-[15px] leading-[1.8] text-[#A8B3C2]">
                  More realistic tool resistance, torque accuracy feedback, proper error states with recovery flows, and vehicle variation — different makes, wheel sizes, damage conditions. The current version trains the procedure; the next version would train judgment.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <NextProject href="/projects/reco" title="RECO" role="API Integration & Frontend" theme="dark" />
    </div>
  );
}

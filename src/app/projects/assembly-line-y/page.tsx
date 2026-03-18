import Link from "next/link";
import NextProject from "../../components/NextProject";

export default function AssemblyLineYProject() {
  const highlights = [
    {
      title: "Natural voice interaction",
      body: "Players can speak to ARIA in natural language to ask for guidance, clarification, or the next step during training.",
    },
    {
      title: "Orientation-aware assembly",
      body: "Parts must be aligned correctly before snapping into place, reflecting the physical constraints of real assembly tasks.",
    },
    {
      title: "Multimodal XR workflow",
      body: "The experience combines grab, poke, press, scanning, and voice interaction so each action matches the task context.",
    },
    {
      title: "Performance feedback",
      body: "Session progress and assembly accuracy are tracked to help trainees understand where they succeeded and where they need improvement.",
    },
  ];

  const stack = [
    "Unity XR",
    "Meta Quest 3",
    "Claude API",
    "Voice Interaction",
    "Training Simulation",
  ];

  const architecture = [
    {
      label: "Input Layer",
      title: "Voice + controller input",
      body: "The system supports voice queries alongside XR controller actions so trainees can learn through both physical interaction and conversational guidance.",
    },
    {
      label: "AI Layer",
      title: "ARIA guidance system",
      body: "ARIA provides real-time support during the experience, helping users navigate steps and reducing uncertainty in the training flow.",
    },
    {
      label: "State Layer",
      title: "Assembly progress tracking",
      body: "The simulation tracks progress across multi-step assembly tasks and uses task state to decide what guidance and feedback should appear next.",
    },
    {
      label: "Feedback Layer",
      title: "HUD and in-world cues",
      body: "Progress indicators, contextual guidance, and confirmation feedback help players stay oriented without breaking immersion.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0D1117] text-[#E5E7EB] relative overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0 bg-[linear-gradient(180deg,#0D1117_0%,#0F141B_100%)]" />
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.035] bg-[url('data:image/svg+xml,%3Csvg viewBox=%270_0_256_256%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27noise%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.9%27 numOctaves=%274%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23noise)%27 opacity=%270.9%27/%3E%3C/svg%3E')]" />

      <div className="relative z-20" style={{ padding: "14px 48px" }}>
        <Link href="/" style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", textDecoration: "none", fontFamily: "monospace", letterSpacing: "0.06em" }}>← Home</Link>
      </div>

      <main className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-[80px] pt-6 md:pt-8 pb-24 md:pb-32 flex flex-col gap-24 md:gap-28">
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
                A Quest 3 VR training simulation for Tesla Model Y interior assembly, enhanced with ARIA — an AI assistant designed to guide trainees through complex physical tasks with real-time support.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-sm text-[#7B8794]">
              <span>Solo Project</span>
              <span className="text-[#4B5563]">•</span>
              <span>VR Developer & Designer</span>
              <span className="text-[#4B5563]">•</span>
              <span>Quest 3 + Unity</span>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {stack.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-full border border-white/8 bg-white/[0.025] text-[13px] text-[#C7D0DB]"
                >
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

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12">
          <div className="lg:col-span-4">
            <p className="text-sm font-mono uppercase tracking-[0.22em] text-[#7B8794] mb-3">Overview</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#F3F4F6]">What this project is</h2>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-[18px] border border-white/8 bg-white/[0.025] p-7">
              <p className="text-[12px] uppercase tracking-[0.16em] text-[#8FA3BF] mb-3">01</p>
              <h3 className="text-xl font-semibold text-[#F3F4F6] mb-3">VR factory training</h3>
              <p className="text-[15px] leading-[1.75] text-[#A8B3C2]">
                Trainees step into a simulated Tesla Model Y assembly environment and complete interior installation tasks in sequence.
              </p>
            </div>
            <div className="rounded-[18px] border border-white/8 bg-white/[0.025] p-7">
              <p className="text-[12px] uppercase tracking-[0.16em] text-[#8FA3BF] mb-3">02</p>
              <h3 className="text-xl font-semibold text-[#F3F4F6] mb-3">AI-guided experience</h3>
              <p className="text-[15px] leading-[1.75] text-[#A8B3C2]">
                ARIA supports the experience with contextual voice guidance, helping users ask questions and stay oriented during the workflow.
              </p>
            </div>
            <div className="rounded-[18px] border border-white/8 bg-white/[0.025] p-7">
              <p className="text-[12px] uppercase tracking-[0.16em] text-[#8FA3BF] mb-3">03</p>
              <h3 className="text-xl font-semibold text-[#F3F4F6] mb-3">Skill evaluation</h3>
              <p className="text-[15px] leading-[1.75] text-[#A8B3C2]">
                The simulation captures progress and task quality to turn practice into a measurable learning experience.
              </p>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12">
          <div className="lg:col-span-4 flex flex-col gap-4">
            <p className="text-sm font-mono uppercase tracking-[0.22em] text-[#7B8794]">Why it matters</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#F3F4F6]">Training for complex physical work</h2>
          </div>
          <div className="lg:col-span-8 rounded-[20px] border border-white/8 bg-white/[0.025] p-8 md:p-10">
            <p className="text-[16px] md:text-[18px] leading-[1.9] text-[#A8B3C2] max-w-[860px]">
              Automotive interior assembly still depends on human dexterity, spatial judgment, and procedural accuracy. Assembly Line Y explores how immersive simulation and AI guidance can reduce learning friction for this kind of task by making steps visible, interactive, and repeatable in a safe virtual environment.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12">
          <div className="lg:col-span-4">
            <p className="text-sm font-mono uppercase tracking-[0.22em] text-[#7B8794] mb-3">Highlights</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#F3F4F6]">Key experience features</h2>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div key={item.title} className="rounded-[18px] border border-white/8 bg-white/[0.025] p-7 md:p-8">
                <p className="text-[12px] uppercase tracking-[0.16em] text-[#8FA3BF] mb-3">0{index + 1}</p>
                <h3 className="text-xl font-semibold text-[#F3F4F6] mb-3">{item.title}</h3>
                <p className="text-[15px] leading-[1.75] text-[#A8B3C2]">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-start">
          <div className="lg:col-span-4">
            <p className="text-sm font-mono uppercase tracking-[0.22em] text-[#7B8794] mb-3">System Design</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#F3F4F6]">How the experience is structured</h2>
          </div>
          <div className="lg:col-span-8 flex flex-col gap-4">
            {architecture.map((item) => (
              <div key={item.title} className="rounded-[18px] border border-white/8 bg-white/[0.025] p-7 md:p-8">
                <p className="text-[12px] uppercase tracking-[0.16em] text-[#8FA3BF] mb-3">{item.label}</p>
                <h3 className="text-xl font-semibold text-[#F3F4F6] mb-3">{item.title}</h3>
                <p className="text-[15px] leading-[1.75] text-[#A8B3C2]">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[24px] border border-white/8 bg-white/[0.025] p-8 md:p-12 shadow-[0_18px_44px_rgba(0,0,0,0.18)]">
          <div className="max-w-[860px] flex flex-col gap-5">
            <p className="text-sm font-mono uppercase tracking-[0.22em] text-[#7B8794]">Reflection</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#F3F4F6]">What this project demonstrates</h2>
            <p className="text-[16px] md:text-[18px] leading-[1.9] text-[#A8B3C2]">
              Assembly Line Y shows how I approach XR products that sit between interaction design, technical implementation, and AI-assisted guidance. Rather than treating VR as a visual demo, this project focuses on training flow, embodied interaction, and system feedback — making a complex industrial process easier to learn and easier to trust.
            </p>
          </div>
        </section>
      </main>
      <NextProject href="/projects/nest-thermostat" title="Nest Thermostat Redesign" role="Project Lead & UX Design" theme="dark" />
    </div>
  );
}

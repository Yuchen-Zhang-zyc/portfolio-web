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
    <div className="min-h-screen bg-[#090907] text-[#E8E0D0] relative overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0 opacity-30 bg-[radial-gradient(circle_at_top_left,rgba(200,150,42,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,179,71,0.08),transparent_24%)]" />
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.06] bg-[url('data:image/svg+xml,%3Csvg viewBox=%270_0_256_256%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27noise%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.9%27 numOctaves=%274%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23noise)%27 opacity=%270.9%27/%3E%3C/svg%3E')]" />

      <main className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-[80px] pt-32 md:pt-36 pb-24 md:pb-32 flex flex-col gap-24 md:gap-32">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end min-h-[72vh]">
          <div className="lg:col-span-5 flex flex-col gap-6 md:gap-7">
            <div className="flex flex-wrap gap-3 text-[12px] uppercase tracking-[0.18em] text-[#C8962A]">
              <span className="px-3 py-1.5 rounded-full border border-[#C8962A]/25 bg-[#C8962A]/8">XR Training</span>
              <span className="px-3 py-1.5 rounded-full border border-[#C8962A]/25 bg-[#C8962A]/8">AI Guidance</span>
              <span className="px-3 py-1.5 rounded-full border border-[#C8962A]/25 bg-[#C8962A]/8">Unity</span>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-sm font-mono uppercase tracking-[0.22em] text-[#8A8275]">Assembly Line Y</p>
              <h1 className="text-[56px] sm:text-[72px] md:text-[92px] leading-[0.9] tracking-[-0.04em] font-bold text-[#E8E0D0]">
                Assembly
                <span className="block italic font-light text-[#C8962A]">Line Y</span>
              </h1>
              <p className="text-[17px] md:text-[19px] leading-[1.8] text-[#B8B1A6] max-w-[620px]">
                A Quest 3 VR training simulation for Tesla Model Y interior assembly, enhanced with ARIA — an AI assistant designed to guide trainees through complex physical tasks with real-time support.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-sm text-[#8A8275]">
              <span>Solo Project</span>
              <span className="text-[#C8962A]">•</span>
              <span>VR Developer & Designer</span>
              <span className="text-[#C8962A]">•</span>
              <span>Quest 3 + Unity</span>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {stack.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-[13px] text-[#D2C9BB]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-[28px] border border-white/10 overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0.015)_100%)] shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
              <div className="h-11 w-full border-b border-white/10 flex items-center px-4 relative bg-black/20">
                <div className="flex gap-2 relative z-10">
                  <div className="w-[12px] h-[12px] rounded-full bg-[#FF5F56] border border-black/20"></div>
                  <div className="w-[12px] h-[12px] rounded-full bg-[#FFBD2E] border border-black/20"></div>
                  <div className="w-[12px] h-[12px] rounded-full bg-[#27C93F] border border-black/20"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-[#8A8275] tracking-[0.12em] uppercase">
                  XR Simulation Overview
                </div>
              </div>

              <div className="aspect-[16/10] bg-[#0B0B08] relative overflow-hidden flex items-center justify-center px-8 py-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,150,42,0.12),transparent_42%)]" />
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(180deg,transparent_0%,rgba(200,150,42,0.04)_100%)]" />
                <div className="relative z-10 flex flex-col items-center text-center gap-5">
                  <span className="font-mono text-[10px] sm:text-xs text-[#C8962A] tracking-[4px] uppercase border border-[#C8962A]/30 bg-[#C8962A]/10 px-4 py-1.5 backdrop-blur-md">
                    AI-GUIDED VR TRAINING
                  </span>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#E8E0D0]">
                    Tesla Model Y
                    <span className="block text-[#C8962A] italic font-light">Interior Assembly</span>
                  </h2>
                  <p className="max-w-[560px] text-sm md:text-base leading-[1.8] text-[#AAA293]">
                    An immersive training environment where players learn assembly procedures through AI guidance, embodied interaction, and step-based task feedback.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12">
          <div className="lg:col-span-4">
            <p className="text-sm font-mono uppercase tracking-[0.22em] text-[#8A8275] mb-3">Overview</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#E8E0D0]">What this project is</h2>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-7">
              <p className="text-[12px] uppercase tracking-[0.16em] text-[#C8962A] mb-3">01</p>
              <h3 className="text-xl font-bold text-[#E8E0D0] mb-3">VR factory training</h3>
              <p className="text-[15px] leading-[1.75] text-[#B8B1A6]">
                Trainees step into a simulated Tesla Model Y assembly environment and complete interior installation tasks in sequence.
              </p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-7">
              <p className="text-[12px] uppercase tracking-[0.16em] text-[#C8962A] mb-3">02</p>
              <h3 className="text-xl font-bold text-[#E8E0D0] mb-3">AI-guided experience</h3>
              <p className="text-[15px] leading-[1.75] text-[#B8B1A6]">
                ARIA supports the experience with contextual voice guidance, helping users ask questions and stay oriented during the workflow.
              </p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-7">
              <p className="text-[12px] uppercase tracking-[0.16em] text-[#C8962A] mb-3">03</p>
              <h3 className="text-xl font-bold text-[#E8E0D0] mb-3">Skill evaluation</h3>
              <p className="text-[15px] leading-[1.75] text-[#B8B1A6]">
                The simulation captures progress and task quality to turn practice into a measurable learning experience.
              </p>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12">
          <div className="lg:col-span-4 flex flex-col gap-4">
            <p className="text-sm font-mono uppercase tracking-[0.22em] text-[#8A8275]">Why it matters</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#E8E0D0]">Training for complex physical work</h2>
          </div>
          <div className="lg:col-span-8 rounded-[28px] border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <p className="text-[16px] md:text-[18px] leading-[1.9] text-[#B8B1A6] max-w-[860px]">
              Automotive interior assembly still depends on human dexterity, spatial judgment, and procedural accuracy. Assembly Line Y explores how immersive simulation and AI guidance can reduce learning friction for this kind of task by making steps visible, interactive, and repeatable in a safe virtual environment.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12">
          <div className="lg:col-span-4">
            <p className="text-sm font-mono uppercase tracking-[0.22em] text-[#8A8275] mb-3">Highlights</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#E8E0D0]">Key experience features</h2>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            {highlights.map((item, index) => (
              <div key={item.title} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-7 md:p-8">
                <p className="text-[12px] uppercase tracking-[0.16em] text-[#C8962A] mb-3">0{index + 1}</p>
                <h3 className="text-xl font-bold text-[#E8E0D0] mb-3">{item.title}</h3>
                <p className="text-[15px] leading-[1.75] text-[#B8B1A6]">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-start">
          <div className="lg:col-span-4">
            <p className="text-sm font-mono uppercase tracking-[0.22em] text-[#8A8275] mb-3">System Design</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#E8E0D0]">How the experience is structured</h2>
          </div>
          <div className="lg:col-span-8 flex flex-col gap-4">
            {architecture.map((item) => (
              <div key={item.title} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-7 md:p-8">
                <p className="text-[12px] uppercase tracking-[0.16em] text-[#C8962A] mb-3">{item.label}</p>
                <h3 className="text-xl font-bold text-[#E8E0D0] mb-3">{item.title}</h3>
                <p className="text-[15px] leading-[1.75] text-[#B8B1A6]">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.02)_100%)] p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.24)]">
          <div className="max-w-[860px] flex flex-col gap-5">
            <p className="text-sm font-mono uppercase tracking-[0.22em] text-[#8A8275]">Reflection</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#E8E0D0]">What this project demonstrates</h2>
            <p className="text-[16px] md:text-[18px] leading-[1.9] text-[#B8B1A6]">
              Assembly Line Y shows how I approach XR products that sit between interaction design, technical implementation, and AI-assisted guidance. Rather than treating VR as a visual demo, this project focuses on training flow, embodied interaction, and system feedback — making a complex industrial process easier to learn and easier to trust.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

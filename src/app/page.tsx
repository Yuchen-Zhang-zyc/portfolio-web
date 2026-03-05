import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen font-body relative overflow-x-hidden">

      {/* Background Mesh (Global) */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-[-1] bg-brand-bg mix-blend-normal">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-mesh-blue mix-blend-multiply blur-[120px] animate-blob opacity-80"></div>
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-mesh-purple mix-blend-multiply blur-[100px] animate-blob animation-delay-2000 opacity-80"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[60%] rounded-full bg-mesh-teal mix-blend-multiply blur-[120px] animate-blob animation-delay-4000 opacity-80"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] rounded-full bg-mesh-pink mix-blend-multiply blur-[100px] animate-blob opacity-80"></div>
      </div>

      <main className="w-full max-w-[1280px] mx-auto px-6 md:px-[80px] flex flex-col z-10">

        {/* 01 Hero Section */}
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-24 text-brand-primary">
          <div className="font-sans font-medium text-[28px] md:text-[40px] lg:text-[48px] leading-[1.1] tracking-tight flex flex-col gap-4 text-brand-primary w-full max-w-4xl mx-auto">

            <div className="flex items-center gap-3 w-full justify-center">
              <span className="text-xs md:text-sm font-mono w-6 text-right select-none opacity-80">01</span>
              <span className="font-light font-mono opacity-80">&lt;</span>
              <span>Hello, I am Yuchen</span>
              <span className="font-light font-mono opacity-80">&gt;</span>
            </div>

            <div className="flex items-center gap-3 w-full justify-center">
              <span className="text-xs md:text-sm font-mono w-6 text-right select-none opacity-80">02</span>
              <span className="font-light font-mono opacity-80">&lt;</span>
              <span>I craft</span>
              <span className="text-xl pb-1">◆</span>
              <span>Human & AI experiences</span>
              <span className="font-light font-mono opacity-80">&gt;</span>
            </div>

            <div className="flex items-center gap-3 w-full justify-center">
              <span className="text-xs md:text-sm font-mono w-6 text-right select-none opacity-80">03</span>
              <span className="font-light font-mono opacity-80">&lt;</span>
              <span>I build the systems behind them</span>
              <span className="font-light font-mono opacity-80">&gt;</span>
            </div>

          </div>

          <div className="absolute bottom-16 text-xs font-mono opacity-60 tracking-widest uppercase text-brand-primary">
            Load More
          </div>
        </section>

        {/* 02 About Me */}
        <section id="about" className="w-full grid grid-cols-1 md:grid-cols-12 gap-[24px] py-32 text-brand-primary">
          <div className="md:col-span-4">
            <h2 className="text-sm font-bold flex items-center gap-3">
              <span className="font-mono text-xs opacity-80">02</span>
              About me
            </h2>
          </div>
          <div className="md:col-span-8 text-base text-brand-primary leading-[1.65] flex flex-col gap-6 font-body">
            <p>
              I started in computer science, writing code that worked — but felt incomplete. When I saw how fast AI was advancing, I realized the bottleneck wasn't capability anymore. It was the space between humans and machines.
            </p>
            <p>
              So I crossed over to design. Not to escape technology, but to shape how people and AI learn to work together. There's no established playbook yet — and that's exactly why it interests me.
            </p>
          </div>
        </section>

        {/* 03 Capabilities */}
        <section id="capabilities" className="w-full grid grid-cols-1 md:grid-cols-12 gap-[24px] py-32 text-brand-primary">
          <div className="md:col-span-4">
            <h2 className="text-sm font-bold flex items-center gap-3">
              <span className="font-mono text-xs opacity-80">03</span>
              Capabilities
            </h2>
          </div>
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-[24px]">
            {/* Card 1 */}
            <div className="bg-white/60 backdrop-blur-[80px] border border-white/40 p-8 rounded-[16px] shadow-[0_8px_32px_rgba(27,42,107,0.08)] hover:-translate-y-1 transition-transform">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-mesh-blue/40 text-brand-accent flex items-center justify-center text-xs font-mono">01</span>
                Human-AI Interaction
              </h3>
              <ul className="flex flex-col gap-3 text-brand-secondary text-sm leading-relaxed">
                <li className="flex gap-2"><span className="opacity-40">✦</span> Designing the relationship between humans and AI, not just the interface</li>
                <li className="flex gap-2"><span className="opacity-40">✦</span> Exploring interaction patterns for AI systems that are still being defined</li>
                <li className="flex gap-2"><span className="opacity-40">✦</span> Bridging technical capability and human intent</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white/60 backdrop-blur-[80px] border border-white/40 p-8 rounded-[16px] shadow-[0_8px_32px_rgba(27,42,107,0.08)] hover:-translate-y-1 transition-transform">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-mesh-purple/40 text-brand-accent flex items-center justify-center text-xs font-mono">02</span>
                UX & Interaction Design
              </h3>
              <ul className="flex flex-col gap-3 text-brand-secondary text-sm leading-relaxed">
                <li className="flex gap-2"><span className="opacity-40">✦</span> End-to-end UX process: research, architecture, prototyping</li>
                <li className="flex gap-2"><span className="opacity-40">✦</span> State-driven interaction design with attention to edge cases</li>
                <li className="flex gap-2"><span className="opacity-40">✦</span> Usability testing and iteration grounded in user behavior</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-white/60 backdrop-blur-[80px] border border-white/40 p-8 rounded-[16px] shadow-[0_8px_32px_rgba(27,42,107,0.08)] hover:-translate-y-1 transition-transform">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-mesh-pink/40 text-brand-accent flex items-center justify-center text-xs font-mono">03</span>
                Design & Systems Thinking
              </h3>
              <ul className="flex flex-col gap-3 text-brand-secondary text-sm leading-relaxed">
                <li className="flex gap-2"><span className="opacity-40">✦</span> Framing ambiguous problems into clear design opportunities</li>
                <li className="flex gap-2"><span className="opacity-40">✦</span> Understanding technical constraints for feasible builds</li>
                <li className="flex gap-2"><span className="opacity-40">✦</span> Mapping end-to-end flows for both user and system</li>
              </ul>
            </div>

            {/* Card 4 */}
            <div className="bg-white/60 backdrop-blur-[80px] border border-white/40 p-8 rounded-[16px] shadow-[0_8px_32px_rgba(27,42,107,0.08)] hover:-translate-y-1 transition-transform">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-mesh-teal/40 text-brand-accent flex items-center justify-center text-xs font-mono">04</span>
                Prototyping & Build
              </h3>
              <ul className="flex flex-col gap-3 text-brand-secondary text-sm leading-relaxed">
                <li className="flex gap-2"><span className="opacity-40">✦</span> Turning concepts into working prototypes with code</li>
                <li className="flex gap-2"><span className="opacity-40">✦</span> Bridging the gap between design files and implementation</li>
                <li className="flex gap-2"><span className="opacity-40">✦</span> CS background enables faster, realistic technical iteration</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 04 Projects */}
        <section id="projects" className="w-full grid grid-cols-1 md:grid-cols-12 gap-[24px] py-32 text-brand-primary">
          <div className="md:col-span-4">
            <h2 className="text-sm font-bold flex items-center gap-3">
              <span className="font-mono text-xs opacity-80">04</span>
              Projects
            </h2>
          </div>
          <div className="md:col-span-8 flex flex-col gap-[40px]">
            {/* Project 1 */}
            <div className="w-full bg-[#FAFAFA]/90 backdrop-blur-2xl rounded-[16px] overflow-hidden shadow-[0_20px_60px_rgba(27,42,107,0.08)] border border-white/60 flex flex-col group cursor-pointer hover:-translate-y-1 transition-all duration-500">
              {/* Mac Window Header */}
              <div className="h-10 w-full bg-[#F3F4F6] border-b border-black/5 flex items-center px-4 relative">
                <div className="flex gap-2 relative z-10">
                  <div className="w-[12px] h-[12px] rounded-full bg-[#FF5F56] border border-black/10"></div>
                  <div className="w-[12px] h-[12px] rounded-full bg-[#FFBD2E] border border-black/10"></div>
                  <div className="w-[12px] h-[12px] rounded-full bg-[#27C93F] border border-black/10"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center font-sans text-xs font-medium text-brand-secondary/70">
                  DoseCare
                </div>
              </div>

              {/* Project Image */}
              <div className="w-full aspect-[16/10] bg-white relative overflow-hidden">
                <div className="w-full h-full bg-[url('/dosecare-mockup.png')] bg-contain bg-no-repeat bg-center group-hover:scale-105 transition-transform duration-700"></div>
              </div>

              {/* Project Info */}
              <div className="p-6 md:p-8 flex flex-col gap-4 bg-[#FAFAFA]/90">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold font-sans text-brand-primary">DoseCare</h3>
                  <p className="text-[16px] md:text-[18px] font-sans text-brand-primary/80 leading-relaxed">
                    A mobile health app designed to help adults 65+ manage their daily medication schedules, reduce missed doses, and stay connected with their healthcare providers.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm font-sans bg-black/5 text-brand-primary/60 px-4 py-1.5 rounded-full uppercase tracking-wider">UX</span>
                  <span className="text-sm font-sans bg-black/5 text-brand-primary/60 px-4 py-1.5 rounded-full uppercase tracking-wider">UI</span>
                  <span className="text-sm font-sans bg-black/5 text-brand-primary/60 px-4 py-1.5 rounded-full uppercase tracking-wider">AI</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="w-full bg-[#FAFAFA]/90 backdrop-blur-2xl rounded-[16px] overflow-hidden shadow-[0_20px_60px_rgba(27,42,107,0.08)] border border-white/60 flex flex-col group cursor-pointer hover:-translate-y-1 transition-all duration-500">
              {/* Mac Window Header */}
              <div className="h-10 w-full bg-[#F3F4F6] border-b border-black/5 flex items-center px-4 relative">
                <div className="flex gap-2 relative z-10">
                  <div className="w-[12px] h-[12px] rounded-full bg-[#FF5F56] border border-black/10"></div>
                  <div className="w-[12px] h-[12px] rounded-full bg-[#FFBD2E] border border-black/10"></div>
                  <div className="w-[12px] h-[12px] rounded-full bg-[#27C93F] border border-black/10"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center font-sans text-xs font-medium text-brand-secondary/70">
                  Nirvana
                </div>
              </div>

              {/* Project Image */}
              <div className="w-full aspect-[16/10] bg-[#EAE3DB] relative overflow-hidden">
                <div className="w-full h-full bg-[url('/nirvana-mockup.png')] bg-cover bg-[position:right_center] group-hover:scale-105 transition-transform duration-700"></div>
              </div>

              {/* Project Info */}
              <div className="p-6 md:p-8 flex flex-col gap-4 bg-[#FAFAFA]/90">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold font-sans text-brand-primary">Nirvana <span className="opacity-60 font-normal text-lg">| Team Leader</span></h3>
                  <p className="text-[16px] md:text-[18px] font-sans text-brand-primary/80 leading-relaxed">
                    Led end-to-end service design for a car modification platform, covering market research, user interviews with 4 enthusiasts, and survey of 167 participants. Designed VroomVision — a mobile app for planning and visualizing car modifications in 3D — including information architecture, user flows, and high-fidelity UI. Delivered a complete service blueprint integrating online app with offline shop design. Developed an immersive VR driving simulator in Unity to allow users to preview modification results before committing to a build.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm font-sans bg-black/5 text-brand-primary/60 px-4 py-1.5 rounded-full uppercase tracking-wider">Service Design</span>
                  <span className="text-sm font-sans bg-black/5 text-brand-primary/60 px-4 py-1.5 rounded-full uppercase tracking-wider">UX/UI</span>
                  <span className="text-sm font-sans bg-black/5 text-brand-primary/60 px-4 py-1.5 rounded-full uppercase tracking-wider">VR / Unity</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="w-full bg-[#FAFAFA]/90 backdrop-blur-2xl rounded-[16px] overflow-hidden shadow-[0_20px_60px_rgba(27,42,107,0.08)] border border-white/60 flex flex-col group cursor-pointer hover:-translate-y-1 transition-all duration-500">
              {/* Mac Window Header */}
              <div className="h-10 w-full bg-[#F3F4F6] border-b border-black/5 flex items-center px-4 relative">
                <div className="flex gap-2 relative z-10">
                  <div className="w-[12px] h-[12px] rounded-full bg-[#FF5F56] border border-black/10"></div>
                  <div className="w-[12px] h-[12px] rounded-full bg-[#FFBD2E] border border-black/10"></div>
                  <div className="w-[12px] h-[12px] rounded-full bg-[#27C93F] border border-black/10"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center font-sans text-xs font-medium text-brand-secondary/70">
                  Agrox
                </div>
              </div>

              {/* Project Image */}
              <div className="w-full aspect-[16/10] bg-[#EAE3DB] relative overflow-hidden">
                <div className="w-full h-full bg-[url('/agrox-mockup.png')] bg-cover bg-[position:right_center] group-hover:scale-105 transition-transform duration-700"></div>
              </div>

              {/* Project Info */}
              <div className="p-6 md:p-8 flex flex-col gap-4 bg-[#FAFAFA]/90">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold font-sans text-brand-primary">Agrox <span className="opacity-60 font-normal text-lg">| UX Designer</span></h3>
                  <p className="text-[16px] md:text-[18px] font-sans text-brand-primary/80 leading-relaxed">
                    Led user research and UX design for an autonomous pest management robot targeting organic farmers. Conducted field interviews with 5 farmers and secondary research on organic pest control methods, synthesizing findings into personas and product direction. Defined AI-driven product features including visual pest recognition, vacuum/steam control, and IoT connectivity. Delivered high-fidelity tablet dashboard UI with real-time pest heatmaps, device management, and field monitoring.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm font-sans bg-black/5 text-brand-primary/60 px-4 py-1.5 rounded-full uppercase tracking-wider">UX Research</span>
                  <span className="text-sm font-sans bg-black/5 text-brand-primary/60 px-4 py-1.5 rounded-full uppercase tracking-wider">UI Design</span>
                  <span className="text-sm font-sans bg-black/5 text-brand-primary/60 px-4 py-1.5 rounded-full uppercase tracking-wider">AI / IoT</span>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="w-full bg-[#FAFAFA]/90 backdrop-blur-2xl rounded-[16px] overflow-hidden shadow-[0_20px_60px_rgba(27,42,107,0.08)] border border-white/60 flex flex-col group cursor-pointer hover:-translate-y-1 transition-all duration-500">
              {/* Mac Window Header */}
              <div className="h-10 w-full bg-[#F3F4F6] border-b border-black/5 flex items-center px-4 relative">
                <div className="flex gap-2 relative z-10">
                  <div className="w-[12px] h-[12px] rounded-full bg-[#FF5F56] border border-black/10"></div>
                  <div className="w-[12px] h-[12px] rounded-full bg-[#FFBD2E] border border-black/10"></div>
                  <div className="w-[12px] h-[12px] rounded-full bg-[#27C93F] border border-black/10"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center font-sans text-xs font-medium text-brand-secondary/70">
                  Nest Thermostat
                </div>
              </div>

              {/* Project Image */}
              <div className="w-full aspect-[16/10] bg-[#1E1E1E] relative overflow-hidden">
                <div className="w-full h-full bg-[url('/nest-mockup.png')] bg-cover bg-[position:right_center] group-hover:scale-105 transition-transform duration-700"></div>
              </div>

              {/* Project Info */}
              <div className="p-6 md:p-8 flex flex-col gap-4 bg-[#FAFAFA]/90">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold font-sans text-brand-primary">Redesign Nest Thermostat <span className="opacity-60 font-normal text-lg">| Project Lead and UX Design</span></h3>
                  <p className="text-[16px] md:text-[18px] font-sans text-brand-primary/80 leading-relaxed">
                    Led interface redesign of the Nest Thermostat app, focusing on visual design and interaction patterns. Introduced a coordinate-based scheduling interaction allowing users to set temperature and time simultaneously through drag gestures, and a tag-based setpoint grouping system for cross-day schedule management. Validated design decisions through usability testing with real users. Delivered high-fidelity UI with refined design system.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm font-sans bg-black/5 text-brand-primary/60 px-4 py-1.5 rounded-full uppercase tracking-wider">UX/UI Design</span>
                  <span className="text-sm font-sans bg-black/5 text-brand-primary/60 px-4 py-1.5 rounded-full uppercase tracking-wider">Interaction</span>
                  <span className="text-sm font-sans bg-black/5 text-brand-primary/60 px-4 py-1.5 rounded-full uppercase tracking-wider">Usability Testing</span>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="w-full bg-[#FAFAFA]/90 backdrop-blur-2xl rounded-[16px] overflow-hidden shadow-[0_20px_60px_rgba(27,42,107,0.08)] border border-white/60 flex flex-col group cursor-pointer hover:-translate-y-1 transition-all duration-500">
              {/* Mac Window Header */}
              <div className="h-10 w-full bg-[#F3F4F6] border-b border-black/5 flex items-center px-4 relative">
                <div className="flex gap-2 relative z-10">
                  <div className="w-[12px] h-[12px] rounded-full bg-[#FF5F56] border border-black/10"></div>
                  <div className="w-[12px] h-[12px] rounded-full bg-[#FFBD2E] border border-black/10"></div>
                  <div className="w-[12px] h-[12px] rounded-full bg-[#27C93F] border border-black/10"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center font-sans text-xs font-medium text-brand-secondary/70">
                  VR Simulation
                </div>
              </div>

              {/* Project Image */}
              <div className="w-full aspect-[16/10] bg-[#898989] relative overflow-hidden">
                <div className="w-full h-full bg-[url('/vr-sim-mockup.png')] bg-cover bg-[position:right_center] group-hover:scale-105 transition-transform duration-700"></div>
              </div>

              {/* Project Info */}
              <div className="p-6 md:p-8 flex flex-col gap-4 bg-[#FAFAFA]/90">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold font-sans text-brand-primary">VR Tire Change Simulation <span className="opacity-60 font-normal text-lg">| Solo Designer & Developer</span></h3>
                  <p className="text-[16px] md:text-[18px] font-sans text-brand-primary/80 leading-relaxed">
                    This is a personal VR training simulation designed to help beginners practice the tire-changing procedure in a safe, repeatable environment. I translated a real-world workflow into a guided VR experience with clear steps, tool interactions, and contextual tips. The experience focuses on reducing mistakes, improving confidence, and making the learning curve less intimidating. Built end-to-end by me, from interaction design and UI to implementation and playtesting.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm font-sans bg-black/5 text-brand-primary/60 px-4 py-1.5 rounded-full uppercase tracking-wider">VR Interaction</span>
                  <span className="text-sm font-sans bg-black/5 text-brand-primary/60 px-4 py-1.5 rounded-full uppercase tracking-wider">Unity Development</span>
                  <span className="text-sm font-sans bg-black/5 text-brand-primary/60 px-4 py-1.5 rounded-full uppercase tracking-wider">UX Design</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

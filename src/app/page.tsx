"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);
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
          <div className="font-sans font-medium text-[28px] md:text-[40px] lg:text-[48px] leading-[1.08] tracking-[-0.03em] flex flex-col gap-3 md:gap-4 text-brand-primary w-full max-w-5xl mx-auto">

            <div className="flex items-center justify-center gap-2 md:gap-3 w-full text-center">
              <span className="text-[11px] md:text-sm font-mono w-6 text-right select-none opacity-70 shrink-0">01</span>
              <span className="font-light font-mono opacity-70 shrink-0">&lt;</span>
              <span>Hello, I am Yuchen</span>
              <span className="font-light font-mono opacity-70 shrink-0">&gt;</span>
            </div>

            <div className="flex items-center justify-center gap-2 md:gap-3 w-full text-center">
              <span className="text-[11px] md:text-sm font-mono w-6 text-right select-none opacity-70 shrink-0">02</span>
              <span className="font-light font-mono opacity-70 shrink-0">&lt;</span>
              <span>UX / Product Designer for AI and XR</span>
              <span className="font-light font-mono opacity-70 shrink-0">&gt;</span>
            </div>

            <div className="flex items-center justify-center gap-2 md:gap-3 w-full text-center">
              <span className="text-[11px] md:text-sm font-mono w-6 text-right select-none opacity-70 shrink-0">03</span>
              <span className="font-light font-mono opacity-70 shrink-0">&lt;</span>
              <span>I design human-AI experiences</span>
              <span className="font-light font-mono opacity-70 shrink-0">&gt;</span>
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
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-[20px] md:gap-[24px]">
            <div className="capability-card capability-card-primary p-7 md:p-8 rounded-[18px]">
              <h3 className="text-[19px] md:text-xl font-bold mb-5 text-brand-primary">Human-AI Design</h3>
              <ul className="flex flex-col gap-3 text-[15px] leading-relaxed text-brand-primary/78">
                <li className="flex gap-2"><span className="opacity-45">✦</span> Design human-AI workflows, not just interfaces</li>
                <li className="flex gap-2"><span className="opacity-45">✦</span> Define interaction patterns for emerging AI products</li>
              </ul>
            </div>

            <div className="capability-card p-7 md:p-8 rounded-[18px]">
              <h3 className="text-[19px] md:text-xl font-bold mb-5 text-brand-primary">UX & Interaction</h3>
              <ul className="flex flex-col gap-3 text-[15px] leading-relaxed text-brand-primary/78">
                <li className="flex gap-2"><span className="opacity-45">✦</span> Build end-to-end flows from research to prototype</li>
                <li className="flex gap-2"><span className="opacity-45">✦</span> Design state-driven interactions with clear feedback</li>
              </ul>
            </div>

            <div className="capability-card p-7 md:p-8 rounded-[18px]">
              <h3 className="text-[19px] md:text-xl font-bold mb-5 text-brand-primary">Systems Thinking</h3>
              <ul className="flex flex-col gap-3 text-[15px] leading-relaxed text-brand-primary/78">
                <li className="flex gap-2"><span className="opacity-45">✦</span> Turn ambiguous problems into structured product decisions</li>
                <li className="flex gap-2"><span className="opacity-45">✦</span> Map user flows, edge cases, and system logic</li>
              </ul>
            </div>

            <div className="capability-card p-7 md:p-8 rounded-[18px]">
              <h3 className="text-[19px] md:text-xl font-bold mb-5 text-brand-primary">Prototyping with Code</h3>
              <ul className="flex flex-col gap-3 text-[15px] leading-relaxed text-brand-primary/78">
                <li className="flex gap-2"><span className="opacity-45">✦</span> Translate concepts into functional prototypes</li>
                <li className="flex gap-2"><span className="opacity-45">✦</span> Bridge design intent and technical feasibility</li>
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
            <Link href="/projects/assembly-line-y" className="w-full bg-[#FAFAFA]/90 backdrop-blur-2xl rounded-[16px] overflow-hidden shadow-[0_20px_60px_rgba(27,42,107,0.08)] border border-white/60 flex flex-col group cursor-pointer hover:-translate-y-1 transition-all duration-500">
              <div className="h-10 w-full bg-[#F3F4F6] border-b border-black/5 flex items-center px-4 relative">
                <div className="flex gap-2 relative z-10">
                  <div className="w-[12px] h-[12px] rounded-full bg-[#FF5F56] border border-black/10"></div>
                  <div className="w-[12px] h-[12px] rounded-full bg-[#FFBD2E] border border-black/10"></div>
                  <div className="w-[12px] h-[12px] rounded-full bg-[#27C93F] border border-black/10"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center font-sans text-xs font-medium text-brand-secondary/70">
                  Assembly Line Y
                </div>
              </div>

              <div className="w-full aspect-[16/10] bg-[#0A0A08] relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.04\'/%3E%3C/svg%3E')] mix-blend-overlay"></div>
                <div className="flex flex-col items-center justify-center gap-4 z-10 group-hover:scale-105 transition-transform duration-700">
                  <span className="font-mono text-[10px] sm:text-xs text-[#C8962A] tracking-[4px] uppercase border border-[#C8962A]/30 bg-[#C8962A]/10 px-4 py-1.5 backdrop-blur-md">VR SIMULATION</span>
                  <h3 className="text-4xl sm:text-5xl md:text-6xl font-sans font-bold text-[#E8E0D0] tracking-tight">Assembly <span className="italic font-light text-[#C8962A]">Line Y</span></h3>
                </div>
              </div>

              <div className="p-6 md:p-8 flex flex-col gap-4 bg-[#FAFAFA]/90">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold font-sans text-brand-primary">Assembly Line Y <span className="opacity-60 font-normal text-lg">| VR Developer & Designer</span></h3>
                  <p className="text-[16px] md:text-[18px] font-sans text-brand-primary/80 leading-relaxed">
                    A Quest 3 VR training simulation for Tesla Model Y assembly, enhanced with an AI assistant for guided task support.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm font-sans bg-black/5 text-brand-primary/60 px-4 py-1.5 rounded-full uppercase tracking-wider">VR / XR</span>
                  <span className="text-sm font-sans bg-black/5 text-brand-primary/60 px-4 py-1.5 rounded-full uppercase tracking-wider">AI Integration</span>
                  <span className="text-sm font-sans bg-black/5 text-brand-primary/60 px-4 py-1.5 rounded-full uppercase tracking-wider">Unity</span>
                </div>
              </div>
            </Link>

            {/* Project 2 */}
            <Link href="/projects/nest-thermostat" className="w-full bg-[#FAFAFA]/90 backdrop-blur-2xl rounded-[16px] overflow-hidden shadow-[0_20px_60px_rgba(27,42,107,0.08)] border border-white/60 flex flex-col group cursor-pointer hover:-translate-y-1 transition-all duration-500">
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

              <div className="w-full aspect-[16/10] bg-[#1E1E1E] relative overflow-hidden">
                <div className="w-full h-full bg-[url('/nest-mockup.png')] bg-cover bg-[position:right_center] group-hover:scale-105 transition-transform duration-700"></div>
              </div>

              <div className="p-6 md:p-8 flex flex-col gap-4 bg-[#FAFAFA]/90">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold font-sans text-brand-primary">Redesign Nest Thermostat <span className="opacity-60 font-normal text-lg">| Project Lead and UX Design</span></h3>
                  <p className="text-[16px] md:text-[18px] font-sans text-brand-primary/80 leading-relaxed">
                    A redesign of the Nest Thermostat app, focused on clearer scheduling interactions and a more usable control experience.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm font-sans bg-black/5 text-brand-primary/60 px-4 py-1.5 rounded-full uppercase tracking-wider">UX/UI Design</span>
                  <span className="text-sm font-sans bg-black/5 text-brand-primary/60 px-4 py-1.5 rounded-full uppercase tracking-wider">Interaction</span>
                  <span className="text-sm font-sans bg-black/5 text-brand-primary/60 px-4 py-1.5 rounded-full uppercase tracking-wider">Usability Testing</span>
                </div>
              </div>
            </Link>

            {/* Project 3 */}
            <Link href="/projects/dosecare" className="w-full bg-[#FAFAFA]/90 backdrop-blur-2xl rounded-[16px] overflow-hidden shadow-[0_20px_60px_rgba(27,42,107,0.08)] border border-white/60 flex flex-col group cursor-pointer hover:-translate-y-1 transition-all duration-500">
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

              <div className="w-full aspect-[16/10] bg-white relative overflow-hidden">
                <div className="w-full h-full bg-[url('/dosecare-mockup.png')] bg-contain bg-no-repeat bg-center group-hover:scale-105 transition-transform duration-700"></div>
              </div>

              <div className="p-6 md:p-8 flex flex-col gap-4 bg-[#FAFAFA]/90">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold font-sans text-brand-primary">DoseCare</h3>
                  <p className="text-[16px] md:text-[18px] font-sans text-brand-primary/80 leading-relaxed">
                    A medication management app for older adults, designed to reduce missed doses and make daily care easier.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm font-sans bg-black/5 text-brand-primary/60 px-4 py-1.5 rounded-full uppercase tracking-wider">UX</span>
                  <span className="text-sm font-sans bg-black/5 text-brand-primary/60 px-4 py-1.5 rounded-full uppercase tracking-wider">UI</span>
                  <span className="text-sm font-sans bg-black/5 text-brand-primary/60 px-4 py-1.5 rounded-full uppercase tracking-wider">AI</span>
                </div>
              </div>
            </Link>

            {/* Project 4 */}
            <Link href="/projects/agrox" className="w-full bg-[#FAFAFA]/90 backdrop-blur-2xl rounded-[16px] overflow-hidden shadow-[0_20px_60px_rgba(27,42,107,0.08)] border border-white/60 flex flex-col group cursor-pointer hover:-translate-y-1 transition-all duration-500">
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

              <div className="w-full aspect-[16/10] bg-[#EAE3DB] relative overflow-hidden">
                <div className="w-full h-full bg-[url('/agrox-mockup.png')] bg-cover bg-[position:right_center] group-hover:scale-105 transition-transform duration-700"></div>
              </div>

              <div className="p-6 md:p-8 flex flex-col gap-4 bg-[#FAFAFA]/90">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold font-sans text-brand-primary">Agrox <span className="opacity-60 font-normal text-lg">| UX Designer</span></h3>
                  <p className="text-[16px] md:text-[18px] font-sans text-brand-primary/80 leading-relaxed">
                    An AI-powered farm robotics dashboard for organic pest management, focused on field monitoring and decision support.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm font-sans bg-black/5 text-brand-primary/60 px-4 py-1.5 rounded-full uppercase tracking-wider">UX Research</span>
                  <span className="text-sm font-sans bg-black/5 text-brand-primary/60 px-4 py-1.5 rounded-full uppercase tracking-wider">UI Design</span>
                  <span className="text-sm font-sans bg-black/5 text-brand-primary/60 px-4 py-1.5 rounded-full uppercase tracking-wider">AI / IoT</span>
                </div>
              </div>
            </Link>

            {/* Project 5 */}
            <Link href="/projects/nirvana" className="w-full bg-[#FAFAFA]/90 backdrop-blur-2xl rounded-[16px] overflow-hidden shadow-[0_20px_60px_rgba(27,42,107,0.08)] border border-white/60 flex flex-col group cursor-pointer hover:-translate-y-1 transition-all duration-500">
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

              <div className="w-full aspect-[16/10] bg-[#EAE3DB] relative overflow-hidden">
                <div className="w-full h-full bg-[url('/nirvana-mockup.png')] bg-cover bg-[position:right_center] group-hover:scale-105 transition-transform duration-700"></div>
              </div>

              <div className="p-6 md:p-8 flex flex-col gap-4 bg-[#FAFAFA]/90">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold font-sans text-brand-primary">Nirvana <span className="opacity-60 font-normal text-lg">| Team Leader</span></h3>
                  <p className="text-[16px] md:text-[18px] font-sans text-brand-primary/80 leading-relaxed">
                    A service design concept for car customization, combining mobile planning, 3D visualization, and a VR preview experience.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm font-sans bg-black/5 text-brand-primary/60 px-4 py-1.5 rounded-full uppercase tracking-wider">Service Design</span>
                  <span className="text-sm font-sans bg-black/5 text-brand-primary/60 px-4 py-1.5 rounded-full uppercase tracking-wider">UX/UI</span>
                  <span className="text-sm font-sans bg-black/5 text-brand-primary/60 px-4 py-1.5 rounded-full uppercase tracking-wider">VR / Unity</span>
                </div>
              </div>
            </Link>

            {/* Project 6 */}
            <Link href="/projects/vr-simulation" className="w-full bg-[#FAFAFA]/90 backdrop-blur-2xl rounded-[16px] overflow-hidden shadow-[0_20px_60px_rgba(27,42,107,0.08)] border border-white/60 flex flex-col group cursor-pointer hover:-translate-y-1 transition-all duration-500">
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

              <div className="w-full aspect-[16/10] bg-[#898989] relative overflow-hidden">
                <div className="w-full h-full bg-[url('/vr-sim-mockup.png')] bg-cover bg-[position:right_center] group-hover:scale-105 transition-transform duration-700"></div>
              </div>

              <div className="p-6 md:p-8 flex flex-col gap-4 bg-[#FAFAFA]/90">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold font-sans text-brand-primary">VR Tire Change Simulation <span className="opacity-60 font-normal text-lg">| Solo Designer & Developer</span></h3>
                  <p className="text-[16px] md:text-[18px] font-sans text-brand-primary/80 leading-relaxed">
                    A VR training experience that helps beginners practice tire changing through guided, repeatable interaction.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm font-sans bg-black/5 text-brand-primary/60 px-4 py-1.5 rounded-full uppercase tracking-wider">VR Interaction</span>
                  <span className="text-sm font-sans bg-black/5 text-brand-primary/60 px-4 py-1.5 rounded-full uppercase tracking-wider">Unity Development</span>
                  <span className="text-sm font-sans bg-black/5 text-brand-primary/60 px-4 py-1.5 rounded-full uppercase tracking-wider">UX Design</span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* 05 Resume */}
        <section id="resume" className="w-full grid grid-cols-1 md:grid-cols-12 gap-[24px] py-32 text-brand-primary">
          <div className="md:col-span-4">
            <h2 className="text-sm font-bold flex items-center gap-3">
              <span className="font-mono text-xs opacity-80">05</span>
              Resume
            </h2>
          </div>

          <div className="md:col-span-8 flex flex-col gap-10">
            <div className="rounded-[24px] border border-white/70 bg-white/78 backdrop-blur-xl p-8 md:p-10 shadow-[0_16px_40px_rgba(27,42,107,0.08)]">
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="max-w-[640px] flex flex-col gap-4">
                  <p className="text-sm font-mono uppercase tracking-[0.18em] text-brand-primary/50">Yuchen Zhang</p>
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-primary">UX / Product Designer for AI, XR, and Interaction Design</h3>
                  <p className="text-[16px] md:text-[18px] leading-[1.75] text-brand-primary/76">
                    Product designer with a background in Computer Science, focused on human-AI interaction, XR experiences, and interaction design. Currently pursuing an MFA in Interactive Design at SCAD and seeking Summer 2026 internship opportunities.
                  </p>
                </div>
                <Link href="/resume" className="inline-flex items-center justify-center rounded-full px-5 py-3 bg-brand-primary text-white text-sm font-medium hover:opacity-90 transition-opacity whitespace-nowrap">
                  View Resume Page
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
              <div className="md:col-span-7 rounded-[24px] border border-white/70 bg-white/78 backdrop-blur-xl p-8 shadow-[0_16px_40px_rgba(27,42,107,0.08)]">
                <h3 className="text-xl md:text-2xl font-bold text-brand-primary mb-8">Education</h3>
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col md:flex-row gap-3 md:gap-6">
                    <div className="md:w-28 flex-shrink-0 text-sm font-mono text-brand-primary/45 pt-1">2024 — Now</div>
                    <div className="flex flex-col gap-1.5">
                      <h4 className="text-lg font-bold text-brand-primary">Savannah College of Art and Design</h4>
                      <p className="text-brand-primary/72">Master of Fine Art in Interactive Design</p>
                      <p className="text-sm text-brand-primary/50">Savannah, Georgia</p>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-3 md:gap-6">
                    <div className="md:w-28 flex-shrink-0 text-sm font-mono text-brand-primary/45 pt-1">2019 — 2023</div>
                    <div className="flex flex-col gap-1.5">
                      <h4 className="text-lg font-bold text-brand-primary">University of Delaware</h4>
                      <p className="text-brand-primary/72">Bachelor’s Degree in Computer Science</p>
                      <p className="text-sm text-brand-primary/50">Newark, Delaware</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-5 flex flex-col gap-6">
                <div className="rounded-[24px] border border-white/70 bg-white/78 backdrop-blur-xl p-8 shadow-[0_16px_40px_rgba(27,42,107,0.08)]">
                  <h3 className="text-xl md:text-2xl font-bold text-brand-primary mb-6">Core Skills</h3>
                  <div className="flex flex-wrap gap-2.5">
                    {["Figma", "User Research", "Usability Testing", "Interaction Design", "Design Systems", "Prototyping", "JavaScript", "Python", "Unity", "AI-assisted Development"].map((skill) => (
                      <span key={skill} className="px-3 py-1.5 bg-black/5 text-brand-primary/72 text-sm rounded-full border border-black/5">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-[24px] border border-white/70 bg-white/78 backdrop-blur-xl p-8 shadow-[0_16px_40px_rgba(27,42,107,0.08)]">
                  <h3 className="text-xl md:text-2xl font-bold text-brand-primary mb-6">Languages</h3>
                  <ul className="flex flex-col gap-3 text-brand-primary/72">
                    <li className="flex justify-between items-center">
                      <span>Chinese</span>
                      <span className="text-sm font-mono text-brand-primary/45">Native</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>English</span>
                      <span className="text-sm font-mono text-brand-primary/45">Proficient</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

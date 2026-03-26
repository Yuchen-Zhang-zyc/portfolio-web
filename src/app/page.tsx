"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import FadeUp from "./components/FadeUp";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "auto";
    }
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${window.scrollY * 0.15}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="flex flex-col w-full min-h-screen font-body relative overflow-x-hidden">

      {/* Skip link */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-6 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-brand-primary focus:rounded-lg focus:text-sm focus:font-medium focus:shadow-lg">
        Skip to main content
      </a>

      {/* Background Mesh (Global) */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-[-1] bg-brand-bg mix-blend-normal">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-mesh-blue mix-blend-multiply blur-[120px] animate-blob opacity-90"></div>
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-mesh-purple mix-blend-multiply blur-[100px] animate-blob animation-delay-2000 opacity-90"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[60%] rounded-full bg-mesh-teal mix-blend-multiply blur-[120px] animate-blob animation-delay-4000 opacity-90"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] rounded-full bg-mesh-pink mix-blend-multiply blur-[100px] animate-blob opacity-90" style={{ animationDelay: '6s' }}></div>
      </div>

      <main id="main-content" className="w-full max-w-[1280px] mx-auto px-6 md:px-[80px] flex flex-col z-10">

        {/* 01 Hero Section */}
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-20 md:pt-24 text-brand-primary">
          <h1 className="sr-only">Yuchen Zhang — UX / Product Designer for AI and XR</h1>
          <div ref={heroRef} className="font-sans font-medium text-[24px] min-[480px]:text-[28px] md:text-[40px] lg:text-[48px] leading-[1.08] tracking-[-0.035em] flex flex-col gap-4 md:gap-4 text-brand-primary w-full max-w-5xl mx-auto items-center">

            <div className="hero-line hero-line-1 grid grid-cols-[24px_minmax(0,1fr)] items-start gap-x-3 md:flex md:items-center md:justify-center md:gap-3 w-full max-w-[320px] min-[480px]:max-w-[380px] md:max-w-none text-left md:text-center">
              <span className="text-[10px] md:text-sm font-mono w-6 text-left md:text-right select-none opacity-60 pt-1 md:pt-0 shrink-0">01</span>
              <div className="flex items-start md:items-center justify-center md:justify-center gap-0 md:gap-3 min-w-0 text-center">
                <span className="hidden md:inline font-light font-mono opacity-70 shrink-0">&lt;</span>
                <span className="min-w-0 mx-auto">Hello, I am Yuchen</span>
                <span className="hidden md:inline font-light font-mono opacity-70 shrink-0">&gt;</span>
              </div>
            </div>

            <div className="hero-line hero-line-2 grid grid-cols-[24px_minmax(0,1fr)] items-start gap-x-3 md:flex md:items-center md:justify-center md:gap-3 w-full max-w-[320px] min-[480px]:max-w-[380px] md:max-w-none text-left md:text-center">
              <span className="text-[10px] md:text-sm font-mono w-6 text-left md:text-right select-none opacity-60 pt-1 md:pt-0 shrink-0">02</span>
              <div className="flex items-start md:items-center justify-center md:justify-center gap-0 md:gap-3 min-w-0 text-center">
                <span className="hidden md:inline font-light font-mono opacity-70 shrink-0">&lt;</span>
                <span className="min-w-0 max-w-[14ch] min-[480px]:max-w-none mx-auto">UX / Product Designer for AI and XR</span>
                <span className="hidden md:inline font-light font-mono opacity-70 shrink-0">&gt;</span>
              </div>
            </div>

            <div className="hero-line hero-line-3 grid grid-cols-[24px_minmax(0,1fr)] items-start gap-x-3 md:flex md:items-center md:justify-center md:gap-3 w-full max-w-[320px] min-[480px]:max-w-[380px] md:max-w-none text-left md:text-center">
              <span className="text-[10px] md:text-sm font-mono w-6 text-left md:text-right select-none opacity-60 pt-1 md:pt-0 shrink-0">03</span>
              <div className="flex items-start md:items-center justify-center md:justify-center gap-0 md:gap-3 min-w-0 text-center">
                <span className="hidden md:inline font-light font-mono opacity-70 shrink-0">&lt;</span>
                <span className="min-w-0 max-w-[15ch] min-[480px]:max-w-none mx-auto">I design human-AI experiences</span>
                <span className="hidden md:inline font-light font-mono opacity-70 shrink-0">&gt;</span>
              </div>
            </div>

          </div>

          <a href="#about" aria-label="Scroll to About section" className="hero-scroll absolute bottom-12 md:bottom-16 flex flex-col items-center gap-2 opacity-40 hover:opacity-70 transition-opacity text-brand-primary">
            <span className="text-[10px] font-mono tracking-[0.22em] uppercase">Scroll</span>
            <span className="text-base leading-none">↓</span>
          </a>
        </section>

        {/* 02 About Me */}
        <section id="about" className="w-full grid grid-cols-1 md:grid-cols-12 gap-[24px] py-32 text-brand-primary">
          <div className="md:col-span-4">
            <h2 className="text-lg font-bold flex items-center gap-3">
              <span className="font-mono text-xs opacity-80">02</span>
              About me
            </h2>
          </div>
          <FadeUp className="md:col-span-8 flex flex-col gap-8">
            {/* Pull quote */}
            <p className="text-[26px] md:text-[32px] font-semibold leading-[1.35] tracking-[-0.02em] text-brand-primary font-sans">
              The technology is here.<br />
              <span className="italic font-serif font-normal text-brand-secondary">The experience isn&apos;t.</span>
            </p>

            {/* Body */}
            <div className="flex flex-col gap-4 text-[16px] md:text-[17px] text-brand-primary/70 leading-[1.75] font-body max-w-[580px]">
              <p>
                I studied computer science and watched AI go from a research topic to something that could genuinely change how people live and work. But most of that potential stays locked behind interfaces that aren&apos;t built for real people.
              </p>
              <p>
                That gap is what I want to close. I&apos;m moving toward AI product — using design as the entry point to build products that let people actually feel the technology revolution, not just read about it.
              </p>
            </div>

          </FadeUp>
        </section>

        {/* 03 Capabilities */}
        <section id="capabilities" className="w-full grid grid-cols-1 md:grid-cols-12 gap-[24px] py-32 text-brand-primary">
          <div className="md:col-span-4">
            <h2 className="text-lg font-bold flex items-center gap-3">
              <span className="font-mono text-xs opacity-80">03</span>
              Capabilities
            </h2>
          </div>
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-[20px] md:gap-[24px]">
            <FadeUp delay={0}>
              <div className="capability-card capability-card-primary p-7 md:p-8 rounded-[18px]">
                <h3 className="text-[19px] md:text-xl font-bold mb-5 text-brand-primary">Human-AI Design</h3>
                <ul className="flex flex-col gap-3 text-[15px] leading-relaxed text-brand-primary/75">
                  <li className="flex gap-2"><span className="opacity-45" aria-hidden="true">✦</span> Design human-AI workflows, not just interfaces</li>
                  <li className="flex gap-2"><span className="opacity-45" aria-hidden="true">✦</span> Define interaction patterns for emerging AI products</li>
                </ul>
              </div>
            </FadeUp>

            <FadeUp delay={80}>
              <div className="capability-card p-7 md:p-8 rounded-[18px]">
                <h3 className="text-[19px] md:text-xl font-bold mb-5 text-brand-primary">UX & Interaction</h3>
                <ul className="flex flex-col gap-3 text-[15px] leading-relaxed text-brand-primary/75">
                  <li className="flex gap-2"><span className="opacity-45" aria-hidden="true">✦</span> Build end-to-end flows from research to prototype</li>
                  <li className="flex gap-2"><span className="opacity-45" aria-hidden="true">✦</span> Design state-driven interactions with clear feedback</li>
                </ul>
              </div>
            </FadeUp>

            <FadeUp delay={160}>
              <div className="capability-card p-7 md:p-8 rounded-[18px]">
                <h3 className="text-[19px] md:text-xl font-bold mb-5 text-brand-primary">Systems Thinking</h3>
                <ul className="flex flex-col gap-3 text-[15px] leading-relaxed text-brand-primary/75">
                  <li className="flex gap-2"><span className="opacity-45" aria-hidden="true">✦</span> Turn ambiguous problems into structured product decisions</li>
                  <li className="flex gap-2"><span className="opacity-45" aria-hidden="true">✦</span> Map user flows, edge cases, and system logic</li>
                </ul>
              </div>
            </FadeUp>

            <FadeUp delay={240}>
              <div className="capability-card p-7 md:p-8 rounded-[18px]">
                <h3 className="text-[19px] md:text-xl font-bold mb-5 text-brand-primary">Prototyping with Code</h3>
                <ul className="flex flex-col gap-3 text-[15px] leading-relaxed text-brand-primary/75">
                  <li className="flex gap-2"><span className="opacity-45" aria-hidden="true">✦</span> Translate concepts into functional prototypes</li>
                  <li className="flex gap-2"><span className="opacity-45" aria-hidden="true">✦</span> Bridge design intent and technical feasibility</li>
                </ul>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* 04 Projects */}
        <section id="projects" className="w-full grid grid-cols-1 md:grid-cols-12 gap-[24px] py-32 text-brand-primary">
          <div className="md:col-span-4">
            <h2 className="text-lg font-bold flex items-center gap-3">
              <span className="font-mono text-xs opacity-80">04</span>
              Projects
            </h2>
          </div>
          <div className="md:col-span-8 flex flex-col gap-[64px]">

            {/* UX */}
            <div className="flex flex-col gap-[40px]">
              <p className="text-xs font-mono tracking-[0.22em] uppercase text-brand-primary/35 pb-3 border-b border-brand-primary/10">UX</p>

              <FadeUp delay={0}>
              <Link href="/projects/nest-thermostat" className="w-full bg-[#FAFAFA]/90 backdrop-blur-2xl rounded-[16px] overflow-hidden shadow-[0_20px_60px_rgba(27,42,107,0.08)] border border-white/60 flex flex-col group cursor-pointer hover:-translate-y-1 transition-transform duration-300">
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
                  <div className="w-full h-full bg-[url('https://res.cloudinary.com/dj13he2xu/image/upload/v1773760252/portfolio/nest-homepage.png')] bg-cover bg-[position:right_center] group-hover:scale-105 transition-transform duration-700"></div>
                </div>
                <div className="p-6 md:p-8 flex flex-col gap-4 bg-[#FAFAFA]/90">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-bold font-sans text-brand-primary">Redesign Nest Thermostat <span className="opacity-60 font-normal text-lg">| Project Lead and UX Design</span></h3>
                    <p className="text-[16px] md:text-[18px] font-body text-brand-primary/75 leading-relaxed">
                      A redesign of the Nest Thermostat app, focused on clearer scheduling interactions and a more usable control experience.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm font-sans bg-black/5 text-brand-primary/60 px-4 py-1.5 rounded-full uppercase tracking-wider">UX Research</span>
                    <span className="text-sm font-sans bg-black/5 text-brand-primary/60 px-4 py-1.5 rounded-full uppercase tracking-wider">Usability Testing</span>
                    <span className="text-sm font-sans bg-black/5 text-brand-primary/60 px-4 py-1.5 rounded-full uppercase tracking-wider">Smart Home / IoT</span>
                  </div>
                </div>
              </Link>
              </FadeUp>
              <FadeUp delay={100}>
              <Link href="/projects/dosecare" className="w-full bg-[#FAFAFA]/90 backdrop-blur-2xl rounded-[16px] overflow-hidden shadow-[0_20px_60px_rgba(27,42,107,0.08)] border border-white/60 flex flex-col group cursor-pointer hover:-translate-y-1 transition-transform duration-300">
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
                  <div className="w-full h-full bg-contain bg-no-repeat bg-center group-hover:scale-105 transition-transform duration-700" style={{ backgroundImage: "url('https://res.cloudinary.com/dj13he2xu/image/upload/v1773789495/portfolio/dosecare-homepage.png')" }}></div>
                </div>
                <div className="p-6 md:p-8 flex flex-col gap-4 bg-[#FAFAFA]/90">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-bold font-sans text-brand-primary">DoseCare <span className="opacity-60 font-normal text-lg">| Team Lead & UX Designer</span></h3>
                    <p className="text-[16px] md:text-[18px] font-body text-brand-primary/75 leading-relaxed">
                      A medication management app for older adults, designed to reduce missed doses and make daily care easier.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm font-sans bg-black/5 text-brand-primary/60 px-4 py-1.5 rounded-full uppercase tracking-wider">HealthTech</span>
                    <span className="text-sm font-sans bg-black/5 text-brand-primary/60 px-4 py-1.5 rounded-full uppercase tracking-wider">Accessibility</span>
                    <span className="text-sm font-sans bg-black/5 text-brand-primary/60 px-4 py-1.5 rounded-full uppercase tracking-wider">User Research</span>
                  </div>
                </div>
              </Link>
              </FadeUp>
              <FadeUp delay={200}>
              <Link href="/projects/agrox" className="w-full bg-[#FAFAFA]/90 backdrop-blur-2xl rounded-[16px] overflow-hidden shadow-[0_20px_60px_rgba(27,42,107,0.08)] border border-white/60 flex flex-col group cursor-pointer hover:-translate-y-1 transition-transform duration-300">
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
                  <div className="w-full h-full bg-[url('https://res.cloudinary.com/dj13he2xu/image/upload/v1773757710/portfolio/agrox-homepage.png')] bg-cover bg-[position:right_center] group-hover:scale-105 transition-transform duration-700"></div>
                </div>
                <div className="p-6 md:p-8 flex flex-col gap-4 bg-[#FAFAFA]/90">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-bold font-sans text-brand-primary">Agrox <span className="opacity-60 font-normal text-lg">| UX Designer</span></h3>
                    <p className="text-[16px] md:text-[18px] font-body text-brand-primary/75 leading-relaxed">
                      An AI-powered farm robotics dashboard for organic pest management, focused on field monitoring and decision support.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm font-sans bg-black/5 text-brand-primary/60 px-4 py-1.5 rounded-full uppercase tracking-wider">AgriTech</span>
                    <span className="text-sm font-sans bg-black/5 text-brand-primary/60 px-4 py-1.5 rounded-full uppercase tracking-wider">Robotics</span>
                    <span className="text-sm font-sans bg-black/5 text-brand-primary/60 px-4 py-1.5 rounded-full uppercase tracking-wider">AI Vision</span>
                  </div>
                </div>
              </Link>
              </FadeUp>
              <FadeUp delay={300}>
              <Link href="/projects/nirvana" className="w-full bg-[#FAFAFA]/90 backdrop-blur-2xl rounded-[16px] overflow-hidden shadow-[0_20px_60px_rgba(27,42,107,0.08)] border border-white/60 flex flex-col group cursor-pointer hover:-translate-y-1 transition-transform duration-300">
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
                  <div className="w-full h-full bg-[url('https://res.cloudinary.com/dj13he2xu/image/upload/v1773760297/portfolio/nirvana-homepage.png')] bg-cover bg-[position:right_center] group-hover:scale-105 transition-transform duration-700"></div>
                </div>
                <div className="p-6 md:p-8 flex flex-col gap-4 bg-[#FAFAFA]/90">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-bold font-sans text-brand-primary">Nirvana <span className="opacity-60 font-normal text-lg">| Team Leader</span></h3>
                    <p className="text-[16px] md:text-[18px] font-body text-brand-primary/75 leading-relaxed">
                      A service design concept for car customization, combining mobile planning, 3D visualization, and a VR preview experience.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm font-sans bg-black/5 text-brand-primary/60 px-4 py-1.5 rounded-full uppercase tracking-wider">Service Design</span>
                    <span className="text-sm font-sans bg-black/5 text-brand-primary/60 px-4 py-1.5 rounded-full uppercase tracking-wider">3D Visualization</span>
                    <span className="text-sm font-sans bg-black/5 text-brand-primary/60 px-4 py-1.5 rounded-full uppercase tracking-wider">User Research</span>
                  </div>
                </div>
              </Link>
              </FadeUp>
            </div>

            {/* XR */}
            <div className="flex flex-col gap-[40px]">
              <p className="text-xs font-mono tracking-[0.22em] uppercase text-brand-primary/35 pb-3 border-b border-brand-primary/10">XR</p>

              <FadeUp delay={0}>
              <Link href="/projects/assembly-line-y" className="w-full bg-[#FAFAFA]/90 backdrop-blur-2xl rounded-[16px] overflow-hidden shadow-[0_20px_60px_rgba(27,42,107,0.08)] border border-white/60 flex flex-col group cursor-pointer hover:-translate-y-1 transition-transform duration-300">
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
                    <div aria-hidden="true" className="text-4xl sm:text-5xl md:text-6xl font-sans font-bold text-[#E8E0D0] tracking-tight">Assembly <span className="italic font-light text-[#C8962A]">Line Y</span></div>
                  </div>
                </div>
                <div className="p-6 md:p-8 flex flex-col gap-4 bg-[#FAFAFA]/90">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-bold font-sans text-brand-primary">Assembly Line Y <span className="opacity-60 font-normal text-lg">| VR Developer & Designer</span></h3>
                    <p className="text-[16px] md:text-[18px] font-body text-brand-primary/75 leading-relaxed">
                      A Quest 3 VR training simulation for Tesla Model Y assembly, enhanced with an AI assistant for guided task support.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm font-sans bg-black/5 text-brand-primary/60 px-4 py-1.5 rounded-full uppercase tracking-wider">VR / XR</span>
                    <span className="text-sm font-sans bg-black/5 text-brand-primary/60 px-4 py-1.5 rounded-full uppercase tracking-wider">AI Guidance</span>
                    <span className="text-sm font-sans bg-black/5 text-brand-primary/60 px-4 py-1.5 rounded-full uppercase tracking-wider">Enterprise Training</span>
                  </div>
                </div>
              </Link>
              </FadeUp>
              <FadeUp delay={100}>
              <Link href="/projects/tireswap" className="w-full bg-[#FAFAFA]/90 backdrop-blur-2xl rounded-[16px] overflow-hidden shadow-[0_20px_60px_rgba(27,42,107,0.08)] border border-white/60 flex flex-col group cursor-pointer hover:-translate-y-1 transition-transform duration-300">
                <div className="h-10 w-full bg-[#F3F4F6] border-b border-black/5 flex items-center px-4 relative">
                  <div className="flex gap-2 relative z-10">
                    <div className="w-[12px] h-[12px] rounded-full bg-[#FF5F56] border border-black/10"></div>
                    <div className="w-[12px] h-[12px] rounded-full bg-[#FFBD2E] border border-black/10"></div>
                    <div className="w-[12px] h-[12px] rounded-full bg-[#27C93F] border border-black/10"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center font-sans text-xs font-medium text-brand-secondary/70">
                    TireSwap VR
                  </div>
                </div>
                <div className="w-full aspect-[16/10] relative overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/dj13he2xu/image/upload/v1774361807/portfolio/projects/tireswap/garage.png"
                    alt="TireSwap VR garage environment"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col gap-4 bg-[#FAFAFA]/90">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-bold font-sans text-brand-primary">TireSwap VR <span className="opacity-60 font-normal text-lg">| VR Developer & Designer</span></h3>
                    <p className="text-[16px] md:text-[18px] font-body text-brand-primary/75 leading-relaxed">
                      A hands-on VR training simulation for tire replacement in a realistic garage environment, with step-by-step guidance and procedural validation.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm font-sans bg-black/5 text-brand-primary/60 px-4 py-1.5 rounded-full uppercase tracking-wider">VR / XR</span>
                    <span className="text-sm font-sans bg-black/5 text-brand-primary/60 px-4 py-1.5 rounded-full uppercase tracking-wider">Procedural Training</span>
                    <span className="text-sm font-sans bg-black/5 text-brand-primary/60 px-4 py-1.5 rounded-full uppercase tracking-wider">Unity XR</span>
                  </div>
                </div>
              </Link>
              </FadeUp>
            </div>

            {/* AI */}
            <div className="flex flex-col gap-[40px]">
              <p className="text-xs font-mono tracking-[0.22em] uppercase text-brand-primary/35 pb-3 border-b border-brand-primary/10">AI</p>

              <FadeUp delay={0}>
              <Link href="/projects/reco" className="w-full bg-[#FAFAFA]/90 backdrop-blur-2xl rounded-[16px] overflow-hidden shadow-[0_20px_60px_rgba(27,42,107,0.08)] border border-white/60 flex flex-col group cursor-pointer hover:-translate-y-1 transition-transform duration-300">
                <div className="h-10 w-full bg-[#F3F4F6] border-b border-black/5 flex items-center px-4 relative">
                  <div className="flex gap-2 relative z-10">
                    <div className="w-[12px] h-[12px] rounded-full bg-[#FF5F56] border border-black/10"></div>
                    <div className="w-[12px] h-[12px] rounded-full bg-[#FFBD2E] border border-black/10"></div>
                    <div className="w-[12px] h-[12px] rounded-full bg-[#27C93F] border border-black/10"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center font-sans text-xs font-medium text-brand-secondary/70">
                    RECO
                  </div>
                </div>
                <div className="w-full aspect-[16/10] bg-[#0D0D0F] relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(91,140,245,0.4) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(120,80,220,0.3) 0%, transparent 60%)" }}></div>
                  <div className="flex flex-col items-center justify-center gap-3 z-10 group-hover:scale-105 transition-transform duration-700">
                    <span className="font-mono text-[10px] sm:text-xs text-[#7AABFF] tracking-[4px] uppercase border border-[#5B8CF5]/30 bg-[#5B8CF5]/10 px-4 py-1.5 backdrop-blur-md">ACL REHAB · AI COMPANION</span>
                    <div aria-hidden="true" className="text-4xl sm:text-5xl md:text-6xl font-sans font-bold text-white tracking-tight">RECO</div>
                  </div>
                </div>
                <div className="p-6 md:p-8 flex flex-col gap-4 bg-[#FAFAFA]/90">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-bold font-sans text-brand-primary">RECO <span className="opacity-60 font-normal text-lg">| API Integration & Frontend</span></h3>
                    <p className="text-[16px] md:text-[18px] font-body text-brand-primary/75 leading-relaxed">
                      An AI rehabilitation companion for ACL recovery, powered by ChatGPT-4o and PubMed medical data. Built in a 48-hour school hackathon — API layer & frontend; team earned Honorable Mention.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm font-sans bg-black/5 text-brand-primary/60 px-4 py-1.5 rounded-full uppercase tracking-wider">HealthTech</span>
                    <span className="text-sm font-sans bg-black/5 text-brand-primary/60 px-4 py-1.5 rounded-full uppercase tracking-wider">AI / LLM</span>
                    <span className="text-sm font-sans bg-black/5 text-brand-primary/60 px-4 py-1.5 rounded-full uppercase tracking-wider">Medical API</span>
                  </div>
                </div>
              </Link>
              </FadeUp>
              <FadeUp delay={100}>
              <Link href="/projects/this-website" className="w-full bg-[#FAFAFA]/90 backdrop-blur-2xl rounded-[16px] overflow-hidden shadow-[0_20px_60px_rgba(27,42,107,0.08)] border border-white/60 flex flex-col group cursor-pointer hover:-translate-y-1 transition-transform duration-300">
                <div className="h-10 w-full bg-[#F3F4F6] border-b border-black/5 flex items-center px-4 relative">
                  <div className="flex gap-2 relative z-10">
                    <div className="w-[12px] h-[12px] rounded-full bg-[#FF5F56] border border-black/10"></div>
                    <div className="w-[12px] h-[12px] rounded-full bg-[#FFBD2E] border border-black/10"></div>
                    <div className="w-[12px] h-[12px] rounded-full bg-[#27C93F] border border-black/10"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center font-sans text-xs font-medium text-brand-secondary/70">
                    This Website
                  </div>
                </div>
                <div className="w-full aspect-[16/10] overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773849044/portfolio/projects/this-website/home-v2.png"
                    alt="Portfolio home page screenshot"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col gap-4 bg-[#FAFAFA]/90">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-bold font-sans text-brand-primary">
                      This website <span className="opacity-60 font-normal text-lg">| AI-assisted workflow</span>
                    </h3>
                    <p className="text-[16px] md:text-[18px] font-body text-brand-primary/75 leading-relaxed">
                      Most of the site came together through vibe coding sessions with Claude + Figma MCP. Gemini and Codex helped with alternative code paths, sanity checks, and stress‑testing ideas from different model perspectives.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm font-sans bg-black/5 text-brand-primary/60 px-4 py-1.5 rounded-full uppercase tracking-wider">Next.js · React</span>
                    <span className="text-sm font-sans bg-black/5 text-brand-primary/60 px-4 py-1.5 rounded-full uppercase tracking-wider">AI-assisted Dev</span>
                    <span className="text-sm font-sans bg-black/5 text-brand-primary/60 px-4 py-1.5 rounded-full uppercase tracking-wider">Design System</span>
                  </div>
                </div>
              </Link>
              </FadeUp>
            </div>

          </div>
        </section>

        {/* 05 Resume */}
        <section id="resume" className="w-full grid grid-cols-1 md:grid-cols-12 gap-[24px] py-32 text-brand-primary">
          <div className="md:col-span-4">
            <h2 className="text-lg font-bold flex items-center gap-3">
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
                  <p className="text-[16px] md:text-[18px] leading-[1.75] text-brand-primary/75">
                    Product designer with a background in Computer Science, focused on human-AI interaction, XR experiences, and interaction design. Currently pursuing an MFA in Interactive Design at SCAD and seeking Summer 2026 internship opportunities.
                  </p>
                </div>
                <a href="/Yuchen_Zhang_Resume_AI_XR.pdf" download className="inline-flex items-center justify-center rounded-full px-5 py-3 bg-brand-primary text-white text-sm font-medium hover:opacity-90 transition-opacity whitespace-nowrap">
                  Download Resume
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
              <div className="md:col-span-7 rounded-[24px] border border-white/70 bg-white/78 backdrop-blur-xl p-8 shadow-[0_16px_40px_rgba(27,42,107,0.08)] self-start">
                <h3 className="text-xl md:text-2xl font-bold text-brand-primary mb-8">Education</h3>
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col md:flex-row gap-3 md:gap-6">
                    <div className="md:w-28 flex-shrink-0 text-sm font-mono text-brand-primary/45 pt-1">2024 — Now</div>
                    <div className="flex flex-col gap-1.5">
                      <h4 className="text-lg font-bold text-brand-primary">Savannah College of Art and Design</h4>
                      <p className="text-brand-primary/70">Master of Fine Art in Interactive Design</p>
                      <p className="text-sm text-brand-primary/50">Savannah, Georgia</p>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-3 md:gap-6">
                    <div className="md:w-28 flex-shrink-0 text-sm font-mono text-brand-primary/45 pt-1">2019 — 2023</div>
                    <div className="flex flex-col gap-1.5">
                      <h4 className="text-lg font-bold text-brand-primary">University of Delaware</h4>
                      <p className="text-brand-primary/70">Bachelor’s Degree in Computer Science</p>
                      <p className="text-sm text-brand-primary/50">Newark, Delaware</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-5 flex flex-col gap-6">
                <div className="rounded-[24px] border border-white/70 bg-white/78 backdrop-blur-xl p-8 shadow-[0_16px_40px_rgba(27,42,107,0.08)]">
                  <h3 className="text-xl md:text-2xl font-bold text-brand-primary mb-6">Core Skills</h3>
                  <div className="flex flex-wrap gap-2.5">
                    {["Figma", "User Research", "Usability Testing", "Interaction Design", "Design Systems", "Prototyping", "JavaScript", "Python", "Unity", "Vibe Coding"].map((skill) => (
                      <span key={skill} className="px-3 py-1.5 bg-black/5 text-brand-primary/70 text-sm rounded-full border border-black/5">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-[24px] border border-white/70 bg-white/78 backdrop-blur-xl p-8 shadow-[0_16px_40px_rgba(27,42,107,0.08)]">
                  <h3 className="text-xl md:text-2xl font-bold text-brand-primary mb-6">Languages</h3>
                  <ul className="flex flex-col gap-3 text-brand-primary/70">
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

      <footer className="w-full border-t border-brand-primary/10 z-10">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-[80px] py-16 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="flex flex-col gap-2">
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-brand-primary/40">Let&apos;s connect</p>
            <a href="mailto:zyc1108@outlook.com" className="text-lg font-medium text-brand-primary hover:opacity-60 transition-opacity">
              zyc1108@outlook.com
            </a>
          </div>
          <div className="flex flex-col items-start md:items-end gap-1">
            <span className="text-base font-medium text-brand-primary">Yuchen Zhang</span>
            <span className="text-xs font-mono text-brand-primary/40">UX / Product Designer · © 2026</span>
            <span className="text-xs font-mono text-brand-primary/25">Built with vibe coding + Claude</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

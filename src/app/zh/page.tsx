"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function HomeZh() {
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
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-20 md:pt-24 text-brand-primary">
          <div className="font-sans font-medium text-[24px] min-[480px]:text-[28px] md:text-[40px] lg:text-[48px] leading-[1.08] tracking-[-0.035em] flex flex-col gap-4 md:gap-4 text-brand-primary w-full max-w-5xl mx-auto items-center">

            <div className="grid grid-cols-[24px_minmax(0,1fr)] items-start gap-x-3 md:flex md:items-center md:justify-center md:gap-3 w-full max-w-[320px] min-[480px]:max-w-[380px] md:max-w-none text-left md:text-center">
              <span className="text-[10px] md:text-sm font-mono w-6 text-left md:text-right select-none opacity-60 pt-1 md:pt-0 shrink-0">01</span>
              <div className="flex items-start md:items-center justify-center md:justify-center gap-0 md:gap-3 min-w-0 text-center">
                <span className="hidden md:inline font-light font-mono opacity-70 shrink-0">&lt;</span>
                <span className="min-w-0 mx-auto">你好，我是 Yuchen</span>
                <span className="hidden md:inline font-light font-mono opacity-70 shrink-0">&gt;</span>
              </div>
            </div>

            <div className="grid grid-cols-[24px_minmax(0,1fr)] items-start gap-x-3 md:flex md:items-center md:justify-center md:gap-3 w-full max-w-[320px] min-[480px]:max-w-[380px] md:max-w-none text-left md:text-center">
              <span className="text-[10px] md:text-sm font-mono w-6 text-left md:text-right select-none opacity-60 pt-1 md:pt-0 shrink-0">02</span>
              <div className="flex items-start md:items-center justify-center md:justify-center gap-0 md:gap-3 min-w-0 text-center">
                <span className="hidden md:inline font-light font-mono opacity-70 shrink-0">&lt;</span>
                <span className="min-w-0 max-w-[14ch] min-[480px]:max-w-none mx-auto">AI 与 XR 方向 UX / 产品设计师</span>
                <span className="hidden md:inline font-light font-mono opacity-70 shrink-0">&gt;</span>
              </div>
            </div>

            <div className="grid grid-cols-[24px_minmax(0,1fr)] items-start gap-x-3 md:flex md:items-center md:justify-center md:gap-3 w-full max-w-[320px] min-[480px]:max-w-[380px] md:max-w-none text-left md:text-center">
              <span className="text-[10px] md:text-sm font-mono w-6 text-left md:text-right select-none opacity-60 pt-1 md:pt-0 shrink-0">03</span>
              <div className="flex items-start md:items-center justify-center md:justify-center gap-0 md:gap-3 min-w-0 text-center">
                <span className="hidden md:inline font-light font-mono opacity-70 shrink-0">&lt;</span>
                <span className="min-w-0 max-w-[15ch] min-[480px]:max-w-none mx-auto">我设计人与 AI 交互的体验</span>
                <span className="hidden md:inline font-light font-mono opacity-70 shrink-0">&gt;</span>
              </div>
            </div>

          </div>

          <a href="#about" className="absolute bottom-12 md:bottom-16 flex flex-col items-center gap-2 opacity-40 hover:opacity-70 transition-opacity text-brand-primary">
            <span className="text-[10px] font-mono tracking-[0.22em] uppercase">滚动</span>
            <span className="text-base leading-none">↓</span>
          </a>
        </section>

        {/* 02 About Me */}
        <section id="about" className="w-full grid grid-cols-1 md:grid-cols-12 gap-[24px] py-32 text-brand-primary">
          <div className="md:col-span-4">
            <h2 className="text-sm font-bold flex items-center gap-3">
              <span className="font-mono text-xs opacity-80">02</span>
              关于我
            </h2>
          </div>
          <div className="md:col-span-8 text-base text-brand-primary leading-[1.65] flex flex-col gap-6 font-body">
            <p>
              我的起点是计算机科学——写出来的代码能跑，但总觉得差点什么。当我看到 AI 进化的速度，我意识到瓶颈不再是技术能力本身，而是人与机器之间那道还没被设计好的空间。
            </p>
            <p>
              于是我转向设计。不是为了逃离技术，而是想亲手塑造人与 AI 协作的方式。这条路还没有现成的剧本——这正是它吸引我的地方。
            </p>
          </div>
        </section>

        {/* 03 Capabilities */}
        <section id="capabilities" className="w-full grid grid-cols-1 md:grid-cols-12 gap-[24px] py-32 text-brand-primary">
          <div className="md:col-span-4">
            <h2 className="text-sm font-bold flex items-center gap-3">
              <span className="font-mono text-xs opacity-80">03</span>
              专业能力
            </h2>
          </div>
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-[20px] md:gap-[24px]">
            <div className="capability-card capability-card-primary p-7 md:p-8 rounded-[18px]">
              <h3 className="text-[19px] md:text-xl font-bold mb-5 text-brand-primary">人机协同设计</h3>
              <ul className="flex flex-col gap-3 text-[15px] leading-relaxed text-brand-primary/78">
                <li className="flex gap-2"><span className="opacity-45">✦</span> 设计人与 AI 协作的工作流，而不只是界面</li>
                <li className="flex gap-2"><span className="opacity-45">✦</span> 为新兴 AI 产品定义交互范式</li>
              </ul>
            </div>

            <div className="capability-card p-7 md:p-8 rounded-[18px]">
              <h3 className="text-[19px] md:text-xl font-bold mb-5 text-brand-primary">UX 与交互设计</h3>
              <ul className="flex flex-col gap-3 text-[15px] leading-relaxed text-brand-primary/78">
                <li className="flex gap-2"><span className="opacity-45">✦</span> 从研究到原型的完整端到端流程</li>
                <li className="flex gap-2"><span className="opacity-45">✦</span> 设计带有清晰反馈的状态驱动交互</li>
              </ul>
            </div>

            <div className="capability-card p-7 md:p-8 rounded-[18px]">
              <h3 className="text-[19px] md:text-xl font-bold mb-5 text-brand-primary">系统思维</h3>
              <ul className="flex flex-col gap-3 text-[15px] leading-relaxed text-brand-primary/78">
                <li className="flex gap-2"><span className="opacity-45">✦</span> 将模糊问题转化为结构化的产品决策</li>
                <li className="flex gap-2"><span className="opacity-45">✦</span> 梳理用户流程、边界情况与系统逻辑</li>
              </ul>
            </div>

            <div className="capability-card p-7 md:p-8 rounded-[18px]">
              <h3 className="text-[19px] md:text-xl font-bold mb-5 text-brand-primary">代码原型</h3>
              <ul className="flex flex-col gap-3 text-[15px] leading-relaxed text-brand-primary/78">
                <li className="flex gap-2"><span className="opacity-45">✦</span> 将概念落地为可运行的功能原型</li>
                <li className="flex gap-2"><span className="opacity-45">✦</span> 桥接设计意图与技术可行性</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 04 Projects */}
        <section id="projects" className="w-full grid grid-cols-1 md:grid-cols-12 gap-[24px] py-32 text-brand-primary">
          <div className="md:col-span-4">
            <h2 className="text-sm font-bold flex items-center gap-3">
              <span className="font-mono text-xs opacity-80">04</span>
              项目
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
                  <h3 className="text-2xl font-bold font-sans text-brand-primary">Assembly Line Y <span className="opacity-60 font-normal text-lg">| VR 开发者 & 设计师</span></h3>
                  <p className="text-[16px] md:text-[18px] font-sans text-brand-primary/80 leading-relaxed">
                    为特斯拉 Model Y 装配线设计的 Quest 3 VR 培训模拟系统，集成 AI 助手提供任务引导支持。
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
                <div className="w-full h-full bg-[url('/nest-homepage.png')] bg-cover bg-[position:right_center] group-hover:scale-105 transition-transform duration-700"></div>
              </div>

              <div className="p-6 md:p-8 flex flex-col gap-4 bg-[#FAFAFA]/90">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold font-sans text-brand-primary">Nest 温控器重设计 <span className="opacity-60 font-normal text-lg">| 项目负责人 & UX 设计</span></h3>
                  <p className="text-[16px] md:text-[18px] font-sans text-brand-primary/80 leading-relaxed">
                    对 Nest 温控器 App 进行重设计，专注于优化日程交互逻辑与控制体验的易用性。
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
                <div className="w-full h-full bg-[url('https://res.cloudinary.com/dj13he2xu/image/upload/v1773757711/portfolio/dosecare-homepage.png')] bg-contain bg-no-repeat bg-center group-hover:scale-105 transition-transform duration-700"></div>
              </div>

              <div className="p-6 md:p-8 flex flex-col gap-4 bg-[#FAFAFA]/90">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold font-sans text-brand-primary">DoseCare <span className="opacity-60 font-normal text-lg">| 团队负责人 & UX 设计师</span></h3>
                  <p className="text-[16px] md:text-[18px] font-sans text-brand-primary/80 leading-relaxed">
                    专为老年人设计的用药管理 App，帮助减少漏服并让日常护理更加轻松。
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
                <div className="w-full h-full bg-[url('https://res.cloudinary.com/dj13he2xu/image/upload/v1773757710/portfolio/agrox-homepage.png')] bg-cover bg-[position:right_center] group-hover:scale-105 transition-transform duration-700"></div>
              </div>

              <div className="p-6 md:p-8 flex flex-col gap-4 bg-[#FAFAFA]/90">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold font-sans text-brand-primary">Agrox <span className="opacity-60 font-normal text-lg">| UX 设计师</span></h3>
                  <p className="text-[16px] md:text-[18px] font-sans text-brand-primary/80 leading-relaxed">
                    面向有机农业的 AI 驱动农田机器人管理平台，专注于田间监控与决策支持。
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
                <div className="w-full h-full bg-[url('/nirvana-homepage.png')] bg-cover bg-[position:right_center] group-hover:scale-105 transition-transform duration-700"></div>
              </div>

              <div className="p-6 md:p-8 flex flex-col gap-4 bg-[#FAFAFA]/90">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold font-sans text-brand-primary">Nirvana <span className="opacity-60 font-normal text-lg">| 团队负责人</span></h3>
                  <p className="text-[16px] md:text-[18px] font-sans text-brand-primary/80 leading-relaxed">
                    一个汽车改装服务设计概念，融合移动端规划、3D 可视化与 VR 预览体验。
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
                <div className="w-full h-full bg-[url('https://res.cloudinary.com/dj13he2xu/image/upload/v1773758106/portfolio/vr-simulation-homepage.png')] bg-cover bg-[position:right_center] group-hover:scale-105 transition-transform duration-700"></div>
              </div>

              <div className="p-6 md:p-8 flex flex-col gap-4 bg-[#FAFAFA]/90">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold font-sans text-brand-primary">VR 换胎模拟训练 <span className="opacity-60 font-normal text-lg">| 独立设计师 & 开发者</span></h3>
                  <p className="text-[16px] md:text-[18px] font-sans text-brand-primary/80 leading-relaxed">
                    一个帮助初学者通过引导式、可重复交互练习换胎操作的 VR 培训体验。
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
              简历
            </h2>
          </div>

          <div className="md:col-span-8 flex flex-col gap-10">
            <div className="rounded-[24px] border border-white/70 bg-white/78 backdrop-blur-xl p-8 md:p-10 shadow-[0_16px_40px_rgba(27,42,107,0.08)]">
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="max-w-[640px] flex flex-col gap-4">
                  <p className="text-sm font-mono uppercase tracking-[0.18em] text-brand-primary/50">Yuchen Zhang</p>
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-primary">AI、XR 与交互设计方向 UX / 产品设计师</h3>
                  <p className="text-[16px] md:text-[18px] leading-[1.75] text-brand-primary/76">
                    具有计算机科学背景的产品设计师，专注于人机交互、XR 体验与交互设计。目前就读于萨凡纳艺术设计学院互动设计 MFA，正在寻找 2026 年暑期实习机会。
                  </p>
                </div>
                <a href="/Yuchen_Zhang_Resume_AI_XR.pdf" download className="inline-flex items-center justify-center rounded-full px-5 py-3 bg-brand-primary text-white text-sm font-medium hover:opacity-90 transition-opacity whitespace-nowrap">
                  下载简历
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
              <div className="md:col-span-7 rounded-[24px] border border-white/70 bg-white/78 backdrop-blur-xl p-8 shadow-[0_16px_40px_rgba(27,42,107,0.08)]">
                <h3 className="text-xl md:text-2xl font-bold text-brand-primary mb-8">教育经历</h3>
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col md:flex-row gap-3 md:gap-6">
                    <div className="md:w-28 flex-shrink-0 text-sm font-mono text-brand-primary/45 pt-1">2024 — 至今</div>
                    <div className="flex flex-col gap-1.5">
                      <h4 className="text-lg font-bold text-brand-primary">萨凡纳艺术设计学院</h4>
                      <p className="text-brand-primary/72">互动设计艺术硕士（MFA）</p>
                      <p className="text-sm text-brand-primary/50">佐治亚州，萨凡纳</p>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-3 md:gap-6">
                    <div className="md:w-28 flex-shrink-0 text-sm font-mono text-brand-primary/45 pt-1">2019 — 2023</div>
                    <div className="flex flex-col gap-1.5">
                      <h4 className="text-lg font-bold text-brand-primary">特拉华大学</h4>
                      <p className="text-brand-primary/72">计算机科学学士</p>
                      <p className="text-sm text-brand-primary/50">特拉华州，纽瓦克</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-5 flex flex-col gap-6">
                <div className="rounded-[24px] border border-white/70 bg-white/78 backdrop-blur-xl p-8 shadow-[0_16px_40px_rgba(27,42,107,0.08)]">
                  <h3 className="text-xl md:text-2xl font-bold text-brand-primary mb-6">核心技能</h3>
                  <div className="flex flex-wrap gap-2.5">
                    {["Figma", "用户研究", "可用性测试", "交互设计", "设计系统", "原型设计", "JavaScript", "Python", "Unity", "AI 辅助开发"].map((skill) => (
                      <span key={skill} className="px-3 py-1.5 bg-black/5 text-brand-primary/72 text-sm rounded-full border border-black/5">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-[24px] border border-white/70 bg-white/78 backdrop-blur-xl p-8 shadow-[0_16px_40px_rgba(27,42,107,0.08)]">
                  <h3 className="text-xl md:text-2xl font-bold text-brand-primary mb-6">语言能力</h3>
                  <ul className="flex flex-col gap-3 text-brand-primary/72">
                    <li className="flex justify-between items-center">
                      <span>中文</span>
                      <span className="text-sm font-mono text-brand-primary/45">母语</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>英文</span>
                      <span className="text-sm font-mono text-brand-primary/45">熟练</span>
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
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-brand-primary/40">联系我</p>
            <a href="mailto:zyc1108@outlook.com" className="text-lg font-medium text-brand-primary hover:opacity-60 transition-opacity">
              zyc1108@outlook.com
            </a>
          </div>
          <div className="flex flex-col items-start md:items-end gap-1">
            <span className="text-base font-medium text-brand-primary">Yuchen Zhang</span>
            <span className="text-xs font-mono text-brand-primary/40">UX / 产品设计师 · © 2026</span>
            <span className="text-xs font-mono text-brand-primary/25">Built with vibe coding + Claude</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

import Link from "next/link";
import NextProject from "../../../components/NextProject";

export default function AssemblyLineYProjectZh() {
  const highlights = [
    {
      title: "自然语音交互",
      body: "学员可以用自然语言与 ARIA 对话，随时询问指引、确认步骤或请求下一步操作。",
    },
    {
      title: "方向感知装配",
      body: "零件必须在正确方向对齐后才能卡入到位，真实还原了工厂装配任务的物理约束。",
    },
    {
      title: "多模态 XR 工作流",
      body: "体验融合了抓取、戳点、按压、扫描和语音交互，每种操作方式都与具体任务场景精准匹配。",
    },
    {
      title: "绩效反馈",
      body: "系统追踪训练进度和装配精度，帮助学员清晰了解自己在哪些环节表现良好、哪些需要改进。",
    },
  ];

  const stack = [
    "Unity XR",
    "Meta Quest 3",
    "Claude API",
    "语音交互",
    "训练仿真",
  ];

  const architecture = [
    {
      label: "输入层",
      title: "语音 + 控制器输入",
      body: "系统同时支持语音查询和 XR 控制器操作，学员可以通过肢体交互和对话引导两种方式学习。",
    },
    {
      label: "AI 层",
      title: "ARIA 引导系统",
      body: "ARIA 在体验过程中提供实时支持，帮助用户理解操作步骤，减少训练流程中的不确定感。",
    },
    {
      label: "状态层",
      title: "装配进度追踪",
      body: "仿真系统跟踪多步骤装配任务的进度，并根据当前任务状态决定下一步应显示的引导和反馈内容。",
    },
    {
      label: "反馈层",
      title: "HUD 与场景内提示",
      body: "进度指示器、上下文引导和确认反馈帮助学员保持空间感知，同时不破坏沉浸感。",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0D1117] text-[#E5E7EB] relative overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0 bg-[linear-gradient(180deg,#0D1117_0%,#0F141B_100%)]" />
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.035] bg-[url('data:image/svg+xml,%3Csvg viewBox=%270_0_256_256%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27noise%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.9%27 numOctaves=%274%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23noise)%27 opacity=%270.9%27/%3E%3C/svg%3E')]" />

      <div className="relative z-20" style={{ padding: "14px 48px" }}>
        <Link href="/zh" style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", textDecoration: "none", fontFamily: "monospace", letterSpacing: "0.06em" }}>← 首页</Link>
      </div>

      <main className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-[80px] pt-6 md:pt-8 pb-24 md:pb-32 flex flex-col gap-24 md:gap-28">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end min-h-[68vh] scroll-mt-32 md:scroll-mt-24">
          <div className="lg:col-span-5 flex flex-col gap-6 md:gap-7">
            <div className="flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.18em] text-[#93A1B2]">
              <span className="px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03]">XR 训练</span>
              <span className="px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03]">AI 引导</span>
              <span className="px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03]">企业工作流</span>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-sm font-mono uppercase tracking-[0.22em] text-[#7B8794]">Assembly Line Y</p>
              <h1 className="text-[52px] sm:text-[68px] md:text-[84px] leading-[0.92] tracking-[-0.04em] font-bold text-[#F3F4F6]">
                Assembly
                <span className="block text-[#C7D0DB] font-medium">Line Y</span>
              </h1>
              <p className="text-[17px] md:text-[19px] leading-[1.8] text-[#A8B3C2] max-w-[620px]">
                一款面向特斯拉 Model Y 内饰装配的 Quest 3 VR 训练仿真系统，内置 AI 助手 ARIA，通过实时语音引导帮助学员完成复杂的物理操作任务。
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-sm text-[#7B8794]">
              <span>独立项目</span>
              <span className="text-[#4B5563]">•</span>
              <span>VR 开发 & 设计</span>
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
                  训练系统总览
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
            <p className="text-sm font-mono uppercase tracking-[0.22em] text-[#7B8794] mb-3">项目概述</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#F3F4F6]">这个项目是什么</h2>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-[18px] border border-white/8 bg-white/[0.025] p-7">
              <p className="text-[12px] uppercase tracking-[0.16em] text-[#8FA3BF] mb-3">01</p>
              <h3 className="text-xl font-semibold text-[#F3F4F6] mb-3">VR 工厂培训</h3>
              <p className="text-[15px] leading-[1.75] text-[#A8B3C2]">
                学员进入模拟的特斯拉 Model Y 装配环境，按顺序完成内饰安装任务。
              </p>
            </div>
            <div className="rounded-[18px] border border-white/8 bg-white/[0.025] p-7">
              <p className="text-[12px] uppercase tracking-[0.16em] text-[#8FA3BF] mb-3">02</p>
              <h3 className="text-xl font-semibold text-[#F3F4F6] mb-3">AI 引导体验</h3>
              <p className="text-[15px] leading-[1.75] text-[#A8B3C2]">
                ARIA 通过上下文语音引导支持整个体验过程，帮助用户提问并在工作流程中保持方向感。
              </p>
            </div>
            <div className="rounded-[18px] border border-white/8 bg-white/[0.025] p-7">
              <p className="text-[12px] uppercase tracking-[0.16em] text-[#8FA3BF] mb-3">03</p>
              <h3 className="text-xl font-semibold text-[#F3F4F6] mb-3">技能评估</h3>
              <p className="text-[15px] leading-[1.75] text-[#A8B3C2]">
                仿真系统记录进度和任务质量，将练习转化为可量化的学习体验。
              </p>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12">
          <div className="lg:col-span-4 flex flex-col gap-4">
            <p className="text-sm font-mono uppercase tracking-[0.22em] text-[#7B8794]">为什么重要</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#F3F4F6]">为复杂体力工作提供培训</h2>
          </div>
          <div className="lg:col-span-8 rounded-[20px] border border-white/8 bg-white/[0.025] p-8 md:p-10">
            <p className="text-[16px] md:text-[18px] leading-[1.9] text-[#A8B3C2] max-w-[860px]">
              汽车内饰装配至今仍依赖人工灵活性、空间判断力和流程精确度。Assembly Line Y 探索了沉浸式仿真与 AI 引导如何降低此类任务的学习门槛——通过在安全的虚拟环境中将步骤可视化、可交互、可反复练习来实现。
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12">
          <div className="lg:col-span-4">
            <p className="text-sm font-mono uppercase tracking-[0.22em] text-[#7B8794] mb-3">核心亮点</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#F3F4F6]">关键体验特性</h2>
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
            <p className="text-sm font-mono uppercase tracking-[0.22em] text-[#7B8794] mb-3">系统设计</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#F3F4F6]">体验的结构设计</h2>
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
            <p className="text-sm font-mono uppercase tracking-[0.22em] text-[#7B8794]">项目反思</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#F3F4F6]">这个项目展示了什么</h2>
            <p className="text-[16px] md:text-[18px] leading-[1.9] text-[#A8B3C2]">
              Assembly Line Y 展示了我如何处理横跨交互设计、技术实现与 AI 辅助引导的 XR 产品。这个项目不将 VR 视作视觉展示，而是聚焦于训练流程、具身交互和系统反馈——让复杂的工业操作流程变得更易学习、更值得信赖。
            </p>
          </div>
        </section>
      </main>
      <NextProject href="/zh/projects/nest-thermostat" title="Nest 恒温器重设计" role="项目负责人 & UX 设计师" theme="dark" />
    </div>
  );
}

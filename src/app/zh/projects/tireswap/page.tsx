import Link from "next/link";
import NextProject from "../../../components/NextProject";

export default function TireSwapVRProjectZh() {
  const stack = [
    "Unity 6",
    "Meta Quest",
    "XR Interaction Toolkit 3.3",
    "Unity Timeline",
    "C#",
  ];

  const workflow = [
    { step: "01", title: "升起车辆", body: "长按升降按钮将车抬至工作高度——未完成抬升前，所有螺母处于锁定状态，无法交互。" },
    { step: "02", title: "取下螺母", body: "用扭力扳手对准每颗螺母并按住 1 秒，5 颗全部取下后轮胎才变为可抓取状态。" },
    { step: "03", title: "取下轮毂", body: "抓住完整轮毂总成，将其搬运至轮胎拆装机旁。" },
    { step: "04", title: "从轮辋上拆下轮胎", body: "将轮毂放入拆装机插槽，拆卸动画自动播放，橡胶轮胎作为输出被生成。" },
    { step: "05", title: "安装新轮胎", body: "将新橡胶轮胎送入拆装机，安装动画播放后输出组装完成的新轮毂。" },
    { step: "06", title: "动平衡", body: "将组装好的轮毂送入平衡机，这是简化仿真中常被省略但实际不可缺少的关键步骤。" },
    { step: "07", title: "安装轮毂", body: "将平衡后的轮毂搬回车轮位置，以正确朝向套上轮轴。" },
    { step: "08", title: "拧紧螺母", body: "用扳手按对角星形顺序拧紧全部 5 颗螺母，每颗需按住 1 秒才算锁紧。" },
    { step: "09", title: "放下车辆", body: "将升降台降回地面，TrainingSequenceManager 确认任务完成，进入下一个车轮的操作。" },
  ];

  const designDecisions = [
    {
      label: "设计决策 01",
      title: "用交互锁强制程序，而非仅靠提示警告",
      body: "螺母默认分配在 LockedNut 交互层，轮胎的抓取组件在 5 颗螺母全部取下前保持禁用。操作按钮在大厅任务完成前无法触发。正确的顺序是唯一可能的顺序，而不仅仅是推荐顺序。",
    },
    {
      label: "设计决策 02",
      title: "两场景结构——先独立练习，再综合实操",
      body: "大厅场景单独训练工具操作：将轮胎放上架子、用扳手拧螺母、按下门按钮。完成基本操作后才进入完整仿真。认知负荷理论表明，新手在子技能分开练习后再综合应用，学习效果更好。",
    },
    {
      label: "设计决策 03",
      title: "多感官反馈——在不打破沉浸感的前提下确认状态",
      body: "每次任务完成同时触发三个通道：强而短促的震动脉冲（区别于操作中持续的低频震动）、一次性成功音效，以及视觉状态变化。学员像真实技师一样——通过触觉感知任务完成。",
    },
    {
      label: "设计决策 04",
      title: "引导注意力——灯光与 UI 同步激活",
      body: "TrainingSequenceManager 在每个步骤同时激活 UI 面板和场景灯光组：灯光在空间上高亮相关物体，面板解释操作内容。先指向位置，再说明操作——和真实教练的做法完全一致。",
    },
  ];

  const techRows = [
    { label: "引擎", value: "Unity 6 (6000.3.5f2)" },
    { label: "渲染", value: "Universal Render Pipeline (URP)" },
    { label: "XR 框架", value: "XR Interaction Toolkit 3.3.1 · OpenXR 1.16.1" },
    { label: "手部追踪", value: "XR Hands 1.7.2" },
    { label: "输入", value: "Unity Input System 1.17.0" },
    { label: "动画", value: "Unity Timeline 1.8.10 + Animator" },
    { label: "材质", value: "Substance" },
    { label: "平台", value: "Meta Quest (Android XR)" },
  ];

  return (
    <div className="min-h-screen bg-[#0D1117] text-[#E5E7EB] relative overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0 bg-[linear-gradient(180deg,#0D1117_0%,#0F141B_100%)]" />
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.035] bg-[url('data:image/svg+xml,%3Csvg viewBox=%270_0_256_256%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27noise%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.9%27 numOctaves=%274%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23noise)%27 opacity=%270.9%27/%3E%3C/svg%3E')]" />

      <div className="relative z-20" style={{ padding: "14px 48px" }}>
        <Link href="/zh" style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", textDecoration: "none", fontFamily: "monospace", letterSpacing: "0.06em" }}>← 首页</Link>
      </div>

      <main className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-[80px] pt-6 md:pt-8 pb-24 md:pb-32 flex flex-col gap-24 md:gap-28">

        {/* Hero */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end min-h-[68vh]">
          <div className="lg:col-span-5 flex flex-col gap-6 md:gap-7">
            <div className="flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.18em] text-[#93A1B2]">
              <span className="px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03]">XR 训练</span>
              <span className="px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03]">程序化仿真</span>
              <span className="px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03]">个人项目</span>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-sm font-mono uppercase tracking-[0.22em] text-[#7B8794]">TireSwap VR</p>
              <h1 className="text-[52px] sm:text-[68px] md:text-[84px] leading-[0.92] tracking-[-0.04em] font-bold text-[#F3F4F6]">
                TireSwap
                <span className="block text-[#C7D0DB] font-medium">VR</span>
              </h1>
              <p className="text-[17px] md:text-[19px] leading-[1.8] text-[#A8B3C2] max-w-[620px]">
                一款完整轮胎更换流程的 VR 训练仿真——通过交互锁强制正确操作顺序，配合轮胎拆装机动画和多感官反馈，在每个环节给予即时确认。
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-sm text-[#7B8794]">
              <span>个人项目</span>
              <span className="text-[#4B5563]">•</span>
              <span>VR 开发者 & 设计师</span>
              <span className="text-[#4B5563]">•</span>
              <span>IXDS712 期中 · 2026</span>
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
                  <img src="/projects/tireswap/slide3-img0.png" alt="TireSwap VR 修理厂环境" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Background */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12">
          <div className="lg:col-span-4 flex flex-col gap-4">
            <p className="text-sm font-mono uppercase tracking-[0.22em] text-[#7B8794]">为什么做这个</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#F3F4F6]">职业培训资源稀缺、成本高昂</h2>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-[18px] border border-white/8 bg-white/[0.025] p-7">
              <p className="text-[28px] font-bold text-[#F3F4F6] mb-2">7万</p>
              <p className="text-[13px] leading-[1.65] text-[#A8B3C2]">美国每年新增汽车技师岗位缺口，其中经销商渠道未填补职位超过 5.6 万个。</p>
            </div>
            <div className="rounded-[18px] border border-white/8 bg-white/[0.025] p-7">
              <p className="text-[28px] font-bold text-[#F3F4F6] mb-2">$28K</p>
              <p className="text-[13px] leading-[1.65] text-[#A8B3C2]">完成一套实体汽车维修培训课程的最高花费——设备和实训场地是主要门槛。</p>
            </div>
            <div className="rounded-[18px] border border-white/8 bg-white/[0.025] p-7">
              <p className="text-[28px] font-bold text-[#F3F4F6] mb-2">275%</p>
              <p className="text-[13px] leading-[1.65] text-[#A8B3C2]">相比传统培训方式，VR 训练后学员技能应用自信度提升幅度（职业培训研究数据）。</p>
            </div>
          </div>
        </section>

        {/* Two-scene structure */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12">
          <div className="lg:col-span-4">
            <p className="text-sm font-mono uppercase tracking-[0.22em] text-[#7B8794] mb-3">场景结构</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#F3F4F6]">两个场景——先练习，再实操</h2>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-[18px] border border-white/8 bg-white/[0.025] p-7">
              <p className="text-[12px] uppercase tracking-[0.16em] text-[#8FA3BF] mb-3">场景 01 — 大厅</p>
              <h3 className="text-xl font-semibold text-[#F3F4F6] mb-3">工具熟悉</h3>
              <p className="text-[15px] leading-[1.75] text-[#A8B3C2]">
                三项顺序任务：将 4 个轮胎放上储存架、用扭力扳手拧松练习螺母、按下门按钮。每项任务在前一项完成前保持锁定。
              </p>
            </div>
            <div className="rounded-[18px] border border-white/8 bg-white/[0.025] p-7">
              <p className="text-[12px] uppercase tracking-[0.16em] text-[#8FA3BF] mb-3">场景 02 — 仿真</p>
              <h3 className="text-xl font-semibold text-[#F3F4F6] mb-3">完整换胎操作</h3>
              <p className="text-[15px] leading-[1.75] text-[#A8B3C2]">
                在车辆上完成 9 步完整流程，包括操作轮胎拆装机和动平衡机，对每个车轮重复执行。
              </p>
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-start">
          <div className="lg:col-span-4">
            <p className="text-sm font-mono uppercase tracking-[0.22em] text-[#7B8794] mb-3">仿真操作流程</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#F3F4F6]">9 步流程，由交互锁强制执行</h2>
            <p className="text-[15px] leading-[1.8] text-[#A8B3C2] mt-4">
              拆装机负责第 04–05 步，内部有独立的状态机驱动动画。升车未完成前螺母锁定；5 颗螺母未取下前轮胎不可抓取。
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
            <p className="text-sm font-mono uppercase tracking-[0.22em] text-[#7B8794]">空间设计</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#F3F4F6]">修理厂平面布局</h2>
            <p className="text-[15px] leading-[1.8] text-[#A8B3C2]">
              旧轮胎放置区、新轮胎区、举升点和工具位置均有明确划分——空间布局强化操作习惯。玩家起始位置、扭矩规格显示屏和气动扳手的位置均参照真实修理厂工作流程设计。
            </p>
          </div>
          <div className="lg:col-span-8 rounded-[20px] border border-white/8 bg-white overflow-hidden">
            <img src="/projects/tireswap/slide3-img2.png" alt="修理厂平面布局草图" className="w-full h-auto block" />
          </div>
        </section>

        {/* Design decisions */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12">
          <div className="lg:col-span-4">
            <p className="text-sm font-mono uppercase tracking-[0.22em] text-[#7B8794] mb-3">设计决策</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#F3F4F6]">为什么这样设计</h2>
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
            <p className="text-sm font-mono uppercase tracking-[0.22em] text-[#7B8794]">资产库</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#F3F4F6]">为每个交互定制的 Prefab</h2>
            <p className="text-[15px] leading-[1.8] text-[#A8B3C2]">
              轮胎、轮辋、螺母、扳手、升降臂和场景内手机 UI 均单独配置了 XRI 抓取逻辑、交互层和吸附约束。
            </p>
          </div>
          <div className="lg:col-span-8 rounded-[20px] border border-white/8 bg-[#1C1F26] overflow-hidden">
            <img src="/projects/tireswap/slide6-img1.png" alt="Unity Prefab 库——螺母、轮胎、轮辋、工具和 XR 可交互物体" className="w-full h-auto block" />
          </div>
        </section>

        {/* Tech stack */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-start">
          <div className="lg:col-span-4">
            <p className="text-sm font-mono uppercase tracking-[0.22em] text-[#7B8794] mb-3">技术栈</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#F3F4F6]">使用的技术</h2>
          </div>
          <div className="lg:col-span-8 rounded-[20px] border border-white/8 bg-white/[0.025] overflow-hidden">
            {techRows.map((row) => (
              <div key={row.label} className="flex border-b border-white/[0.06] last:border-b-0">
                <div className="w-28 flex-shrink-0 px-6 py-4 font-mono text-[11px] uppercase tracking-[0.08em] text-[#4B5A6A] border-r border-white/[0.06] flex items-center">{row.label}</div>
                <div className="px-6 py-4 text-[13px] text-[#A8B3C2] leading-[1.6] flex items-center">{row.value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Reflection */}
        <section className="rounded-[24px] border border-white/8 bg-white/[0.025] p-8 md:p-12 shadow-[0_18px_44px_rgba(0,0,0,0.18)]">
          <div className="max-w-[860px] flex flex-col gap-5">
            <p className="text-sm font-mono uppercase tracking-[0.22em] text-[#7B8794]">反思</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#F3F4F6]">哪些做好了，哪些还能更进一步</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
              <div>
                <p className="text-[12px] uppercase tracking-[0.16em] text-[#8FA3BF] mb-3">做好的部分</p>
                <p className="text-[15px] leading-[1.8] text-[#A8B3C2]">
                  仿真实现了完整的端到端换胎流程，步骤强制逻辑让操作规范感觉自然而不是惩罚性的。拆装机状态机通过 Animator 事件而非协程计时器驱动，动画与逻辑完全同步。
                </p>
              </div>
              <div>
                <p className="text-[12px] uppercase tracking-[0.16em] text-[#8FA3BF] mb-3">还能更进一步</p>
                <p className="text-[15px] leading-[1.8] text-[#A8B3C2]">
                  更真实的工具阻力、扭矩精度反馈、完整的错误状态和恢复流程，以及不同车型和车轮尺寸的变体。当前版本训练的是操作流程，下一个版本应该训练判断力。
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <NextProject href="/zh/projects/nest-thermostat" title="Nest 恒温器重设计" role="项目负责人 & UX 设计师" theme="dark" />
    </div>
  );
}

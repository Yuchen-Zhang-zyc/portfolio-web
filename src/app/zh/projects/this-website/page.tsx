import Link from "next/link";
import NextProject from "../../../components/NextProject";

export default function ThisWebsiteProjectZh() {
  return (
    <div className="min-h-screen bg-[#0D1117] text-slate-100">

      {/* Back link */}
      <div className="relative z-20" style={{ padding: "14px 48px" }}>
        <Link href="/zh" style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", textDecoration: "none", fontFamily: "monospace", letterSpacing: "0.06em" }}>← 首页</Link>
      </div>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-20 pb-10 md:pb-12">

        {/* Hero */}
        <header className="mb-16">
          <p className="text-xs font-mono tracking-[0.18em] uppercase text-emerald-300/70 mb-3">
            Meta 案例研究 · 个人作品集 · 2026
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 max-w-[800px]">
            This website.
          </h1>
          <p className="text-base md:text-lg text-slate-300/80 max-w-[640px] leading-relaxed">
            一个通过与 Claude 和 Figma MCP 反复协作迭代构建的作品集网站。
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            {['Next.js', 'React', 'Tailwind CSS', 'Cloudinary', 'Vercel', 'Claude + Figma MCP'].map(tag => (
              <span key={tag} className="text-xs font-mono text-emerald-300/80 border border-emerald-300/20 bg-emerald-300/5 px-3 py-1.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Hero screenshot */}
        <div className="mb-20 rounded-2xl overflow-hidden border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.4)]">
          <div className="h-9 bg-[#1C2128] border-b border-white/10 flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
            <span className="mx-auto text-xs text-slate-500 font-mono">yczhang.design</span>
          </div>
          <img
            src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773849044/portfolio/projects/this-website/home-v2.png"
            alt="作品集首页截图"
            style={{ width: '100%', display: 'block' }}
          />
        </div>

        {/* Overview stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {[
            { num: '8', label: '项目详情页' },
            { num: '3', label: 'AI 工具' },
            { num: '2', label: '周完成构建' },
            { num: '100%', label: 'Vibe coded' },
          ].map(({ num, label }) => (
            <div key={label} className="rounded-xl border border-white/10 bg-white/5 p-5 text-center">
              <div className="text-3xl font-bold text-emerald-300 mb-1">{num}</div>
              <div className="text-xs text-slate-400 font-mono tracking-wide uppercase">{label}</div>
            </div>
          ))}
        </div>

        {/* AI Workflow */}
        <section className="mb-20">
          <p className="text-xs font-mono tracking-[0.18em] uppercase text-slate-400 mb-8">01 — AI 协作工作流</p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                tool: 'Claude + Figma MCP',
                color: 'text-orange-300',
                border: 'border-orange-300/20',
                bg: 'bg-orange-300/5',
                role: '主力设计转代码',
                desc: '在 Figma 中绘制流程图和组件，再通过 MCP 集成将设计直接导入 Next.js。Claude 实时处理布局、文案优化和组件逻辑。',
              },
              {
                tool: 'Gemini',
                color: 'text-blue-300',
                border: 'border-blue-300/20',
                bg: 'bg-blue-300/5',
                role: '二次审查与验证',
                desc: '用于对比实现方案和边界情况检查。对比不同模型的输出能发现隐含假设，倒逼对设计决策进行更清晰的思考。',
              },
              {
                tool: 'Codex',
                color: 'text-purple-300',
                border: 'border-purple-300/20',
                bg: 'bg-purple-300/5',
                role: '代码压力测试',
                desc: '对交互模式进行压力测试，探索多种实现变体。在确定最终方向之前，帮助评估同一功能的多种实现思路。',
              },
            ].map(({ tool, color, border, bg, role, desc }) => (
              <div key={tool} className={`rounded-2xl border ${border} ${bg} p-6`}>
                <p className={`text-xs font-mono tracking-[0.15em] uppercase ${color} mb-2`}>{tool}</p>
                <p className="text-sm font-semibold text-slate-200 mb-3">{role}</p>
                <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Design decisions */}
        <section className="mb-20">
          <p className="text-xs font-mono tracking-[0.18em] uppercase text-slate-400 mb-8">02 — 设计决策</p>
          <div className="flex flex-col divide-y divide-white/10 border border-white/10 rounded-2xl overflow-hidden">
            {[
              {
                decision: '每个案例研究末尾都有"下一个项目"跳转',
                rationale: '每个项目页面末尾都有一个固定的下一项目链接，让读者保持阅读流状态，无需返回首页重新导航——降低跳出率，引导他们浏览更多作品。',
              },
              {
                decision: 'Space Grotesk + DM Serif Display 字体组合',
                rationale: 'Space Grotesk 为正文和 UI 标签带来技术感与现代感；DM Serif Display 为主标题增添温度和分量——两者搭配在精准与个性之间取得平衡。',
              },
              {
                decision: '每个项目独立的视觉语言体系',
                rationale: '每个案例研究都有自己的配色、组件风格和版式节奏。这让每件作品看起来经过深思熟虑，而非套用模板，同时也展示了跨设计场景的多元能力。',
              },
              {
                decision: 'Cloudinary 管理媒体资源，Vercel 负责部署',
                rationale: 'Cloudinary 通过 CDN 分发和格式优化处理所有项目图片；Vercel 提供零配置部署，每次推送自动生成预览链接——让迭代循环保持高效。',
              },
            ].map(({ decision, rationale }) => (
              <div key={decision} className="grid md:grid-cols-[1fr_1.5fr] gap-4 p-6 bg-white/[0.02] hover:bg-white/5 transition-colors">
                <p className="text-sm font-semibold text-slate-200">{decision}</p>
                <p className="text-sm text-slate-400 leading-relaxed">{rationale}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Reflection */}
        <section className="mb-20">
          <p className="text-xs font-mono tracking-[0.18em] uppercase text-slate-400 mb-8">03 — 项目反思</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-emerald-300/20 bg-emerald-300/5 p-6">
              <p className="text-xs font-mono uppercase tracking-wide text-emerald-300 mb-3">哪些做得好</p>
              <ul className="space-y-2 text-sm text-slate-300 leading-relaxed">
                <li>→ Figma MCP 将设计到代码的交接成本降至近乎为零</li>
                <li>→ 直接在代码中迭代细节，比在 Figma 中反复 Mock 更快</li>
                <li>→ 多模型交叉审查发现了边界情况，提升了输出质量</li>
                <li>→ Vibe coding 保持了项目动力——持续交付，而非过度规划</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs font-mono uppercase tracking-wide text-slate-400 mb-3">下次会做什么不同</p>
              <ul className="space-y-2 text-sm text-slate-300 leading-relaxed">
                <li>→ 更早建立统一的设计 Token 体系</li>
                <li>→ 生成代码前先写好组件契约</li>
                <li>→ 从第一天起就将 Figma 文件与代码一起纳入版本控制</li>
                <li>→ 更早搭建自动化视觉回归测试</li>
              </ul>
            </div>
          </div>
        </section>

      </div>

      <NextProject href="/zh" title="返回所有项目" role="" theme="dark" />
    </div>
  );
}

import Link from "next/link";
import NextProject from "../../../components/NextProject";

export default function ThisWebsiteProjectZh() {
  return (
    <div className="min-h-screen bg-[#ECEEF5] text-[#1B2A6B]">

      {/* Back link */}
      <div className="relative z-20" style={{ padding: "14px 48px" }}>
        <Link href="/zh" style={{ fontSize: 12, color: "rgba(27,42,107,0.5)", textDecoration: "none", fontFamily: "monospace", letterSpacing: "0.06em" }}>← 首页</Link>
      </div>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-20 pb-10 md:pb-12">

        {/* Hero */}
        <header className="mb-16">
          <p className="text-xs font-mono tracking-[0.18em] uppercase text-[rgba(27,42,107,0.5)] mb-3">
            Meta 案例研究 · 个人作品集 · 2026
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 max-w-[800px] text-[#1B2A6B]">
            This website.
          </h1>
          <p className="text-base md:text-lg text-[rgba(27,42,107,0.72)] max-w-[640px] leading-relaxed">
            一个通过与 Claude 和 Figma MCP 反复协作迭代构建的作品集网站。
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            {['Next.js', 'React', 'Tailwind CSS', 'Cloudinary', 'Vercel', 'Claude + Figma MCP'].map(tag => (
              <span key={tag} className="text-xs font-mono text-[rgba(27,42,107,0.75)] border border-[rgba(27,42,107,0.15)] bg-white/90 px-3 py-1.5 rounded-full shadow-sm">
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Hero screenshot */}
        <div className="mb-20 rounded-2xl overflow-hidden border border-[rgba(27,42,107,0.12)] bg-white shadow-[0_20px_50px_rgba(27,42,107,0.1)]">
          <div className="h-9 bg-[#F3F4F6] border-b border-black/5 flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
            <span className="mx-auto text-xs text-[rgba(27,42,107,0.45)] font-mono">yczhang.design</span>
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
            <div key={label} className="rounded-xl border border-[rgba(27,42,107,0.1)] bg-white p-5 text-center shadow-sm">
              <div className="text-3xl font-bold text-[#1B2A6B] mb-1">{num}</div>
              <div className="text-xs text-[rgba(27,42,107,0.5)] font-mono tracking-wide uppercase">{label}</div>
            </div>
          ))}
        </div>

        {/* AI Workflow */}
        <section className="mb-20">
          <p className="text-xs font-mono tracking-[0.18em] uppercase text-[rgba(27,42,107,0.45)] mb-8">01 — AI 协作工作流</p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                tool: 'Claude + Figma MCP',
                color: 'text-orange-800',
                border: 'border-orange-200',
                bg: 'bg-orange-50',
                role: '主力设计转代码',
                desc: '在 Figma 中绘制流程图和组件，再通过 MCP 集成将设计直接导入 Next.js。Claude 实时处理布局、文案优化和组件逻辑。',
              },
              {
                tool: 'Gemini',
                color: 'text-blue-800',
                border: 'border-blue-200',
                bg: 'bg-blue-50',
                role: '二次审查与验证',
                desc: '用于对比实现方案和边界情况检查。对比不同模型的输出能发现隐含假设，倒逼对设计决策进行更清晰的思考。',
              },
              {
                tool: 'Codex',
                color: 'text-purple-800',
                border: 'border-purple-200',
                bg: 'bg-purple-50',
                role: '代码压力测试',
                desc: '对交互模式进行压力测试，探索多种实现变体。在确定最终方向之前，帮助评估同一功能的多种实现思路。',
              },
            ].map(({ tool, color, border, bg, role, desc }) => (
              <div key={tool} className={`rounded-2xl border ${border} ${bg} p-6 shadow-sm`}>
                <p className={`text-xs font-mono tracking-[0.15em] uppercase ${color} mb-2`}>{tool}</p>
                <p className="text-sm font-semibold text-[#1B2A6B] mb-3">{role}</p>
                <p className="text-sm text-[rgba(27,42,107,0.68)] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Design decisions */}
        <section className="mb-20">
          <p className="text-xs font-mono tracking-[0.18em] uppercase text-[rgba(27,42,107,0.45)] mb-8">02 — 设计决策</p>
          <div className="flex flex-col divide-y divide-[rgba(27,42,107,0.08)] border border-[rgba(27,42,107,0.1)] rounded-2xl overflow-hidden bg-white shadow-sm">
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
              <div key={decision} className="grid md:grid-cols-[1fr_1.5fr] gap-4 p-6 bg-white hover:bg-[rgba(27,42,107,0.02)] transition-colors">
                <p className="text-sm font-semibold text-[#1B2A6B]">{decision}</p>
                <p className="text-sm text-[rgba(27,42,107,0.65)] leading-relaxed">{rationale}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Reflection */}
        <section className="mb-20">
          <p className="text-xs font-mono tracking-[0.18em] uppercase text-[rgba(27,42,107,0.45)] mb-8">03 — 项目反思</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-6 shadow-sm">
              <p className="text-xs font-mono uppercase tracking-wide text-emerald-800 mb-3">哪些做得好</p>
              <ul className="space-y-2 text-sm text-[rgba(27,42,107,0.82)] leading-relaxed">
                <li>→ Figma MCP 将设计到代码的交接成本降至近乎为零</li>
                <li>→ 直接在代码中迭代细节，比在 Figma 中反复 Mock 更快</li>
                <li>→ 多模型交叉审查发现了边界情况，提升了输出质量</li>
                <li>→ Vibe coding 保持了项目动力——持续交付，而非过度规划</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[rgba(27,42,107,0.1)] bg-white p-6 shadow-sm">
              <p className="text-xs font-mono uppercase tracking-wide text-[rgba(27,42,107,0.5)] mb-3">下次会做什么不同</p>
              <ul className="space-y-2 text-sm text-[rgba(27,42,107,0.78)] leading-relaxed">
                <li>→ 更早建立统一的设计 Token 体系</li>
                <li>→ 生成代码前先写好组件契约</li>
                <li>→ 从第一天起就将 Figma 文件与代码一起纳入版本控制</li>
                <li>→ 更早搭建自动化视觉回归测试</li>
              </ul>
            </div>
          </div>
        </section>

      </div>

      <NextProject href="/zh" title="返回所有项目" role="" theme="light" />
    </div>
  );
}

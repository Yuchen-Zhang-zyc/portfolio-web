import Link from "next/link";
import NextProject from "../../components/NextProject";

export default function ThisWebsiteProject() {
  return (
    <div className="min-h-screen bg-[#0D1117] text-slate-100">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-20 py-10 md:py-12">

        {/* Back link */}
        <div className="mb-10">
          <Link href="/" className="text-xs font-mono tracking-[0.18em] uppercase text-slate-400 hover:text-slate-200 transition-colors">
            ← Home
          </Link>
        </div>

        {/* Hero */}
        <header className="mb-16">
          <p className="text-xs font-mono tracking-[0.18em] uppercase text-emerald-300/70 mb-3">
            Meta Case Study · Portfolio · 2026
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 max-w-[800px]">
            This website.
          </h1>
          <p className="text-base md:text-lg text-slate-300/80 max-w-[640px] leading-relaxed">
            A portfolio built through iterative vibe coding sessions with Claude and Figma MCP —
            treating AI as a design collaborator, not just a code generator.
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
            <span className="mx-auto text-xs text-slate-500 font-mono">yuchenzhang.design</span>
          </div>
          <img
            src="https://res.cloudinary.com/dj13he2xu/image/upload/v1773849044/portfolio/projects/this-website/home-v2.png"
            alt="Portfolio home page"
            style={{ width: '100%', display: 'block' }}
          />
        </div>

        {/* Overview stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {[
            { num: '8', label: 'Project pages' },
            { num: '3', label: 'AI tools used' },
            { num: '6+', label: 'Weeks building' },
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
          <p className="text-xs font-mono tracking-[0.18em] uppercase text-slate-400 mb-8">01 — AI Collaboration Workflow</p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                tool: 'Claude + Figma MCP',
                color: 'text-orange-300',
                border: 'border-orange-300/20',
                bg: 'bg-orange-300/5',
                role: 'Primary design-to-code',
                desc: 'Sketched flows and components in Figma, then used the MCP integration to move designs directly into Next.js. Claude handles layout, copy refinement, and component logic in real time.',
              },
              {
                tool: 'Gemini',
                color: 'text-blue-300',
                border: 'border-blue-300/20',
                bg: 'bg-blue-300/5',
                role: 'Second opinion & review',
                desc: 'Used for alternative implementations and edge case checks. Comparing responses from different models surfaces assumptions and forces clearer thinking about design decisions.',
              },
              {
                tool: 'Codex',
                color: 'text-purple-300',
                border: 'border-purple-300/20',
                bg: 'bg-purple-300/5',
                role: 'Code stress-testing',
                desc: 'Stress-testing interaction patterns and exploring implementation variants. Helpful when a feature needs multiple approaches evaluated before committing to one direction.',
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
          <p className="text-xs font-mono tracking-[0.18em] uppercase text-slate-400 mb-8">02 — Design Decisions</p>
          <div className="flex flex-col divide-y divide-white/10 border border-white/10 rounded-2xl overflow-hidden">
            {[
              {
                decision: 'Light background, dark project pages',
                rationale: 'The home page uses a soft light gradient to feel approachable and editorial. Individual project pages shift to dark backgrounds to let portfolio work take center stage without competing with the UI chrome.',
              },
              {
                decision: 'Space Grotesk + DM Serif Display',
                rationale: 'Space Grotesk brings a technical, modern voice to body text and UI labels. DM Serif Display adds warmth and weight to hero headlines — the pairing balances precision with personality.',
              },
              {
                decision: 'Per-project visual systems',
                rationale: 'Each case study has its own color language, component style, and layout rhythm. This lets the work feel intentional rather than templated, and demonstrates range across different design contexts.',
              },
              {
                decision: 'Cloudinary for media, Vercel for deployment',
                rationale: 'Cloudinary handles all project images with CDN delivery and format optimization. Vercel provides zero-config deployment with automatic preview URLs for each push — keeps the iteration loop fast.',
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
          <p className="text-xs font-mono tracking-[0.18em] uppercase text-slate-400 mb-8">03 — Reflection</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-emerald-300/20 bg-emerald-300/5 p-6">
              <p className="text-xs font-mono uppercase tracking-wide text-emerald-300 mb-3">What worked</p>
              <ul className="space-y-2 text-sm text-slate-300 leading-relaxed">
                <li>→ Figma MCP cut design-to-code handoff to near zero</li>
                <li>→ Iterating in code felt faster than mocking in Figma for detail work</li>
                <li>→ Multi-model review caught edge cases and improved output quality</li>
                <li>→ Vibe coding kept momentum — shipped instead of over-planning</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs font-mono uppercase tracking-wide text-slate-400 mb-3">What I'd do differently</p>
              <ul className="space-y-2 text-sm text-slate-300 leading-relaxed">
                <li>→ Establish a shared design token system earlier</li>
                <li>→ Write component contracts before generating code</li>
                <li>→ Version control Figma files alongside code from day one</li>
                <li>→ Set up automated visual regression testing sooner</li>
              </ul>
            </div>
          </div>
        </section>

      </div>

      <NextProject href="/" title="Back to all projects" role="" theme="dark" />
    </div>
  );
}

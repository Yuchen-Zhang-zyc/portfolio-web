import Link from "next/link";

export default function ThisWebsiteProject() {
  return (
    <div className="min-h-screen bg-[#0D1117] text-slate-100">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-20 py-10 md:py-12">
        {/* Back link */}
        <div className="mb-6">
          <Link
            href="/"
            className="text-xs font-mono tracking-[0.18em] uppercase text-slate-400 hover:text-slate-200"
          >
            ← Home
          </Link>
        </div>

        {/* Hero */}
        <header className="mb-12 md:mb-16">
          <p className="text-xs font-mono tracking-[0.18em] uppercase text-emerald-300/70 mb-3">
            Meta Case Study · Portfolio
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
            This website.
          </h1>
          <p className="text-sm md:text-base text-slate-300/80 max-w-[640px] leading-relaxed">
            Most of the site came together through vibe coding sessions with
            Claude + Figma MCP — iterating layout, copy, and components
            directly between design files and code. I also bring in Gemini and
            Codex when I need alternative code suggestions, sanity checks, or
            to stress‑test an idea from a different model’s perspective.
          </p>
        </header>

        <section className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
          <div className="space-y-6 text-sm md:text-base text-slate-200/90 leading-relaxed">
            <h2 className="text-sm font-mono tracking-[0.18em] uppercase text-slate-400">
              Workflow
            </h2>
            <p>
              I treat AI tools as collaborators rather than generators. For this
              portfolio, I sketched information architecture and key flows in
              Figma, then used Claude with the Figma MCP integration to move
              components into code, refine layout details, and tighten copy in
              context.
            </p>
            <p>
              Gemini and Codex come in when I want a second opinion — for
              example, exploring alternative implementations, checking edge
              cases, or stress‑testing interaction ideas from a different
              model’s perspective.
            </p>
          </div>

          <aside className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6 backdrop-blur-xl">
            <h3 className="text-sm font-mono tracking-[0.18em] uppercase text-slate-300">
              Stack
            </h3>
            <ul className="space-y-2 text-sm text-slate-200/90">
              <li>Next.js (App Router) + React</li>
              <li>Tailwind CSS</li>
              <li>Claude + Figma MCP</li>
              <li>Gemini · Codex</li>
              <li>Vibe coding sessions</li>
            </ul>
          </aside>
        </section>
      </div>
    </div>
  );
}


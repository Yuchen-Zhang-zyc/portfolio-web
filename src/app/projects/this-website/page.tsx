export default function ThisWebsiteProject() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-zinc-100">
      {/* Hero */}
      <section className="px-6 md:px-12 lg:px-20 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="px-4 py-1.5 rounded-full bg-zinc-800/50 text-zinc-400 text-sm">Meta Project</span>
            <span className="px-4 py-1.5 rounded-full bg-zinc-800/50 text-zinc-400 text-sm">Vibe Coding</span>
            <span className="px-4 py-1.5 rounded-full bg-zinc-800/50 text-zinc-400 text-sm">Human-AI Collaboration</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-6">
            This Website
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl leading-relaxed">
            A case study about rebuilding a design portfolio through conversational development — 
            exploring how human intention and AI capability shape the final experience.
          </p>
          
          <div className="flex flex-wrap gap-6 mt-12 text-sm text-zinc-500">
            <div>
              <div className="text-zinc-700 uppercase tracking-wider text-xs mb-1">Role</div>
              <div>Designer · Developer</div>
            </div>
            <div>
              <div className="text-zinc-700 uppercase tracking-wider text-xs mb-1">Method</div>
              <div>Vibe Coding with Claude</div>
            </div>
            <div>
              <div className="text-zinc-700 uppercase tracking-wider text-xs mb-1">Duration</div>
              <div>Ongoing</div>
            </div>
            <div>
              <div className="text-zinc-700 uppercase tracking-wider text-xs mb-1">Stack</div>
              <div>Next.js · Tailwind · TypeScript</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Rebuild */}
      <section className="px-6 md:px-12 lg:px-20 py-20 border-t border-zinc-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <div className="text-zinc-500 text-sm uppercase tracking-wider mb-4">01</div>
              <h2 className="text-3xl md:text-4xl font-semibold">Why rebuild?</h2>
            </div>
            <div className="md:col-span-8 space-y-6 text-zinc-400 leading-relaxed">
              <p>
                The previous portfolio followed a standard template: hero, project grid, about, contact. 
                It worked, but it didn't reflect how I actually approach design — through iteration, 
                questioning assumptions, and embracing uncertainty.
              </p>
              <p>
                I wanted a portfolio that could evolve as quickly as my thinking. Traditional development 
                workflows felt too slow for this. I needed something more fluid, more conversational.
              </p>
              <p className="text-zinc-300">
                The goal wasn't just to showcase projects, but to demonstrate a way of working.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is Vibe Coding */}
      <section className="px-6 md:px-12 lg:px-20 py-20 border-t border-zinc-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <div className="text-zinc-500 text-sm uppercase tracking-wider mb-4">02</div>
              <h2 className="text-3xl md:text-4xl font-semibold">What is vibe coding?</h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-zinc-400 leading-relaxed mb-10">
                Vibe coding is building software through conversation rather than manual implementation. 
                Instead of writing every line myself, I describe intentions, review proposals, and steer 
                direction — while the AI handles syntax, structure, and execution.
              </p>
              
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
                  <div className="text-zinc-500 text-sm uppercase tracking-wider mb-3">01</div>
                  <h3 className="font-semibold mb-2">Intent</h3>
                  <p className="text-sm text-zinc-500">I describe what I want to achieve, not how to code it</p>
                </div>
                <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
                  <div className="text-zinc-500 text-sm uppercase tracking-wider mb-3">02</div>
                  <h3 className="font-semibold mb-2">Proposal</h3>
                  <p className="text-sm text-zinc-500">AI suggests approaches, structures, and implementations</p>
                </div>
                <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
                  <div className="text-zinc-500 text-sm uppercase tracking-wider mb-3">03</div>
                  <h3 className="font-semibold mb-2">Steer</h3>
                  <p className="text-sm text-zinc-500">I review, adjust direction, and we iterate together</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Human vs AI */}
      <section className="px-6 md:px-12 lg:px-20 py-20 border-t border-zinc-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <div className="text-zinc-500 text-sm uppercase tracking-wider mb-4">03</div>
              <h2 className="text-3xl md:text-4xl font-semibold">Who decides what?</h2>
            </div>
            <div className="md:col-span-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Human-led */}
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-zinc-500 mb-6">Human-led</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <span className="text-emerald-500">→</span>
                      <span className="text-zinc-300">Project selection and prioritization</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-emerald-500">→</span>
                      <span className="text-zinc-300">Narrative structure and storytelling</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-emerald-500">→</span>
                      <span className="text-zinc-300">Visual direction and aesthetic choices</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-emerald-500">→</span>
                      <span className="text-zinc-300">What to show vs. what to hide</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-emerald-500">→</span>
                      <span className="text-zinc-300">Final yes/no on all decisions</span>
                    </li>
                  </ul>
                </div>
                
                {/* AI-proposed */}
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-zinc-500 mb-6">AI-proposed</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <span className="text-blue-500">→</span>
                      <span className="text-zinc-300">Code structure and component patterns</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-500">→</span>
                      <span className="text-zinc-300">Responsive layout strategies</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-500">→</span>
                      <span className="text-zinc-300">Animation and interaction details</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-500">→</span>
                      <span className="text-zinc-300">Accessibility considerations</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-500">→</span>
                      <span className="text-zinc-300">Alternative approaches I hadn't considered</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Snapshot */}
      <section className="px-6 md:px-12 lg:px-20 py-20 border-t border-zinc-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <div className="text-zinc-500 text-sm uppercase tracking-wider mb-4">04</div>
              <h2 className="text-3xl md:text-4xl font-semibold">Process snapshot</h2>
            </div>
            <div className="md:col-span-8 space-y-6">
              <div className="p-6 rounded-xl bg-zinc-900/30 border border-zinc-800/50">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-sm text-zinc-500 shrink-0">1</div>
                  <div>
                    <h4 className="font-medium mb-1">Conversational iteration</h4>
                    <p className="text-sm text-zinc-500">Each project page went through 5-10 back-and-forth cycles. I'd describe what felt off, Claude would propose changes, we'd refine together.</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 rounded-xl bg-zinc-900/30 border border-zinc-800/50">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-sm text-zinc-500 shrink-0">2</div>
                  <div>
                    <h4 className="font-medium mb-1">Parallel exploration</h4>
                    <p className="text-sm text-zinc-500">For the DoseCare project, we explored 4 different visual directions (Singapore, Apple-style, Keynote dark, Keynote light) before converging.</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 rounded-xl bg-zinc-900/30 border border-zinc-800/50">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-sm text-zinc-500 shrink-0">3</div>
                  <div>
                    <h4 className="font-medium mb-1">Code as conversation history</h4>
                    <p className="text-sm text-zinc-500">The git history reads like a dialogue — each commit message captures the intent and decision, not just the implementation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="px-6 md:px-12 lg:px-20 py-20 border-t border-zinc-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <div className="text-zinc-500 text-sm uppercase tracking-wider mb-4">05</div>
              <h2 className="text-3xl md:text-4xl font-semibold">What I learned</h2>
            </div>
            <div className="md:col-span-8 space-y-6 text-zinc-400 leading-relaxed">
              <p>
                <strong className="text-zinc-200">Intent is more important than syntax.</strong> When I stopped worrying about how to code something and focused on what I wanted to achieve, the process became much faster. The AI handles the translation from intent to implementation.
              </p>
              <p>
                <strong className="text-zinc-200">Critical judgment is the new skill.</strong> With AI generating options, the valuable skill becomes knowing which option to choose and why. It's less about writing perfect code and more about steering toward the right outcome.
              </p>
              <p>
                <strong className="text-zinc-200">The portfolio is never done.</strong> Because the barrier to change is so low, I've embraced continuous iteration. This site will keep evolving as my work and thinking evolve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer note */}
      <section className="px-6 md:px-12 lg:px-20 py-20 border-t border-zinc-800/50">
        <div className="max-w-6xl mx-auto">
          <p className="text-zinc-600 text-sm">
            This page was last updated through a conversation on March 18, 2026. 
            The source code is available on GitHub, with commit history documenting the full collaborative process.
          </p>
        </div>
      </section>
    </div>
  );
}

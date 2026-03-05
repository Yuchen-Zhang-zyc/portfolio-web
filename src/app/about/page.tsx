export default function About() {
  return (
    <div className="flex flex-col items-center min-h-[calc(100vh-6rem)] relative p-8 md:p-24 bg-white overflow-hidden">
      
      {/* Decorative Blur Element */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-blue-100 blur-3xl opacity-60 rounded-full z-0"></div>

      <div className="w-full max-w-5xl z-10 text-[#0a1128]">
        
        {/* Header */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
          Hi, I'm Richard.
        </h1>
        
        {/* Intro */}
        <div className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed mb-20 max-w-3xl flex flex-col gap-6">
          <p>
            I'm a Product Designer with a background in Computer Science. I speak both design and code.
          </p>
          <p>
            Currently, my research and design practice focuses on <span className="font-semibold text-blue-600">Human-AI Collaboration</span>. 
            I explore how we can design the next generation of tools that allow humans and AI to co-create seamlessly, balancing automation with human agency.
          </p>
        </div>

        {/* 5 Core Pillars */}
        <h2 className="text-3xl font-bold mb-10 tracking-tight">How I Build Products</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Vibe Coding & AI (The New Superpower) */}
          <div className="flex flex-col gap-4 bg-gray-50 p-8 rounded-2xl border border-gray-100 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
            <h3 className="text-xl font-bold flex items-center gap-2">
              <span className="text-blue-600">⚡️</span> Vibe Coding & AI Engineering
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              I leverage AI (Cursor, Claude) to translate Figma designs into production-ready Next.js code. Building functional, coded prototypes allows me to test complex logic in the browser, bridging the gap between design and engineering effortlessly.
            </p>
          </div>

          {/* System Thinking */}
          <div className="flex flex-col gap-4 p-8">
            <h3 className="text-xl font-bold border-b border-gray-200 pb-2">Systems Thinking & Logic</h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              I translate ambiguous problems into clear, scalable user flows. By mapping out edge cases and failure states, I look beyond the "happy path" to build modular design systems that are consistent and developer-friendly.
            </p>
          </div>

          {/* Interaction Design */}
          <div className="flex flex-col gap-4 p-8">
            <h3 className="text-xl font-bold border-b border-gray-200 pb-2">Interaction Design ("Feel")</h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Great design is state-driven. I focus on tactile clarity and gesture-first thinking, creating intuitive feedback loops (hover, active, loading states) that prevent user errors and make interactions feel natural.
            </p>
          </div>

          {/* User Understanding */}
          <div className="flex flex-col gap-4 p-8">
            <h3 className="text-xl font-bold border-b border-gray-200 pb-2">User Understanding</h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              I base decisions on research and testing, not just intuition. By optimizing cognitive load and crafting precise microcopy, I ensure that complex interfaces feel approachable and guide users without friction.
            </p>
          </div>

          {/* Visual Craft */}
          <div className="flex flex-col gap-4 p-8">
            <h3 className="text-xl font-bold border-b border-gray-200 pb-2">Visual Craft</h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              I establish clear visual hierarchy through typography, spacing, and calm composition. My goal is to deliver premium, editorial-style layouts with high attention to detail, turning case studies into compelling narratives.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

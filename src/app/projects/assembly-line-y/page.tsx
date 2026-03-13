import Link from "next/link";

export default function AssemblyLineYProject() {
  return (
    <div className="min-h-screen pt-32 px-6 md:px-[80px] max-w-[1280px] mx-auto w-full">
      <div className="max-w-4xl flex flex-col gap-6">
        <p className="text-sm font-mono uppercase tracking-[0.18em] text-brand-primary/55">Project</p>
        <h1 className="text-4xl md:text-5xl font-bold font-sans text-brand-primary">
          Assembly Line Y
        </h1>
        <p className="text-lg md:text-xl font-body text-brand-primary/80 leading-relaxed">
          A Quest 3 VR training simulation for Tesla Model Y assembly, enhanced with an AI assistant for guided task support.
        </p>

        <div className="flex flex-wrap gap-3 pt-2 text-sm text-brand-primary/70">
          <span className="px-4 py-2 rounded-full bg-white/70 border border-white/70">VR / XR</span>
          <span className="px-4 py-2 rounded-full bg-white/70 border border-white/70">AI Integration</span>
          <span className="px-4 py-2 rounded-full bg-white/70 border border-white/70">Unity</span>
        </div>

        <div className="pt-6">
          <p className="text-base font-body text-brand-primary/72 mb-4">
            I’ve moved this project into the same project-page system as the rest of the portfolio. A redesigned case study page will go here next.
          </p>
          <Link
            href="/assemblyline.html"
            className="inline-flex items-center rounded-full px-5 py-3 bg-brand-primary text-white text-sm font-medium hover:opacity-90 transition-opacity"
          >
            View legacy version
          </Link>
        </div>
      </div>
    </div>
  );
}

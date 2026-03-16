import Link from "next/link";

export default function VRSimulationProject() {
    return (
        <div className="min-h-screen pt-20 px-6 md:px-[80px] max-w-[1280px] mx-auto w-full">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-brand-primary/40 hover:text-brand-primary/70 transition-colors mb-12 block">
                <span>←</span> Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold font-sans text-brand-primary mb-6">VR Tire Change Simulation</h1>
            <p className="text-lg md:text-xl font-body text-brand-primary/80 mb-12">Project details coming soon...</p>
        </div>
    );
}

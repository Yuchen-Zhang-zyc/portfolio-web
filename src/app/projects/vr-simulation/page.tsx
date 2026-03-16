import Link from "next/link";

export default function VRSimulationProject() {
    return (
        <div className="min-h-screen">
            <div style={{ padding: "14px 48px" }}>
                <a href="/" style={{ fontSize: 12, color: "rgba(0,0,0,0.35)", textDecoration: "none", fontFamily: "monospace", letterSpacing: "0.06em" }}>← Home</a>
            </div>
            <div className="px-6 md:px-[80px] max-w-[1280px] mx-auto w-full pt-12">
                <h1 className="text-4xl md:text-5xl font-bold font-sans text-brand-primary mb-6">VR Tire Change Simulation</h1>
                <p className="text-lg md:text-xl font-body text-brand-primary/80 mb-12">Project details coming soon...</p>
            </div>
        </div>
    );
}

export default function NestThermostatProject() {
    return (
        <div className="min-h-screen pt-32 md:pt-36 px-6 md:px-[80px] max-w-[1280px] mx-auto w-full text-brand-primary">
            <main className="flex flex-col gap-20 md:gap-28 pb-24 md:pb-32">
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-center">
                    <div className="lg:col-span-5 flex flex-col gap-6 md:gap-7">
                        <div className="flex flex-wrap gap-3 text-[13px] font-medium text-brand-primary/72">
                            <span className="px-4 py-2 rounded-full bg-white/70 border border-white/70 shadow-[0_8px_24px_rgba(27,42,107,0.06)]">Product Redesign</span>
                            <span className="px-4 py-2 rounded-full bg-white/70 border border-white/70 shadow-[0_8px_24px_rgba(27,42,107,0.06)]">Interaction Design</span>
                            <span className="px-4 py-2 rounded-full bg-white/70 border border-white/70 shadow-[0_8px_24px_rgba(27,42,107,0.06)]">Smart Home UX</span>
                        </div>

                        <div className="flex flex-col gap-4">
                            <p className="text-sm font-mono uppercase tracking-[0.2em] text-brand-primary/55">Nest Thermostat</p>
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[0.95] text-brand-primary">
                                Simplifying smart temperature control
                            </h1>
                            <p className="text-lg md:text-[21px] leading-[1.65] text-brand-primary/78 max-w-[640px]">
                                A redesign of the Nest Thermostat experience focused on clearer temperature control, faster scheduling, and more trustworthy energy feedback across mobile and device interfaces.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                            <div className="rounded-[18px] border border-white/70 bg-white/72 backdrop-blur-xl px-4 py-4 shadow-[0_10px_28px_rgba(27,42,107,0.06)]">
                                <p className="text-[12px] uppercase tracking-[0.16em] text-brand-primary/45 mb-2">Role</p>
                                <p className="text-sm md:text-[15px] font-semibold text-brand-primary">Project Lead, UX Design</p>
                            </div>
                            <div className="rounded-[18px] border border-white/70 bg-white/72 backdrop-blur-xl px-4 py-4 shadow-[0_10px_28px_rgba(27,42,107,0.06)]">
                                <p className="text-[12px] uppercase tracking-[0.16em] text-brand-primary/45 mb-2">Team</p>
                                <p className="text-sm md:text-[15px] font-semibold text-brand-primary">4 Designers</p>
                            </div>
                            <div className="rounded-[18px] border border-white/70 bg-white/72 backdrop-blur-xl px-4 py-4 shadow-[0_10px_28px_rgba(27,42,107,0.06)]">
                                <p className="text-[12px] uppercase tracking-[0.16em] text-brand-primary/45 mb-2">Scope</p>
                                <p className="text-sm md:text-[15px] font-semibold text-brand-primary">Mobile + Device UX</p>
                            </div>
                            <div className="rounded-[18px] border border-white/70 bg-white/72 backdrop-blur-xl px-4 py-4 shadow-[0_10px_28px_rgba(27,42,107,0.06)]">
                                <p className="text-[12px] uppercase tracking-[0.16em] text-brand-primary/45 mb-2">Focus</p>
                                <p className="text-sm md:text-[15px] font-semibold text-brand-primary">Clarity & Interaction</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="rounded-[28px] border border-white/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.72)_100%)] backdrop-blur-2xl overflow-hidden shadow-[0_24px_80px_rgba(27,42,107,0.10)]">
                            <div className="h-11 w-full bg-white/55 border-b border-black/5 flex items-center px-4 relative">
                                <div className="flex gap-2 relative z-10">
                                    <div className="w-[12px] h-[12px] rounded-full bg-[#FF5F56] border border-black/10"></div>
                                    <div className="w-[12px] h-[12px] rounded-full bg-[#FFBD2E] border border-black/10"></div>
                                    <div className="w-[12px] h-[12px] rounded-full bg-[#27C93F] border border-black/10"></div>
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-brand-primary/45">
                                    Nest Thermostat Redesign
                                </div>
                            </div>
                            <div className="p-6 md:p-10 bg-[radial-gradient(circle_at_top_left,rgba(91,139,255,0.16),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(249,95,14,0.10),transparent_30%),linear-gradient(180deg,#f8f9fc_0%,#eff2f9_100%)]">
                                <div className="rounded-[24px] overflow-hidden border border-black/5 bg-[#1B1D23] shadow-[0_18px_50px_rgba(28,29,31,0.20)]">
                                    <img src="/nest-mockup.png" alt="Nest Thermostat redesign mockup" className="w-full h-auto block" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-start">
                    <div className="lg:col-span-4">
                        <p className="text-sm font-mono uppercase tracking-[0.2em] text-brand-primary/50 mb-3">Overview</p>
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-brand-primary">The problem behind the interface</h2>
                    </div>
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-5">
                        <div className="rounded-[22px] border border-white/70 bg-white/78 backdrop-blur-xl p-6 shadow-[0_12px_34px_rgba(27,42,107,0.07)]">
                            <p className="text-[12px] uppercase tracking-[0.16em] text-brand-primary/42 mb-3">01</p>
                            <h3 className="text-lg font-bold text-brand-primary mb-3">Confusing control logic</h3>
                            <p className="text-[15px] leading-[1.65] text-brand-primary/76">
                                Users had to interpret heating and cooling thresholds instead of simply setting the temperature they wanted.
                            </p>
                        </div>
                        <div className="rounded-[22px] border border-white/70 bg-white/78 backdrop-blur-xl p-6 shadow-[0_12px_34px_rgba(27,42,107,0.07)]">
                            <p className="text-[12px] uppercase tracking-[0.16em] text-brand-primary/42 mb-3">02</p>
                            <h3 className="text-lg font-bold text-brand-primary mb-3">Slow scheduling</h3>
                            <p className="text-[15px] leading-[1.65] text-brand-primary/76">
                                Daily scheduling required repetitive steps and too much manual setup for a task people do often.
                            </p>
                        </div>
                        <div className="rounded-[22px] border border-white/70 bg-white/78 backdrop-blur-xl p-6 shadow-[0_12px_34px_rgba(27,42,107,0.07)]">
                            <p className="text-[12px] uppercase tracking-[0.16em] text-brand-primary/42 mb-3">03</p>
                            <h3 className="text-lg font-bold text-brand-primary mb-3">Low system trust</h3>
                            <p className="text-[15px] leading-[1.65] text-brand-primary/76">
                                Energy-saving states and system behavior were not always visible, making the product feel less predictable.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-start">
                    <div className="lg:col-span-4 flex flex-col gap-4">
                        <p className="text-sm font-mono uppercase tracking-[0.2em] text-brand-primary/50">Key Moves</p>
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-brand-primary">What I changed</h2>
                        <p className="text-[16px] leading-[1.7] text-brand-primary/72 max-w-[420px]">
                            Instead of adding more features, I focused on simplifying how the product communicates system logic and how users complete its most important tasks.
                        </p>
                    </div>

                    <div className="lg:col-span-8 flex flex-col gap-5">
                        <div className="rounded-[24px] border border-white/70 bg-white/82 backdrop-blur-xl p-7 md:p-8 shadow-[0_14px_38px_rgba(27,42,107,0.07)]">
                            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                                <div className="max-w-[560px]">
                                    <p className="text-[12px] uppercase tracking-[0.16em] text-brand-primary/42 mb-3">01</p>
                                    <h3 className="text-xl md:text-2xl font-bold text-brand-primary mb-3">Simplified temperature control</h3>
                                    <p className="text-[15px] md:text-[16px] leading-[1.75] text-brand-primary/76">
                                        I redesigned temperature control around a single target temperature. Instead of asking users to think in terms of heating and cooling thresholds, the interface lets them set the temperature they want while the system handles the complexity behind the scenes.
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-2 pt-1">
                                    <span className="px-3 py-1.5 rounded-full bg-[#5B8BFF]/10 text-[#315fd3] text-[13px] font-medium">Lower cognitive load</span>
                                    <span className="px-3 py-1.5 rounded-full bg-[#5B8BFF]/10 text-[#315fd3] text-[13px] font-medium">Faster input</span>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-[24px] border border-white/70 bg-white/82 backdrop-blur-xl p-7 md:p-8 shadow-[0_14px_38px_rgba(27,42,107,0.07)]">
                            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                                <div className="max-w-[560px]">
                                    <p className="text-[12px] uppercase tracking-[0.16em] text-brand-primary/42 mb-3">02</p>
                                    <h3 className="text-xl md:text-2xl font-bold text-brand-primary mb-3">A more usable scheduling model</h3>
                                    <p className="text-[15px] md:text-[16px] leading-[1.75] text-brand-primary/76">
                                        I redesigned scheduling with a vertical layout that better matches how people scan time on mobile. I also introduced reusable event labels like Sleep, Away, and Wake Up to reduce repetitive setup and support real-life routines.
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-2 pt-1">
                                    <span className="px-3 py-1.5 rounded-full bg-[#F95F0E]/10 text-[#d6631f] text-[13px] font-medium">Less repetition</span>
                                    <span className="px-3 py-1.5 rounded-full bg-[#F95F0E]/10 text-[#d6631f] text-[13px] font-medium">Better scanability</span>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-[24px] border border-white/70 bg-white/82 backdrop-blur-xl p-7 md:p-8 shadow-[0_14px_38px_rgba(27,42,107,0.07)]">
                            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                                <div className="max-w-[560px]">
                                    <p className="text-[12px] uppercase tracking-[0.16em] text-brand-primary/42 mb-3">03</p>
                                    <h3 className="text-xl md:text-2xl font-bold text-brand-primary mb-3">Clearer energy and cross-device feedback</h3>
                                    <p className="text-[15px] md:text-[16px] leading-[1.75] text-brand-primary/76">
                                        I explored clearer Eco-state communication and a more consistent experience between the thermostat and the mobile app. The goal was not to make both interfaces identical, but to make them feel behaviorally coherent and easier to trust.
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-2 pt-1">
                                    <span className="px-3 py-1.5 rounded-full bg-[#1C1D1F]/6 text-brand-primary/72 text-[13px] font-medium">Higher trust</span>
                                    <span className="px-3 py-1.5 rounded-full bg-[#1C1D1F]/6 text-brand-primary/72 text-[13px] font-medium">Cross-device consistency</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-start">
                    <div className="lg:col-span-4">
                        <p className="text-sm font-mono uppercase tracking-[0.2em] text-brand-primary/50 mb-3">Design Principles</p>
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-brand-primary">The design logic</h2>
                    </div>
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="rounded-[22px] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.88)_0%,rgba(255,255,255,0.76)_100%)] p-6 shadow-[0_12px_34px_rgba(27,42,107,0.06)]">
                            <h3 className="text-lg font-bold text-brand-primary mb-3">Clarity over complexity</h3>
                            <p className="text-[15px] leading-[1.7] text-brand-primary/76">
                                The interface should reduce the number of decisions users have to make and make system state legible at a glance.
                            </p>
                        </div>
                        <div className="rounded-[22px] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.88)_0%,rgba(255,255,255,0.76)_100%)] p-6 shadow-[0_12px_34px_rgba(27,42,107,0.06)]">
                            <h3 className="text-lg font-bold text-brand-primary mb-3">Consistent, not identical</h3>
                            <p className="text-[15px] leading-[1.7] text-brand-primary/76">
                                Mobile and device interfaces should preserve the same mental model while adapting naturally to different form factors.
                            </p>
                        </div>
                        <div className="rounded-[22px] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.88)_0%,rgba(255,255,255,0.76)_100%)] p-6 shadow-[0_12px_34px_rgba(27,42,107,0.06)]">
                            <h3 className="text-lg font-bold text-brand-primary mb-3">State is content</h3>
                            <p className="text-[15px] leading-[1.7] text-brand-primary/76">
                                Visual design is not only aesthetic — its primary role is to communicate what the system is doing and what changes matter.
                            </p>
                        </div>
                        <div className="rounded-[22px] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.88)_0%,rgba(255,255,255,0.76)_100%)] p-6 shadow-[0_12px_34px_rgba(27,42,107,0.06)]">
                            <h3 className="text-lg font-bold text-brand-primary mb-3">Progressive disclosure</h3>
                            <p className="text-[15px] leading-[1.7] text-brand-primary/76">
                                Core actions stay visible while advanced information appears only when needed, keeping the experience focused and calm.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="rounded-[30px] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.84)_0%,rgba(255,255,255,0.74)_100%)] p-8 md:p-12 shadow-[0_18px_50px_rgba(27,42,107,0.08)]">
                    <div className="max-w-[860px] flex flex-col gap-5">
                        <p className="text-sm font-mono uppercase tracking-[0.2em] text-brand-primary/50">Reflection</p>
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-brand-primary">What this project taught me</h2>
                        <p className="text-[16px] md:text-[18px] leading-[1.8] text-brand-primary/78">
                            Designing for smart home products means designing for invisible system logic. The challenge is not adding more functionality, but translating complex behavior into interactions that feel clear, predictable, and easy to trust. This project strengthened how I think about interaction clarity, system feedback, and product consistency across devices.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}

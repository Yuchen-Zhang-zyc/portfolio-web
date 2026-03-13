"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
    { id: "about", href: "/#about", label: "About" },
    { id: "projects", href: "/#projects", label: "Projects" },
    { id: "resume", href: "/#resume", label: "Resume" },
];

export default function TopNav() {
    const pathname = usePathname();
    const router = useRouter();
    const [activeSection, setActiveSection] = useState<string>("");

    if (pathname.startsWith("/projects/")) {
        return null;
    }

    useEffect(() => {
        if (pathname !== "/") return;

        const sections = navItems
            .map((item) => document.getElementById(item.id))
            .filter(Boolean) as HTMLElement[];

        const updateActiveSection = () => {
            const scrollY = window.scrollY;
            const viewportOffset = 160;

            let current = "";
            for (const section of sections) {
                if (scrollY + viewportOffset >= section.offsetTop) {
                    current = section.id;
                }
            }
            setActiveSection(current);
        };

        updateActiveSection();
        window.addEventListener("scroll", updateActiveSection, { passive: true });
        window.addEventListener("resize", updateActiveSection);

        return () => {
            window.removeEventListener("scroll", updateActiveSection);
            window.removeEventListener("resize", updateActiveSection);
        };
    }, [pathname]);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return;

        setActiveSection(id);
        el.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    // For Nirvana project page
    if (pathname === "/projects/nirvana") {
        return (
            <header className="w-full fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#222222]/80 border-b border-white/5 transition-all">
                <div className="max-w-[1280px] mx-auto w-full px-6 md:px-[80px] py-6 flex justify-center md:justify-end md:pr-[200px]">
                    <nav className="flex gap-12 font-body text-white text-sm font-medium">
                        <Link href="#research" className="hover:text-[#06b6d4] transition-colors">
                            Research
                        </Link>
                        <Link href="#discovery" className="hover:text-[#a78bfa] transition-colors">
                            Discovery
                        </Link>
                        <Link href="#explore" className="hover:text-[#ea7e2b] transition-colors">
                            Explore
                        </Link>
                        <Link href="#design" className="hover:text-[#22c55e] transition-colors">
                            Design
                        </Link>
                    </nav>
                </div>
            </header>
        );
    }

    return (
        <header className="pointer-events-none fixed top-0 left-0 right-0 z-50">
            <div className="max-w-[1280px] mx-auto w-full px-4 pt-3 md:px-[56px] md:pt-7 flex justify-center">
                <nav
                    aria-label="Primary"
                    className="liquid-glass-nav pointer-events-auto relative flex items-center gap-1 p-1 min-[480px]:p-1.5 md:p-2 rounded-[999px] text-[12px] min-[480px]:text-[13px] md:text-sm font-medium text-brand-primary/88 max-w-[280px] min-[480px]:max-w-none w-full min-[480px]:w-auto"
                >
                    <div className="liquid-glass-orb liquid-glass-orb-left" aria-hidden="true" />
                    <div className="liquid-glass-orb liquid-glass-orb-right" aria-hidden="true" />

                    {navItems.map((item) => {
                        const isActive =
                            pathname === "/"
                                ? activeSection === item.id
                                : item.id === "projects"
                                  ? pathname.startsWith("/projects")
                                  : item.id === "resume"
                                    ? pathname === "/resume"
                                    : pathname === "/about";

                        const className = `liquid-glass-chip relative flex items-center justify-center rounded-full px-3 py-2 md:px-4 md:py-2.5 min-w-0 flex-1 min-[480px]:flex-none min-[480px]:min-w-[96px] md:min-w-[108px] transition-all duration-300 ${
                            isActive
                                ? "liquid-glass-chip-active text-brand-primary"
                                : "text-brand-primary/72 hover:text-brand-primary"
                        }`;

                        if (pathname === "/") {
                            return (
                                <button
                                    key={item.label}
                                    type="button"
                                    onClick={() => scrollToSection(item.id)}
                                    className={className}
                                    aria-current={isActive ? "page" : undefined}
                                >
                                    <span className="relative z-10 text-center">{item.label}</span>
                                </button>
                            );
                        }

                        return (
                            <button
                                key={item.label}
                                type="button"
                                onClick={() => router.push(item.href)}
                                className={className}
                                aria-current={isActive ? "page" : undefined}
                            >
                                <span className="relative z-10 text-center">{item.label}</span>
                            </button>
                        );
                    })}
                </nav>
            </div>
        </header>
    );
}

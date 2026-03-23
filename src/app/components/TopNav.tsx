"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const navItemsEn = [
    { id: "about", href: "/#about", label: "About" },
    { id: "projects", href: "/#projects", label: "Projects" },
    { id: "resume", href: "/#resume", label: "Resume" },
];

const navItemsZh = [
    { id: "about", href: "/zh#about", label: "关于" },
    { id: "projects", href: "/zh#projects", label: "项目" },
    { id: "resume", href: "/zh#resume", label: "简历" },
];

export default function TopNav() {
    const pathname = usePathname();
    const router = useRouter();
    const [activeSection, setActiveSection] = useState<string>("");

    const isZh = pathname === "/zh" || pathname.startsWith("/zh/");
    const isProjectPage = pathname.startsWith("/projects/") || pathname.startsWith("/zh/projects/");
    const isHome = pathname === "/" || pathname === "/zh";

    const navItems = isZh ? navItemsZh : navItemsEn;

    useEffect(() => {
        if (!isHome) return;

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
    }, [pathname, isHome, navItems]);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return;

        setActiveSection(id);

        const start = window.scrollY;
        const target = el.getBoundingClientRect().top + window.scrollY;
        const distance = target - start;
        const duration = Math.min(900, Math.max(400, Math.abs(distance) * 0.4));
        let startTime: number | null = null;

        // Cubic ease-in-out
        const ease = (t: number) =>
            t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            window.scrollTo(0, start + distance * ease(progress));
            if (progress < 1) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
    };

    if (isProjectPage) {
        return null;
    }

    return (
        <header className="pointer-events-none fixed top-0 left-0 right-0 z-50">
            <div className="max-w-[1280px] mx-auto w-full px-4 pt-3 md:px-[56px] md:pt-7 flex justify-center">
                <nav
                    aria-label="Primary"
                    className="liquid-glass-nav pointer-events-auto relative flex items-center gap-1 p-1 min-[480px]:p-1.5 md:p-2 rounded-[999px] text-[12px] min-[480px]:text-[13px] md:text-sm font-medium text-brand-primary/88 max-w-[320px] min-[480px]:max-w-none w-full min-[480px]:w-auto"
                >
                    <div className="liquid-glass-orb liquid-glass-orb-left" aria-hidden="true" />
                    <div className="liquid-glass-orb liquid-glass-orb-right" aria-hidden="true" />

                    {navItems.map((item) => {
                        const isActive =
                            isHome
                                ? activeSection === item.id
                                : item.id === "projects"
                                  ? pathname.startsWith("/projects") || pathname.startsWith("/zh/projects")
                                  : false;

                        const className = `relative flex items-center justify-center rounded-full px-3 py-2 md:px-4 md:py-2.5 min-w-0 flex-1 min-[480px]:flex-none min-[480px]:min-w-[80px] md:min-w-[96px] ${
                            isActive
                                ? "liquid-glass-chip liquid-glass-chip-active text-brand-primary"
                                : "text-brand-primary/72 hover:text-brand-primary active:scale-[0.94] transition-transform duration-[180ms]"
                        }`;

                        if (isHome) {
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

                    {/* Language toggle */}
                    <div className="flex items-center ml-1 border-l border-brand-primary/15 pl-2 gap-1">
                        {isZh ? (
                            <>
                                <Link
                                    href="/"
                                    className="px-2 py-1.5 rounded-full text-[11px] font-mono text-brand-primary/50 hover:text-brand-primary transition-colors"
                                >
                                    EN
                                </Link>
                                <span className="px-2 py-1.5 rounded-full text-[11px] font-mono text-brand-primary font-semibold">
                                    中
                                </span>
                            </>
                        ) : (
                            <>
                                <span className="px-2 py-1.5 rounded-full text-[11px] font-mono text-brand-primary font-semibold">
                                    EN
                                </span>
                                <Link
                                    href="/zh"
                                    className="px-2 py-1.5 rounded-full text-[11px] font-mono text-brand-primary/50 hover:text-brand-primary transition-colors"
                                >
                                    中
                                </Link>
                            </>
                        )}
                    </div>
                </nav>
            </div>
        </header>
    );
}

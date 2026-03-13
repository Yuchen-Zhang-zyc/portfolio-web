"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TopNav() {
    const pathname = usePathname();

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

    // Default header for all other pages
    return (
        <header className="w-full absolute top-0 left-0 right-0 z-50">
            <div className="max-w-[1280px] mx-auto w-full px-6 md:px-[80px] pt-12 md:pt-[64px] flex justify-end">
                <nav className="flex gap-12 font-body text-white text-sm font-medium">
                    <Link href="/#about" className="hover:text-brand-accent transition-colors">
                        About
                    </Link>
                    <Link href="/#projects" className="hover:text-brand-accent transition-colors">
                        Projects
                    </Link>
                    <Link href="/resume" className="hover:text-brand-accent transition-colors">
                        Resume
                    </Link>
                </nav>
            </div>
        </header>
    );
}

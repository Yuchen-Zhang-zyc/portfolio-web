"use client";

import Lenis from "lenis";
import { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const LenisContext = createContext<Lenis | null>(null);

export function useLenis() {
    return useContext(LenisContext);
}

export default function LenisProvider({ children }: { children: React.ReactNode }) {
    const [lenis, setLenis] = useState<Lenis | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        if (lenis) lenis.scrollTo(0, { immediate: true });
    }, [pathname, lenis]);

    useEffect(() => {
        const instance = new Lenis({
            duration: 1.4,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo-out
            smoothWheel: true,
        });

        setLenis(instance);

        let rafId: number;
        const raf = (time: number) => {
            instance.raf(time);
            rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(rafId);
            instance.destroy();
        };
    }, []);

    return (
        <LenisContext.Provider value={lenis}>
            {children}
        </LenisContext.Provider>
    );
}

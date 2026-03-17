"use client";

import { useEffect } from "react";

/**
 * Fixes two distinct back-navigation rendering bugs:
 *
 * 1. Safari bfcache (pageshow persisted=true): The entire page is restored from
 *    a frozen snapshot. position:fixed elements and CSS animations can resume in
 *    wrong states. We force a layout reflow + animation restart to recover.
 *
 * 2. Next.js router cache (popstate): Client-side navigation caches the React tree.
 *    Components aren't re-mounted so useEffect/IntersectionObservers don't re-run.
 *    We force .reveal elements visible and micro-scroll to repaint compositing layers.
 */
export default function BfcacheRepaint() {
  useEffect(() => {
    // ── Shared helpers ─────────────────────────────────────────────────────

    const forceReveal = () => {
      const run = () =>
        document.querySelectorAll<Element>(".reveal:not(.visible)").forEach((el) => {
          el.classList.add("visible");
        });
      run();
      setTimeout(run, 80);
      setTimeout(run, 200);
    };

    const microScroll = () => {
      const y = window.scrollY;
      window.scrollTo({ top: y + 1, behavior: "instant" as ScrollBehavior });
      requestAnimationFrame(() =>
        window.scrollTo({ top: y, behavior: "instant" as ScrollBehavior })
      );
    };

    // Force a layout reflow + GPU-layer refresh on all position:fixed elements.
    // This corrects Safari's stale compositing positions after bfcache restore.
    const repaintFixed = () => {
      document.querySelectorAll<HTMLElement>("*").forEach((el) => {
        try {
          if (window.getComputedStyle(el).position === "fixed") {
            // Reading offsetTop forces synchronous layout (reflow) for this element.
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            el.offsetTop;
          }
        } catch {
          // ignore cross-origin or inaccessible elements
        }
      });
      microScroll();
    };

    // Restart CSS animations so they don't resume mid-state from bfcache.
    const restartAnimations = () => {
      document.querySelectorAll<HTMLElement>('[class*="animate-"]').forEach((el) => {
        el.style.animationPlayState = "paused";
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        el.offsetWidth; // force reflow
        el.style.animationPlayState = "";
      });
    };

    // ── bfcache restore (Safari) ─────────────────────────────────────────
    const handlePageShow = (e: PageTransitionEvent) => {
      if (!e.persisted) return;
      repaintFixed();
      restartAnimations();
      forceReveal();
    };

    // ── Next.js router cache restore (all browsers) ──────────────────────
    const handlePopState = () => {
      // Give Next.js time to finish restoring the React tree before repainting.
      setTimeout(() => {
        microScroll();
        forceReveal();
      }, 60);
    };

    window.addEventListener("pageshow", handlePageShow);
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("pageshow", handlePageShow);
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return null;
}

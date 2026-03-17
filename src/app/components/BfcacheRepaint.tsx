"use client";

import { useEffect } from "react";

/**
 * Handles Safari bfcache (back-forward cache) restoration.
 * When Safari restores a page from bfcache, position:fixed elements and
 * compositing layers can render at wrong positions. A tiny scroll triggers
 * a full repaint without changing the user's scroll position.
 */
export default function BfcacheRepaint() {
  useEffect(() => {
    const handlePageShow = (e: PageTransitionEvent) => {
      if (!e.persisted) return;
      // Micro-scroll to force a repaint — cancels itself out immediately.
      const y = window.scrollY;
      window.scrollTo({ top: y + 1, behavior: "instant" as ScrollBehavior });
      requestAnimationFrame(() =>
        window.scrollTo({ top: y, behavior: "instant" as ScrollBehavior })
      );
    };

    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
  }, []);

  return null;
}

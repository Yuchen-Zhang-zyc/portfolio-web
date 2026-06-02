"use client";

import { useMemo } from "react";
import * as THREE from "three";
import type { LayerKey } from "./types";

/**
 * Reads scoped CSS custom properties from .ixds709-page and returns
 * THREE.Color values for use in R3F materials. Includes hardcoded
 * fallbacks matching the design tokens so the 3D scene works even
 * before CSS loads.
 */

const FALLBACKS: Record<string, string> = {
  "--ix-bg": "#F7F3EC",
  "--ix-bg-fog": "#F2ECE2",
  "--ix-layer-mental": "#211C15",
  "--ix-layer-structures": "#514838",
  "--ix-layer-patterns": "#837860",
  "--ix-layer-events": "#ABA08C",
  "--ix-layer-boundary": "#C7BDAD",
  "--ix-edge": "#211C15",
  "--ix-edge-faint": "#C7BDAD",
  "--ix-accent": "#3A4A8C",
  "--ix-ink-faint": "#A99F8F",
};

function readCSSVar(name: string): string {
  if (typeof document === "undefined") return FALLBACKS[name] ?? "#000";
  const el = document.querySelector(".ixds709-page");
  if (!el) return FALLBACKS[name] ?? "#000";
  const value = getComputedStyle(el).getPropertyValue(name).trim();
  return value || FALLBACKS[name] || "#000";
}

export function useGraphColors() {
  return useMemo(() => {
    const get = (name: string) => new THREE.Color(readCSSVar(name));

    const layerColor: Record<LayerKey, THREE.Color> = {
      mental: get("--ix-layer-mental"),
      structures: get("--ix-layer-structures"),
      patterns: get("--ix-layer-patterns"),
      events: get("--ix-layer-events"),
      boundary: get("--ix-layer-boundary"),
    };

    return {
      bg: get("--ix-bg"),
      bgFog: get("--ix-bg-fog"),
      edge: get("--ix-edge"),
      edgeFaint: get("--ix-edge-faint"),
      accent: get("--ix-accent"),
      inkFaint: get("--ix-ink-faint"),
      layerColor,
    };
  }, []);
}

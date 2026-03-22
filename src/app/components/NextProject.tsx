"use client";

import Link from "next/link";
import { useState } from "react";

interface NextProjectProps {
  href: string;
  title: string;
  role: string;
  theme?: "dark" | "light";
}

export default function NextProject({ href, title, role, theme = "light" }: NextProjectProps) {
  const isDark = theme === "dark";
  const [hovered, setHovered] = useState(false);

  const bg       = isDark ? (hovered ? "#1C1B19" : "#111110") : (hovered ? "#E6E5DF" : "#F0EFEA");
  const border   = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
  const labelCol = isDark ? "rgba(255,255,255,0.38)" : "rgba(0,0,0,0.38)";
  const titleCol = isDark ? "#FFFFFF" : "#111110";
  const roleCol  = isDark ? "rgba(255,255,255,0.5)"  : "rgba(0,0,0,0.5)";
  const arrowCol = hovered
    ? (isDark ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.6)")
    : (isDark ? "rgba(255,255,255,0.28)" : "rgba(0,0,0,0.22)");

  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "44px 48px",
        background: bg,
        borderTop: `1px solid ${border}`,
        textDecoration: "none",
        transition: "background 0.22s ease",
        cursor: "pointer",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
        <span style={{
          fontSize: 10,
          fontFamily: "var(--font-dm-mono, 'DM Mono', monospace)",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: labelCol,
        }}>
          Next Project
        </span>
        <span style={{
          fontSize: 22,
          fontWeight: 600,
          color: titleCol,
          lineHeight: 1.2,
        }}>
          {title}
        </span>
        <span style={{
          fontSize: 13,
          color: roleCol,
        }}>
          {role}
        </span>
      </div>

      <span
        aria-hidden="true"
        style={{
          fontSize: 26,
          color: arrowCol,
          lineHeight: 1,
          flexShrink: 0,
          marginLeft: 24,
          transition: "transform 0.22s ease, color 0.22s ease",
          transform: hovered ? "translateX(8px)" : "translateX(0)",
        }}
      >
        →
      </span>
    </Link>
  );
}

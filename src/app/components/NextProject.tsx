import Link from "next/link";

interface NextProjectProps {
  href: string;
  title: string;
  role: string;
  theme?: "dark" | "light";
}

export default function NextProject({ href, title, role, theme = "dark" }: NextProjectProps) {
  const isDark = theme === "dark";

  return (
    <Link
      href={href}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "40px 48px",
        borderTop: `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)"}`,
        textDecoration: "none",
        transition: "background 0.2s",
        cursor: "pointer",
      }}
      className={`next-project-link ${isDark ? "next-project-dark" : "next-project-light"}`}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <span style={{
          fontSize: 11,
          fontFamily: "monospace",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: isDark ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.35)",
        }}>
          Next Project
        </span>
        <span style={{
          fontSize: 22,
          fontWeight: 600,
          color: isDark ? "#ffffff" : "#1a1a1a",
          lineHeight: 1.2,
        }}>
          {title}
        </span>
        <span style={{
          fontSize: 13,
          color: isDark ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.45)",
        }}>
          {role}
        </span>
      </div>
      <span style={{
        fontSize: 28,
        color: isDark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.2)",
        lineHeight: 1,
        flexShrink: 0,
        marginLeft: 24,
        transition: "transform 0.2s, color 0.2s",
      }} className="next-project-arrow">
        →
      </span>

      <style>{`
        .next-project-dark:hover { background: rgba(255,255,255,0.04); }
        .next-project-light:hover { background: rgba(0,0,0,0.03); }
        .next-project-link:hover .next-project-arrow {
          transform: translateX(6px);
          color: ${isDark ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.5)"};
        }
        @media (max-width: 640px) {
          .next-project-link { padding: 32px 24px !important; }
        }
      `}</style>
    </Link>
  );
}

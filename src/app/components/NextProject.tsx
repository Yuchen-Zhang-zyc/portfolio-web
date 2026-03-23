import Link from "next/link";

interface NextProjectProps {
  href: string;
  title: string;
  role: string;
  theme?: "dark" | "light";
}

export default function NextProject({ href, title, role, theme = "light" }: NextProjectProps) {
  const isDark = theme === "dark";

  const bg          = isDark ? "#111110"                : "#F0EFEA";
  const borderCol   = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
  const titleCol    = isDark ? "#FFFFFF"                : "#111110";
  const labelCol    = isDark ? "rgba(255,255,255,0.38)" : "rgba(0,0,0,0.38)";
  const roleCol     = isDark ? "rgba(255,255,255,0.5)"  : "rgba(0,0,0,0.5)";
  const arrowCol    = isDark ? "rgba(255,255,255,0.28)" : "rgba(0,0,0,0.22)";

  return (
    <Link
      href={href}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "44px 48px",
        background: bg,
        borderTop: `1px solid ${borderCol}`,
        textDecoration: "none",
        cursor: "pointer",
        color: titleCol,
        position: "relative",
        /* Stack above sibling <main className="relative z-10"> on project pages so title/role stay visible */
        zIndex: 30,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 5, flex: 1, minWidth: 0 }}>
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
          lineHeight: 1.2,
          color: titleCol,
          /* Avoid inherited body/link color hiding the project name */
          WebkitTextFillColor: titleCol,
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
        style={{
          fontSize: 26,
          color: arrowCol,
          lineHeight: 1,
          flexShrink: 0,
          marginLeft: 24,
          transition: "transform 0.22s ease, color 0.22s ease",
        }}
        aria-hidden="true"
      >
        →
      </span>
    </Link>
  );
}

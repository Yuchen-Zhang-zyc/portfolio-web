import Link from "next/link";

interface NextProjectProps {
  href: string;
  title: string;
  role: string;
  theme?: "dark" | "light";
}

export default function NextProject({ href, title, role, theme = "light" }: NextProjectProps) {
  const isDark = theme === "dark";
  const cls    = isDark ? "np-link-dark" : "np-link-light";

  const bg        = isDark ? "#111110"                  : "#F0EFEA";
  const bgHover   = isDark ? "#1C1B19"                  : "#E6E5DF";
  const border    = isDark ? "rgba(255,255,255,0.08)"   : "rgba(0,0,0,0.08)";
  const labelCol  = isDark ? "rgba(255,255,255,0.38)"   : "rgba(0,0,0,0.38)";
  const titleCol  = isDark ? "#FFFFFF"                  : "#111110";
  const roleCol   = isDark ? "rgba(255,255,255,0.5)"    : "rgba(0,0,0,0.5)";
  const arrowCol  = isDark ? "rgba(255,255,255,0.28)"   : "rgba(0,0,0,0.22)";
  const arrowHov  = isDark ? "rgba(255,255,255,0.8)"    : "rgba(0,0,0,0.6)";

  return (
    <>
      <style>{`
        .${cls} {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 44px 48px;
          background: ${bg};
          border-top: 1px solid ${border};
          text-decoration: none;
          transition: background 0.22s ease;
          cursor: pointer;
        }
        .${cls}:hover { background: ${bgHover}; }
        .${cls}:hover .np-arrow {
          transform: translateX(8px);
          color: ${arrowHov};
        }
        @media (max-width: 640px) {
          .${cls} { padding: 32px 24px; }
        }
      `}</style>

      <Link href={href} className={cls}>
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
          className="np-arrow"
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
    </>
  );
}

"use client";

import { useEffect, useRef, type ReactNode } from "react";

// ixds709 ink palette — same as universe nodes
const COLORS = [
  "#211C15", "#211C15", "#211C15",
  "#514838", "#514838",
  "#837860",
  "#3A4A8C", "#3A4A8C",
  "#ABA08C",
];

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  r: number;
  alpha: number;
  color: string;
}

// mulberry32 — deterministic seeded PRNG
function mulberry32(seed: number) {
  return () => {
    seed |= 0; seed = seed + 0x6D2B79F5 | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = t + Math.imul(t ^ (t >>> 7), 61 | t) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function buildParticles(w: number, h: number): Particle[] {
  const rnd = mulberry32(42);
  return Array.from({ length: 320 }, () => {
    const cluster = rnd() < 0.55 ? 0 : 1;
    const cy = cluster === 0 ? h * 0.42 : h * 0.58;
    const angle = rnd() * Math.PI * 2;
    return {
      x:     w / 2 + Math.cos(angle) * w * (0.06 + rnd() * 0.32),
      y:     cy    + Math.sin(angle) * h * (0.02 + rnd() * 0.09),
      vx:    0, vy: 0,
      r:     rnd() * 2.8 + 1.2,
      alpha: rnd() * 0.55 + 0.30,
      color: COLORS[Math.floor(rnd() * COLORS.length)],
    };
  });
}

interface Props {
  children: ReactNode;
  /** 0-1 progress from parent scroll. At >0.06, particles scatter. */
  progress: number;
}

export default function ParticleHero({ children, progress }: Props) {
  const wrapRef      = useRef<HTMLDivElement>(null);
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const particles    = useRef<Particle[]>([]);
  const rafId        = useRef<number | undefined>(undefined);
  const scattered    = useRef(false);

  // size canvas to match wrapper
  useEffect(() => {
    function resize() {
      const wrap = wrapRef.current;
      const c    = canvasRef.current;
      if (!wrap || !c) return;
      c.width  = wrap.offsetWidth;
      c.height = wrap.offsetHeight;
      if (!scattered.current) {
        particles.current = buildParticles(c.width, c.height);
      }
    }
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  // trigger scatter when parent signals
  useEffect(() => {
    if (progress > 0.06 && !scattered.current) {
      scattered.current = true;
      const c = canvasRef.current;
      if (!c) return;
      const w = c.width, h = c.height;

      particles.current.forEach((p) => {
        const dx = p.x - w / 2;
        const dy = p.y - h / 2;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const speed = Math.random() * 5 + 2;   // slower launch speed
        p.vx = (dx / dist) * speed + (Math.random() - 0.5) * 2;
        p.vy = (dy / dist) * speed * 0.6 - 1.0 + (Math.random() - 0.5) * 2;
      });

      const animate = () => {
        const ctx = c.getContext("2d");
        if (!ctx) return;
        ctx.clearRect(0, 0, w, h);
        let alive = false;
        particles.current.forEach((p) => {
          if (p.alpha <= 0.01) return;
          p.x  += p.vx; p.y += p.vy;
          p.vx *= 0.978; p.vy *= 0.978;  // more air resistance → drift longer
          p.vy += 0.02;                    // lighter gravity
          p.alpha -= 0.007;               // fade slower → particles linger
          ctx.globalAlpha = Math.max(0, p.alpha);
          ctx.fillStyle   = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fill();
          alive = true;
        });
        ctx.globalAlpha = 1;
        if (alive) rafId.current = requestAnimationFrame(animate);
      };
      rafId.current = requestAnimationFrame(animate);
    }
  }, [progress]);

  useEffect(() => () => { if (rafId.current) cancelAnimationFrame(rafId.current); }, []);

  return (
    <div ref={wrapRef} style={{ position: "relative", width: "100%", height: "100%" }}>
      {children}
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 20 }}
      />
    </div>
  );
}

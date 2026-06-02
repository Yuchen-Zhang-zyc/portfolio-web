"use client";

import { useState, useCallback, useEffect, useRef, useMemo } from "react";
import dynamic from "next/dynamic";
import { Crosshair, Share2 } from "lucide-react";
import "./ixds709.css";
import ParticleHero from "./ParticleHero";
import type { GraphLoop, ForcingChain, GraphNode } from "./types";
import graphData from "./graph.json";
import { LAYER_LABEL, type LayerKey } from "./types";

const G = graphData;
const Universe = dynamic(() => import("./Universe"), { ssr: false });

const loopById = new Map<string, GraphLoop>();
for (const l of G.loops) loopById.set(l.id, l);

// Per-loop descriptions
const LOOP_DESC: Record<string, string> = {
  CLD_I1: "Students rely on AI to complete tasks → craft skill atrophies → deeper reliance. The trap half of the Mastery Dyad.",
  CLD_I3: "Mastery enables critical evaluation of AI output → reduces offloading → skill preserved. The way-out half of the Mastery Dyad.",
  CLD_I4: "Faculty lean on detection tools → adjudication time grows → workload pressure → more tool reliance.",
  CLD_C1: "Detection deployment suppresses psychological safety → students conceal AI use → institution demands more detection.",
  CLD_S1: "Policy ambiguity sustains faculty rule heterogeneity → concealment → reputational risk → leadership commits to policy clarity.",
  CLD_S2: "ELL students face amplified false-positive rates → higher cost of false accusation → safety suppressed → concealment → more detection. The equity trap.",
  CLD_S3: "Industry pressure raises enrollment stakes → faculty workload grows → capacity for deep pedagogical restructuring is consumed.",
  CLD_S5: "Process documentation raises authorship clarity → faculty trust rebuilds → assessment redesign expands → more documentation.",
  CLD_S9: "Authorship clarity reduces industry recruiter suspicion → devlog practice spreads → more clarity. A slow repair loop.",
  CLD_I2: "AI use intensifies → internal conflict rises → self-limiting brake on further AI use. A personal balancing mechanism.",
  FC1: "Faculty rule fragmentation → student concealment → detection demand. Missing closure: concealment never triggers policy unification.",
  FC2: "Leadership investment in AI infrastructure → access gap widens → disadvantaged students fall further behind.",
  FC3: "AI mandate → student affective resistance → demand for traditional skills → curriculum redesign. Stops before reaching faculty policy.",
  FC4: "Assessment redesign → devlog institutionalization → process documentation → trust + tacit knowledge. Missing: proven effectiveness doesn't propagate back to more reform.",
  FC5: "AI use and dependence erode critical thinking. Missing brake: declining critical thinking doesn't reduce AI reliance.",
  hm: "5 vulnerability channels converge on ELL students via detection: language patterns, false-positive rates, cost of accusation, suppressed safety, concealment — locked in a reinforcing loop.",
};

// L1–L10 display mapping (display label → CLD ID in graph.json)
const LOOPS_DISPLAY = [
  { displayId: "L1",  cldId: "CLD_I1", type: "R", name: "Skill Atrophy" },
  { displayId: "L2",  cldId: "CLD_I3", type: "R", name: "Hand-Brain Discovery" },
  { displayId: "L3",  cldId: "CLD_I4", type: "R", name: "Adjudication Workload" },
  { displayId: "L4",  cldId: "CLD_C1", type: "R", name: "Trust Erosion" },
  { displayId: "L5",  cldId: "CLD_S1", type: "B", name: "Policy Drift" },
  { displayId: "L6",  cldId: "CLD_S2", type: "R", name: "Detection-Bias Trap" },
  { displayId: "L7",  cldId: "CLD_S3", type: "B", name: "Pedagogy Capacity Trap" },
  { displayId: "L8",  cldId: "CLD_S5", type: "R", name: "Trust-Disclosure Repair" },
  { displayId: "L9",  cldId: "CLD_S9", type: "B", name: "Authorship-Suspicion Balance" },
  { displayId: "L10", cldId: "CLD_I2", type: "B", name: "Internal Conflict Brake" },
];

const LAYER_DOT_COLORS: Record<LayerKey, string> = {
  mental:     "#3A4A8C",
  structures: "#4A4035",
  patterns:   "#857A68",
  events:     "#B0A896",
  boundary:   "#CEC7BC",
};
const LAYER_ORDER: LayerKey[] = ["mental", "structures", "patterns", "events", "boundary"];

export default function Ixds709Page() {
  const [focusedLoop, setFocusedLoop]         = useState<string | null>(null);
  const [focusedNode, setFocusedNode]         = useState<string | null>(null);
  const [hoveredNode, setHoveredNode]         = useState<string | null>(null);
  const [showAmbientEdges, setShowAmbientEdges] = useState(true);
  const [focusedFC, setFocusedFC]             = useState<string | null>(null);
  const [showHM, setShowHM]                   = useState(false);
  const [showLoopPopover, setShowLoopPopover] = useState(false);
  const [showChainPopover, setShowChainPopover] = useState(false);
  const [recenterKey, setRecenterKey]         = useState(0);

  // ── click-driven transition ────────────────────────────
  const progressRef = useRef(0);
  const animatingRef = useRef(false);
  const [progress, setProgress] = useState(0);

  // Lock page scroll
  useEffect(() => {
    const html = document.documentElement;
    const prev = html.style.overflow;
    html.style.overflow = "hidden";
    return () => { html.style.overflow = prev; };
  }, []);

  const startTransition = useCallback(() => {
    if (animatingRef.current || progressRef.current >= 1) return;
    animatingRef.current = true;
    const startTime = performance.now();
    const startP = progressRef.current;

    const tick = (now: number) => {
      const t = Math.min((now - startTime) / 700, 1);
      const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
      const p = startP + (1 - startP) * eased;
      progressRef.current = p;
      setProgress(p);
      if (t < 1) requestAnimationFrame(tick);
      else { animatingRef.current = false; progressRef.current = 1; setProgress(1); }
    };
    requestAnimationFrame(tick);
  }, []);

  // Close popovers on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".bar-section")) {
        setShowLoopPopover(false);
        setShowChainPopover(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const heroOpacity     = Math.max(0, 1 - progress * 1.55);
  const universeOpacity = Math.min(1, Math.max(0, (progress - 0.25) * 2));
  const heroGone        = heroOpacity < 0.01;

  const handleClear = useCallback(() => {
    setFocusedLoop(null);
    setFocusedNode(null);
    setFocusedFC(null);
    setShowHM(false);
  }, []);

  const handleFocusLoop = useCallback(
    (id: string | null) => {
      if (focusedLoop === id && !focusedNode) { handleClear(); return; }
      setFocusedLoop(id);
      setFocusedNode(null);
      setFocusedFC(null);
      setShowHM(false);
    },
    [focusedLoop, focusedNode, handleClear]
  );

  const handleFocusNode = useCallback(
    (id: string | null) => {
      if (focusedNode === id) { handleClear(); return; }
      setFocusedNode(id);
      setFocusedLoop(null);
      setFocusedFC(null);
      setShowHM(false);
    },
    [focusedNode, handleClear]
  );

  const handleFocusFC = useCallback(
    (id: string) => {
      setFocusedFC(f => f === id ? null : id);
      setFocusedLoop(null);
      setFocusedNode(null);
      setShowHM(false);
    },
    []
  );

  const handleToggleHM = useCallback(() => {
    setFocusedLoop(null);
    setFocusedNode(null);
    setFocusedFC(null);
    setShowHM(v => !v);
  }, []);

  const hasFocus = !!(focusedLoop || focusedNode || focusedFC || showHM);
  const focusedLoopData = focusedLoop ? loopById.get(focusedLoop) ?? null : null;
  const focusedFCData   = focusedFC ? (G.forcingChains as ForcingChain[] ?? []).find(f => f.id === focusedFC) ?? null : null;

  const nodeById = useMemo(() => {
    const m = new Map<string, GraphNode>();
    for (const n of G.nodes as GraphNode[]) m.set(n.id, n);
    return m;
  }, []);

  const focusedNodeList = useMemo(() => {
    const ids = new Set<string>();
    if (focusedLoop) {
      const loop = loopById.get(focusedLoop);
      if (loop) loop.nodes.forEach(v => ids.add(v));
    }
    if (focusedFC) {
      const fc = (G.forcingChains as ForcingChain[]).find(f => f.id === focusedFC);
      if (fc) fc.nodes.forEach(v => ids.add(v));
    }
    if (showHM && G.hmSubgraph) {
      G.hmSubgraph.nodes.forEach(v => ids.add(v));
    }
    if (focusedNode && !showHM) ids.add(focusedNode);
    return [...ids].map(id => nodeById.get(id)).filter(Boolean) as GraphNode[];
  }, [focusedLoop, focusedFC, showHM, focusedNode, nodeById]);

  return (
    <div
      className="ixds709-page"
      style={{ position: "fixed", inset: 0, overflow: "hidden", background: "var(--ix-bg)" }}
    >
      {/* ── Universe ──────────────────────────────────────── */}
      <div style={{ position: "absolute", inset: 0, opacity: universeOpacity }}>
        <Universe
          focusedLoop={focusedLoop}
          focusedNode={focusedNode}
          hoveredNode={hoveredNode}
          showAmbientEdges={showAmbientEdges}
          focusedFC={focusedFC}
          showHM={showHM}
          recenterKey={recenterKey}
          onHoverNode={setHoveredNode}
          onClearHover={() => setHoveredNode(null)}
          onFocusLoop={handleFocusLoop}
          onFocusNode={handleFocusNode}
          onClear={handleClear}
        />

        {/* Layer key — top-right */}
        <div className="layer-key-panel">
          <div className="layer-key-title">Iceberg Layer</div>
          <div className="layer-key">
            {LAYER_ORDER.map(lk => (
              <div key={lk} className="layer-key-item">
                <span className="layer-key-dot" style={{ background: LAYER_DOT_COLORS[lk] }} />
                <span>{LAYER_LABEL[lk]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Node list panel — left side ───────────────── */}
        {hasFocus && focusedNodeList.length > 0 && (
          <div className="node-list-panel">
            <div className="nlp-header">
              <div className="nlp-title-row">
                {focusedLoopData && (
                  <span className={`nlp-type-badge ${focusedLoopData.type === "R" ? "r" : "b"}`}>
                    {focusedLoopData.type}
                  </span>
                )}
                {focusedFCData && <span className="nlp-type-badge fc">FC</span>}
                {showHM && <span className="nlp-type-badge hm">HM</span>}
                <span className="nlp-title">
                  {focusedLoopData?.label ?? focusedFCData?.label ?? "ELL Disparate Impact"}
                </span>
              </div>
              {(() => {
                const key = focusedLoop ?? focusedFC ?? (showHM ? "hm" : null);
                const desc = key ? LOOP_DESC[key] : null;
                return desc ? <div className="nlp-desc">{desc}</div> : null;
              })()}
            </div>
            <div className="nlp-list">
              {focusedNodeList.map(n => (
                <div
                  key={n.id}
                  className={`nlp-item ${hoveredNode === n.id ? "active" : ""}`}
                  onMouseEnter={() => setHoveredNode(n.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  <span className="nlp-id">{n.id}</span>
                  <span className="nlp-name">{n.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}


        {/* ── Utility icons — bottom-right ──────────────── */}
        <div className="utility-panel">
          <button
            className={`utility-btn ${hasFocus ? "" : "active"}`}
            onClick={() => setRecenterKey(k => k + 1)}
            title="Re-center on selection"
          >
            <Crosshair size={16} strokeWidth={1.6} />
          </button>
          <button
            className={`utility-btn ${showAmbientEdges ? "active" : ""}`}
            onClick={() => setShowAmbientEdges(v => !v)}
            title={showAmbientEdges ? "Hide edges" : "Show edges"}
          >
            <Share2 size={16} strokeWidth={1.6} />
          </button>
        </div>

        {/* ── Bottom macOS bar ───────────────────────────── */}
        <div className="bottom-bar">

          {/* Loops */}
          <div className="bar-section bar-tab-wrap">
            <div className="bar-tip">
              <div className="bar-tip-title">Feedback Loops</div>
              <div className="bar-tip-body">Closed causal chains that reinforce (R) or balance (B) themselves. The core dynamic structures of the system.</div>
            </div>
            <button
              className={`bar-tab ${showLoopPopover ? "active" : ""}`}
              onClick={() => { setShowLoopPopover(v => !v); setShowChainPopover(false); }}
            >
              Loops <span className="bar-count">10</span>
            </button>
            {showLoopPopover && (
              <div className="bar-popover">
                {LOOPS_DISPLAY.map(l => (
                  <button
                    key={l.cldId}
                    className={`popover-item ${focusedLoop === l.cldId ? "active" : ""}`}
                    onClick={() => { handleFocusLoop(l.cldId); setShowLoopPopover(false); }}
                  >
                    <span className="pi-type">{l.type}</span>
                    <span className="pi-id">{l.displayId}</span>
                    <span className="pi-name">{l.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Forcing Chains */}
          <div className="bar-section bar-tab-wrap">
            <div className="bar-tip">
              <div className="bar-tip-title">Forcing Chains</div>
              <div className="bar-tip-body">Open causal chains missing one closure edge. The gap reveals where the system has no self-correcting mechanism.</div>
            </div>
            <button
              className={`bar-tab ${showChainPopover ? "active" : ""}`}
              onClick={() => { setShowChainPopover(v => !v); setShowLoopPopover(false); }}
            >
              Forcing Chains <span className="bar-count">5</span>
            </button>
            {showChainPopover && (
              <div className="bar-popover">
                {(G.forcingChains as ForcingChain[] ?? []).map(fc => (
                  <button
                    key={fc.id}
                    className={`popover-item ${focusedFC === fc.id ? "active" : ""}`}
                    onClick={() => { handleFocusFC(fc.id); setShowChainPopover(false); }}
                  >
                    <span className="pi-id">{fc.id}</span>
                    <span className="pi-name">{fc.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* HM */}
          <div className="bar-tab-wrap">
            <div className="bar-tip">
              <div className="bar-tip-title">Harm Mechanism</div>
              <div className="bar-tip-body">ELL disparate-impact subgraph — 5 vulnerability channels converging on ELL students through AI detection, locked in a reinforcing loop.</div>
            </div>
            <button
              className={`bar-tab ${showHM ? "active" : ""}`}
              onClick={handleToggleHM}
            >
              Harm Mechanism
            </button>
          </div>

        </div>
      </div>

      {/* ── Hero overlay ──────────────────────────────────── */}
      {!heroGone && (
        <div
          style={{
            position: "absolute", inset: 0,
            opacity: heroOpacity, zIndex: 10,
            pointerEvents: heroOpacity < 0.05 ? "none" : "auto",
            background: "var(--ix-bg)",
            cursor: "pointer",
          }}
          onClick={startTransition}
        >
          <ParticleHero progress={progress}>
            <section className="hero">
              <p className="hero-label">IXDS 709 · Systems Analysis · SCAD 2026</p>
              <h1>
                The Fix That<br />
                <em>Makes It Worse</em>
              </h1>
              <p className="hero-sub">
                A causal loop analysis of how AI is reshaping trust, skill, and
                assessment in art + design education — and why the instinctive
                institutional response amplifies every harm.
              </p>
              <div className="hero-meta">
                <span>88 variables</span>
                <span className="hero-meta-dot">·</span>
                <span>188 edges</span>
                <span className="hero-meta-dot">·</span>
                <span>13 feedback loops</span>
                <span className="hero-meta-dot">·</span>
                <span>3 control clusters</span>
              </div>
              <div className="ix-hero-down">
                <span>Click to enter</span>
                <span aria-hidden="true">↓</span>
              </div>
            </section>
          </ParticleHero>
        </div>
      )}
    </div>
  );
}

"use client";

import { useRef, useCallback, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Line, Html } from "@react-three/drei";
import * as THREE from "three";
import type { GraphData, GraphEdge, GraphLoop, GraphSegment, ForcingChain } from "./types";
import graphData from "./graph.json";

const G = graphData as GraphData;

// ── index maps (module-level, static) ────────────────────

const nodeById  = new Map<string, (typeof G.nodes)[0]>();
const loopById  = new Map<string, GraphLoop>();
const segById   = new Map<string, GraphSegment>();
const edgeById  = new Map<string, GraphEdge>();
const fcById    = new Map<string, ForcingChain>();
for (const n of G.nodes)          nodeById.set(n.id, n);
for (const l of G.loops)          loopById.set(l.id, l);
for (const s of (G.segments ?? [])) segById.set(s.id, s);
for (const e of G.edges)          edgeById.set(e.id, e);
for (const f of (G.forcingChains as ForcingChain[] ?? [])) fcById.set(f.id, f);

const GOLD = "#E8B847";

const SEG_COUNT = (G.segments ?? []).length;

// ── design tokens ─────────────────────────────────────────

const C = {
  bg:        new THREE.Color("#F7F3EC"),
  bgFog:     new THREE.Color("#F2ECE2"),
  ink:       new THREE.Color("#211C15"),
  inkFaint:  new THREE.Color("#C7BDAD"),
  accent:    new THREE.Color("#3A4A8C"),
  edgeFaint: new THREE.Color("#C7BDAD"),
  layer: {
    mental:     new THREE.Color("#3A4A8C"),
    structures: new THREE.Color("#4A4035"),
    patterns:   new THREE.Color("#857A68"),
    events:     new THREE.Color("#B0A896"),
    boundary:   new THREE.Color("#CEC7BC"),
  } as Record<string, THREE.Color>,
};

// Camera home — pulled back to see the expanded galaxy field
const HOME_POS  = new THREE.Vector3(10, 14, 95);
const HOME_TGT  = new THREE.Vector3(0, 0, 0);

// ── shared module-level geometry (never recreated) ────────

// Hollow arrowhead: EdgesGeometry must be in <lineSegments>, not <mesh>
const _hollowArrowGeo = new THREE.EdgesGeometry(
  new THREE.ConeGeometry(0.14, 0.3, 8)
);

// ── node scale helper ────────────────────────────────────

const MAX_SAT = 30;

function getScale(sat: number, boundary: boolean, hovered: boolean): number {
  const t  = Math.min(sat / MAX_SAT, 1);
  // Star size: bigger range so high-saturation nodes look like giant stars
  const s  = 0.28 + t * t * 0.72;
  const bm = boundary ? 0.65 : 1.0;
  const hm = hovered  ? 1.5  : 1.0;
  return s * bm * hm;
}


// ── Scene ─────────────────────────────────────────────────

function Scene({
  focusedLoop,
  focusedNode,
  hoveredNode,
  showAmbientEdges,
  focusedFC,
  showHM,
  recenterKey,
  onHoverNode,
  onClearHover,
  onFocusLoop,
  onFocusNode,
}: {
  focusedLoop: string | null;
  focusedNode: string | null;
  hoveredNode: string | null;
  showAmbientEdges: boolean;
  focusedFC: string | null;
  showHM: boolean;
  recenterKey: number;
  onHoverNode: (id: string | null) => void;
  onClearHover: () => void;
  onFocusLoop: (id: string | null) => void;
  onFocusNode: (id: string | null) => void;
  onClear: () => void;
}) {
  const meshRef        = useRef<THREE.InstancedMesh>(null);
  const segMeshRef     = useRef<THREE.InstancedMesh>(null);
  const controlsRef    = useRef<any>(null);
  const dummy          = useRef(new THREE.Object3D()).current;
  const dummy2         = useRef(new THREE.Object3D()).current;
  const tempColor      = useRef(new THREE.Color()).current;
  const tempColor2     = useRef(new THREE.Color()).current;
  const cameraArrived  = useRef(false);
  const { camera } = useThree();

  // ── focus sets ───────────────────────────────────────

  const { focusedNodeIds, focusedEdgeIds, centroid, focusRadius, startNodeId, startNodePos } = useMemo(() => {
    const nSet = new Set<string>();
    const eSet = new Set<string>();
    let cx = 0, cy = 0, cz = 0;

    if (focusedLoop) {
      const loop = loopById.get(focusedLoop);
      if (loop) {
        for (const v of loop.nodes) nSet.add(v);
        for (const e of loop.edges) eSet.add(e);
      }
    }
    if (focusedNode) {
      nSet.add(focusedNode);
      const n = nodeById.get(focusedNode);
      if (n) {
        for (const lid of n.loops) {
          const loop = loopById.get(lid);
          if (loop) {
            for (const v of loop.nodes) nSet.add(v);
            for (const e of loop.edges) eSet.add(e);
          }
        }
      }
    }
    if (focusedFC) {
      const fc = fcById.get(focusedFC);
      if (fc) {
        for (const v of fc.nodes) nSet.add(v);
        for (const eid of fc.edgeIds) eSet.add(eid);
      }
    }
    if (showHM && G.hmSubgraph) {
      for (const v of G.hmSubgraph.nodes) nSet.add(v);
      for (const eid of G.hmSubgraph.edges) eSet.add(eid);
    }

    const pts = [...nSet].map(id => nodeById.get(id)!.pos).filter(Boolean);
    if (pts.length) {
      cx = pts.reduce((s, p) => s + p.x, 0) / pts.length;
      cy = pts.reduce((s, p) => s + p.y, 0) / pts.length;
      cz = pts.reduce((s, p) => s + p.z, 0) / pts.length;
    }

    const c = new THREE.Vector3(cx, cy, cz);
    const maxR = pts.length
      ? Math.max(8, ...pts.map(p => new THREE.Vector3(p.x, p.y, p.z).distanceTo(c)))
      : 8;

    const startId = focusedLoop
      ? (loopById.get(focusedLoop)?.nodes[0] ?? null)
      : null;
    const startNode = startId ? nodeById.get(startId) ?? null : null;

    return {
      focusedNodeIds: nSet,
      focusedEdgeIds: eSet,
      centroid: c,
      focusRadius: maxR,
      startNodeId: startId,
      startNodePos: startNode
        ? new THREE.Vector3(startNode.pos.x, startNode.pos.y, startNode.pos.z)
        : null,
    };
  }, [focusedLoop, focusedNode, focusedFC, showHM]);

  const hasFocus = focusedLoop !== null || focusedNode !== null || focusedFC !== null || showHM;

  // ── update star (variable node) instancedMesh ────────

  useFrame(() => {
    const mesh = meshRef.current;
    if (!mesh) return;

    for (let i = 0; i < G.nodes.length; i++) {
      const node    = G.nodes[i];
      const focused = focusedNodeIds.has(node.id);
      const hovered = hoveredNode === node.id;
      const isStart = node.id === startNodeId;
      const baseS   = getScale(node.saturation, node.boundary, hovered);

      if (!hasFocus || focused) {
        tempColor.copy(C.layer[node.layerKey] ?? C.ink);
        if (hovered) tempColor.multiplyScalar(0.72);
      } else {
        tempColor.copy(C.layer[node.layerKey] ?? C.ink).lerp(C.bg, 0.65);
      }
      dummy.scale.setScalar(baseS);
      mesh.setColorAt(i, tempColor);

      dummy.position.set(node.pos.x, node.pos.y, node.pos.z);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    }

    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    mesh.instanceMatrix.needsUpdate = true;
  });

  // ── update planet (segment) instancedMesh — animated orbits ──

  useFrame(({ clock }) => {
    const mesh = segMeshRef.current;
    if (!mesh || SEG_COUNT === 0) return;
    const segs = G.segments!;
    const t    = clock.getElapsedTime();

    for (let i = 0; i < segs.length; i++) {
      const seg     = segs[i];
      const inFocus = hasFocus && seg.variableIds.some(vid => focusedNodeIds.has(vid));
      const parent   = seg.parentVarId ? nodeById.get(seg.parentVarId) : null;
      const isOrphan = !seg.parentVarId;

      // Orphans drift very slowly; grounded segments use Kepler timing
      const omega = isOrphan
        ? 0.008 / Math.sqrt(seg.orbitRadius)   // ~10× slower
        : 0.08  / Math.sqrt(seg.orbitRadius);
      const angle = seg.orbitPhase + t * omega;

      const ox = seg.orbitRadius * Math.cos(angle);
      const oy = seg.orbitRadius * Math.sin(angle) * Math.sin(seg.orbitTilt);
      const oz = seg.orbitRadius * Math.sin(angle) * Math.cos(seg.orbitTilt);

      // Orphans orbit origin; grounded orbit their parent node
      const px = (parent?.pos.x ?? 0) + ox;
      const py = (parent?.pos.y ?? 0) + oy;
      const pz = (parent?.pos.z ?? 0) + oz;

      const baseS = 0.12; // unified size
      let s: number;

      if (!hasFocus) {
        tempColor2.copy(C.layer.patterns).lerp(C.bg, isOrphan ? 0.30 : 0.45);
        s = baseS * (isOrphan ? 1.6 : 1.0);
      } else if (inFocus) {
        tempColor2.copy(C.layer.patterns).lerp(C.bg, 0.10);
        s = baseS * 1.4;
      } else {
        tempColor2.copy(C.layer.patterns).lerp(C.bg, 0.88);
        s = baseS * 0.5;
      }
      mesh.setColorAt(i, tempColor2);

      dummy2.position.set(px, py, pz);
      dummy2.scale.setScalar(s);
      dummy2.updateMatrix();
      mesh.setMatrixAt(i, dummy2.matrix);
    }

    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    mesh.instanceMatrix.needsUpdate = true;
  });

  // ── camera fly-to on focus change ────────────────────
  // Fires once per focus change, then hands full control back to OrbitControls.
  // Never fights the user: no continuous lerp, no manual ctrl.update().

  const prevFocus       = useRef<string | null>(null);
  const flyStartTime    = useRef<number>(0);
  const prevRecenterKey = useRef(0);
  const flyingHome      = useRef(false);

  useFrame(({ clock }, dt) => {
    const ctrl = controlsRef.current;
    if (!ctrl) return;

    const currentFocus = focusedLoop ?? focusedNode ?? focusedFC ?? (showHM ? "hm" : null);
    if (currentFocus !== prevFocus.current) {
      cameraArrived.current = false;
      flyStartTime.current  = clock.getElapsedTime();
      prevFocus.current     = currentFocus;
      flyingHome.current    = false;
    }
    // Crosshair button: fly to global origin regardless of selection
    if (recenterKey !== prevRecenterKey.current) {
      cameraArrived.current  = false;
      flyStartTime.current   = clock.getElapsedTime();
      prevRecenterKey.current = recenterKey;
      flyingHome.current     = true;
    }

    if ((hasFocus || flyingHome.current) && !cameraArrived.current) {
      ctrl.autoRotate = false;

      let goal: THREE.Vector3;
      let target: THREE.Vector3;

      if (flyingHome.current) {
        // Crosshair: fly back to home position, orbit around origin
        goal   = HOME_POS.clone();
        target = HOME_TGT.clone();
      } else if (showHM) {
        // HM spans the whole sphere — pull back from current direction to show all nodes
        const camDir = camera.position.clone().normalize();
        if (camDir.lengthSq() < 0.05) camDir.set(0, 0.2, 1).normalize();
        goal   = camDir.multiplyScalar(75);
        target = new THREE.Vector3(0, 0, 0);
      } else {
        const outDir = centroid.clone().normalize();
        if (outDir.lengthSq() < 0.05) outDir.set(0, 0.2, 1).normalize();
        const pullback = focusRadius * 1.6 + 10;
        goal   = centroid.clone().addScaledVector(outDir, pullback);
        goal.y += focusRadius * 0.25;
        target = centroid;
      }

      camera.position.lerp(goal, dt * 1.8);
      ctrl.target.lerp(target, dt * 1.8);

      const arrivalThreshold = flyingHome.current ? 2.0 : Math.max(2.0, focusRadius * 0.08);
      const elapsed = clock.getElapsedTime() - flyStartTime.current;
      if (camera.position.distanceTo(goal) < arrivalThreshold || elapsed > 2.5) {
        cameraArrived.current = true;
        if (flyingHome.current) flyingHome.current = false;
      }
    } else if (!hasFocus) {
      ctrl.autoRotate = true;
    }
    // ⚠ Do NOT call ctrl.update() — OrbitControls' own useFrame handles it.
  });

  // ── pointer events ───────────────────────────────────

  const onMove = useCallback((e: any) => {
    e.stopPropagation();
    if (e.instanceId != null) {
      const n = G.nodes[e.instanceId];
      if (n) onHoverNode(n.id);
    }
  }, [onHoverNode]);

  const onClick = useCallback((e: any) => {
    e.stopPropagation();
    if (e.instanceId != null) {
      const n = G.nodes[e.instanceId];
      if (!n) return;
      if (n.loops.length > 0) onFocusLoop(n.loops[0]);
      else onFocusNode(n.id);
    }
  }, [onFocusLoop, onFocusNode]);



  // ── edges ────────────────────────────────────────────

  const ambientEdges = useMemo(() => {
    if (!showAmbientEdges) return [];
    return hasFocus
      ? G.edges.filter(e => !focusedEdgeIds.has(e.id))
      : G.edges;
  }, [showAmbientEdges, hasFocus, focusedEdgeIds]);

  const focusedEdges = useMemo(() => {
    if (!hasFocus) return [];
    return G.edges.filter(e => focusedEdgeIds.has(e.id));
  }, [hasFocus, focusedEdgeIds]);

  // FC closure edges (inferred, not in G.edges)
  const fcClosureEdges = useMemo(() => {
    if (!focusedFC) return [];
    return fcById.get(focusedFC)?.closureEdges ?? [];
  }, [focusedFC]);

  // HM loop edge IDs (rendered thicker)
  const hmLoopEdgeSet = useMemo(() => new Set(G.hmSubgraph?.loopEdgeIds ?? []), []);

  // ── labels to render ─────────────────────────────────

  const labelNodes = useMemo(
    () => G.nodes.filter(n =>
      n.id === hoveredNode ||
      n.id === focusedNode ||
      (hasFocus && focusedNodeIds.has(n.id))
    ),
    [hoveredNode, focusedNode, hasFocus, focusedNodeIds]
  );

  return (
    <group>
      {/* depth fog — adjusted for expanded galaxy field */}
      <fog attach="fog" args={[C.bgFog, 55, 180]} />


      {/* ambient edge web — ultra-faint */}
      {ambientEdges.map(e => (
        <AmbientEdge key={e.id} edge={e} />
      ))}

      {/* focused edges with directed arrowheads + polarity */}
      {focusedEdges.map(e => (
        <FocusEdge key={e.id} edge={e} thick={showHM && hmLoopEdgeSet.has(e.id)} />
      ))}

      {/* flow particles along focused edges */}
      {focusedEdges.map(e => {
        const isR = e.loops.some(lid => loopById.get(lid)?.type === "R");
        return <FlowParticles key={`flow-${e.id}`} edge={e} isR={isR} />;
      })}

      {/* FC inferred closure edges — dashed gold */}
      {fcClosureEdges.map((ce, i) => (
        <FCClosureEdge key={i} from={ce.from} to={ce.to} polarity={ce.polarity} />
      ))}

      {/* loop entry node — pulsing wireframe halo + label */}
      {startNodePos && (() => {
        const sn    = nodeById.get(startNodeId!)!;
        const baseR = getScale(sn.saturation, sn.boundary, false);
        const haloR = baseR + 0.55;
        const col   = C.layer[sn.layerKey] ?? C.ink;
        return (
          <group position={startNodePos}>
            <mesh>
              <sphereGeometry args={[haloR, 24, 12]} />
              <meshBasicMaterial
                color={col}
                wireframe
                transparent
                opacity={0.35}
              />
            </mesh>
          </group>
        );
      })()}

      {/* segment satellite nodes — visual only, no raycasting */}
      {SEG_COUNT > 0 && (
        <instancedMesh
          ref={segMeshRef}
          args={[undefined, undefined, SEG_COUNT]}
          frustumCulled={false}
          raycast={() => {}}
        >
          <sphereGeometry args={[1, 16, 8]} />
          <meshBasicMaterial />
        </instancedMesh>
      )}

      {/* warm glow halos for focused nodes */}
      {hasFocus && [...focusedNodeIds].map(vid => {
        const node = nodeById.get(vid);
        if (!node) return null;
        const s = getScale(node.saturation, node.boundary, false);
        return (
          <mesh key={`glow-${vid}`} position={[node.pos.x, node.pos.y, node.pos.z]} raycast={() => {}}>
            <sphereGeometry args={[s * 2.4, 16, 8]} />
            <meshStandardMaterial
              color="#F5E8C8"
              emissive="#EAD5A0"
              emissiveIntensity={0.55}
              transparent
              opacity={0.14}
              depthWrite={false}
            />
          </mesh>
        );
      })}

      {/* instanced smooth spheres — the nodes */}
      <instancedMesh
        ref={meshRef}
        args={[undefined, undefined, G.nodes.length]}
        onPointerMove={onMove}
        onPointerLeave={onClearHover}
        onClick={onClick}
        frustumCulled={false}
      >
        <sphereGeometry args={[1, 40, 20]} />
        <meshBasicMaterial />
      </instancedMesh>

      {/* labels — ID + name for hovered/focused nodes */}
      {labelNodes.map(n => {
        const isHovered = n.id === hoveredNode;
        const isFocused = hasFocus && focusedNodeIds.has(n.id);
        return (
          <Html
            key={n.id}
            position={[n.pos.x, n.pos.y + getScale(n.saturation, n.boundary, false) + 0.35, n.pos.z]}
            center
            zIndexRange={[10, 20]}
            style={{ pointerEvents: "none" }}
          >
            <div
              style={{
                fontFamily: "var(--font-ibm-mono, var(--font-dm-mono, monospace))",
                fontSize: "10px",
                color: C.ink.getStyle(),
                background: "rgba(247,243,236,0.92)",
                padding: "3px 7px",
                borderRadius: "5px",
                border: "1px solid rgba(224,216,203,0.7)",
                whiteSpace: "nowrap",
                lineHeight: 1.5,
                boxShadow: "0 1px 4px rgba(33,28,21,0.06)",
              }}
            >
              <span style={{ fontWeight: 700, letterSpacing: "0.04em" }}>{n.id}</span>
              {isHovered && (
                <div style={{ fontSize: "9px", opacity: 0.65, maxWidth: "180px", whiteSpace: "normal", lineHeight: 1.4, marginTop: 1 }}>
                  {n.name}
                </div>
              )}
            </div>
          </Html>
        );
      })}

      <OrbitControls
        ref={controlsRef}
        autoRotate
        autoRotateSpeed={0.18}
        enableDamping
        dampingFactor={0.055}
        minDistance={4}
        maxDistance={200}
        enablePan={false}
      />
    </group>
  );
}

// ── curveControl ─────────────────────────────────────────
// Deterministic bezier control point for a given edge.
// Uses the edge number as a seed so every edge curves in a unique
// but stable direction. Amplitude scales with edge length so short
// edges don't over-curve.

function curveControl(
  fromV: THREE.Vector3,
  toV: THREE.Vector3,
  edgeId: string,
): THREE.Vector3 {
  const mid = new THREE.Vector3().addVectors(fromV, toV).multiplyScalar(0.5);

  const edgeDir = new THREE.Vector3().subVectors(toV, fromV);
  const edgeLen = edgeDir.length();
  edgeDir.normalize();

  // perpendicular axis in 3D (cross with world-up; fall back to world-right)
  const up = new THREE.Vector3(0, 1, 0);
  let perp = new THREE.Vector3().crossVectors(edgeDir, up);
  if (perp.lengthSq() < 0.01) {
    perp = new THREE.Vector3().crossVectors(edgeDir, new THREE.Vector3(1, 0, 0));
  }
  perp.normalize();

  // second perpendicular (in-plane with the edge and first perp)
  const perp2 = new THREE.Vector3().crossVectors(edgeDir, perp).normalize();

  // deterministic seed from edge number (E001 → 1, E189 → 189)
  const seed = parseInt(edgeId.replace(/\D/g, ""), 10) || 1;
  const angle = seed * 2.399963; // golden angle in radians → good spread
  const sign  = seed % 2 === 0 ? 1 : -1;

  // amplitude: 38% of edge length, capped at 18 world units (scene is now ~100 units wide)
  const amp = Math.min(edgeLen * 0.38, 18) * sign;

  return mid
    .clone()
    .addScaledVector(perp,  Math.cos(angle) * amp)
    .addScaledVector(perp2, Math.sin(angle) * amp * 0.7);
}

// ── AmbientEdge ───────────────────────────────────────────
// Ultra-faint curved arc; all 185 drawn at rest.

function AmbientEdge({ edge }: { edge: GraphEdge }) {
  const from = nodeById.get(edge.from);
  const to   = nodeById.get(edge.to);
  if (!from || !to) return null;

  const points = useMemo(() => {
    const fromV = new THREE.Vector3(from.pos.x, from.pos.y, from.pos.z);
    const toV   = new THREE.Vector3(to.pos.x,   to.pos.y,   to.pos.z);
    const ctrl  = curveControl(fromV, toV, edge.id);
    return new THREE.QuadraticBezierCurve3(fromV, ctrl, toV).getPoints(14);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [from.pos.x, from.pos.y, from.pos.z, to.pos.x, to.pos.y, to.pos.z]);

  return (
    <Line
      points={points}
      color={C.ink.getStyle()}
      lineWidth={0.6}
      transparent
      opacity={0.10}
    />
  );
}

// ── FocusEdge ─────────────────────────────────────────────
// Directed, signed curved edge in ink/accent with arrowhead + polarity glyph.
// R-loop → filled solid cone arrowhead in ink
// B-loop → hollow outline cone (lineSegments) in ink

function FocusEdge({ edge, thick = false }: { edge: GraphEdge; thick?: boolean }) {
  const from = nodeById.get(edge.from);
  const to   = nodeById.get(edge.to);
  if (!from || !to) return null;

  const isR = edge.loops.some(lid => loopById.get(lid)?.type === "R");

  const curveData = useMemo(() => {
    const fromV = new THREE.Vector3(from.pos.x, from.pos.y, from.pos.z);
    const toV   = new THREE.Vector3(to.pos.x,   to.pos.y,   to.pos.z);
    const ctrl  = curveControl(fromV, toV, edge.id);
    const curve = new THREE.QuadraticBezierCurve3(fromV, ctrl, toV);

    const points  = curve.getPoints(24);
    const cLen    = curve.getLength();

    // place arrowhead at t where curve is ~1 node-radius before target
    const toScale = getScale(to.saturation, to.boundary, false);
    const tArrow  = Math.max(0, 1 - (toScale + 0.25) / Math.max(cLen, 0.01));
    const arrowPos  = curve.getPoint(tArrow);
    const arrowTan  = curve.getTangent(tArrow);

    // polarity glyph at curve midpoint, slightly lifted
    const midPt  = curve.getPoint(0.5);
    midPt.y += 0.3;

    // quaternion: align cone Y-axis with tangent at arrow tip
    const quat = new THREE.Quaternion();
    quat.setFromUnitVectors(new THREE.Vector3(0, 1, 0), arrowTan.normalize());

    return { points, arrowPos, midPt, quat };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [from.pos.x, from.pos.y, from.pos.z, to.pos.x, to.pos.y, to.pos.z]);

  const lineColor = isR ? C.ink.getStyle() : C.accent.getStyle();

  return (
    <group>
      {/* curved edge — dashed only if polarity is contingent, thicker for HM loop edges */}
      <Line
        points={curveData.points}
        color={lineColor}
        lineWidth={thick ? 2.5 : 1.5}
        dashed={edge.polarity === "contingent"}
        dashScale={edge.polarity === "contingent" ? 1 : undefined}
        gapSize={edge.polarity === "contingent" ? 0.5 : undefined}
      />

      {/* arrowhead, oriented along the curve tangent */}
      {isR ? (
        <mesh position={curveData.arrowPos} quaternion={curveData.quat}>
          <coneGeometry args={[0.13, 0.3, 8]} />
          <meshBasicMaterial color={C.ink} />
        </mesh>
      ) : (
        <lineSegments position={curveData.arrowPos} quaternion={curveData.quat}>
          <primitive object={_hollowArrowGeo} attach="geometry" />
          <lineBasicMaterial color={C.ink.getStyle()} />
        </lineSegments>
      )}

      {/* polarity glyph at curve midpoint */}
      <Html position={curveData.midPt} center style={{ pointerEvents: "none" }}>
        <span
          style={{
            fontFamily: "var(--font-ibm-mono, monospace)",
            fontSize: "11px",
            fontWeight: 700,
            lineHeight: "16px",
            padding: "0 4px",
            color:      C.ink.getStyle(),
            background: "rgba(247,243,236,0.88)",
            borderRadius: "3px",
            border: "1px solid rgba(199,189,173,0.55)",
          }}
        >
          {edge.polarity === "+" ? "+" : edge.polarity === "-" ? "−" : "±"}
        </span>
      </Html>
    </group>
  );
}

// ── FCClosureEdge ─────────────────────────────────────────
// Inferred closure edge — dashed gold, signals structural gap

function FCClosureEdge({ from: fromId, to: toId, polarity }: {
  from: string; to: string; polarity: string;
}) {
  const from = nodeById.get(fromId);
  const to   = nodeById.get(toId);
  if (!from || !to) return null;

  const points = useMemo(() => {
    const fromV = new THREE.Vector3(from.pos.x, from.pos.y, from.pos.z);
    const toV   = new THREE.Vector3(to.pos.x,   to.pos.y,   to.pos.z);
    const ctrl  = curveControl(fromV, toV, `cl-${fromId}-${toId}`);
    return new THREE.QuadraticBezierCurve3(fromV, ctrl, toV).getPoints(20);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [from.pos.x, from.pos.y, from.pos.z, to.pos.x, to.pos.y, to.pos.z]);

  const midPt = useMemo(() => {
    const fromV = new THREE.Vector3(from.pos.x, from.pos.y, from.pos.z);
    const toV   = new THREE.Vector3(to.pos.x,   to.pos.y,   to.pos.z);
    const ctrl  = curveControl(fromV, toV, `cl-${fromId}-${toId}`);
    const mid   = new THREE.QuadraticBezierCurve3(fromV, ctrl, toV).getPoint(0.5);
    mid.y += 0.3;
    return mid;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [from.pos.x, from.pos.y, from.pos.z, to.pos.x, to.pos.y, to.pos.z]);

  return (
    <group>
      <Line
        points={points}
        color={GOLD}
        lineWidth={1.5}
        dashed
        dashScale={1}
        gapSize={0.4}
        transparent
        opacity={0.85}
      />
      <Html position={midPt} center style={{ pointerEvents: "none" }}>
        <span style={{
          fontFamily: "var(--font-ibm-mono, monospace)",
          fontSize: "10px", fontWeight: 700,
          padding: "0 4px",
          color: "#8A5E10",
          background: "rgba(254,248,224,0.92)",
          borderRadius: "3px",
          border: "1px solid rgba(232,184,71,0.5)",
        }}>
          {polarity === "+" ? "+" : polarity === "-" ? "−" : "±"}?
        </span>
      </Html>
    </group>
  );
}

// ── FlowParticles ─────────────────────────────────────────
// 3 staggered particles that travel from→to along the bezier curve.
// They fade in/out near the endpoints (sin envelope) so they don't pop.

function FlowParticles({ edge, isR }: { edge: GraphEdge; isR: boolean }) {
  const from = nodeById.get(edge.from);
  const to   = nodeById.get(edge.to);
  if (!from || !to) return null;

  const NUM   = 3;
  const SPEED = 0.22; // full traversal ≈ 4.5 s

  const pRef  = useRef<THREE.InstancedMesh>(null);
  const dummy = useRef(new THREE.Object3D()).current;

  const curve = useMemo(() => {
    const fv = new THREE.Vector3(from.pos.x, from.pos.y, from.pos.z);
    const tv = new THREE.Vector3(to.pos.x,   to.pos.y,   to.pos.z);
    return new THREE.QuadraticBezierCurve3(fv, curveControl(fv, tv, edge.id), tv);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [from.pos.x, from.pos.y, from.pos.z, to.pos.x, to.pos.y, to.pos.z]);

  useFrame(({ clock }) => {
    const mesh = pRef.current;
    if (!mesh) return;
    const t = clock.getElapsedTime() * SPEED;

    for (let i = 0; i < NUM; i++) {
      const progress = (t + i / NUM) % 1;
      // sin envelope: smooth fade-in at 0, fade-out at 1
      const fade = Math.sin(progress * Math.PI);
      const pos  = curve.getPoint(progress);
      dummy.position.copy(pos);
      dummy.scale.setScalar(0.12 * fade);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    }
    mesh.instanceMatrix.needsUpdate = true;
  });

  const color = isR ? C.ink : C.accent;

  return (
    <instancedMesh ref={pRef} args={[undefined, undefined, NUM]} frustumCulled={false}>
      <sphereGeometry args={[1, 8, 4]} />
      <meshBasicMaterial color={color} transparent opacity={0.82} depthWrite={false} />
    </instancedMesh>
  );
}

// ── Public component ──────────────────────────────────────

export interface UniverseProps {
  focusedLoop:    string | null;
  focusedNode:    string | null;
  hoveredNode:    string | null;
  showAmbientEdges: boolean;
  focusedFC:      string | null;
  showHM:         boolean;
  recenterKey:    number;
  onHoverNode:    (id: string | null) => void;
  onClearHover:   () => void;
  onFocusLoop:    (id: string | null) => void;
  onFocusNode:    (id: string | null) => void;
  onClear:        () => void;
}

export default function Universe(props: UniverseProps) {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{
        position: [10, 14, 95],
        fov: 55,
        near: 0.5,
        far: 250,
      }}
      gl={{ antialias: true, alpha: false }}
      style={{ background: C.bg.getStyle() }}
      onCreated={({ gl }) => { gl.setClearColor(C.bg); }}
      onPointerMissed={() => props.onClear()}
    >
      <Scene {...props} />
    </Canvas>
  );
}

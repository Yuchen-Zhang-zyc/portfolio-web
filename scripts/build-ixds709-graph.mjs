#!/usr/bin/env node
/**
 * build-ixds709-graph.mjs
 * Reads canonical CSVs + 04_cld.md from the school directory,
 * computes deterministic 3D layout, and emits graph.json.
 *
 * Usage: node scripts/build-ixds709-graph.mjs
 * Output: src/app/projects/ixds709/graph.json
 */

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO = resolve(__dirname, "..");
const SCHOOL = "/Users/yuchenmacmini/Work/school/ixds709/personal";

// ── helpers ──────────────────────────────────────────────

/** Quote-aware CSV parse — handles fields with embedded commas, quotes, and newlines */
function parseCSV(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    const next = text[i + 1];

    if (inQuotes) {
      if (ch === '"') {
        if (next === '"') {
          field += '"';
          i++; // skip escaped quote
        } else {
          inQuotes = false;
        }
      } else {
        field += ch;
      }
    } else {
      if (ch === '"') {
        inQuotes = true;
      } else if (ch === ",") {
        row.push(field.trim());
        field = "";
      } else if (ch === "\n" || (ch === "\r" && next === "\n")) {
        row.push(field.trim());
        if (row.length > 1 || row[0] !== "") {
          rows.push(row);
        }
        row = [];
        field = "";
        if (ch === "\r") i++; // skip \n in \r\n
      } else if (ch === "\r") {
        row.push(field.trim());
        if (row.length > 1 || row[0] !== "") {
          rows.push(row);
        }
        row = [];
        field = "";
      } else {
        field += ch;
      }
    }
  }
  // flush last field
  if (field || row.length > 0) {
    row.push(field.trim());
    if (row.length > 1 || row[0] !== "") {
      rows.push(row);
    }
  }

  if (rows.length === 0) return { headers: [], data: [] };

  const headers = rows[0];
  const data = rows.slice(1).map((r) => {
    const obj = {};
    headers.forEach((h, idx) => {
      obj[h] = r[idx] ?? "";
    });
    return obj;
  });
  return { headers, data };
}

/** Mulberry32 PRNG — deterministic from a numeric seed */
function mulberry32(seed) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Numeric seed from a var_id like "V016" → 16 */
function seedFromId(id) {
  return parseInt(id.replace(/^V/, ""), 10);
}

/** Fibonacci sphere — distribute n points evenly on a sphere of given radius */
function fibonacciSphere(n, radius) {
  const points = [];
  const phi = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2; // -1 to 1
    const radiusAtY = Math.sqrt(1 - y * y);
    const theta = phi * i;
    points.push({
      x: Math.cos(theta) * radiusAtY * radius,
      y: y * radius,
      z: Math.sin(theta) * radiusAtY * radius,
    });
  }
  return points;
}

// ── layer config ─────────────────────────────────────────

const LAYER_RADII = {
  MM:  8,  // mental models — core
  St:  18, // structures
  Pa:  28, // patterns
  E:   38, // events — surface
  "-": 48, // boundary — outer ring
};

const LAYER_KEY = {
  E: "events",
  Pa: "patterns",
  St: "structures",
  MM: "mental",
  "-": "boundary",
};

// ── 1. Read CSVs ─────────────────────────────────────────

console.log("Reading CSVs...");

const varsRaw = readFileSync(
  resolve(SCHOOL, "research/02_variables.csv"),
  "utf-8"
);
const edgesRaw = readFileSync(
  resolve(SCHOOL, "research/03_coding_chart.csv"),
  "utf-8"
);
const routingRaw = readFileSync(
  resolve(SCHOOL, "research/04_pass_routing.csv"),
  "utf-8"
);

const varsCSV = parseCSV(varsRaw);
const edgesCSV = parseCSV(edgesRaw);
const routingCSV = parseCSV(routingRaw);

console.log(`  Variables: ${varsCSV.data.length} rows`);
console.log(`  Edges: ${edgesCSV.data.length} rows`);
console.log(`  Routing: ${routingCSV.data.length} rows`);

// Build routing lookup: var_id → { iceberg_layer, in_cycle, saturation }
const routingMap = {};
for (const r of routingCSV.data) {
  routingMap[r.var_id] = {
    iceberg_layer: r.iceberg_layer || "-",
    in_cycle: r.in_cycle === "yes",
    cycle_count: parseInt(r.cycle_count, 10) || 0,
    saturation: parseInt(r.saturation, 10) || 0,
  };
}

// ── 2. Build nodes ───────────────────────────────────────

console.log("Building nodes...");

const nodes = varsCSV.data.map((v) => {
  const route = routingMap[v.var_id] || {};
  const layer = route.iceberg_layer || "-";
  const saturation = route.saturation || parseInt(v.saturation_count, 10) || 0;
  return {
    id: v.var_id,
    name: v.name,
    layer,
    layerKey: LAYER_KEY[layer] || "boundary",
    saturation,
    hardOrSoft: v.hard_or_soft || "",
    inCycle: route.in_cycle ?? false,
    boundary: layer === "-",
    pos: { x: 0, y: 0, z: 0 },
    loops: [],
  };
});

// ── 3. Build edges ───────────────────────────────────────

console.log("Building edges...");

const edges = edgesCSV.data.map((e) => ({
  id: e.edge_id,
  from: e.cause_var,
  to: e.effect_var,
  polarity: e.polarity || "",
  delay: e.delay || "",
  scope: e.scope || "",
  loop: "",
  loops: [],
  segments: (e.source_segments || "")
    .split(";")
    .map((s) => s.trim())
    .filter(Boolean),
}));

// edge lookup: "from→to" → edge
const edgeLookup = {};
for (const e of edges) {
  edgeLookup[`${e.from}→${e.to}`] = e;
}

// ── 4. Parse 04_cld.md ───────────────────────────────────

console.log("Parsing 04_cld.md...");

const cldRaw = readFileSync(resolve(SCHOOL, "01_passes/04_cld.md"), "utf-8");

// 4a. Parse the edge-audit table (lines 517-533)
// Format: | CLD_I1 | E045, E048, ... | V016, V023, ... | P02_032, ... |
function parseEdgeAuditTable(text) {
  const loops = [];
  const headerMatch = text.match(/\*\*Closed-circle CLDs \(\d+ total.*?\) with edge audit:\*\*/);
  if (!headerMatch) {
    console.warn("  ⚠ Could not find edge-audit table");
    return loops;
  }
  const tableStart = headerMatch.index;

  const section = text.slice(tableStart);
  const lines = section.split("\n");

  for (const line of lines) {
    // Strip parenthetical annotations & markdown bold before matching,
    // so rows like | CLD_C1 (alt-form) | ... still parse correctly.
    const cleanLine = line.replace(/\*{1,3}/g, "").replace(/\([^)]*\)/g, "");
    const lineMatch = cleanLine.match(
      /^\|\s*(CLD_\w+)\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|/
    );
    if (lineMatch) {
      const id = lineMatch[1].trim();
      const edgesRaw = lineMatch[2].trim();
      const varsRaw = lineMatch[3].trim();

      // Extract edge IDs: "E045, E048, E049, E050 (via V023 mediator), E174..."
      const edgeIds = [
        ...new Set(edgesRaw.match(/E\d{3}/g) || []),
      ];

      // Extract var IDs: "V016, V023, V022, V024"
      const varIds = [
        ...new Set(varsRaw.match(/V\d{3}/g) || []),
      ];

      loops.push({ id, edgeIds, varIds });
    }
  }

  return loops;
}

// 4b. Determine R/B for each loop from the summary table
function parseRB(text) {
  const rb = {};
  // From summary table: | CLD_I1 | Individual | 4 | R | medium | Fully coded |
  const re = /^\|\s*(CLD_\w+)\s*\|[^|]+\|[^|]+\|\s*(R|B)\s*\|/gm;
  let m;
  while ((m = re.exec(text)) !== null) {
    rb[m[1]] = m[2];
  }
  return rb;
}

// 4c. Parse loop labels from CLD headers
function parseLabels(text) {
  const labels = {};
  // ### CLD_I1 · R2 Skill Atrophy (student-internal)
  const re = /^###\s+(CLD_\w+)\s*·\s*(.+?)(?:\s*\(|$)/gm;
  let m;
  while ((m = re.exec(text)) !== null) {
    labels[m[1]] = m[2].trim();
  }
  return labels;
}

// 4d. Parse loop coupling table (control clusters)
function parseClusters(text) {
  const clusters = [];
  const tableStart = text.indexOf(
    "| Control cluster | Host loop"
  );
  if (tableStart === -1) {
    console.warn("  ⚠ Could not find control-cluster table");
    return clusters;
  }

  const section = text.slice(tableStart);
  const lines = section.split("\n");

  for (const line of lines) {
    // | **C1 · Skill-atrophy regulation** | CLD_I1 ... | CLD_I2 ... + CLD_C3 ... | ... | ... |
    const m = line.match(
      /^\|\s*\*?\*?C(\d)\s*·\s*(.+?)\*?\*?\s*\|/
    );
    if (m) {
      const id = `C${m[1]}`;
      const label = m[2].trim();

      // Normalize line: strip parenthetical annotations and markdown formatting
      const cleanLine = line.replace(/\*{1,3}/g, "").replace(/\([^)]*\)/g, "");
      const cldIds = [...new Set(cleanLine.match(/CLD_\w+/g) || [])];

      // First CLD is host, rest are regulators
      const host = cldIds.slice(0, 1);
      const regulators = cldIds.slice(1);

      // Detect coupling type
      let coupling = "";
      if (line.includes("I2 shares entry node")) coupling = "shared-node";
      else if (line.includes("S4 shares node")) coupling = "shared-node";
      else if (line.includes("C4 seeds")) coupling = "edge-bridge";
      else coupling = "coupled";

      clusters.push({ id, label, host, regulators, coupling });
    }
  }

  return clusters;
}

// 4e. Parse R/B for specific loops from the R/B: lines
function parseDetailedRB(text) {
  const rb = {};
  // - **R/B:** 2 negatives → **R reinforcing**
  const sections = text.split(/^###\s+/gm);
  for (const section of sections) {
    const idMatch = section.match(/^(CLD_\w+)/);
    if (!idMatch) continue;
    const id = idMatch[1];
    const rbMatch = section.match(
      /\*\*R\/B:\*\*\s*(?:\d+\s*negatives?\s*→\s*)?\*\*(R|B)\s/
    );
    if (rbMatch) {
      rb[id] = rbMatch[1];
    }
  }
  return rb;
}

const auditLoops = parseEdgeAuditTable(cldRaw);
const rbSummary = parseRB(cldRaw);
const rbDetailed = parseDetailedRB(cldRaw);
const labels = parseLabels(cldRaw);
const clusters = parseClusters(cldRaw);

// Merge R/B: detailed takes precedence over summary
const loopRB = { ...rbSummary, ...rbDetailed };

console.log(`  Loops from edge-audit: ${auditLoops.length}`);
console.log(`  R/B assigned: ${Object.keys(loopRB).length}`);
console.log(`  Labels: ${Object.keys(labels).length}`);
console.log(`  Clusters: ${clusters.length}`);

// ── 5. Wire loops to nodes & edges ───────────────────────

console.log("Wiring loops...");

const loops = [];
const nodeLoopMap = {}; // V016 → [CLD_I1, CLD_I2, ...]
const edgeLoopMap = {}; // E045 → [CLD_I1, ...]

for (const al of auditLoops) {
  const type = loopRB[al.id] || "?";
  const label = labels[al.id] || al.id;

  // Validate var IDs
  const validVarIds = al.varIds.filter((vid) => {
    const found = nodes.find((n) => n.id === vid);
    if (!found) console.warn(`  ⚠ ${al.id}: var ${vid} not found in CSV`);
    return !!found;
  });

  // Validate edge IDs
  const validEdgeIds = al.edgeIds.filter((eid) => {
    const found = edges.find((e) => e.id === eid);
    if (!found) console.warn(`  ⚠ ${al.id}: edge ${eid} not found in CSV`);
    return !!found;
  });

  // Map speed from summary table
  let speed = "medium";
  const speedMatch = cldRaw
    .split(`CLD_${al.id.replace("CLD_", "")}`)[0]
    ?.match(/\*\*Speed:\*\*\s*(\w+)/);
  if (al.id === "CLD_I2" || al.id === "CLD_I4" || al.id === "CLD_C3")
    speed = "fast";
  else if (
    al.id === "CLD_I3" ||
    al.id === "CLD_S1" ||
    al.id === "CLD_S2" ||
    al.id === "CLD_S4" ||
    al.id === "CLD_S5" ||
    al.id === "CLD_S7" ||
    al.id === "CLD_S9"
  )
    speed = "slow";

  const loop = {
    id: al.id,
    label,
    type,
    speed,
    nodes: validVarIds,
    edges: validEdgeIds,
  };

  loops.push(loop);

  // Index
  for (const vid of validVarIds) {
    if (!nodeLoopMap[vid]) nodeLoopMap[vid] = [];
    nodeLoopMap[vid].push(al.id);
  }
  for (const eid of validEdgeIds) {
    if (!edgeLoopMap[eid]) edgeLoopMap[eid] = [];
    edgeLoopMap[eid].push(al.id);
  }
}

// Apply loops to nodes
for (const node of nodes) {
  node.loops = nodeLoopMap[node.id] || [];
}

// Apply loops to edges
for (const edge of edges) {
  edge.loops = edgeLoopMap[edge.id] || [];
  edge.loop = edge.loops[0] || "";
}

// ── 6. Deterministic 3D layout ────────────────────────────

console.log("Computing 3D layout...");

// Group nodes by layer
const layerGroups = {};
for (const node of nodes) {
  const l = node.layer;
  if (!layerGroups[l]) layerGroups[l] = [];
  layerGroups[l].push(node);
}

// For each layer, distribute on Fibonacci sphere + per-id jitter
for (const [layer, group] of Object.entries(layerGroups)) {
  const radius = LAYER_RADII[layer] || 15;
  const n = group.length;

  if (n === 0) continue;

  const basePoints = fibonacciSphere(n, radius);

  // Sort by loop membership fingerprint so co-loop nodes land on adjacent
  // Fibonacci helix positions → they end up close on the sphere.
  group.sort((a, b) => {
    const la = (nodeLoopMap[a.id] || []).sort().join("|");
    const lb = (nodeLoopMap[b.id] || []).sort().join("|");
    return la !== lb ? la.localeCompare(lb) : a.id.localeCompare(b.id);
  });

  for (let i = 0; i < group.length; i++) {
    const node = group[i];
    const base = basePoints[i];
    const rng = mulberry32(seedFromId(node.id));

    // Small per-node jitter (±8% of radius)
    const jitter = radius * 0.08;
    node.pos = {
      x: round3(base.x + (rng() - 0.5) * jitter * 2),
      y: round3(base.y + (rng() - 0.5) * jitter * 2),
      z: round3(base.z + (rng() - 0.5) * jitter * 2),
    };
  }
}

// ── 6.1. Cross-layer loop alignment ──────────────────────
// For loops that span multiple layers, nudge each member node's angular
// direction toward the loop's average direction so the loop path goes
// "inward through layers" rather than wrapping randomly around the sphere.

console.log("Aligning cross-layer loops...");

// Build nodePosLookup after positions are assigned
const nodePosLookup2 = {};
for (const n of nodes) nodePosLookup2[n.id] = n;

// Compute each loop's mean unit direction
const loopDirMap = {};
for (const loop of loops) {
  let dx = 0, dy = 0, dz = 0, count = 0;
  for (const nid of loop.nodes) {
    const n = nodePosLookup2[nid];
    if (!n) continue;
    const r = Math.sqrt(n.pos.x ** 2 + n.pos.y ** 2 + n.pos.z ** 2) || 1;
    dx += n.pos.x / r; dy += n.pos.y / r; dz += n.pos.z / r;
    count++;
  }
  if (count > 0) {
    const len = Math.sqrt(dx * dx + dy * dy + dz * dz) || 1;
    loopDirMap[loop.id] = { x: dx / len, y: dy / len, z: dz / len };
  }
}

const CROSS_BLEND = 0.45; // pull strength toward loop centroid direction

for (const node of nodes) {
  if (node.loops.length === 0) continue;
  const targetR = LAYER_RADII[node.layer] || 15;

  // Average target direction from all loops this node participates in
  let tx = 0, ty = 0, tz = 0;
  for (const lid of node.loops) {
    const d = loopDirMap[lid];
    if (d) { tx += d.x; ty += d.y; tz += d.z; }
  }
  const tLen = Math.sqrt(tx * tx + ty * ty + tz * tz) || 1;
  tx /= tLen; ty /= tLen; tz /= tLen;

  // Current unit direction
  const curR = Math.sqrt(node.pos.x ** 2 + node.pos.y ** 2 + node.pos.z ** 2) || 1;
  const cx = node.pos.x / curR, cy = node.pos.y / curR, cz = node.pos.z / curR;

  // Blend and re-project onto layer sphere
  const nx = cx * (1 - CROSS_BLEND) + tx * CROSS_BLEND;
  const ny = cy * (1 - CROSS_BLEND) + ty * CROSS_BLEND;
  const nz = cz * (1 - CROSS_BLEND) + tz * CROSS_BLEND;
  const nLen = Math.sqrt(nx * nx + ny * ny + nz * nz) || 1;

  node.pos = {
    x: round3((nx / nLen) * targetR),
    y: round3((ny / nLen) * targetR),
    z: round3((nz / nLen) * targetR),
  };
}

// ── 6.5. Build segments ───────────────────────────────────

console.log("Building segments...");

const segmentsRaw = readFileSync(
  resolve(SCHOOL, "research/01_data_segments.csv"),
  "utf-8"
);
const segmentsCSV = parseCSV(segmentsRaw);
console.log(`  Segments CSV rows: ${segmentsCSV.data.length}`);

// Build inverted index: segment_id → Set<varId> from supporting_segments column
const segFromSupporting = {}; // segment_id → string[]
for (const v of varsCSV.data) {
  const segs = (v.supporting_segments || "")
    .split(";")
    .map((s) => s.trim())
    .filter(Boolean);
  for (const sid of segs) {
    if (!segFromSupporting[sid]) segFromSupporting[sid] = [];
    segFromSupporting[sid].push(v.var_id);
  }
}

// Build inverted index: segment_id → Set<varId> from edge source_segments
const segFromEdges = {}; // segment_id → string[]
for (const e of edgesCSV.data) {
  const segs = (e.source_segments || "")
    .split(";")
    .map((s) => s.trim())
    .filter(Boolean);
  for (const sid of segs) {
    if (!segFromEdges[sid]) segFromEdges[sid] = [];
    if (e.cause_var) segFromEdges[sid].push(e.cause_var);
    if (e.effect_var) segFromEdges[sid].push(e.effect_var);
  }
}

// Build node pos lookup
const nodePosLookup = {};
for (const n of nodes) {
  nodePosLookup[n.id] = n;
}

// Build segments array
const segments = segmentsCSV.data.map((seg) => {
  const sid = seg.segment_id;
  const seed = parseInt(sid.replace(/\D/g, ""), 10) || 1;
  const rng = mulberry32(seed);

  const fromSup = segFromSupporting[sid] || [];
  const fromEdge = segFromEdges[sid] || [];
  const variableIds = [...new Set([...fromSup, ...fromEdge])];

  // Parent: prefer supporting_segments, then edge vars.
  // Orphans (no traceable relationship) get parentVarId=null and
  // orbit the global origin at the outer shell — visually present but
  // not falsely attributed to any variable.
  const primaryVarId = fromSup[0] || fromEdge[0] || null;
  const parentNode   = primaryVarId ? nodePosLookup[primaryVarId] : null;
  const isOrphan     = !primaryVarId;

  // Orbital parameters
  // Orphans: large radius (outer shell 50–62), very slow drift
  // Grounded: tight orbit 1.2–3.5 around parent node
  const orbitRadius = isOrphan
    ? round3(36 + rng() * 10)          // outer shell (36–46, within fog visibility)
    : round3(1.2 + rng() * 2.3);       // node orbit
  const orbitPhase  = round3(rng() * Math.PI * 2);
  const orbitTilt   = round3((rng() - 0.5) * (isOrphan ? 2.0 : 1.0));

  const ox = orbitRadius * Math.cos(orbitPhase);
  const oy = orbitRadius * Math.sin(orbitPhase) * Math.sin(orbitTilt);
  const oz = orbitRadius * Math.sin(orbitPhase) * Math.cos(orbitTilt);

  const pos = parentNode
    ? { x: round3(parentNode.pos.x + ox), y: round3(parentNode.pos.y + oy), z: round3(parentNode.pos.z + oz) }
    : { x: round3(ox), y: round3(oy), z: round3(oz) };

  return {
    id: sid,
    source: seg.source || "",
    sourceType: seg.source_type || "interview",
    utteranceType: seg.utterance_type || "",
    verbatim: seg.verbatim || "",
    variableIds,
    parentVarId: primaryVarId,
    orbitRadius,
    orbitPhase,
    orbitTilt,
    pos,
  };
});

console.log(`  Segments built: ${segments.length}`);

// ── 6.6. FC + HM data ────────────────────────────────────
// Hardcoded from passes_en.html (methodologically defined open-chain structures)

const FC_RAW = [
  { id: "FC1", label: "Rule Fragmentation Feeds the Detection Trap",
    edgeIds: ["E171","E012","E172","E014","E120"],
    closureEdges: [{ from:"V017", to:"V001", polarity:"+" }] },
  { id: "FC2", label: "Institutional Investment Deepens Access Inequality",
    edgeIds: ["E089","E090","E093","E045","E140","E139"],
    closureEdges: [{ from:"V016", to:"V052", polarity:"+" },{ from:"V052", to:"V013", polarity:"+" }] },
  { id: "FC3", label: "Student Resistance Stalls Before Reaching Policy",
    edgeIds: ["E070","E069","E148","E147"],
    closureEdges: [{ from:"V042", to:"V001", polarity:"-" },{ from:"V016", to:"V001", polarity:"+" }] },
  { id: "FC4", label: "Process Pedagogy Cannot Self-Propagate",
    edgeIds: ["E099","E101","E102","E080","E079","E078"],
    closureEdges: [{ from:"V028", to:"V042", polarity:"+" }] },
  { id: "FC5", label: "Skill Erosion Has No Recovery Brake",
    edgeIds: ["E052","E045","E051","E135","E085"],
    closureEdges: [{ from:"V056", to:"V023", polarity:"-" },{ from:"V056", to:"V016", polarity:"-" }] },
];

const edgeById = {};
for (const e of edges) edgeById[e.id] = e;

const forcingChains = FC_RAW.map(fc => ({
  ...fc,
  nodes: [...new Set(fc.edgeIds.flatMap(eid => {
    const e = edgeById[eid];
    return e ? [e.from, e.to] : [];
  }))],
}));

const hmSubgraph = {
  nodes: ["V025","V041","V026","V033","V019","V017","V073","V040","V048","V084","V018","V005","V046"],
  edges: ["E009","E008","E081","E082","E083","E010","E011","E120","E071","E076","E115","E116","E158","E012","E014"],
  loopEdgeIds: ["E158","E012","E014"],
};

console.log(`  FC chains: ${forcingChains.length}`);
console.log(`  HM nodes:  ${hmSubgraph.nodes.length}`);

// ── 7. Assemble & validate ────────────────────────────────

console.log("Validating...");

const graph = {
  meta: {
    counts: {
      nodes: nodes.length,
      edges: edges.length,
      loops: loops.length,
      clusters: clusters.length,
      segments: segments.length,
      forcingChains: forcingChains.length,
    },
    layerRadii: LAYER_RADII,
  },
  nodes,
  edges,
  loops,
  clusters,
  segments,
  forcingChains,
  hmSubgraph,
};

// Assertions
const assertions = [
  ["nodes", nodes.length, 88],
  ["edges", edges.length, 188],
  ["loops (closed CLDs)", loops.length, 13],
  ["clusters", clusters.length, 3],
  ["segments", segments.length, 981],
];

let allPass = true;
for (const [label, actual, expected] of assertions) {
  const status = actual === expected ? "✅" : "❌";
  if (actual !== expected) allPass = false;
  console.log(`  ${status} ${label}: ${actual} (expected ${expected})`);
}

// ── 8. Write output ───────────────────────────────────────

const outDir = resolve(REPO, "src/app/projects/ixds709");
mkdirSync(outDir, { recursive: true });

const outPath = resolve(outDir, "graph.json");
writeFileSync(outPath, JSON.stringify(graph, null, 2), "utf-8");

console.log(`\nWritten: ${outPath}`);
console.log(
  `  ${nodes.length} / ${edges.length} / ${loops.length} / ${clusters.length} / ${segments.length}`
);

if (!allPass) {
  console.error(
    "\n⚠️  Assertion failures — check data sources. Graph written anyway."
  );
  process.exit(1);
}

console.log("Done. ✅");

// ── util ──────────────────────────────────────────────────

function round3(n) {
  return Math.round(n * 1000) / 1000;
}

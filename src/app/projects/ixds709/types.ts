// Types matching the graph.json schema emitted by scripts/build-ixds709-graph.mjs

export interface Vec3 {
  x: number;
  y: number;
  z: number;
}

export interface GraphNode {
  id: string; // e.g. "V016"
  name: string;
  layer: string; // "E" | "Pa" | "St" | "MM" | "-"
  layerKey: LayerKey;
  saturation: number;
  hardOrSoft: string;
  inCycle: boolean;
  boundary: boolean;
  pos: Vec3;
  loops: string[];
}

export interface GraphEdge {
  id: string; // e.g. "E189"
  from: string;
  to: string;
  polarity: string; // "+" | "-" | "contingent"
  delay: string;
  scope: string;
  loop: string;
  loops: string[];
  segments: string[];
}

export interface GraphLoop {
  id: string; // e.g. "CLD_I1"
  label: string;
  type: string; // "R" | "B" | "?" — string to match JSON
  speed: string; // "fast" | "medium" | "slow"
  nodes: string[];
  edges: string[];
}

export interface GraphCluster {
  id: string; // "C1" | "C2" | "C3"
  label: string;
  host: string[];
  regulators: string[];
  coupling: string;
}

export interface GraphSegment {
  id: string;              // e.g. "P02_009"
  source: string;          // e.g. "P02_StudentInternational"
  sourceType: string;      // "interview"
  utteranceType: string;   // "observation" | "causal_claim" | "value_statement"
  verbatim: string;
  variableIds: string[];   // e.g. ["V016", "V019"]
  parentVarId: string;
  orbitRadius: number;     // distance from parent star (world units)
  orbitPhase: number;      // initial angle (radians, 0–2π)
  orbitTilt: number;       // orbital plane tilt (radians, ±0.5)
  pos: Vec3;               // static position at t=0 (for SSR / fallback)
}

export interface GraphMeta {
  counts: {
    nodes: number;
    edges: number;
    loops: number;
    clusters: number;
    segments?: number;
  };
  layerRadii: Record<string, number>;
}

export interface ForcingChain {
  id: string;            // "FC1"
  label: string;
  nodes: string[];
  edgeIds: string[];
  closureEdges: Array<{ from: string; to: string; polarity: string }>;
}

export interface HmSubgraph {
  nodes: string[];
  edges: string[];       // edge IDs
  loopEdgeIds: string[]; // the 3 emphasized loop edges
}

export interface GraphData {
  meta: GraphMeta;
  nodes: GraphNode[];
  edges: GraphEdge[];
  loops: GraphLoop[];
  clusters: GraphCluster[];
  segments?: GraphSegment[];
  forcingChains?: ForcingChain[];
  hmSubgraph?: HmSubgraph;
}

export type LayerKey = "mental" | "structures" | "patterns" | "events" | "boundary";

export const LAYER_ORDER: LayerKey[] = [
  "mental",
  "structures",
  "patterns",
  "events",
  "boundary",
];

export const LAYER_LABEL: Record<LayerKey, string> = {
  mental: "Mental Models",
  structures: "Structures",
  patterns: "Patterns",
  events: "Events",
  boundary: "Boundary / Exogenous",
};

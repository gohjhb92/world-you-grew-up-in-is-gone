import {
  Anchor,
  BarChart3,
  Blocks,
  BrainCircuit,
  CircleDollarSign,
  Factory,
  Flag,
  Globe2,
  Landmark,
  Map,
  Network,
  Scale,
  Shield,
  Split
} from "lucide-react";

export const editorialSections = [
  { id: "world-comparison", title: "World Comparison", icon: Split, visual: "comparison" },
  { id: "timeline", title: "Timeline", icon: Anchor, visual: "timeline" },
  { id: "dependency-crisis", title: "Dependency Crisis", icon: Network, visual: "network" },
  { id: "tariff-simulator", title: "Tariff Simulator", icon: Scale, visual: "tariffs" },
  { id: "national-security-economy", title: "National Security Economy", icon: Shield, visual: "matrix" },
  { id: "gdp-is-not-the-world", title: "GDP Is Not the World", icon: BarChart3, visual: "grandmacro" },
  { id: "digital-dollar", title: "The Dollar Did Not Die. It Went Digital.", icon: CircleDollarSign, visual: "digitaldollar" },
  { id: "reindustrialization", title: "Reindustrialization", icon: Factory, visual: "industry" },
  { id: "geography-map", title: "Geography Map", icon: Map, visual: "map" },
  { id: "bloc-fragmentation", title: "Bloc Fragmentation", icon: Blocks, visual: "blocs" },
  { id: "future-scenarios", title: "Future Scenarios", icon: Globe2, visual: "scenarios" },
  { id: "quiz", title: "Quiz", icon: BrainCircuit, visual: "quiz" },
  { id: "closing-manifesto", title: "Closing Manifesto", icon: Flag, visual: "manifesto" }
] as const;

export type EditorialSection = (typeof editorialSections)[number];

export const thesisPillars = [
  "nationalism",
  "tariffs",
  "industrial policy",
  "strategic decoupling",
  "national security economics",
  "reindustrialization",
  "spheres of influence",
  "geopolitical fragmentation",
  "multipolar competition"
] as const;

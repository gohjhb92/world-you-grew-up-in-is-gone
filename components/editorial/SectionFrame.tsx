import type { LucideIcon } from "lucide-react";
import { MotionReveal } from "@/components/editorial/MotionReveal";
import { PlaceholderLines } from "@/components/editorial/Placeholder";
import { SectionVisual } from "@/components/editorial/SectionVisual";
import type { EditorialSection } from "@/content/sections";

const sectionNarrative: Record<string, { label: string; heading: string; intro: string; note?: string }> = {
  "world-comparison": {
    label: "Opening Contrast",
    heading: "The World You Were Promised",
    intro:
      "The bargain was simple: open markets would make everyone richer, supply chains would make everything cheaper, and American power would keep the system stable. The emerging order breaks that bargain.",
    note: "Drag the line to compare the post-Cold War promise with the world now taking shape."
  },
  timeline: {
    label: "Historical Break",
    heading: "How the Liberal World Order Broke",
    intro:
      "The breakdown was not a single event. It was an accumulation: monetary rupture, unipolar triumph, China shock, financial crisis, populist revolt, pandemic scarcity, war, sanctions, and tariff nationalism.",
    note: "Scroll through the sequence of shocks that converted openness into exposure."
  },
  "dependency-crisis": {
    label: "Strategic Fragility",
    heading: "Interdependence Became Vulnerability",
    intro:
      "The old order treated dependency as efficiency. The new order treats dependency as leverage: a hidden map of chokepoints, coercion, scarcity, and strategic exposure.",
    note: "Click a dependency layer to see how optimization becomes geopolitical risk."
  },
  "tariff-simulator": {
    label: "Trade As Leverage",
    heading: "Tariffs Are Back",
    intro:
      "Tariffs are no longer just temporary bargaining chips or campaign theater. They are becoming part of a larger statecraft toolkit: a way to reprice access, reward domestic production, and force strategic choices.",
    note: "Move the slider to watch efficiency give way to control, incentives, and retaliation risk."
  },
  "national-security-economy": {
    label: "Economic Statecraft",
    heading: "National Security Is Economic Policy",
    intro:
      "The old order separated markets from strategy. The new order treats chips, capital, energy, minerals, cloud, finance, and procurement as instruments of national power.",
    note: "This section follows the logic of economic statecraft: the state does not merely regulate markets; it weaponizes access, capital, and capacity."
  },
  reindustrialization: {
    label: "Industrial Base",
    heading: "Reindustrialization Of America",
    intro:
      "The old system optimized for price. The new system rebuilds capacity: fabs, shipyards, grids, defense production, automation, energy systems, and trusted North American supply chains.",
    note: "Efficiency is no longer the sole metric. Resilience, surge capacity, and sovereign production matter again."
  },
  "geography-map": {
    label: "Geography Returns",
    heading: "Geography Is Back",
    intro:
      "Globalization made geography seem less important. The new world makes straits, canals, corridors, frontiers, ports, islands, and spheres of influence central again.",
    note: "Explore the chokepoints where trade, military power, energy, and industrial supply collide."
  },
  "bloc-fragmentation": {
    label: "Parallel Orders",
    heading: "One World Becomes Many",
    intro:
      "The old map promised convergence. The emerging map is layered with blocs, swing states, spheres, hedging powers, sanctions workarounds, and parallel systems.",
    note: "Toggle the years to see the imagined shift from unipolar confidence to multipolar fragmentation."
  },
  "future-scenarios": {
    label: "Strategic Futures",
    heading: "Future Scenario Explorer",
    intro:
      "The next world is not one forecast. It is a set of unstable paths shaped by deterrence, supply chains, commodities, alliances, fiscal capacity, and political will.",
    note: "Select a scenario to see winners, losers, risks, and signals to watch."
  },
  quiz: {
    label: "Reader Positioning",
    heading: "Where Do You Stand In The New Order?",
    intro:
      "A fragmented world does not punish everyone equally. It rewards some positions, exposes others, and forces companies, investors, and countries to decide which dependencies they can afford.",
    note: "Choose the exposure that most resembles your position and see how the new order reframes it."
  }
};

export function SectionFrame({
  id,
  index,
  title,
  icon: Icon,
  visual
}: {
  id: string;
  index: number;
  title: string;
  icon: LucideIcon;
  visual: EditorialSection["visual"];
}) {
  const narrative = sectionNarrative[id];

  return (
    <section
      id={id}
      className="editorial-container grid min-h-screen gap-10 border-t border-paper/8 py-24 md:py-32 lg:grid-cols-[0.82fr_1.18fr] lg:items-center"
    >
      <MotionReveal>
        <div className="max-w-xl">
          <div className="mb-8 flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-md border border-line bg-white/[.035] text-cyan">
              <Icon size={19} />
            </span>
            <span className="micro-label">
              {String(index).padStart(2, "0")} / {narrative?.label ?? "Editorial Chapter"}
            </span>
          </div>
          <h2 className="section-title">{narrative?.heading ?? title}</h2>
          {narrative ? (
            <>
              <p className="mt-8 max-w-lg text-lg leading-8 text-paper/68">{narrative.intro}</p>
              {narrative.note ? (
                <div className="mt-8 max-w-lg border-l border-amber/35 pl-5">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-amber/80">Interaction</p>
                  <p className="mt-3 text-sm leading-6 text-muted">{narrative.note}</p>
                </div>
              ) : null}
            </>
          ) : (
            <PlaceholderLines className="mt-8" lines={5} />
          )}
        </div>
      </MotionReveal>

      <MotionReveal>
        <SectionVisual visual={visual} title={title} />
      </MotionReveal>
    </section>
  );
}

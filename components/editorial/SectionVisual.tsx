"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import countries from "world-atlas/countries-110m.json";
import {
  ArrowRight,
  Banknote,
  BarChart3,
  CircleDollarSign,
  Coins,
  Cpu,
  FlaskConical,
  Gem,
  Factory,
  Globe2,
  Leaf,
  Landmark,
  LockKeyhole,
  Pill,
  PackageOpen,
  RadioTower,
  ShieldAlert,
  Siren,
  Ship,
  TrendingDown,
  TrendingUp,
  Vote,
  WalletCards,
  Waves
} from "lucide-react";
import type { EditorialSection } from "@/content/sections";
import { PlaceholderLines } from "@/components/editorial/Placeholder";
import { cn } from "@/lib/cn";

export function SectionVisual({
  visual,
  title
}: {
  visual: EditorialSection["visual"];
  title: string;
}) {
  const moduleLabel = {
    comparison: "Drag the fracture line",
    timeline: "Scroll the break sequence",
    network: "Select a dependency layer",
    tariffs: "Adjust the policy posture",
    matrix: "Select a statecraft lever",
    grandmacro: "Switch the measurement lens",
    digitaldollar: "Trace dollar demand on new rails",
    industry: "Select an industrial pillar",
    map: "Hover a strategic chokepoint",
    blocs: "Toggle the world map",
    scenarios: "Choose a future path",
    quiz: "Answer the positioning prompt",
    manifesto: "Scroll the closing sequence"
  }[visual];

  return (
    <div className="relative overflow-hidden rounded-lg border border-line bg-black/24 p-4 shadow-glass md:p-6">
      <div className="absolute inset-0 cinematic-grid opacity-20" />
      <div className="relative">
        <div className="mb-6 flex items-center justify-between gap-4">
          <p className="micro-label">{moduleLabel ?? `${title} Module`}</p>
          <span className="h-2 w-2 rounded-full bg-amber shadow-[0_0_22px_rgba(242,184,75,.45)]" />
        </div>
        {visual === "comparison" && <ComparisonVisual />}
        {visual === "timeline" && <TimelineVisual />}
        {visual === "network" && <NetworkVisual />}
        {visual === "tariffs" && <TariffVisual />}
        {visual === "matrix" && <MatrixVisual />}
        {visual === "grandmacro" && <GrandMacroVisual />}
        {visual === "digitaldollar" && <DigitalDollarVisual />}
        {visual === "industry" && <IndustryVisual />}
        {visual === "map" && <MapVisual />}
        {visual === "blocs" && <BlocVisual />}
        {visual === "scenarios" && <ScenarioVisual />}
        {visual === "quiz" && <QuizVisual />}
        {visual === "manifesto" && <ManifestoVisual />}
      </div>
    </div>
  );
}

function ComparisonVisual() {
  const [split, setSplit] = useState(50);
  const oldFocus = 100 - split;
  const emergingFocus = split;
  const posture = split < 40 ? "Old order in focus" : split > 60 ? "Emerging order in focus" : "Orders in tension";

  return (
    <div className="relative overflow-hidden rounded-lg border border-paper/12 bg-[#07090b] p-4 md:p-5">
      <div className="absolute inset-0 cinematic-grid opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_28%,rgba(96,213,220,.10),transparent_30%),radial-gradient(circle_at_78%_30%,rgba(242,184,75,.11),transparent_31%)]" />

      <div className="relative mb-4 rounded-md border border-paper/10 bg-black/30 p-4">
        <div className="mb-4 grid grid-cols-3 items-center gap-2">
          <span className="micro-label text-cyan/80">Old order</span>
          <span className="micro-label text-center text-paper/56">{posture}</span>
          <span className="micro-label text-right text-amber/80">Emerging order</span>
        </div>
        <label className="block">
          <span className="sr-only">Shift focus between old order and emerging order</span>
          <input
            aria-label="Shift comparison focus"
            type="range"
            className="comparison-range"
            min="0"
            max="100"
            value={split}
            onChange={(event) => setSplit(Number(event.target.value))}
          />
        </label>
      </div>

      <div className="relative grid gap-4 lg:grid-cols-2">
        <ComparisonPanel
          tone="old"
          eyebrow="The world you were promised"
          title="Old liberal order"
          focus={oldFocus}
          items={[
            "free trade",
            "cheap goods",
            "globalization",
            "open markets",
            "American-led security",
            "supply chain efficiency",
            "expanding democracy"
          ]}
        />

        <ComparisonPanel
          tone="new"
          eyebrow="The world that is emerging"
          title="Emerging fragmented order"
          focus={emergingFocus}
          items={[
            "tariffs",
            "protectionism",
            "export controls",
            "strategic rivalry",
            "border politics",
            "industrial policy",
            "supply chain sovereignty"
          ]}
        />
      </div>

      <div className="relative mt-4 flex items-center justify-between gap-4">
        <span className="text-xs text-paper/52">
          The comparison remains visible while the emphasis shifts.
        </span>
        <span className="micro-label text-paper/48">{split}% emerging</span>
      </div>
    </div>
  );
}

function ComparisonPanel({
  tone,
  eyebrow,
  title,
  focus,
  items
}: {
  tone: "old" | "new";
  eyebrow: string;
  title: string;
  focus: number;
  items: string[];
}) {
  const isOld = tone === "old";

  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-md border p-5 md:p-6 lg:min-h-[520px]",
        isOld ? "border-cyan/18 bg-cyan/[.035]" : "border-amber/18 bg-amber/[.035]"
      )}
      animate={{
        borderColor: isOld
          ? `rgba(96,213,220,${0.13 + focus / 310})`
          : `rgba(242,184,75,${0.13 + focus / 310})`
      }}
      transition={{ duration: 0.28 }}
    >
      <div
        className={cn(
          "absolute inset-0",
          isOld
            ? "bg-[radial-gradient(circle_at_26%_28%,rgba(96,213,220,.13),transparent_34%)]"
            : "bg-[radial-gradient(circle_at_74%_28%,rgba(242,184,75,.15),transparent_34%)]"
        )}
      />
      <div className="absolute inset-0 cinematic-grid opacity-20" />
      <svg className="absolute inset-0 h-full w-full opacity-55" viewBox="0 0 760 560" preserveAspectRatio="xMidYMid slice">
        <g fill="none" stroke={isOld ? "rgba(96,213,220,.20)" : "rgba(239,107,92,.22)"} strokeWidth="1">
          {isOld ? (
            <>
              <path d="M90 320 C230 220 404 220 628 302" />
              <path d="M134 216 C290 280 440 354 672 232" />
              <ellipse cx="380" cy="278" rx="270" ry="118" />
            </>
          ) : (
            <>
              <path d="M152 132 L296 234 L212 384 L458 436 L620 272" />
              <path d="M120 420 L254 304 L412 308 L596 154" />
              <path d="M496 88 L404 238 L650 390" />
            </>
          )}
        </g>
      </svg>

      <motion.div
        className="relative z-10 flex flex-col justify-between gap-8 lg:min-h-[468px]"
        animate={{ opacity: 0.62 + focus / 265 }}
        transition={{ duration: 0.28 }}
      >
        <div className={cn(isOld ? "text-left" : "text-right")}>
          <p className={cn("micro-label", isOld ? "text-cyan/80" : "text-amber/80")}>{eyebrow}</p>
          <h3 className="comparison-title mt-5 text-paper">{title}</h3>
        </div>

        <ul className="grid gap-2">
          {items.map((item, index) => (
            <motion.li
              key={item}
              className={cn(
                "flex min-h-10 items-center gap-3 rounded-md border bg-black/22 px-3 py-2 text-xs text-paper/82 backdrop-blur md:text-sm",
                isOld ? "border-cyan/16" : "border-amber/16 flex-row-reverse text-right"
              )}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.035 }}
            >
              <span className={cn("h-1.5 w-1.5 shrink-0 rounded-full", isOld ? "bg-cyan" : "bg-amber")} />
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

function TimelineVisual() {
  const events = [
    {
      year: "1945",
      title: "Bretton Woods",
      text: "The postwar economic architecture gives the dollar system institutional form.",
      icon: Landmark
    },
    {
      year: "1971",
      title: "Nixon shock",
      text: "The gold link breaks; monetary order becomes more flexible, more financialized, and more political.",
      icon: Banknote
    },
    {
      year: "1991",
      title: "Soviet collapse",
      text: "American primacy becomes the organizing fact of global politics.",
      icon: ShieldAlert
    },
    {
      year: "2001",
      title: "China joins WTO",
      text: "Globalization accelerates as manufacturing, capital, and supply chains reorganize around China.",
      icon: Factory
    },
    {
      year: "2008",
      title: "Global financial crisis",
      text: "The system survives, but its legitimacy is permanently damaged.",
      icon: TrendingDown
    },
    {
      year: "2016",
      title: "Brexit / Trump",
      text: "The political backlash against open borders, deindustrialization, and elite consensus becomes explicit.",
      icon: Vote
    },
    {
      year: "2020",
      title: "COVID supply chain shock",
      text: "Just-in-time efficiency reveals itself as strategic fragility.",
      icon: PackageOpen
    },
    {
      year: "2022",
      title: "Russia invades Ukraine",
      text: "Energy, sanctions, food, and finance become weapons of geopolitical conflict.",
      icon: Siren
    },
    {
      year: "2025+",
      title: "Tariff nationalism",
      text: "Tariffs and industrial policy move from exception to operating system.",
      icon: Waves
    }
  ];

  return (
    <div className="relative min-h-[720px] overflow-hidden rounded-lg border border-line bg-[#07090b] p-4 md:p-6">
      <div className="absolute inset-0 cinematic-grid opacity-20" />
      <div className="absolute left-[31px] top-8 h-[calc(100%-4rem)] w-px bg-paper/10 md:left-1/2" />
      <motion.div
        className="absolute left-[31px] top-8 w-px origin-top bg-gradient-to-b from-cyan via-amber to-danger md:left-1/2"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ height: "calc(100% - 4rem)" }}
      />

      <div className="relative space-y-5 md:space-y-0">
        {events.map((event, index) => {
          const Icon = event.icon;
          const isRight = index % 2 === 1;
          return (
            <motion.article
              key={`${event.year}-${event.title}`}
              className={cn(
                "relative grid min-h-[84px] pl-14 md:grid-cols-2 md:gap-12 md:pl-0",
                isRight ? "" : "md:text-right"
              )}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.72, delay: index * 0.045, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={cn(isRight ? "md:col-start-2" : "md:col-start-1")}>
                <div className="rounded-md border border-line bg-black/28 p-4 shadow-[0_24px_80px_rgba(0,0,0,.28)] backdrop-blur">
                  <div className={cn("mb-3 flex items-center gap-3", isRight ? "" : "md:flex-row-reverse")}>
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-paper/12 bg-white/[.035] text-amber">
                      <Icon size={17} />
                    </span>
                    <span className="font-mono text-sm text-cyan">{event.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl leading-tight text-paper">{event.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{event.text}</p>
                </div>
              </div>

              <span className="absolute left-[8px] top-5 z-10 grid h-12 w-12 place-items-center rounded-full border border-paper/15 bg-[#07090b] text-paper md:left-1/2 md:-translate-x-1/2">
                <span className="h-2.5 w-2.5 rounded-full bg-amber shadow-[0_0_28px_rgba(242,184,75,.55)]" />
              </span>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}

function NetworkVisual() {
  const [selected, setSelected] = useState(0);
  const cards = [
    {
      title: "Semiconductors",
      icon: Cpu,
      exposure: "Advanced chips sit inside military systems, cloud infrastructure, vehicles, phones, and AI models.",
      vulnerability: "When production is concentrated in a few geographies and toolchains, a supply disruption becomes a national security event."
    },
    {
      title: "Energy",
      icon: Waves,
      exposure: "Industrial economies depend on fuel flows, grids, LNG, uranium, refining, and power infrastructure.",
      vulnerability: "Energy dependence gives rivals leverage over prices, politics, factories, and public tolerance for crisis."
    },
    {
      title: "Rare Earths",
      icon: Gem,
      exposure: "Magnets, batteries, sensors, turbines, and defense systems rely on narrow mining and processing chains.",
      vulnerability: "Control over processing can become a quiet embargo, slowing entire strategic industries without firing a shot."
    },
    {
      title: "Food",
      icon: Leaf,
      exposure: "Food systems depend on fertilizer, grain corridors, weather, shipping insurance, and export policy.",
      vulnerability: "Food dependency turns local shocks into political shocks, especially when war or export bans hit key suppliers."
    },
    {
      title: "Pharmaceuticals",
      icon: Pill,
      exposure: "Medicines rely on active ingredients, precursor chemicals, sterile manufacturing, and global logistics.",
      vulnerability: "A health emergency becomes harder to manage when essential inputs sit outside national control."
    },
    {
      title: "AI Compute",
      icon: FlaskConical,
      exposure: "AI capability depends on GPUs, data centers, cloud providers, cooling, electricity, and high-bandwidth networks.",
      vulnerability: "Compute concentration turns access to chips, power, and cloud infrastructure into a strategic gate."
    },
    {
      title: "Shipping",
      icon: Ship,
      exposure: "Trade moves through ports, canals, straits, insurance markets, container fleets, and naval protection.",
      vulnerability: "A chokepoint disruption can raise costs, reroute trade, delay factories, and expose dependence on secure sea lanes."
    }
  ];
  const active = cards[selected];
  const ActiveIcon = active.icon;

  return (
    <div className="grid min-h-[560px] gap-4 lg:grid-cols-[0.92fr_1.08fr]">
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
        {cards.map((card, index) => {
          const Icon = card.icon;
          const isActive = index === selected;
          return (
            <button
              key={card.title}
              type="button"
              onClick={() => setSelected(index)}
              className={cn(
                "group rounded-md border p-4 text-left transition duration-300",
                isActive
                  ? "border-amber/45 bg-amber/[.075] shadow-[0_0_48px_rgba(242,184,75,.08)]"
                  : "border-line bg-white/[.025] hover:border-paper/24 hover:bg-white/[.045]"
              )}
            >
              <div className="flex items-center gap-3">
                <span
                  className={cn(
                    "grid h-10 w-10 shrink-0 place-items-center rounded-md border transition",
                    isActive ? "border-amber/35 bg-amber/10 text-amber" : "border-cyan/20 bg-cyan/5 text-cyan"
                  )}
                >
                  <Icon size={18} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-paper">{card.title}</p>
                  <p className="mt-1 text-xs text-muted">Dependency layer</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <motion.article
        key={active.title}
        className="relative overflow-hidden rounded-lg border border-line bg-[#080b0d] p-5 md:p-7"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute inset-0 cinematic-grid opacity-18" />
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-amber/12" />
        <div className="relative flex min-h-[460px] flex-col justify-between">
          <div>
            <div className="mb-7 flex items-center justify-between gap-4">
              <span className="grid h-14 w-14 place-items-center rounded-md border border-amber/30 bg-amber/10 text-amber">
                <ActiveIcon size={24} />
              </span>
              <span className="micro-label text-amber/80">Strategic vulnerability</span>
            </div>
            <h3 className="module-title text-paper">{active.title}</h3>
          </div>

          <div className="space-y-4">
            <div className="rounded-md border border-line bg-black/22 p-4">
              <p className="micro-label mb-3">Dependency</p>
              <p className="text-sm leading-6 text-paper/76 md:text-base md:leading-7">{active.exposure}</p>
            </div>
            <div className="rounded-md border border-danger/20 bg-danger/[.045] p-4">
              <p className="micro-label mb-3 text-danger">Vulnerability</p>
              <p className="text-sm leading-6 text-paper/80 md:text-base md:leading-7">{active.vulnerability}</p>
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
}

function TariffVisual() {
  const [tariffLevel, setTariffLevel] = useState(38);
  const regime =
    tariffLevel < 34
      ? {
          label: "Free Trade",
          summary: "Low barriers, high efficiency, limited state leverage.",
          tone: "text-cyan"
        }
      : tariffLevel < 68
        ? {
            label: "Strategic Tariffs",
            summary: "Selective protection becomes a geopolitical instrument.",
            tone: "text-amber"
          }
        : {
            label: "Trade War",
            summary: "Retaliation, duplication, and national security controls dominate.",
            tone: "text-danger"
          };

  const indicators = [
    { label: "consumer prices", value: 18 + tariffLevel * 0.72, polarity: "bad" },
    { label: "supply chain efficiency", value: 96 - tariffLevel * 0.62, polarity: "good" },
    { label: "reshoring incentives", value: 12 + tariffLevel * 0.82, polarity: "good" },
    { label: "retaliation risk", value: 8 + tariffLevel * 0.88, polarity: "bad" },
    { label: "national security control", value: 22 + tariffLevel * 0.66, polarity: "good" }
  ].map((item) => ({ ...item, value: Math.min(100, Math.max(0, Math.round(item.value))) }));

  return (
    <div className="relative min-h-[520px] overflow-hidden rounded-lg border border-line bg-[#080b0d] p-5 md:p-6">
      <div className="absolute inset-0 cinematic-grid opacity-18" />
      <div className="absolute right-[-12%] top-[-18%] h-72 w-72 rounded-full border border-amber/10" />

      <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex min-h-[460px] flex-col justify-between">
          <div>
            <p className="micro-label text-amber/80">Tariffs as strategic geopolitical tools</p>
            <h3 className={cn("module-title mt-5", regime.tone)}>{regime.label}</h3>
            <p className="mt-5 max-w-sm text-base leading-7 text-paper/68">{regime.summary}</p>
          </div>

          <div className="rounded-md border border-line bg-black/24 p-4">
            <div className="mb-4 flex items-center justify-between gap-4">
              <span className="micro-label">Policy posture</span>
              <span className="font-mono text-sm text-paper">{tariffLevel}</span>
            </div>
            <input
              aria-label="Tariff policy slider"
              className="tariff-range"
              min="0"
              max="100"
              value={tariffLevel}
              type="range"
              onChange={(event) => setTariffLevel(Number(event.target.value))}
            />
            <div className="mt-4 flex justify-between text-[11px] text-muted">
              <span>Free Trade</span>
              <span>Strategic Tariffs</span>
              <span>Trade War</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {indicators.map((indicator) => {
            const isRisk = indicator.polarity === "bad";
            return (
              <div key={indicator.label} className="rounded-md border border-line bg-white/[.025] p-4">
                <div className="mb-3 flex items-center justify-between gap-4">
                  <span className="text-sm font-semibold capitalize text-paper">{indicator.label}</span>
                  <motion.span
                    key={indicator.value}
                    className={cn("font-mono text-sm", isRisk ? "text-danger" : "text-cyan")}
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    {indicator.value}
                  </motion.span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-white/8">
                  <motion.div
                    className={cn("h-full rounded-full", isRisk ? "bg-gradient-to-r from-amber to-danger" : "bg-gradient-to-r from-cyan to-amber")}
                    animate={{ width: `${indicator.value}%` }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </div>
            );
          })}

          <div className="grid grid-cols-3 gap-2 pt-2">
            {[0, 50, 100].map((mark) => (
              <button
                key={mark}
                type="button"
                onClick={() => setTariffLevel(mark)}
                className={cn(
                  "rounded-md border px-3 py-2 text-xs transition",
                  Math.abs(tariffLevel - mark) < 18
                    ? "border-amber/35 bg-amber/10 text-paper"
                    : "border-line bg-black/18 text-muted hover:text-paper"
                )}
              >
                {mark === 0 ? "Open" : mark === 50 ? "Strategic" : "Conflict"}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function GrandMacroVisual() {
  const [lens, setLens] = useState<"gdp" | "statecraft">("gdp");
  const isStatecraft = lens === "statecraft";
  const marketMeasures = [
    { label: "GDP growth", value: 72 },
    { label: "Consumer spending", value: 88 },
    { label: "Trade efficiency", value: 84 },
    { label: "Low-cost imports", value: 78 },
    { label: "Asset prices", value: 66 },
    { label: "Services economy", value: 81 }
  ];
  const strategicMeasures = [
    { label: "Industrial base", value: 80, icon: Factory },
    { label: "Energy security", value: 73, icon: Waves },
    { label: "Chip capacity", value: 86, icon: Cpu },
    { label: "Defense production", value: 82, icon: ShieldAlert },
    { label: "Shipping control", value: 65, icon: Ship },
    { label: "Food security", value: 62, icon: Leaf },
    { label: "Critical minerals", value: 89, icon: Gem },
    { label: "Currency power", value: 76, icon: Banknote }
  ];
  const oldModel = ["Rates", "GDP", "Inflation", "Markets"];
  const newModel = ["Security", "Industry", "Energy", "Trade blocs", "Currency power", "Markets"];

  return (
    <div className="space-y-5">
      <div className="relative overflow-hidden rounded-lg border border-line bg-[#080b0d] p-5 md:p-6">
        <div className="absolute inset-0 cinematic-grid opacity-18" />
        <motion.div
          className={cn(
            "absolute inset-0 transition-colors duration-700",
            isStatecraft
              ? "bg-[radial-gradient(circle_at_88%_14%,rgba(242,184,75,.11),transparent_34%),radial-gradient(circle_at_14%_84%,rgba(239,107,92,.06),transparent_32%)]"
              : "bg-[radial-gradient(circle_at_18%_12%,rgba(96,213,220,.11),transparent_34%)]"
          )}
        />

        <div className="relative">
          <div className="mb-7 flex flex-col justify-between gap-5 md:flex-row md:items-start">
            <div className="max-w-sm">
              <p className={cn("micro-label", isStatecraft ? "text-amber/85" : "text-cyan/85")}>
                {isStatecraft ? "Strategic capacity" : "Market performance"}
              </p>
              <h3 className="module-title mt-4 text-paper">
                {isStatecraft ? "Statecraft lens" : "GDP lens"}
              </h3>
              <p className="mt-4 text-sm leading-6 text-paper/68">
                {isStatecraft
                  ? "Power is measured in resilience: the capacity to supply, withstand, mobilize, and control."
                  : "Success is measured through growth, efficiency, cheaper consumption, and expanding markets."}
              </p>
            </div>

            <div
              className="grid shrink-0 grid-cols-2 rounded-md border border-paper/10 bg-black/28 p-1"
              role="tablist"
              aria-label="Measurement lens"
            >
              {[
                { id: "gdp" as const, label: "GDP lens", icon: BarChart3 },
                { id: "statecraft" as const, label: "Statecraft lens", icon: ShieldAlert }
              ].map((option) => {
                const Icon = option.icon;
                const selected = lens === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setLens(option.id)}
                    className={cn(
                      "flex min-h-11 items-center gap-2 rounded px-3.5 text-xs transition md:text-sm",
                      selected
                        ? option.id === "gdp"
                          ? "bg-cyan/10 text-cyan"
                          : "bg-amber/10 text-amber"
                        : "text-muted hover:text-paper"
                    )}
                  >
                    <Icon size={15} />
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {isStatecraft ? (
              <motion.div
                key="statecraft"
                role="tabpanel"
                className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {strategicMeasures.map((measure, index) => {
                  const Icon = measure.icon;
                  return (
                    <motion.div
                      key={measure.label}
                      className="relative min-h-28 overflow-hidden rounded-md border border-amber/16 bg-black/22 p-3.5"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.36, delay: index * 0.03 }}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <Icon size={16} className="text-amber" />
                        <span className="font-mono text-[10px] text-paper/40">capacity</span>
                      </div>
                      <p className="mt-5 text-xs font-medium text-paper/86">{measure.label}</p>
                      <div className="mt-3 h-px bg-paper/8">
                        <motion.div
                          className="h-px bg-amber"
                          initial={{ width: 0 }}
                          animate={{ width: `${measure.value}%` }}
                          transition={{ duration: 0.65, delay: 0.08 + index * 0.025 }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div
                key="gdp"
                role="tabpanel"
                className="rounded-md border border-cyan/14 bg-black/22 p-4 md:p-5"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="micro-label text-cyan/75">Aggregate performance indicators</span>
                  <span className="font-mono text-[10px] text-paper/42">Conceptual model</span>
                </div>
                <div className="grid min-h-52 grid-cols-6 items-end gap-2 sm:gap-4">
                  {marketMeasures.map((measure, index) => (
                    <div key={measure.label} className="flex min-w-0 flex-col justify-end">
                      <motion.div
                        className="relative mx-auto w-full max-w-14 rounded-t-sm border border-b-0 border-cyan/18 bg-cyan/[.14]"
                        initial={{ height: 0 }}
                        animate={{ height: `${measure.value * 1.45}px` }}
                        transition={{ duration: 0.62, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="absolute inset-x-0 top-0 h-px bg-cyan" />
                      </motion.div>
                      <p className="mt-3 text-center text-[10px] leading-4 text-muted sm:text-xs">{measure.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-lg border border-line bg-black/24 p-5 md:p-6">
        <div className="absolute inset-0 cinematic-grid opacity-15" />
        <div className="relative">
          <div className="mb-6">
            <p className="micro-label text-amber/82">From macro strategy to grand macro strategy</p>
            <p className="mt-3 max-w-xl text-sm leading-6 text-paper/65">
              Markets remain the outcome. The chain of causes now begins with security and productive power.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-[0.82fr_1.18fr]">
            <StrategyChain title="Old model" nodes={oldModel} tone="old" />
            <StrategyChain title="New model" nodes={newModel} tone="new" />
          </div>
        </div>
      </div>
    </div>
  );
}

function StrategyChain({
  title,
  nodes,
  tone
}: {
  title: string;
  nodes: string[];
  tone: "old" | "new";
}) {
  const isNew = tone === "new";

  return (
    <div
      className={cn(
        "rounded-md border p-4",
        isNew ? "border-amber/18 bg-amber/[.035]" : "border-cyan/14 bg-cyan/[.025]"
      )}
    >
      <p className={cn("micro-label mb-4", isNew ? "text-amber/80" : "text-cyan/76")}>{title}</p>
      <div className="flex flex-wrap items-center gap-2">
        {nodes.map((node, index) => (
          <div key={node} className="flex items-center gap-2">
            <motion.span
              className={cn(
                "rounded border px-2.5 py-2 text-xs text-paper/80 md:text-sm",
                isNew ? "border-amber/18 bg-amber/[.045]" : "border-cyan/14 bg-black/18"
              )}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
            >
              {node}
            </motion.span>
            {index < nodes.length - 1 ? (
              <span className={cn("font-mono text-xs", isNew ? "text-amber/60" : "text-cyan/50")} aria-hidden="true">
                -&gt;
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function DigitalDollarVisual() {
  const [narrative, setNarrative] = useState<"dedollar" | "stablecoin">("stablecoin");
  const [stress, setStress] = useState([44, 38, 22, 31, 28]);
  const isStablecoin = narrative === "stablecoin";
  const narrativeModes = {
    dedollar: {
      label: "De-dollarization narrative",
      eyebrow: "State-led challenge",
      thesis:
        "States seek room to transact beyond Washington's reach through reserve diversification, bilateral settlement, and parallel payment infrastructure.",
      points: [
        "BRICS currency talk",
        "Local currency trade",
        "Gold accumulation",
        "Alternative payment rails",
        "Sanctions backlash"
      ]
    },
    stablecoin: {
      label: "Stablecoin re-dollarization",
      eyebrow: "Bottom-up adoption",
      thesis:
        "While capitals debate alternatives, users confronting weak currencies can acquire digital dollars directly, strengthening the dollar's practical network.",
      points: [
        "USD stablecoins",
        "Global digital dollar access",
        "Demand from emerging markets",
        "Treasury reserve backing",
        "Dollar network effects",
        "Crisis demand for dollars"
      ]
    }
  };
  const selectedMode = narrativeModes[narrative];
  const stressInputs = [
    { label: "Local inflation", icon: TrendingUp },
    { label: "Currency volatility", icon: Waves },
    { label: "Capital controls", icon: LockKeyhole },
    { label: "Banking distrust", icon: Landmark },
    { label: "Geopolitical crisis", icon: ShieldAlert }
  ];
  const stressLevel = Math.round(stress.reduce((sum, value) => sum + value, 0) / stress.length);
  const stablecoinPull = Math.min(96, Math.round(18 + stressLevel * 0.78));
  const localCurrencyHold = Math.max(8, 100 - stablecoinPull);
  const stressPosture =
    stablecoinPull < 43 ? "Local currency preference" : stablecoinPull < 70 ? "Dollar migration" : "Digital dollar flight";
  const flow = [
    { title: "Local currency weakness", icon: TrendingDown },
    { title: "User buys USD stablecoin", icon: WalletCards },
    { title: "Issuer holds dollar reserves", icon: CircleDollarSign },
    { title: "Treasury and cash-like markets", icon: Landmark },
    { title: "More global dollar demand", icon: Globe2 }
  ];

  const setStressValue = (index: number, value: number) => {
    setStress((current) => current.map((item, itemIndex) => (itemIndex === index ? value : item)));
  };

  return (
    <div className="space-y-5">
      <div className="relative overflow-hidden rounded-lg border border-line bg-[#080b0d] p-5 md:p-6">
        <div className="absolute inset-0 cinematic-grid opacity-18" />
        <div
          className={cn(
            "absolute inset-0 transition duration-700",
            isStablecoin
              ? "bg-[radial-gradient(circle_at_88%_18%,rgba(242,184,75,.12),transparent_34%),radial-gradient(circle_at_16%_80%,rgba(96,213,220,.06),transparent_30%)]"
              : "bg-[radial-gradient(circle_at_16%_16%,rgba(96,213,220,.10),transparent_32%)]"
          )}
        />

        <div className="relative">
          <div className="mb-7 flex flex-col justify-between gap-5 xl:flex-row xl:items-start">
            <div className="max-w-sm">
              <p className={cn("micro-label", isStablecoin ? "text-amber/82" : "text-cyan/78")}>
                {selectedMode.eyebrow}
              </p>
              <h3 className="module-title mt-4 text-paper">{selectedMode.label}</h3>
            </div>

            <div
              className="grid max-w-md grid-cols-2 rounded-md border border-paper/10 bg-black/30 p-1"
              role="tablist"
              aria-label="Dollar narrative"
            >
              {[
                { id: "dedollar" as const, title: "De-dollarization" },
                { id: "stablecoin" as const, title: "Stablecoin re-dollarization" }
              ].map((mode) => (
                <button
                  key={mode.id}
                  type="button"
                  role="tab"
                  aria-selected={narrative === mode.id}
                  onClick={() => setNarrative(mode.id)}
                  className={cn(
                    "min-h-12 rounded px-3 text-xs leading-5 transition md:text-sm",
                    narrative === mode.id
                      ? mode.id === "stablecoin"
                        ? "bg-amber/10 text-amber"
                        : "bg-cyan/10 text-cyan"
                      : "text-muted hover:text-paper"
                  )}
                >
                  {mode.title}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={narrative}
              role="tabpanel"
              className="grid gap-5 lg:grid-cols-[0.98fr_1.02fr]"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="rounded-md border border-paper/10 bg-black/20 p-4 text-sm leading-7 text-paper/74 md:p-5">
                {selectedMode.thesis}
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                {selectedMode.points.map((point, index) => (
                  <motion.div
                    key={point}
                    className={cn(
                      "flex min-h-12 items-center gap-3 rounded-md border bg-black/20 px-3 py-2 text-sm text-paper/82",
                      isStablecoin ? "border-amber/18" : "border-cyan/16"
                    )}
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.32, delay: index * 0.035 }}
                  >
                    <span className={cn("h-1.5 w-1.5 shrink-0 rounded-full", isStablecoin ? "bg-amber" : "bg-cyan")} />
                    {point}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 border-l border-amber/35 pl-4">
            <p className="font-serif text-xl leading-snug text-paper md:text-2xl">
              The dollar did not disappear. It found new rails.
            </p>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-lg border border-line bg-black/24 p-5 md:p-6">
        <div className="absolute inset-0 cinematic-grid opacity-15" />
        <div className="relative">
          <div className="mb-6">
            <p className="micro-label text-amber/82">Dollar transmission mechanism</p>
            <p className="mt-3 max-w-xl text-sm leading-6 text-paper/66">
              Monetary fragmentation at the state level can coexist with dollar adoption from below.
            </p>
          </div>

          <div className="grid gap-2 md:grid-cols-5">
            {flow.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  className="relative flex min-h-24 items-center gap-3 rounded-md border border-paper/10 bg-white/[.025] p-3 md:flex-col md:items-start md:justify-between"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.38, delay: index * 0.06 }}
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded border border-amber/20 bg-amber/[.07] text-amber">
                    <Icon size={15} />
                  </span>
                  <p className="text-xs leading-5 text-paper/82">{step.title}</p>
                  {index < flow.length - 1 ? (
                    <span className="absolute -bottom-4 left-1/2 z-10 -translate-x-1/2 text-amber/60 md:-right-4 md:bottom-auto md:left-auto md:top-1/2 md:translate-x-0 md:-translate-y-1/2">
                      <ArrowRight className="rotate-90 md:rotate-0" size={15} />
                    </span>
                  ) : null}
                </motion.div>
              );
            })}
          </div>

          <div className="mt-5 flex items-start gap-3 rounded-md border border-amber/16 bg-amber/[.035] p-4">
            <Coins className="mt-0.5 shrink-0 text-amber" size={17} />
            <p className="text-sm leading-6 text-paper/68">
              Stablecoin issuers commonly back dollar tokens with cash-like dollar assets and Treasury instruments. More
              adoption can therefore reinforce demand for dollar assets rather than dilute it.
            </p>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-lg border border-line bg-[#080b0d] p-5 md:p-6">
        <div className="absolute inset-0 cinematic-grid opacity-16" />
        <div className="relative grid gap-7 lg:grid-cols-[1fr_0.88fr]">
          <div>
            <div className="mb-6">
              <p className="micro-label text-amber/82">Dollar stress meter</p>
              <h3 className="mt-4 font-serif text-3xl leading-tight text-paper">Pressure creates demand</h3>
            </div>
            <div className="space-y-4">
              {stressInputs.map((input, index) => {
                const Icon = input.icon;
                return (
                  <label key={input.label} className="block rounded-md border border-paper/8 bg-black/18 px-4 py-3">
                    <span className="mb-2 flex items-center justify-between gap-4">
                      <span className="flex items-center gap-2 text-sm text-paper/78">
                        <Icon size={14} className="text-muted" />
                        {input.label}
                      </span>
                      <span className="font-mono text-xs text-amber">{stress[index]}</span>
                    </span>
                    <input
                      aria-label={input.label}
                      type="range"
                      min="0"
                      max="100"
                      value={stress[index]}
                      onChange={(event) => setStressValue(index, Number(event.target.value))}
                      className="tariff-range"
                    />
                  </label>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-md border border-amber/16 bg-amber/[.035] p-5">
            <div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="micro-label text-amber/82">Demand posture</p>
                  <p className="mt-4 font-serif text-3xl leading-tight text-paper">{stressPosture}</p>
                </div>
                <CircleDollarSign className="text-amber" size={29} />
              </div>
              <p className="mt-4 text-sm leading-6 text-paper/65">
                As confidence in local stores of value erodes, direct access to a dollar token becomes more attractive.
              </p>
            </div>

            <div className="mt-8 space-y-5">
              <DemandBar label="USD stablecoin demand" value={stablecoinPull} tone="dollar" />
              <DemandBar label="Local currency preference" value={localCurrencyHold} tone="local" />
              <div className="rounded border border-paper/10 bg-black/22 p-3">
                <p className="micro-label mb-2">Reading</p>
                <p className="text-xs leading-5 text-muted">
                  Conceptual response only. The meter visualizes direction of pressure, not a forecast or live market data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DemandBar({ label, value, tone }: { label: string; value: number; tone: "dollar" | "local" }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-3">
        <span className="text-xs text-paper/72">{label}</span>
        <span className={cn("font-mono text-xs", tone === "dollar" ? "text-amber" : "text-cyan")}>{value}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/8">
        <motion.div
          className={cn("h-full rounded-full", tone === "dollar" ? "bg-amber" : "bg-cyan/60")}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

function MatrixVisual() {
  const [active, setActive] = useState(0);
  const tools = [
    {
      name: "Tariffs",
      icon: Landmark,
      arena: "Market access",
      logic: "Market access becomes leverage. Duties are used to pressure alignment, protect strategic sectors, and redirect production toward trusted jurisdictions.",
      pressure: "Raises the cost of rival supply, changes corporate routing, and gives the state a visible bargaining instrument."
    },
    {
      name: "Export controls",
      icon: Cpu,
      arena: "Technology denial",
      logic: "Advanced chips, tools, software, and technical services are restricted when they could strengthen a rival's military or AI capability.",
      pressure: "Turns technological interdependence into a gatekeeping regime: access is conditional, revocable, and political."
    },
    {
      name: "Sanctions",
      icon: Banknote,
      arena: "Financial coercion",
      logic: "Payments, reserves, banking access, insurance, and corporate presence become tools for imposing costs without direct military force.",
      pressure: "Creates a shadow price for geopolitical alignment and pushes rivals to build parallel financial plumbing."
    },
    {
      name: "Capital screening",
      icon: ShieldAlert,
      arena: "Financial perimeter",
      logic: "Inbound and outbound investment is filtered for security exposure, sensitive data, critical infrastructure, and strategic technology leakage.",
      pressure: "Moves capital from a neutral flow into a screened channel where ownership, control, and destination matter."
    },
    {
      name: "Defense procurement",
      icon: Factory,
      arena: "Industrial mobilization",
      logic: "The state pulls private capital toward munitions, shipbuilding, drones, rare-earth magnets, cyber tools, and defense technology.",
      pressure: "Procurement becomes a demand signal: what the state buys, the industrial base learns to build."
    },
    {
      name: "Energy policy",
      icon: Waves,
      arena: "Power politics",
      logic: "Oil, gas, LNG, nuclear, grid capacity, and fuel security become tools of domestic strength and alliance leverage.",
      pressure: "Abundant energy lowers industrial costs, supports allies, and limits the coercive power of hostile suppliers."
    },
    {
      name: "Critical minerals",
      icon: Gem,
      arena: "Resource security",
      logic: "Rare earths, copper, lithium, uranium, magnets, and refining capacity move from commodity logic into strategic stockpiles and offtake deals.",
      pressure: "The constraint shifts from price to availability: the question becomes who can guarantee supply in a crisis."
    },
    {
      name: "AI infrastructure",
      icon: FlaskConical,
      arena: "Digital sovereignty",
      logic: "Compute, cloud, chips, data centers, cooling, electricity, and model access become the next national capability stack.",
      pressure: "AI power depends on physical inputs. Compute is no longer just a business resource; it is strategic capacity."
    },
    {
      name: "Industrial finance",
      icon: PackageOpen,
      arena: "Directed capital",
      logic: "Loans, guarantees, tax credits, procurement, and public-private funds are used to rebuild capacity that markets alone underbuilt.",
      pressure: "Capital allocation becomes explicitly strategic: resilience is funded even when pure efficiency would choose cheaper imports."
    }
  ];
  const exposedLayers = [
    "chips",
    "AI compute",
    "energy",
    "critical minerals",
    "cloud",
    "telecom",
    "defense base",
    "payments"
  ];
  const selected = tools[active];
  const SelectedIcon = selected.icon;

  return (
    <div className="grid min-h-[580px] gap-4 xl:grid-cols-[1fr_0.86fr]">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {tools.map((tool, index) => (
          <button
            key={tool.name}
            type="button"
            onClick={() => setActive(index)}
            className={cn(
              "min-h-32 rounded-md border p-4 text-left transition duration-300",
              active === index
                ? "border-amber/45 bg-amber/[.075] shadow-[0_0_44px_rgba(242,184,75,.08)]"
                : "border-line bg-white/[.025] hover:border-paper/25 hover:bg-white/[.045]"
            )}
          >
            <div className="mb-5 flex items-center justify-between gap-3">
              <span
                className={cn(
                  "grid h-8 w-8 place-items-center rounded-md border",
                  active === index ? "border-amber/30 bg-amber/10 text-amber" : "border-cyan/20 bg-cyan/5 text-cyan"
                )}
              >
                <tool.icon size={16} />
              </span>
              <span className="font-mono text-[11px] text-muted">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <p className="text-sm font-semibold text-paper">{tool.name}</p>
            <p className="mt-2 font-mono text-[11px] text-muted">{tool.arena}</p>
          </button>
        ))}
      </div>

      <motion.aside
        key={selected.name}
        className="relative overflow-hidden rounded-lg border border-line bg-[#080b0d] p-5 md:p-7"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute inset-0 cinematic-grid opacity-18" />
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-cyan/12" />
        <div className="relative flex min-h-[500px] flex-col justify-between">
          <div>
            <div className="mb-7 flex items-center justify-between gap-4">
              <span className="grid h-14 w-14 place-items-center rounded-md border border-amber/30 bg-amber/10 text-amber">
                <SelectedIcon size={23} />
              </span>
              <span className="micro-label text-cyan/80">Economic statecraft tool</span>
            </div>
            <h3 className="module-title mt-5 text-paper">{selected.name}</h3>
            <p className="mt-4 font-mono text-xs text-amber">{selected.arena}</p>
          </div>
          <div className="space-y-4">
            <div className="rounded-md border border-line bg-black/22 p-4">
              <p className="micro-label mb-3">Mechanism</p>
              <p className="text-sm leading-6 text-paper/76 md:text-base md:leading-7">{selected.logic}</p>
            </div>
            <div className="rounded-md border border-amber/20 bg-amber/[.045] p-4">
              <p className="micro-label mb-3 text-amber">Strategic effect</p>
              <p className="text-sm leading-6 text-paper/80 md:text-base md:leading-7">{selected.pressure}</p>
            </div>
            <div className="rounded-md border border-line bg-white/[.025] p-4">
              <p className="micro-label mb-4">Exposed layers</p>
              <div className="flex flex-wrap gap-2">
                {exposedLayers.map((layer) => (
                  <span key={layer} className="rounded border border-paper/10 bg-black/20 px-2.5 py-1.5 text-xs text-paper/72">
                    {layer}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.aside>
    </div>
  );
}

function IndustryVisual() {
  const [active, setActive] = useState(0);
  const pillars = [
    {
      name: "CHIPS and fabs",
      icon: Cpu,
      text: "Domestic and allied semiconductor capacity becomes the anchor of AI, defense, autos, cloud, and industrial resilience.",
      need: "Subsidies, skilled labor, power, water, advanced tools, trusted packaging.",
      signal: "critical"
    },
    {
      name: "Energy buildout",
      icon: Waves,
      text: "Abundant power, LNG, nuclear, and grid buildout become strategic advantages rather than background utilities.",
      need: "Transmission, baseload power, gas logistics, nuclear supply chains, permitting speed.",
      signal: "critical"
    },
    {
      name: "Shipbuilding",
      icon: Ship,
      text: "Maritime capacity returns as a bottleneck for deterrence, trade routes, repair, and Indo-Pacific logistics.",
      need: "Yards, welders, naval procurement reform, repair capacity, merchant marine depth.",
      signal: "strained"
    },
    {
      name: "Critical minerals",
      icon: Gem,
      text: "Mining, processing, magnets, and offtake agreements shift from commodity logic to national capability logic.",
      need: "Processing, refining, stockpiles, allied mines, guaranteed demand, faster approvals.",
      signal: "rising"
    },
    {
      name: "Defense base",
      icon: ShieldAlert,
      text: "Munitions, drones, air defense, missiles, and procurement reform become central to industrial policy.",
      need: "Surge capacity, predictable orders, supplier depth, dual-use factories, inventory rebuild.",
      signal: "critical"
    },
    {
      name: "Automation and robotics",
      icon: Factory,
      text: "Robotics and industrial AI offset labor scarcity and make high-cost domestic production more viable.",
      need: "Robots, machine vision, industrial AI, technician pipelines, software-defined factories.",
      signal: "rising"
    },
    {
      name: "North American corridor",
      icon: RadioTower,
      text: "Mexico, US logistics, border infrastructure, ports, rail, and energy systems become one strategic manufacturing zone.",
      need: "Permitting, customs capacity, secure transport, power, workforce, harmonized supplier networks.",
      signal: "rising"
    }
  ];
  const selected = pillars[active];
  const SelectedIcon = selected.icon;
  const rebuildStack = [
    { label: "physical capacity", value: active === 2 ? 48 : active === 6 ? 70 : 78 },
    { label: "security value", value: active === 5 ? 68 : 88 },
    { label: "execution complexity", value: active === 0 || active === 2 ? 86 : active === 6 ? 74 : 66 }
  ];

  return (
    <div className="grid min-h-[580px] gap-5 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="relative overflow-hidden rounded-lg border border-line bg-[#080b0d] p-5 md:p-7">
        <div className="absolute inset-0 cinematic-grid opacity-18" />
        <div className="absolute -left-20 bottom-[-120px] h-80 w-80 rounded-full border border-amber/10" />
        <div className="relative flex min-h-[500px] flex-col justify-between">
          <div>
            <div className="mb-7 flex items-center justify-between gap-4">
              <span className="grid h-14 w-14 place-items-center rounded-md border border-cyan/25 bg-cyan/10 text-cyan">
                <SelectedIcon size={23} />
              </span>
              <span className="micro-label text-amber/80">Industrial base</span>
            </div>
            <h3 className="module-title mt-5 text-paper">{selected.name}</h3>
            <p className="mt-6 text-base leading-7 text-paper/72">{selected.text}</p>
          </div>

          <div className="space-y-4">
            <div className="rounded-md border border-line bg-black/22 p-4">
              <p className="micro-label mb-3">What has to be built</p>
              <p className="text-sm leading-6 text-paper/76 md:text-base md:leading-7">{selected.need}</p>
            </div>
            <div className="space-y-3 rounded-md border border-line bg-white/[.025] p-4">
              {rebuildStack.map((item) => (
                <div key={item.label}>
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <span className="text-xs capitalize text-paper/72">{item.label}</span>
                    <span className="font-mono text-[11px] text-muted">conceptual</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/8">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-cyan via-amber to-danger"
                      animate={{ width: `${item.value}%` }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {pillars.map((pillar, index) => (
          <button
            key={pillar.name}
            type="button"
            onClick={() => setActive(index)}
            className={cn(
              "flex min-h-32 flex-col justify-between rounded-md border p-4 text-left transition duration-300",
              active === index
                ? "border-amber/45 bg-amber/[.075]"
                : "border-line bg-white/[.025] hover:border-paper/25 hover:bg-white/[.045]"
            )}
          >
            <div className="flex items-center justify-between gap-3">
              <span
                className={cn(
                  "grid h-9 w-9 place-items-center rounded-md border",
                  active === index ? "border-amber/30 bg-amber/10 text-amber" : "border-cyan/20 bg-cyan/5 text-cyan"
                )}
              >
                <pillar.icon size={16} />
              </span>
              <span className="font-mono text-[11px] text-muted">{pillar.signal}</span>
            </div>
            <span className="text-sm font-semibold text-paper">{pillar.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function MapVisual() {
  const hotspots = [
    {
      name: "Taiwan Strait",
      coordinates: [121, 24] as [number, number],
      why: "The hinge between advanced semiconductor production, Chinese military pressure, and US alliance credibility."
    },
    {
      name: "Hormuz",
      coordinates: [56.5, 26.5] as [number, number],
      why: "A narrow energy chokepoint where Gulf security, oil flows, naval power, and regional escalation meet."
    },
    {
      name: "Suez",
      coordinates: [32.5, 30] as [number, number],
      why: "A Europe-Asia artery that turns regional instability into global shipping delays and insurance risk."
    },
    {
      name: "Panama Canal",
      coordinates: [-79.6, 9] as [number, number],
      why: "A hemispheric logistics chokepoint central to US maritime access and commercial routing."
    },
    {
      name: "Malacca Strait",
      coordinates: [101, 3.3] as [number, number],
      why: "A dense trade and energy corridor connecting the Indian Ocean, China, Japan, Korea, and Southeast Asia."
    },
    {
      name: "Arctic",
      coordinates: [30, 74] as [number, number],
      why: "Melting routes, missile geography, resources, and polar access are turning the far north into strategic terrain."
    },
    {
      name: "Greenland",
      coordinates: [-42, 72] as [number, number],
      why: "A northern Atlantic outpost for radar, minerals, Arctic access, and North American defense depth."
    },
    {
      name: "South China Sea",
      coordinates: [114, 12] as [number, number],
      why: "A contested maritime commons where trade routes, island bases, fisheries, energy claims, and naval power collide."
    },
    {
      name: "Mexico nearshoring corridor",
      coordinates: [-101, 23] as [number, number],
      why: "The North American manufacturing bridge where supply chain sovereignty meets labor, logistics, and market access."
    }
  ];
  const [active, setActive] = useState(hotspots[0]);

  return (
    <div className="relative min-h-[620px] overflow-hidden rounded-lg border border-line bg-[#07090b] p-4 md:p-6">
      <div className="absolute inset-0 cinematic-grid opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(96,213,220,.09),transparent_38%)]" />

      <div className="relative grid gap-5 xl:grid-cols-[1fr_300px]">
        <div className="relative min-h-[430px] overflow-hidden rounded-md border border-line bg-black/22">
          <ComposableMap
            projection="geoEqualEarth"
            projectionConfig={{ scale: 150 }}
            className="h-full min-h-[430px] w-full"
          >
            <Geographies geography={countries}>
              {({ geographies }: { geographies: Array<Record<string, unknown>> }) =>
                geographies.map((geo) => (
                  <Geography
                    key={String(geo.rsmKey)}
                    geography={geo}
                    fill="rgba(238,242,237,.10)"
                    stroke="rgba(238,242,237,.10)"
                    strokeWidth={0.45}
                    style={{
                      default: { outline: "none" },
                      hover: { fill: "rgba(96,213,220,.16)", outline: "none" },
                      pressed: { outline: "none" }
                    }}
                  />
                ))
              }
            </Geographies>

            {hotspots.map((hotspot) => (
              <Marker key={hotspot.name} coordinates={hotspot.coordinates}>
                <g
                  role="button"
                  tabIndex={0}
                  onMouseEnter={() => setActive(hotspot)}
                  onClick={() => setActive(hotspot)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      setActive(hotspot);
                    }
                  }}
                  className="cursor-pointer"
                >
                  <motion.circle
                    r={active.name === hotspot.name ? 10 : 7}
                    fill={active.name === hotspot.name ? "#f2b84b" : "#60d5dc"}
                    fillOpacity={0.24}
                    animate={{ scale: active.name === hotspot.name ? [1, 1.25, 1] : 1 }}
                    transition={{ duration: 1.8, repeat: active.name === hotspot.name ? Infinity : 0 }}
                  />
                  <circle r={3.4} fill={active.name === hotspot.name ? "#f2b84b" : "#60d5dc"} />
                </g>
              </Marker>
            ))}
          </ComposableMap>
        </div>

        <motion.aside
          key={active.name}
          className="rounded-md border border-line bg-black/28 p-5 backdrop-blur"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-5 flex items-center justify-between">
            <span className="grid h-11 w-11 place-items-center rounded-md border border-amber/25 bg-amber/10 text-amber">
              <RadioTower size={19} />
            </span>
            <span className="micro-label text-amber/80">Hotspot</span>
          </div>
          <h3 className="module-title text-paper">{active.name}</h3>
          <p className="mt-5 text-sm leading-7 text-paper/72">{active.why}</p>
          <div className="mt-7 space-y-2">
            {hotspots.map((hotspot) => (
              <button
                key={hotspot.name}
                type="button"
                onClick={() => setActive(hotspot)}
                className={cn(
                  "w-full rounded border px-3 py-2 text-left text-xs transition",
                  active.name === hotspot.name
                    ? "border-amber/35 bg-amber/10 text-paper"
                    : "border-line bg-white/[.025] text-muted hover:text-paper"
                )}
              >
                {hotspot.name}
              </button>
            ))}
          </div>
        </motion.aside>
      </div>
    </div>
  );
}

function BlocVisual() {
  const [scenario, setScenario] = useState<"1995" | "2026" | "2035">("2026");
  const blocs = [
    { name: "US-led bloc", color: "#60d5dc", coordinates: [-98, 39] as [number, number], radius: { "1995": 34, "2026": 25, "2035": 24 } },
    { name: "China-led bloc", color: "#ef6b5c", coordinates: [104, 35] as [number, number], radius: { "1995": 7, "2026": 23, "2035": 30 } },
    { name: "Russia sphere", color: "#b86bff", coordinates: [75, 58] as [number, number], radius: { "1995": 8, "2026": 15, "2035": 14 } },
    { name: "BRICS", color: "#73c27b", coordinates: [25, -12] as [number, number], radius: { "1995": 6, "2026": 18, "2035": 23 } },
    { name: "India balancing", color: "#f2b84b", coordinates: [78, 22] as [number, number], radius: { "1995": 6, "2026": 13, "2035": 18 } },
    { name: "Gulf swing states", color: "#f5d27a", coordinates: [50, 24] as [number, number], radius: { "1995": 6, "2026": 10, "2035": 14 } },
    { name: "ASEAN middle powers", color: "#8ad7ff", coordinates: [108, 3] as [number, number], radius: { "1995": 8, "2026": 13, "2035": 15 } },
    { name: "Non-aligned states", color: "#eef2ed", coordinates: [10, 8] as [number, number], radius: { "1995": 14, "2026": 17, "2035": 20 } }
  ];

  return (
    <div className="relative min-h-[620px] overflow-hidden rounded-lg border border-line bg-[#07090b] p-4 md:p-6">
      <div className="absolute inset-0 cinematic-grid opacity-20" />
      <div className="relative mb-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="micro-label text-amber/80">One world becomes many</p>
          <h3 className="module-title mt-2 text-paper">Bloc fragmentation</h3>
        </div>
        <div className="grid grid-cols-3 gap-2 rounded-md border border-line bg-black/24 p-1">
          {(["1995", "2026", "2035"] as const).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setScenario(item)}
              className={cn(
                "rounded px-3 py-2 text-xs transition",
                scenario === item ? "bg-paper text-void" : "text-muted hover:bg-white/[.055] hover:text-paper"
              )}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="relative grid gap-5 xl:grid-cols-[1fr_290px]">
        <div className="relative min-h-[430px] overflow-hidden rounded-md border border-line bg-black/22">
          <ComposableMap projection="geoEqualEarth" projectionConfig={{ scale: 150 }} className="h-full min-h-[430px] w-full">
            <Geographies geography={countries}>
              {({ geographies }: { geographies: Array<Record<string, unknown>> }) =>
                geographies.map((geo) => (
                  <Geography
                    key={String(geo.rsmKey)}
                    geography={geo}
                    fill="rgba(238,242,237,.075)"
                    stroke="rgba(238,242,237,.08)"
                    strokeWidth={0.45}
                    style={{
                      default: { outline: "none" },
                      hover: { fill: "rgba(238,242,237,.11)", outline: "none" },
                      pressed: { outline: "none" }
                    }}
                  />
                ))
              }
            </Geographies>

            {blocs.map((bloc) => (
              <Marker key={bloc.name} coordinates={bloc.coordinates}>
                <motion.circle
                  r={bloc.radius[scenario]}
                  fill={bloc.color}
                  fillOpacity={0.12}
                  stroke={bloc.color}
                  strokeOpacity={0.46}
                  strokeWidth={0.9}
                  animate={{ r: bloc.radius[scenario] }}
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                />
                <circle r={3} fill={bloc.color} />
              </Marker>
            ))}
          </ComposableMap>
        </div>

        <aside className="rounded-md border border-line bg-black/28 p-5 backdrop-blur">
          <div className="mb-5 flex items-center justify-between">
            <span className="micro-label">Scenario</span>
            <span className="font-mono text-sm text-amber">{scenario}</span>
          </div>
          <p className="text-sm leading-7 text-paper/70">
            {scenario === "1995"
              ? "A unipolar map: American power organizes security, trade, finance, and institutional legitimacy."
              : scenario === "2026"
                ? "A fractured map: blocs harden, swing states hedge, and strategic dependencies are reclassified."
                : "A contested map: regional systems deepen as middle powers bargain across parallel orders."}
          </p>
          <div className="mt-6 space-y-2">
            {blocs.map((bloc) => (
              <div key={bloc.name} className="flex items-center justify-between gap-3 rounded border border-line bg-white/[.025] px-3 py-2">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: bloc.color }} />
                  <span className="text-xs text-paper/78">{bloc.name}</span>
                </div>
                <span className="font-mono text-[11px] text-muted">{bloc.radius[scenario]}</span>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}

function ScenarioVisual() {
  const scenarios = [
    {
      name: "Cold peace",
      description: "Major powers avoid direct war, but the world settles into durable rivalry, controlled decoupling, and permanent strategic suspicion.",
      winners: ["defense technology", "trusted suppliers", "cybersecurity"],
      losers: ["borderless platforms", "low-margin importers", "rules-only diplomacy"],
      risks: ["accidental escalation", "alliance fatigue", "technology bifurcation"],
      watch: ["export controls", "defense budgets", "Taiwan deterrence signals"]
    },
    {
      name: "Fragmented globalization",
      description: "Trade continues, but it routes through blocs, trusted corridors, regional agreements, and politically screened supply chains.",
      winners: ["Mexico", "India", "logistics software"],
      losers: ["single-source manufacturers", "pure cost optimizers", "fragile shipping models"],
      risks: ["duplicated capacity", "higher inflation", "regulatory fragmentation"],
      watch: ["friend-shoring deals", "customs data", "regional trade corridors"]
    },
    {
      name: "Taiwan shock",
      description: "A severe Taiwan crisis forces markets, governments, and companies to price the fragility of the advanced chip supply chain overnight.",
      winners: ["domestic fabs", "defense primes", "resilience planners"],
      losers: ["consumer electronics", "automakers", "high-beta tech"],
      risks: ["semiconductor halt", "naval escalation", "financial contagion"],
      watch: ["PLA exercises", "chip inventories", "US-Japan posture"]
    },
    {
      name: "Commodity supercycle",
      description: "Reindustrialization, electrification, defense demand, and infrastructure duplication collide with constrained commodity supply.",
      winners: ["copper", "uranium", "critical minerals"],
      losers: ["energy importers", "underbuilt grids", "commodity-short manufacturers"],
      risks: ["resource nationalism", "project delays", "price spikes"],
      watch: ["mine permitting", "grid investment", "strategic stockpiles"]
    },
    {
      name: "Fortress America",
      description: "The United States leans into hemispheric strategy, industrial policy, border control, energy dominance, and supply chain sovereignty.",
      winners: ["North American manufacturing", "energy infrastructure", "industrial automation"],
      losers: ["offshore arbitrage", "China-exposed suppliers", "globalist incumbents"],
      risks: ["retaliation", "labor bottlenecks", "fiscal overstretch"],
      watch: ["tariff policy", "Mexico capacity", "shipbuilding and grid spend"]
    },
    {
      name: "Multipolar disorder",
      description: "No power can impose order, institutions weaken, and regional crises interact through energy, food, migration, cyber, and finance.",
      winners: ["hard assets", "security states", "strategic autonomy players"],
      losers: ["small open economies", "fragile importers", "unhedged multinationals"],
      risks: ["cascading crises", "sanctions fragmentation", "payment-system splits"],
      watch: ["BRICS finance", "Gulf hedging", "regional war spillovers"]
    }
  ];
  const [selected, setSelected] = useState(0);
  const active = scenarios[selected];

  return (
    <div className="grid min-h-[620px] gap-4 lg:grid-cols-[0.82fr_1.18fr]">
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
        {scenarios.map((scenario, index) => (
          <button
            key={scenario.name}
            type="button"
            onClick={() => setSelected(index)}
            className={cn(
              "rounded-md border p-4 text-left transition duration-300",
              selected === index
                ? "border-amber/45 bg-amber/[.075] text-paper"
                : "border-line bg-white/[.025] text-muted hover:border-paper/25 hover:text-paper"
            )}
          >
            <span className="micro-label">{String(index + 1).padStart(2, "0")} / Scenario</span>
            <span className="mt-2 block font-serif text-2xl leading-tight">{scenario.name}</span>
          </button>
        ))}
      </div>

      <motion.article
        key={active.name}
        className="relative overflow-hidden rounded-lg border border-line bg-[#080b0d] p-5 md:p-7"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute inset-0 cinematic-grid opacity-18" />
        <div className="absolute right-[-14%] top-[-18%] h-80 w-80 rounded-full border border-amber/12" />
        <div className="relative">
          <p className="micro-label text-amber/80">Future path</p>
          <h3 className="module-title mt-4 text-paper">{active.name}</h3>
          <p className="mt-6 max-w-2xl text-base leading-7 text-paper/72">{active.description}</p>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            <ScenarioList title="Winners" items={active.winners} tone="cyan" />
            <ScenarioList title="Losers" items={active.losers} tone="danger" />
            <ScenarioList title="Risks" items={active.risks} tone="amber" />
            <ScenarioList title="What to watch" items={active.watch} tone="paper" />
          </div>
        </div>
      </motion.article>
    </div>
  );
}

function ScenarioList({
  title,
  items,
  tone
}: {
  title: string;
  items: string[];
  tone: "cyan" | "danger" | "amber" | "paper";
}) {
  const color = {
    cyan: "bg-cyan",
    danger: "bg-danger",
    amber: "bg-amber",
    paper: "bg-paper"
  }[tone];

  return (
    <div className="rounded-md border border-line bg-black/24 p-4">
      <p className="micro-label mb-4">{title}</p>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm leading-5 text-paper/76">
            <span className={cn("mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full", color)} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function QuizVisual() {
  const [selected, setSelected] = useState(0);
  const profiles = [
    {
      answer: "My supply chain depends on one cheap geography.",
      profile: "Cost Optimizer",
      meaning: "The old order rewarded this position. The new order asks whether low cost survives tariffs, export controls, shipping shocks, or political pressure.",
      watch: ["single-source exposure", "customs changes", "inventory buffers"]
    },
    {
      answer: "My advantage is domestic capacity and energy access.",
      profile: "Resilience Compounder",
      meaning: "This position improves as governments pay for redundancy, surge capacity, power security, and industrial depth.",
      watch: ["procurement budgets", "grid buildout", "factory automation"]
    },
    {
      answer: "I operate between blocs and need optionality.",
      profile: "Hedging Power",
      meaning: "The middle position can be valuable, but only if it preserves market access without becoming hostage to either side.",
      watch: ["sanctions compliance", "currency channels", "dual-use technology rules"]
    },
    {
      answer: "My core asset is data, compute, or strategic software.",
      profile: "Sovereignty Target",
      meaning: "Digital infrastructure is being pulled into national security policy. Compute, cloud, cyber, and AI access will face political constraints.",
      watch: ["chip controls", "cloud sovereignty", "AI infrastructure policy"]
    }
  ];
  const active = profiles[selected];

  return (
    <div className="grid min-h-[560px] gap-4 lg:grid-cols-[0.92fr_1.08fr]">
      <div className="space-y-3">
        <div className="rounded-md border border-amber/20 bg-amber/[.055] p-5">
          <p className="micro-label text-amber/80">Positioning question</p>
          <h3 className="mt-4 font-serif text-2xl leading-tight text-paper md:text-3xl">
            Which dependency defines your exposure?
          </h3>
        </div>
        {profiles.map((profile, index) => (
          <button
            key={profile.answer}
            type="button"
            onClick={() => setSelected(index)}
            className={cn(
              "flex w-full items-start gap-3 rounded-md border p-4 text-left transition duration-300",
              selected === index
                ? "border-amber/45 bg-amber/[.075]"
                : "border-line bg-white/[.025] hover:border-paper/25 hover:bg-white/[.045]"
            )}
          >
            <span
              className={cn(
                "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border",
                selected === index ? "border-amber bg-amber/20" : "border-paper/25"
              )}
            >
              {selected === index ? <span className="h-2 w-2 rounded-full bg-amber" /> : null}
            </span>
            <span className="text-sm leading-6 text-paper/78">{profile.answer}</span>
          </button>
        ))}
      </div>

      <motion.article
        key={active.profile}
        className="relative overflow-hidden rounded-lg border border-line bg-[#080b0d] p-5 md:p-7"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute inset-0 cinematic-grid opacity-18" />
        <div className="relative flex min-h-[500px] flex-col justify-between">
          <div>
            <p className="micro-label text-cyan/80">Strategic profile</p>
            <h3 className="module-title mt-5 text-paper">{active.profile}</h3>
            <p className="mt-6 text-base leading-7 text-paper/74">{active.meaning}</p>
          </div>

          <div className="rounded-md border border-line bg-black/24 p-4">
            <p className="micro-label mb-4">Signals to watch</p>
            <ul className="space-y-3">
              {active.watch.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-5 text-paper/76">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.article>
    </div>
  );
}

function ManifestoVisual() {
  return (
    <div className="grid min-h-[420px] place-items-center rounded-md border border-line bg-white/[.025] p-8 text-center">
      <div className="w-full max-w-lg">
        <div className="mx-auto mb-8 h-px w-32 bg-amber" />
        <PlaceholderLines lines={7} />
        <div className="mx-auto mt-8 h-px w-32 bg-amber" />
      </div>
    </div>
  );
}

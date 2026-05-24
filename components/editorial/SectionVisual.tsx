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
  return (
    <div className="relative overflow-hidden rounded-lg border border-line bg-black/24 p-4 shadow-glass md:p-6">
      <div className="absolute inset-0 cinematic-grid opacity-20" />
      <div className="relative">
        <div className="mb-6 flex items-center justify-between gap-4">
          <p className="micro-label">{title} Interactive Module</p>
          <span className="h-2 w-2 rounded-full bg-amber shadow-[0_0_22px_rgba(242,184,75,.45)]" />
        </div>
        {visual === "comparison" && <ComparisonVisual />}
        {visual === "timeline" && <TimelineVisual />}
        {visual === "network" && <NetworkVisual />}
        {visual === "tariffs" && <TariffVisual />}
        {visual === "matrix" && <MatrixVisual />}
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
  return (
    <div className="grid min-h-[420px] gap-3 md:grid-cols-2">
      {["Old Order", "New Order"].map((label, index) => (
        <div key={label} className="flex flex-col justify-between rounded-md border border-line bg-white/[.025] p-5">
          <div>
            <p className="micro-label">{label}</p>
            <div className={cn("mt-8 h-28 rounded border", index === 0 ? "border-cyan/25 bg-cyan/8" : "border-danger/25 bg-danger/8")} />
          </div>
          <PlaceholderLines lines={4} />
        </div>
      ))}
    </div>
  );
}

function TimelineVisual() {
  return (
    <div className="min-h-[420px] py-8">
      <div className="relative mx-auto h-[320px] max-w-3xl">
        <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-cyan/60 via-paper/20 to-danger/70" />
        {Array.from({ length: 7 }).map((_, index) => (
          <div
            key={index}
            className={cn("absolute flex w-[46%] items-center gap-3", index % 2 ? "left-[54%]" : "right-[54%] flex-row-reverse text-right")}
            style={{ top: `${index * 15}%` }}
          >
            <span className="h-3 w-3 shrink-0 rounded-full border border-paper/50 bg-void" />
            <div className="h-12 flex-1 rounded border border-line bg-white/[.035]" />
          </div>
        ))}
      </div>
    </div>
  );
}

function NetworkVisual() {
  return (
    <div className="relative min-h-[420px]">
      <svg viewBox="0 0 700 430" className="absolute inset-0 h-full w-full">
        <g stroke="rgba(238,242,237,.14)" strokeWidth="1">
          <path d="M110 230 C220 100 390 110 525 210" fill="none" />
          <path d="M170 310 C250 200 455 250 590 140" fill="none" />
          <path d="M120 135 C320 210 420 310 570 286" fill="none" />
        </g>
        {[
          [110, 230, "#60d5dc"],
          [250, 145, "#f2b84b"],
          [365, 245, "#eef2ed"],
          [525, 210, "#ef6b5c"],
          [170, 310, "#73c27b"],
          [590, 140, "#ef6b5c"]
        ].map(([x, y, color], index) => (
          <g key={index}>
            <circle cx={x} cy={y} r="28" fill={`${color}22`} />
            <circle cx={x} cy={y} r="8" fill={String(color)} />
          </g>
        ))}
      </svg>
    </div>
  );
}

function TariffVisual() {
  return (
    <div className="min-h-[420px] space-y-5 pt-10">
      {["Tariff Layer", "Subsidy Layer", "Export Control Layer", "Retaliation Layer"].map((label, index) => (
        <div key={label}>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs text-paper/80">{label}</span>
            <span className="font-mono text-xs text-amber">Placeholder</span>
          </div>
          <div className="h-3 rounded-full bg-white/8">
            <div className="h-3 rounded-full bg-gradient-to-r from-amber to-danger" style={{ width: `${42 + index * 12}%` }} />
          </div>
        </div>
      ))}
      <div className="mt-10 rounded-md border border-line bg-black/20 p-4">
        <PlaceholderLines lines={4} />
      </div>
    </div>
  );
}

function MatrixVisual() {
  return (
    <div className="grid min-h-[420px] grid-cols-2 gap-3 md:grid-cols-3">
      {Array.from({ length: 9 }).map((_, index) => (
        <div key={index} className="rounded-md border border-line bg-white/[.03] p-4">
          <div className="mb-8 h-8 w-8 rounded border border-cyan/25 bg-cyan/8" />
          <PlaceholderLines lines={3} />
        </div>
      ))}
    </div>
  );
}

function IndustryVisual() {
  return (
    <div className="flex min-h-[420px] items-end gap-3">
      {Array.from({ length: 9 }).map((_, index) => (
        <div key={index} className="flex flex-1 flex-col items-center gap-3">
          <div
            className="w-full rounded-t bg-gradient-to-t from-cyan/30 to-amber/80"
            style={{ height: `${80 + index * 26}px` }}
          />
          <span className="h-1.5 w-full rounded-full bg-white/10" />
        </div>
      ))}
    </div>
  );
}

function MapVisual() {
  return (
    <div className="relative min-h-[420px] overflow-hidden rounded border border-line bg-[#090d11]">
      <div className="absolute inset-0 cinematic-grid opacity-25" />
      <svg viewBox="0 0 760 430" className="absolute inset-0 h-full w-full">
        <path d="M115 165 C165 105 255 112 289 177 C318 236 250 285 172 256 C113 234 83 203 115 165 Z" fill="rgba(96,213,220,.13)" stroke="rgba(96,213,220,.35)" />
        <path d="M374 122 C475 80 607 128 632 220 C655 303 535 342 431 288 C341 242 315 154 374 122 Z" fill="rgba(239,107,92,.14)" stroke="rgba(239,107,92,.34)" />
        <path d="M300 290 C350 250 430 276 449 344 C462 393 382 415 322 383 C278 359 266 318 300 290 Z" fill="rgba(115,194,123,.13)" stroke="rgba(115,194,123,.34)" />
        <path d="M145 210 C255 160 435 180 570 245" stroke="rgba(242,184,75,.45)" fill="none" strokeDasharray="4 8" />
        <path d="M220 260 C360 225 470 228 650 160" stroke="rgba(238,242,237,.2)" fill="none" />
      </svg>
    </div>
  );
}

function BlocVisual() {
  return (
    <div className="grid min-h-[420px] gap-3 md:grid-cols-2">
      {["Sphere A", "Sphere B", "Swing States", "Chokepoints"].map((label, index) => (
        <div key={label} className="rounded-md border border-line bg-white/[.025] p-5">
          <div className="mb-6 flex items-center justify-between">
            <span className="micro-label">{label}</span>
            <span className={cn("h-2.5 w-2.5 rounded-full", index === 0 ? "bg-cyan" : index === 1 ? "bg-danger" : index === 2 ? "bg-amber" : "bg-paper")} />
          </div>
          <PlaceholderLines lines={5} />
        </div>
      ))}
    </div>
  );
}

function ScenarioVisual() {
  return (
    <div className="grid min-h-[420px] gap-4 md:grid-cols-3">
      {["Base Case", "Hard Fragmentation", "Regional Reset"].map((label) => (
        <div key={label} className="flex flex-col justify-between rounded-md border border-line bg-white/[.025] p-5">
          <p className="micro-label">{label}</p>
          <div className="my-10 h-24 rounded-full border border-paper/15" />
          <PlaceholderLines lines={4} />
        </div>
      ))}
    </div>
  );
}

function QuizVisual() {
  return (
    <div className="min-h-[420px] rounded-md border border-line bg-white/[.025] p-5">
      <div className="mb-8 h-20 rounded border border-amber/20 bg-amber/8" />
      <div className="space-y-3">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="flex items-center gap-3 rounded-md border border-line bg-black/20 p-4">
            <span className="h-4 w-4 rounded-full border border-paper/30" />
            <div className="body-placeholder flex-1" />
          </div>
        ))}
      </div>
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

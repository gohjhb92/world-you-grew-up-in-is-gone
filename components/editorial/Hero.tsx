import { ArrowDown, Globe2 } from "lucide-react";
import { thesisPillars } from "@/content/sections";
import { MotionReveal } from "@/components/editorial/MotionReveal";
import { PlaceholderLines } from "@/components/editorial/Placeholder";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-x-0 top-[18vh] h-px bg-gradient-to-r from-transparent via-paper/25 to-transparent" />
      <div aria-hidden className="absolute left-1/2 top-[19vh] h-[52vw] w-[52vw] -translate-x-1/2 rounded-full border border-paper/10" />
      <div className="editorial-container flex min-h-screen flex-col justify-between py-8 md:py-12">
        <header className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-md border border-cyan/30 bg-cyan/10 text-cyan">
              <Globe2 size={18} />
            </span>
            <span className="micro-label">Interactive Editorial Foundation</span>
          </div>
          <span className="micro-label hidden sm:inline">Scroll Narrative</span>
        </header>

        <MotionReveal className="relative max-w-6xl">
          <div className="mb-8 h-px w-44 bg-gradient-to-r from-amber to-transparent" />
          <h1 className="display-title">The World You Grew Up In Is Gone</h1>
          <div className="mt-8 grid gap-6 lg:grid-cols-[0.78fr_1fr] lg:items-end">
            <p className="font-serif text-2xl leading-snug text-paper/78 md:text-4xl">
              The End of the Liberal World Order
            </p>
            <div className="max-w-2xl lg:justify-self-end">
              <PlaceholderLines lines={3} />
            </div>
          </div>
        </MotionReveal>

        <div className="grid gap-6 pb-4 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="flex flex-wrap gap-2">
            {thesisPillars.map((pillar) => (
              <span key={pillar} className="rounded-full border border-line bg-white/[.035] px-3 py-1.5 text-xs text-muted">
                {pillar}
              </span>
            ))}
          </div>
          <a href="#world-comparison" className="inline-flex items-center gap-2 text-sm text-paper/80 transition hover:text-paper">
            Begin
            <ArrowDown size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

import { Flag } from "lucide-react";
import { MotionReveal } from "@/components/editorial/MotionReveal";
import { PlaceholderLines } from "@/components/editorial/Placeholder";
import { SectionVisual } from "@/components/editorial/SectionVisual";

export function ClosingScaffold() {
  return (
    <section id="closing-manifesto" className="editorial-container grid min-h-screen gap-10 border-t border-paper/8 py-24 md:py-32 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
      <MotionReveal>
        <div className="max-w-5xl">
          <div className="mb-8 flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-md border border-amber/30 bg-amber/10 text-amber">
              <Flag size={19} />
            </span>
            <span className="micro-label">11 / Closing Manifesto</span>
          </div>
          <h2 className="section-title">Closing Manifesto</h2>
          <PlaceholderLines className="mt-10 max-w-3xl" lines={6} />
        </div>
      </MotionReveal>

      <MotionReveal>
        <SectionVisual visual="manifesto" title="Closing Manifesto" />
      </MotionReveal>
    </section>
  );
}

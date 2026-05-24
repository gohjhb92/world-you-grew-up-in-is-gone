import type { LucideIcon } from "lucide-react";
import { MotionReveal } from "@/components/editorial/MotionReveal";
import { PlaceholderLines } from "@/components/editorial/Placeholder";
import { SectionVisual } from "@/components/editorial/SectionVisual";
import type { EditorialSection } from "@/content/sections";

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
            <span className="micro-label">{String(index).padStart(2, "0")} / Section Scaffold</span>
          </div>
          <h2 className="section-title">{title}</h2>
          <PlaceholderLines className="mt-8" lines={5} />
        </div>
      </MotionReveal>

      <MotionReveal>
        <SectionVisual visual={visual} title={title} />
      </MotionReveal>
    </section>
  );
}

import { cn } from "@/lib/cn";

export function PlaceholderLines({
  lines = 4,
  className
}: {
  lines?: number;
  className?: string;
}) {
  return (
    <div className={cn("space-y-3", className)} aria-label="Content placeholder">
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className="body-placeholder"
          style={{ width: `${index === lines - 1 ? 58 : 92 - index * 7}%` }}
        />
      ))}
    </div>
  );
}

export function VisualPlaceholder({ label }: { label: string }) {
  return (
    <div className="relative min-h-[320px] overflow-hidden rounded-lg border border-line bg-black/24 p-5 md:min-h-[460px]">
      <div className="absolute inset-0 cinematic-grid opacity-25" />
      <div className="absolute inset-x-8 top-1/2 h-px bg-gradient-to-r from-transparent via-paper/30 to-transparent" />
      <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan/25" />
      <div className="relative flex h-full min-h-[280px] flex-col justify-between md:min-h-[420px]">
        <p className="micro-label">{label}</p>
        <div>
          <div className="mb-4 h-2 w-28 rounded-full bg-amber/70" />
          <PlaceholderLines lines={3} />
        </div>
      </div>
    </div>
  );
}

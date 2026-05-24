export function GeopoliticalBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-void">
      <div className="absolute inset-0 cinematic-grid opacity-45" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(96,213,220,0.15),transparent_28%),radial-gradient(circle_at_78%_18%,rgba(242,184,75,0.12),transparent_26%),linear-gradient(180deg,rgba(7,9,11,0.22),#07090b_72%)]" />
      <div className="absolute left-1/2 top-24 h-[62vw] w-[62vw] -translate-x-1/2 rounded-full border border-paper/8 opacity-30" />
      <div className="absolute left-1/2 top-32 h-[46vw] w-[46vw] -translate-x-1/2 rounded-full border border-cyan/10 opacity-30" />
    </div>
  );
}

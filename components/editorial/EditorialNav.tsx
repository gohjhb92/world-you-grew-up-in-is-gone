import { editorialSections } from "@/content/sections";

export function EditorialNav() {
  return (
    <nav className="fixed left-4 top-1/2 z-30 hidden -translate-y-1/2 xl:block" aria-label="Editorial sections">
      <div className="glass flex flex-col gap-2 rounded-lg p-2">
        <a
          href="#hero"
          className="grid h-10 w-10 place-items-center rounded-md border border-cyan/30 bg-cyan/10 text-xs font-semibold text-cyan"
        >
          00
        </a>
        {editorialSections.map((section, index) => {
          const Icon = section.icon;
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="grid h-10 w-10 place-items-center rounded-md text-muted transition hover:bg-white/5 hover:text-paper"
              title={section.title}
            >
              <Icon size={17} />
              <span className="sr-only">{`${index + 1}. ${section.title}`}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}

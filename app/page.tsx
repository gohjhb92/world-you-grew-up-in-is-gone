import { ClosingScaffold } from "@/components/editorial/ClosingScaffold";
import { EditorialNav } from "@/components/editorial/EditorialNav";
import { GeopoliticalBackdrop } from "@/components/editorial/GeopoliticalBackdrop";
import { Hero } from "@/components/editorial/Hero";
import { ScrollProgress } from "@/components/editorial/ScrollProgress";
import { SectionFrame } from "@/components/editorial/SectionFrame";
import { editorialSections } from "@/content/sections";

export default function Home() {
  const scaffoldSections = editorialSections.filter((section) => section.id !== "closing-manifesto");

  return (
    <main className="relative min-h-screen text-paper">
      <ScrollProgress />
      <GeopoliticalBackdrop />
      <EditorialNav />
      <Hero />
      {scaffoldSections.map((section, index) => (
        <SectionFrame
          key={section.id}
          id={section.id}
          index={index + 1}
          title={section.title}
          icon={section.icon}
          visual={section.visual}
        />
      ))}
      <ClosingScaffold />
    </main>
  );
}

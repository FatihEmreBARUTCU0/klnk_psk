import { aboutText } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";
import { CollapsibleParagraphs } from "@/components/ui/CollapsibleParagraphs";

export function About() {
  return (
    <section id="hakkimda" className="relative section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeader title="Hakkımda" />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <CollapsibleParagraphs paragraphs={aboutText.paragraphs} />

          <FadeIn delay={0.2} className="relative hidden min-h-[360px] lg:block">
            <div className="absolute right-6 top-10 h-52 w-px bg-gradient-to-b from-accent/45 via-accent-2/35 to-transparent" />
            <div className="absolute right-12 top-16 h-40 w-px bg-gradient-to-b from-white/70 via-accent/25 to-transparent" />
            <div className="absolute right-24 top-24 h-28 w-px bg-gradient-to-b from-accent-2/35 to-transparent" />
            <div className="absolute right-0 top-44 h-px w-44 bg-gradient-to-r from-accent/35 to-transparent" />
            <div className="absolute right-0 top-60 h-px w-32 bg-gradient-to-r from-accent-2/35 to-transparent" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

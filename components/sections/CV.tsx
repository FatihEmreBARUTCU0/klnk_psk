import { cvTimeline } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";

export function CV() {
  return (
    <section id="cv" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          title="Hikayem"
          subtitle="Akademik geçmişim ve klinik deneyimim kronolojik olarak."
        />

        <div className="relative mt-16">
          <div className="absolute left-0 top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-accent/40 via-border to-transparent md:left-[220px] md:block" />

          <div className="space-y-14">
            {cvTimeline.map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="group grid gap-4 md:grid-cols-[220px_1fr] md:gap-14">
                  <div className="md:text-right">
                    <p className="font-display text-xl text-accent transition-colors group-hover:text-text">
                      {item.year}
                    </p>
                    <p className="mt-1 text-sm font-medium tracking-wide text-text">
                      {item.institution}
                    </p>
                  </div>
                  <div className="md:border-l md:border-transparent md:pl-14">
                    <p className="text-base leading-[1.85] text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

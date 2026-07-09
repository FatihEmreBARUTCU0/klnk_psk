import { educations } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";

export function Education() {
  return (
    <section id="egitimler" className="section-padding">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          title="Eğitimler"
          subtitle="Aldığım mesleki eğitimler ve sertifikasyon programları."
          align="center"
        />

        <FadeIn delay={0.15} className="mt-14">
          <div className="rounded-2xl border border-white/40 bg-white/25 px-6 backdrop-blur-sm md:px-8">
            <Accordion type="single" collapsible className="w-full">
              {educations.map((edu, i) => (
                <AccordionItem key={i} value={`edu-${i}`}>
                  <AccordionTrigger>
                    <div>
                      <span>{edu.title}</span>
                      <p className="mt-1 font-sans text-sm font-normal text-muted">
                        {edu.institution
                          ? `${edu.institution} · ${edu.duration}`
                          : edu.duration}
                      </p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    {edu.description ? (
                      <p className="leading-relaxed">{edu.description}</p>
                    ) : null}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

import { Brain, Heart, Users, Sparkles } from "lucide-react";
import { services } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";

const iconMap = {
  brain: Brain,
  heart: Heart,
  users: Users,
  sparkles: Sparkles,
};

export function Services() {
  return (
    <section id="calisma-alanlari" className="relative section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          title="Çalışma Alanları"
          subtitle="Uzmanlık alanlarım ve terapi sürecinde ele aldığım konular."
        />

        <div className="mt-14 grid gap-5 min-[520px]:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <FadeIn key={service.title} delay={i * 0.08}>
                <div className="premium-card h-full">
                  <div className="relative z-10">
                    <div className="mb-5 inline-flex rounded-full border border-accent-2/20 bg-accent-2/10 p-3 text-accent-2">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display text-xl text-text">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {service.description}
                    </p>
                    <ul className="mt-5 space-y-2 border-t border-border/60 pt-4">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="text-xs tracking-wide text-muted"
                        >
                          <span className="mr-2 text-accent">—</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

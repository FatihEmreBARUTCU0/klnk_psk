"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Compass,
  Feather,
  Fingerprint,
  Heart,
  Sparkles,
  Sunrise,
  Users,
  Waves,
  Wind,
} from "lucide-react";
import { services } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";

const iconMap = {
  wind: Wind,
  sunrise: Sunrise,
  feather: Feather,
  heart: Heart,
  sparkles: Sparkles,
  waves: Waves,
  users: Users,
  compass: Compass,
  fingerprint: Fingerprint,
};

export function Services() {
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleCard = (title: string) => {
    setExpandedCards((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <section id="calisma-alanlari" className="relative section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          title="Çalışma Alanları"
          subtitle="Uzmanlık alanlarım ve terapi sürecinde ele aldığım konular."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            const isExpanded = Boolean(expandedCards[service.title]);
            return (
              <FadeIn key={service.title} delay={i * 0.08}>
                <div className="premium-card h-full !p-3 sm:!p-4 lg:!p-6">
                  <div className="relative z-10">
                    <div className="mb-3 overflow-hidden rounded-xl sm:mb-5">
                      <div className="relative aspect-[16/9]">
                        <Image
                          src={service.image}
                          alt={`${service.title} temalı görsel`}
                          fill
                          priority={false}
                          loading="lazy"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                          className={`object-cover transition-transform duration-500 group-hover:scale-[1.03] ${
                            service.title ===
                            "Kişilik Örüntüleri ve Kendini Anlama Süreçleri"
                              ? "object-[50%_30%]"
                              : ""
                          }`}
                        />
                      </div>
                    </div>
                    <div className="mb-3 inline-flex rounded-full border border-accent-2/20 bg-accent-2/10 p-2 text-accent-2 sm:mb-5 sm:p-3">
                      <Icon className="h-[17px] w-[17px] sm:h-5 sm:w-5" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display text-base text-text sm:text-lg lg:text-xl">
                      {service.title}
                    </h3>
                    <p
                      className={`mt-2 text-xs leading-relaxed text-muted sm:mt-3 sm:text-sm ${
                        isExpanded ? "" : "line-clamp-3"
                      }`}
                    >
                      {service.description}
                    </p>
                    <button
                      type="button"
                      className="mt-2 text-xs font-medium text-accent transition-colors hover:text-text sm:text-sm"
                      onClick={() => toggleCard(service.title)}
                    >
                      {isExpanded ? "Daha az göster" : "Devamını oku"}
                    </button>
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

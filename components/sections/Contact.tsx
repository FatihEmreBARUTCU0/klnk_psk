import { Mail } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";

export function Contact() {
  return (
    <section id="iletisim" className="section-padding">
      <div className="mx-auto max-w-2xl text-center">
        <SectionHeader
          title="İletişim"
          subtitle="Randevu ve iletişim formu yakında aktif olacak."
          align="center"
        />

        <FadeIn delay={0.15} className="mt-14">
          <div className="premium-card px-8 py-14">
            <p className="font-display text-3xl text-text">Yakında aktif olacak</p>
            <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Eylül–Ekim 2026 itibarıyla iletişim formu ve WhatsApp butonu
              eklenecektir.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              {siteConfig.instagram && (
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  <InstagramIcon size={16} />
                  Instagram
                </a>
              )}
              {siteConfig.email && (
                <a href={`mailto:${siteConfig.email}`} className="btn-ghost">
                  <Mail size={16} />
                  E-posta
                </a>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

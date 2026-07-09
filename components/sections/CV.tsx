import { cvTimeline } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";
import { CollapsibleParagraphs } from "@/components/ui/CollapsibleParagraphs";

const storyIntro = [
  "Psikolojiye olan ilgim, insan davranışlarını yalnızca görünen yönleriyle değil; duygular, düşünceler, ilişkiler, geçmiş deneyimler ve içsel çatışmalarla birlikte anlama isteğimle başladı.",
  "Psikoloji eğitimime Özyeğin Üniversitesi'nde başladım; ardından Üsküdar Üniversitesi Psikoloji Bölümü'nden mezun oldum. Lisans eğitimim boyunca psikolojinin farklı alanlarını tanıma fırsatı buldum ve klinik psikolojiye olan ilgim giderek belirginleşti. Bu süreçte Junior & Parents Clinic ve Naisa Psikolojik Danışmanlık Ofisi'nde staj yaparak psikolojik danışmanlık ve klinik gözlem alanlarında deneyim kazandım.",
  "Klinik alandaki yolculuğumu İstanbul Gedik Üniversitesi Klinik Psikoloji Yüksek Lisans Programı ile sürdürdüm. Yüksek lisans sürecimde hem akademik araştırma becerilerimi geliştirdim hem de klinik uygulamaya yönelik kuramsal ve pratik bilgilerimi derinleştirdim. Tez çalışmamda benlik saygısı, sosyal kaygı, bilişsel çarpıtmalar ve duygu düzenleme stratejileri arasındaki ilişkileri inceledim.",
  "2023-2024 yıllarında Bilişsel Psikoloji'de stajımı tamamladım. Ayrıca Kasım 2024 - Şubat 2025 tarihleri arasında online terapi süreçlerinde 350 saat vaka deneyimi edindim.",
  "Bugün, özel klinik alanımı oluştururken amacım; danışanların kendilerini daha iyi anlayabilecekleri, duygularını güvenle ifade edebilecekleri ve yaşamlarında tekrar eden döngüleri fark ederek daha işlevsel yollar geliştirebilecekleri bir terapi alanı sunmak.",
];

export function CV() {
  return (
    <section id="cv" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          title="Hikayem"
          subtitle="Akademik geçmişim ve klinik deneyimim kronolojik olarak."
        />

        <div className="mt-8 md:mt-10">
          <CollapsibleParagraphs
            paragraphs={storyIntro}
            desktopContainerClassName="hidden space-y-6 md:block"
            mobileContainerClassName="space-y-4 md:hidden"
            desktopParagraphClassName="text-base leading-[1.85] text-muted md:text-lg"
            mobileParagraphClassName="text-sm leading-normal text-muted"
            delayStart={0.1}
          />
        </div>

        <div className="relative mt-10 md:mt-16">
          <div className="absolute left-0 top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-accent/40 via-border to-transparent md:left-[220px] md:block" />

          <div className="space-y-6 md:space-y-14">
            {cvTimeline.map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="group grid gap-2 rounded-xl border border-white/35 bg-white/20 p-3 md:grid-cols-[220px_1fr] md:gap-14 md:rounded-none md:border-0 md:bg-transparent md:p-0">
                  <div className="md:text-right">
                    <p className="font-display text-lg text-accent transition-colors group-hover:text-text md:text-xl">
                      {item.year}
                    </p>
                    <p className="mt-0.5 text-xs font-medium tracking-wide text-text md:mt-1 md:text-sm">
                      {item.institution}
                    </p>
                  </div>
                  <div className="md:border-l md:border-transparent md:pl-14">
                    <p className="text-sm leading-normal text-muted md:text-base md:leading-[1.85]">
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

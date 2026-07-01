export const siteConfig = {
  name: "Zeynep",
  fullName: "Zeynep [Soyad]",
  title: "Klinik Psikolog | Psikoterapist",
  description:
    "Bireysel terapi ve psikolojik danışmanlık hizmetleri sunan klinik psikolog.",
  instagram: "",
  email: "",
};

export const navLinks = [
  { label: "Hakkımda", href: "#hakkimda" },
  { label: "Eğitimler", href: "#egitimler" },
  { label: "Çalışma Alanları", href: "#calisma-alanlari" },
  { label: "Blog", href: "#blog" },
  { label: "Galeri", href: "#galeri" },
  { label: "İletişim", href: "#iletisim", disabled: true },
];

export const heroText = {
  paragraph:
    "Her bireyin kendine özgü bir hikayesi olduğuna inanıyorum. Terapi sürecinde güvenli ve yargısız bir alan sunarak, birlikte anlamlandırma ve iyileşme yolculuğuna çıkıyoruz.",
};

export const aboutText = {
  paragraphs: [
    "Klinik psikolog olarak, bireylerin yaşam kalitesini artırmayı ve içsel kaynaklarını keşfetmelerine eşlik etmeyi amaçlıyorum. Akademik eğitimim ve klinik deneyimim doğrultusunda, kanıta dayalı terapi yaklaşımlarını kişiye özel bir çerçevede uyguluyorum.",
    "Terapi odasında empati, gizlilik ve saygı temel değerlerimdir. Her danışanın benzersiz deneyimlerini anlamaya ve birlikte anlamlı bir değişim yaratmaya odaklanıyorum.",
    "Çalışmalarımda bilişsel davranışçı terapi, şema terapi ve kabul ve kararlılık terapisi gibi yaklaşımlardan yararlanıyorum.",
  ],
};

export const cvTimeline = [
  {
    year: "2020 – Günümüz",
    institution: "Özel Klinik",
    description:
      "Yetişkin bireylerle bireysel psikoterapi çalışmaları. Anksiyete, depresyon ve kişilik bozuklukları alanlarında klinik deneyim.",
  },
  {
    year: "2018 – 2020",
    institution: "Üniversite Hastanesi",
    description:
      "Psikiyatri servisinde stajyer ve asistan psikolog olarak görev. Değerlendirme ve müdahale süreçlerinde aktif rol.",
  },
  {
    year: "2016 – 2018",
    institution: "Yüksek Lisans",
    description:
      "Klinik Psikoloji alanında yüksek lisans eğitimi. Tez çalışması: Yetişkinlerde anksiyete ve baş etme stratejileri.",
  },
  {
    year: "2012 – 2016",
    institution: "Lisans Eğitimi",
    description:
      "Psikoloji lisans programı. Temel psikoloji, klinik psikopatoloji ve araştırma yöntemleri eğitimi.",
  },
];

export const educations = [
  {
    title: "Bilişsel Davranışçı Terapi Eğitimi",
    institution: "Türk Psikologlar Derneği",
    duration: "6 Ay",
    description:
      "Yetişkin popülasyonunda BDT uygulamaları, vaka formülasyonu ve müdahale teknikleri üzerine kapsamlı eğitim.",
  },
  {
    title: "Şema Terapi Temel Eğitimi",
    institution: "Uluslararası Şema Terapi Enstitüsü",
    duration: "4 Ay",
    description:
      "Erken dönem uyumsuz şemalar, modlar ve şema terapi teknikleri üzerine temel düzey eğitim.",
  },
  {
    title: "EMDR Terapi Eğitimi",
    institution: "EMDR Derneği",
    duration: "3 Ay",
    description:
      "Travma odaklı bilişsel yeniden yapılandırma tekniği. Faz 1 ve Faz 2 eğitimleri tamamlandı.",
  },
  {
    title: "Kabul ve Kararlılık Terapisi",
    institution: "Bağlam Psikoloji",
    duration: "2 Ay",
    description:
      "ACT temel prensipleri: kabul, bilişsel ayrışma, değerler ve kararlı eylem üzerine uygulamalı eğitim.",
  },
];

export const services = [
  {
    title: "Anksiyete",
    icon: "brain" as const,
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
    description:
      "Kaygı bozuklukları, panik atak ve sosyal anksiyete ile başa çıkma stratejileri geliştirme.",
    items: ["Panik Bozukluk", "Yaygın Anksiyete", "Sosyal Fobi"],
  },
  {
    title: "Depresyon",
    icon: "heart" as const,
    image:
      "https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?auto=format&fit=crop&w=1200&q=80",
    description:
      "Duygudurum bozuklukları, motivasyon kaybı ve yaşam doyumu konularında destek.",
    items: ["Majör Depresyon", "Distimi", "Mevsimsel Depresyon"],
  },
  {
    title: "İlişki Sorunları",
    icon: "users" as const,
    image:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=80",
    description:
      "İletişim güçlükleri, bağlanma sorunları ve ilişki dinamiklerini anlama.",
    items: ["Çift Terapisi", "Bağlanma", "İletişim"],
  },
  {
    title: "Kişilik",
    icon: "sparkles" as const,
    image:
      "https://images.unsplash.com/photo-1488953348951-d465fedacbc3?auto=format&fit=crop&w=1200&q=80",
    description:
      "Kişilik bozuklukları, öz-değer ve kimlik gelişimi üzerine terapötik çalışma.",
    items: ["Borderline", "Narsisistik", "Kaçıngan"],
  },
];

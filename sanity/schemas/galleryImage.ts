import { defineField, defineType } from "sanity";

export const galleryImage = defineType({
  name: "galleryImage",
  title: "Galeri Görseli",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Görsel",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "alt",
      title: "Alternatif Metin",
      type: "string",
      description: "Erişilebilirlik için kısa görsel tanımı (ekranda görünmez).",
    }),
    defineField({
      name: "caption",
      title: "Açıklama",
      type: "text",
      rows: 2,
      description: "Görselin altında gösterilecek kısa açıklama (isteğe bağlı).",
    }),
    defineField({
      name: "order",
      title: "Sıra",
      type: "number",
      initialValue: 0,
    }),
  ],
  preview: {
    select: { title: "caption", subtitle: "alt", media: "image" },
    prepare({ title, subtitle, media }) {
      return {
        title: title || subtitle || "Galeri görseli",
        media,
      };
    },
  },
});

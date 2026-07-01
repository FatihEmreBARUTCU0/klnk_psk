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
    }),
    defineField({
      name: "order",
      title: "Sıra",
      type: "number",
      initialValue: 0,
    }),
  ],
  preview: {
    select: { title: "alt", media: "image" },
  },
});

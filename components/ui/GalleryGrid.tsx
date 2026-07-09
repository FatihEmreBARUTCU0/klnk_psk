"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { urlFor } from "@/sanity/lib/image";

export interface GalleryItem {
  _id: string;
  image: { asset: { _ref: string } };
  alt?: string;
  caption?: string;
  order?: number;
}

interface GalleryGridProps {
  images: GalleryItem[];
}

export function GalleryGrid({ images }: GalleryGridProps) {
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  if (images.length === 0) {
    return (
      <div className="grid gap-6 min-[560px]:grid-cols-2 lg:grid-cols-3">
        {[0, 1, 2].map((idx) => (
          <FadeIn key={idx} delay={0.08 * idx}>
            <div className="premium-card overflow-hidden !p-0">
              <div className="skeleton-static aspect-square w-full min-[560px]:aspect-[4/3]" />
              <div className="p-4">
                <div className="skeleton-static h-4 w-2/3 rounded-full" />
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-4">
        {images.map((item, i) => (
          <FadeIn key={item._id} delay={i * 0.05} className="w-full">
            <figure className="md:mb-0">
              <button
                type="button"
                onClick={() => setSelected(item)}
                className="group block w-full overflow-hidden rounded-xl aspect-[4/3] focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <Image
                  src={urlFor(item.image).width(600).url()}
                  alt={item.alt || item.caption || "Galeri görseli"}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </button>
              {item.caption && (
                <figcaption className="mt-4 mb-2 px-1 pb-1 text-sm leading-relaxed text-muted md:mt-3 md:mb-0 md:pb-0">
                  {item.caption}
                </figcaption>
              )}
            </figure>
          </FadeIn>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-text/80 p-4 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <button
              type="button"
              className="absolute right-6 top-6 text-white/80 transition-colors hover:text-white"
              onClick={() => setSelected(null)}
              aria-label="Kapat"
            >
              <X size={28} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={urlFor(selected.image).width(1200).url()}
                alt={selected.alt || selected.caption || "Galeri görseli"}
                width={1200}
                height={800}
                className="max-h-[90vh] w-auto object-contain"
              />
              {selected.caption && (
                <p className="bg-text/90 px-5 py-3 text-center text-sm leading-relaxed text-white/90">
                  {selected.caption}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

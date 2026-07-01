"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { heroText, siteConfig } from "@/lib/constants";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeIn = (delayMs: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay: delayMs / 1000, ease },
});

const nameParts = siteConfig.fullName.split(" ");
const firstName = nameParts[0] ?? "Zeynep";
const surname = nameParts.slice(1).join(" ") || "[Soyad]";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-screen items-center overflow-hidden section-padding pb-24 pt-28 md:pb-20"
    >
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <motion.p
            {...fadeIn(0)}
            className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-text/80 md:mb-5 md:text-[13px] md:tracking-[0.28em]"
          >
            {siteConfig.title.toUpperCase()}
          </motion.p>

          <motion.h1
            {...fadeIn(300)}
            className="font-display text-[clamp(2.75rem,6vw,4.75rem)] leading-[1.02] text-text"
          >
            {firstName}
          </motion.h1>

          <motion.p
            {...fadeIn(600)}
            className="font-display text-[clamp(2.75rem,6vw,4.75rem)] leading-[1.02] text-accent"
          >
            {surname}
          </motion.p>

          <motion.div
            {...fadeIn(750)}
            className="mt-8 h-px w-20 bg-gradient-to-r from-accent via-text/20 to-transparent"
          />

          <motion.p
            {...fadeIn(900)}
            className="mt-7 max-w-md text-[15px] leading-[1.8] text-text/75 md:mt-8 md:text-lg md:leading-[1.85]"
          >
            {heroText.paragraph}
          </motion.p>

          <motion.div
            {...fadeIn(1200)}
            className="mt-10 flex flex-wrap gap-3 md:mt-12 md:gap-4"
          >
            <a href="#hakkimda" className="btn-primary group">
              Hakkımda
              <ArrowDown
                size={15}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </a>
            <a href="#calisma-alanlari" className="btn-ghost">
              Çalışma Alanları
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -48 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.6, ease }}
          className="order-last mx-auto mt-2 w-full max-w-[12rem] lg:order-none lg:mt-0 lg:max-w-none"
        >
          <ImageFrame aspect="hero" label="Profil fotoğrafı" />
        </motion.div>
      </div>

      <motion.a
        href="#hakkimda"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-text/50 transition-colors hover:text-text"
        aria-label="Aşağı kaydır"
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">Keşfet</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={18} strokeWidth={1.5} />
        </motion.span>
      </motion.a>
    </section>
  );
}

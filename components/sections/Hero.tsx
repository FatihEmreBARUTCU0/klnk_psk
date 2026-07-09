"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
      className="relative isolate flex min-h-[86vh] items-center overflow-hidden section-padding py-14 md:min-h-screen md:pb-20 md:pt-28"
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
            className="mt-10 hidden flex-wrap gap-3 md:mt-12 md:flex md:gap-4"
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
          className="order-last mx-auto mt-6 w-[65vw] max-w-[14rem] max-h-[400px] lg:order-none lg:mt-0 lg:w-full lg:max-w-[22rem]"
        >
          <ImageFrame aspect="hero" label="Profil fotoğrafı">
            <Image
              src="/images/zeynep-profil.jpg"
              alt="Zeynep Doğruel profil fotoğrafı"
              fill
              priority
              className="object-cover object-top"
            />
          </ImageFrame>
          <motion.div
            {...fadeIn(1200)}
            className="mt-6 flex flex-wrap justify-center gap-3 md:hidden"
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
          <motion.a
            href="#hakkimda"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.45, duration: 0.45 }}
            className="mt-4 flex flex-col items-center gap-1 pb-2 text-text/55 transition-colors hover:text-text md:hidden"
            aria-label="Aşağı kaydır"
          >
            <span className="text-[10px] leading-none uppercase tracking-[0.25em]">
              Keşfet
            </span>
            <motion.span
              className="inline-flex items-center justify-center leading-none"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown size={17} strokeWidth={1.5} />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>

      <motion.a
        href="#hakkimda"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-text/50 transition-colors hover:text-text md:flex"
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

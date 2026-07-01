"use client";

import { motion, type Transition } from "framer-motion";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

const transition: Transition = {
  duration: 0.4,
  ease: [0.22, 1, 0.36, 1],
};

export function FadeIn({ children, className, delay = 0, y = 24 }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25, margin: "0px 0px -80px 0px" }}
      transition={{ ...transition, delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

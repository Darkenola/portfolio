"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  number: string;
  label: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  number,
  label,
  title,
  subtitle,
  className,
  align = "left",
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3 font-mono text-xs md:text-sm tracking-[0.3em] uppercase text-white/50"
      >
        <span className="h-px w-10 bg-gradient-to-r from-neon-cyan/0 via-neon-cyan to-neon-cyan/0" />
        <span className="text-neon-cyan">{number}</span>
        <span>/ {label}</span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        className="font-display font-semibold tracking-tight text-4xl md:text-6xl lg:text-7xl leading-[0.95] max-w-5xl text-balance"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-white/60 text-base md:text-lg max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

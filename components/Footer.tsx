"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import Link from "next/link";
import { chapters } from "@/lib/data/nav";

const links = chapters.filter((c) => c.key !== "home");

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-10">
      <div className="absolute inset-0 -z-10 grid-bg [mask-image:radial-gradient(60%_60%_at_50%_50%,#000_0%,transparent_75%)] opacity-20" />

      {/* huge wordmark */}
      <div className="container-pad pt-16 md:pt-24 pb-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-bold tracking-[-0.04em] leading-[0.9] text-[10vw] md:text-[7vw] text-gradient-static text-center select-none"
        >
          The path you fear is the one that will change you.
        </motion.div>
      </div>

      <div className="container-pad py-8 grid md:grid-cols-3 gap-6 items-start border-t border-white/5">
        <div className="flex flex-col gap-2">
          <span className="font-display text-lg text-white">Emirhan Atıcı</span>
          <span className="text-sm text-white/55">Web Developer & Digital Creator</span>
          <span className="text-xs font-mono text-white/40 mt-2">
            emirhanac12@gmail.com
          </span>
        </div>

        <ul className="flex flex-wrap gap-x-5 gap-y-2 md:justify-center">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm text-white/60 hover:text-white transition"
                data-cursor="hover"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex md:justify-end">
          <Link
            href="/"
            data-cursor="hover"
            className="group inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"
          >
            Yukarı çık
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full glass border border-white/10 group-hover:border-neon-cyan/50 transition">
              <ArrowUp size={16} />
            </span>
          </Link>
        </div>
      </div>

      <div className="container-pad py-6 border-t border-white/5 flex flex-col md:flex-row gap-2 md:items-center md:justify-between text-xs font-mono text-white/40">
        <span>© {new Date().getFullYear()} Emirhan Atıcı — Tüm hakları saklıdır.</span>
        <span>Tasarlandı & geliştirildi · Next.js · Framer Motion</span>
      </div>
    </footer>
  );
}

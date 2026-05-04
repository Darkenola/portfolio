"use client";

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import MagneticButton from "./MagneticButton";
import { cn } from "@/lib/utils";
import { chapters } from "@/lib/data/nav";

const links = chapters;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  return (
    <>
      <motion.header
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-[backdrop-filter,background] duration-300",
          scrolled && "backdrop-blur-xl bg-ink-950/60 border-b border-white/5",
        )}
      >
        <nav className="container-pad flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2 group" data-cursor="hover">
            <span className="relative inline-flex items-center justify-center w-8 h-8 rounded-lg glass-strong">
              <span className="text-sm font-display font-bold text-gradient-static">EA</span>
              <span className="absolute inset-0 rounded-lg bg-gradient-to-br from-neon-cyan/30 to-neon-purple/30 opacity-0 group-hover:opacity-100 blur-md transition-opacity" />
            </span>
            <span className="hidden sm:inline font-display text-sm tracking-tight text-white/80 group-hover:text-white transition">
              ALONE
            </span>
          </Link>

          <ul className="hidden lg:flex items-center gap-1 glass rounded-full px-2 py-1.5">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="relative px-4 py-2 text-sm text-white/70 hover:text-white rounded-full transition-colors group"
                  data-cursor="hover"
                >
                  <span className="relative z-10">{l.label}</span>
                  <span className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <MagneticButton href="/contact" variant="primary" className="px-5 py-2.5 text-sm">
                Teklif Al <ArrowUpRight size={16} strokeWidth={2.4} />
              </MagneticButton>
            </div>
            <button
              aria-label="Menüyü aç"
              onClick={() => setOpen(true)}
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full glass hover:border-white/20 transition"
              data-cursor="hover"
            >
              <Menu size={20} />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[80] bg-ink-950"
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{
              clipPath: "circle(150% at 100% 0%)",
              transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
            }}
            exit={{
              clipPath: "circle(0% at 100% 0%)",
              transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
            }}
          >
            <div className="absolute inset-0 bg-aurora opacity-40" />
            <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(60%_60%_at_50%_50%,#000_0%,transparent_70%)] opacity-30" />

            <div className="relative h-full flex flex-col container-pad">
              <div className="flex items-center justify-between h-16 md:h-20">
                <span className="font-display text-sm tracking-tight text-white/80">
                  ALONE
                </span>
                <button
                  aria-label="Menüyü kapat"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center w-11 h-11 rounded-full glass hover:border-white/20"
                  data-cursor="hover"
                >
                  <X size={20} />
                </button>
              </div>

              <ul className="flex-1 flex flex-col justify-center gap-2">
                {links.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.15 + i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-baseline gap-4 py-2 border-b border-white/5"
                      data-cursor="hover"
                    >
                      <span className="font-mono text-xs text-white/40 w-10">
                        {l.num}
                      </span>
                      <span className="font-display text-5xl md:text-7xl font-semibold tracking-tight text-white/80 group-hover:text-gradient-static transition">
                        {l.label}
                      </span>
                      <ArrowUpRight
                        className="ml-auto opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition text-neon-cyan"
                        size={32}
                      />
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="pb-10 flex flex-col md:flex-row gap-4 md:items-center md:justify-between"
              >
                <div className="text-sm text-white/50 font-mono">
                  emirhanac12@gmail.com
                </div>
                <MagneticButton href="/contact" variant="primary">
                  Teklif Al <ArrowUpRight size={16} />
                </MagneticButton>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

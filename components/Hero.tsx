"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Sparkles, Code2, Cpu, Zap, Layers, Globe } from "lucide-react";
import MagneticButton from "./MagneticButton";

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 2.7 } },
};
const item = {
  hidden: { y: 40, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden flex items-center pt-28 md:pt-32"
    >
      {/* background */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-aurora" />
        <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(70%_70%_at_50%_40%,#000_0%,transparent_80%)] opacity-50" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-neon-purple/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] rounded-full bg-neon-cyan/10 blur-3xl" />
      </motion.div>

      <div className="container-pad w-full grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <motion.div
          className="lg:col-span-7 flex flex-col gap-7"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} className="inline-flex">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-xs font-mono tracking-wide text-white/70">
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-neon-cyan animate-pulse-soft" />
                <span className="absolute inset-0 rounded-full bg-neon-cyan blur-md" />
              </span>
              <Sparkles size={12} className="text-neon-cyan" />
              Premium Web Developer & Digital Creator
            </span>
          </motion.div>

          <motion.p
            variants={item}
            className="text-white/60 text-base md:text-lg max-w-md font-mono"
          >
            Merhaba, ben Emirhan Atıcı.
          </motion.p>

          <h1 className="font-display font-semibold tracking-[-0.03em] leading-[0.92] text-[13vw] md:text-[8.4vw] lg:text-[6.2vw]">
            <RevealLine delay={2.85}>
              <span className="text-white">Modern web</span>
            </RevealLine>
            <RevealLine delay={2.95}>
              <span className="text-gradient bg-[length:300%_100%] animate-gradient-x">
                deneyimleri
              </span>
            </RevealLine>
            <RevealLine delay={3.05}>
              <span className="text-white">tasarlıyor</span>{" "}
              <span className="text-white/50 italic font-light">&amp;</span>{" "}
              <span className="text-white">geliştiriyorum.</span>
            </RevealLine>
          </h1>

          <motion.p
            variants={item}
            className="text-white/65 text-base md:text-lg max-w-xl leading-relaxed"
          >
            Markalar, girişimler ve dijital projeler için <em className="not-italic text-white">hızlı</em>,{" "}
            <em className="not-italic text-white">estetik</em>,{" "}
            <em className="not-italic text-white">premium</em> ve{" "}
            <em className="not-italic text-white">dönüşüm odaklı</em> web siteleri geliştiriyorum.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-3 pt-2">
            <MagneticButton href="/projects" variant="primary">
              Projelerimi İncele <ArrowUpRight size={18} />
            </MagneticButton>
            <MagneticButton href="/contact" variant="secondary">
              Benimle Çalış <ArrowUpRight size={18} />
            </MagneticButton>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-6 pt-6">
            {[
              { k: "50+", l: "Proje" },
              { k: "5+", l: "Yıl Deneyim" },
              { k: "100%", l: "Memnuniyet" },
            ].map((s) => (
              <div key={s.l} className="flex flex-col">
                <span className="font-display text-2xl md:text-3xl font-semibold text-gradient-static">
                  {s.k}
                </span>
                <span className="text-xs uppercase tracking-widest text-white/40">{s.l}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3.0, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative h-[460px] md:h-[560px]"
        >
          <HeroVisual />
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.6, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.4em] uppercase text-white/40 font-mono">
          Scroll
        </span>
        <span className="relative w-[1px] h-10 overflow-hidden bg-white/10">
          <motion.span
            className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-neon-cyan to-transparent"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </section>
  );
}

function RevealLine({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

function HeroVisual() {
  return (
    <div className="relative w-full h-full">
      {/* glowing orb */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-[80%] aspect-square rounded-full bg-gradient-to-br from-neon-cyan/20 via-neon-blue/10 to-neon-purple/20 blur-3xl" />
        <div className="absolute w-[60%] aspect-square rounded-full border border-white/5 animate-spin-slow" />
        <div
          className="absolute w-[80%] aspect-square rounded-full border border-white/5 animate-spin-slow"
          style={{ animationDirection: "reverse", animationDuration: "26s" }}
        />
      </div>

      {/* code window */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-6 left-0 right-0 mx-auto w-[88%] max-w-[420px] glass-strong rounded-2xl border-grad p-1 shadow-2xl shadow-neon-purple/10"
      >
        <div className="rounded-xl bg-ink-900/80 backdrop-blur-xl">
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
            <span className="ml-3 text-[11px] font-mono text-white/40">~/portfolio/page.tsx</span>
          </div>
          <pre className="p-4 text-[11px] md:text-[12px] leading-relaxed font-mono text-white/80 overflow-hidden">
{`const dev = {
  name: "Emirhan Atıcı",
  role: "Web Developer",
  stack: ["Next.js", "TS", "Tailwind"],
  ship: () => "premium ✨",
};

export default dev;`}
          </pre>
        </div>
      </motion.div>

      {/* floating chips */}
      {[
        { Icon: Code2, label: "Next.js", x: "-12%", y: "20%", d: 0.3 },
        { Icon: Cpu, label: "TypeScript", x: "82%", y: "8%", d: 0.5 },
        { Icon: Zap, label: "Tailwind", x: "88%", y: "62%", d: 0.7 },
        { Icon: Layers, label: "Framer", x: "-6%", y: "70%", d: 0.9 },
        { Icon: Globe, label: "Vercel", x: "78%", y: "92%", d: 1.1 },
      ].map(({ Icon, label, x, y, d }) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3 + d, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute"
          style={{ left: x, top: y }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4 + d * 2, repeat: Infinity, ease: "easeInOut" }}
            className="glass-strong rounded-full px-3.5 py-2 inline-flex items-center gap-2 text-xs font-mono text-white/80 glow-ring-soft"
          >
            <Icon size={14} className="text-neon-cyan" />
            {label}
          </motion.div>
        </motion.div>
      ))}

      {/* dashboard panel */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-2 right-2 w-[58%] max-w-[260px] glass-strong rounded-2xl p-4 border-grad"
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
            Performance
          </span>
          <span className="text-[10px] font-mono text-neon-cyan">98 / 100</span>
        </div>
        <div className="flex items-end gap-1 h-12">
          {[40, 65, 50, 80, 70, 95, 85, 92, 78, 90].map((v, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${v}%` }}
              transition={{ delay: 3.2 + i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 rounded-sm bg-gradient-to-t from-neon-cyan/40 to-neon-purple/80"
            />
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between text-[10px] font-mono text-white/50">
          <span>LCP 1.2s</span>
          <span>CLS 0.02</span>
          <span>TTI 1.8s</span>
        </div>
      </motion.div>
    </div>
  );
}

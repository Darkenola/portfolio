"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { cn } from "@/lib/utils";

type Cat = "Tümü" | "Web" | "Bot" | "Panel" | "FiveM";

type Project = {
  title: string;
  category: Exclude<Cat, "Tümü">;
  tagline: string;
  tags: string[];
  gradient: string;
  year: string;
};

const projects: Project[] = [
  {
    title: "Skyzon Development",
    category: "Web",
    tagline: "Premium kurumsal yazılım stüdyosu kimliği.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    gradient: "from-cyan-500/40 via-blue-500/30 to-violet-500/40",
    year: "2025",
  },
  {
    title: "Restaurant POS / Menu System",
    category: "Web",
    tagline: "Sipariş, masa ve dijital menü için tam stack çözüm.",
    tags: ["Next.js", "Node.js", "MySQL"],
    gradient: "from-amber-500/40 via-rose-500/30 to-violet-500/40",
    year: "2024",
  },
  {
    title: "Discord Ticket Bot",
    category: "Bot",
    tagline: "Modüler destek sistemi, transcript ve panel.",
    tags: ["Discord.js", "Node.js", "MongoDB"],
    gradient: "from-indigo-500/40 via-purple-500/30 to-cyan-500/40",
    year: "2024",
  },
  {
    title: "FiveM Roleplay Website",
    category: "FiveM",
    tagline: "Sunucu vitrin sitesi: kayıt, kurallar, mağaza.",
    tags: ["Next.js", "PHP", "Stripe"],
    gradient: "from-emerald-500/40 via-cyan-500/30 to-blue-500/40",
    year: "2024",
  },
  {
    title: "Admin Panel System",
    category: "Panel",
    tagline: "Yetkilendirme, log ve analitik içeren panel altyapısı.",
    tags: ["Next.js", "TypeScript", "Prisma"],
    gradient: "from-fuchsia-500/40 via-purple-500/30 to-blue-500/40",
    year: "2025",
  },
  {
    title: "Custom Landing Page",
    category: "Web",
    tagline: "Dönüşüm odaklı tek sayfa ürün lansmanı.",
    tags: ["Next.js", "Tailwind", "Vercel"],
    gradient: "from-pink-500/40 via-cyan-500/30 to-emerald-500/40",
    year: "2025",
  },
];

const categories: Cat[] = ["Tümü", "Web", "Bot", "Panel", "FiveM"];

export default function Projects() {
  const [active, setActive] = useState<Cat>("Tümü");
  const list = active === "Tümü" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section-pad container-pad relative">
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full bg-neon-purple/5 blur-3xl -z-10" />

      <SectionHeading
        number="03"
        label="Projeler"
        title="Tasarımdan teslime, baştan sona kurguladığım dijital çalışmalar."
        subtitle="Birkaç farklı sektör, birkaç farklı format — aynı premium standart."
      />

      <div className="mt-12 md:mt-16 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            data-cursor="hover"
            className={cn(
              "relative px-4 py-2 rounded-full text-sm font-mono tracking-wide transition border",
              active === c
                ? "text-ink-950 bg-white border-white"
                : "text-white/60 border-white/10 hover:border-white/30 hover:text-white",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-10 md:mt-14 flex flex-col">
        <AnimatePresence mode="popLayout">
          {list.map((p, i) => (
            <motion.div
              key={p.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectRow project={p} index={i + 1} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const [hover, setHover] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <Link
      href="/contact"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group relative grid grid-cols-12 gap-4 items-center py-7 md:py-9 border-t border-white/10 last:border-b"
      data-cursor="hover"
    >
      <span className="col-span-2 md:col-span-1 font-mono text-xs md:text-sm text-white/40">
        0{index}
      </span>

      <div className="col-span-10 md:col-span-7 flex items-center gap-4">
        <h3
          className={cn(
            "font-display text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight transition-colors",
            hover ? "text-white" : "text-white/70",
          )}
        >
          {project.title}
        </h3>
      </div>

      <div className="hidden md:flex md:col-span-3 flex-wrap gap-1.5 justify-end">
        {project.tags.map((t) => (
          <span
            key={t}
            className="text-[11px] font-mono px-2.5 py-1 rounded-full border border-white/10 text-white/60 group-hover:border-white/30 group-hover:text-white/85 transition"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="col-span-12 md:col-span-1 flex items-center md:justify-end gap-2 text-sm text-white/60 group-hover:text-white transition">
        <span className="hidden md:inline">Detay</span>
        <ArrowUpRight
          size={20}
          className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-neon-cyan"
        />
      </div>

      {/* hover preview tile */}
      <AnimatePresence>
        {hover && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="pointer-events-none absolute z-10 w-[260px] h-[170px] rounded-2xl overflow-hidden glass-strong border-grad"
            style={{
              left: pos.x,
              top: pos.y,
              transform: "translate(-50%, -120%)",
            }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`} />
            <div className="absolute inset-0 grid-bg opacity-40 mix-blend-overlay" />
            <div className="absolute inset-0 flex flex-col justify-end p-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/70">
                {project.category} · {project.year}
              </span>
              <p className="text-sm text-white mt-1 line-clamp-2">{project.tagline}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Link>
  );
}

"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const row1 = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
];
const row2 = ["PHP", "MySQL", "Discord.js", "REST API", "cPanel", "Vercel", "GitHub"];

const categories = [
  {
    title: "Frontend",
    skills: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion"],
    color: "from-neon-cyan/30 to-neon-blue/30",
  },
  {
    title: "Backend",
    skills: ["Node.js", "PHP", "MySQL", "REST API", "Auth"],
    color: "from-neon-blue/30 to-neon-purple/30",
  },
  {
    title: "DevOps & Tools",
    skills: ["Vercel", "cPanel", "GitHub", "Discord.js"],
    color: "from-neon-purple/30 to-neon-cyan/30",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative overflow-hidden">
      <div className="container-pad">
        <SectionHeading
          number="02"
          label="Yetenekler"
          title="Modern, hızlı ve ölçeklenebilir teknolojilerle çalışıyorum."
          subtitle="Tasarımdan deploy'a kadar tüm zinciri tek elden yönetebileceğim bir stack."
        />
      </div>

      {/* marquee rows */}
      <div className="mt-16 md:mt-24 flex flex-col gap-5">
        <Marquee items={row1} dir="ltr" />
        <Marquee items={row2} dir="rtl" />
      </div>

      {/* category cards */}
      <div className="container-pad mt-16 md:mt-24 grid md:grid-cols-3 gap-5">
        {categories.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="group relative rounded-2xl glass-strong p-6 border-grad overflow-hidden"
            data-cursor="hover"
          >
            <div
              className={`absolute -top-24 -right-24 w-64 h-64 rounded-full bg-gradient-to-br ${c.color} blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-700`}
            />
            <div className="relative">
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-display text-xl font-semibold text-white">{c.title}</h3>
                <span className="font-mono text-xs text-white/40">
                  0{i + 1}
                </span>
              </div>
              <ul className="flex flex-wrap gap-2">
                {c.skills.map((s) => (
                  <li
                    key={s}
                    className="text-xs font-mono px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/75 hover:border-neon-cyan/50 hover:text-white transition"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Marquee({ items, dir }: { items: string[]; dir: "ltr" | "rtl" }) {
  const seq = [...items, ...items];
  return (
    <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
      <div
        className={`flex gap-4 whitespace-nowrap will-change-transform ${
          dir === "ltr" ? "animate-marquee" : "animate-marquee-rev"
        }`}
      >
        {seq.map((s, i) => (
          <span
            key={`${s}-${i}`}
            className="group inline-flex items-center gap-3 shrink-0"
          >
            <span className="font-display text-4xl md:text-6xl font-semibold tracking-tight text-white/30 hover:text-white transition-colors">
              {s}
            </span>
            <span className="w-2 h-2 rounded-full bg-neon-cyan/60 shadow-[0_0_18px_4px_rgba(34,211,238,0.4)]" />
          </span>
        ))}
      </div>
    </div>
  );
}

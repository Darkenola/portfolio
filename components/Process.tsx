"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    n: "01",
    title: "Keşif",
    text: "Hedeflerini, hedef kitleni ve markanı dinliyorum. İhtiyacı netleştiriyoruz.",
  },
  {
    n: "02",
    title: "Planlama",
    text: "Kapsam, takvim ve teknoloji seçimi. Net bir yol haritası.",
  },
  {
    n: "03",
    title: "Tasarım",
    text: "Premium UI/UX. Wireframe → high fidelity → onaylı tasarım.",
  },
  {
    n: "04",
    title: "Geliştirme",
    text: "Performans, erişilebilirlik ve animasyon detaylarıyla kodlama.",
  },
  {
    n: "05",
    title: "Teslim",
    text: "Domain, deploy, SEO ve analitik kurulumu. Lansman.",
  },
  {
    n: "06",
    title: "Destek",
    text: "Lansman sonrası bakım, güncelleme ve büyüme partnerliği.",
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 30%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="section-pad container-pad relative">
      <SectionHeading
        number="05"
        label="Süreç"
        title="Net, şeffaf ve birlikte ilerleyen bir süreç."
        subtitle="Sürpriz yok. Her adımda ne yaptığımızı biliyor, beraber karar veriyoruz."
      />

      <div className="mt-16 md:mt-24 relative" ref={ref}>
        {/* line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-px md:-translate-x-1/2" />
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-6 md:left-1/2 top-0 w-px -translate-x-px md:-translate-x-1/2 bg-gradient-to-b from-neon-cyan via-neon-blue to-neon-purple shadow-[0_0_20px_rgba(34,211,238,0.5)]"
        />

        <ul className="flex flex-col gap-12 md:gap-20">
          {steps.map((s, i) => {
            const left = i % 2 === 0;
            return (
              <motion.li
                key={s.n}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`relative grid md:grid-cols-2 gap-6 ${
                  left ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                <div className={`md:px-10 ${left ? "md:text-right" : ""}`}>
                  <div
                    className={`inline-flex flex-col gap-3 max-w-md ${
                      left ? "md:items-end md:ml-auto" : ""
                    }`}
                  >
                    <span className="font-mono text-xs text-neon-cyan tracking-[0.3em]">
                      STEP / {s.n}
                    </span>
                    <h3 className="font-display text-3xl md:text-4xl font-semibold text-white">
                      {s.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed">{s.text}</p>
                  </div>
                </div>

                <div className="hidden md:block" />

                <span
                  className="absolute left-6 md:left-1/2 top-2 w-3.5 h-3.5 -translate-x-1/2 rounded-full bg-ink-950 border-2 border-neon-cyan shadow-[0_0_20px_rgba(34,211,238,0.7)]"
                  aria-hidden
                />
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

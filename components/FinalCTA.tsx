"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import MagneticButton from "./MagneticButton";

const words = ["hızlı", "premium", "etkileyici", "dönüşüm odaklı", "modern"];

export default function FinalCTA() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % words.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="section-pad container-pad relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-aurora opacity-50" />
        <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(70%_50%_at_50%_50%,#000_0%,transparent_75%)] opacity-30" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-5xl mx-auto"
      >
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-xs font-mono tracking-widest text-white/70">
          ✦ Yeni proje kontenjanı açık
        </span>

        <h2 className="mt-6 font-display font-semibold tracking-[-0.02em] leading-[0.95] text-5xl md:text-7xl lg:text-8xl text-white">
          Projeni{" "}
          <span className="relative inline-block align-baseline">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[i]}
                initial={{ y: 60, opacity: 0, filter: "blur(8px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: -60, opacity: 0, filter: "blur(8px)" }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block text-gradient-static"
              >
                {words[i]}
              </motion.span>
            </AnimatePresence>
          </span>
          <br />
          <span className="text-white/85">çıkışa hazırlayalım.</span>
        </h2>

        <p className="mt-6 text-white/60 text-base md:text-lg max-w-2xl mx-auto">
          Sıradanlığa yer yok. Markanı, projeni veya fikrini tasarım ve teknolojiyle
          gerçek bir dijital deneyime çeviriyorum.
        </p>

        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          <MagneticButton href="/contact" variant="primary">
            Teklif Al <ArrowUpRight size={18} />
          </MagneticButton>
          <MagneticButton href="/contact" variant="secondary">
            İletişime Geç <ArrowUpRight size={18} />
          </MagneticButton>
        </div>
      </motion.div>
    </section>
  );
}

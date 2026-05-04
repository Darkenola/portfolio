"use client";

import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useEffect, useState } from "react";

const KEY = "ea_preload_v1";

export default function Preloader() {
  const [hidden, setHidden] = useState(true);
  const [done, setDone] = useState(false);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) =>
    Math.floor(v).toString().padStart(3, "0"),
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(KEY)) {
      setHidden(true);
      setDone(true);
      return;
    }
    sessionStorage.setItem(KEY, "1");
    setHidden(false);

    document.body.style.overflow = "hidden";
    const controls = animate(count, 100, {
      duration: 2.6,
      ease: [0.22, 1, 0.36, 1],
      onComplete: () => {
        setTimeout(() => {
          document.body.style.overflow = "";
          setDone(true);
        }, 500);
      },
    });
    return () => {
      controls.stop();
      document.body.style.overflow = "";
    };
  }, [count]);

  if (hidden) return null;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink-950 noise"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            clipPath: "inset(0 0 100% 0)",
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          <div className="absolute inset-0 bg-aurora opacity-50" />
          <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(60%_60%_at_50%_50%,#000_0%,transparent_75%)] opacity-40" />

          <div className="relative z-10 flex flex-col items-center gap-12 container-pad w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xs tracking-[0.4em] uppercase text-white/50 font-mono flex items-center gap-3"
            >
              <span className="w-8 h-px bg-white/30" />
              Emirhan Atıcı — Portfolio v.04
              <span className="w-8 h-px bg-white/30" />
            </motion.div>

            <div className="flex items-end gap-4 md:gap-10 relative">
              <motion.span
                className="font-display text-[18vw] md:text-[10vw] leading-[0.85] font-bold text-gradient-static"
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 1.1,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                EMIRHAN
              </motion.span>
              <motion.span
                className="font-display text-[18vw] md:text-[10vw] leading-[0.85] font-bold text-white/95"
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 1.1,
                  delay: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                ATICI
              </motion.span>
            </div>

            <div className="w-full max-w-md flex items-center gap-4">
              <span className="text-[10px] font-mono tracking-widest text-white/40">
                LOADING
              </span>
              <div className="relative h-[2px] flex-1 bg-white/10 overflow-hidden rounded-full">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2.6, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
              <motion.span className="font-mono text-sm text-white/70 tabular-nums">
                {rounded}
              </motion.span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="absolute bottom-6 inset-x-0 flex items-center justify-between container-pad text-[10px] font-mono tracking-widest text-white/30"
          >
            <span>EST. 2025</span>
            <span>İSTANBUL</span>
            <span className="hidden sm:inline">PREMIUM / BUILD</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

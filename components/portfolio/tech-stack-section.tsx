"use client";

import { motion, useReducedMotion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { getStackGroups } from "@/lib/portfolio-data";
import type { Language } from "@/lib/i18n";

export function TechStackSection({ lang }: { lang: Language }) {
  const shouldReduceMotion = useReducedMotion();
  const stackGroups = getStackGroups(lang);

  return (
    <SectionShell id="stack">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={lang === "tr" ? "Teknoloji Yığını" : "Tech Stack"}
            title={
              lang === "tr"
                ? "Arayüzler, sistemler ve günlük geliştirici iş akışları için pratik bir araç seti."
                : "A practical toolkit for building interfaces, systems, and everyday developer workflows."
            }
            description={
              lang === "tr"
                ? "Hız, güvenilirlik ve proje büyüdükçe gelişme alanı sunan teknolojilerle çalışmayı seviyorum."
                : "I like working with technologies that balance speed, reliability, and room for growth as projects become more ambitious."
            }
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {stackGroups.map((group, groupIndex) => {
            const Icon = group.icon;

            return (
              <Reveal key={group.title} delay={0.08 + groupIndex * 0.06}>
                <motion.article
                  whileHover={shouldReduceMotion ? undefined : { y: -8 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="group h-full rounded-[30px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_28px_100px_-54px_rgba(0,0,0,0.95)] backdrop-blur-xl sm:p-7"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex size-14 items-center justify-center rounded-[20px] border border-white/10 bg-black/35">
                      <Icon className="size-6 text-cyan-300" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                        {group.title}
                      </h3>
                      <p className="mt-2 max-w-xl text-sm leading-7 text-zinc-400">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  <ul
                    className="mt-8 flex flex-wrap gap-3"
                    aria-label={`${group.title} technologies`}
                  >
                    {group.items.map((item) => (
                      <motion.li
                        key={item}
                        whileHover={shouldReduceMotion ? undefined : { scale: 1.03 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                        className="list-none"
                      >
                        <div className="group/badge inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-zinc-200 transition duration-300 hover:border-white/[0.18] hover:bg-white/[0.08] hover:text-white">
                          <span className="size-2 rounded-full bg-cyan-300/80 transition-transform duration-300 group-hover/badge:scale-125" />
                          <span>{item}</span>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </SectionShell>
  );
}

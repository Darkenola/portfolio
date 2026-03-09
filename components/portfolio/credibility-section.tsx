"use client";

import { motion, useReducedMotion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import {
  activityPattern,
  getCredibilitySignals,
  getHeroHighlights,
  getProjects,
} from "@/lib/portfolio-data";
import type { Language } from "@/lib/i18n";

export function CredibilitySection({ lang }: { lang: Language }) {
  const shouldReduceMotion = useReducedMotion();
  const credibilitySignals = getCredibilitySignals(lang);
  const heroHighlights = getHeroHighlights(lang);
  const projects = getProjects(lang);

  return (
    <SectionShell id="credibility">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={lang === "tr" ? "GitHub / Güven" : "GitHub / Credibility"}
            title={
              lang === "tr"
                ? "Bir portfolyo sadece nasıl göründüğünü değil, bir geliştiricinin nasıl düşündüğünü de göstermeli."
                : "A portfolio should signal how a developer thinks, not just how a page is styled."
            }
            description={
              lang === "tr"
                ? "Bu alan; mühendislik güvenine, tutarlılığa, proje odaklı gelişime ve yazılım gerçekleştiğinde önem kazanan alışkanlıklara odaklanıyor."
                : "This section leans into engineering credibility: consistency, project-driven growth, and the habits that matter when software gets real."
            }
          />
        </Reveal>

        <div className="mt-14 grid gap-6 xl:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)]">
          <Reveal delay={0.08}>
            <div className="rounded-[34px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_32px_120px_-58px_rgba(0,0,0,0.95)] backdrop-blur-2xl sm:p-8">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-xl">
                  <span className="rounded-full border border-white/10 bg-black/30 px-4 py-2 font-mono text-[0.66rem] uppercase tracking-[0.3em] text-zinc-400">
                    {lang === "tr" ? "Geliştirme Özeti" : "Development Snapshot"}
                  </span>
                  <h3 className="text-balance mt-5 font-display text-3xl font-semibold tracking-[-0.05em] text-white sm:text-[2.4rem]">
                    {lang === "tr"
                      ? "Gürültü yerine tutarlılık, yapı ve faydalı çıktı."
                      : "Consistency, structure, and useful output over noise."}
                  </h3>
                  <p className="text-balance mt-4 text-base leading-8 text-zinc-400">
                    {lang === "tr"
                      ? "Sürekli gelişime, temiz kaynak kontrol alışkanlıklarına ve hem kod hem ürün seviyesinde bilinçli görünen yazılımlar geliştirmeye önem veriyorum."
                      : "I care about steady improvement, clear source control habits, and building software that reflects intention at both the code and product level."}
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {heroHighlights.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[22px] border border-white/10 bg-black/30 px-4 py-4"
                    >
                      <p className="font-mono text-[0.64rem] uppercase tracking-[0.28em] text-zinc-500">
                        {item.label}
                      </p>
                      <p className="mt-3 text-sm text-zinc-100">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 rounded-[28px] border border-white/10 bg-black/35 p-5 sm:p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="font-mono text-[0.66rem] uppercase tracking-[0.3em] text-zinc-500">
                      {lang === "tr" ? "Aktivite Ritmi" : "Activity Rhythm"}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-zinc-400">
                      {lang === "tr"
                        ? "Tasarım sistemini bozmadan daha sonra canlı istatistiklerle değiştirilebilecek GitHub tarzı bir katkı alanı."
                        : "A GitHub-style contribution placeholder that can be swapped for live stats later without changing the design system."}
                    </p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-zinc-400">
                    {lang === "tr" ? "Değişime hazır" : "Placeholder-ready"}
                  </span>
                </div>

                <div className="mt-6 grid grid-cols-6 gap-2 sm:grid-cols-12">
                  {activityPattern.map((column, columnIndex) => (
                    <div key={columnIndex} className="grid gap-2">
                      {column.map((value, rowIndex) => (
                        <motion.div
                          key={`${columnIndex}-${rowIndex}`}
                          initial={
                            shouldReduceMotion ? false : { opacity: 0, scale: 0.9 }
                          }
                          whileInView={
                            shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }
                          }
                          viewport={{ once: true, amount: 0.4 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.02 * (columnIndex + rowIndex),
                            ease: "easeOut",
                          }}
                          className="aspect-square rounded-[8px] border border-white/[0.06]"
                          style={{
                            backgroundColor: `rgba(129, 210, 255, ${0.08 + value * 0.8})`,
                          }}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6">
            {credibilitySignals.map((signal, index) => {
              const Icon = signal.icon;

              return (
                <Reveal key={signal.title} delay={0.12 + index * 0.06}>
                  <motion.article
                    whileHover={shouldReduceMotion ? undefined : { y: -6 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_28px_100px_-52px_rgba(0,0,0,0.95)] backdrop-blur-xl"
                  >
                    <div className="flex size-12 items-center justify-center rounded-[20px] border border-white/10 bg-black/35">
                      <Icon className="size-5 text-cyan-300" />
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-white">
                      {signal.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-zinc-400">
                      {signal.description}
                    </p>
                  </motion.article>
                </Reveal>
              );
            })}

            <Reveal delay={0.3}>
              <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6 shadow-[0_28px_100px_-52px_rgba(0,0,0,0.95)] backdrop-blur-xl">
                <p className="font-mono text-[0.66rem] uppercase tracking-[0.3em] text-zinc-500">
                  {lang === "tr" ? "Mühendislik Yaklaşımı" : "Engineering Philosophy"}
                </p>
                <blockquote className="text-balance mt-4 font-display text-2xl font-semibold tracking-[-0.04em] text-white">
                  {lang === "tr"
                    ? "Dikkat istemeden önce güven kazanan yazılımlar geliştir."
                    : "Build software that earns trust before it asks for attention."}
                </blockquote>
                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  {lang === "tr"
                    ? "Güçlü portfolyolar sadece görsel değildir. Muhakemeyi, özeni ve son deneyimi şekillendiren küçük detayları sürekli iyileştirme isteğini de yansıtır."
                    : "Strong portfolios are not just visual. They reflect judgement, care, and a willingness to keep improving the small details that shape the final experience."}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.36}>
              <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_28px_100px_-52px_rgba(0,0,0,0.95)] backdrop-blur-xl">
                <p className="font-mono text-[0.66rem] uppercase tracking-[0.3em] text-zinc-500">
                  {lang === "tr" ? "Repo Vitrini" : "Repository Spotlight"}
                </p>
                <div className="mt-5 space-y-3">
                  {projects.map((project) => (
                    <div
                      key={project.slug}
                      className="rounded-[20px] border border-white/10 bg-black/30 px-4 py-4"
                    >
                      <p className="text-sm font-medium text-white">{project.title}</p>
                      <p className="mt-1 text-xs leading-6 text-zinc-400">
                        {project.slug}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </SectionShell>
  );
}

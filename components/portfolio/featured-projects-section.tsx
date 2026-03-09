"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, FolderGit2 } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import {
  getProjects,
  getProjectSectionStats,
  type Project,
} from "@/lib/portfolio-data";
import type { Language } from "@/lib/i18n";
import { localizedPath } from "@/lib/routing";
import { cn } from "@/lib/utils";

export function FeaturedProjectsSection({ lang }: { lang: Language }) {
  const shouldReduceMotion = useReducedMotion();
  const projects = getProjects(lang);
  const projectSectionStats = getProjectSectionStats(lang);

  return (
    <SectionShell id="projects">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={lang === "tr" ? "Öne Çıkan Projeler" : "Featured Projects"}
            title={
              lang === "tr"
                ? "Placeholder değil, gerçek ürün hissi veren seçili çalışmalar."
                : "Selected work designed to feel more like real products than placeholders."
            }
            description={
              lang === "tr"
                ? "Her kart artık daha güçlü proje sinyalleri taşıyor: durum, odak alanı, öne çıkan özellikler ve GitHub için hazırlanan repo paketi."
                : "Each card now carries stronger project signals: status, focus area, feature highlights, and the matching repository package prepared for GitHub."
            }
          />
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {projectSectionStats.map((item) => (
              <div
                key={item.label}
                className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_24px_80px_-48px_rgba(0,0,0,0.9)] backdrop-blur-xl"
              >
                <p className="font-mono text-[0.66rem] uppercase tracking-[0.3em] text-zinc-500">
                  {item.label}
                </p>
                <p className="mt-3 font-display text-3xl font-semibold tracking-[-0.05em] text-white">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 space-y-6">
          {projects.map((project, index) => {
            const reversed = index % 2 === 1;

            return (
              <Reveal key={project.title} delay={0.08 + index * 0.06}>
                <motion.article
                  whileHover={shouldReduceMotion ? undefined : { y: -6 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_32px_120px_-56px_rgba(0,0,0,0.95)] backdrop-blur-2xl sm:p-6 lg:p-8"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(141,216,255,0.13),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_32%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-center">
                    <div className={cn(reversed ? "lg:order-2" : "", "min-w-0")}>
                      <ProjectPreview project={project} />
                    </div>

                    <div className={cn(reversed ? "lg:order-1" : "", "min-w-0")}>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-white/10 bg-black/30 px-4 py-2 font-mono text-[0.66rem] uppercase tracking-[0.3em] text-zinc-400">
                          {project.label}
                        </span>
                        <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs text-emerald-300">
                          {project.status}
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-zinc-400">
                          {project.year}
                        </span>
                        <span className="font-mono text-sm text-zinc-500">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <h3 className="text-balance mt-6 font-display text-3xl font-semibold tracking-[-0.05em] text-white sm:text-[2.4rem]">
                        {project.title}
                      </h3>
                      <p className="text-balance mt-4 text-base leading-8 text-zinc-400">
                        {project.description}
                      </p>

                      <div className="mt-6 grid gap-3 sm:grid-cols-3">
                        {project.metrics.map((metric) => (
                          <div
                            key={metric.label}
                            className="rounded-[20px] border border-white/10 bg-black/30 p-4"
                          >
                            <p className="font-mono text-[0.64rem] uppercase tracking-[0.28em] text-zinc-500">
                              {metric.label}
                            </p>
                            <p className="mt-3 text-sm font-medium text-zinc-100">
                              {metric.value}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 grid gap-4 xl:grid-cols-[0.96fr_1.04fr]">
                        <div className="rounded-[24px] border border-white/10 bg-black/30 p-5">
                          <p className="font-mono text-[0.66rem] uppercase tracking-[0.3em] text-zinc-500">
                            {lang === "tr" ? "Siteye eklenenler" : "Added to the site"}
                          </p>
                          <ul className="mt-4 space-y-3">
                            {project.features.map((feature) => (
                              <li
                                key={feature}
                                className="flex items-start gap-3 text-sm leading-7 text-zinc-300"
                              >
                                <CheckCircle2 className="mt-1 size-4 shrink-0 text-cyan-300" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="rounded-[24px] border border-white/10 bg-black/30 p-5">
                          <p className="font-mono text-[0.66rem] uppercase tracking-[0.3em] text-zinc-500">
                            {lang === "tr" ? "Neden önemli" : "Why it matters"}
                          </p>
                          <p className="mt-3 text-sm leading-7 text-zinc-300">
                            {project.outcome}
                          </p>
                          <div className="mt-5 flex items-start gap-3 rounded-[18px] border border-white/10 bg-white/[0.03] px-4 py-3">
                            <FolderGit2 className="mt-0.5 size-4 shrink-0 text-cyan-300" />
                            <div>
                              <p className="text-sm font-medium text-white">
                                {lang === "tr"
                                  ? "Repo paketi hazır"
                                  : "Repository package ready"}
                              </p>
                              <p className="mt-1 text-xs leading-6 text-zinc-400">
                                {project.repository}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <ul
                        className="mt-6 flex flex-wrap gap-3"
                        aria-label={`${project.title} tech stack`}
                      >
                        {project.stack.map((item) => (
                          <li
                            key={item}
                            className="list-none rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-zinc-300"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                        <ButtonLink
                          href={localizedPath(`/projects/${project.slug}`, lang)}
                          variant="primary"
                          showArrow={false}
                        >
                          {lang === "tr" ? "Detaylı İncele" : "View Case Study"}
                        </ButtonLink>
                        <ButtonLink href={project.github} variant="secondary">
                          GitHub
                        </ButtonLink>
                        {project.demo ? (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm text-zinc-400 transition hover:text-white"
                          >
                            {project.demoLabel ?? "Live Demo"}
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </SectionShell>
  );
}

function ProjectPreview({ project }: { project: Project }) {
  if (project.variant === "portfolio") {
    return (
      <div className="relative h-[310px] overflow-hidden rounded-[30px] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(141,216,255,0.18),transparent_38%),linear-gradient(180deg,#0b0d12_0%,#07080c_100%)] p-5 sm:h-[360px] sm:p-6">
        <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(255,255,255,0.06),transparent_30%,transparent_70%,rgba(141,216,255,0.08))]" />
        <div className="relative flex h-full flex-col">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-[#ff5f57]" />
            <span className="size-2.5 rounded-full bg-[#febc2e]" />
            <span className="size-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-auto rounded-full border border-white/10 bg-black/30 px-3 py-1 font-mono text-[0.64rem] uppercase tracking-[0.28em] text-zinc-500">
              Landing View
            </span>
          </div>

          <div className="mt-5 grid flex-1 gap-4 sm:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[24px] border border-white/10 bg-black/35 p-5">
              <p className="font-mono text-[0.64rem] uppercase tracking-[0.28em] text-zinc-500">
                Hero composition
              </p>
              <p className="mt-4 font-display text-4xl font-semibold tracking-[-0.08em] text-white">
                Darkenola
              </p>
              <div className="mt-4 space-y-3">
                <div className="h-2.5 w-5/6 rounded-full bg-white/[0.12]" />
                <div className="h-2.5 w-3/4 rounded-full bg-white/[0.08]" />
                <div className="h-2.5 w-1/2 rounded-full bg-cyan-400/20" />
              </div>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-[#05070b]/90 p-5 font-mono text-xs text-zinc-300">
              <div className="text-cyan-300">export default function Portfolio()</div>
              <div className="mt-3 pl-4 text-zinc-400">
                &#123;
                <div className="mt-2">return (</div>
                <div className="mt-2 pl-4 text-zinc-300">
                  &lt;Hero premium /&gt;
                </div>
                <div className="mt-2 pl-4 text-zinc-300">
                  &lt;Projects immersive /&gt;
                </div>
                <div className="mt-2 pl-4 text-zinc-300">
                  &lt;Brand voice serious /&gt;
                </div>
                <div className="mt-2">);</div>
                <div className="mt-2">&#125;</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (project.variant === "productivity") {
    return (
      <div className="relative h-[310px] overflow-hidden rounded-[30px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_36%),linear-gradient(180deg,#0b0d12_0%,#07080c_100%)] p-5 sm:h-[360px] sm:p-6">
        <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(141,216,255,0.08),transparent_35%,transparent_70%,rgba(255,255,255,0.05))]" />
        <div className="relative flex h-full gap-4">
          <div className="w-20 rounded-[24px] border border-white/10 bg-black/35 p-4">
            <div className="space-y-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "rounded-full",
                    index === 1
                      ? "h-9 bg-cyan-400/[0.18]"
                      : "h-2.5 bg-white/10",
                  )}
                />
              ))}
            </div>
          </div>

          <div className="flex-1 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] border border-white/10 bg-black/35 p-4">
                <p className="font-mono text-[0.64rem] uppercase tracking-[0.28em] text-zinc-500">
                  Today
                </p>
                <p className="mt-3 text-3xl font-semibold text-white">06</p>
                <div className="mt-3 h-2 w-3/4 rounded-full bg-cyan-400/[0.22]" />
              </div>
              <div className="rounded-[24px] border border-white/10 bg-black/35 p-4">
                <p className="font-mono text-[0.64rem] uppercase tracking-[0.28em] text-zinc-500">
                  Focus rate
                </p>
                <p className="mt-3 text-3xl font-semibold text-white">87%</p>
                <div className="mt-3 h-2 w-5/6 rounded-full bg-white/[0.14]" />
              </div>
            </div>

            <div className="grid h-[calc(100%-6rem)] gap-4 sm:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-[24px] border border-white/10 bg-black/35 p-4">
                <p className="font-mono text-[0.64rem] uppercase tracking-[0.28em] text-zinc-500">
                  Priority queue
                </p>
                <div className="mt-4 space-y-3">
                  {[
                    "Refine dashboard flows",
                    "Review backend endpoints",
                    "Ship project polish",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-zinc-200"
                    >
                      <span className="size-2.5 rounded-full bg-cyan-300" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-black/35 p-4">
                <p className="font-mono text-[0.64rem] uppercase tracking-[0.28em] text-zinc-500">
                  Velocity
                </p>
                <div className="mt-5 flex h-full items-end gap-3">
                  {[38, 54, 42, 70, 56, 84].map((height, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-t-2xl bg-[linear-gradient(180deg,rgba(141,216,255,0.9),rgba(141,216,255,0.16))]"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-[310px] overflow-hidden rounded-[30px] border border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(141,216,255,0.12),transparent_34%),linear-gradient(180deg,#0b0d12_0%,#07080c_100%)] p-5 sm:h-[360px] sm:p-6">
      <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.05),transparent_28%,transparent_72%,rgba(141,216,255,0.08))]" />
      <div className="relative grid h-full gap-4 sm:grid-cols-[0.96fr_1.04fr]">
        <div className="rounded-[24px] border border-white/10 bg-[#05070b]/[0.92] p-5 font-mono text-xs text-zinc-300">
          <p className="text-cyan-300">$ automationctl monitor --live</p>
          <div className="mt-4 space-y-3 text-zinc-400">
            <div>job.sync.customers .............. ok</div>
            <div>job.cleanup.cache ............... ok</div>
            <div>job.report.weekly ............... running</div>
            <div>queue.billing.retries ........... standby</div>
            <div className="text-zinc-100">status: system healthy</div>
          </div>
        </div>

        <div className="relative rounded-[24px] border border-white/10 bg-black/35 p-5">
          <p className="font-mono text-[0.64rem] uppercase tracking-[0.28em] text-zinc-500">
            Workflow map
          </p>
          <div className="relative mt-6 h-[calc(100%-2.3rem)]">
            <span className="absolute left-[10%] top-[12%] h-px w-[36%] bg-white/10" />
            <span className="absolute left-[46%] top-[12%] h-[32%] w-px bg-white/10" />
            <span className="absolute left-[46%] top-[44%] h-px w-[34%] bg-white/10" />

            <NodeCard
              className="left-[4%] top-[4%]"
              title="Trigger"
              accent="bg-cyan-400/[0.18]"
            />
            <NodeCard className="left-[42%] top-[4%]" title="Validate" accent="bg-white/10" />
            <NodeCard
              className="left-[42%] top-[36%]"
              title="Process"
              accent="bg-cyan-400/[0.22]"
            />
            <NodeCard className="left-[70%] top-[36%]" title="Notify" accent="bg-white/10" />
            <NodeCard className="left-[22%] top-[68%]" title="Logs" accent="bg-white/10" />
          </div>
        </div>
      </div>
    </div>
  );
}

function NodeCard({
  className,
  title,
  accent,
}: {
  className: string;
  title: string;
  accent: string;
}) {
  return (
    <div
      className={cn(
        "absolute flex min-h-16 min-w-[6.4rem] items-center rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-zinc-200 shadow-[0_20px_40px_-28px_rgba(0,0,0,0.95)]",
        className,
      )}
    >
      <span className={cn("mr-3 size-2.5 rounded-full", accent)} />
      {title}
    </div>
  );
}

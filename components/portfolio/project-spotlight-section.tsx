import { Card, CardContent, CardFooter, CardHeader, Chip } from "@heroui/react";
import { ArrowUpRight, FolderGit2 } from "lucide-react";
import Link from "next/link";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import type { Language } from "@/lib/i18n";
import { getProjects } from "@/lib/portfolio-data";
import { localizedPath } from "@/lib/routing";

export function ProjectSpotlightSection({ lang }: { lang: Language }) {
  const projects = getProjects(lang).slice(0, 3);

  return (
    <SectionShell id="project-spotlight">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={lang === "tr" ? "Project Pages" : "Project Pages"}
            title={
              lang === "tr"
                ? "Projeler artık kendi sayfalarında daha net okunuyor."
                : "Projects now read more clearly in their own dedicated pages."
            }
            description={
              lang === "tr"
                ? "Ana sayfada teaser düzeyinde görünürler; detaylar, mimari ve sonraki adımlar proje sayfalarında açılır."
                : "On home they appear as curated teasers; deeper context, architecture, and next steps live in dedicated project pages."
            }
          />
        </Reveal>

        <div className="mt-14 grid gap-6 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={0.08 + index * 0.06}>
              <Card className="group h-full border border-white/10 bg-white/[0.04] shadow-[0_30px_96px_-56px_rgba(0,0,0,0.95)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/[0.18] hover:bg-white/[0.06]">
                <CardHeader className="flex items-start justify-between gap-4 pb-0">
                  <div className="space-y-3">
                    <Chip className="border border-white/10 bg-black/30 px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.28em] text-zinc-400">
                      {project.label}
                    </Chip>
                    <div className="flex flex-wrap gap-2">
                      <Chip className="border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs text-emerald-300">
                        {project.status}
                      </Chip>
                      <Chip className="border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-zinc-400">
                        {project.year}
                      </Chip>
                    </div>
                  </div>
                  <div className="flex size-12 items-center justify-center rounded-[18px] border border-white/10 bg-black/35">
                    <FolderGit2 className="size-5 text-cyan-300" />
                  </div>
                </CardHeader>

                <CardContent className="pt-5">
                  <h3 className="text-balance font-display text-2xl font-semibold tracking-[-0.04em] text-white">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-zinc-400">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <Chip
                        key={item}
                        className="border border-white/10 bg-black/30 px-3 py-1.5 text-xs text-zinc-300"
                      >
                        {item}
                      </Chip>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex items-center justify-between gap-4 pt-0">
                  <Link
                    href={localizedPath(`/projects/${project.slug}`, lang)}
                    className="inline-flex items-center gap-2 text-sm text-zinc-300 transition hover:text-white"
                  >
                    <span>{lang === "tr" ? "Case study aç" : "Open case study"}</span>
                    <ArrowUpRight className="size-4" />
                  </Link>
                  <span className="font-mono text-[0.66rem] uppercase tracking-[0.28em] text-zinc-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </CardFooter>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.26}>
          <div className="mt-10 flex justify-start">
            <ButtonLink href={localizedPath("/projects", lang)} variant="secondary">
              {lang === "tr" ? "Tüm projeler" : "All projects"}
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </SectionShell>
  );
}

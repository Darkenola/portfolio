import type { Metadata } from "next";

import { Breadcrumbs } from "@heroui/react";
import { ArrowLeft, ArrowUpRight, FolderGit2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { LanguageSwitch } from "@/components/ui/language-switch";
import { SiteShell } from "@/components/portfolio/site-shell";
import { resolveLanguage } from "@/lib/i18n";
import { getProjects } from "@/lib/portfolio-data";
import { localizedPath } from "@/lib/routing";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    lang?: string;
  }>;
};

export async function generateStaticParams() {
  return getProjects("en").map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
  searchParams,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const query = await searchParams;
  const lang = resolveLanguage(query.lang);
  const project = getProjects(lang).find((entry) => entry.slug === slug);

  if (!project) {
    return {
      title: lang === "tr" ? "Proje bulunamadı" : "Project Not Found",
    };
  }

  return {
    title: `${project.title} ${lang === "tr" ? "İncelemesi" : "Case Study"}`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
  searchParams,
}: ProjectPageProps) {
  const { slug } = await params;
  const query = await searchParams;
  const lang = resolveLanguage(query.lang);
  const project = getProjects(lang).find((entry) => entry.slug === slug);

  if (!project) {
    notFound();
  }

  const baseProjectPath = `/projects/${project.slug}`;

  return (
    <SiteShell currentPath="/projects" lang={lang}>
      <div className="min-h-screen pb-20 pt-36 sm:pb-24 sm:pt-40">
        <Container>
          <Breadcrumbs
            className="mb-6"
            separator="/"
            aria-label={lang === "tr" ? "Proje gezinme yolu" : "Project breadcrumb"}
          >
            <Breadcrumbs.Item href={localizedPath("/", lang)}>
              {lang === "tr" ? "Ana Sayfa" : "Home"}
            </Breadcrumbs.Item>
            <Breadcrumbs.Item href={localizedPath("/projects", lang)}>
              {lang === "tr" ? "Projeler" : "Projects"}
            </Breadcrumbs.Item>
            <Breadcrumbs.Item href={localizedPath(baseProjectPath, lang)}>
              {project.title}
            </Breadcrumbs.Item>
          </Breadcrumbs>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href={localizedPath("/projects", lang)}
              className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
            >
              <ArrowLeft className="size-4" />
              <span>{lang === "tr" ? "Projelere dön" : "Back to projects"}</span>
            </Link>

            <div className="flex flex-wrap items-center gap-3">
              <LanguageSwitch
                lang={lang}
                hrefEn={baseProjectPath}
                hrefTr={localizedPath(baseProjectPath, "tr")}
                compact
              />
              <ButtonLink href={project.github} variant="secondary">
                GitHub
              </ButtonLink>
              {project.demo ? (
                <ButtonLink href={project.demo} variant="primary">
                  {project.demoLabel ?? "Live Demo"}
                </ButtonLink>
              ) : (
                <ButtonLink
                  href={localizedPath("/resume", lang)}
                  variant="secondary"
                  showArrow={false}
                >
                  {lang === "tr" ? "CV" : "Resume"}
                </ButtonLink>
              )}
            </div>
          </div>

          <section className="mt-10 rounded-[36px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_32px_120px_-56px_rgba(0,0,0,0.95)] backdrop-blur-2xl sm:p-8 lg:p-10">
            <div className="grid gap-10 xl:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] xl:items-center">
              <div className="min-w-0">
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
                </div>

                <h1 className="text-balance mt-8 font-display text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl lg:text-[4.2rem] lg:leading-[1.02]">
                  {project.title}
                </h1>
                <p className="text-balance mt-5 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg">
                  {project.caseStudyIntro}
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {project.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-[22px] border border-white/10 bg-black/30 p-4"
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
              </div>

              <div className="rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(141,216,255,0.14),transparent_34%),linear-gradient(180deg,#0b0d12_0%,#07080c_100%)] p-5 sm:p-6">
                <div className="flex items-center gap-2">
                  <span className="size-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="size-2.5 rounded-full bg-[#febc2e]" />
                  <span className="size-2.5 rounded-full bg-[#28c840]" />
                  <span className="ml-auto rounded-full border border-white/10 bg-black/30 px-3 py-1 font-mono text-[0.64rem] uppercase tracking-[0.28em] text-zinc-500">
                    {lang === "tr" ? "İnceleme" : "Case Study"}
                  </span>
                </div>

                <div className="mt-6 rounded-[24px] border border-white/10 bg-black/35 p-5">
                  <p className="font-mono text-[0.66rem] uppercase tracking-[0.3em] text-zinc-500">
                    {lang === "tr" ? "Portfolyo sinyali" : "Portfolio signal"}
                  </p>
                  <p className="mt-4 text-lg leading-8 text-zinc-200">
                    {project.outcome}
                  </p>
                </div>

                <div className="mt-4 rounded-[24px] border border-white/10 bg-black/35 p-5">
                  <div className="flex items-start gap-3">
                    <FolderGit2 className="mt-1 size-4 shrink-0 text-cyan-300" />
                    <div>
                      <p className="text-sm font-medium text-white">
                        {lang === "tr" ? "Repo paketi" : "Repository package"}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-zinc-400">
                        {project.repository}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-zinc-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-10 grid gap-6 xl:grid-cols-3">
            <CaseCard
              title={lang === "tr" ? "Zorluk" : "Challenge"}
              body={project.challenge}
            />
            <CaseCard
              title={lang === "tr" ? "Çözüm" : "Solution"}
              body={project.solution}
            />
            <CaseCard
              title={lang === "tr" ? "Mimari" : "Architecture"}
              body={project.architecture}
            />
          </section>

          <section className="mt-10 grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_28px_100px_-54px_rgba(0,0,0,0.95)] backdrop-blur-xl sm:p-8">
              <p className="font-mono text-[0.66rem] uppercase tracking-[0.3em] text-zinc-500">
                {lang === "tr" ? "Ana çıktılar" : "Key Deliverables"}
              </p>
              <div className="mt-6 grid gap-4">
                {project.features.map((feature) => (
                  <div
                    key={feature}
                    className="rounded-[24px] border border-white/10 bg-black/30 px-5 py-4 text-sm leading-7 text-zinc-300"
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_28px_100px_-54px_rgba(0,0,0,0.95)] backdrop-blur-xl sm:p-8">
              <p className="font-mono text-[0.66rem] uppercase tracking-[0.3em] text-zinc-500">
                {lang === "tr" ? "Sonraki adımlar" : "Next Steps"}
              </p>
              <ul className="mt-6 space-y-4">
                {project.nextSteps.map((step) => (
                  <li
                    key={step}
                    className="flex items-start gap-3 text-sm leading-7 text-zinc-300"
                  >
                    <ArrowUpRight className="mt-1 size-4 shrink-0 text-cyan-300" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </Container>
      </div>
    </SiteShell>
  );
}

function CaseCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_28px_100px_-54px_rgba(0,0,0,0.95)] backdrop-blur-xl">
      <p className="font-mono text-[0.66rem] uppercase tracking-[0.3em] text-zinc-500">
        {title}
      </p>
      <p className="text-balance mt-5 text-sm leading-8 text-zinc-300">
        {body}
      </p>
    </article>
  );
}

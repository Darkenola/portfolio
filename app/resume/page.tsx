import type { Metadata } from "next";

import { Download, Mail } from "lucide-react";
import Link from "next/link";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { LanguageSwitch } from "@/components/ui/language-switch";
import { SiteShell } from "@/components/portfolio/site-shell";
import { resolveLanguage } from "@/lib/i18n";
import {
  contactEmail,
  getExperienceItems,
  getResumeSummary,
  getSocialLinks,
  getStackGroups,
  resumeDownloadPath,
} from "@/lib/portfolio-data";
import { localizedPath } from "@/lib/routing";

type ResumePageProps = {
  searchParams: Promise<{
    lang?: string;
  }>;
};

export async function generateMetadata({
  searchParams,
}: ResumePageProps): Promise<Metadata> {
  const params = await searchParams;
  const lang = resolveLanguage(params.lang);

  return {
    title: lang === "tr" ? "CV" : "Resume",
    description:
      lang === "tr"
        ? "Emirhan / Darkenola için CV sayfası."
        : "Resume page for Emirhan / Darkenola.",
  };
}

export default async function ResumePage({ searchParams }: ResumePageProps) {
  const params = await searchParams;
  const lang = resolveLanguage(params.lang);
  const stackGroups = getStackGroups(lang);
  const experienceItems = getExperienceItems(lang);
  const socialLinks = getSocialLinks(lang);
  const resumeSummary = getResumeSummary(lang);

  return (
    <SiteShell currentPath="/resume" lang={lang}>
      <div className="min-h-screen pb-20 pt-36 sm:pb-24 sm:pt-40">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href={localizedPath("/", lang)}
              className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
            >
              <span>{lang === "tr" ? "Ana sayfaya dön" : "Back to home"}</span>
            </Link>

            <div className="flex flex-wrap items-center gap-3">
              <LanguageSwitch
                lang={lang}
                hrefEn="/resume"
                hrefTr="/resume?lang=tr"
                compact
              />
              <a
                href={resumeDownloadPath}
                download
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition duration-300 hover:-translate-y-0.5 hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <Download className="size-4" />
                <span>{lang === "tr" ? "CV İndir" : "Download CV"}</span>
              </a>
              <ButtonLink href={`mailto:${contactEmail}`} variant="secondary">
                Email
              </ButtonLink>
            </div>
          </div>

          <section className="mt-10 rounded-[36px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_32px_120px_-56px_rgba(0,0,0,0.95)] backdrop-blur-2xl sm:p-8 lg:p-10">
            <div className="grid gap-10 xl:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] xl:items-start">
              <div>
                <span className="inline-flex rounded-full border border-white/10 bg-black/30 px-4 py-2 font-mono text-[0.66rem] uppercase tracking-[0.3em] text-zinc-400">
                  {lang === "tr" ? "CV" : "Resume"}
                </span>
                <h1 className="mt-6 font-display text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl lg:text-[4rem] lg:leading-[1.02]">
                  Emirhan
                </h1>
                <p className="mt-3 text-lg text-zinc-300">
                  {lang === "tr" ? "Yazılım Geliştirici" : "Software Developer"}
                </p>
                <p className="text-balance mt-6 text-base leading-8 text-zinc-400 sm:text-lg">
                  {resumeSummary}
                </p>

                <div className="mt-8 space-y-3 text-sm text-zinc-300">
                  <div className="flex items-center gap-3">
                    <Mail className="size-4 text-cyan-300" />
                    <span>{contactEmail}</span>
                  </div>
                  {socialLinks.slice(0, 2).map((link) => (
                    <a
                      key={link.title}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-zinc-300 transition hover:text-white"
                    >
                      <link.icon className="size-4 text-cyan-300" />
                      <span>{link.href}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {stackGroups.map((group) => (
                  <div
                    key={group.title}
                    className="rounded-[24px] border border-white/10 bg-black/30 p-5"
                  >
                    <p className="font-mono text-[0.64rem] uppercase tracking-[0.28em] text-zinc-500">
                      {group.title}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-zinc-300">
                      {group.items.join(" - ")}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-10 grid gap-6">
            {experienceItems.map((item) => (
              <article
                key={item.title}
                className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_28px_100px_-54px_rgba(0,0,0,0.95)] backdrop-blur-xl sm:p-7"
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="font-mono text-[0.64rem] uppercase tracking-[0.28em] text-zinc-500">
                      {item.type}
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">
                      {item.title}
                    </h2>
                  </div>
                  <span className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs text-zinc-400">
                    {item.period}
                  </span>
                </div>

                <p className="text-balance mt-5 text-sm leading-7 text-zinc-400">
                  {item.description}
                </p>

                <ul className="mt-5 grid gap-3 sm:grid-cols-3">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="list-none rounded-[20px] border border-white/10 bg-black/30 px-4 py-4 text-sm leading-7 text-zinc-300"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </section>
        </Container>
      </div>
    </SiteShell>
  );
}

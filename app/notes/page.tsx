import type { Metadata } from "next";

import { CredibilitySection } from "@/components/portfolio/credibility-section";
import { NotesSection } from "@/components/portfolio/notes-section";
import { PageIntro } from "@/components/portfolio/page-intro";
import { SiteShell } from "@/components/portfolio/site-shell";
import { resolveLanguage } from "@/lib/i18n";

type NotesPageProps = {
  searchParams: Promise<{
    lang?: string;
  }>;
};

export async function generateMetadata({
  searchParams,
}: NotesPageProps): Promise<Metadata> {
  const params = await searchParams;
  const lang = resolveLanguage(params.lang);

  return {
    title: lang === "tr" ? "Notlar" : "Notes",
    description:
      lang === "tr"
        ? "Geliştirme yaklaşımı, güven sinyalleri ve kısa yazılım notları."
        : "Development approach, credibility signals, and short software notes.",
  };
}

export default async function NotesPage({ searchParams }: NotesPageProps) {
  const params = await searchParams;
  const lang = resolveLanguage(params.lang);

  return (
    <SiteShell currentPath="/notes" lang={lang}>
      <PageIntro
        eyebrow={lang === "tr" ? "Notes" : "Notes"}
        title={
          lang === "tr"
            ? "Kısa notlar, ama yüzeysel değil."
            : "Short notes, but not surface-level."
        }
        description={
          lang === "tr"
            ? "Bu sayfa; mühendislik güveni, çalışma disiplini ve yazılımı nasıl değerlendirdiğime dair kısa ama daha bilinçli sinyaller taşıyor."
            : "This page collects short but deliberate signals around engineering credibility, work discipline, and how I evaluate software."
        }
        stats={[
          { label: lang === "tr" ? "Tema" : "Theme", value: lang === "tr" ? "Güven" : "Credibility" },
          { label: lang === "tr" ? "Format" : "Format", value: lang === "tr" ? "Kısa notlar" : "Short notes" },
          { label: lang === "tr" ? "Ton" : "Tone", value: lang === "tr" ? "Teknik ve net" : "Technical and clear" },
        ]}
      />
      <CredibilitySection lang={lang} />
      <NotesSection lang={lang} />
    </SiteShell>
  );
}

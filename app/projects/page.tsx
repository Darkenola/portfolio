import type { Metadata } from "next";

import { FeaturedProjectsSection } from "@/components/portfolio/featured-projects-section";
import { PageIntro } from "@/components/portfolio/page-intro";
import { SiteShell } from "@/components/portfolio/site-shell";
import { resolveLanguage } from "@/lib/i18n";

type ProjectsPageProps = {
  searchParams: Promise<{
    lang?: string;
  }>;
};

export async function generateMetadata({
  searchParams,
}: ProjectsPageProps): Promise<Metadata> {
  const params = await searchParams;
  const lang = resolveLanguage(params.lang);

  return {
    title: lang === "tr" ? "Projeler" : "Projects",
    description:
      lang === "tr"
        ? "Darkenola için proje listesi ve case study akışı."
        : "Project listing and case study flow for Darkenola.",
  };
}

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const params = await searchParams;
  const lang = resolveLanguage(params.lang);

  return (
    <SiteShell currentPath="/projects" lang={lang}>
      <PageIntro
        eyebrow={lang === "tr" ? "Projects" : "Projects"}
        title={
          lang === "tr"
            ? "Seçili işler tek akışta değil, kendi bağlamlarıyla açılıyor."
            : "Selected work no longer lives in one scroll, but opens with its own context."
        }
        description={
          lang === "tr"
            ? "Buradan proje listesine girip her biri için ayrı case study sayfasına geçebilirsin. Yapı artık portfolyo kartı değil, daha gerçek bir ürün sunumu gibi çalışıyor."
            : "From here you move into the full project list and then into a dedicated case study for each build. The structure now behaves more like a real product presentation than a portfolio card strip."
        }
        stats={[
          { label: lang === "tr" ? "Proje" : "Projects", value: "03" },
          { label: lang === "tr" ? "Canlı" : "Live", value: "01" },
          { label: lang === "tr" ? "Case study" : "Case studies", value: "03" },
        ]}
      />
      <FeaturedProjectsSection lang={lang} />
    </SiteShell>
  );
}

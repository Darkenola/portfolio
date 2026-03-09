import type { Metadata } from "next";

import { AboutSection } from "@/components/portfolio/about-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { PageIntro } from "@/components/portfolio/page-intro";
import { SiteShell } from "@/components/portfolio/site-shell";
import { TechStackSection } from "@/components/portfolio/tech-stack-section";
import { resolveLanguage } from "@/lib/i18n";

type AboutPageProps = {
  searchParams: Promise<{
    lang?: string;
  }>;
};

export async function generateMetadata({
  searchParams,
}: AboutPageProps): Promise<Metadata> {
  const params = await searchParams;
  const lang = resolveLanguage(params.lang);

  return {
    title: lang === "tr" ? "Hakkımda" : "About",
    description:
      lang === "tr"
        ? "Emirhan / Darkenola hakkında yaklaşım, teknik yönelim ve teknoloji odağı."
        : "Approach, technical direction, and technology focus for Emirhan / Darkenola.",
  };
}

export default async function AboutPage({ searchParams }: AboutPageProps) {
  const params = await searchParams;
  const lang = resolveLanguage(params.lang);

  return (
    <SiteShell currentPath="/about" lang={lang}>
      <PageIntro
        eyebrow={lang === "tr" ? "About" : "About"}
        title={
          lang === "tr"
            ? "Yaklaşım, gelişim yolu ve teknik odak aynı sayfada toplandı."
            : "Approach, growth path, and technical focus now live together in one page."
        }
        description={
          lang === "tr"
            ? "Bu alan kişisel tanıtımdan öte; nasıl çalıştığımı, hangi teknik alanlara ağırlık verdiğimi ve ürünleri nasıl düşündüğümü gösterir."
            : "This page goes beyond a personal bio and shows how I work, where my technical attention goes, and how I think about product quality."
        }
        stats={[
          { label: lang === "tr" ? "Odak" : "Focus", value: lang === "tr" ? "Backend + Otomasyon" : "Backend + Automation" },
          { label: lang === "tr" ? "Yön" : "Direction", value: lang === "tr" ? "Gerçek projeler" : "Real projects" },
          { label: lang === "tr" ? "Sunum" : "Presentation", value: lang === "tr" ? "Rafine ve net" : "Refined and clear" },
        ]}
      />
      <AboutSection lang={lang} />
      <ExperienceSection lang={lang} />
      <TechStackSection lang={lang} />
    </SiteShell>
  );
}

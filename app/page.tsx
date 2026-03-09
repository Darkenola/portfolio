import { HeroSection } from "@/components/portfolio/hero-section";
import { HomeOverviewSection } from "@/components/portfolio/home-overview-section";
import { ProjectSpotlightSection } from "@/components/portfolio/project-spotlight-section";
import { SiteShell } from "@/components/portfolio/site-shell";
import { resolveLanguage } from "@/lib/i18n";
import { getProfilePhotoPath } from "@/lib/profile-photo";

type HomePageProps = {
  searchParams: Promise<{
    lang?: string;
  }>;
};

export default async function Home({ searchParams }: HomePageProps) {
  const params = await searchParams;
  const lang = resolveLanguage(params.lang);
  const profileImageSrc = await getProfilePhotoPath();

  return (
    <SiteShell currentPath="/" lang={lang}>
      <HeroSection lang={lang} profileImageSrc={profileImageSrc} />
      <HomeOverviewSection lang={lang} />
      <ProjectSpotlightSection lang={lang} />
    </SiteShell>
  );
}

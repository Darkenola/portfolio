import type { Metadata } from "next";

import { ContactSection } from "@/components/portfolio/contact-section";
import { PageIntro } from "@/components/portfolio/page-intro";
import { SiteShell } from "@/components/portfolio/site-shell";
import { resolveLanguage } from "@/lib/i18n";

type ContactPageProps = {
  searchParams: Promise<{
    lang?: string;
  }>;
};

export async function generateMetadata({
  searchParams,
}: ContactPageProps): Promise<Metadata> {
  const params = await searchParams;
  const lang = resolveLanguage(params.lang);

  return {
    title: lang === "tr" ? "İletişim" : "Contact",
    description:
      lang === "tr"
        ? "Darkenola ile iletişim, iş birliği ve sosyal bağlantılar."
        : "Contact, collaboration, and social links for Darkenola.",
  };
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const lang = resolveLanguage(params.lang);

  return (
    <SiteShell currentPath="/contact" lang={lang}>
      <PageIntro
        eyebrow={lang === "tr" ? "Contact" : "Contact"}
        title={
          lang === "tr"
            ? "İletişim artık ayrı bir sayfada, daha net bir CTA ile duruyor."
            : "Contact now stands on its own page with a clearer call to action."
        }
        description={
          lang === "tr"
            ? "İş birliği, proje konuşmaları ve doğrudan ulaşım için form, e-posta ve sosyal bağlantılar tek yerde toplandı."
            : "Form, email, and social links are now collected in one place for collaboration, project conversations, and direct reach-out."
        }
      />
      <ContactSection lang={lang} />
    </SiteShell>
  );
}

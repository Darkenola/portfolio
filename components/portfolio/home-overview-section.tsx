import { Card, CardContent, CardFooter, CardHeader, Chip } from "@heroui/react";
import { ArrowUpRight, FolderKanban, Layers3, Mail } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import type { Language } from "@/lib/i18n";
import { localizedPath } from "@/lib/routing";

const icons = {
  about: Layers3,
  projects: FolderKanban,
  contact: Mail,
};

export function HomeOverviewSection({ lang }: { lang: Language }) {
  const cards = [
    {
      id: "about" as const,
      eyebrow: lang === "tr" ? "Arka plan" : "Background",
      title: lang === "tr" ? "Yaklaşım, odak ve teknik yön." : "Approach, focus, and technical direction.",
      description:
        lang === "tr"
          ? "Backend sistemler, otomasyon, modern arayüzler ve nasıl çalıştığıma dair daha net bir profil."
          : "A clearer profile around backend systems, automation, modern interfaces, and how I work.",
      href: localizedPath("/about", lang),
      action: lang === "tr" ? "About sayfası" : "Open about page",
    },
    {
      id: "projects" as const,
      eyebrow: lang === "tr" ? "Seçili işler" : "Selected work",
      title: lang === "tr" ? "Her projeyi ayrı sayfada incele." : "Review each project in its own page.",
      description:
        lang === "tr"
          ? "Artık portfolyo tek akışta sıkışmıyor; proje listesi ve case study sayfaları ayrı yapılandı."
          : "The portfolio no longer lives in one scroll; project listing and case study pages now stand on their own.",
      href: localizedPath("/projects", lang),
      action: lang === "tr" ? "Projects sayfası" : "Open projects page",
    },
    {
      id: "contact" as const,
      eyebrow: lang === "tr" ? "İletişim" : "Contact",
      title: lang === "tr" ? "İş birliği ve doğrudan iletişim için ayrı alan." : "A dedicated page for collaboration and direct contact.",
      description:
        lang === "tr"
          ? "İletişim kısmı artık ana akışın sonunda değil; kendi CTA yapısı ve net aksiyonlarıyla ayrı bir sayfa."
          : "Contact is no longer buried at the end of the main scroll, but framed as its own focused CTA page.",
      href: localizedPath("/contact", lang),
      action: lang === "tr" ? "Contact sayfası" : "Open contact page",
    },
  ];

  return (
    <SectionShell id="overview">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={lang === "tr" ? "Site Yapısı" : "Site Structure"}
            title={
              lang === "tr"
                ? "Tek sayfa hissinden çıkıp daha editoryal, daha ciddi bir portfolyo yapısına geçti."
                : "The portfolio now moves away from a one-page scroll into a more editorial, serious structure."
            }
            description={
              lang === "tr"
                ? "Ana sayfa artık giriş ve yönlendirme alanı. Derin içerik, projeler ve iletişim kendi route'larında açılıyor."
                : "Home now acts as an entry and direction layer. Deeper content, projects, and contact open in their own routes."
            }
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = icons[card.id];

            return (
              <Reveal key={card.id} delay={0.08 + index * 0.06}>
                <Link href={card.href} className="group block">
                  <Card className="h-full border border-white/10 bg-white/[0.04] shadow-[0_32px_100px_-58px_rgba(0,0,0,0.95)] backdrop-blur-xl transition duration-300 group-hover:-translate-y-1 group-hover:border-white/[0.18] group-hover:bg-white/[0.06]">
                    <CardHeader className="flex items-start justify-between gap-4 pb-0">
                      <div>
                        <Chip className="border border-white/10 bg-black/30 px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.28em] text-zinc-400">
                          {card.eyebrow}
                        </Chip>
                        <h3 className="mt-5 text-balance font-display text-2xl font-semibold tracking-[-0.04em] text-white">
                          {card.title}
                        </h3>
                      </div>
                      <div className="flex size-12 items-center justify-center rounded-[18px] border border-white/10 bg-black/35">
                        <Icon className="size-5 text-cyan-300" />
                      </div>
                    </CardHeader>
                    <CardContent className="pt-5">
                      <p className="text-sm leading-7 text-zinc-400">
                        {card.description}
                      </p>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <div className="inline-flex items-center gap-2 text-sm text-zinc-300 transition group-hover:text-white">
                        <span>{card.action}</span>
                        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </SectionShell>
  );
}

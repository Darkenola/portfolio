import { Card, CardContent, CardHeader } from "@heroui/react";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionShell } from "@/components/ui/section-shell";
import type { Language } from "@/lib/i18n";

const items = {
  en: [
    {
      eyebrow: "App Router",
      title: "Next.js",
      description: "Structured routes, metadata, performance, and a production-grade shell.",
    },
    {
      eyebrow: "Typed foundation",
      title: "TypeScript",
      description: "Clear interfaces, predictable components, and safer iteration across the site.",
    },
    {
      eyebrow: "Visual system",
      title: "Tailwind CSS",
      description: "Deliberate spacing, controlled density, and a consistent premium design language.",
    },
    {
      eyebrow: "Motion layer",
      title: "Framer Motion",
      description: "Subtle reveal choreography and movement used with restraint rather than noise.",
    },
  ],
  tr: [
    {
      eyebrow: "App Router",
      title: "Next.js",
      description: "D\u00fczenli route yap\u0131s\u0131, metadata, performans ve production seviyesinde bir shell.",
    },
    {
      eyebrow: "Tipli temel",
      title: "TypeScript",
      description: "Net interface'ler, daha \u00f6ng\u00f6r\u00fclebilir component'ler ve daha g\u00fcvenli iterasyon.",
    },
    {
      eyebrow: "G\u00f6rsel sistem",
      title: "Tailwind CSS",
      description: "Bilin\u00e7li bo\u015fluk kullan\u0131m\u0131, kontroll\u00fc yo\u011funluk ve tutarl\u0131 premium tasar\u0131m dili.",
    },
    {
      eyebrow: "Motion katman\u0131",
      title: "Framer Motion",
      description: "Gereksiz g\u00f6steri yerine kontroll\u00fc reveal ak\u0131\u015f\u0131 ve rafine ge\u00e7i\u015fler.",
    },
  ],
} as const;

export function PoweredBySection({ lang }: { lang: Language }) {
  const content = items[lang];

  return (
    <SectionShell id="powered-by" className="pt-0 pb-18 sm:pb-22">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.34em] text-zinc-500">
                {lang === "tr" ? "Powered by" : "Powered by"}
              </p>
              <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-[-0.06em] text-white sm:text-4xl">
                {lang === "tr"
                  ? "Modern stack, rafine uygulama, ciddi m\u00fchendislik standard\u0131."
                  : "Modern stack, refined execution, and a serious engineering standard."}
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-zinc-400 sm:text-right">
              {lang === "tr"
                ? "nextjs.org \u00fcst ak\u0131\u015f\u0131na benzer \u015fekilde, ana y\u00fczeyin alt\u0131nda sitenin hangi teknoloji ve uygulama kalitesi \u00fczerine kuruldu\u011fu net g\u00f6r\u00fcl\u00fcyor."
                : "Inspired by the clarity of a premium product homepage, the stack and execution standard are made visible directly beneath the main surface."}
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-4">
          {content.map((item, index) => (
            <Reveal key={item.title} delay={0.06 + index * 0.05}>
              <Card className="h-full border border-white/10 bg-white/[0.04] shadow-[0_28px_90px_-56px_rgba(0,0,0,0.95)] backdrop-blur-xl">
                <CardHeader className="pb-0">
                  <div>
                    <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-zinc-500">
                      {item.eyebrow}
                    </p>
                    <p className="mt-4 font-display text-3xl font-semibold tracking-[-0.06em] text-white">
                      {item.title}
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="pt-5">
                  <p className="text-sm leading-7 text-zinc-400">{item.description}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </SectionShell>
  );
}

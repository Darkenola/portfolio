import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { getAboutPillars } from "@/lib/portfolio-data";
import type { Language } from "@/lib/i18n";

export function AboutSection({ lang }: { lang: Language }) {
  const aboutPillars = getAboutPillars(lang);

  return (
    <SectionShell id="about">
      <Container>
        <div className="grid gap-12 xl:grid-cols-[0.88fr_minmax(0,1.12fr)] xl:gap-16">
          <Reveal>
          <SectionHeading
            eyebrow={lang === "tr" ? "Hakkımda" : "About Me"}
            title={
              lang === "tr"
                ? "Üreten zihniyete sahip, kaliteyi uzun vadeli düşünen bir yazılım geliştirici."
                : "Software developer with a builder mindset and a long view on quality."
            }
            description={
              lang === "tr"
                ? "Benim için iyi yazılım; kullanışlı, teknik olarak sağlam ve ilk versiyonun ötesine geçecek kadar net kurulmuş yazılımdır."
                : "I care about software that is useful, technically sound, and built with enough clarity to scale beyond the first version."
            }
          />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_28px_100px_-54px_rgba(0,0,0,0.95)] backdrop-blur-xl sm:p-8">
              <p className="text-balance text-lg leading-8 text-zinc-200 sm:text-[1.2rem]">
                {lang === "tr"
                  ? "Ben Emirhan. Yazılım geliştirmeyi, problem çözmeyi, modern teknolojileri öğrenmeyi ve fikirleri güven veren gerçek dünyaya uygun projelere dönüştürmeyi seviyorum."
                  : "I&apos;m Emirhan, a software developer who enjoys building software, solving problems, learning modern technologies, and turning ideas into real-world projects that feel dependable."}
              </p>
              <p className="text-balance mt-5 text-base leading-8 text-zinc-400">
                {lang === "tr"
                  ? "En güçlü ilgim backend sistemler, otomasyon ve ölçeklenebilir yazılım tarafında. Bununla birlikte yapı, geliştirici deneyimi ve bir ürünü acele çıkmış değil bilinçli tasarlanmış hissettiren rafine detaylar da benim için çok önemli."
                  : "My strongest interests sit around backend systems, automation, and scalable software, but I also care deeply about structure, developer experience, and the polish that makes a product feel deliberate instead of rushed."}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {aboutPillars.map((pillar, index) => {
                  const Icon = pillar.icon;

                  return (
                    <Reveal key={pillar.title} delay={0.12 + index * 0.06}>
                      <article className="h-full rounded-[26px] border border-white/[0.08] bg-black/30 p-5 transition-colors hover:border-white/[0.16] hover:bg-black/40">
                        <div className="flex size-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                          <Icon className="size-5 text-cyan-300" />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-white">
                          {pillar.title}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-zinc-400">
                          {pillar.description}
                        </p>
                      </article>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </SectionShell>
  );
}

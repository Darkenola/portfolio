import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { getExperienceItems } from "@/lib/portfolio-data";
import type { Language } from "@/lib/i18n";

export function ExperienceSection({ lang }: { lang: Language }) {
  const experienceItems = getExperienceItems(lang);

  return (
    <SectionShell id="experience">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={lang === "tr" ? "Yolculuk" : "Experience Path"}
            title={
              lang === "tr"
                ? "Gerçek projeler, backend ilgisi ve pratik iterasyon etrafında şekillenen bir gelişim yolu."
                : "A growth path built around real projects, backend interest, and practical iteration."
            }
            description={
              lang === "tr"
                ? "Benim hedefim gürültü değil. Daha güçlü muhakeme, daha temiz uygulama ve her iterasyonda daha güvenilir hale gelen yazılım."
                : "I am not optimizing for noise. I am optimizing for stronger judgement, cleaner execution, and software that becomes more reliable with each iteration."
            }
          />
        </Reveal>

        <div className="mt-14 grid gap-6 xl:grid-cols-2">
          {experienceItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={0.08 + index * 0.06}>
                <article className="h-full rounded-[30px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_28px_100px_-54px_rgba(0,0,0,0.95)] backdrop-blur-xl sm:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex size-14 items-center justify-center rounded-[20px] border border-white/10 bg-black/35">
                        <Icon className="size-6 text-cyan-300" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm text-zinc-500">{item.type}</p>
                      </div>
                    </div>
                    <span className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs text-zinc-400">
                      {item.period}
                    </span>
                  </div>

                  <p className="text-balance mt-6 text-sm leading-7 text-zinc-400">
                    {item.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm leading-7 text-zinc-300"
                      >
                        <span className="mt-2 size-2 rounded-full bg-cyan-300" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </SectionShell>
  );
}

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { getNoteItems } from "@/lib/portfolio-data";
import type { Language } from "@/lib/i18n";

export function NotesSection({ lang }: { lang: Language }) {
  const noteItems = getNoteItems(lang);

  return (
    <SectionShell id="notes">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={lang === "tr" ? "Geliştirme Notları" : "Development Notes"}
            title={
              lang === "tr"
                ? "Yazılım geliştirmeye nasıl yaklaştığımı gösteren kısa notlar."
                : "A few short notes that reflect how I think about building software."
            }
            description={
              lang === "tr"
                ? "Bunlar henüz blog yazısı değil. Sistemlere, arayüzlere ve proje odaklı öğrenmeye nasıl yaklaştığımı gösteren kısa sinyaller."
                : "These are not blog posts yet. They are compact signals about the way I approach systems, interfaces, and project-led learning."
            }
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {noteItems.map((note, index) => (
            <Reveal key={note.title} delay={0.08 + index * 0.06}>
              <article className="h-full rounded-[30px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_28px_100px_-54px_rgba(0,0,0,0.95)] backdrop-blur-xl">
                <span className="inline-flex rounded-full border border-white/10 bg-black/30 px-4 py-2 font-mono text-[0.64rem] uppercase tracking-[0.28em] text-zinc-400">
                  {note.category}
                </span>
                <h3 className="text-balance mt-6 text-2xl font-semibold tracking-[-0.04em] text-white">
                  {note.title}
                </h3>
                <p className="text-balance mt-4 text-sm leading-7 text-zinc-400">
                  {note.excerpt}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </SectionShell>
  );
}

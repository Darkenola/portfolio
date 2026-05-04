import Link from "next/link";
import { chapterByKey, ChapterKey } from "@/lib/data/nav";

export default function ChapterHero({ chapterKey }: { chapterKey: ChapterKey }) {
  const chapter = chapterByKey(chapterKey);

  return (
    <section className="relative overflow-hidden pt-28 md:pt-32 pb-12 md:pb-16">
      <div className="absolute inset-0 -z-10 brutal-grid opacity-25" />
      <div className="absolute -top-36 left-1/2 -translate-x-1/2 w-[140vw] h-[140vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_60%)]" />

      <div className="container-pad">
        <div className="max-w-5xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 text-[10px] font-mono uppercase tracking-[0.4em] bg-[var(--acid)] text-ink-950 border-2 border-white/80">
              {chapter.kicker}
            </span>
            <span className="text-[10px] font-mono tracking-[0.4em] text-white/60">
              {chapter.num}
            </span>
          </div>

          <h1 className="mt-6 font-display font-semibold tracking-[-0.02em] leading-[0.9] text-[12vw] md:text-[8vw] lg:text-[6vw]">
            {chapter.title}
          </h1>

          <p className="mt-4 text-white/65 text-base md:text-lg max-w-2xl">
            {chapter.blurb}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 border-2 border-white/80 bg-white text-ink-950 font-mono text-xs uppercase tracking-[0.3em] transition hover:-translate-y-0.5"
            >
              Teklif Al
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-3 border-2 border-white/30 text-white/80 font-mono text-xs uppercase tracking-[0.3em] transition hover:border-white/80 hover:text-white"
            >
              Index
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

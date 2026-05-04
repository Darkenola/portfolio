import Link from "next/link";
import { adjacentChapters, ChapterKey } from "@/lib/data/nav";

export default function ChapterNav({ chapterKey }: { chapterKey: ChapterKey }) {
  const { prev, next } = adjacentChapters(chapterKey);

  if (!prev && !next) return null;

  return (
    <section className="section-pad border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 brutal-grid opacity-10" />

      <div className="container-pad grid md:grid-cols-2 gap-6">
        {prev ? (
          <Link
            href={prev.href}
            className="group block p-6 md:p-7 border-2 border-white/20 hover:border-white/80 transition brutal-card"
            data-cursor="hover"
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.35em] text-white/50">
              Prev
            </span>
            <h3 className="mt-4 font-display text-3xl md:text-4xl text-white">
              {prev.label}
            </h3>
            <p className="mt-2 text-white/60 text-sm md:text-base">
              {prev.title}
            </p>
          </Link>
        ) : (
          <div className="hidden md:block" />
        )}

        {next ? (
          <Link
            href={next.href}
            className="group block p-6 md:p-7 border-2 border-white/20 hover:border-white/80 transition brutal-card"
            data-cursor="hover"
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.35em] text-white/50">
              Next
            </span>
            <h3 className="mt-4 font-display text-3xl md:text-4xl text-white">
              {next.label}
            </h3>
            <p className="mt-2 text-white/60 text-sm md:text-base">
              {next.title}
            </p>
          </Link>
        ) : (
          <div className="hidden md:block" />
        )}
      </div>
    </section>
  );
}

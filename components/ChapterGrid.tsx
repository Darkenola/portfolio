import Link from "next/link";
import { chapters } from "@/lib/data/nav";

export default function ChapterGrid() {
  const list = chapters.filter((c) => c.key !== "home");

  return (
    <section className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 -z-10 brutal-grid opacity-15" />

      <div className="container-pad">
        <div className="flex flex-col gap-3 max-w-3xl">
          <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-white/50">
            Site Map
          </span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[0.95]">
            Her bolum kendi sahnesinde.
          </h2>
          <p className="text-white/60 text-base md:text-lg">
            Duz sayfa degil, her bolum icin ayri bir hikaye. Hepsi tek tek gezilsin,
            her birinde baska bir vurgu var.
          </p>
        </div>
      </div>

      <div className="container-pad mt-10 grid md:grid-cols-2 gap-6">
        {list.map((c) => (
          <Link
            key={c.key}
            href={c.href}
            className="group relative block p-6 md:p-7 bg-ink-900/80 border-2 border-white/15 hover:border-white/80 transition brutal-card"
            data-cursor="hover"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono tracking-[0.4em] text-white/50">
                {c.num}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-[0.35em] bg-[var(--acid)] text-ink-950 px-2.5 py-1 border-2 border-ink-950">
                {c.kicker}
              </span>
            </div>

            <h3 className="mt-6 font-display text-3xl md:text-4xl text-white">
              {c.label}
            </h3>
            <p className="mt-2 text-white/65 text-sm md:text-base max-w-md">
              {c.blurb}
            </p>

            <div className="mt-6 flex items-center gap-2 text-xs font-mono uppercase tracking-[0.35em] text-white/60">
              Go
              <span className="inline-flex items-center justify-center w-6 h-6 border-2 border-white/40 group-hover:border-white/80 transition">
                &gt;
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

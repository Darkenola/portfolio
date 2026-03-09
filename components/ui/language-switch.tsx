import Link from "next/link";

import type { Language } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type LanguageSwitchProps = {
  lang: Language;
  hrefEn: string;
  hrefTr: string;
  compact?: boolean;
};

export function LanguageSwitch({
  lang,
  hrefEn,
  hrefTr,
  compact = false,
}: LanguageSwitchProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-white/10 bg-black/35 p-1 backdrop-blur-xl",
        compact ? "gap-0.5" : "gap-1",
      )}
      aria-label="Language switch"
    >
      <Link
        href={hrefEn}
        className={cn(
          "rounded-full px-3 py-1.5 text-xs font-medium transition",
          lang === "en"
            ? "bg-white text-black"
            : "text-zinc-400 hover:text-white",
        )}
      >
        EN
      </Link>
      <Link
        href={hrefTr}
        className={cn(
          "rounded-full px-3 py-1.5 text-xs font-medium transition",
          lang === "tr"
            ? "bg-white text-black"
            : "text-zinc-400 hover:text-white",
        )}
      >
        TR
      </Link>
    </div>
  );
}

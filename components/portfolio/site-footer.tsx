import Link from "next/link";

import { Container } from "@/components/ui/container";
import type { Language } from "@/lib/i18n";
import { getNavItems } from "@/lib/portfolio-data";
import { localizedPath } from "@/lib/routing";

export function SiteFooter({ lang }: { lang: Language }) {
  const navItems = getNavItems(lang);

  return (
    <footer className="border-t border-white/[0.08] py-8">
      <Container className="flex flex-col gap-6 text-sm text-zinc-500 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="font-display text-lg font-semibold tracking-[0.04em] text-zinc-100">
            Darkenola
          </p>
          <p className="mt-1 text-zinc-500">
            {lang === "tr"
              ? "Kodla. Üret. Öğren. Tekrar et."
              : "Code. Build. Learn. Repeat."}
          </p>
        </div>

        <div className="flex flex-col gap-3 lg:items-end">
          <div className="flex flex-wrap gap-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={localizedPath(item.href, lang)}
                className="transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <p className="text-zinc-500">
            {lang === "tr"
              ? "Emirhan - Yazılım Geliştirici"
              : "Emirhan - Software Developer"}
          </p>
        </div>
      </Container>
    </footer>
  );
}

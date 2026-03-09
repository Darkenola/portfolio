import Link from "next/link";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { LanguageSwitch } from "@/components/ui/language-switch";
import type { Language } from "@/lib/i18n";
import { getNavItems } from "@/lib/portfolio-data";
import { localizedPath } from "@/lib/routing";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  lang: Language;
  currentPath: string;
};

export function SiteHeader({ lang, currentPath }: SiteHeaderProps) {
  const navItems = getNavItems(lang);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container>
        <div className="mt-4 flex items-center justify-between gap-4 rounded-full border border-white/10 bg-black/45 px-4 py-3 shadow-[0_24px_80px_-36px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:px-5">
          <Link
            href={localizedPath("/", lang)}
            className="flex items-center gap-3 rounded-full px-1 py-1 text-white transition hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70"
            aria-label={lang === "tr" ? "Ana sayfaya git" : "Go to home page"}
          >
            <span className="flex size-10 items-center justify-center rounded-full border border-white/[0.14] bg-white text-sm font-semibold tracking-[0.22em] text-black">
              D
            </span>
            <span className="min-w-0">
              <span className="block truncate font-display text-sm font-semibold tracking-[0.04em]">
                Darkenola
              </span>
              <span className="block truncate text-xs text-zinc-400">
                {lang === "tr"
                  ? "Emirhan - Yazılım Geliştirici"
                  : "Emirhan - Software Developer"}
              </span>
            </span>
          </Link>

          <nav
            className="hidden items-center gap-1 md:flex"
            aria-label={lang === "tr" ? "Ana gezinme" : "Primary navigation"}
          >
            {navItems.map((item) => {
              const href = localizedPath(item.href, lang);
              const isActive =
                currentPath === item.href ||
                (item.href !== "/" && currentPath.startsWith(item.href));

              return (
                <Link
                  key={item.label}
                  href={href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70",
                    isActive
                      ? "bg-white/[0.08] text-white"
                      : "text-zinc-400 hover:bg-white/[0.05] hover:text-white",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 sm:flex">
            <LanguageSwitch
              lang={lang}
              hrefEn={currentPath}
              hrefTr={localizedPath(currentPath, "tr")}
              compact
            />
            <ButtonLink
              href={localizedPath("/contact", lang)}
              variant="secondary"
              className="px-4 py-2.5 text-sm"
              showArrow={false}
              aria-label={
                lang === "tr"
                  ? "İletişim sayfasını aç"
                  : "Open contact page"
              }
            >
              {lang === "tr" ? "İletişim" : "Contact"}
            </ButtonLink>
          </div>

          <div className="sm:hidden">
            <ButtonLink
              href={localizedPath("/contact", lang)}
              variant="secondary"
              className="px-4 py-2.5 text-sm"
              showArrow={false}
              aria-label={
                lang === "tr"
                  ? "İletişim sayfasını aç"
                  : "Open contact page"
              }
            >
              {lang === "tr" ? "İletişim" : "Contact"}
            </ButtonLink>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between gap-3 md:hidden">
          <nav
            className="flex min-w-0 flex-1 gap-2 overflow-x-auto rounded-full border border-white/10 bg-black/35 px-3 py-2 backdrop-blur-xl"
            aria-label={lang === "tr" ? "Mobil gezinme" : "Mobile navigation"}
          >
            {navItems.map((item) => {
              const href = localizedPath(item.href, lang);
              const isActive =
                currentPath === item.href ||
                (item.href !== "/" && currentPath.startsWith(item.href));

              return (
                <Link
                  key={item.label}
                  href={href}
                  className={cn(
                    "shrink-0 rounded-full border px-4 py-2 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70",
                    isActive
                      ? "border-white/10 bg-white/[0.08] text-white"
                      : "border-transparent text-zinc-400 hover:border-white/10 hover:bg-white/[0.05] hover:text-white",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <LanguageSwitch
            lang={lang}
            hrefEn={currentPath}
            hrefTr={localizedPath(currentPath, "tr")}
            compact
          />
        </div>
      </Container>
    </header>
  );
}

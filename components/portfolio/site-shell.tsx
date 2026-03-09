import { MotionProvider } from "@/components/ui/motion-provider";
import { SiteFooter } from "@/components/portfolio/site-footer";
import { SiteHeader } from "@/components/portfolio/site-header";
import type { Language } from "@/lib/i18n";

type SiteShellProps = {
  lang: Language;
  currentPath: string;
  children: React.ReactNode;
};

export function SiteShell({ lang, currentPath, children }: SiteShellProps) {
  return (
    <MotionProvider>
      <div className="relative isolate overflow-x-hidden">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-black"
        >
          {lang === "tr" ? "İçeriğe geç" : "Skip to content"}
        </a>

        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top,rgba(120,159,255,0.16),transparent_40%)]" />
          <div className="absolute right-[-10%] top-[16%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(141,216,255,0.12),transparent_65%)] blur-3xl" />
          <div className="absolute left-[-8%] top-[44%] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.07),transparent_65%)] blur-3xl" />
        </div>

        <SiteHeader currentPath={currentPath} lang={lang} />

        <main id="content">{children}</main>

        <SiteFooter lang={lang} />
      </div>
    </MotionProvider>
  );
}

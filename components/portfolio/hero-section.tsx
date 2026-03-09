"use client";

import Image from "next/image";
import { useState } from "react";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Braces, TerminalSquare } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionShell } from "@/components/ui/section-shell";
import type { Language } from "@/lib/i18n";
import { getHeroHighlights } from "@/lib/portfolio-data";
import { localizedPath } from "@/lib/routing";

const lineTransition = {
  duration: 0.85,
  ease: [0.22, 1, 0.36, 1] as const,
};

export function HeroSection({
  lang,
  profileImageSrc,
}: {
  lang: Language;
  profileImageSrc: string | null;
}) {
  const shouldReduceMotion = useReducedMotion();
  const heroHighlights = getHeroHighlights(lang);

  return (
    <SectionShell
      id="home"
      className="flex min-h-screen items-center overflow-hidden pb-20 pt-44 sm:pb-24 sm:pt-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-[6%] h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.12),_transparent_62%)] blur-3xl" />
        <motion.div
          className="absolute left-[14%] top-[22%] h-56 w-56 rounded-full bg-[radial-gradient(circle,_rgba(141,216,255,0.12),_transparent_66%)] blur-3xl"
          animate={shouldReduceMotion ? undefined : { y: [0, -20, 0] }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute right-[10%] top-[12%] h-44 w-44 rounded-full border border-white/10 bg-white/[0.04] blur-2xl"
          animate={
            shouldReduceMotion
              ? undefined
              : { scale: [1, 1.08, 1], opacity: [0.38, 0.62, 0.38] }
          }
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 shadow-[0_24px_80px_-36px_rgba(0,0,0,0.9)] backdrop-blur-xl"
          >
            <span className="inline-flex size-2 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(74,222,128,0.8)]" />
            <span className="font-mono text-[0.68rem] uppercase tracking-[0.34em] text-zinc-300">
              {lang === "tr"
                ? "Darkenola // Ki\u015fisel M\u00fchendislik Markas\u0131"
                : "Darkenola // Personal Engineering Brand"}
            </span>
          </motion.div>

          <h1 className="mt-8 font-display text-[clamp(3.4rem,9vw,7.5rem)] font-semibold tracking-[-0.09em] text-white">
            <span className="block overflow-hidden pb-2">
              <motion.span
                className="block leading-[0.9]"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 80 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ ...lineTransition, delay: 0.08 }}
              >
                Emirhan
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-2">
              <motion.span
                className="block bg-[linear-gradient(135deg,#ffffff_0%,#e6ebff_34%,#8ed8ff_100%)] bg-clip-text leading-[0.9] text-transparent"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 80 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ ...lineTransition, delay: 0.16 }}
              >
                {lang === "tr" ? "Software Developer" : "Software Developer"}
              </motion.span>
            </span>
            <span className="block overflow-hidden pt-6 text-[clamp(1.15rem,2vw,2rem)] tracking-[-0.04em] text-zinc-300">
              <motion.span
                className="text-balance mx-auto block max-w-4xl leading-[1.18]"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 48 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ ...lineTransition, delay: 0.26 }}
              >
                {lang === "tr"
                  ? "Ciddi m\u00fchendislik d\u00fc\u015f\u00fcncesini, rafine bir dijital sunumla birle\u015ftiren portfolyo."
                  : "A developer portfolio that combines serious engineering thinking with a refined digital presentation."}
              </motion.span>
            </span>
          </h1>

          <motion.p
            className="text-balance mx-auto mt-7 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.36,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {lang === "tr"
              ? "Backend sistemler, otomasyon, modern aray\u00fczler ve ger\u00e7ek proje teslimine odaklanan bir yaz\u0131l\u0131m geli\u015ftirici. Ama\u00e7; daha okunmadan bile g\u00fcven veren bir ki\u015fisel marka hissi yaratmak."
              : "A software developer focused on backend systems, automation, modern interfaces, and real project delivery. The goal is to create a personal brand that signals credibility before a single paragraph is read."}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.46,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <ButtonLink
              href={localizedPath("/projects", lang)}
              variant="primary"
              showArrow={false}
            >
              {lang === "tr" ? "Projeleri G\u00f6r" : "View Projects"}
            </ButtonLink>
            <ButtonLink
              href={localizedPath("/resume", lang)}
              variant="secondary"
              showArrow={false}
            >
              {lang === "tr" ? "CV'yi \u0130ncele" : "Review Resume"}
            </ButtonLink>
            <ButtonLink
              href={localizedPath("/contact", lang)}
              variant="ghost"
              showArrow={false}
            >
              {lang === "tr" ? "\u0130leti\u015fim" : "Contact"}
            </ButtonLink>
          </motion.div>

          <motion.div
            className="mx-auto mt-10 inline-flex max-w-full items-center gap-3 overflow-x-auto rounded-full border border-white/10 bg-black/35 px-4 py-3 font-mono text-xs text-zinc-400 shadow-[0_24px_90px_-48px_rgba(0,0,0,0.95)] backdrop-blur-xl"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.54,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="text-zinc-600">$</span>
            <span>{lang === "tr" ? "npx darkenola ship --quality=high" : "npx darkenola ship --quality=high"}</span>
          </motion.div>

          <motion.dl
            className="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-3"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.62,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {heroHighlights.map((item) => (
              <div
                key={item.label}
                className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5 text-left shadow-[0_24px_80px_-48px_rgba(0,0,0,0.9)] backdrop-blur-xl"
              >
                <dt className="font-mono text-[0.66rem] uppercase tracking-[0.3em] text-zinc-500">
                  {item.label}
                </dt>
                <dd className="mt-3 text-base font-medium text-zinc-100">
                  {item.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          className="mx-auto mt-16 grid max-w-6xl gap-6 xl:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)]"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 34 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.52,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <PortfolioSurface lang={lang} />
          <div className="grid gap-6">
            <ProfilePhotoPanel lang={lang} profileImageSrc={profileImageSrc} />
            <SignalSurface lang={lang} />
          </div>
        </motion.div>
      </Container>
    </SectionShell>
  );
}

function PortfolioSurface({ lang }: { lang: Language }) {
  return (
    <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(141,216,255,0.08),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] p-6 shadow-[0_40px_140px_-64px_rgba(0,0,0,0.95)] backdrop-blur-2xl sm:p-8">
      <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(255,255,255,0.04),transparent_32%,transparent_68%,rgba(141,216,255,0.08))]" />
      <div className="relative">
        <div className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-auto rounded-full border border-white/10 bg-black/30 px-3 py-1 font-mono text-[0.64rem] uppercase tracking-[0.28em] text-zinc-500">
            {lang === "tr" ? "Ana Sunum" : "Main Surface"}
          </span>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[28px] border border-white/10 bg-black/[0.34] p-6">
            <p className="font-mono text-[0.66rem] uppercase tracking-[0.3em] text-zinc-500">
              {lang === "tr" ? "Marka Y\u00f6n\u00fc" : "Brand Direction"}
            </p>
            <h2 className="mt-5 text-balance font-display text-4xl font-semibold tracking-[-0.07em] text-white sm:text-[3.2rem]">
              {lang === "tr"
                ? "Portfolyo gibi de\u011fil, \u00fcr\u00fcn gibi sunulan ki\u015fisel marka."
                : "A personal brand presented with the clarity of a product."}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400">
              {lang === "tr"
                ? "Ama\u00e7 yaln\u0131zca bilgi vermek de\u011fil. M\u00fchendislik disiplini, yaz\u0131l\u0131m kalitesi ve rafine sunum ayn\u0131 anda hissettiriliyor."
                : "The goal is not just to present information, but to make engineering discipline, software quality, and polished presentation feel obvious at a glance."}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <MiniSurface
                label={lang === "tr" ? "Odak" : "Focus"}
                value={
                  lang === "tr"
                    ? "Backend sistemler + otomasyon"
                    : "Backend systems + automation"
                }
              />
              <MiniSurface
                label={lang === "tr" ? "Sunum" : "Presentation"}
                value={
                  lang === "tr"
                    ? "Net hiyerar\u015fi, g\u00fc\u00e7l\u00fc ritim"
                    : "Clear hierarchy, strong rhythm"
                }
              />
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-[#05070b]/90 p-5 font-mono text-sm text-zinc-300">
            <p className="text-cyan-300">export default function Darkenola()</p>
            <div className="mt-4 pl-4 text-zinc-400">
              <div>return (</div>
              <div className="mt-3 pl-4 text-zinc-200">&lt;Brand clarity /&gt;</div>
              <div className="mt-3 pl-4 text-zinc-200">&lt;Project depth /&gt;</div>
              <div className="mt-3 pl-4 text-zinc-200">&lt;Engineering signal /&gt;</div>
              <div className="mt-3 pl-4 text-zinc-200">&lt;Polished delivery /&gt;</div>
              <div className="mt-3">);</div>
            </div>

            <div className="mt-8 rounded-[22px] border border-white/10 bg-white/[0.04] p-4">
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-zinc-500">
                {lang === "tr" ? "Teslim standard\u0131" : "Shipping standard"}
              </p>
              <p className="mt-3 text-sm leading-7 text-zinc-300">
                {lang === "tr"
                  ? "Okunabilir mimari, temiz route yap\u0131s\u0131, g\u00fc\u00e7l\u00fc tipografi, kontroll\u00fc motion."
                  : "Readable architecture, clean route structure, strong typography, and controlled motion."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SignalSurface({ lang }: { lang: Language }) {
  return (
    <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_32px_100px_-58px_rgba(0,0,0,0.95)] backdrop-blur-xl">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-[24px] border border-white/10 bg-black/30 p-5">
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
              <TerminalSquare className="size-5 text-cyan-300" />
            </div>
            <div>
              <p className="font-mono text-[0.66rem] uppercase tracking-[0.3em] text-zinc-500">
                {lang === "tr" ? "Ana Stack" : "Core Stack"}
              </p>
              <p className="mt-1 text-sm text-zinc-200">
                Next.js, TypeScript, Node.js
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[24px] border border-white/10 bg-black/30 p-5">
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
              <Braces className="size-5 text-cyan-300" />
            </div>
            <div>
              <p className="font-mono text-[0.66rem] uppercase tracking-[0.3em] text-zinc-500">
                {lang === "tr" ? "Kalite \u00c7izgisi" : "Quality Bar"}
              </p>
              <p className="mt-1 text-sm text-zinc-200">
                {lang === "tr"
                  ? "Okunabilir mimari ve rafine UX"
                  : "Readable architecture and polished UX"}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between rounded-[24px] border border-white/10 bg-black/30 px-5 py-4">
        <div>
          <p className="font-mono text-[0.66rem] uppercase tracking-[0.3em] text-zinc-500">
            {lang === "tr" ? "M\u00fchendislik y\u00f6n\u00fc" : "Engineering direction"}
          </p>
          <p className="mt-2 text-sm text-zinc-300">
            {lang === "tr"
              ? "Modern aray\u00fczler, backend d\u00fc\u015f\u00fcncesi ve ger\u00e7ek proje ak\u0131\u015f\u0131."
              : "Modern interfaces, backend thinking, and real project flow."}
          </p>
        </div>
        <ArrowUpRight className="size-5 text-zinc-500" />
      </div>
    </div>
  );
}

function ProfilePhotoPanel({
  lang,
  profileImageSrc,
}: {
  lang: Language;
  profileImageSrc: string | null;
}) {
  const [showImage, setShowImage] = useState(Boolean(profileImageSrc));

  return (
    <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_32px_100px_-58px_rgba(0,0,0,0.95)] backdrop-blur-xl">
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-[0.64rem] uppercase tracking-[0.28em] text-zinc-500">
          {lang === "tr" ? "Portre" : "Portrait"}
        </p>
        <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[0.65rem] uppercase tracking-[0.24em] text-zinc-400">
          Darkenola
        </span>
      </div>

      <div className="relative mt-4 aspect-[4/5] overflow-hidden rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(141,216,255,0.16),transparent_36%),linear-gradient(180deg,#0d1016_0%,#080a0f_100%)]">
        {showImage && profileImageSrc ? (
          <Image
            src={profileImageSrc}
            alt={lang === "tr" ? "Emirhan portresi" : "Portrait of Emirhan"}
            fill
            priority
            sizes="(min-width: 1280px) 260px, (min-width: 768px) 240px, 70vw"
            className="object-cover"
            onError={() => setShowImage(false)}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[radial-gradient(circle_at_top,rgba(141,216,255,0.18),transparent_36%),linear-gradient(180deg,#0d1016_0%,#080a0f_100%)] text-center">
            <span className="font-display text-7xl font-semibold tracking-[-0.08em] text-white">
              EA
            </span>
            <span className="mt-3 text-xs uppercase tracking-[0.3em] text-zinc-500">
              Emirhan
            </span>
          </div>
        )}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-[linear-gradient(180deg,transparent,rgba(5,7,11,0.92))]" />
      </div>

      <div className="mt-4 rounded-[24px] border border-white/10 bg-black/30 px-4 py-4">
        <p className="text-sm font-medium text-white">Emirhan</p>
        <p className="mt-1 text-sm leading-6 text-zinc-400">
          {lang === "tr"
            ? "Darkenola markas\u0131 alt\u0131nda modern yaz\u0131l\u0131m geli\u015ftirme."
            : "Modern software development under the Darkenola brand."}
        </p>
        {!profileImageSrc ? (
          <p className="mt-3 text-xs leading-5 text-zinc-500">
            {lang === "tr"
              ? "Ger\u00e7ek foto\u011fraf i\u00e7in `public/images/emirhan-profile.png`, `.jpg`, `.jpeg`, `.webp` veya `.avif` ekle."
              : "Add a real photo at `public/images/emirhan-profile.png`, `.jpg`, `.jpeg`, `.webp`, or `.avif`."}
          </p>
        ) : null}
      </div>
    </div>
  );
}

function MiniSurface({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[22px] border border-white/10 bg-white/[0.04] p-4">
      <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-zinc-500">
        {label}
      </p>
      <p className="mt-3 text-sm leading-7 text-zinc-200">{value}</p>
    </div>
  );
}

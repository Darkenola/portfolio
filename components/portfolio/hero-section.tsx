"use client";

import Image from "next/image";
import { useState } from "react";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, Braces, TerminalSquare } from "lucide-react";

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
        <div className="absolute left-1/2 top-[8%] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(120,159,255,0.18),_transparent_68%)] blur-3xl" />
        <motion.div
          className="absolute right-[8%] top-[22%] h-40 w-40 rounded-full border border-cyan-400/20 bg-cyan-400/10 blur-2xl"
          animate={
            shouldReduceMotion
              ? undefined
              : { y: [0, -18, 0], scale: [1, 1.06, 1] }
          }
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-[18%] left-[6%] h-56 w-56 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.08),_transparent_70%)] blur-3xl"
          animate={
            shouldReduceMotion
              ? undefined
              : { y: [0, 24, 0], x: [0, 10, 0] }
          }
          transition={{
            duration: 14,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-12">
          <div className="max-w-3xl">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 shadow-[0_24px_80px_-36px_rgba(0,0,0,0.9)] backdrop-blur-xl"
            >
              <span className="inline-flex size-2 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(74,222,128,0.8)]" />
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.34em] text-zinc-300">
                {lang === "tr"
                  ? "Darkenola // Yaz\u0131l\u0131m Geli\u015ftirici"
                  : "Darkenola // Software Developer"}
              </span>
            </motion.div>

            <h1 className="mt-8 font-display text-[clamp(3.3rem,8vw,7rem)] font-semibold tracking-[-0.08em] text-white">
              <span className="block overflow-hidden pb-2">
                <motion.span
                  className="block leading-[0.92]"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 80 }}
                  animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ ...lineTransition, delay: 0.08 }}
                >
                  {lang === "tr" ? "Merhaba, ben Emirhan" : "Hi, I'm Emirhan"}
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-2">
                <motion.span
                  className="block bg-[linear-gradient(135deg,#ffffff_0%,#d9e7ff_42%,#8ed8ff_100%)] bg-clip-text leading-[0.92] text-transparent"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 80 }}
                  animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ ...lineTransition, delay: 0.16 }}
                >
                  {lang === "tr" ? "Yaz\u0131l\u0131m Geli\u015ftirici" : "Software Developer"}
                </motion.span>
              </span>
              <span className="block overflow-hidden pt-4 text-[clamp(1.2rem,2vw,2rem)] tracking-[-0.04em] text-zinc-300">
                <motion.span
                  className="text-balance block max-w-3xl leading-[1.18]"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 48 }}
                  animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ ...lineTransition, delay: 0.26 }}
                >
                  {lang === "tr"
                    ? "Modern ve ger\u00e7ek d\u00fcnyaya dokunan dijital deneyimler \u00fcretiyorum"
                    : "Building modern, real-world digital experiences"}
                </motion.span>
              </span>
            </h1>

            <motion.p
              className="text-balance mt-7 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.36,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {lang === "tr"
                ? "Ben Emirhan. Yaz\u0131l\u0131ma, backend sistemlere, otomasyona ve hem m\u00fchendislik kalitesi hem de \u00fcr\u00fcn deneyimi a\u00e7\u0131s\u0131ndan sa\u011flam hissettiren ger\u00e7ek projeler geli\u015ftirmeye tutkuyla ba\u011fl\u0131y\u0131m."
                : "I&apos;m Emirhan, a developer passionate about software, backend systems, automation, and building real projects that feel solid in both engineering quality and product experience."}
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col gap-4 sm:flex-row"
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
                href={localizedPath("/contact", lang)}
                variant="secondary"
                showArrow={false}
              >
                {lang === "tr" ? "\u0130leti\u015fime Ge\u00e7" : "Contact Me"}
              </ButtonLink>
              <ButtonLink
                href={localizedPath("/resume", lang)}
                variant="ghost"
                showArrow={false}
              >
                {lang === "tr" ? "CV" : "Resume"}
              </ButtonLink>
            </motion.div>

            <motion.dl
              className="mt-12 grid gap-4 sm:grid-cols-3"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.56,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {heroHighlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_24px_80px_-48px_rgba(0,0,0,0.9)] backdrop-blur-xl"
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

          <HeroVisual lang={lang} profileImageSrc={profileImageSrc} />
        </div>
      </Container>
    </SectionShell>
  );
}

function HeroVisual({
  lang,
  profileImageSrc,
}: {
  lang: Language;
  profileImageSrc: string | null;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-[540px]">
      <motion.div
        className="absolute right-8 top-0 hidden size-[5.5rem] rounded-full border border-cyan-400/15 bg-cyan-400/10 blur-md md:block"
        animate={
          shouldReduceMotion
            ? undefined
            : { scale: [1, 1.08, 1], opacity: [0.45, 0.7, 0.45] }
        }
        transition={{
          duration: 9,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-5 shadow-[0_32px_120px_-55px_rgba(0,0,0,0.95)] backdrop-blur-2xl sm:p-6"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 40, rotate: -1.6 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(141,216,255,0.16),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(119,118,255,0.12),transparent_34%)]" />
        <div className="relative">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-[#ff5f57]" />
              <span className="size-2.5 rounded-full bg-[#febc2e]" />
              <span className="size-2.5 rounded-full bg-[#28c840]" />
            </div>
            <span className="rounded-full border border-white/10 bg-black/35 px-3 py-1 font-mono text-[0.64rem] uppercase tracking-[0.28em] text-zinc-400">
              profile.tsx
            </span>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-[0.78fr_1.22fr]">
            <ProfilePhotoPanel lang={lang} profileImageSrc={profileImageSrc} />

            <div className="rounded-[28px] border border-white/10 bg-black/[0.38] p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-zinc-500">
                    {lang === "tr" ? "G\u00fcncel odak" : "Current focus"}
                  </p>
                  <h2 className="text-balance mt-3 font-display text-2xl font-semibold tracking-[-0.05em] text-white sm:text-[2.1rem]">
                    {lang === "tr"
                      ? "\u00d6l\u00e7eklenebilir yaz\u0131l\u0131m ve bilin\u00e7li dijital \u00fcr\u00fcnler."
                      : "Scalable software and intentional digital products."}
                  </h2>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                  <span className="size-2 rounded-full bg-emerald-400" />
                  {lang === "tr" ? "M\u00fcsait" : "Available"}
                </span>
              </div>

              <div className="mt-6 rounded-[22px] border border-white/[0.08] bg-[#05070b] p-4 font-mono text-sm text-zinc-300">
                <div className="flex gap-3">
                  <span className="text-cyan-300">const</span>
                  <span>
                    {lang === "tr"
                      ? 'mindset = ["tasarla", "\u00fcret", "geli\u015ftir"];'
                      : 'mindset = ["design", "build", "refine"];'}
                  </span>
                </div>
                <div className="mt-3 flex gap-3">
                  <span className="text-cyan-300">const</span>
                  <span>
                    {lang === "tr"
                      ? 'focus = "backend sistemler + otomasyon";'
                      : 'focus = "backend systems + automation";'}
                  </span>
                </div>
                <div className="mt-3 flex gap-3">
                  <span className="text-cyan-300">return</span>
                  <span className="text-zinc-100">ship({"{ quality: true }"});</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
              <div className="flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-2xl border border-white/10 bg-black/35">
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

            <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
              <div className="flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-2xl border border-white/10 bg-black/35">
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

          <div className="mt-4 flex items-center justify-between rounded-[24px] border border-white/10 bg-white/[0.03] px-5 py-4">
            <div>
              <p className="font-mono text-[0.66rem] uppercase tracking-[0.3em] text-zinc-500">
                {lang === "tr" ? "M\u00fchendislik y\u00f6n\u00fc" : "Engineering direction"}
              </p>
              <p className="mt-2 text-sm text-zinc-300">
                {lang === "tr"
                  ? "G\u00fc\u00e7l\u00fc backend d\u00fc\u015f\u00fcncesiyle desteklenen modern aray\u00fczler."
                  : "Modern interfaces supported by strong backend thinking."}
              </p>
            </div>
            <ArrowDownRight className="size-5 text-zinc-500" />
          </div>
        </div>
      </motion.div>
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
    <div className="rounded-[28px] border border-white/10 bg-black/[0.42] p-4">
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-[0.64rem] uppercase tracking-[0.28em] text-zinc-500">
          {lang === "tr" ? "Portre" : "Portrait"}
        </p>
        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[0.65rem] uppercase tracking-[0.24em] text-zinc-400">
          Darkenola
        </span>
      </div>

      <div className="relative mt-4 aspect-[4/5] overflow-hidden rounded-[24px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(141,216,255,0.16),transparent_36%),linear-gradient(180deg,#0d1016_0%,#080a0f_100%)]">
        {showImage && profileImageSrc ? (
          <Image
            src={profileImageSrc}
            alt={lang === "tr" ? "Emirhan portresi" : "Portrait of Emirhan"}
            fill
            priority
            sizes="(min-width: 1280px) 240px, (min-width: 768px) 220px, 70vw"
            className="object-cover"
            onError={() => setShowImage(false)}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[radial-gradient(circle_at_top,rgba(141,216,255,0.18),transparent_36%),linear-gradient(180deg,#0d1016_0%,#080a0f_100%)] text-center">
            <span className="font-display text-6xl font-semibold tracking-[-0.08em] text-white">
              EA
            </span>
            <span className="mt-3 text-xs uppercase tracking-[0.3em] text-zinc-500">
              Emirhan
            </span>
          </div>
        )}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,transparent,rgba(5,7,11,0.9))]" />
      </div>

      <div className="mt-4 rounded-[22px] border border-white/10 bg-white/[0.03] px-4 py-3">
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

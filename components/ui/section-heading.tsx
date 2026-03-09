import { Chip } from "@heroui/react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "",
      )}
    >
      <Chip className="border border-white/10 bg-white/[0.04] px-4 py-2 font-mono text-[0.68rem] uppercase tracking-[0.32em] text-zinc-300">
        {eyebrow}
      </Chip>
      <h2 className="text-balance mt-6 font-display text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-[3.7rem] lg:leading-[1.02]">
        {title}
      </h2>
      <p className="text-balance mt-5 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
        {description}
      </p>
    </div>
  );
}

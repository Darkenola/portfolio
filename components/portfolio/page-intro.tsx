import { Card, CardContent, CardHeader, Chip } from "@heroui/react";

import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type IntroStat = {
  label: string;
  value: string;
};

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  stats?: IntroStat[];
  className?: string;
};

export function PageIntro({
  eyebrow,
  title,
  description,
  stats = [],
  className,
}: PageIntroProps) {
  return (
    <section className={cn("relative pb-14 pt-36 sm:pb-16 sm:pt-40", className)}>
      <Container>
        <div className="grid gap-8 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] xl:items-end">
          <div className="max-w-3xl">
            <Chip className="border border-white/10 bg-white/[0.04] px-4 py-2 font-mono text-[0.68rem] uppercase tracking-[0.32em] text-zinc-300">
              {eyebrow}
            </Chip>
            <h1 className="text-balance mt-6 font-display text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl lg:text-[4.25rem] lg:leading-[1.02]">
              {title}
            </h1>
            <p className="text-balance mt-5 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
              {description}
            </p>
          </div>

          {stats.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <Card
                  key={stat.label}
                  className="border border-white/10 bg-white/[0.04] shadow-[0_28px_90px_-52px_rgba(0,0,0,0.92)] backdrop-blur-xl"
                >
                  <CardHeader className="pb-0">
                    <p className="font-mono text-[0.64rem] uppercase tracking-[0.28em] text-zinc-500">
                      {stat.label}
                    </p>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="font-display text-3xl font-semibold tracking-[-0.05em] text-white">
                      {stat.value}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

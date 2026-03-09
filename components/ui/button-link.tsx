import type { ComponentPropsWithoutRef } from "react";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { isExternalHref } from "@/lib/routing";
import { cn } from "@/lib/utils";

type ButtonLinkProps = ComponentPropsWithoutRef<"a"> & {
  variant?: "primary" | "secondary" | "ghost";
  showArrow?: boolean;
};

const variants = {
  primary:
    "bg-white text-black shadow-[0_20px_60px_-20px_rgba(255,255,255,0.4)] hover:-translate-y-0.5 hover:bg-zinc-100",
  secondary:
    "border border-white/[0.12] bg-white/[0.04] text-zinc-100 hover:-translate-y-0.5 hover:border-white/[0.22] hover:bg-white/[0.08]",
  ghost:
    "border border-transparent bg-transparent text-zinc-300 hover:bg-white/[0.05] hover:text-white",
};

export function ButtonLink({
  children,
  className,
  variant = "primary",
  href = "#",
  target,
  rel,
  showArrow,
  ...props
}: ButtonLinkProps) {
  const external = isExternalHref(href);
  const shouldShowArrow = showArrow ?? external;
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
    variants[variant],
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      {shouldShowArrow ? (
        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      ) : null}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target={/^https?:\/\//.test(href) ? "_blank" : target}
        rel={/^https?:\/\//.test(href) ? "noopener noreferrer" : rel}
        className={classes}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {content}
    </Link>
  );
}

import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type SectionShellProps = ComponentPropsWithoutRef<"section"> & {
  id: string;
};

export function SectionShell({
  id,
  className,
  children,
  ...props
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn("relative py-24 sm:py-28 lg:py-32", className)}
      {...props}
    >
      {children}
    </section>
  );
}

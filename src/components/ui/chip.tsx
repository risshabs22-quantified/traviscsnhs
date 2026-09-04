import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Section label as a pill, the way Phantom marks each band of its home page.
 * Replaces the old eyebrow paragraph, which read as a generic template header.
 */
export function SectionChip({
  children,
  icon,
  className,
}: {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-paper py-2.5 pr-5 pl-4 text-[0.9375rem] font-semibold text-ink",
        className,
      )}
    >
      {icon && <span className="text-crimson">{icon}</span>}
      {children}
    </span>
  );
}

/** Same pill, for use on a dark or saturated tile. */
export function ChipOnDark({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-page px-4 py-2 text-[0.8125rem] font-semibold text-ink",
        className,
      )}
    >
      {children}
    </span>
  );
}

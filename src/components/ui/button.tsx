import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "quiet" | "onDark" | "onDarkGhost";
type Size = "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold " +
  "transition-[transform,background-color,color,border-color] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] " +
  "active:translate-y-px whitespace-nowrap";

/**
 * Every variant is two flat colours swapping on hover. No gradient, no
 * shadow, no sheen. Orange never sits under text: cream on #E8752A is 3.0:1,
 * so anything readable uses crimson or darker. See DESIGN.md.
 */
const variants: Record<Variant, string> = {
  primary: "bg-crimson text-paper hover:bg-rust",
  secondary: "bg-sand text-ink border border-clay hover:bg-clay",
  quiet:
    "text-crimson hover:text-rust underline decoration-clay decoration-2 underline-offset-[6px] hover:decoration-orange",
  // For the flat dark stage and the crimson band.
  onDark: "bg-page text-ink hover:bg-sand",
  onDarkGhost: "border border-cream-soft text-page hover:bg-ink-mid",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[0.9375rem]",
  lg: "h-14 px-8 text-base sm:text-lg",
};

type Props = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  href: string;
  external?: boolean;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  external,
  ...rest
}: Props) {
  const classes = cn(
    base,
    variants[variant],
    variant === "quiet" ? "h-auto px-0" : sizes[size],
    className,
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer noopener" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}

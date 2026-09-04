import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "quiet" | "onDark" | "onDarkGhost";
type Size = "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold " +
  "transition-[transform,box-shadow,background-color,color] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] " +
  "active:translate-y-px active:scale-[0.985] whitespace-nowrap";

const variants: Record<Variant, string> = {
  // Burnt red carries cream text at 7.7:1. The orange only shows up as a
  // hover bloom so it never has to hold small text.
  primary:
    "bg-crimson text-cream shadow-[var(--shadow-pill)] hover:bg-rust hover:shadow-[var(--shadow-lift)] hover:-translate-y-0.5",
  secondary:
    "bg-sand/90 text-ink border border-clay/70 shadow-[var(--shadow-soft)] hover:bg-sand hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]",
  quiet:
    "text-crimson hover:text-rust underline decoration-clay decoration-2 underline-offset-[6px] hover:decoration-orange",
  // For the red CTA band. Kept as variants rather than className overrides —
  // two competing `bg-*` utilities resolve by stylesheet order, not by the
  // order they appear in the class attribute, so an override can silently lose.
  onDark:
    "bg-cream text-crimson shadow-[var(--shadow-pill)] hover:bg-paper hover:text-rust hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]",
  onDarkGhost:
    "border border-cream/40 text-cream hover:border-cream/75 hover:bg-cream/10 hover:-translate-y-0.5",
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

  const inner = (
    <>
      {/* A slow sheen that sweeps once on hover. Purely decorative. */}
      {variant !== "quiet" && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
        >
          <span className="absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-20deg] bg-cream/25 opacity-0 transition-opacity duration-200 group-hover:animate-[sheen_0.9s_ease-out] group-hover:opacity-100" />
        </span>
      )}
      <span className="relative flex items-center gap-2">{children}</span>
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer noopener" className={classes}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {inner}
    </Link>
  );
}

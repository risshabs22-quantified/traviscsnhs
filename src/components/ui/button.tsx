import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "quiet" | "onDark" | "onDarkGhost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary: "bg-crimson text-paper hover:bg-rust",
  secondary: "bg-sand text-ink hover:bg-clay",
  quiet: "text-crimson hover:text-rust underline decoration-clay decoration-2 underline-offset-[5px]",
  onDark: "bg-page text-ink hover:bg-sand",
  onDarkGhost: "border border-cream-soft text-page hover:bg-ink-mid",
};

const sizes: Record<Size, string> = {
  md: "h-10 px-5 text-[0.9375rem]",
  lg: "h-12 px-6 text-base",
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

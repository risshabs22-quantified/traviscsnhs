import Link from "next/link";
import { cn } from "@/lib/cn";

/** Favicon boiled down to a screen, two tiger ears, one prompt chevron. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("h-8 w-8", className)}
      aria-hidden="true"
      focusable="false"
    >
      <rect width="32" height="32" rx="9" fill="var(--color-crimson)" />
      <path
        d="M8 9.5c0-1.4 1-2.4 2.2-2.4h11.6c1.2 0 2.2 1 2.2 2.4v10.9c0 1.4-1 2.4-2.2 2.4H10.2c-1.2 0-2.2-1-2.2-2.4z"
        fill="var(--color-cream)"
      />
      <path d="M6 24.4h20v1.8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z" fill="var(--color-cream)" />
      <path
        d="M12.6 12.4l2.6 2.4-2.6 2.4"
        fill="none"
        stroke="var(--color-crimson)"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="17" y="15.4" width="5.4" height="1.9" rx="0.95" fill="var(--color-orange)" />
      <path d="M9.4 7.6c-.6-2.1.2-3.5 1.6-3.9 1.4-.4 2.6.5 3 2.3z" fill="var(--color-ember)" />
      <path d="M22.6 7.6c.6-2.1-.2-3.5-1.6-3.9-1.4-.4-2.6.5-3 2.3z" fill="var(--color-ember)" />
    </svg>
  );
}

export function Logo({
  className,
  href = "/",
  compact = false,
}: {
  className?: string;
  href?: string;
  compact?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn("inline-flex items-center gap-2.5", className)}
      aria-label="Travis CSNHS home"
    >
      <LogoMark className="h-8 w-8" />
      <span
        className={cn(
          "font-extrabold tracking-[-0.04em] text-ink",
          compact ? "hidden text-lg sm:inline" : "text-[1.35rem] leading-none",
        )}
      >
        travis csnhs
      </span>
    </Link>
  );
}

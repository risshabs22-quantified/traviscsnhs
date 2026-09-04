import Link from "next/link";
import { cn } from "@/lib/cn";

/**
 * The mark is the favicon boiled down until it still reads at 22px:
 * a screen, two tiger ears, one prompt chevron.
 */
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
      {/* ears */}
      <path d="M9.4 7.6c-.6-2.1.2-3.5 1.6-3.9 1.4-.4 2.6.5 3 2.3z" fill="var(--color-ember)" />
      <path d="M22.6 7.6c.6-2.1-.2-3.5-1.6-3.9-1.4-.4-2.6.5-3 2.3z" fill="var(--color-ember)" />
    </svg>
  );
}

export function Logo({
  className,
  href = "/",
}: {
  className?: string;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-full transition-opacity hover:opacity-85",
        className,
      )}
      aria-label="Travis CSNHS — home"
    >
      <LogoMark className="h-8 w-8 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-rotate-3 group-hover:scale-105" />
      <span className="flex flex-col leading-none">
        <span className="text-[0.95rem] font-bold tracking-[-0.02em] text-ink">
          Travis CSNHS
        </span>
        <span className="mt-1 tag text-ink-soft">
          Travis High School
        </span>
      </span>
    </Link>
  );
}

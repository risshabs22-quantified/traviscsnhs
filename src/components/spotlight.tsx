import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

export function Spotlight({
  image,
  alt,
  kicker,
  title,
  body,
  href,
  cta = "Learn more",
  actionHref,
  actionLabel,
  actionExternal,
  external,
  flip = false,
  children,
}: {
  image: string;
  alt: string;
  kicker?: string;
  title: string;
  body: string;
  href: string;
  cta?: string;
  actionHref?: string;
  actionLabel?: string;
  actionExternal?: boolean;
  external?: boolean;
  flip?: boolean;
  children?: ReactNode;
}) {
  return (
    <article
      className={cn(
        "flex items-center gap-4 border-b border-clay py-8 sm:gap-8 sm:py-10",
        flip ? "flex-row-reverse" : "flex-row",
      )}
    >
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer noopener" : undefined}
        tabIndex={-1}
        aria-hidden
        className="relative h-[120px] w-[120px] shrink-0 sm:h-[180px] sm:w-[180px] lg:h-[220px] lg:w-[220px]"
      >
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 220px, (min-width: 640px) 180px, 120px"
          className="object-contain"
        />
      </Link>

      <div className="min-w-0 flex-1">
        {kicker && <p className="badge mb-3">{kicker}</p>}
        <h3 className="display text-[clamp(1.35rem,3.2vw,2.4rem)]">
          <Link
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer noopener" : undefined}
            className="hover:text-crimson"
          >
            {title}
          </Link>
        </h3>
        <p className="mt-2 max-w-xl text-[0.95rem] leading-relaxed text-ink-soft sm:mt-3 sm:text-base">
          {body}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3 sm:mt-5">
          <Button href={href} external={external} variant="quiet">
            {cta}
          </Button>
          {actionHref && actionLabel && (
            <Button href={actionHref} external={actionExternal} size="md">
              {actionLabel}
            </Button>
          )}
        </div>
        {children}
      </div>
    </article>
  );
}

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/cn";

/**
 * One oversized row: hanging catalog image, huge name, one paragraph, two
 * actions. Image side alternates. Hover swaps the card to ink.
 */
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
    <Reveal>
      <article
        className={cn(
          "group relative flex items-center overflow-visible py-6 sm:py-10 lg:py-14",
          flip ? "flex-row-reverse" : "flex-row",
        )}
      >
        <div
          className={cn(
            "flex min-h-[168px] w-full items-center gap-2 rounded-[22px] bg-sand p-4 transition-colors duration-300 sm:min-h-[240px] sm:gap-6 sm:rounded-[36px] sm:p-8 lg:min-h-[300px] lg:p-12",
            "group-hover:bg-ink group-hover:text-page",
            flip ? "flex-row-reverse" : "flex-row",
          )}
        >
          <Link
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer noopener" : undefined}
            tabIndex={-1}
            aria-hidden
            className={cn(
              "relative shrink-0",
              "h-[132px] w-[132px] sm:h-[220px] sm:w-[220px] lg:h-[300px] lg:w-[300px]",
              flip ? "lg:-mr-8 lg:translate-x-6" : "lg:-ml-8 lg:-translate-x-6",
            )}
          >
            <Image
              src={image}
              alt={alt}
              fill
              sizes="(min-width: 1024px) 300px, (min-width: 640px) 220px, 132px"
              className="object-contain transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
            />
          </Link>

          <div className="min-w-0 flex-1 py-1">
            {kicker && (
              <p className="badge mb-3 group-hover:bg-orange">{kicker}</p>
            )}
            <h3 className="display text-[clamp(1.45rem,3.8vw,3.1rem)]">
              <Link
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer noopener" : undefined}
                className="transition-colors duration-300 group-hover:text-page"
              >
                {title}
              </Link>
            </h3>
            <p className="mt-2 max-w-xl text-[0.9rem] leading-relaxed text-ink-soft sm:mt-4 sm:text-lg group-hover:text-cream-soft">
              {body}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2 sm:mt-6 sm:gap-3">
              <Button
                href={href}
                external={external}
                variant="quiet"
                className="group-hover:text-page group-hover:decoration-orange"
              >
                {cta}
              </Button>
              {actionHref && actionLabel && (
                <Button
                  href={actionHref}
                  external={actionExternal}
                  size="md"
                  className="hidden sm:inline-flex"
                >
                  {actionLabel}
                </Button>
              )}
            </div>
            {children}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

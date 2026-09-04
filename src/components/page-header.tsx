import type { ReactNode } from "react";
import { Reveal, RevealText } from "@/components/ui/reveal";

/**
 * Inner-page version of the hero stage. Same rounded card, one flat sand
 * fill instead of the home page's dark one, so the two read as a set
 * without competing.
 */
export function PageHeader({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <section className="px-3 pt-24 sm:px-6 sm:pt-28">
      <div className="overflow-hidden rounded-[24px] bg-sand px-6 py-20 sm:rounded-[32px] sm:px-12 sm:py-24 lg:px-16">
        <div className="max-w-4xl">
          <Reveal>
            <p className="eyebrow">{eyebrow}</p>
          </Reveal>
          <h1 className="display mt-5 text-[clamp(2.5rem,8vw,5.5rem)]">
            <RevealText text={title} delay={0.06} />
          </h1>
          {lead && (
            <Reveal index={2}>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft text-pretty sm:text-xl">
                {lead}
              </p>
            </Reveal>
          )}
          {children && (
            <Reveal index={3}>
              <div className="mt-10">{children}</div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}

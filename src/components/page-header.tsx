import type { ReactNode } from "react";
import { Reveal, RevealText } from "@/components/ui/reveal";

/**
 * Inner-page version of the hero stage: same rounded card and warm wash,
 * shorter, and without the floating shapes so the type stays the subject.
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
    <section className="px-3 pt-24 sm:px-6 sm:pt-32 lg:pt-36">
      <div className="relative isolate overflow-hidden rounded-[28px] border border-clay/60 px-6 py-20 shadow-[var(--shadow-soft)] sm:rounded-[38px] sm:px-12 sm:py-24 lg:px-16 lg:py-28">
        <div
          aria-hidden
          className="absolute inset-0 -z-20 bg-[linear-gradient(150deg,#FFFCF6_0%,#FAEFDF_46%,#F3D9BC_100%)]"
        />
        <div
          aria-hidden
          className="animate-hue-drift absolute -top-1/2 -right-1/5 -z-10 h-[130%] w-[60%] rounded-full bg-[radial-gradient(circle,rgba(242,160,61,0.5),transparent_68%)] blur-[8px]"
        />

        <div className="max-w-4xl">
          <Reveal>
            <p className="eyebrow">{eyebrow}</p>
          </Reveal>
          <h1 className="display mt-6 text-[clamp(2.6rem,9vw,6rem)]">
            <RevealText text={title} delay={0.06} />
          </h1>
          {lead && (
            <Reveal index={2}>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft text-pretty sm:text-xl">
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

import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Reveal, RevealText } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { ArrowIcon } from "@/components/ui/icons";
import { competitions } from "@/lib/content";

export function Competitions() {
  return (
    <Section id="competitions" className="pt-0 sm:pt-0 lg:pt-0">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow">What members do</p>
          </Reveal>
          <h2 className="display mt-6 text-[clamp(2.2rem,6vw,4.2rem)]">
            <RevealText
              text="Four competitions this year: solo, team, and in house."
              delay={0.05}
            />
          </h2>
        </div>
        <Reveal index={2}>
          <Button href="/events" variant="quiet" className="pb-2">
            All four in detail
          </Button>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {competitions.map((comp, i) => (
          <Reveal key={comp.slug} index={i}>
            <Link
              href={`/events#${comp.slug}`}
             
              className="group card relative flex h-full flex-col overflow-hidden rounded-[26px] p-7 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-orange hover:"
            >
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-orange transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
              />
              <div className="flex items-center justify-between">
                <span className="tag text-crimson">
                  {comp.index}
                </span>
                <span className="rounded-full bg-sand px-3 py-1 tag text-ink-soft">
                  {comp.format}
                </span>
              </div>
              <h3 className="mt-8 text-[1.4rem] leading-tight font-bold tracking-[-0.025em] text-balance">
                {comp.name}
              </h3>
              <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-ink-soft text-pretty">
                {comp.short}
              </p>
              <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-crimson">
                Details
                <ArrowIcon className="h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

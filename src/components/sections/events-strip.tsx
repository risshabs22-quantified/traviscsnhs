import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { SectionChip } from "@/components/ui/chip";
import { ArrowIcon, CalendarIcon } from "@/components/ui/icons";
import { schedule } from "@/lib/content";

/**
 * The year in two large panels instead of a bordered box split into four
 * narrow columns. Same facts, read as two things rather than eight.
 */
export function EventsStrip() {
  return (
    <Section id="upcoming" className="pt-0 sm:pt-0 lg:pt-0">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <Reveal>
          <SectionChip icon={<CalendarIcon className="h-[18px] w-[18px]" />}>
            The year
          </SectionChip>
        </Reveal>
        <Reveal index={1}>
          <Link
            href="/events"
            className="group inline-flex items-center gap-2 text-base font-semibold text-crimson transition-colors hover:text-rust"
          >
            Full calendar
            <ArrowIcon className="h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-4 lg:grid-cols-2">
        {schedule.map((term, t) => (
          <Reveal key={term.term} index={t}>
            <div
              className={`h-full rounded-[22px] px-7 py-10 sm:px-10 sm:py-12 ${
                t === 0 ? "bg-sand text-ink" : "bg-paper text-ink"
              }`}
            >
              <h3 className="text-[1.75rem] font-bold tracking-[-0.03em]">{term.term}</h3>
              <ul className="mt-10 space-y-8">
                {term.items.map((item) => (
                  <li key={item.name}>
                    <p className="text-[1.15rem] font-semibold">{item.name}</p>
                    <p className="mt-1.5 text-[0.9375rem] text-ink-soft">{item.when}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
      {/* TODO: confirm with officers — swap these windows for real dates once set. */}
    </Section>
  );
}

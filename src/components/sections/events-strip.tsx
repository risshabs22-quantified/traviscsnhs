import Link from "next/link";
import { Container } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ArrowIcon, CalendarIcon } from "@/components/ui/icons";
import { schedule } from "@/lib/content";

/** Flattened highlight reel of the year, four items wide. */
const highlights = schedule.flatMap((term) =>
  term.items.slice(0, 2).map((item) => ({ ...item, term: term.term })),
);

export function EventsStrip() {
  return (
    <section id="upcoming" className="py-16 sm:py-20">
      <Container>
        <div className="overflow-hidden rounded-[28px] border border-clay/60 bg-paper/70 shadow-[var(--shadow-soft)] backdrop-blur-sm sm:rounded-[32px]">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-clay/60 px-7 py-6">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sand text-crimson">
                <CalendarIcon className="h-[18px] w-[18px]" />
              </span>
              <h2 className="font-mono text-[0.6875rem] tracking-[0.2em] text-ink-soft uppercase">
                The year at a glance
              </h2>
            </div>
            <Link
              href="/events"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-crimson transition-colors hover:text-rust"
            >
              Full calendar
              <ArrowIcon className="h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1" />
            </Link>
          </div>

          <ul className="grid divide-y divide-clay/60 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
            {highlights.map((item, i) => (
              <Reveal key={item.name + item.term} index={i} as="li">
                <div className="group h-full px-7 py-8 transition-colors duration-300 hover:bg-sand/45 sm:border-r sm:border-clay/60 lg:last:border-r-0">
                  <span className="rounded-full bg-sand/80 px-2.5 py-1 font-mono text-[0.5625rem] tracking-[0.18em] text-crimson uppercase">
                    {item.term}
                  </span>
                  <h3 className="mt-5 text-lg leading-snug font-extrabold tracking-[-0.02em] text-balance">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft text-pretty">
                    {item.when}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
        {/* TODO: confirm with officers — swap these windows for real dates once set. */}
      </Container>
    </section>
  );
}

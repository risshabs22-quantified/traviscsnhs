import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { SectionChip } from "@/components/ui/chip";
import { Tile, type Tone } from "@/components/ui/tile";
import { JoinBand } from "@/components/sections/join-band";
import { CalendarIcon } from "@/components/ui/icons";
import { competitions, schedule } from "@/lib/content";

export const metadata: Metadata = {
  title: "Events",
  description:
    "USACO, UIL Computer Science, the Congressional App Challenge, and our own Club Code Jam. What each one is and when it runs.",
  alternates: { canonical: "/events" },
};

/** Tones cycled across each competition's detail panels. */
const ROW_TONES: Tone[] = ["ink", "crimson", "orange", "sand"];

export default function EventsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Events"
        title="Four competitions. Solo, team, and in house."
        lead="Every member enters at least one. Any of the four counts, including our own Code Jam."
      />

      {/* The year, by term. Windows rather than invented dates. */}
      <Section>
        <Reveal>
          <SectionChip icon={<CalendarIcon className="h-[18px] w-[18px]" />}>
            The year
          </SectionChip>
        </Reveal>
        <Reveal index={1}>
          <h2 className="display mt-8 max-w-3xl text-[clamp(2.1rem,5.6vw,3.6rem)]">
            What happens, and roughly when.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {schedule.map((term, t) => (
            <Reveal key={term.term} index={t}>
              <div
                className={`h-full rounded-[22px] px-7 py-10 sm:px-10 sm:py-12 ${
                  t === 0 ? "bg-sand" : "bg-paper"
                }`}
              >
                <h3 className="text-[1.75rem] font-bold tracking-[-0.03em]">{term.term}</h3>
                <ul className="mt-10 space-y-8">
                  {term.items.map((item) => (
                    <li key={item.name}>
                      <p className="text-[1.15rem] font-semibold">{item.name}</p>
                      <p className="mt-1.5 text-[0.9375rem] text-ink-soft">
                        {item.when}. {item.note}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-10 text-base text-ink-soft">
            Exact meeting days and contest dates go out on Instagram and Remind first.
          </p>
        </Reveal>
        {/* TODO: confirm with officers — replace the windows above with dated entries. */}
      </Section>

      {/* One block per competition: a big statement, then its details as
          flat panels rather than a hairline label/value table. */}
      {competitions.map((comp) => (
        <Section key={comp.slug} id={comp.slug} className="scroll-mt-32 pt-0 sm:pt-0 lg:pt-0">
          <div className="max-w-4xl">
            <Reveal>
              <SectionChip>{comp.format}</SectionChip>
            </Reveal>
            <Reveal index={1}>
              <h2 className="display mt-8 text-[clamp(2.2rem,6vw,4rem)]">{comp.name}</h2>
            </Reveal>
            {comp.body.map((para, p) => (
              <Reveal key={para} index={p + 2}>
                <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft text-pretty sm:text-xl">
                  {para}
                </p>
              </Reveal>
            ))}
            {comp.href && (
              <Reveal index={5}>
                <div className="mt-10">
                  <Button href={comp.href} external variant="secondary">
                    Official site
                  </Button>
                </div>
              </Reveal>
            )}
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {comp.rows.map((row, r) => (
              <Reveal key={row.label} index={r}>
                <Tile tone={ROW_TONES[r % ROW_TONES.length]} title={row.label} tall={false}>
                  <p className="text-base leading-relaxed opacity-85">{row.value}</p>
                </Tile>
              </Reveal>
            ))}
          </div>
        </Section>
      ))}

      <JoinBand />
    </>
  );
}

import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { JoinBand } from "@/components/sections/join-band";
import { ExternalIcon } from "@/components/ui/icons";
import { competitions, schedule } from "@/lib/content";

export const metadata: Metadata = {
  title: "Events",
  description:
    "USACO, UIL Computer Science, the Congressional App Challenge, and our own Club Code Jam. What each one is and when it runs.",
  alternates: { canonical: "/events" },
};

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
          <p className="eyebrow">The year</p>
        </Reveal>
        <Reveal index={1}>
          <h2 className="display mt-6 max-w-3xl text-[clamp(2.1rem,5.6vw,3.6rem)]">
            What happens, and roughly when.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {schedule.map((term, t) => (
            <Reveal key={term.term} index={t}>
              <div className="card h-full overflow-hidden rounded-[26px]">
                <div className="flex items-center justify-between border-b border-clay px-8 py-6">
                  <h3 className="text-xl font-bold tracking-[-0.02em]">{term.term}</h3>
                  <span className="tag text-ink-soft">
                    {String(t + 1).padStart(2, "0")} / 02
                  </span>
                </div>
                <ul className="divide-y divide-clay">
                  {term.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex flex-col gap-1 px-8 py-6 transition-colors duration-300 hover:bg-sand sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                    >
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="mt-1 text-sm text-ink-soft">{item.note}</p>
                      </div>
                      <span className="shrink-0 tag text-crimson sm:text-right">
                        {item.when}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-8 text-sm text-ink-soft">
            Exact meeting days and contest dates go out on Instagram and Remind first.
          </p>
        </Reveal>
        {/* TODO: confirm with officers — replace the windows above with dated entries. */}
      </Section>

      {/* One anchored block per competition. */}
      {competitions.map((comp, i) => (
        <Section
          key={comp.slug}
          id={comp.slug}
          className="scroll-mt-32 pt-0 sm:pt-0 lg:pt-0"
        >
          <div className="border-t border-clay pt-16 sm:pt-20">
            <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
              <div>
                <Reveal>
                  <div className="flex items-center gap-4">
                    <span className="tag text-crimson">
                      {comp.index}
                    </span>
                    <span className="rounded-full bg-sand px-3 py-1 tag text-ink-soft">
                      {comp.format}
                    </span>
                  </div>
                </Reveal>
                <Reveal index={1}>
                  <h2 className="display mt-6 text-[clamp(2rem,5.4vw,3.4rem)]">
                    {comp.name}
                  </h2>
                </Reveal>
                {comp.body.map((para, p) => (
                  <Reveal key={para} index={p + 2}>
                    <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft text-pretty">
                      {para}
                    </p>
                  </Reveal>
                ))}
                {comp.href && (
                  <Reveal index={5}>
                    <div className="mt-9">
                      <Button href={comp.href} external variant="secondary">
                        Official site
                        <ExternalIcon className="h-4 w-4 opacity-70" />
                      </Button>
                    </div>
                  </Reveal>
                )}
              </div>

              <div className={i % 2 === 1 ? "lg:order-first" : undefined}>
                <ul className="divide-y divide-clay border-y border-clay">
                  {comp.rows.map((row, r) => (
                    <Reveal key={row.label} index={r} as="li">
                      <div className="flex flex-col gap-1.5 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                        <span className="text-lg font-bold tracking-[-0.02em] sm:text-xl">
                          {row.label}
                        </span>
                        <span className="text-[0.9375rem] text-ink-soft sm:max-w-[62%] sm:text-right">
                          {row.value}
                        </span>
                      </div>
                    </Reveal>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Section>
      ))}

      <JoinBand />
    </>
  );
}

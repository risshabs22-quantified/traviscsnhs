import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { WhatWeAre } from "@/components/sections/what-we-are";
import { WhyJoin } from "@/components/sections/why-join";
import { JoinBand } from "@/components/sections/join-band";
import { competitions, requirements, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "What the Computer Science National Honor Society is, what our Travis High School chapter does through the year, and who it is for.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A chapter that meets to code, compete, and tutor."
        lead={`${site.longName} is the national honor society for computer science students. Our ${site.chapter} chapter is student-run and open to any grade level.`}
      >
        <div className="flex flex-wrap gap-4">
          <Button href="/membership">How to join</Button>
          <Button href="/officers" variant="secondary">
            Meet the officers
          </Button>
        </div>
      </PageHeader>

      <WhatWeAre />

      {/* What a year actually looks like — the deck's own agenda, as sections. */}
      <Section className="pt-0 sm:pt-0 lg:pt-0">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow">A year in the chapter</p>
            </Reveal>
            <Reveal index={1}>
              <h2 className="display mt-6 text-[clamp(2.1rem,5.6vw,3.6rem)]">
                Meetings, practice, then contests.
              </h2>
            </Reveal>
            <Reveal index={2}>
              <p className="mt-7 text-lg leading-relaxed text-ink-soft text-pretty">
                Meetings run in the lab. Officers put on practice sessions in the weeks
                before each USACO window, write the Code Jam problems, and organise UIL
                teams. Members tutor classmates in CS classes between all of it.
              </p>
            </Reveal>
            <Reveal index={3}>
              <div className="mt-10">
                <Button href="/events" variant="secondary">
                  See the full calendar
                </Button>
              </div>
            </Reveal>
          </div>

          <div>
            <ul className="divide-y divide-clay/60 border-y border-clay/60">
              {competitions.map((comp, i) => (
                <Reveal key={comp.slug} index={i} as="li">
                  <div className="flex items-baseline justify-between gap-6 py-7">
                    <div>
                      <p className="text-lg font-extrabold tracking-[-0.02em] sm:text-xl">
                        {comp.name}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                        {comp.timing}
                      </p>
                    </div>
                    <span className="shrink-0 rounded-full bg-sand/80 px-3 py-1 font-mono text-[0.625rem] tracking-[0.14em] text-ink-soft uppercase">
                      {comp.format}
                    </span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <WhyJoin />

      {/* Requirements, stated plainly so nobody has to guess. */}
      <Section className="pt-0 sm:pt-0 lg:pt-0">
        <Reveal>
          <p className="eyebrow">Who it is for</p>
        </Reveal>
        <Reveal index={1}>
          <h2 className="display mt-6 max-w-3xl text-[clamp(2.1rem,5.6vw,3.6rem)]">
            Beginners and experienced coders, in the same room.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {requirements.map((req, i) => (
            <Reveal key={req.label} index={i}>
              <div className="card-surface h-full rounded-[26px] p-8">
                <p className="font-mono text-[0.625rem] tracking-[0.2em] text-crimson uppercase">
                  {req.label}
                </p>
                <p className="display mt-6 text-6xl">{req.value}</p>
                <p className="mt-6 leading-relaxed text-ink-soft text-pretty">{req.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <JoinBand />
    </>
  );
}

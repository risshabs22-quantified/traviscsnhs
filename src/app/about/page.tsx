import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { SectionChip } from "@/components/ui/chip";
import { Tile, TileFigure, type Tone } from "@/components/ui/tile";
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

const REQ_TONES: Tone[] = ["ink", "orange", "sand"];

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

      {/* What a year actually looks like — the deck's own agenda. */}
      <Section className="pt-0 sm:pt-0 lg:pt-0">
        <Reveal>
          <SectionChip>A year in the chapter</SectionChip>
        </Reveal>
        <Reveal index={1}>
          <h2 className="display mt-8 max-w-3xl text-[clamp(2.1rem,5.6vw,3.6rem)]">
            Meetings, practice, then contests.
          </h2>
        </Reveal>
        <Reveal index={2}>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft text-pretty">
            Meetings run in the lab. Officers put on practice sessions in the weeks before
            each USACO window, write the Code Jam problems, and organise UIL teams. Members
            tutor classmates in CS classes between all of it.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-x-16 gap-y-12 sm:grid-cols-2">
          {competitions.map((comp, i) => (
            <Reveal key={comp.slug} index={i}>
              <p className="text-[1.5rem] font-bold tracking-[-0.025em] sm:text-[1.75rem]">
                {comp.name}
              </p>
              <p className="mt-3 text-lg text-ink-soft">{comp.timing}</p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-14">
            <Button href="/events" size="lg" variant="secondary">
              See the full calendar
            </Button>
          </div>
        </Reveal>
      </Section>

      <WhyJoin />

      {/* Requirements, stated plainly so nobody has to guess. */}
      <Section className="pt-0 sm:pt-0 lg:pt-0">
        <Reveal>
          <SectionChip>Who it is for</SectionChip>
        </Reveal>
        <Reveal index={1}>
          <h2 className="display mt-8 max-w-3xl text-[clamp(2.1rem,5.6vw,3.6rem)]">
            Beginners and experienced coders, in the same room.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {requirements.map((req, i) => (
            <Reveal key={req.label} index={i}>
              <Tile tone={REQ_TONES[i]} title={req.body}>
                <TileFigure value={req.value} caption={req.label} />
              </Tile>
            </Reveal>
          ))}
        </div>
      </Section>

      <JoinBand />
    </>
  );
}

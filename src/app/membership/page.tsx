import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { SectionChip } from "@/components/ui/chip";
import { Tile, TileFigure, type Tone } from "@/components/ui/tile";
import { DuesSplit } from "@/components/sections/dues-split";
import { JoinBand } from "@/components/sections/join-band";
import { CardIcon } from "@/components/ui/icons";
import { dues, links, requirements } from "@/lib/content";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "How to join Travis CSNHS: no prerequisites, three meetings a semester, one competition, and $20 dues paid through the Fort Bend ISD RevTrak store.",
  alternates: { canonical: "/membership" },
};

const REQ_TONES: Tone[] = ["ink", "orange", "sand"];

export default function MembershipPage() {
  return (
    <>
      <PageHeader
        eyebrow="Membership"
        title="No prerequisites. Any grade. Any background."
        lead="Three things keep you in good standing: show up, enter one competition, and pay your dues. That is the whole list."
      >
        <Button href={links.dues} external size="lg">
          <CardIcon className="h-[18px] w-[18px]" />
          Pay dues on RevTrak
        </Button>
      </PageHeader>

      {/* Requirements — slide 11, as three big panels. */}
      <Section>
        <Reveal>
          <SectionChip>Requirements</SectionChip>
        </Reveal>
        <Reveal index={1}>
          <h2 className="display mt-8 max-w-3xl text-[clamp(2.1rem,5.6vw,3.6rem)]">
            What we ask of members.
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

      <DuesSplit />

      {/* Paying, step by step. Numbered statements, not stacked boxes. */}
      <Section className="pt-0 sm:pt-0 lg:pt-0">
        <Reveal>
          <SectionChip>How to pay</SectionChip>
        </Reveal>
        <Reveal index={1}>
          <h2 className="display mt-8 max-w-3xl text-[clamp(2.1rem,5.6vw,3.6rem)]">
            Dues go through RevTrak.
          </h2>
        </Reveal>
        <Reveal index={2}>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft text-pretty">
            RevTrak is the Fort Bend ISD online payment store. Travis CSNHS has its own
            page there. Officers do not take cash.
          </p>
        </Reveal>

        <ol className="mt-16 grid gap-x-16 gap-y-12 sm:grid-cols-2">
          {dues.howTo.map((step, i) => (
            <Reveal key={step} index={i} as="li">
              <p className="tag text-crimson">{String(i + 1).padStart(2, "0")}</p>
              <p className="mt-4 text-[1.35rem] leading-[1.35] text-pretty sm:text-[1.5rem]">
                {step}
              </p>
            </Reveal>
          ))}
        </ol>

        <Reveal>
          <div className="mt-14 flex flex-wrap gap-4">
            <Button href={links.dues} external size="lg">
              Open the CSNHS page
            </Button>
            <Button href={links.revtrakSchool} external size="lg" variant="secondary">
              Travis HS store
            </Button>
          </div>
        </Reveal>
      </Section>

      <JoinBand />
    </>
  );
}

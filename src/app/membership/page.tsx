import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { DuesSplit } from "@/components/sections/dues-split";
import { JoinBand } from "@/components/sections/join-band";
import { CardIcon, ExternalIcon } from "@/components/ui/icons";
import { dues, links, requirements } from "@/lib/content";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "How to join Travis CSNHS: no prerequisites, three meetings a semester, one competition, and $20 dues paid through the Fort Bend ISD RevTrak store.",
  alternates: { canonical: "/membership" },
};

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
          <ExternalIcon className="h-4 w-4 opacity-70" />
        </Button>
      </PageHeader>

      {/* Requirements — slide 11, verbatim. */}
      <Section>
        <Reveal>
          <p className="eyebrow">Member requirements</p>
        </Reveal>
        <Reveal index={1}>
          <h2 className="display mt-6 max-w-3xl text-[clamp(2.1rem,5.6vw,3.6rem)]">
            What we ask of members.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {requirements.map((req, i) => (
            <Reveal key={req.label} index={i}>
              <div className="group card-surface relative h-full overflow-hidden rounded-[26px] p-8 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]">
                <span
                  aria-hidden
                  className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(242,160,61,0.38),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <p className="relative font-mono text-[0.625rem] tracking-[0.2em] text-crimson uppercase">
                  {req.label}
                </p>
                <p className="display relative mt-8 text-7xl">{req.value}</p>
                <p className="relative mt-8 leading-relaxed text-ink-soft text-pretty">
                  {req.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <DuesSplit />

      {/* Paying, step by step. */}
      <Section className="pt-0 sm:pt-0 lg:pt-0">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow">How to pay</p>
            </Reveal>
            <Reveal index={1}>
              <h2 className="display mt-6 text-[clamp(2.1rem,5.6vw,3.6rem)]">
                Dues go through RevTrak.
              </h2>
            </Reveal>
            <Reveal index={2}>
              <p className="mt-7 text-lg leading-relaxed text-ink-soft text-pretty">
                RevTrak is the Fort Bend ISD online payment store. Travis CSNHS has its
                own page there. Officers do not take cash.
              </p>
            </Reveal>
            <Reveal index={3}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href={links.dues} external>
                  Open the CSNHS page
                  <ExternalIcon className="h-4 w-4 opacity-70" />
                </Button>
                <Button href={links.revtrakSchool} external variant="secondary">
                  Travis HS store
                </Button>
              </div>
            </Reveal>
          </div>

          <ol className="space-y-4">
            {dues.howTo.map((step, i) => (
              <Reveal key={step} index={i} as="li">
                <div className="card-surface flex gap-5 rounded-[22px] p-6">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-crimson font-mono text-xs font-bold text-cream">
                    {i + 1}
                  </span>
                  <p className="pt-1.5 leading-relaxed text-pretty">{step}</p>
                </div>
              </Reveal>
            ))}
            <Reveal index={4} as="li">
              <p className="px-6 pt-4 text-sm leading-relaxed text-ink-soft">
                {dues.note}
              </p>
            </Reveal>
          </ol>
        </div>
      </Section>

      <JoinBand />
    </>
  );
}

import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SectionIntro } from "@/components/section-intro";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { competitions, requirements, site, whatWeAre, whyJoin } from "@/lib/content";

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
        kicker="About"
        title="A chapter that meets to code, compete, and tutor."
        lead={`${site.longName} is the national honor society for computer science students. Our ${site.chapter} chapter is student-run and open to any grade level.`}
        image="/media/hero-join.jpg"
        imageAlt="Students working at computers in a school lab"
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/membership" size="lg">
            How to join
          </Button>
          <Button href="/officers" size="lg" variant="secondary">
            Meet the officers
          </Button>
        </div>
      </PageHeader>

      <Section>
        <SectionIntro kicker={whatWeAre.kicker} title={whatWeAre.title} body={whatWeAre.body} />
        <div className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {whatWeAre.pillars.map((pillar, i) => (
            <Reveal key={pillar.key} index={i}>
              <p className="display text-[2rem] sm:text-[2.4rem]">{pillar.label}</p>
              <p className="mt-3 text-base leading-relaxed text-ink-soft sm:text-lg">
                {pillar.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pt-0 sm:pt-0 lg:pt-0">
        <SectionIntro
          kicker="A year in the chapter"
          title="Meetings, practice, then contests."
          body="Meetings run in the lab. Officers put on practice sessions in the weeks before each USACO window, write the Code Jam problems, and organise UIL teams. Members tutor classmates in CS classes between all of it."
        />
        <ul className="mt-12 grid gap-8 sm:grid-cols-2">
          {competitions.map((comp, i) => (
            <Reveal key={comp.slug} index={i} as="li">
              <p className="text-[1.4rem] font-extrabold tracking-[-0.03em] sm:text-[1.7rem]">
                {comp.name}
              </p>
              <p className="mt-2 text-base text-ink-soft sm:text-lg">{comp.timing}</p>
            </Reveal>
          ))}
        </ul>
        <Reveal>
          <div className="mt-10">
            <Button href="/events" size="lg" variant="secondary">
              See the contests
            </Button>
          </div>
        </Reveal>
      </Section>

      <Section className="pt-0 sm:pt-0 lg:pt-0">
        <SectionIntro kicker={whyJoin.kicker} title={whyJoin.title} />
        <ol className="mt-12 grid gap-8 sm:grid-cols-2">
          {whyJoin.reasons.map((reason, i) => (
            <Reveal key={reason} index={i} as="li">
              <p className="text-sm font-semibold text-crimson">{String(i + 1).padStart(2, "0")}</p>
              <p className="mt-3 text-[1.15rem] leading-snug text-pretty sm:text-[1.3rem]">
                {reason}
              </p>
            </Reveal>
          ))}
        </ol>
        <Reveal>
          <div className="mt-14 max-w-2xl rounded-[28px] bg-ink px-7 py-10 sm:px-10 sm:py-12">
            <p className="badge-dark badge">{whyJoin.callout.kicker}</p>
            <p className="display mt-4 text-[clamp(1.6rem,3.4vw,2.4rem)] text-page">
              {whyJoin.callout.title}
            </p>
            <p className="mt-4 text-base leading-relaxed text-cream-soft sm:text-lg">
              {whyJoin.callout.body}
            </p>
          </div>
        </Reveal>
      </Section>

      <Section className="pt-0 sm:pt-0 lg:pt-0">
        <SectionIntro
          kicker="Who it is for"
          title="Beginners and experienced coders, in the same room."
        />
        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          {requirements.map((req, i) => (
            <Reveal key={req.label} index={i}>
              <p className="display text-[clamp(2.6rem,6vw,4rem)] text-crimson">{req.value}</p>
              <p className="mt-2 text-lg font-semibold">{req.label}</p>
              <p className="mt-2 text-base leading-relaxed text-ink-soft">{req.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}

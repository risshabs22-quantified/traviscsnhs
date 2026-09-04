import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SectionIntro } from "@/components/section-intro";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/json-ld";
import { competitions, requirements, site, whatWeAre, whyJoin } from "@/lib/content";
import { breadcrumbJsonLd, pageMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/about");

export default function AboutPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd("/about")} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
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
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {whatWeAre.pillars.map((pillar) => (
            <div key={pillar.key}>
              <p className="text-xl font-semibold">{pillar.label}</p>
              <p className="mt-2 text-base leading-relaxed text-ink-soft">{pillar.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pt-0 sm:pt-0 lg:pt-0">
        <SectionIntro
          kicker="A year in the chapter"
          title="Meetings, practice, then contests."
          body="Meetings run in the lab. Officers put on practice sessions in the weeks before each USACO window, write the Code Jam problems, and organise UIL teams. Members tutor classmates in CS classes between all of it."
        />
        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {competitions.map((comp) => (
            <li key={comp.slug}>
              <p className="text-lg font-semibold">{comp.name}</p>
              <p className="mt-1 text-base text-ink-soft">{comp.timing}</p>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Button href="/events" size="lg" variant="secondary">
            See the contests
          </Button>
        </div>
      </Section>

      <Section className="pt-0 sm:pt-0 lg:pt-0">
        <SectionIntro kicker={whyJoin.kicker} title={whyJoin.title} />
        <ol className="mt-10 grid gap-6 sm:grid-cols-2">
          {whyJoin.reasons.map((reason, i) => (
            <li key={reason}>
              <p className="text-sm font-semibold text-crimson">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mt-2 text-base leading-snug sm:text-lg">{reason}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 max-w-2xl rounded-xl bg-ink px-6 py-8 sm:px-8 sm:py-10">
          <p className="badge-dark badge">{whyJoin.callout.kicker}</p>
          <p className="display mt-3 text-[clamp(1.4rem,2.8vw,2rem)] text-page">
            {whyJoin.callout.title}
          </p>
          <p className="mt-3 text-base leading-relaxed text-cream-soft">{whyJoin.callout.body}</p>
        </div>
      </Section>

      <Section className="pt-0 sm:pt-0 lg:pt-0">
        <SectionIntro
          kicker="Who it is for"
          title="Beginners and experienced coders, in the same room."
        />
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {requirements.map((req) => (
            <div key={req.label}>
              <p className="display text-[2.4rem] text-crimson">{req.value}</p>
              <p className="mt-1 text-base font-semibold">{req.label}</p>
              <p className="mt-1 text-base leading-relaxed text-ink-soft">{req.body}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SectionIntro } from "@/components/section-intro";
import { Spotlight } from "@/components/spotlight";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/json-ld";
import { dues, links, requirements } from "@/lib/content";
import { breadcrumbJsonLd, pageMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/membership");

export default function MembershipPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd("/membership")} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Membership", path: "/membership" },
        ])}
      />
      <PageHeader
        kicker="Membership"
        title="No prerequisites. Any grade. Any background."
        lead="Three things keep you in good standing: show up, enter one competition, and pay your dues. That is the whole list."
      >
        <Button href={links.dues} external size="lg">
          Pay dues on RevTrak
        </Button>
      </PageHeader>

      <Section>
        <SectionIntro kicker="Requirements" title="What we ask of members." />
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

      <Section className="pt-0 sm:pt-0 lg:pt-0">
        <SectionIntro kicker="Dues" title={`${dues.amount} covers the year.`} />
        <div className="mt-8">
          <Spotlight
            image={dues.image}
            alt={dues.imageAlt}
            kicker={dues.cadence}
            title={dues.amount}
            body="National membership fee, club t-shirt, and competition entry fees. Officers do not take cash."
            href={links.dues}
            cta="Pay on RevTrak"
            external
          />
        </div>
        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          {dues.includes.map((row) => (
            <li key={row.label}>
              <p className="font-semibold">{row.label}</p>
              <p className="mt-1 text-ink-soft">{row.value}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-ink-soft">{dues.note}</p>
      </Section>

      <Section className="pt-0 sm:pt-0 lg:pt-0">
        <SectionIntro
          kicker="How to pay"
          title="Dues go through RevTrak."
          body="RevTrak is the Fort Bend ISD online payment store. Travis CSNHS has its own page there."
        />
        <ol className="mt-10 grid gap-x-16 gap-y-8 sm:grid-cols-2">
          {dues.howTo.map((step, i) => (
            <li key={step}>
              <p className="text-sm font-semibold text-crimson">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mt-2 text-base leading-snug sm:text-lg">{step}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href={links.dues} external size="lg">
            Open the CSNHS page
          </Button>
          <Button href={links.revtrakSchool} external size="lg" variant="secondary">
            Travis HS store
          </Button>
        </div>
      </Section>
    </>
  );
}

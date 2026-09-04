import { PromoCarousel } from "@/components/promo-carousel";
import { SectionIntro } from "@/components/section-intro";
import { Spotlight } from "@/components/spotlight";
import { ContestList } from "@/components/contest-list";
import { OfficerCard } from "@/components/officer-card";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { dues, links, officers, site } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <PromoCarousel />

      <Section>
        <SectionIntro
          kicker={site.year}
          title="This year's contests"
          body="Four competitions this year: solo, team, and in house. Every member enters at least one."
        />
        <div className="mt-6 sm:mt-8">
          <ContestList />
        </div>
      </Section>

      <Section className="pt-0 sm:pt-0 lg:pt-0">
        <SectionIntro
          kicker="Always on"
          title="Membership"
          body={`${dues.amount} a year covers the national membership fee, a club t-shirt, and every competition entry.`}
        />
        <div className="mt-6 sm:mt-8">
          <Spotlight
            image={dues.image}
            alt={dues.imageAlt}
            kicker={dues.cadence}
            title={`${dues.amount} a year`}
            body="No prerequisites. Any grade. Pay through the district RevTrak store and you are in."
            href="/membership"
            cta="How to join"
            actionHref={links.dues}
            actionLabel="Pay dues"
            actionExternal
            flip
          />
        </div>
      </Section>

      <Section className="pt-0 sm:pt-0 lg:pt-0">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionIntro kicker="Student-run" title="Officers" />
          <Reveal>
            <Button href="/officers" variant="secondary">
              All {officers.length} officers
            </Button>
          </Reveal>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
          {officers.slice(0, 4).map((officer, i) => (
            <Reveal key={officer.name} index={i}>
              <OfficerCard officer={officer} priority={i < 2} />
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}

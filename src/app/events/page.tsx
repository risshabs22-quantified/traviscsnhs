import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SectionIntro } from "@/components/section-intro";
import { ContestList } from "@/components/contest-list";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { schedule } from "@/lib/content";

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
        kicker="Events"
        title="Four competitions. Solo, team, and in house."
        lead="Every member enters at least one. Any of the four counts, including our own Code Jam."
        image="/media/hero-contest.jpg"
        imageAlt="Students in the lab during a coding contest"
      />

      <Section>
        <ContestList />
      </Section>

      <Section className="pt-0 sm:pt-0 lg:pt-0">
        <SectionIntro
          kicker="The year"
          title="What happens, and roughly when."
          body="Exact meeting days and contest dates go out on Instagram and Remind first."
        />
        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-20">
          {schedule.map((term, t) => (
            <Reveal key={term.term} index={t}>
              <h3 className="display text-[2rem] sm:text-[2.6rem]">{term.term}</h3>
              <ul className="mt-8 space-y-6">
                {term.items.map((item) => (
                  <li key={item.name}>
                    <p className="text-[1.15rem] font-semibold">{item.name}</p>
                    <p className="mt-1 text-[0.95rem] text-ink-soft">{item.when}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}

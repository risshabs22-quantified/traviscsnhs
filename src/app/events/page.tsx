import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SectionIntro } from "@/components/section-intro";
import { ContestList } from "@/components/contest-list";
import { Section } from "@/components/ui/section";
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
        <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {schedule.map((term) => (
            <div key={term.term}>
              <h3 className="text-2xl font-semibold">{term.term}</h3>
              <ul className="mt-6 space-y-5">
                {term.items.map((item) => (
                  <li key={item.name}>
                    <p className="font-semibold">{item.name}</p>
                    <p className="mt-1 text-[0.95rem] text-ink-soft">{item.when}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

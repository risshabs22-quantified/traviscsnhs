import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { OfficerCard } from "@/components/officer-card";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { links, officers } from "@/lib/content";

export const metadata: Metadata = {
  title: "Officers",
  description:
    "The student officers running the Travis High School Computer Science National Honor Society chapter for 2026-27.",
  alternates: { canonical: "/officers" },
};

export default function OfficersPage() {
  return (
    <>
      <PageHeader
        kicker="Meet the officers"
        title="The students running the chapter."
        lead="Officers write the Code Jam problems, run practice sessions before each USACO window, organise UIL teams, and keep the group chat moving."
      />

      <Section>
        <div className="grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {officers.map((officer, i) => (
            <Reveal key={officer.name} index={i}>
              <OfficerCard officer={officer} priority={i < 4} />
            </Reveal>
          ))}
        </div>

        <Reveal y={30}>
          <div className="mt-20 max-w-2xl">
            <h2 className="display text-[clamp(1.8rem,4.4vw,2.8rem)]">
              Questions before you join?
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft text-pretty">
              Find any officer at a meeting, or message us on Instagram. If dues are a
              problem, talk to an officer privately and we will work it out.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact" size="lg">
                Contact us
              </Button>
              <Button href={links.instagram} external size="lg" variant="secondary">
                {links.instagramHandle}
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}

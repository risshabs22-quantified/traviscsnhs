import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { OfficerCard } from "@/components/officer-card";
import { JoinBand } from "@/components/sections/join-band";
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
        eyebrow="Meet the officers"
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

        {/* TODO: confirm with officers — the deck had no photo for the Vice President. */}
        <Reveal y={30}>
          <div className="mt-24 rounded-[22px] bg-ink px-7 py-16 sm:px-14 sm:py-20">
            <h2 className="display max-w-3xl text-[clamp(1.9rem,5vw,3.2rem)] text-page">
              Questions before you join?
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-cream-soft text-pretty">
              Find any officer at a meeting, or message us on Instagram. If dues are a
              problem, talk to an officer privately and we will work it out.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button href="/contact" size="lg" variant="onDark">
                Contact us
              </Button>
              <Button href={links.instagram} external size="lg" variant="onDarkGhost">
                {links.instagramHandle}
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>

      <JoinBand />
    </>
  );
}

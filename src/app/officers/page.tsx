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
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {officers.map((officer, i) => (
            <Reveal key={officer.name} index={i}>
              <OfficerCard officer={officer} priority={i < 4} />
            </Reveal>
          ))}
        </div>

        {/* TODO: confirm with officers — the deck had no photo for the Vice President. */}
        <Reveal>
          <div className="card mt-16 flex flex-col gap-6 rounded-[26px] p-9 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl">
              <h2 className="text-2xl font-bold tracking-[-0.025em]">
                Questions before you join?
              </h2>
              <p className="mt-3 leading-relaxed text-ink-soft text-pretty">
                Find any officer at a meeting, or message us on Instagram. If dues are a
                problem, talk to an officer privately and we will work it out.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Button href="/contact">Contact us</Button>
              <Button href={links.instagram} external variant="secondary">
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

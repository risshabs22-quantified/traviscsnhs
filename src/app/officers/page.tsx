import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { OfficerCard } from "@/components/officer-card";
import { Section } from "@/components/ui/section";
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
        <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {officers.map((officer, i) => (
            <OfficerCard key={officer.name} officer={officer} priority={i < 4} />
          ))}
        </div>

        <div className="mt-16 max-w-2xl">
          <h2 className="display text-[clamp(1.5rem,3.4vw,2.2rem)]">Questions before you join?</h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft text-pretty sm:text-lg">
            Find any officer at a meeting, or message us on Instagram. If dues are a
            problem, talk to an officer privately and we will work it out.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="/contact" size="lg">
              Contact us
            </Button>
            <Button href={links.instagram} external size="lg" variant="secondary">
              {links.instagramHandle}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

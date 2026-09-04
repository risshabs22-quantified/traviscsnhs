import { Section } from "@/components/ui/section";
import { Reveal, RevealText } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { OfficerCard } from "@/components/officer-card";
import { officers } from "@/lib/content";

export function OfficersPreview() {
  const featured = officers.slice(0, 4);

  return (
    <Section id="officers">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow">Meet the officers</p>
          </Reveal>
          <h2 className="display mt-6 text-[clamp(2.2rem,6vw,4.2rem)]">
            <RevealText text="Students run this chapter." delay={0.05} />
          </h2>
          <Reveal index={2}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft text-pretty">
              Officers write the Code Jam problems, run practice sessions, and answer
              questions in the group chat. Find any of us at a meeting.
            </p>
          </Reveal>
        </div>
        <Reveal index={3}>
          <Button href="/officers" variant="secondary">
            All {officers.length} officers
          </Button>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {featured.map((officer, i) => (
          <Reveal key={officer.name} index={i}>
            <OfficerCard officer={officer} priority={i < 2} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

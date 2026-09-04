import { Section } from "@/components/ui/section";
import { Reveal, RevealText } from "@/components/ui/reveal";
import { SectionChip } from "@/components/ui/chip";
import { Tile, type Tone } from "@/components/ui/tile";
import { whatWeAre } from "@/lib/content";

export function WhatWeAre() {
  return (
    <Section id="what-we-are">
      <div className="max-w-5xl">
        <Reveal>
          <SectionChip>{whatWeAre.eyebrow}</SectionChip>
        </Reveal>
        <h2 className="display mt-8 text-[clamp(2.3rem,6.4vw,4.6rem)]">
          <RevealText text={whatWeAre.title} delay={0.05} />
        </h2>
        <Reveal index={2}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft text-pretty sm:text-xl">
            {whatWeAre.body}
          </p>
        </Reveal>
      </div>

      {/* Three big flat panels. Headline at the top, the word itself as the
          visual at the bottom — no icon, no border, no body copy. */}
      <div className="mt-14 grid gap-4 md:grid-cols-3">
        {whatWeAre.pillars.map((pillar, i) => (
          <Reveal key={pillar.key} index={i}>
            <Tile tone={pillar.tone as Tone} title={pillar.body}>
              <p className="text-[clamp(3rem,7vw,4.25rem)] leading-[0.85] font-bold tracking-[-0.045em]">
                {pillar.label}
              </p>
            </Tile>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

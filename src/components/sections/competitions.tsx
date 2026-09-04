import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Reveal, RevealText } from "@/components/ui/reveal";
import { SectionChip } from "@/components/ui/chip";
import { Tile, TileFigure, TileRow, TileSlide } from "@/components/ui/tile";
import { TrophyIcon } from "@/components/ui/icons";
import { competitions } from "@/lib/content";

export function Competitions() {
  return (
    <Section id="competitions" className="pt-0 sm:pt-0 lg:pt-0">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <Reveal>
            <SectionChip icon={<TrophyIcon className="h-[18px] w-[18px]" />}>
              Competitions
            </SectionChip>
          </Reveal>
          <h2 className="display mt-8 text-[clamp(2.2rem,6vw,4.2rem)]">
            <RevealText
              text="Four competitions this year: solo, team, and in house."
              delay={0.05}
            />
          </h2>
        </div>
      </div>

      {/* A snap row rather than a grid: three fit, the fourth peeks, which is
          what tells you it scrolls. */}
      <TileRow>
        {competitions.map((comp) => (
          <TileSlide key={comp.slug}>
            <Link
              href={`/events#${comp.slug}`}
              className="block transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5"
            >
              <Tile tone={comp.tone} title={comp.name}>
                <TileFigure value={comp.figure.value} caption={comp.figure.caption} />
              </Tile>
            </Link>
          </TileSlide>
        ))}
      </TileRow>
    </Section>
  );
}

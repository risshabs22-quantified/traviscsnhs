import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { SectionChip, ChipOnDark } from "@/components/ui/chip";
import { Button } from "@/components/ui/button";
import { CardIcon } from "@/components/ui/icons";
import { dues, links } from "@/lib/content";

/**
 * One crimson panel: the number, what it buys, and the button. The old
 * version was a hairline table of label-on-the-left, value-on-the-right
 * rows, which is exactly the pattern that reads as filler.
 */
export function DuesSplit({ heading = "Dues" }: { heading?: string }) {
  return (
    <Section id="dues" className="pt-0 sm:pt-0 lg:pt-0">
      <Reveal>
        <SectionChip icon={<CardIcon className="h-[18px] w-[18px]" />}>{heading}</SectionChip>
      </Reveal>

      <Reveal index={1} y={30}>
        <div className="mt-10 grid gap-12 rounded-[22px] bg-crimson px-7 py-14 sm:px-12 sm:py-16 lg:grid-cols-2 lg:gap-20 lg:px-16">
          <div>
            <p className="text-[clamp(6rem,18vw,11rem)] leading-[0.8] font-bold tracking-[-0.05em] text-page">
              {dues.amount}
            </p>
            <p className="mt-8 text-lg font-medium text-cream-soft">{dues.cadence}</p>
            <div className="mt-10">
              <Button href={links.dues} external size="lg" variant="onDark">
                Pay on RevTrak
              </Button>
            </div>
          </div>

          <ul className="space-y-9 lg:pt-4">
            {dues.includes.map((row) => (
              <li key={row.label}>
                <p className="text-[1.4rem] leading-snug font-semibold text-page sm:text-[1.6rem]">
                  {row.label}
                </p>
                <p className="mt-3">
                  <ChipOnDark>{row.value}</ChipOnDark>
                </p>
              </li>
            ))}
            <li className="max-w-sm pt-2 text-[0.9375rem] leading-relaxed text-cream-soft">
              {dues.note}
            </li>
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}

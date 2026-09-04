import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { CardIcon, ExternalIcon } from "@/components/ui/icons";
import { dues, links } from "@/lib/content";

/** Two-column split: the number on the left, what it buys on the right. */
export function DuesSplit({ heading = "Dues & membership" }: { heading?: string }) {
  return (
    <Section id="dues">
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <p className="eyebrow">{heading}</p>
          </Reveal>
          <Reveal index={1}>
            <p className="display mt-6 text-[clamp(6rem,20vw,12rem)] leading-[0.8] text-crimson">
              {dues.amount}
            </p>
          </Reveal>
          <Reveal index={2}>
            <p className="mt-6 font-mono text-xs tracking-[0.2em] text-ink-soft uppercase">
              {dues.cadence}
            </p>
          </Reveal>
          <Reveal index={3}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href={links.dues} external size="lg">
                <CardIcon className="h-[18px] w-[18px]" />
                Pay on RevTrak
                <ExternalIcon className="h-4 w-4 opacity-70" />
              </Button>
            </div>
          </Reveal>
          <Reveal index={4}>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-soft">
              Payments run through the Fort Bend ISD RevTrak store, under Travis High
              School → Computer Science NHS.
            </p>
          </Reveal>
        </div>

        <div className="lg:pt-6">
          <ul className="divide-y divide-clay/60 border-y border-clay/60">
            {dues.includes.map((row, i) => (
              <Reveal key={row.label} index={i} as="li">
                <div className="flex items-baseline justify-between gap-6 py-6">
                  <span className="text-lg font-semibold sm:text-xl">{row.label}</span>
                  <span className="font-mono text-xs tracking-[0.14em] text-ink-soft uppercase">
                    {row.value}
                  </span>
                </div>
              </Reveal>
            ))}
          </ul>
          <Reveal index={3}>
            <p className="mt-7 rounded-[20px] bg-sand/60 p-6 text-[0.9375rem] leading-relaxed text-ink text-pretty">
              {dues.note}
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

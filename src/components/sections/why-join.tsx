import { Section } from "@/components/ui/section";
import { Reveal, RevealText } from "@/components/ui/reveal";
import { SectionChip } from "@/components/ui/chip";
import { whyJoin } from "@/lib/content";

/**
 * Big numbered statements, then one full-width panel for the payoff.
 * The old version put a bordered callout card beside a hairline list; both
 * read as filler boxes rather than as anything worth reading.
 */
export function WhyJoin() {
  return (
    <Section id="why-join">
      <Reveal>
        <SectionChip>{whyJoin.eyebrow}</SectionChip>
      </Reveal>
      <h2 className="display mt-8 max-w-3xl text-[clamp(2.2rem,6vw,4.2rem)]">
        <RevealText text={whyJoin.title} delay={0.05} />
      </h2>

      <ol className="mt-16 grid gap-x-16 gap-y-12 sm:grid-cols-2">
        {whyJoin.reasons.map((reason, i) => (
          <Reveal key={reason} index={i} as="li">
            <p className="tag text-crimson">{String(i + 1).padStart(2, "0")}</p>
            <p className="mt-4 text-[1.35rem] leading-[1.35] text-pretty sm:text-[1.6rem]">
              {reason}
            </p>
          </Reveal>
        ))}
      </ol>

      <Reveal y={30}>
        <aside className="mt-20 rounded-[22px] bg-ink px-7 py-16 sm:px-14 sm:py-20">
          <p className="text-cream-soft text-[0.9375rem] font-medium">
            {whyJoin.callout.eyebrow}
          </p>
          <p className="display mt-6 max-w-4xl text-[clamp(1.9rem,5vw,3.4rem)] text-page">
            {whyJoin.callout.title}
          </p>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-cream-soft text-pretty">
            {whyJoin.callout.body}
          </p>
        </aside>
      </Reveal>
    </Section>
  );
}

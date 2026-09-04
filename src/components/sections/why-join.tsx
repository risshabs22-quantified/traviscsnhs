import { Section } from "@/components/ui/section";
import { Reveal, RevealText } from "@/components/ui/reveal";
import { whyJoin } from "@/lib/content";

/** Two-column split: numbered reasons on the left, one callout card on the right. */
export function WhyJoin() {
  return (
    <Section id="why-join">
      <div className="grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
        <div>
          <Reveal>
            <p className="eyebrow">{whyJoin.eyebrow}</p>
          </Reveal>
          <h2 className="display mt-6 text-[clamp(2.2rem,6vw,4.2rem)]">
            <RevealText text={whyJoin.title} delay={0.05} />
          </h2>

          <ol className="mt-12 divide-y divide-clay/60 border-t border-clay/60">
            {whyJoin.reasons.map((reason, i) => (
              <Reveal key={reason} index={i} as="li">
                <div className="group flex gap-6 py-7 transition-colors duration-300">
                  <span className="mt-1 font-mono text-[0.6875rem] tracking-[0.16em] text-crimson tabular-nums transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-lg leading-relaxed text-pretty sm:text-xl">{reason}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal index={2} y={30}>
          <aside data-glow className="card-surface sticky top-32 overflow-hidden rounded-[26px] p-9">
            <span
              aria-hidden
              className="absolute -top-20 -left-16 h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(242,160,61,0.28),transparent_70%)]"
            />
            <p className="eyebrow relative">{whyJoin.callout.eyebrow}</p>
            <h3 className="relative mt-7 text-[1.75rem] leading-[1.15] font-extrabold tracking-[-0.03em] text-balance sm:text-[2rem]">
              {whyJoin.callout.title}
            </h3>
            <p className="relative mt-6 leading-relaxed text-ink-soft text-pretty">
              {whyJoin.callout.body}
            </p>
          </aside>
        </Reveal>
      </div>
    </Section>
  );
}

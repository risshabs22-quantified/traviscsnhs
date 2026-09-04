import { Section } from "@/components/ui/section";
import { Reveal, RevealText } from "@/components/ui/reveal";
import { TerminalIcon, UsersIcon, TrophyIcon } from "@/components/ui/icons";
import { whatWeAre } from "@/lib/content";

const icons = {
  build: TerminalIcon,
  teach: UsersIcon,
  belong: TrophyIcon,
} as const;

export function WhatWeAre() {
  return (
    <Section id="what-we-are">
      {/* Full-width statement. The headline does the work. */}
      <div className="max-w-5xl">
        <Reveal>
          <p className="eyebrow">{whatWeAre.eyebrow}</p>
        </Reveal>
        <h2 className="display mt-6 text-[clamp(2.3rem,6.4vw,4.6rem)]">
          <RevealText text={whatWeAre.title} delay={0.05} />
        </h2>
        <Reveal index={2}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft text-pretty sm:text-xl">
            {whatWeAre.body}
          </p>
        </Reveal>
      </div>

      {/* Three pillars, straight from the deck. */}
      <div className="mt-16 grid gap-5 sm:mt-20 md:grid-cols-3">
        {whatWeAre.pillars.map((pillar, i) => {
          const Icon = icons[pillar.key as keyof typeof icons];
          return (
            <Reveal key={pillar.key} index={i}>
              <article data-glow className="group card-surface relative h-full overflow-hidden rounded-[26px] p-8 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]">
                <span
                  aria-hidden
                  className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(242,160,61,0.4),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="relative flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sand text-crimson transition-colors duration-300 group-hover:bg-crimson group-hover:text-cream">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-[0.6875rem] tracking-[0.2em] text-ink-soft">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="relative mt-8 text-2xl font-extrabold tracking-[-0.02em]">
                  {pillar.label}
                </h3>
                <p className="relative mt-3 leading-relaxed text-ink-soft text-pretty">
                  {pillar.body}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

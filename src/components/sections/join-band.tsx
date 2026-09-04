import { Container } from "@/components/ui/section";
import { Reveal, RevealText } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { ArrowIcon } from "@/components/ui/icons";
import { dues, links, requirements } from "@/lib/content";

/**
 * Closing CTA band. Gradient stays between crimson and rust so cream text
 * clears 5.6:1 everywhere on it — the orange only appears as a blurred bloom.
 */
export function JoinBand() {
  return (
    <section className="px-3 pb-20 sm:px-6 sm:pb-28">
      <Container className="max-w-[80rem] px-0 sm:px-0">
        <Reveal y={30}>
          <div className="relative isolate overflow-hidden rounded-[30px] bg-[linear-gradient(135deg,var(--color-crimson)_0%,var(--color-rust)_58%,#8E2C1B_100%)] px-7 py-20 text-center shadow-[var(--shadow-lift)] sm:rounded-[40px] sm:px-12 sm:py-28">
            <span
              aria-hidden
              className="animate-hue-drift absolute -top-1/3 -right-1/6 -z-10 h-[80%] w-[60%] rounded-full bg-[radial-gradient(circle,rgba(242,160,61,0.5),transparent_68%)] blur-xl"
            />
            <span
              aria-hidden
              className="animate-drift absolute -bottom-1/3 -left-1/6 -z-10 h-[80%] w-[55%] rounded-full bg-[radial-gradient(circle,rgba(251,246,238,0.22),transparent_68%)] blur-xl"
            />

            <p className="font-mono text-[0.6875rem] tracking-[0.22em] text-cream/75 uppercase">
              Join CSNHS
            </p>
            <h2 className="display mx-auto mt-7 max-w-3xl text-[clamp(2.4rem,7vw,4.8rem)] text-cream">
              <RevealText
                text={`${dues.amount} a year. No prerequisites. Any grade.`}
                delay={0.08}
              />
            </h2>
            <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-cream/85 text-pretty">
              Dues cover the national membership fee, your club t-shirt, and every
              competition entry. Pay through the district RevTrak store and you are in.
            </p>

            <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href={links.dues} external size="lg" variant="onDark">
                Pay dues on RevTrak
                <ArrowIcon className="h-[18px] w-[18px] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1" />
              </Button>
              <Button href="/membership" size="lg" variant="onDarkGhost">
                Read the requirements
              </Button>
            </div>

            <ul className="mx-auto mt-16 grid max-w-3xl gap-8 border-t border-cream/20 pt-10 sm:grid-cols-3">
              {requirements.map((req) => (
                <li key={req.label} className="text-center">
                  <p className="font-mono text-[0.5625rem] tracking-[0.2em] text-cream/65 uppercase">
                    {req.label}
                  </p>
                  <p className="mt-3 text-4xl font-extrabold tracking-[-0.03em] text-cream">
                    {req.value}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

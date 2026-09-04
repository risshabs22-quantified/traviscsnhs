import { Container } from "@/components/ui/section";
import { Reveal, RevealText } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { dues, links, requirements } from "@/lib/content";

/**
 * Closing CTA band. One flat crimson fill. Page-cream text on #8E2C1B is
 * 7.7:1, and because the fill never varies that number holds everywhere on
 * the band rather than only at its darkest point.
 */
export function JoinBand() {
  return (
    <section className="px-3 pb-20 sm:px-6 sm:pb-28">
      <Container className="max-w-[80rem] px-0 sm:px-0">
        <Reveal y={30}>
          <div className="overflow-hidden rounded-[24px] bg-crimson px-7 py-24 text-center sm:rounded-[32px] sm:px-12 sm:py-28">
            <p className="eyebrow-dark">Join CSNHS</p>
            <h2 className="display mx-auto mt-6 max-w-3xl text-[clamp(2.3rem,6.4vw,4.4rem)] text-page">
              <RevealText
                text={`${dues.amount} a year. No prerequisites. Any grade.`}
                delay={0.08}
              />
            </h2>
            <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-cream-soft text-pretty">
              Dues cover the national membership fee, your club t-shirt, and every
              competition entry. Pay through the district RevTrak store and you are in.
            </p>

            <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href={links.dues} external size="lg" variant="onDark">
                Pay dues on RevTrak
              </Button>
              <Button href="/membership" size="lg" variant="onDarkGhost">
                Read the requirements
              </Button>
            </div>

            <ul className="mx-auto mt-16 grid max-w-3xl gap-8 border-t border-rust pt-10 sm:grid-cols-3">
              {requirements.map((req) => (
                <li key={req.label} className="text-center">
                  <p className="tag text-cream-soft">{req.label}</p>
                  <p className="mt-3 text-4xl font-bold tracking-[-0.03em] text-page">
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

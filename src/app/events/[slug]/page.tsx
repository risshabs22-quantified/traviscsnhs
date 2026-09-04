import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { competitions, getCompetition, links } from "@/lib/content";

type Params = { slug: string };

export function generateStaticParams() {
  return competitions.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const comp = getCompetition(slug);
  if (!comp) return { title: "Contest" };
  return {
    title: comp.name,
    description: comp.short,
    alternates: { canonical: `/events/${comp.slug}` },
  };
}

export default async function ContestPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const comp = getCompetition(slug);
  if (!comp) notFound();

  return (
    <Container className="pt-10 pb-20 sm:pt-14 sm:pb-28">
      <Reveal>
        <Button href="/events" variant="quiet">
          All contests
        </Button>
      </Reveal>

      <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <Reveal>
          <div className="relative mx-auto aspect-square w-full max-w-[36rem] overflow-hidden rounded-[28px] bg-sand sm:rounded-[40px]">
            <Image
              src={comp.image}
              alt={comp.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-contain p-4 sm:p-8"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="badge">{comp.format}</p>
          </Reveal>
          <Reveal index={1}>
            <h1 className="display mt-4 text-[clamp(2.4rem,6.5vw,4.6rem)]">{comp.name}</h1>
          </Reveal>
          {comp.body.map((para, i) => (
            <Reveal key={para} index={i + 2}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft text-pretty">
                {para}
              </p>
            </Reveal>
          ))}
          <Reveal index={5}>
            <p className="mt-5 text-base font-medium">{comp.timing}</p>
          </Reveal>
          <Reveal index={6}>
            <div className="mt-8 flex flex-wrap gap-3">
              {comp.href && (
                <Button href={comp.href} external size="lg">
                  Official site
                </Button>
              )}
              <Button href={links.dues} external size="lg" variant="secondary">
                Pay dues
              </Button>
            </div>
          </Reveal>
        </div>
      </div>

      <dl className="mt-16 grid gap-8 border-t border-clay pt-12 sm:grid-cols-2 lg:grid-cols-4">
        {comp.rows.map((row, i) => (
          <Reveal key={row.label} index={i}>
            <dt className="text-sm font-semibold text-crimson">{row.label}</dt>
            <dd className="mt-2 text-lg leading-snug">{row.value}</dd>
          </Reveal>
        ))}
      </dl>
    </Container>
  );
}

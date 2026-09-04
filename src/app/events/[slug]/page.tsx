import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import { JsonLd } from "@/components/json-ld";
import { competitions, getCompetition, links } from "@/lib/content";
import { breadcrumbJsonLd, contestJsonLd, contestMetadata } from "@/lib/seo";

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
  if (!comp) {
    return { title: "Contest", robots: { index: false, follow: true } };
  }
  return contestMetadata(comp);
}

export default async function ContestPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const comp = getCompetition(slug);
  if (!comp) notFound();

  return (
    <Container className="pt-10 pb-16 sm:pt-12 sm:pb-24">
      <JsonLd data={contestJsonLd(comp)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Events", path: "/events" },
          { name: comp.name, path: `/events/${comp.slug}` },
        ])}
      />
      <Button href="/events" variant="quiet">
        All contests
      </Button>

      <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
        <div className="relative mx-auto aspect-square w-full max-w-[32rem] overflow-hidden rounded-xl bg-sand">
          <Image
            src={comp.image}
            alt={comp.imageAlt}
            fill
            priority
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-contain p-4 sm:p-8"
          />
        </div>

        <div>
          <p className="badge">{comp.format}</p>
          <h1 className="display mt-3 text-[clamp(2rem,5vw,3.4rem)]">{comp.name}</h1>
          {comp.body.map((para) => (
            <p key={para} className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft text-pretty sm:text-lg">
              {para}
            </p>
          ))}
          <p className="mt-4 text-base font-medium">{comp.timing}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            {comp.href && (
              <Button href={comp.href} external size="lg">
                Official site
              </Button>
            )}
            <Button href={links.dues} external size="lg" variant="secondary">
              Pay dues
            </Button>
          </div>
        </div>
      </div>

      <dl className="mt-14 grid gap-6 border-t border-clay pt-10 sm:grid-cols-2 lg:grid-cols-4">
        {comp.rows.map((row) => (
          <div key={row.label}>
            <dt className="text-sm font-semibold text-crimson">{row.label}</dt>
            <dd className="mt-1 text-base leading-snug">{row.value}</dd>
          </div>
        ))}
      </dl>
    </Container>
  );
}

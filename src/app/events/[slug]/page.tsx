import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
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
    <section className="main-content">
      <JsonLd data={contestJsonLd(comp)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Events", path: "/events" },
          { name: comp.name, path: `/events/${comp.slug}` },
        ])}
      />

      <p>
        <Link href="/events">All contests</Link>
      </p>

      <h3>{comp.name}</h3>
      <p>
        {comp.format}. {comp.timing}.
      </p>
      <Image
        src={comp.image}
        alt={comp.imageAlt}
        width={1600}
        height={900}
        className="prose-img"
        priority
      />
      {comp.body.map((para) => (
        <p key={para}>{para}</p>
      ))}

      <h4>Details</h4>
      <ul>
        {comp.rows.map((row) => (
          <li key={row.label}>
            <strong>{row.label}.</strong> {row.value}
          </li>
        ))}
      </ul>
      {comp.href && (
        <p>
          <a href={comp.href} target="_blank" rel="noreferrer noopener">
            Official site
          </a>
        </p>
      )}
      <p>
        <a href={links.dues} target="_blank" rel="noreferrer noopener">
          Pay dues
        </a>
      </p>
    </section>
  );
}

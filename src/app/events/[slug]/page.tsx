import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { Crumbs } from "@/components/crumbs";
import { Box, BoxGrid } from "@/components/box";
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
    <div className="main-content">
      <JsonLd data={contestJsonLd(comp)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Events", path: "/events" },
          { name: comp.name, path: `/events/${comp.slug}` },
        ])}
      />
      <Crumbs
        items={[
          { href: "/", label: "Home" },
          { href: "/events", label: "Events" },
          { href: `/events/${comp.slug}`, label: comp.name },
        ]}
      />

      <BoxGrid cols={2}>
        <Box image={comp.image} alt={comp.imageAlt} title={comp.name} priority>
          <p>
            {comp.format}. {comp.timing}.
          </p>
        </Box>
        <Box title="About">
          <p>{comp.body.join(" ")}</p>
        </Box>
      </BoxGrid>

      <h2 className="section-label">Details</h2>
      <BoxGrid>
        {comp.rows.map((row) => (
          <Box key={row.label} title={row.label}>
            <p>{row.value}</p>
          </Box>
        ))}
        {comp.href && (
          <Box href={comp.href} external title="Official site">
            <p>Open the contest site.</p>
          </Box>
        )}
        <Box href={links.dues} external title="Pay dues">
          <p>RevTrak, Travis High School, Computer Science NHS.</p>
        </Box>
      </BoxGrid>
    </div>
  );
}

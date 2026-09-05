import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { Crumbs } from "@/components/crumbs";
import { Box, BoxGrid } from "@/components/box";
import { competitions, schedule } from "@/lib/content";
import { breadcrumbJsonLd, pageMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/events");

export default function EventsPage() {
  return (
    <div className="main-content">
      <JsonLd data={webPageJsonLd("/events")} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Events", path: "/events" },
        ])}
      />
      <Crumbs
        items={[
          { href: "/", label: "Home" },
          { href: "/events", label: "Events" },
        ]}
      />

      <p className="lead">
        Four competitions. Solo, team, and in house. Every member enters at least one.
      </p>

      <h2 className="section-label">Contests</h2>
      <BoxGrid>
        {competitions.map((comp) => (
          <Box
            key={comp.slug}
            href={`/events/${comp.slug}`}
            image={comp.image}
            alt={comp.imageAlt}
            title={comp.name}
          >
            <p>
              {comp.format}. {comp.timing}.
            </p>
          </Box>
        ))}
      </BoxGrid>

      <h2 className="section-label">The year</h2>
      <BoxGrid cols={2}>
        {schedule.map((term) => (
          <Box key={term.term} title={term.term}>
            <p>{term.items.map((item) => `${item.name} (${item.when})`).join(". ")}.</p>
          </Box>
        ))}
      </BoxGrid>
    </div>
  );
}

import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { Crumbs } from "@/components/crumbs";
import { Box, BoxGrid } from "@/components/box";
import { competitions, requirements, site, whatWeAre, whyJoin } from "@/lib/content";
import { breadcrumbJsonLd, pageMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/about");

export default function AboutPage() {
  return (
    <div className="main-content">
      <JsonLd data={webPageJsonLd("/about")} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <Crumbs
        items={[
          { href: "/", label: "Home" },
          { href: "/about", label: "About" },
        ]}
      />

      <p className="lead">
        {site.longName} at {site.chapter}. Student-run. Open to any grade.
      </p>

      <h2 className="section-label">What we do</h2>
      <BoxGrid>
        {whatWeAre.pillars.map((pillar) => (
          <Box key={pillar.key} title={pillar.label}>
            <p>{pillar.body}</p>
          </Box>
        ))}
      </BoxGrid>

      <h2 className="section-label">This year</h2>
      <BoxGrid>
        {competitions.map((comp) => (
          <Box key={comp.slug} href={`/events/${comp.slug}`} image={comp.image} alt={comp.imageAlt} title={comp.name}>
            <p>{comp.timing}</p>
          </Box>
        ))}
      </BoxGrid>

      <h2 className="section-label">Why join</h2>
      <BoxGrid>
        {whyJoin.reasons.map((reason, i) => (
          <Box key={reason} title={String(i + 1).padStart(2, "0")}>
            <p>{reason}</p>
          </Box>
        ))}
      </BoxGrid>

      <h2 className="section-label">Who it is for</h2>
      <BoxGrid>
        {requirements.map((req) => (
          <Box key={req.label} title={`${req.label}: ${req.value}`}>
            <p>{req.body}</p>
          </Box>
        ))}
      </BoxGrid>
    </div>
  );
}

import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { Crumbs } from "@/components/crumbs";
import { Box, BoxGrid } from "@/components/box";
import { competitions, nav } from "@/lib/content";
import { breadcrumbJsonLd, pageMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/site");

export default function SiteMapPage() {
  return (
    <div className="main-content">
      <JsonLd data={webPageJsonLd("/site")} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Site map", path: "/site" },
        ])}
      />
      <Crumbs
        items={[
          { href: "/", label: "Home" },
          { href: "/site", label: "Site map" },
        ]}
      />

      <p className="lead">Every page on traviscsnhs.com.</p>

      <BoxGrid>
        <Box href="/" title="Home">
          <p>Welcome, contests, membership, officers.</p>
        </Box>
        {nav.map((item) => (
          <Box key={item.href} href={item.href} title={item.label}>
            <p>{item.href}</p>
          </Box>
        ))}
        {competitions.map((comp) => (
          <Box key={comp.slug} href={`/events/${comp.slug}`} title={comp.name}>
            <p>{comp.format}</p>
          </Box>
        ))}
      </BoxGrid>
    </div>
  );
}

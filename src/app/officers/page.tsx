import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { Crumbs } from "@/components/crumbs";
import { Box, BoxGrid } from "@/components/box";
import { links, officers } from "@/lib/content";
import { breadcrumbJsonLd, pageMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/officers");

export default function OfficersPage() {
  return (
    <div className="main-content">
      <JsonLd data={webPageJsonLd("/officers")} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Officers", path: "/officers" },
        ])}
      />
      <Crumbs
        items={[
          { href: "/", label: "Home" },
          { href: "/officers", label: "Officers" },
        ]}
      />

      <p className="lead">
        Officers write the Code Jam problems, run practice sessions, organise UIL teams, and keep
        the group chat moving.
      </p>

      <BoxGrid>
        {officers.map((officer) => (
          <Box
            key={officer.name}
            image={officer.photo}
            media
            focus={officer.focus}
            emptyLabel={officer.photo ? undefined : "no picture"}
            alt={officer.photo ? `${officer.name}, ${officer.role}` : ""}
            title={officer.name}
          >
            <p>{officer.role}</p>
          </Box>
        ))}
      </BoxGrid>

      <p className="lead" style={{ marginTop: "0.9rem" }}>
        Questions: message{" "}
        <a href={links.instagram} target="_blank" rel="noreferrer noopener">
          {links.instagramHandle}
        </a>
        . If dues are a problem, talk to an officer privately.
      </p>
    </div>
  );
}

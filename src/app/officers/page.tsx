import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { OfficerRow } from "@/components/officer-row";
import { links, officers } from "@/lib/content";
import { breadcrumbJsonLd, pageMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/officers");

export default function OfficersPage() {
  return (
    <section className="main-content">
      <JsonLd data={webPageJsonLd("/officers")} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Officers", path: "/officers" },
        ])}
      />

      <h3>The students running the chapter</h3>
      <p>
        Officers write the Code Jam problems, run practice sessions before each USACO window,
        organise UIL teams, and keep the group chat moving.
      </p>
      {officers.map((officer) => (
        <OfficerRow key={officer.name} officer={officer} />
      ))}

      <h3>Questions before you join?</h3>
      <p>
        Find any officer at a meeting, or message us on Instagram. If dues are a problem, talk to
        an officer privately and we will work it out.
      </p>
      <p>
        <a href={links.instagram} target="_blank" rel="noreferrer noopener">
          {links.instagramHandle}
        </a>
      </p>
    </section>
  );
}

import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { Box, BoxGrid } from "@/components/box";
import { competitions, dues, links, officers, site, whatWeAre } from "@/lib/content";
import { pageMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/");

export default function HomePage() {
  return (
    <div className="main-content">
      <JsonLd data={webPageJsonLd("/")} />

      <h2 className="section-label">Welcome</h2>
      <BoxGrid cols={2}>
        <Box image="/media/lab-night.jpg" alt="A darkened computer lab with monitors glowing warm orange" title={`Welcome to ${site.name}`} priority>
          <p>
            The {site.longName} chapter at {site.chapter}. We meet through the year to code, compete,
            and tutor. No prerequisites. Any grade.
          </p>
        </Box>
        <Box image="/media/tutor.jpg" alt="Two students at one computer during a tutoring session" title="What we do">
          <p>
            {whatWeAre.pillars.map((p) => p.label).join(", ")}. Officers write the contests and run
            practice. Everything else is up to you.
          </p>
        </Box>
      </BoxGrid>

      <h2 className="section-label">Competitions</h2>
      <BoxGrid>
        {competitions.map((comp, i) => (
          <Box
            key={comp.slug}
            href={`/events/${comp.slug}`}
            image={comp.image}
            alt={comp.imageAlt}
            title={comp.name}
            priority={i < 2}
          >
            <p>
              {comp.format}. {comp.short}
            </p>
          </Box>
        ))}
      </BoxGrid>

      <h2 className="section-label">Membership</h2>
      <BoxGrid cols={2}>
        <Box
          href="/membership"
          image={dues.image}
          alt="Club t-shirt: blue shirt with a computer drawing and CSNHS 2025-2026"
          title={`${dues.amount} a year`}
        >
          <p>National membership, a club t-shirt, and every competition entry. Pay on RevTrak.</p>
        </Box>
        <Box href={links.dues} external title="Pay dues">
          <p>
            Open the Fort Bend ISD RevTrak store for Travis High School, then Computer Science NHS.
            Officers do not take cash.
          </p>
        </Box>
      </BoxGrid>

      <h2 className="section-label">Officers</h2>
      <BoxGrid>
        {officers.map((officer) => (
          <Box
            key={officer.name}
            href="/officers"
            image={officer.photo}
            media
            focus={officer.focus}
            alt={officer.photo ? `${officer.name}, ${officer.role}` : ""}
            title={officer.name}
          >
            <p>{officer.role}</p>
          </Box>
        ))}
      </BoxGrid>

      <h2 className="section-label">Contact</h2>
      <BoxGrid>
        <Box href={links.instagram} external title="Instagram">
          <p>{links.instagramHandle}</p>
        </Box>
        <Box href={links.remindHowTo} external title="Remind">
          <p>{links.remindHandle}</p>
        </Box>
        <Box href={`mailto:${links.email}`} title="Email">
          <p>{links.email}</p>
        </Box>
        <Box href="/contact" title="Where we meet">
          <p>Computer lab at Travis High School. Times go out on Instagram and Remind.</p>
        </Box>
      </BoxGrid>
    </div>
  );
}

import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { Crumbs } from "@/components/crumbs";
import { Box, BoxGrid } from "@/components/box";
import { dues, links, requirements } from "@/lib/content";
import { breadcrumbJsonLd, pageMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/membership");

export default function MembershipPage() {
  return (
    <div className="main-content">
      <JsonLd data={webPageJsonLd("/membership")} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Membership", path: "/membership" },
        ])}
      />
      <Crumbs
        items={[
          { href: "/", label: "Home" },
          { href: "/membership", label: "Membership" },
        ]}
      />

      <p className="lead">
        Show up, enter one competition, and pay your dues. That is the whole list.
      </p>

      <h2 className="section-label">Requirements</h2>
      <BoxGrid>
        {requirements.map((req) => (
          <Box key={req.label} title={`${req.label}: ${req.value}`}>
            <p>{req.body}</p>
          </Box>
        ))}
      </BoxGrid>

      <h2 className="section-label">Dues</h2>
      <BoxGrid cols={2}>
        <Box
          image={dues.image}
          alt="Club t-shirt: blue shirt with a computer drawing and CSNHS 2025-2026"
          title={`${dues.amount} · ${dues.cadence}`}
          priority
        >
          <p>National membership fee, club t-shirt, and competition entry fees.</p>
        </Box>
        <Box title="Included">
          <p>
            {dues.includes.map((row) => row.label).join(", ")}. {dues.note}
          </p>
        </Box>
      </BoxGrid>

      <h2 className="section-label">How to pay</h2>
      <BoxGrid>
        {dues.howTo.map((step, i) => (
          <Box key={step} title={String(i + 1).padStart(2, "0")}>
            <p>{step}</p>
          </Box>
        ))}
      </BoxGrid>
      <p className="lead" style={{ marginTop: "0.9rem" }}>
        <a href={links.dues} target="_blank" rel="noreferrer noopener">
          Open the CSNHS RevTrak page
        </a>
      </p>
    </div>
  );
}

import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { Crumbs } from "@/components/crumbs";
import { Box, BoxGrid } from "@/components/box";
import { links, socials } from "@/lib/content";
import { breadcrumbJsonLd, pageMetadata, school, webPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/contact");

export default function ContactPage() {
  return (
    <div className="main-content">
      <JsonLd data={webPageJsonLd("/contact")} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <Crumbs
        items={[
          { href: "/", label: "Home" },
          { href: "/contact", label: "Contact" },
        ]}
      />

      <p className="lead">{socials.body}</p>

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
        <Box href={links.dues} external title="Pay dues">
          <p>RevTrak. Officers do not take cash.</p>
        </Box>
        <Box title="Where we meet">
          <p>
            Computer lab at Travis High School. {school.street}, {school.city}, {school.region}{" "}
            {school.postal}.
          </p>
        </Box>
      </BoxGrid>
    </div>
  );
}

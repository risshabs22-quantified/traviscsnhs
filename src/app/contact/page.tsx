import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { links, socials } from "@/lib/content";
import { breadcrumbJsonLd, pageMetadata, school, webPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/contact");

export default function ContactPage() {
  return (
    <section className="main-content">
      <JsonLd data={webPageJsonLd("/contact")} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <h3>Contact us</h3>
      <p>{socials.body}</p>
      <ul>
        <li>
          Instagram:{" "}
          <a href={links.instagram} target="_blank" rel="noreferrer noopener">
            {links.instagramHandle}
          </a>
        </li>
        <li>
          Remind: {links.remindHandle}.{" "}
          <a href={links.remindHowTo} target="_blank" rel="noreferrer noopener">
            How to join Remind
          </a>
        </li>
        <li>
          Email: <a href={`mailto:${links.email}`}>{links.email}</a>
        </li>
      </ul>

      <h3>Paying dues</h3>
      <p>
        Dues are $20 a year and go through the Fort Bend ISD RevTrak store, under Travis High
        School, then Computer Science NHS. Officers do not take cash.
      </p>
      <p>
        <a href={links.dues} target="_blank" rel="noreferrer noopener">
          Pay on RevTrak
        </a>
      </p>

      <h3>Where we meet</h3>
      <p>
        Meetings run in the computer lab at Travis High School during the school year. Days and
        times are posted on Instagram and Remind before each meeting.
      </p>
      <p>
        {school.street}, {school.city}, {school.region} {school.postal}
      </p>
    </section>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { JsonLd } from "@/components/json-ld";
import { dues, links, requirements } from "@/lib/content";
import { breadcrumbJsonLd, pageMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/membership");

export default function MembershipPage() {
  return (
    <section className="main-content">
      <JsonLd data={webPageJsonLd("/membership")} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Membership", path: "/membership" },
        ])}
      />

      <h3>Requirements</h3>
      <p>
        Three things keep you in good standing: show up, enter one competition, and pay your dues.
        That is the whole list.
      </p>
      <ul>
        {requirements.map((req) => (
          <li key={req.label}>
            <strong>
              {req.label}: {req.value}.
            </strong>{" "}
            {req.body}
          </li>
        ))}
      </ul>

      <h3>Dues</h3>
      <Image
        src={dues.image}
        alt={dues.imageAlt}
        width={1600}
        height={900}
        className="prose-img"
        priority
      />
      <p>
        {dues.amount}. {dues.cadence}. Dues cover the national membership fee, a club t-shirt, and
        every competition entry. Officers do not take cash.
      </p>
      <ul>
        {dues.includes.map((row) => (
          <li key={row.label}>
            {row.label}: {row.value}
          </li>
        ))}
      </ul>
      <p>{dues.note}</p>

      <h3>How to pay</h3>
      <p>
        RevTrak is the Fort Bend ISD online payment store. Travis CSNHS has its own page there.
      </p>
      <ol>
        {dues.howTo.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
      <p>
        <a href={links.dues} target="_blank" rel="noreferrer noopener">
          Open the CSNHS RevTrak page
        </a>
        {" · "}
        <a href={links.revtrakSchool} target="_blank" rel="noreferrer noopener">
          Travis HS store
        </a>
      </p>
    </section>
  );
}

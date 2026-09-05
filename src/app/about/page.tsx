import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { competitions, requirements, site, whatWeAre, whyJoin } from "@/lib/content";
import { breadcrumbJsonLd, pageMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/about");

export default function AboutPage() {
  return (
    <section className="main-content">
      <JsonLd data={webPageJsonLd("/about")} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />

      <h3>What is CSNHS?</h3>
      <p>
        {site.longName} is the national honor society for computer science students. Our{" "}
        {site.chapter} chapter is student-run and open to any grade level.
      </p>
      <p>{whatWeAre.body}</p>
      <Image
        src="/media/tutor.jpg"
        alt="Two students at one computer during a tutoring session"
        width={1600}
        height={900}
        className="prose-img"
        priority
      />
      <ul>
        {whatWeAre.pillars.map((pillar) => (
          <li key={pillar.key}>
            <strong>{pillar.label}.</strong> {pillar.body}
          </li>
        ))}
      </ul>

      <h3>A year in the chapter</h3>
      <p>
        Meetings run in the lab. Officers put on practice sessions in the weeks before each USACO
        window, write the Code Jam problems, and organise UIL teams. Members tutor classmates in CS
        classes between all of it.
      </p>
      <ul>
        {competitions.map((comp) => (
          <li key={comp.slug}>
            <Link href={`/events/${comp.slug}`}>{comp.name}</Link>
            {" · "}
            {comp.timing}
          </li>
        ))}
      </ul>

      <h3>Why join</h3>
      <ol>
        {whyJoin.reasons.map((reason) => (
          <li key={reason}>{reason}</li>
        ))}
      </ol>
      <p>
        <strong>{whyJoin.callout.title}</strong> {whyJoin.callout.body}
      </p>

      <h3>Who it is for</h3>
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
      <p>
        <Link href="/membership">How to join</Link>
      </p>
    </section>
  );
}

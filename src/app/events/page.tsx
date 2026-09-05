import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { competitions, schedule } from "@/lib/content";
import { breadcrumbJsonLd, pageMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/events");

export default function EventsPage() {
  return (
    <section className="main-content">
      <JsonLd data={webPageJsonLd("/events")} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Events", path: "/events" },
        ])}
      />

      <h3>Four competitions</h3>
      <p>
        Solo, team, and in house. Every member enters at least one. Any of the four counts,
        including our own Code Jam.
      </p>
      <Image
        src="/media/code-jam.jpg"
        alt="Students in the lab during a coding contest"
        width={1600}
        height={900}
        className="prose-img"
        priority
      />

      {competitions.map((comp) => (
        <div key={comp.slug}>
          <h3>
            <Link href={`/events/${comp.slug}`}>{comp.name}</Link>
          </h3>
          <p>
            {comp.format}. {comp.short}
          </p>
          {comp.body.map((para) => (
            <p key={para}>{para}</p>
          ))}
          <p>{comp.timing}.</p>
        </div>
      ))}

      <h3>The year</h3>
      <p>Exact meeting days and contest dates go out on Instagram and Remind first.</p>
      {schedule.map((term) => (
        <div key={term.term}>
          <h4>{term.term}</h4>
          <ul>
            {term.items.map((item) => (
              <li key={item.name}>
                {item.name} · {item.when}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

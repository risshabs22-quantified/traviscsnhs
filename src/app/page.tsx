import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { OfficerRow } from "@/components/officer-row";
import { competitions, dues, links, officers, site, whatWeAre } from "@/lib/content";
import { pageMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/");

export default function HomePage() {
  return (
    <section className="main-content">
      <JsonLd data={webPageJsonLd("/")} />

      <h3>Welcome to Travis CSNHS</h3>
      <p>
        We are the {site.longName} chapter at {site.chapter}. The chapter meets through the year
        to code, compete, and tutor. Officers write the contests, run the practice sessions, and
        keep the group chat moving. Everything else is up to you.
      </p>
      <Image
        src="/media/lab-night.jpg"
        alt="A darkened computer lab with monitors glowing warm orange"
        width={1600}
        height={900}
        className="prose-img"
        priority
      />

      <h3>What we do</h3>
      <p>{whatWeAre.body}</p>
      <ul>
        {whatWeAre.pillars.map((pillar) => (
          <li key={pillar.key}>
            <strong>{pillar.label}.</strong> {pillar.body}
          </li>
        ))}
      </ul>
      <Image
        src="/media/tutor.jpg"
        alt="Two students at one computer during a tutoring session"
        width={1600}
        height={900}
        className="prose-img"
      />

      <h3>Competitions</h3>
      <p>
        Four competitions this year: solo, team, and in house. Every member enters at least one.
        Any of the four counts, including our own Code Jam.
      </p>
      {competitions.map((comp) => (
        <div key={comp.slug}>
          <h4>
            <Link href={`/events/${comp.slug}`}>{comp.name}</Link>
          </h4>
          <Image
            src={comp.image}
            alt={comp.imageAlt}
            width={1600}
            height={900}
            className="prose-img"
          />
          <p>
            {comp.short} {comp.timing}.
          </p>
        </div>
      ))}

      <h3>Membership</h3>
      <Image
        src={dues.image}
        alt={dues.imageAlt}
        width={1600}
        height={900}
        className="prose-img"
      />
      <p>
        {dues.amount} a year. {dues.cadence}. No prerequisites. Any grade. Dues cover the national
        membership fee, a club t-shirt, and every competition entry. Pay through the Fort Bend ISD
        RevTrak store.
      </p>
      <p>
        <a href={links.dues} target="_blank" rel="noreferrer noopener">
          Pay dues on RevTrak
        </a>
        {" · "}
        <Link href="/membership">How to join</Link>
      </p>

      <h3>Officers</h3>
      <p>Students run this chapter.</p>
      {officers.map((officer) => (
        <OfficerRow key={officer.name} officer={officer} />
      ))}
      <p>
        <Link href="/officers">All {officers.length} officers</Link>
      </p>

      <h3>Contact</h3>
      <p>
        Announcements go out first on Instagram{" "}
        <a href={links.instagram} target="_blank" rel="noreferrer noopener">
          {links.instagramHandle}
        </a>{" "}
        and Remind {links.remindHandle}. Email{" "}
        <a href={`mailto:${links.email}`}>{links.email}</a>.
      </p>
    </section>
  );
}

import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SectionIntro } from "@/components/section-intro";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/json-ld";
import { links, socials } from "@/lib/content";
import { breadcrumbJsonLd, pageMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/contact");

const channels = [
  {
    label: "Instagram",
    value: links.instagramHandle,
    body: "Announcements, competition sign ups, and meeting reminders go out here first.",
    href: links.instagram,
    cta: "Open Instagram",
  },
  {
    label: "Remind",
    value: links.remindHandle,
    body: "Text reminders for meetings and contest deadlines. Join the class from the Remind app.",
    href: links.remindHowTo,
    cta: "How to join Remind",
  },
  {
    label: "Email",
    value: links.email,
    body: "For anything that needs a longer answer than a DM.",
    href: `mailto:${links.email}`,
    cta: "Send an email",
    mail: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd("/contact")} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHeader kicker="Contact" title="Find us in the group chat." lead={socials.body} />

      <Section>
        <div className="grid gap-10 md:grid-cols-3">
          {channels.map((channel) => (
            <div key={channel.label}>
              <p className="text-sm font-semibold text-crimson">{channel.label}</p>
              <p className="mt-2 break-words text-xl font-semibold tracking-[-0.02em] sm:text-2xl">
                {channel.value}
              </p>
              <p className="mt-2 text-base leading-relaxed text-ink-soft">{channel.body}</p>
              <div className="mt-5">
                <Button href={channel.href} external={!channel.mail} variant="secondary">
                  {channel.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pt-0 sm:pt-0 lg:pt-0">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionIntro
              size="md"
              title="Paying dues"
              body="Dues are $20 a year and go through the Fort Bend ISD RevTrak store, under Travis High School, then Computer Science NHS. Officers do not take cash."
            />
            <div className="mt-6">
              <Button href={links.dues} external size="lg">
                Pay on RevTrak
              </Button>
            </div>
          </div>
          <div>
            <SectionIntro
              size="md"
              title="Where we meet"
              body="Meetings run in the computer lab at Travis High School during the school year. Days and times are posted on Instagram and Remind before each meeting."
            />
            <div className="mt-6">
              <Button href={links.fbisd} external size="lg" variant="secondary">
                Fort Bend ISD
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

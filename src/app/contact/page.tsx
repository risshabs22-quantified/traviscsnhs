import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SectionIntro } from "@/components/section-intro";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { links, socials } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach Travis CSNHS on Instagram @traviscsnhs or Remind @csnhs2026. Dues are paid through the Fort Bend ISD RevTrak store.",
  alternates: { canonical: "/contact" },
};

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
      <PageHeader kicker="Contact" title="Find us in the group chat." lead={socials.body} />

      <Section>
        <div className="grid gap-10 md:grid-cols-3">
          {channels.map((channel, i) => (
            <Reveal key={channel.label} index={i}>
              <p className="text-sm font-semibold text-crimson">{channel.label}</p>
              <p className="mt-3 break-words text-[1.7rem] leading-tight font-extrabold tracking-[-0.03em] sm:text-[2rem]">
                {channel.value}
              </p>
              <p className="mt-3 text-base leading-relaxed text-ink-soft">{channel.body}</p>
              <div className="mt-6">
                <Button href={channel.href} external={!channel.mail} variant="secondary">
                  {channel.cta}
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pt-0 sm:pt-0 lg:pt-0">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <SectionIntro
              size="md"
              title="Paying dues"
              body="Dues are $20 a year and go through the Fort Bend ISD RevTrak store, under Travis High School, then Computer Science NHS. Officers do not take cash."
            />
            <div className="mt-8">
              <Button href={links.dues} external size="lg">
                Pay on RevTrak
              </Button>
            </div>
          </Reveal>
          <Reveal index={1}>
            <SectionIntro
              size="md"
              title="Where we meet"
              body="Meetings run in the computer lab at Travis High School during the school year. Days and times are posted on Instagram and Remind before each meeting."
            />
            <div className="mt-8">
              <Button href={links.fbisd} external size="lg" variant="secondary">
                Fort Bend ISD
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

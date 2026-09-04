import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { SectionChip } from "@/components/ui/chip";
import { Tile, type Tone } from "@/components/ui/tile";
import { JoinBand } from "@/components/sections/join-band";
import { ChatIcon } from "@/components/ui/icons";
import { links, socials } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach Travis CSNHS on Instagram @traviscsnhs or Remind @csnhs2026. Dues are paid through the Fort Bend ISD RevTrak store.",
  alternates: { canonical: "/contact" },
};

const channels: {
  tone: Tone;
  label: string;
  value: string;
  body: string;
  href: string;
  cta: string;
}[] = [
  {
    tone: "crimson",
    label: "Instagram",
    value: links.instagramHandle,
    body: "Announcements, competition sign ups, and meeting reminders go out here first.",
    href: links.instagram,
    cta: "Open Instagram",
  },
  {
    tone: "ink",
    label: "Remind",
    value: links.remindHandle,
    body: "Text reminders for meetings and contest deadlines. Join the class from the Remind app.",
    href: links.remindHowTo,
    cta: "How to join Remind",
  },
  {
    tone: "orange",
    label: "Email",
    value: links.email,
    body: "For anything that needs a longer answer than a DM.",
    href: `mailto:${links.email}`,
    cta: "Send an email",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Find us in the group chat." lead={socials.body} />

      <Section>
        <Reveal>
          <SectionChip icon={<ChatIcon className="h-[18px] w-[18px]" />}>Socials</SectionChip>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {channels.map((channel, i) => (
            <Reveal key={channel.label} index={i}>
              <Tile tone={channel.tone} title={channel.body}>
                <p className="text-[clamp(1.6rem,3.6vw,2.1rem)] leading-tight font-bold tracking-[-0.035em] break-words">
                  {channel.value}
                </p>
                <p className="mt-3 text-[0.9375rem] font-medium opacity-80">{channel.label}</p>
              </Tile>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 flex flex-wrap gap-3">
            {channels.map((channel) => (
              <Button
                key={channel.label}
                href={channel.href}
                external={!channel.href.startsWith("mailto:")}
                variant="secondary"
              >
                {channel.cta}
              </Button>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* TODO: confirm with officers — chapter email, sponsor name, meeting room and day. */}
      <Section className="pt-0 sm:pt-0 lg:pt-0">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <div>
              <h2 className="display text-[clamp(1.9rem,4.6vw,2.8rem)]">Paying dues</h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft text-pretty">
                Dues are $20 a year and go through the Fort Bend ISD RevTrak store, under
                Travis High School, then Computer Science NHS. Officers do not take cash.
              </p>
              <div className="mt-9">
                <Button href={links.dues} external size="lg">
                  Pay on RevTrak
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal index={1}>
            <div>
              <h2 className="display text-[clamp(1.9rem,4.6vw,2.8rem)]">Where we meet</h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft text-pretty">
                Meetings run in the computer lab at Travis High School during the school
                year. Days and times are posted on Instagram and Remind before each
                meeting.
              </p>
              <div className="mt-9">
                <Button href={links.fbisd} external size="lg" variant="secondary">
                  Fort Bend ISD
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <JoinBand />
    </>
  );
}

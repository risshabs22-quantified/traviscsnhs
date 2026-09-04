import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { JoinBand } from "@/components/sections/join-band";
import {
  CardIcon,
  ChatIcon,
  ExternalIcon,
  InstagramIcon,
  MailIcon,
} from "@/components/ui/icons";
import { links, socials } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach Travis CSNHS on Instagram @traviscsnhs or Remind @csnhs2026. Dues are paid through the Fort Bend ISD RevTrak store.",
  alternates: { canonical: "/contact" },
};

const channels = [
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: links.instagramHandle,
    body: "Announcements, competition sign ups, and meeting reminders go out here first.",
    href: links.instagram,
    cta: "Open Instagram",
  },
  {
    icon: ChatIcon,
    label: "Remind",
    value: links.remindHandle,
    body: "Text reminders for meetings and contest deadlines. Join the class from the Remind app.",
    href: links.remindHowTo,
    cta: "How to join Remind",
  },
  {
    icon: MailIcon,
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
      <PageHeader
        eyebrow="Contact"
        title="Find us in the group chat."
        lead={socials.body}
      />

      <Section>
        <div className="grid gap-5 md:grid-cols-3">
          {channels.map((channel, i) => {
            const Icon = channel.icon;
            const external = !channel.href.startsWith("mailto:");
            return (
              <Reveal key={channel.label} index={i}>
                <article className="group card-surface relative flex h-full flex-col overflow-hidden rounded-[26px] p-8 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]">
                  <span
                    aria-hidden
                    className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(242,160,61,0.35),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-sand text-crimson transition-colors duration-300 group-hover:bg-crimson group-hover:text-cream">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="relative mt-8 font-mono text-[0.625rem] tracking-[0.2em] text-ink-soft uppercase">
                    {channel.label}
                  </p>
                  <p className="relative mt-2 text-xl font-extrabold tracking-[-0.025em] break-words">
                    {channel.value}
                  </p>
                  <p className="relative mt-4 flex-1 text-[0.9375rem] leading-relaxed text-ink-soft text-pretty">
                    {channel.body}
                  </p>
                  <div className="relative mt-8">
                    <Button href={channel.href} external={external} variant="secondary">
                      {channel.cta}
                      {external && <ExternalIcon className="h-4 w-4 opacity-70" />}
                    </Button>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* TODO: confirm with officers — chapter email, sponsor name, meeting room and day. */}
        <Reveal>
          <div className="mt-16 grid gap-5 lg:grid-cols-2">
            <div className="card-surface rounded-[26px] p-9">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sand text-crimson">
                <CardIcon className="h-5 w-5" />
              </span>
              <h2 className="mt-7 text-2xl font-extrabold tracking-[-0.025em]">
                Paying dues
              </h2>
              <p className="mt-4 leading-relaxed text-ink-soft text-pretty">
                Dues are $20 a year and go through the Fort Bend ISD RevTrak store, under
                Travis High School → Computer Science NHS. Officers do not take cash.
              </p>
              <div className="mt-8">
                <Button href={links.dues} external>
                  Pay on RevTrak
                  <ExternalIcon className="h-4 w-4 opacity-70" />
                </Button>
              </div>
            </div>

            <div className="rounded-[26px] bg-sand/60 p-9">
              <h2 className="text-2xl font-extrabold tracking-[-0.025em]">
                Where we meet
              </h2>
              <p className="mt-4 leading-relaxed text-ink-soft text-pretty">
                Meetings run in the computer lab at Travis High School during the school
                year. Days and times are posted on Instagram and Remind before each
                meeting.
              </p>
              <p className="mt-6 font-mono text-[0.6875rem] tracking-[0.16em] text-ink-soft uppercase">
                Travis High School / Fort Bend ISD
              </p>
              <div className="mt-8">
                <Button href={links.fbisd} external variant="secondary">
                  Fort Bend ISD
                  <ExternalIcon className="h-4 w-4 opacity-70" />
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <JoinBand />
    </>
  );
}

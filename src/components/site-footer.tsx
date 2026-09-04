import Link from "next/link";
import { LogoMark } from "@/components/logo";
import { Container } from "@/components/ui/section";
import { ExternalIcon } from "@/components/ui/icons";
import { competitions, links, site } from "@/lib/content";

type Item = { label: string; href: string; external?: boolean };

const columns: { title: string; items: Item[] }[] = [
  {
    title: "Chapter",
    items: [
      { label: "About", href: "/about" },
      { label: "Membership", href: "/membership" },
      { label: "Events", href: "/events" },
      { label: "Officers", href: "/officers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Competitions",
    items: competitions.map((c) => ({ label: c.name, href: `/events#${c.slug}` })),
  },
  {
    title: "Pay & join",
    items: [
      { label: "CSNHS dues on RevTrak", href: links.dues, external: true },
      { label: "Travis HS RevTrak store", href: links.revtrakSchool, external: true },
      { label: "Fort Bend ISD", href: links.fbisd, external: true },
    ],
  },
  {
    title: "Socials",
    items: [
      { label: `Instagram ${links.instagramHandle}`, href: links.instagram, external: true },
      { label: `Remind ${links.remindHandle}`, href: links.remindHowTo, external: true },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-8 border-t border-clay/60 bg-paper/50 pt-20 pb-12 backdrop-blur-sm">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.25fr_2.75fr]">
          <div>
            <div className="flex items-center gap-3">
              <LogoMark className="h-10 w-10" />
              <div className="leading-tight">
                <p className="text-base font-extrabold tracking-[-0.02em]">{site.name}</p>
                <p className="font-mono text-[0.625rem] tracking-[0.2em] text-ink-soft uppercase">
                  {site.chapter}
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-xs text-[0.9375rem] leading-relaxed text-ink-soft text-pretty">
              {site.longName} at {site.chapter}. Student-run. We meet through the year to
              code, compete, and tutor.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {columns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h2 className="font-mono text-[0.625rem] tracking-[0.2em] text-ink-soft uppercase">
                  {col.title}
                </h2>
                <ul className="mt-5 space-y-3">
                  {col.items.map((item) => (
                    <li key={item.label}>
                      {item.external ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="group inline-flex items-start gap-1.5 text-[0.9375rem] text-ink-soft transition-colors hover:text-crimson"
                        >
                          <span>{item.label}</span>
                          <ExternalIcon className="mt-[3px] h-3.5 w-3.5 shrink-0 opacity-45 transition-opacity group-hover:opacity-90" />
                        </a>
                      ) : (
                        <Link
                          href={item.href}
                          className="text-[0.9375rem] text-ink-soft transition-colors hover:text-crimson"
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-clay/60 pt-7 text-[0.8125rem] text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Built and run by students.
          </p>
          <p className="font-mono text-[0.6875rem] tracking-[0.14em] uppercase">
            {site.domain} / {site.year}
          </p>
        </div>
      </Container>
    </footer>
  );
}

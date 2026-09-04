import Link from "next/link";
import { LogoMark } from "@/components/logo";
import { Container } from "@/components/ui/section";
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
    title: "Contests",
    items: competitions.map((c) => ({ label: c.name, href: `/events/${c.slug}` })),
  },
  {
    title: "Join",
    items: [
      { label: "Pay dues", href: links.dues, external: true },
      { label: "Travis HS store", href: links.revtrakSchool, external: true },
      { label: "Fort Bend ISD", href: links.fbisd, external: true },
    ],
  },
  {
    title: "Socials",
    items: [
      { label: links.instagramHandle, href: links.instagram, external: true },
      { label: `Remind ${links.remindHandle}`, href: links.remindHowTo, external: true },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-8 border-t border-clay bg-paper pt-16 pb-10 sm:pt-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_2.6fr]">
          <div>
            <div className="flex items-center gap-3">
              <LogoMark className="h-9 w-9" />
              <p className="text-[1.2rem] font-extrabold tracking-[-0.04em]">{site.name}</p>
            </div>
            <p className="mt-5 max-w-xs text-[0.9375rem] leading-relaxed text-ink-soft text-pretty">
              {site.longName} at {site.chapter}. Student-run. We meet through the year to
              code, compete, and tutor.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {columns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h2 className="text-sm font-semibold text-ink">{col.title}</h2>
                <ul className="mt-4 space-y-2.5">
                  {col.items.map((item) => (
                    <li key={item.label}>
                      {item.external ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="text-[0.9375rem] text-ink-soft hover:text-crimson"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <Link
                          href={item.href}
                          className="text-[0.9375rem] text-ink-soft hover:text-crimson"
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

        <div className="mt-14 flex flex-col gap-2 border-t border-clay pt-6 text-[0.8125rem] text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Built and run by students.
          </p>
          <p>
            {site.domain} · {site.year}
          </p>
        </div>
      </Container>
    </footer>
  );
}

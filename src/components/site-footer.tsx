import Link from "next/link";
import { LogoMark } from "@/components/logo";
import { links, nav, site } from "@/lib/content";
import { school } from "@/lib/seo";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <Link href="/" aria-label="Travis CSNHS home">
            <LogoMark className="h-10 w-10" />
          </Link>
          <p style={{ margin: "0.6rem 0 0" }}>
            {site.name}
            <br />
            {school.street}
            <br />
            {school.city}, {school.region} {school.postal}
          </p>
        </div>
        <div>
          <p style={{ margin: "0 0 0.35rem", color: "var(--color-page)", fontWeight: 700 }}>Pages</p>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/site">Site map</Link>
            </li>
          </ul>
        </div>
        <div>
          <p style={{ margin: "0 0 0.35rem", color: "var(--color-page)", fontWeight: 700 }}>Contact</p>
          <ul>
            <li>
              <a href={links.instagram} target="_blank" rel="noreferrer noopener">
                {links.instagramHandle}
              </a>
            </li>
            <li>
              <a href={links.remindHowTo} target="_blank" rel="noreferrer noopener">
                Remind {links.remindHandle}
              </a>
            </li>
            <li>
              <a href={`mailto:${links.email}`}>{links.email}</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

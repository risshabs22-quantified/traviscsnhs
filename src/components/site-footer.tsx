import Link from "next/link";
import { LogoMark } from "@/components/logo";
import { links, site } from "@/lib/content";
import { school } from "@/lib/seo";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="main-content" style={{ display: "flex", alignItems: "center", gap: "1.25rem", flexWrap: "wrap" }}>
        <Link href="/" aria-label="Travis CSNHS home">
          <LogoMark className="h-14 w-14" />
        </Link>
        <p style={{ margin: 0, color: "var(--color-cream-soft)" }}>
          {site.name}
          <br />
          {school.street}, {school.city}, {school.region} {school.postal}
          <br />
          <a href={links.instagram} target="_blank" rel="noreferrer noopener">
            {links.instagramHandle}
          </a>
          {" · "}
          <a href={links.remindHowTo} target="_blank" rel="noreferrer noopener">
            Remind {links.remindHandle}
          </a>
        </p>
      </div>
    </footer>
  );
}

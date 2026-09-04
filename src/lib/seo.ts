import type { Metadata } from "next";
import type { MetadataRoute } from "next";
import { competitions, links, site, type Competition } from "@/lib/content";

/** William B. Travis High School, Fort Bend ISD. */
export const school = {
  name: "Travis High School",
  legalName: "William B. Travis High School",
  district: "Fort Bend Independent School District",
  street: "11111 Harlem Road",
  city: "Richmond",
  region: "TX",
  postal: "77406",
  country: "US",
  phone: "+1-281-634-7000",
  url: "https://www.fortbendisd.com/ths",
} as const;

export function absoluteUrl(path: string) {
  if (path === "/") return site.url;
  return `${site.url}${path}`;
}

export type SeoPage = {
  path: string;
  title: string;
  description: string;
  /** Use the title as-is, without the root template suffix. */
  absoluteTitle?: boolean;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  priority: number;
  images?: string[];
};

export const seoPages: SeoPage[] = [
  {
    path: "/",
    title: `${site.name} | ${site.longName}`,
    description: site.description,
    absoluteTitle: true,
    changeFrequency: "weekly",
    priority: 1,
    images: ["/media/hero-join.jpg", "/media/hero-contest.jpg", "/media/shirt.jpg"],
  },
  {
    path: "/about",
    title: "About",
    description:
      "The Computer Science National Honor Society chapter at Travis High School in Richmond, Texas. Student-run. Open to any grade, no prerequisites.",
    changeFrequency: "monthly",
    priority: 0.8,
    images: ["/media/hero-join.jpg"],
  },
  {
    path: "/membership",
    title: "Membership",
    description:
      "Join Travis CSNHS for $20 a year. No prerequisites, three meetings a semester, one competition. Dues go through the Fort Bend ISD RevTrak store.",
    changeFrequency: "monthly",
    priority: 0.9,
    images: ["/media/shirt.jpg"],
  },
  {
    path: "/events",
    title: "Events",
    description:
      "USACO, UIL Computer Science, the Congressional App Challenge, and Club Code Jam at Travis CSNHS. What each one is and when it runs.",
    changeFrequency: "weekly",
    priority: 0.8,
    images: ["/media/hero-contest.jpg"],
  },
  {
    path: "/officers",
    title: "Officers",
    description: `The student officers running the Travis High School Computer Science National Honor Society chapter for ${site.year}.`,
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/contact",
    title: "Contact",
    description:
      "Reach Travis CSNHS on Instagram @traviscsnhs or Remind @csnhs2026. Dues are paid through the Fort Bend ISD RevTrak store.",
    changeFrequency: "monthly",
    priority: 0.6,
  },
];

export function contestDescription(comp: Competition) {
  return `${comp.body[0]} ${comp.timing}.`;
}

export function pageMetadata(path: string): Metadata {
  const page = seoPages.find((p) => p.path === path);
  if (!page) return {};
  const url = absoluteUrl(page.path);
  const ogTitle = page.absoluteTitle ? page.title : `${page.title} | ${site.name}`;
  return {
    title: page.absoluteTitle ? { absolute: page.title } : page.title,
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: site.name,
      locale: "en_US",
      title: ogTitle,
      description: page.description,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: page.description,
    },
  };
}

export function contestMetadata(comp: Competition): Metadata {
  const path = `/events/${comp.slug}`;
  const url = absoluteUrl(path);
  const title = `${comp.name} at Travis CSNHS`;
  const description = contestDescription(comp);
  const image = absoluteUrl(comp.image);
  return {
    title: comp.name,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: site.name,
      locale: "en_US",
      title,
      description,
      images: [{ url: image, alt: comp.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function sitemapEntries(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages: MetadataRoute.Sitemap = seoPages.map((page) => ({
    url: absoluteUrl(page.path),
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
    images: page.images?.map((src) => absoluteUrl(src)),
  }));

  const contests: MetadataRoute.Sitemap = competitions.map((comp) => ({
    url: absoluteUrl(`/events/${comp.slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
    images: [absoluteUrl(comp.image)],
  }));

  return [...pages, ...contests];
}

const orgId = `${site.url}/#organization`;
const siteId = `${site.url}/#website`;

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": orgId,
    name: `${school.name} ${site.longName}`,
    alternateName: [site.name, "CSNHS", "Travis CS NHS"],
    url: site.url,
    description: site.description,
    email: links.email,
    sameAs: [links.instagram],
    image: absoluteUrl("/icon.svg"),
    address: {
      "@type": "PostalAddress",
      streetAddress: school.street,
      addressLocality: school.city,
      addressRegion: school.region,
      postalCode: school.postal,
      addressCountry: school.country,
    },
    parentOrganization: {
      "@type": "HighSchool",
      name: school.legalName,
      alternateName: school.name,
      url: school.url,
      telephone: school.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: school.street,
        addressLocality: school.city,
        addressRegion: school.region,
        postalCode: school.postal,
        addressCountry: school.country,
      },
      parentOrganization: {
        "@type": "EducationalOrganization",
        name: school.district,
        url: links.fbisd,
      },
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": siteId,
    name: site.name,
    url: site.url,
    description: site.description,
    inLanguage: "en-US",
    publisher: { "@id": orgId },
  };
}

export function webPageJsonLd(path: string) {
  const page = seoPages.find((p) => p.path === path);
  if (!page) return null;
  const url = absoluteUrl(page.path);
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: page.title,
    description: page.description,
    inLanguage: "en-US",
    isPartOf: { "@id": siteId },
    about: { "@id": orgId },
  };
}

export function contestJsonLd(comp: Competition) {
  const url = absoluteUrl(`/events/${comp.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: `${comp.name} at Travis CSNHS`,
    description: contestDescription(comp),
    inLanguage: "en-US",
    isPartOf: { "@id": siteId },
    about: { "@id": orgId },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: absoluteUrl(comp.image),
    },
  };
}

export function breadcrumbJsonLd(crumbs: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

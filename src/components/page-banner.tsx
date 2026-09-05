import { links, site } from "@/lib/content";

export function PageBanner() {
  return (
    <header className="page-header">
      <h1 className="project-name">{site.name}</h1>
      <p className="project-tagline">Computer science honor society at Travis High School</p>
      <a className="btn" href={links.dues} target="_blank" rel="noreferrer noopener">
        Pay dues
      </a>
    </header>
  );
}

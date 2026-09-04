import type { Metadata } from "next";
import Link from "next/link";
import { ErrorStage } from "@/components/error-stage";
import { Button } from "@/components/ui/button";
import { nav } from "@/lib/content";

export const metadata: Metadata = {
  title: "Page not found",
  description: "That page does not exist. Here is the rest of the site.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <ErrorStage
      code="404"
      kicker="Page not found"
      title="Nothing at this address."
      body="The link is broken, or the page moved. Everything the chapter publishes is listed below."
      image="/media/lab.jpg"
      imageAlt="An empty computer lab"
      detail={
        <nav aria-label="Site sections" className="flex flex-wrap gap-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full bg-sand px-4 py-2 text-sm font-semibold text-ink-soft transition-colors hover:bg-clay hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      }
    >
      <Button href="/" size="lg">
        Back to home
      </Button>
      <Button href="/membership" size="lg" variant="secondary">
        How to join
      </Button>
    </ErrorStage>
  );
}

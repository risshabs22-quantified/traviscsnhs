import type { Metadata } from "next";
import Link from "next/link";
import { ErrorStage } from "@/components/error-stage";
import { nav } from "@/lib/content";

export const metadata: Metadata = {
  title: "Page not found",
  description: "That page does not exist. Here is the rest of the Travis CSNHS site.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <ErrorStage
      code="404"
      kicker="Page not found"
      title="Nothing at this address."
      body="The link is broken, or the page moved. Everything the chapter publishes is listed below."
      detail={
        <p>
          {nav.map((item, i) => (
            <span key={item.href}>
              {i > 0 ? " · " : null}
              <Link href={item.href}>{item.label}</Link>
            </span>
          ))}
        </p>
      }
    >
      <p>
        <Link href="/">Back to home</Link>
        {" · "}
        <Link href="/membership">How to join</Link>
      </p>
    </ErrorStage>
  );
}

"use client";

import { useEffect } from "react";
import { ErrorStage } from "@/components/error-stage";
import { Button } from "@/components/ui/button";
import { links } from "@/lib/content";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // No analytics on this site, so the console is where a broken page shows up.
    console.error(error);
  }, [error]);

  return (
    <ErrorStage
      code="500"
      eyebrow="Something went wrong"
      title="Our end, not yours."
      body="This page hit an error while it was rendering. Try it again, and if it keeps happening let an officer know on Instagram."
      detail={
        error.digest ? (
          <p className="font-mono text-[0.6875rem] tracking-[0.14em] text-ink-soft uppercase">
            Reference {error.digest}
          </p>
        ) : null
      }
    >
      <button
        type="button"
        onClick={reset}
        className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-crimson px-8 text-base font-semibold text-cream shadow-[var(--shadow-pill)] transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-rust hover:shadow-[var(--shadow-lift)] active:translate-y-px sm:text-lg"
      >
        Try again
      </button>
      <Button href="/" size="lg" variant="secondary">
        Back to home
      </Button>
      <Button href={links.instagram} external size="lg" variant="secondary">
        Tell an officer
      </Button>
    </ErrorStage>
  );
}

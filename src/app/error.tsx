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
          <p className="tag text-ink-soft">
            Reference {error.digest}
          </p>
        ) : null
      }
    >
      <button
        type="button"
        onClick={reset}
        className="inline-flex h-14 items-center justify-center rounded-full bg-crimson px-8 text-base font-semibold text-page transition-colors duration-200 hover:bg-rust active:translate-y-px sm:text-lg"
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

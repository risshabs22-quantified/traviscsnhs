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
    console.error(error);
  }, [error]);

  return (
    <ErrorStage
      code="500"
      kicker="Something went wrong"
      title="This page failed to render."
      body="Try it again. If it keeps happening, let an officer know on Instagram."
      detail={
        error.digest ? <p className="tag text-ink-soft">Reference {error.digest}</p> : null
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

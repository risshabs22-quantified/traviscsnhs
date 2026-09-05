"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ErrorStage } from "@/components/error-stage";
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
        error.digest ? <p className="tag">Reference {error.digest}</p> : null
      }
    >
      <p>
        <button
          type="button"
          onClick={reset}
          style={{
            background: "none",
            border: 0,
            padding: 0,
            color: "var(--color-crimson)",
            font: "inherit",
            cursor: "pointer",
          }}
        >
          Try again
        </button>
        {" · "}
        <Link href="/">Back to home</Link>
        {" · "}
        <a href={links.instagram} target="_blank" rel="noreferrer noopener">
          Tell an officer
        </a>
      </p>
    </ErrorStage>
  );
}

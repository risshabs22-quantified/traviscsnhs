"use client";

/**
 * Last-resort screen: this renders when the root layout itself fails, so it
 * cannot use the layout's fonts, header, or Tailwind variables. Everything
 * here is inline and self-contained on purpose.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
          background: "#FBF2E8",
          color: "#241611",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
        }}
      >
        <main
          style={{
            width: "100%",
            maxWidth: "40rem",
            borderRadius: "28px",
            background: "#F2E4D2",
            padding: "clamp(32px, 7vw, 64px)",
          }}
        >
          <p
            style={{
              margin: 0,
              display: "inline-block",
              background: "#FFFBF5",
              borderRadius: 8,
              padding: "4px 12px",
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            Travis CSNHS
          </p>
          <p
            style={{
              margin: "20px 0 0",
              fontSize: "clamp(3.5rem, 12vw, 6rem)",
              lineHeight: 0.85,
              letterSpacing: "-0.05em",
              fontWeight: 800,
              color: "#8E2C1B",
            }}
          >
            500
          </p>
          <h1
            style={{
              margin: "20px 0 0",
              fontSize: "clamp(1.7rem, 5vw, 2.4rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              fontWeight: 800,
            }}
          >
            The site failed to load.
          </h1>
          <p
            style={{
              margin: "16px 0 0",
              maxWidth: "28rem",
              fontSize: 17,
              lineHeight: 1.6,
              color: "#6B5142",
            }}
          >
            Something broke before the page could render. Reloading usually fixes it.
          </p>
          <div
            style={{
              marginTop: 32,
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <button
              type="button"
              onClick={reset}
              style={{
                height: 52,
                padding: "0 28px",
                borderRadius: 999,
                border: "none",
                background: "#8E2C1B",
                color: "#FBF2E8",
                fontSize: 16,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Reload the site
            </button>
            <a
              href="/"
              style={{
                height: 52,
                padding: "0 28px",
                display: "inline-flex",
                alignItems: "center",
                borderRadius: 999,
                background: "#FFFBF5",
                color: "#241611",
                fontSize: 16,
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Back to home
            </a>
          </div>
          {error.digest && (
            <p
              style={{
                margin: "24px 0 0",
                fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#6B5142",
              }}
            >
              Reference {error.digest}
            </p>
          )}
        </main>
      </body>
    </html>
  );
}

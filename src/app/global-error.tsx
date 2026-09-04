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
          background:
            "radial-gradient(60rem 40rem at 80% -10%, rgba(242,160,61,0.3), transparent 62%), #FBF6EE",
          color: "#2A1710",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
        }}
      >
        <main
          style={{
            width: "100%",
            maxWidth: "40rem",
            borderRadius: "32px",
            border: "1px solid rgba(228,205,178,0.7)",
            background: "rgba(255,253,248,0.85)",
            boxShadow: "0 22px 44px -20px rgba(42,23,16,0.26)",
            padding: "clamp(32px, 7vw, 64px)",
            textAlign: "center",
          }}
        >
          <p
            style={{
              margin: 0,
              fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
              fontSize: "11px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#8E2C1B",
            }}
          >
            Travis CSNHS
          </p>
          <h1
            style={{
              margin: "24px 0 0",
              fontSize: "clamp(2rem, 7vw, 3rem)",
              lineHeight: 1.02,
              letterSpacing: "-0.035em",
              fontWeight: 800,
            }}
          >
            The site failed to load.
          </h1>
          <p
            style={{
              margin: "20px auto 0",
              maxWidth: "28rem",
              fontSize: "17px",
              lineHeight: 1.65,
              color: "#6B5142",
            }}
          >
            Something broke before the page could render. Reloading usually fixes it.
          </p>
          <div
            style={{
              marginTop: "36px",
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              justifyContent: "center",
            }}
          >
            <button
              type="button"
              onClick={reset}
              style={{
                height: "52px",
                padding: "0 30px",
                borderRadius: "999px",
                border: "none",
                background: "#8E2C1B",
                color: "#FBF6EE",
                fontSize: "16px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Reload the site
            </button>
            <a
              href="/"
              style={{
                height: "52px",
                padding: "0 30px",
                display: "inline-flex",
                alignItems: "center",
                borderRadius: "999px",
                border: "1px solid rgba(228,205,178,0.9)",
                background: "#F0E3D0",
                color: "#2A1710",
                fontSize: "16px",
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
                margin: "28px 0 0",
                fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                fontSize: "11px",
                letterSpacing: "0.14em",
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

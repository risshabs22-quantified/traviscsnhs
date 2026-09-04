import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

export const alt = `${site.name} — ${site.longName}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Social card. Same warm stage as the hero, built with the system stack. */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "76px 84px",
          background:
            "linear-gradient(150deg, #FFFCF6 0%, #FAEFDF 42%, #F1D3B2 78%, #E9B888 100%)",
          color: "#2A1710",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#8E2C1B",
          }}
        >
          <span>Travis HS CSNHS</span>
          <span>{site.year}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 138,
              fontWeight: 800,
              letterSpacing: -6,
              lineHeight: 1,
            }}
          >
            Code. Compete. Teach.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 34,
              fontSize: 34,
              color: "#6B5142",
              maxWidth: 900,
            }}
          >
            Computer Science National Honor Society at Travis High School.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 22,
            fontSize: 26,
            color: "#6B5142",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 18,
              height: 18,
              borderRadius: 999,
              background: "#E8752A",
            }}
          />
          <span>traviscsnhs.com</span>
          <span style={{ color: "#C7B29C" }}>/</span>
          <span>$20 a year · no prerequisites</span>
        </div>
      </div>
    ),
    size,
  );
}

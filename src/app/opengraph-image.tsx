import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

export const alt = `${site.name} | ${site.longName}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          padding: "72px 80px",
          background: "#241611",
          color: "#FBF2E8",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 24,
            fontWeight: 600,
            color: "#F2A03D",
          }}
        >
          <span>Travis CSNHS</span>
          <span>{site.year}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 84,
              fontWeight: 800,
              letterSpacing: -4,
              lineHeight: 0.95,
              maxWidth: 980,
            }}
          >
            Join the CS honor society
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 30,
              color: "#D9C6B4",
              maxWidth: 820,
            }}
          >
            Computer Science National Honor Society at Travis High School.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontSize: 24,
            color: "#D9C6B4",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 16,
              height: 16,
              borderRadius: 999,
              background: "#E8752A",
            }}
          />
          <span>traviscsnhs.com</span>
          <span>$20 a year, no prerequisites</span>
        </div>
      </div>
    ),
    size,
  );
}

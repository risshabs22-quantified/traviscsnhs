import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Travis CSNHS",
    short_name: "CSNHS",
    description:
      "Computer Science National Honor Society at Travis High School, Fort Bend ISD.",
    start_url: "/",
    display: "browser",
    background_color: "#FBF2E8",
    theme_color: "#241611",
    lang: "en-US",
  };
}

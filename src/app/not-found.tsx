import type { Metadata } from "next";
import { ErrorStage } from "@/components/error-stage";
import { Box, BoxGrid } from "@/components/box";
import { nav } from "@/lib/content";

export const metadata: Metadata = {
  title: "Page not found",
  description: "That page does not exist. Here is the rest of the Travis CSNHS site.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="main-content">
      <ErrorStage
        code="404"
        kicker="Page not found"
        title="Nothing at this address."
        body="The link is broken, or the page moved."
      />
      <BoxGrid>
        <Box href="/" title="Home">
          <p>Start here.</p>
        </Box>
        {nav.map((item) => (
          <Box key={item.href} href={item.href} title={item.label}>
            <p>{item.href}</p>
          </Box>
        ))}
      </BoxGrid>
    </div>
  );
}

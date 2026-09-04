import { Hero } from "@/components/hero";
import { Marquee } from "@/components/sections/marquee";
import { WhatWeAre } from "@/components/sections/what-we-are";
import { WhyJoin } from "@/components/sections/why-join";
import { Competitions } from "@/components/sections/competitions";
import { OfficersPreview } from "@/components/sections/officers-preview";
import { EventsStrip } from "@/components/sections/events-strip";
import { JoinBand } from "@/components/sections/join-band";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <WhatWeAre />
      <WhyJoin />
      <Competitions />
      <OfficersPreview />
      <EventsStrip />
      <JoinBand />
    </>
  );
}

import { Spotlight } from "@/components/spotlight";
import { competitions } from "@/lib/content";

export function ContestList() {
  return (
    <div>
      {competitions.map((comp, i) => (
        <Spotlight
          key={comp.slug}
          image={comp.image}
          alt={comp.imageAlt}
          kicker={comp.format}
          title={comp.name}
          body={comp.short}
          href={`/events/${comp.slug}`}
          flip={i % 2 === 1}
        />
      ))}
    </div>
  );
}

import { Section } from "@/components/ui/section";
import { Reveal, RevealText } from "@/components/ui/reveal";
import { SectionChip } from "@/components/ui/chip";
import { Button } from "@/components/ui/button";
import { OfficerCard } from "@/components/officer-card";
import { UsersIcon } from "@/components/ui/icons";
import { officers } from "@/lib/content";

export function OfficersPreview() {
  const featured = officers.slice(0, 4);

  return (
    <Section id="officers" className="pt-0 sm:pt-0 lg:pt-0">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <Reveal>
            <SectionChip icon={<UsersIcon className="h-[18px] w-[18px]" />}>
              Officers
            </SectionChip>
          </Reveal>
          <h2 className="display mt-8 text-[clamp(2.2rem,6vw,4.2rem)]">
            <RevealText text="Students run this chapter." delay={0.05} />
          </h2>
        </div>
        <Reveal index={3}>
          <Button href="/officers" variant="secondary">
            All {officers.length} officers
          </Button>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-x-5 gap-y-12 sm:grid-cols-2 xl:grid-cols-4">
        {featured.map((officer, i) => (
          <Reveal key={officer.name} index={i}>
            <OfficerCard officer={officer} priority={i < 2} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

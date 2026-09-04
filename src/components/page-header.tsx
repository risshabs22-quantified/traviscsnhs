import Image from "next/image";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

export function PageHeader({
  kicker,
  title,
  lead,
  children,
  image,
  imageAlt,
}: {
  kicker: string;
  title: string;
  lead?: string;
  children?: ReactNode;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section>
      {image && (
        <div className="relative h-[min(58vw,20rem)] sm:h-[min(42vw,26rem)]">
          <Image
            src={image}
            alt={imageAlt ?? ""}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      )}
      <Container className={image ? "pt-8 pb-2 sm:pt-12" : "pt-10 pb-2 sm:pt-14"}>
        <Reveal>
          <p className="badge">{kicker}</p>
        </Reveal>
        <Reveal index={1}>
          <h1 className="display mt-4 max-w-5xl text-[clamp(2.3rem,7.5vw,5.2rem)]">{title}</h1>
        </Reveal>
        {lead && (
          <Reveal index={2}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft text-pretty sm:text-xl">
              {lead}
            </p>
          </Reveal>
        )}
        {children && (
          <Reveal index={3}>
            <div className="mt-8">{children}</div>
          </Reveal>
        )}
      </Container>
    </section>
  );
}

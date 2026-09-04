import Image from "next/image";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/section";

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
        <div className="relative h-[min(48vw,16rem)] sm:h-[min(36vw,20rem)]">
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
      <Container className={image ? "pt-8 pb-2 sm:pt-10" : "pt-10 pb-2 sm:pt-12"}>
        <p className="badge">{kicker}</p>
        <h1 className="display mt-3 max-w-4xl text-[clamp(1.9rem,5vw,3.6rem)]">{title}</h1>
        {lead && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft text-pretty sm:text-lg">
            {lead}
          </p>
        )}
        {children && <div className="mt-7">{children}</div>}
      </Container>
    </section>
  );
}

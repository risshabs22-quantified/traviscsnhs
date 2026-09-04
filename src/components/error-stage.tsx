import type { ReactNode } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/section";
import { TigerFace } from "@/components/tiger";

export function ErrorStage({
  code,
  kicker,
  title,
  body,
  children,
  detail,
  image,
  imageAlt,
}: {
  code: string;
  kicker: string;
  title: string;
  body: string;
  children?: ReactNode;
  detail?: ReactNode;
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
      <Container className="py-12 sm:py-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <p className="badge">{kicker}</p>
            <p className="display mt-3 text-[clamp(3.5rem,12vw,7rem)] leading-[0.9] text-crimson">
              {code}
            </p>
            <h1 className="display mt-5 max-w-xl text-[clamp(1.5rem,3.6vw,2.2rem)]">{title}</h1>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-soft text-pretty sm:text-lg">
              {body}
            </p>
            {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
            {detail && <div className="mt-6">{detail}</div>}
          </div>
          <TigerTerminal code={code} />
        </div>
      </Container>
    </section>
  );
}

function TigerTerminal({ code }: { code: string }) {
  return (
    <div className="mx-auto w-full max-w-sm rounded-xl bg-sand p-4">
      <div className="flex items-center gap-1.5 px-2 pb-3">
        <span className="h-2.5 w-2.5 rounded-full bg-crimson" />
        <span className="h-2.5 w-2.5 rounded-full bg-orange" />
        <span className="h-2.5 w-2.5 rounded-full bg-clay" />
        <span className="tag ml-3 text-ink-soft">traviscsnhs</span>
      </div>
      <div className="rounded-xl bg-ink px-6 py-8">
        <TigerFace asleep className="mx-auto max-w-[13rem]" />
        <p className="tag mt-7 text-center text-cream-soft">
          exit code {code}
          <span className="animate-caret ml-1 inline-block h-[0.9em] w-[0.42em] translate-y-[0.1em] bg-ember align-middle" />
        </p>
      </div>
    </div>
  );
}

import type { ReactNode } from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
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
      <Container className="py-14 sm:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="badge">{kicker}</p>
            </Reveal>
            <Reveal index={1}>
              <p className="display mt-4 text-[clamp(4.5rem,16vw,9rem)] leading-[0.82] text-crimson">
                {code}
              </p>
            </Reveal>
            <Reveal index={2}>
              <h1 className="display mt-6 max-w-xl text-[clamp(1.7rem,4.4vw,2.8rem)]">
                {title}
              </h1>
            </Reveal>
            <Reveal index={3}>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-soft text-pretty">
                {body}
              </p>
            </Reveal>
            {children && (
              <Reveal index={4}>
                <div className="mt-10 flex flex-wrap gap-3">{children}</div>
              </Reveal>
            )}
            {detail && (
              <Reveal index={5}>
                <div className="mt-8">{detail}</div>
              </Reveal>
            )}
          </div>
          <Reveal index={3} y={28}>
            <TigerTerminal code={code} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function TigerTerminal({ code }: { code: string }) {
  return (
    <div className="mx-auto w-full max-w-sm rounded-[22px] bg-sand p-4 sm:rounded-[28px]">
      <div className="flex items-center gap-1.5 px-2 pb-3">
        <span className="h-2.5 w-2.5 rounded-full bg-crimson" />
        <span className="h-2.5 w-2.5 rounded-full bg-orange" />
        <span className="h-2.5 w-2.5 rounded-full bg-clay" />
        <span className="tag ml-3 text-ink-soft">traviscsnhs</span>
      </div>
      <div className="rounded-[16px] bg-ink px-6 py-8">
        <TigerFace asleep className="mx-auto max-w-[13rem]" />
        <p className="tag mt-7 text-center text-cream-soft">
          exit code {code}
          <span className="animate-caret ml-1 inline-block h-[0.9em] w-[0.42em] translate-y-[0.1em] bg-ember align-middle" />
        </p>
      </div>
    </div>
  );
}

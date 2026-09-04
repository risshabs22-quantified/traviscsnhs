import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";
import { TigerFace } from "@/components/tiger";

/**
 * Shared shell for 404 and runtime-error screens. Same flat sand card as the
 * inner page headers, so a dead end still reads as part of the site.
 */
export function ErrorStage({
  code,
  eyebrow,
  title,
  body,
  children,
  detail,
}: {
  code: string;
  eyebrow: string;
  title: string;
  body: string;
  children?: ReactNode;
  detail?: ReactNode;
}) {
  return (
    <section className="px-3 pt-24 pb-20 sm:px-6 sm:pt-28 sm:pb-28">
      <div className="overflow-hidden rounded-[24px] bg-sand px-6 py-20 sm:rounded-[32px] sm:px-12 sm:py-28 lg:px-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <p className="eyebrow">{eyebrow}</p>
            </Reveal>
            <Reveal index={1}>
              <p className="display mt-5 text-[clamp(5rem,17vw,10rem)] leading-[0.82] text-crimson">
                {code}
              </p>
            </Reveal>
            <Reveal index={2}>
              <h1 className="display mt-8 max-w-xl text-[clamp(1.7rem,4.4vw,2.7rem)]">
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
                <div className="mt-9">{detail}</div>
              </Reveal>
            )}
          </div>

          <Reveal index={3} y={28}>
            <TigerTerminal code={code} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** The chapter tiger, in a terminal window that stopped working. */
function TigerTerminal({ code }: { code: string }) {
  return (
    <div className="mx-auto w-full max-w-sm rounded-[20px] bg-paper p-4">
      <div className="flex items-center gap-1.5 px-2 pb-3">
        <span className="h-2.5 w-2.5 rounded-full bg-crimson" />
        <span className="h-2.5 w-2.5 rounded-full bg-orange" />
        <span className="h-2.5 w-2.5 rounded-full bg-clay" />
        <span className="tag ml-3 text-ink-soft">traviscsnhs</span>
      </div>

      <div className="rounded-[14px] bg-ink px-6 py-8">
        <TigerFace asleep className="mx-auto max-w-[13rem]" />
        <p className="tag mt-7 text-center text-cream-soft">
          exit code {code}
          <span className="animate-caret ml-1 inline-block h-[0.9em] w-[0.42em] translate-y-[0.1em] bg-ember align-middle" />
        </p>
      </div>
    </div>
  );
}

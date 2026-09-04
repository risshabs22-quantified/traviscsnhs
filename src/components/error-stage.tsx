import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";
import { TigerFace } from "@/components/tiger";

/**
 * Shared shell for 404 and runtime-error screens. Same rounded stage as the
 * hero so a dead end still feels like part of the site.
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
    <section className="px-3 pt-24 pb-20 sm:px-6 sm:pt-32 sm:pb-28">
      <div className="relative isolate overflow-hidden rounded-[28px] border border-clay/60 px-6 py-20 shadow-[var(--shadow-lift)] sm:rounded-[40px] sm:px-12 sm:py-28 lg:px-20">
        <div
          aria-hidden
          className="absolute inset-0 -z-20 bg-[linear-gradient(160deg,#FFFCF6_0%,#FAEFDF_44%,#F1D3B2_100%)]"
        />
        <div
          aria-hidden
          className="animate-hue-drift absolute -top-1/3 -right-1/5 -z-10 h-[120%] w-[58%] rounded-full bg-[radial-gradient(circle,rgba(242,160,61,0.5),transparent_68%)] blur-[10px]"
        />
        <div
          aria-hidden
          className="animate-drift absolute -bottom-1/2 -left-1/6 -z-10 h-[110%] w-[50%] rounded-full bg-[radial-gradient(circle,rgba(176,58,30,0.26),transparent_70%)] blur-[14px]"
        />

        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <p className="eyebrow">{eyebrow}</p>
            </Reveal>
            <Reveal index={1}>
              <p className="display mt-6 text-[clamp(5rem,18vw,11rem)] leading-[0.78] text-crimson">
                {code}
              </p>
            </Reveal>
            <Reveal index={2}>
              <h1 className="display mt-9 max-w-xl text-[clamp(1.8rem,4.6vw,2.9rem)]">
                {title}
              </h1>
            </Reveal>
            <Reveal index={3}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-soft text-pretty">
                {body}
              </p>
            </Reveal>
            {children && (
              <Reveal index={4}>
                <div className="mt-11 flex flex-wrap gap-4">{children}</div>
              </Reveal>
            )}
            {detail && (
              <Reveal index={5}>
                <div className="mt-10">{detail}</div>
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
    <div className="card-surface mx-auto w-full max-w-sm rounded-[26px] p-4">
      <div className="flex items-center gap-1.5 px-2 pb-3">
        <span className="h-2.5 w-2.5 rounded-full bg-crimson/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-orange/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-clay" />
        <span className="ml-3 font-mono text-[0.625rem] tracking-[0.16em] text-ink-soft uppercase">
          traviscsnhs
        </span>
      </div>

      <div className="rounded-[18px] bg-ink px-6 py-8">
        <TigerFace asleep className="mx-auto max-w-[13rem]" />
        <p className="mt-7 text-center font-mono text-[0.6875rem] tracking-[0.16em] text-cream/60 uppercase">
          exit code {code}
          <span className="animate-caret ml-1 inline-block h-[0.9em] w-[0.42em] translate-y-[0.1em] bg-ember align-middle" />
        </p>
      </div>
    </div>
  );
}

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * The big flat panel that replaced the old bordered mini-cards.
 *
 * Phantom's below-fold is rows of tall tiles, each one saturated flat colour
 * with a short headline at the top and a large visual filling the rest. No
 * border, no shadow, no body paragraph. This is that.
 *
 * Tones pair a fill with the only text colour that clears AA on it, so a tile
 * cannot be built with an unreadable combination:
 *   ink 17.0:1 · crimson 7.5:1 · orange 5.9:1 · ember 8.4:1 · sand 15.8:1
 */
const tones = {
  ink: "bg-ink text-page",
  crimson: "bg-crimson text-page",
  orange: "bg-orange text-ink",
  ember: "bg-ember text-ink",
  sand: "bg-sand text-ink",
  paper: "bg-paper text-ink",
} as const;

export type Tone = keyof typeof tones;

export function Tile({
  tone,
  title,
  children,
  className,
  tall = true,
}: {
  tone: Tone;
  title: ReactNode;
  /** The visual half. Large type, a mark, shapes — not a paragraph. */
  children?: ReactNode;
  className?: string;
  tall?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden rounded-[22px] p-7 sm:p-8",
        tall && "min-h-[26rem] sm:min-h-[30rem]",
        tones[tone],
        className,
      )}
    >
      <h3 className="max-w-[22ch] text-[1.3rem] leading-[1.25] font-semibold tracking-[-0.02em] text-balance sm:text-[1.45rem]">
        {title}
      </h3>
      {children && <div className="mt-auto pt-10">{children}</div>}
    </div>
  );
}

/**
 * The oversized figure at the bottom of a tile: one number or word, with a
 * short caption under it. Phantom uses a product shot here; we use the
 * chapter's own numbers, which are the most interesting thing we have.
 */
export function TileFigure({
  value,
  caption,
}: {
  value: string;
  caption: string;
}) {
  return (
    <div>
      <p className="text-[clamp(3.6rem,9vw,5.5rem)] leading-[0.85] font-bold tracking-[-0.045em]">
        {value}
      </p>
      <p className="mt-4 text-[0.9375rem] font-medium opacity-80">{caption}</p>
    </div>
  );
}

/**
 * Horizontal snap row. On wide screens three tiles fit and the fourth peeks
 * off the right edge, which is what tells you the row scrolls — same cue
 * Phantom uses.
 */
export function TileRow({ children }: { children: ReactNode }) {
  return (
    <div className="-mr-5 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 sm:-mr-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {children}
      <div aria-hidden className="w-1 shrink-0 sm:w-4" />
    </div>
  );
}

export function TileSlide({ children }: { children: ReactNode }) {
  return (
    <div className="w-[82%] shrink-0 snap-start sm:w-[52%] lg:w-[31.5%]">{children}</div>
  );
}

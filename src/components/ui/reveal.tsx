import type { CSSProperties, ElementType, ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Stagger position inside a group. 60ms each, capped at six steps. */
  index?: number;
  /** Extra delay in seconds, on top of the stagger. */
  delay?: number;
  /** Travel distance. A number is px; a string is used as-is. */
  y?: number | string;
  as?: ElementType;
  className?: string;
};

/**
 * Marks an element for fade + rise on first entry into the viewport.
 *
 * This is a server component on purpose: it ships no JavaScript and renders
 * fully visible markup. RevealObserver in the layout is what hides and then
 * animates it, and only once a script is confirmed to be running — see the
 * `.js [data-reveal]` rules in globals.css.
 */
export function Reveal({
  children,
  index = 0,
  delay = 0,
  y = 22,
  as: Tag = "div",
  className,
}: Props) {
  const style = {
    "--reveal-delay": `${delay + Math.min(index, 6) * 0.06}s`,
    "--reveal-y": typeof y === "number" ? `${y}px` : y,
  } as CSSProperties;

  return (
    <Tag data-reveal className={className} style={style}>
      {children}
    </Tag>
  );
}

/**
 * Headline reveal, one word at a time, each rising from behind a clipped edge.
 * Same progressive-enhancement contract as Reveal: with no script running the
 * words are simply words.
 *
 * Splitting on spaces keeps normal wrapping and `text-wrap: balance` working,
 * because every word is still its own inline box with real spaces between.
 */
export function RevealText({
  text,
  className,
  delay = 0,
  step = 0.045,
}: {
  text: string;
  className?: string;
  delay?: number;
  /** Seconds between words. */
  step?: number;
}) {
  const words = text.split(" ");

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`}>
          <span className="inline-block overflow-hidden pb-[0.09em] align-bottom">
            <span
              data-reveal="mask"
              className="inline-block"
              style={
                {
                  "--reveal-delay": `${delay + i * step}s`,
                  "--reveal-y": "110%",
                } as CSSProperties
              }
            >
              {word}
            </span>
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </span>
  );
}

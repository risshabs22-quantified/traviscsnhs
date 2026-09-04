import type { CSSProperties, ElementType, ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Stagger position inside a group. 60ms each, capped at six steps. */
  index?: number;
  /** Extra delay in seconds, on top of the stagger. */
  delay?: number;
  /** Travel distance in px. */
  y?: number;
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
    "--reveal-y": `${y}px`,
  } as CSSProperties;

  return (
    <Tag data-reveal className={className} style={style}>
      {children}
    </Tag>
  );
}

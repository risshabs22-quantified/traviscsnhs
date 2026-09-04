"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { hero, links } from "@/lib/content";

/**
 * Flat dark stage on a flat pale page, the way Phantom does it: one solid
 * fill, an oversized mark behind the type, and small solid discs drifting
 * around it. No gradient, no blur, no shadow anywhere in here.
 *
 * The entrance is pure CSS with `animation-fill-mode: backwards`, so the
 * headline's resting state is "visible" and it renders correctly even if this
 * component never hydrates. JavaScript only adds pointer parallax.
 */
export function Hero() {
  const stage = useRef<HTMLDivElement>(null);

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 60, damping: 22, mass: 0.6 });
  const sy = useSpring(py, { stiffness: 60, damping: 22, mass: 0.6 });

  useEffect(() => {
    const el = stage.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Parallax is a nicety for mice, not something to fake on touch.
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      px.set((e.clientX - r.left) / r.width - 0.5);
      py.set((e.clientY - r.top) / r.height - 0.5);
    };
    const onLeave = () => {
      px.set(0);
      py.set(0);
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [px, py]);

  return (
    <section className="px-3 pt-24 sm:px-6 sm:pt-28" aria-labelledby="hero-title">
      <div
        ref={stage}
        className="relative isolate overflow-hidden rounded-[24px] bg-ink sm:rounded-[32px]"
      >
        <Watermark />
        <Discs sx={sx} sy={sy} />

        <div className="relative z-10 flex flex-col items-center px-5 py-28 text-center sm:px-8 sm:py-36 lg:py-44">
          <p
            className="eyebrow-dark rise max-w-md text-[0.9375rem] sm:max-w-none sm:text-base"
            style={rise(0)}
          >
            {hero.eyebrow}
          </p>

          <h1
            id="hero-title"
            className="display mt-6 text-[clamp(3rem,11.5vw,7.5rem)] text-paper"
          >
            {hero.headline.map((word, i) => (
              <span key={word} className="block overflow-hidden pb-[0.05em]">
                <span className="rise-mask" style={rise(0.1 + i * 0.09)}>
                  {word}
                </span>
              </span>
            ))}
          </h1>

          <div className="rise mt-12" style={rise(0.46, 14)}>
            <Button href={links.dues} external size="lg" variant="onDark">
              {hero.primaryCta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function rise(delay: number, distance = 18): CSSProperties {
  return { "--rise-delay": `${delay}s`, "--rise": `${distance}px` } as CSSProperties;
}

function float(duration: number, distance: number, delay = 0): CSSProperties {
  return {
    "--float-dur": `${duration}s`,
    "--float-dist": `${distance}px`,
    "--float-delay": `${delay}s`,
  } as CSSProperties;
}

/* ------------------------------------------------------------------ */

/**
 * Oversized chapter mark behind the headline, in one flat tone barely
 * lighter than the stage. Phantom does this with their ghost.
 */
function Watermark() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 128 112"
      preserveAspectRatio="xMidYMid meet"
      className="pointer-events-none absolute top-1/2 left-1/2 z-0 h-[86%] w-auto -translate-x-1/2 -translate-y-1/2"
      fill="var(--color-ink-mid)"
    >
      <path d="M34 50 26 18 58 34Z" />
      <path d="M94 50 102 18 70 34Z" />
      <ellipse cx="64" cy="62" rx="36" ry="33" />
    </svg>
  );
}

/**
 * Solid discs in the palette, drifting. Flat fills, no glow, no blur.
 * On narrow screens only the two corner discs survive, pushed clear of the
 * centre column so they never crowd the eyebrow or the headline.
 */
const DISCS = [
  { c: "bg-orange", s: "h-14 w-14 sm:h-16 sm:w-16 lg:h-24 lg:w-24", p: "top-[4%] left-[5%] sm:top-[14%] sm:left-[8%]", d: 9, t: 16, w: 0, mobile: true },
  { c: "bg-ember", s: "h-10 w-10 lg:h-14 lg:w-14", p: "top-[31%] left-[19%]", d: 11, t: 22, w: 0.5, mobile: false },
  { c: "bg-crimson", s: "h-16 w-16 sm:h-20 sm:w-20 lg:h-28 lg:w-28", p: "top-[3%] right-[5%] sm:top-[11%] sm:right-[9%]", d: 12, t: 20, w: 0.3, mobile: true },
  { c: "bg-sand", s: "h-8 w-8 lg:h-12 lg:w-12", p: "top-[35%] right-[20%]", d: 10, t: 14, w: 1.1, mobile: false },
  { c: "bg-rust", s: "h-12 w-12 sm:h-14 sm:w-14 lg:h-20 lg:w-20", p: "bottom-[4%] left-[7%] sm:bottom-[15%] sm:left-[13%]", d: 13, t: 18, w: 0.8, mobile: true },
  { c: "bg-ember", s: "h-9 w-9 lg:h-12 lg:w-12", p: "bottom-[28%] left-[27%]", d: 9, t: 12, w: 1.5, mobile: false },
  { c: "bg-orange", s: "h-10 w-10 sm:h-12 sm:w-12 lg:h-16 lg:w-16", p: "bottom-[3%] right-[7%] sm:bottom-[13%] sm:right-[14%]", d: 11, t: 20, w: 0.2, mobile: true },
  { c: "bg-clay", s: "h-7 w-7 lg:h-10 lg:w-10", p: "bottom-[30%] right-[27%]", d: 14, t: 16, w: 1.3, mobile: false },
] as const;

function Discs({
  sx,
  sy,
}: {
  sx: ReturnType<typeof useSpring>;
  sy: ReturnType<typeof useSpring>;
}) {
  // Two depths so the field separates into layers under the pointer.
  const near = { x: useTransform(sx, (v) => v * 54), y: useTransform(sy, (v) => v * 54) };
  const far = { x: useTransform(sx, (v) => v * -30), y: useTransform(sy, (v) => v * -30) };

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
      {DISCS.map((disc, i) => {
        const depth = i % 2 === 0 ? near : far;
        return (
          <motion.div
            key={disc.p}
            style={{ x: depth.x, y: depth.y }}
            className={`absolute ${disc.p} ${disc.mobile ? "" : "hidden sm:block"}`}
          >
            <div
              className={`float rounded-full ${disc.c} ${disc.s}`}
              style={float(disc.d, disc.t, disc.w)}
            />
          </motion.div>
        );
      })}
    </div>
  );
}

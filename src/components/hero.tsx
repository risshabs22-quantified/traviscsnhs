"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowIcon } from "@/components/ui/icons";
import { hero, links } from "@/lib/content";

/**
 * The entrance is pure CSS with `animation-fill-mode: backwards`, so the
 * headline's resting state is "visible" and it renders correctly even if this
 * component never hydrates. JavaScript here only adds pointer parallax.
 */
export function Hero() {
  const stage = useRef<HTMLDivElement>(null);

  // Pointer position across the stage, normalised to -0.5..0.5.
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
    <section className="px-3 pt-24 sm:px-6 sm:pt-32 lg:pt-36" aria-labelledby="hero-title">
      <div
        ref={stage}
        className="relative isolate overflow-hidden rounded-[28px] border border-clay/60 shadow-[var(--shadow-lift)] sm:rounded-[38px] lg:rounded-[44px]"
      >
        {/* --- ambient background --------------------------------------- */}
        <div
          aria-hidden
          className="absolute inset-0 -z-30 bg-[linear-gradient(168deg,#FFFCF6_0%,#FAEFDF_38%,#F4DCC0_72%,#EFCBA6_100%)]"
        />
        <div
          aria-hidden
          className="animate-hue-drift absolute -top-1/3 -right-1/4 -z-20 h-[95%] w-[85%] rounded-full bg-[radial-gradient(circle_at_center,rgba(242,160,61,0.72),rgba(232,117,42,0.28)_46%,transparent_70%)] blur-[10px]"
        />
        <div
          aria-hidden
          className="animate-drift absolute -bottom-1/3 -left-1/5 -z-20 h-[85%] w-[75%] rounded-full bg-[radial-gradient(circle_at_center,rgba(176,58,30,0.34),rgba(142,44,27,0.12)_50%,transparent_72%)] blur-[14px]"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-[0.07] mix-blend-multiply"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        <FloatingShapes sx={sx} sy={sy} />

        {/* --- content --------------------------------------------------- */}
        <div className="relative z-10 flex flex-col items-center px-5 py-24 text-center sm:px-8 sm:py-28 lg:py-32">
          <p className="eyebrow rise" style={rise(0)}>
            {hero.eyebrow}
          </p>

          <h1
            id="hero-title"
            className="display mt-7 text-[clamp(3.1rem,13vw,8.5rem)] text-ink"
          >
            {hero.headline.map((word, i) => (
              <span key={word} className="block overflow-hidden pb-[0.06em]">
                <span className="rise-mask" style={rise(0.1 + i * 0.09)}>
                  {word}
                </span>
              </span>
            ))}
          </h1>

          <p
            className="rise mt-8 max-w-[38rem] text-lg leading-relaxed text-ink-soft text-pretty sm:text-xl"
            style={rise(0.42, 14)}
          >
            {hero.sub}
          </p>

          <div
            className="rise mt-11 flex flex-col items-center gap-5 sm:flex-row sm:gap-7"
            style={rise(0.52, 14)}
          >
            <Button href={links.dues} external size="lg">
              {hero.primaryCta.label}
              <ArrowIcon className="h-[18px] w-[18px] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1" />
            </Button>
            <Button href={hero.secondaryCta.href} variant="quiet">
              {hero.secondaryCta.label}
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

function FloatingShapes({
  sx,
  sy,
}: {
  sx: ReturnType<typeof useSpring>;
  sy: ReturnType<typeof useSpring>;
}) {
  // Each shape gets its own parallax depth so the layers separate.
  const ax = useTransform(sx, (v) => v * 46);
  const ay = useTransform(sy, (v) => v * 46);
  const bx = useTransform(sx, (v) => v * -34);
  const by = useTransform(sy, (v) => v * -34);
  const cx = useTransform(sx, (v) => v * 64);
  const cy = useTransform(sy, (v) => v * 64);
  const dx = useTransform(sx, (v) => v * -52);
  const dy = useTransform(sy, (v) => v * -52);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* prompt chip — a terminal caret, our nod to the deck's mono labels */}
      <motion.div
        style={{ x: ax, y: ay }}
        className="absolute top-[13%] left-[6%] hidden sm:block"
      >
        <div
          className="float flex h-16 w-16 items-center justify-center rounded-[20px] border border-clay/70 bg-paper/70 shadow-[var(--shadow-soft)] backdrop-blur-md lg:h-20 lg:w-20"
          style={float(9, 16)}
        >
          <span className="font-mono text-xl font-bold text-crimson lg:text-2xl">
            &gt;
            <span className="animate-caret ml-0.5 inline-block h-[0.9em] w-[0.42em] translate-y-[0.08em] bg-orange align-middle" />
          </span>
        </div>
      </motion.div>

      {/* soft orb */}
      <motion.div
        style={{ x: bx, y: by }}
        className="absolute top-[8%] right-[7%] hidden md:block"
      >
        <div
          className="float h-24 w-24 rounded-full bg-[radial-gradient(circle_at_32%_28%,#FFE6C4,#F2A03D_46%,#C2551F_100%)] opacity-90 shadow-[var(--shadow-lift)] lg:h-32 lg:w-32"
          style={float(11, 22, 0.4)}
        />
      </motion.div>

      {/* rounded slab, tilted */}
      <motion.div
        style={{ x: cx, y: cy }}
        className="absolute bottom-[14%] left-[9%] hidden lg:block"
      >
        <div
          className="float h-14 w-36 -rotate-[14deg] rounded-full border border-clay/60 bg-sand/70 shadow-[var(--shadow-soft)] backdrop-blur-sm"
          style={float(13, 18, 0.9)}
        />
      </motion.div>

      {/* three-node graph — abstract, no logos */}
      <motion.div
        style={{ x: dx, y: dy }}
        className="absolute right-[9%] bottom-[13%] hidden md:block"
      >
        <div className="float" style={float(10, 20, 1.3)}>
          <svg width="112" height="98" viewBox="0 0 112 98" className="opacity-80">
            <g stroke="var(--color-rust)" strokeWidth="2.4" strokeLinecap="round" opacity="0.55">
              <path d="M22 78 56 20" />
              <path d="M56 20 92 70" />
              <path d="M22 78 92 70" />
            </g>
            <circle cx="56" cy="20" r="11" fill="var(--color-crimson)" />
            <circle cx="22" cy="78" r="9" fill="var(--color-orange)" />
            <circle cx="92" cy="70" r="9" fill="var(--color-ember)" />
          </svg>
        </div>
      </motion.div>

      {/* tiger-stripe arcs, bottom edge */}
      <svg
        className="absolute inset-x-0 bottom-0 h-28 w-full opacity-[0.16]"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <g fill="none" stroke="var(--color-rust)" strokeWidth="7" strokeLinecap="round">
          <path d="M-20 118C120 92 200 44 268 6" />
          <path d="M78 122C218 96 298 48 366 10" />
          <path d="M880 12c62 40 138 88 274 112" />
          <path d="M968 4c62 40 138 88 274 112" />
        </g>
      </svg>
    </div>
  );
}

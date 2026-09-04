"use client";

import { useEffect } from "react";

/**
 * One document-level pointer listener drives the warm highlight inside every
 * [data-glow] card, instead of a listener per card. Reads are batched into a
 * single rAF so a fast mouse cannot thrash layout.
 *
 * Purely decorative: it adds a gradient behind card content and never moves,
 * hides, or resizes anything.
 */
export function PointerGlow() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let active: HTMLElement | null = null;
    let frame = 0;
    let clientX = 0;
    let clientY = 0;

    const paint = () => {
      frame = 0;
      if (!active) return;
      const box = active.getBoundingClientRect();
      active.style.setProperty("--glow-x", `${clientX - box.left}px`);
      active.style.setProperty("--glow-y", `${clientY - box.top}px`);
    };

    const clear = (el: HTMLElement | null) => {
      if (!el) return;
      el.removeAttribute("data-glow-on");
      el.style.removeProperty("--glow-x");
      el.style.removeProperty("--glow-y");
    };

    const onMove = (event: PointerEvent) => {
      const target =
        (event.target as HTMLElement | null)?.closest<HTMLElement>("[data-glow]") ??
        null;

      if (target !== active) {
        clear(active);
        active = target;
        if (active) active.setAttribute("data-glow-on", "");
      }
      if (!active) return;

      clientX = event.clientX;
      clientY = event.clientY;
      if (!frame) frame = requestAnimationFrame(paint);
    };

    const onLeave = () => {
      clear(active);
      active = null;
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    window.addEventListener("blur", onLeave);

    return () => {
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("blur", onLeave);
      if (frame) cancelAnimationFrame(frame);
      clear(active);
    };
  }, []);

  return null;
}

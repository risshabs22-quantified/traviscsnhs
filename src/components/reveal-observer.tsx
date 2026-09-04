"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * One IntersectionObserver for every [data-reveal] on the page, instead of a
 * hook per element. Re-scans after each navigation because App Router swaps
 * the tree without remounting the layout.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-revealed])"),
    );
    if (nodes.length === 0) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.setAttribute("data-revealed", ""));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-revealed", "");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "-8% 0px -6% 0px", threshold: 0.01 },
    );

    nodes.forEach((node) => observer.observe(node));

    // Safety net: anything still hidden after a beat gets shown anyway, so a
    // layout quirk can never leave content permanently invisible.
    const failsafe = window.setTimeout(() => {
      document
        .querySelectorAll<HTMLElement>("[data-reveal]:not([data-revealed])")
        .forEach((node) => {
          const box = node.getBoundingClientRect();
          if (box.top < window.innerHeight && box.bottom > 0) {
            node.setAttribute("data-revealed", "");
          }
        });
    }, 1200);

    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
  }, [pathname]);

  return null;
}

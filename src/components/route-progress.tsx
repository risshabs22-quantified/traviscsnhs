"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

type Phase = "idle" | "loading" | "done";

/**
 * Top-of-page loader bar. Starts when an internal link is clicked, creeps
 * toward 90% while the next route resolves, then snaps to 100% and fades
 * once the pathname actually changes.
 */
export function RouteProgress() {
  const pathname = usePathname();
  const [phase, setPhase] = useState<Phase>("idle");
  const [value, setValue] = useState(0);
  const creep = useRef<ReturnType<typeof setInterval> | null>(null);
  const settle = useRef<ReturnType<typeof setTimeout> | null>(null);
  const firstRender = useRef(true);

  const stopCreep = () => {
    if (creep.current) clearInterval(creep.current);
    creep.current = null;
  };

  const start = useCallback(() => {
    if (creep.current) return;
    if (settle.current) clearTimeout(settle.current);
    setPhase("loading");
    setValue(8);
    creep.current = setInterval(() => {
      // Decelerating creep: fast to 60, crawls after, never reaches 100.
      setValue((v) => (v >= 90 ? v : v + Math.max(0.6, (92 - v) / 14)));
    }, 90);
  }, []);

  const finish = useCallback(() => {
    stopCreep();
    setValue(100);
    setPhase("done");
    settle.current = setTimeout(() => {
      setPhase("idle");
      setValue(0);
    }, 380);
  }, []);

  // Any click on an internal link that actually changes the route starts the bar.
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const anchor = (event.target as HTMLElement | null)?.closest("a");
      if (!anchor) return;
      if (anchor.target && anchor.target !== "_self") return;
      if (anchor.hasAttribute("download")) return;

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:")) return;

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname) return;

      start();
    };

    document.addEventListener("click", onClick, { capture: true });
    window.addEventListener("popstate", start);
    return () => {
      document.removeEventListener("click", onClick, { capture: true });
      window.removeEventListener("popstate", start);
    };
  }, [start]);

  // Pathname settled: the new route is on screen.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    finish();
  }, [pathname, finish]);

  useEffect(
    () => () => {
      stopCreep();
      if (settle.current) clearTimeout(settle.current);
    },
    [],
  );

  const visible = phase !== "idle";

  return (
    <div
      aria-hidden={!visible}
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px]"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 260ms ease" }}
    >
      <div
        role="progressbar"
        aria-label="Loading page"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(value)}
        className="h-full origin-left rounded-r-full bg-[linear-gradient(90deg,var(--color-crimson),var(--color-orange),var(--color-ember))]"
        style={{
          width: `${value}%`,
          transition: phase === "done" ? "width 200ms ease-out" : "width 180ms linear",
          boxShadow: "0 0 12px color-mix(in oklab, var(--color-orange) 60%, transparent)",
        }}
      />
    </div>
  );
}

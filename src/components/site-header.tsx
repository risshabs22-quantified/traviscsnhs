"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { InstagramIcon } from "@/components/ui/icons";
import { links, nav } from "@/lib/content";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the sheet on navigation and lock the page behind it.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <a
        href="#main"
        className="sr-only rounded-full bg-crimson px-5 py-3 text-cream focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[70]"
      >
        Skip to content
      </a>

      <header className="fixed inset-x-0 top-0 z-50 pt-3 sm:pt-5">
        <div className="mx-auto flex w-full max-w-[80rem] items-center justify-between gap-4 px-4 sm:px-7">
          <Logo />

          {/* Center capsule. Frosts and lifts once the page moves. */}
          <nav
            aria-label="Primary"
            className={cn(
              "pointer-events-auto absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full p-1.5 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] lg:flex",
              scrolled
                ? "border border-clay/70 bg-paper/80 shadow-[var(--shadow-pill)] backdrop-blur-xl"
                : "border border-clay/45 bg-sand/55 shadow-[var(--shadow-soft)] backdrop-blur-md",
            )}
          >
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-[0.875rem] font-semibold transition-colors duration-200",
                    active ? "text-cream" : "text-ink-soft hover:text-ink",
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-crimson"
                      transition={
                        reduced
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 420, damping: 34 }
                      }
                    />
                  )}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-2.5">
            <a
              href={links.instagram}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`Travis CSNHS on Instagram, ${links.instagramHandle}`}
              className="hidden h-11 w-11 items-center justify-center rounded-full border border-clay/60 bg-paper/75 text-ink shadow-[var(--shadow-soft)] backdrop-blur-md transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-paper hover:text-crimson hover:shadow-[var(--shadow-lift)] sm:inline-flex"
            >
              <InstagramIcon className="h-[18px] w-[18px]" />
            </a>

            {/* The dues CTA stays visible at every width — it is the one thing
                every visitor is here to do. Note that `hidden` would not work
                on Button anyway: its base class already sets a display. */}
            <Button href={links.dues} external className="px-4 sm:px-5">
              Pay dues
            </Button>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-clay/60 bg-paper/80 shadow-[var(--shadow-soft)] backdrop-blur-md transition-colors hover:bg-paper lg:hidden"
            >
              <span className="relative block h-3.5 w-[18px]">
                <span
                  className={cn(
                    "absolute left-0 h-[2px] w-full rounded-full bg-ink transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    open ? "top-[6px] rotate-45" : "top-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-[6px] h-[2px] w-full rounded-full bg-ink transition-all duration-200",
                    open && "scale-x-0 opacity-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 h-[2px] w-full rounded-full bg-ink transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    open ? "top-[6px] -rotate-45" : "top-[12px]",
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="absolute inset-0 h-full w-full bg-ink/25 backdrop-blur-sm"
            />
            <motion.div
              className="absolute inset-x-3 top-[4.75rem] rounded-[30px] border border-clay/70 bg-paper/95 p-4 shadow-[var(--shadow-lift)] backdrop-blur-xl"
              initial={reduced ? false : { y: -14, opacity: 0, scale: 0.985 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={reduced ? { opacity: 0 } : { y: -10, opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <nav aria-label="Mobile" className="flex flex-col">
                {nav.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={reduced ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 + i * 0.04, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center justify-between rounded-2xl px-4 py-3.5 text-lg font-bold tracking-[-0.02em] transition-colors",
                        pathname === item.href
                          ? "bg-sand text-crimson"
                          : "text-ink hover:bg-sand/60",
                      )}
                    >
                      {item.label}
                      <span className="font-mono text-[0.6875rem] text-ink-soft">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-3 flex flex-col gap-2 border-t border-clay/60 pt-4">
                <Button href={links.dues} external size="lg" className="w-full">
                  Pay dues on RevTrak
                </Button>
                <Button href={links.instagram} external variant="secondary" className="w-full">
                  <InstagramIcon className="h-4 w-4" />
                  {links.instagramHandle}
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

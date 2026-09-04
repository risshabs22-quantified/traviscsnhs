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
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();

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
        className="sr-only rounded-full bg-crimson px-5 py-3 text-page focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[70]"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-50 border-b border-clay bg-page">
        <div className="relative mx-auto flex h-[68px] w-full max-w-[92rem] items-center justify-between px-4 sm:h-[76px] sm:px-6 lg:px-10">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex items-center gap-2.5 rounded-full px-1 py-2 text-[0.95rem] font-semibold"
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
                  "absolute top-[6px] left-0 h-[2px] w-full rounded-full bg-ink transition-all duration-200",
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
            <span className="hidden sm:inline">Menu</span>
          </button>

          <Logo className="absolute left-1/2 -translate-x-1/2" compact />

          <Button href={links.dues} external className="px-5">
            Join
          </Button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="site-menu"
            className="fixed inset-0 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="absolute inset-0 h-full w-full bg-ink"
            />
            <motion.nav
              aria-label="Site"
              className="absolute inset-y-0 left-0 flex w-[min(100%,28rem)] flex-col bg-page px-7 pt-[5.5rem] pb-10 sm:px-10"
              initial={reduced ? false : { x: -24 }}
              animate={{ x: 0 }}
              exit={reduced ? { opacity: 0 } : { x: -24 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <ul className="flex flex-col">
                {nav.map((item, i) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block py-3 text-[2.1rem] leading-none font-extrabold tracking-[-0.04em] sm:text-[2.6rem]",
                        pathname === item.href ? "text-crimson" : "text-ink hover:text-crimson",
                      )}
                      style={
                        reduced
                          ? undefined
                          : { animation: `page-in 0.4s cubic-bezier(0.22,1,0.36,1) ${0.04 + i * 0.04}s backwards` }
                      }
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-col gap-3 pt-10">
                <Button href={links.dues} external size="lg" className="w-full">
                  Pay dues on RevTrak
                </Button>
                <Button href={links.instagram} external variant="secondary" size="lg" className="w-full">
                  <InstagramIcon className="h-4 w-4" />
                  {links.instagramHandle}
                </Button>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

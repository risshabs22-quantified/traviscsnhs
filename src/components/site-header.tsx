"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { InstagramIcon } from "@/components/ui/icons";
import { links, nav } from "@/lib/content";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

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
        <div className="relative mx-auto flex h-16 w-full max-w-[92rem] items-center justify-between px-4 sm:h-[72px] sm:px-6 lg:px-10">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex items-center gap-2.5 px-1 py-2 text-[0.95rem] font-semibold"
          >
            <span className="relative block h-3.5 w-[18px]">
              <span
                className={cn(
                  "absolute left-0 h-[2px] w-full bg-ink",
                  open ? "top-[6px] rotate-45" : "top-0",
                )}
              />
              <span
                className={cn(
                  "absolute top-[6px] left-0 h-[2px] w-full bg-ink",
                  open && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 h-[2px] w-full bg-ink",
                  open ? "top-[6px] -rotate-45" : "top-[12px]",
                )}
              />
            </span>
            <span className="hidden sm:inline">{open ? "Close" : "Menu"}</span>
          </button>

          <Logo className="absolute left-1/2 -translate-x-1/2" compact />

          <Button href={links.dues} external className="px-5">
            Join
          </Button>
        </div>
      </header>

      {open && (
        <div id="site-menu" className="fixed inset-0 z-40">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 h-full w-full bg-ink"
          />
          <nav
            aria-label="Site"
            className="absolute inset-y-0 left-0 flex w-[min(100%,22rem)] flex-col bg-page px-6 pt-20 pb-8 sm:px-8"
          >
            <ul className="flex flex-col gap-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block py-2.5 text-[1.5rem] font-semibold tracking-[-0.02em] sm:text-[1.65rem]",
                      pathname === item.href ? "text-crimson" : "text-ink hover:text-crimson",
                    )}
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
          </nav>
        </div>
      )}
    </>
  );
}

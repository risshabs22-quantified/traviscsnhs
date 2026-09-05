"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/content";

const items = [{ href: "/", label: "Home" }, ...nav];

export function SiteNav() {
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

  const current = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <button
        type="button"
        className="fixed top-3 left-3 z-50 bg-ink px-2 py-1 text-page md:hidden"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        <span className="text-sm font-bold tracking-wide">
          {open ? "Close" : "Menu"}
        </span>
      </button>

      <nav className="site-nav hidden md:block" aria-label="Primary">
        <ul className="menu-list">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="menu-link"
                aria-current={current(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <div id="mobile-nav" className="overlay md:hidden">
          <button
            type="button"
            className="absolute top-4 right-4 text-base font-bold text-ink"
            onClick={() => setOpen(false)}
          >
            Close
          </button>
          <nav aria-label="Mobile">
            <ul>
              {items.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} aria-current={current(item.href) ? "page" : undefined}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}

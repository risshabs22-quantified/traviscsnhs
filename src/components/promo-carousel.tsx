"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { slides } from "@/lib/content";
import { cn } from "@/lib/cn";

export function PromoCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = slides[index];

  const go = useCallback((n: number) => {
    setIndex((n + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || paused) return;
    const id = window.setInterval(() => go(index + 1), 7000);
    return () => window.clearInterval(id);
  }, [index, paused, go]);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Highlights"
      className="relative bg-ink"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative h-[min(72vw,20rem)] sm:h-[min(50vw,28rem)] lg:h-[min(42vw,32rem)]">
        {slides.map((s, i) => (
          <Image
            key={s.image}
            src={s.image}
            alt={i === index ? s.alt : ""}
            fill
            priority={i === 0}
            sizes="100vw"
            className={cn(
              "object-cover object-center",
              i === index ? "opacity-100" : "opacity-0",
            )}
          />
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-end">
        <div className="pointer-events-auto m-3 w-full max-w-lg rounded-xl bg-ink p-5 sm:m-6 sm:p-8 lg:m-8">
          <p className="badge-dark badge">{slide.kicker}</p>
          <h1 className="display mt-3 text-[clamp(1.6rem,4.2vw,2.8rem)] text-page">
            {slide.title}
          </h1>
          <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-cream-soft sm:text-base">
            {slide.body}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-5">
            <Button href={slide.cta.href} external={slide.cta.external} variant="onDark">
              {slide.cta.label}
            </Button>
            <div className="flex gap-2" role="tablist" aria-label="Slides">
              {slides.map((s, i) => (
                <button
                  key={s.title}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Show: ${s.title}`}
                  onClick={() => go(i)}
                  className={cn(
                    "h-2 w-2 rounded-full",
                    i === index ? "bg-orange" : "bg-ink-mid hover:bg-cream-soft",
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

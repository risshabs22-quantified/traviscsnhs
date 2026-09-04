import { competitions } from "@/lib/content";

const words = [
  "No prerequisites",
  "Any grade level",
  ...competitions.map((c) => c.name),
  "Tutoring",
  "Practice sessions",
  "Beginners welcome",
];

/**
 * Slow ticker under the hero. Duplicated once so the CSS translate
 * of -50% loops seamlessly. Hidden from screen readers — the same
 * facts appear as real text further down the page.
 */
export function Marquee() {
  return (
    <div
      aria-hidden
      className="mask-fade-x relative mt-6 overflow-hidden border-y border-clay/50 py-5 sm:mt-10"
    >
      <div className="animate-marquee flex w-max items-center gap-10 sm:gap-14">
        {[0, 1].map((pass) => (
          <div key={pass} className="flex items-center gap-10 sm:gap-14">
            {words.map((word) => (
              <span key={word} className="flex items-center gap-10 sm:gap-14">
                <span className="font-mono text-[0.6875rem] tracking-[0.22em] whitespace-nowrap text-ink-soft uppercase sm:text-xs">
                  {word}
                </span>
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-orange/70" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

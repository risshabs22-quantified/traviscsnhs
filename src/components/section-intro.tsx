import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/cn";

export function SectionIntro({
  kicker,
  title,
  body,
  className,
  size = "lg",
}: {
  kicker?: string;
  title: ReactNode;
  body?: ReactNode;
  className?: string;
  size?: "lg" | "md";
}) {
  return (
    <div className={cn("max-w-4xl", className)}>
      {kicker && (
        <Reveal>
          <p className="badge">{kicker}</p>
        </Reveal>
      )}
      <Reveal index={1}>
        <h2
          className={cn(
            "display mt-4",
            size === "lg"
              ? "text-[clamp(2.4rem,7.4vw,5.4rem)]"
              : "text-[clamp(1.8rem,4.2vw,2.8rem)]",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {body && (
        <Reveal index={2}>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft text-pretty sm:mt-5 sm:text-lg">
            {body}
          </p>
        </Reveal>
      )}
    </div>
  );
}

import type { ReactNode } from "react";
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
    <div className={cn("max-w-3xl", className)}>
      {kicker && <p className="badge">{kicker}</p>}
      <h2
        className={cn(
          "display mt-3",
          size === "lg"
            ? "text-[clamp(1.9rem,4.8vw,3.4rem)]"
            : "text-[clamp(1.5rem,3.2vw,2.2rem)]",
        )}
      >
        {title}
      </h2>
      {body && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft text-pretty sm:text-lg">
          {body}
        </p>
      )}
    </div>
  );
}

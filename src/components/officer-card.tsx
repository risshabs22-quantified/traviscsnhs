import Image from "next/image";
import type { Officer } from "@/lib/content";
import { cn } from "@/lib/cn";

/**
 * Photo, then name. No card box around it — the portrait is the object, and
 * wrapping it in a bordered panel was the thing that made the grid read as
 * a template.
 */
export function OfficerCard({
  officer,
  priority,
  className,
}: {
  officer: Officer;
  priority?: boolean;
  className?: string;
}) {
  return (
    <article className={cn("group", className)}>
      <div className="relative aspect-[4/5] overflow-hidden rounded-[18px] bg-sand">
        {officer.photo ? (
          <Image
            src={officer.photo}
            alt={`${officer.name}, ${officer.role}`}
            fill
            sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 80vw"
            priority={priority}
            className="object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
            style={{ objectPosition: officer.focus ?? "50% 25%" }}
          />
        ) : (
          // The deck had no photo for this officer, so nothing goes here.
          // An empty frame is honest; initials or a stock avatar would not be.
          <div className="h-full w-full bg-clay" />
        )}
      </div>

      <p className="mt-5 text-[1.15rem] font-semibold tracking-[-0.02em]">{officer.name}</p>
      <p className="mt-1 text-[0.9375rem] text-ink-soft">{officer.role}</p>
    </article>
  );
}

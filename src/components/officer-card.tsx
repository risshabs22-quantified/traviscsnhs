import Image from "next/image";
import type { Officer } from "@/lib/content";
import { cn } from "@/lib/cn";

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
    <article
     
      className={cn(
        "group card relative overflow-hidden rounded-[26px] p-3 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:",
        className,
      )}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-[18px] bg-sand">
        {officer.photo ? (
          <Image
            src={officer.photo}
            alt={`${officer.name}, ${officer.role}`}
            fill
            sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 80vw"
            priority={priority}
            className="object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.045]"
            style={{ objectPosition: officer.focus ?? "50% 25%" }}
          />
        ) : (
          // The deck had no photo for this officer, so nothing goes here.
          // An empty frame is honest; initials or a stock avatar would not be.
          <div className="h-full w-full bg-clay" />
        )}
      </div>

      <div className="px-3 pt-5 pb-3">
        <p className="tag text-crimson">
          {officer.role}
        </p>
        <h3 className="mt-2 text-lg font-bold tracking-[-0.02em] text-balance">
          {officer.name}
        </h3>
      </div>
    </article>
  );
}

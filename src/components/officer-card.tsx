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
    <article className={cn("group", className)}>
      <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] bg-sand sm:rounded-[28px]">
        {officer.photo ? (
          <Image
            src={officer.photo}
            alt={`${officer.name}, ${officer.role}`}
            fill
            sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 50vw"
            priority={priority}
            className="object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
            style={{ objectPosition: officer.focus ?? "50% 25%" }}
          />
        ) : (
          <div className="h-full w-full bg-clay" />
        )}
      </div>
      <p className="mt-4 text-[1.05rem] font-semibold tracking-[-0.02em] sm:text-[1.15rem]">
        {officer.name}
      </p>
      <p className="mt-1 text-[0.9rem] text-ink-soft">{officer.role}</p>
    </article>
  );
}

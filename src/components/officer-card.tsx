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
    <article className={className}>
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-sand">
        {officer.photo ? (
          <Image
            src={officer.photo}
            alt={`${officer.name}, ${officer.role}`}
            fill
            sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 50vw"
            priority={priority}
            className="object-cover"
            style={{ objectPosition: officer.focus ?? "50% 25%" }}
          />
        ) : (
          <div className="h-full w-full bg-clay" />
        )}
      </div>
      <p className={cn("mt-3 text-base font-semibold tracking-[-0.015em] sm:text-[1.05rem]")}>
        {officer.name}
      </p>
      <p className="mt-0.5 text-[0.9rem] text-ink-soft">{officer.role}</p>
    </article>
  );
}

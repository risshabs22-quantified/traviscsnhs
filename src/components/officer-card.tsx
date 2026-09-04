import Image from "next/image";
import type { Officer } from "@/lib/content";
import { cn } from "@/lib/cn";

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("");
}

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
        "group card-surface relative overflow-hidden rounded-[26px] p-3 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]",
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
          // No photo in the deck for this officer — a monogram beats a stock avatar.
          <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(150deg,#F4DCC0,#E8B98C)]">
            <span
              aria-hidden
              className="font-mono text-4xl font-bold tracking-tight text-crimson/70"
            >
              {initials(officer.name)}
            </span>
          </div>
        )}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(42,23,16,0.32),transparent_46%)] opacity-70"
        />
      </div>

      <div className="px-3 pt-5 pb-3">
        <p className="font-mono text-[0.625rem] tracking-[0.2em] text-crimson uppercase">
          {officer.role}
        </p>
        <h3 className="mt-2 text-lg font-extrabold tracking-[-0.02em] text-balance">
          {officer.name}
        </h3>
      </div>
    </article>
  );
}

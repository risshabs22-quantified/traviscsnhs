import { cn } from "@/lib/cn";
import { Container } from "./section";

export function Bar({
  className,
  w,
}: {
  className?: string;
  w?: string;
}) {
  return <div className={cn("skeleton h-4", className)} style={w ? { width: w } : undefined} />;
}

/** Stand-in for the rounded hero / page-header stage. */
export function StageSkeleton({ lines = 3 }: { lines?: number }) {
  return (
    <div className="px-3 pt-24 sm:px-6 sm:pt-32 lg:pt-36">
      <div className="relative overflow-hidden rounded-[28px] border border-clay/60 bg-[linear-gradient(150deg,#FFFCF6_0%,#FAEFDF_46%,#F3D9BC_100%)] px-6 py-20 sm:rounded-[38px] sm:px-12 sm:py-24 lg:px-16 lg:py-28">
        <Bar className="h-3 w-40 rounded-full" />
        <div className="mt-9 space-y-4">
          {Array.from({ length: lines }).map((_, i) => (
            <Bar
              key={i}
              className="h-[clamp(2.4rem,7vw,4.4rem)] rounded-2xl"
              w={["78%", "62%", "45%"][i % 3]}
            />
          ))}
        </div>
        <div className="mt-10 space-y-3">
          <Bar className="h-4 rounded-full" w="52%" />
          <Bar className="h-4 rounded-full" w="38%" />
        </div>
        <div className="mt-11 flex gap-4">
          <Bar className="h-14 w-44 rounded-full" />
          <Bar className="h-14 w-36 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export function HeadingSkeleton() {
  return (
    <div className="max-w-3xl">
      <Bar className="h-3 w-32 rounded-full" />
      <div className="mt-7 space-y-3.5">
        <Bar className="h-11 rounded-2xl" w="88%" />
        <Bar className="h-11 rounded-2xl" w="66%" />
      </div>
      <div className="mt-8 space-y-3">
        <Bar className="h-4 rounded-full" w="74%" />
        <Bar className="h-4 rounded-full" w="58%" />
      </div>
    </div>
  );
}

export function CardGridSkeleton({
  count = 3,
  aspect,
  columns = "sm:grid-cols-2 lg:grid-cols-3",
}: {
  count?: number;
  aspect?: string;
  columns?: string;
}) {
  return (
    <div className={cn("mt-14 grid gap-5", columns)}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="card-surface rounded-[26px] p-8"
          style={{ opacity: 1 - i * 0.06 }}
        >
          {aspect ? (
            <Bar className={cn("w-full rounded-[18px]", aspect)} />
          ) : (
            <Bar className="h-12 w-12 rounded-full" />
          )}
          <Bar className="mt-7 h-6 rounded-lg" w="58%" />
          <div className="mt-4 space-y-2.5">
            <Bar className="h-3.5 rounded-full" w="94%" />
            <Bar className="h-3.5 rounded-full" w="80%" />
            <Bar className="h-3.5 rounded-full" w="52%" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function RowsSkeleton({ count = 4 }: { count?: number }) {
  return (
    <ul className="mt-14 divide-y divide-clay/60 border-y border-clay/60">
      {Array.from({ length: count }).map((_, i) => (
        <li key={i} className="flex items-center justify-between gap-8 py-7">
          <Bar className="h-5 rounded-lg" w="42%" />
          <Bar className="h-3.5 w-28 rounded-full" />
        </li>
      ))}
    </ul>
  );
}

/** Wraps skeleton content in the same container the real page uses. */
export function SkeletonSection({ children }: { children: React.ReactNode }) {
  return (
    <section className="py-24 sm:py-32" aria-hidden>
      <Container>{children}</Container>
    </section>
  );
}

/** Announced once per navigation so screen readers know something is coming. */
export function LoadingAnnouncer({ label }: { label: string }) {
  return (
    <p role="status" aria-live="polite" className="sr-only">
      {label}
    </p>
  );
}

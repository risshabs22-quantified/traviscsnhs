import { cn } from "@/lib/cn";
import { Container } from "./section";

export function Bar({
  className,
  w,
}: {
  className?: string;
  w?: string;
}) {
  return <div className={cn("skeleton", className)} style={w ? { width: w } : undefined} />;
}

export function CarouselSkeleton() {
  return (
    <div className="bg-sand">
      <Bar className="h-[min(78vw,22rem)] w-full rounded-none sm:h-[min(58vw,32rem)] lg:h-[min(48vw,38rem)]" />
      <div className="p-5 sm:p-8">
        <Bar className="h-6 w-24 rounded-md" />
        <Bar className="mt-4 h-12 w-[70%] rounded-xl sm:h-16" />
        <Bar className="mt-4 h-4 w-[48%] rounded-full" />
        <Bar className="mt-6 h-12 w-36 rounded-full" />
      </div>
    </div>
  );
}

export function PageHeadSkeleton({ image }: { image?: boolean }) {
  return (
    <div>
      {image && <Bar className="h-[min(58vw,20rem)] w-full rounded-none sm:h-[min(42vw,26rem)]" />}
      <Container className="pt-10 sm:pt-14">
        <Bar className="h-7 w-28 rounded-md" />
        <Bar className="mt-5 h-14 w-[80%] rounded-2xl sm:h-20" />
        <Bar className="mt-5 h-4 w-[52%] rounded-full" />
      </Container>
    </div>
  );
}

export function SpotlightSkeleton({ flip }: { flip?: boolean }) {
  return (
    <div className={cn("flex items-center py-6 sm:py-10", flip && "flex-row-reverse")}>
      <div
        className={cn(
          "flex min-h-[168px] w-full items-center gap-4 rounded-[22px] bg-sand p-4 sm:min-h-[240px] sm:rounded-[36px] sm:p-8",
          flip && "flex-row-reverse",
        )}
      >
        <Bar className="h-[132px] w-[132px] shrink-0 rounded-2xl sm:h-[220px] sm:w-[220px]" />
        <div className="min-w-0 flex-1">
          <Bar className="h-6 w-20 rounded-md" />
          <Bar className="mt-4 h-10 w-[70%] rounded-xl" />
          <Bar className="mt-4 h-4 w-[90%] rounded-full" />
          <Bar className="mt-2 h-4 w-[55%] rounded-full" />
        </div>
      </div>
    </div>
  );
}

export function HeadingSkeleton() {
  return (
    <div className="max-w-3xl">
      <Bar className="h-7 w-28 rounded-md" />
      <Bar className="mt-5 h-14 w-[88%] rounded-2xl" />
      <Bar className="mt-4 h-4 w-[62%] rounded-full" />
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
    <div className={cn("mt-10 grid gap-6", columns)}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i}>
          {aspect ? (
            <Bar className={cn("w-full rounded-[22px]", aspect)} />
          ) : (
            <Bar className="h-24 w-full rounded-[22px]" />
          )}
          <Bar className="mt-4 h-5 rounded-lg" w="58%" />
          <Bar className="mt-2 h-3.5 rounded-full" w="40%" />
        </div>
      ))}
    </div>
  );
}

export function SkeletonSection({ children }: { children: React.ReactNode }) {
  return (
    <section className="py-14 sm:py-20" aria-hidden>
      <Container>{children}</Container>
    </section>
  );
}

export function LoadingAnnouncer({ label }: { label: string }) {
  return (
    <p role="status" aria-live="polite" className="sr-only">
      {label}
    </p>
  );
}

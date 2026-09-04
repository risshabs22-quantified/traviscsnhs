import {
  HeadingSkeleton,
  LoadingAnnouncer,
  PageHeadSkeleton,
  SkeletonSection,
} from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <>
      <LoadingAnnouncer label="Loading the About page" />
      <PageHeadSkeleton image />
      <SkeletonSection>
        <HeadingSkeleton />
        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="skeleton h-28 rounded-[22px]" />
          ))}
        </div>
      </SkeletonSection>
    </>
  );
}

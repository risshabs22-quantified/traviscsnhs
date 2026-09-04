import {
  LoadingAnnouncer,
  PageHeadSkeleton,
  SkeletonSection,
} from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <>
      <LoadingAnnouncer label="Loading the Contact page" />
      <PageHeadSkeleton />
      <SkeletonSection>
        <div className="grid gap-10 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="skeleton h-40 rounded-[22px]" />
          ))}
        </div>
      </SkeletonSection>
    </>
  );
}

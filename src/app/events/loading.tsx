import {
  CardGridSkeleton,
  HeadingSkeleton,
  LoadingAnnouncer,
  RowsSkeleton,
  SkeletonSection,
  StageSkeleton,
} from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <>
      <LoadingAnnouncer label="Loading the Events page" />
      <StageSkeleton lines={2} />
      <SkeletonSection>
        <HeadingSkeleton />
        <CardGridSkeleton count={2} columns="lg:grid-cols-2" />
      </SkeletonSection>
      <SkeletonSection>
        <HeadingSkeleton />
        <RowsSkeleton count={4} />
      </SkeletonSection>
    </>
  );
}

import {
  CardGridSkeleton,
  HeadingSkeleton,
  LoadingAnnouncer,
  SkeletonSection,
  StageSkeleton,
} from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <>
      <LoadingAnnouncer label="Loading the Travis CSNHS home page" />
      <StageSkeleton />
      <SkeletonSection>
        <HeadingSkeleton />
        <CardGridSkeleton count={3} />
      </SkeletonSection>
      <SkeletonSection>
        <HeadingSkeleton />
        <CardGridSkeleton count={4} columns="sm:grid-cols-2 xl:grid-cols-4" />
      </SkeletonSection>
    </>
  );
}

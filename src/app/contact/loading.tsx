import {
  CardGridSkeleton,
  LoadingAnnouncer,
  SkeletonSection,
  StageSkeleton,
} from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <>
      <LoadingAnnouncer label="Loading the Contact page" />
      <StageSkeleton lines={2} />
      <SkeletonSection>
        <CardGridSkeleton count={3} />
        <CardGridSkeleton count={2} columns="lg:grid-cols-2" />
      </SkeletonSection>
    </>
  );
}

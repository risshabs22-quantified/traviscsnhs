import {
  CardGridSkeleton,
  LoadingAnnouncer,
  SkeletonSection,
  StageSkeleton,
} from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <>
      <LoadingAnnouncer label="Loading the Officers page" />
      <StageSkeleton lines={2} />
      <SkeletonSection>
        <CardGridSkeleton
          count={8}
          aspect="aspect-[4/5]"
          columns="sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        />
      </SkeletonSection>
    </>
  );
}

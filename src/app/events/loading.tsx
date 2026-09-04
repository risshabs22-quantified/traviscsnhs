import {
  LoadingAnnouncer,
  PageHeadSkeleton,
  SkeletonSection,
  SpotlightSkeleton,
} from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <>
      <LoadingAnnouncer label="Loading the Events page" />
      <PageHeadSkeleton image />
      <SkeletonSection>
        <SpotlightSkeleton />
        <SpotlightSkeleton flip />
      </SkeletonSection>
    </>
  );
}

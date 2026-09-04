import {
  HeadingSkeleton,
  LoadingAnnouncer,
  PageHeadSkeleton,
  SkeletonSection,
  SpotlightSkeleton,
} from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <>
      <LoadingAnnouncer label="Loading the Membership page" />
      <PageHeadSkeleton />
      <SkeletonSection>
        <HeadingSkeleton />
        <SpotlightSkeleton />
      </SkeletonSection>
    </>
  );
}

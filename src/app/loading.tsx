import {
  CarouselSkeleton,
  HeadingSkeleton,
  LoadingAnnouncer,
  SkeletonSection,
  SpotlightSkeleton,
} from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <>
      <LoadingAnnouncer label="Loading the Travis CSNHS home page" />
      <CarouselSkeleton />
      <SkeletonSection>
        <HeadingSkeleton />
        <SpotlightSkeleton />
        <SpotlightSkeleton flip />
      </SkeletonSection>
    </>
  );
}

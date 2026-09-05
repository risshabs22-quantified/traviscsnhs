import { BoxSkeleton, LoadingAnnouncer } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="main-content">
      <LoadingAnnouncer label="Loading Membership" />
      <BoxSkeleton count={6} />
    </div>
  );
}

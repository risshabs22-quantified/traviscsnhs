import { BoxSkeleton, LoadingAnnouncer } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="main-content">
      <LoadingAnnouncer label="Loading Travis CSNHS" />
      <BoxSkeleton />
    </div>
  );
}

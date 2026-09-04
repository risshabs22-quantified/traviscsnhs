import { Bar, LoadingAnnouncer } from "@/components/ui/skeleton";
import { Container } from "@/components/ui/section";

export default function Loading() {
  return (
    <Container className="pt-10 pb-20 sm:pt-14">
      <LoadingAnnouncer label="Loading the contest page" />
      <Bar className="h-4 w-28 rounded-full" />
      <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
        <Bar className="aspect-square w-full rounded-[28px]" />
        <div>
          <Bar className="h-7 w-24 rounded-md" />
          <Bar className="mt-5 h-16 w-[80%] rounded-2xl" />
          <Bar className="mt-6 h-4 w-full rounded-full" />
          <Bar className="mt-2 h-4 w-[70%] rounded-full" />
          <Bar className="mt-8 h-12 w-40 rounded-full" />
        </div>
      </div>
    </Container>
  );
}

import { Skeleton } from "../ui/skeleton";

export default function SkeletonType2() {
  return (<>
    <div className="flex flex-col space-y-3">
      <div className="space-y-2 p-4">
        <Skeleton className="h-7 w-full bg-gray-200" />
        <Skeleton className="h-7 w-full bg-gray-200" />
        <Skeleton className="h-7 w-full bg-gray-200" />
        <Skeleton className="h-7 w-full bg-gray-200" />
        <Skeleton className="h-7 w-full bg-gray-200" />
        <Skeleton className="h-7 w-full bg-gray-200" />
      </div>
    </div>
  </>);
}

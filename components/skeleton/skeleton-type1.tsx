import { Skeleton } from "../ui/skeleton";

export default function SkeletonType1() {
  return (<>
    <div className="flex flex-col space-y-3">
      <div className='flex flex-row gap-3'>
        <Skeleton className="h-[125px] w-1/2 rounded-xl bg-gray-200" />
        <Skeleton className="h-[125px] w-1/2 rounded-xl bg-gray-200" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-7 w-full bg-gray-200" />
        <Skeleton className="h-7 w-full bg-gray-200" />
        <Skeleton className="h-7 w-full bg-gray-200" />
        <Skeleton className="h-7 w-full bg-gray-200" />
      </div>
    </div>
  </>);
}

import { Skeleton } from "@/components/ui/skeleton";

export default function ProductSkeleton() {
    return (
        <div className="container max-w-[1200px] px-2 lg:px-0 lg:py-8 mx-auto font-sans">
            <div className="grid md:grid-cols-2 gap-8">
                {/* Image Gallery Skeleton */}
                <div className="flex flex-col-reverse lg:flex-row gap-6">
                    {/* Thumbnail Slider Skeleton */}
                    <div className="hidden lg:flex flex-col gap-4 relative h-[450px] min-w-[122px]">
                        <div className="flex flex-col gap-4 relative overflow-hidden h-full">
                            {[...Array(3)].map((_, i) => (
                                <Skeleton key={i} className="w-[122px] h-[122px] rounded bg-gray-200" />
                            ))}
                        </div>
                        <div className="flex items-center gap-2">
                            <Skeleton className="h-8 flex-1 bg-gray-200" />
                            <Skeleton className="h-8 flex-1 bg-gray-200" />
                        </div>
                    </div>

                    {/* Main Image Skeleton */}
                    <div className="flex-1">
                        <Skeleton className="w-full h-[450px] rounded bg-gray-200" />
                    </div>
                </div>

                {/* Product Details Skeleton */}
                <div className="space-y-6">
                    {/* Breadcrumb Skeleton */}
                    <div className="flex items-center gap-2">
                        <Skeleton className="h-4 w-20 bg-gray-200" />
                        <Skeleton className="h-4 w-4 bg-gray-200" />
                        <Skeleton className="h-4 w-24 bg-gray-200" />
                        <Skeleton className="h-4 w-4 bg-gray-200" />
                        <Skeleton className="h-4 w-32 bg-gray-200" />
                    </div>

                    {/* Title and Price Skeleton */}
                    <Skeleton className="h-8 w-3/4 bg-gray-200" />
                    <Skeleton className="h-6 w-24 bg-gray-200" />

                    {/* Description Skeleton */}
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-full bg-gray-200" />
                        <Skeleton className="h-4 w-5/6 bg-gray-200" />
                        <Skeleton className="h-4 w-4/6 bg-gray-200" />
                    </div>

                    {/* Quantity Selector Skeleton */}
                    <div className="flex items-center gap-6">
                        <Skeleton className="h-10 w-10 bg-gray-200" />
                        <Skeleton className="h-10 w-12 bg-gray-200" />
                        <Skeleton className="h-10 w-10 bg-gray-200" />
                    </div>

                    {/* Action Buttons Skeleton */}
                    <div className="flex gap-4">
                        <Skeleton className="h-10 w-32 bg-gray-200" />
                        <Skeleton className="h-10 w-32 bg-gray-200" />
                    </div>

                    {/* Compare and Wishlist Skeleton */}
                    <div className="flex gap-6">
                        <Skeleton className="h-8 w-24 bg-gray-200" />
                        <Skeleton className="h-8 w-24 bg-gray-200" />
                    </div>

                    {/* Product Info Skeleton */}
                    <div className="space-y-4 pt-4">
                        <div className="flex gap-2 items-center">
                            <Skeleton className="h-4 w-12 bg-gray-200" />
                            <Skeleton className="h-4 w-24 bg-gray-200" />
                        </div>
                        <div className="flex gap-2 items-center">
                            <Skeleton className="h-4 w-16 bg-gray-200" />
                            <Skeleton className="h-4 w-32 bg-gray-200" />
                        </div>
                        <div className="flex gap-4 items-center">
                            <Skeleton className="h-4 w-12 bg-gray-200" />
                            <div className="flex gap-4">
                                {[...Array(4)].map((_, i) => (
                                    <Skeleton key={i} className="h-4 w-4 rounded-full bg-gray-200" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
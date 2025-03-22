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
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Desktop Tabs Skeleton */}
                    <div className="hidden lg:flex flex-col gap-7 mt-7 lg:mt-16">
                        <div className="w-full">
                            {/* Tab List Skeleton */}
                            <div className="border-t w-full pt-4">
                                <div className="flex gap-8">
                                    {[...Array(3)].map((_, i) => (
                                        <Skeleton
                                            key={i}
                                            className="h-8 w-32 bg-gray-200"
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Tab Content Skeleton */}
                            <div className="pt-8">
                                <div className="space-y-4">
                                    <Skeleton className="h-4 w-full bg-gray-200" />
                                    <Skeleton className="h-4 w-[90%] bg-gray-200" />
                                    <Skeleton className="h-4 w-[95%] bg-gray-200" />
                                    <Skeleton className="h-4 w-[85%] bg-gray-200" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Accordion Skeleton */}
                    <div className="lg:hidden space-y-4 mt-7">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="border-b pb-4">
                                <div className="flex justify-between items-center">
                                    <Skeleton className="h-6 w-32 bg-gray-200" />
                                    <Skeleton className="h-6 w-6 rounded-full bg-gray-200" />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Additional Info Skeleton */}
                    <div className="flex flex-col gap-5 mt-7 lg:mt-12">
                        <Skeleton className="h-8 w-48 lg:hidden bg-gray-200" />
                        <div className="w-full max-w-[700px] mx-auto flex justify-between items-center">
                            <Skeleton className="h-6 w-32 bg-gray-200" />
                            <Skeleton className="h-6 w-48 bg-gray-200" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
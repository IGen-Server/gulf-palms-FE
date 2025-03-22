import { Skeleton } from "@/components/ui/skeleton";

function ProductCardSkeleton() {
    return (
        <div className="relative w-full grid place-content-center lg:mb-[70px] custom-shadow pb-4 lg:pt-7">
            {/* Product Image Skeleton */}
            <div className="grid place-content-center w-full h-[280px]">
                <Skeleton className="w-full h-[265px] bg-gray-200" />
            </div>

            {/* Product Details Skeleton */}
            <div className="w-full text-center space-y-3 mt-4">
                {/* Title */}
                <Skeleton className="h-4 w-3/4 mx-auto bg-gray-200" />

                {/* Category */}
                <Skeleton className="h-3 w-1/2 mx-auto bg-gray-200" />

                {/* Price */}
                <Skeleton className="h-4 w-24 mx-auto bg-gray-200" />
            </div>

            {/* Bottom Actions Skeleton */}
            <div className="mt-3 px-3">
                <div className="flex items-center justify-between">
                    {/* Wishlist Button */}
                    <Skeleton className="h-8 w-8 rounded-full bg-gray-200" />

                    {/* Add to Cart Button */}
                    <div className="hidden lg:block">
                        <Skeleton className="h-10 w-[150px] bg-gray-200" />
                    </div>
                    <div className="lg:hidden">
                        <Skeleton className="h-8 w-8 rounded-full bg-gray-200" />
                    </div>

                    {/* Quick View Button */}
                    <Skeleton className="h-8 w-8 rounded-full bg-gray-200" />
                </div>
            </div>
        </div>
    );
}

export default function ProductsGridSkeleton({ count = 8 }) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {Array.from({ length: count }).map((_, index) => (
                <ProductCardSkeleton key={index} />
            ))}
        </div>
    );
}
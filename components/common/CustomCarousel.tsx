"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useRef } from "react";

interface CarouselData {
  imageSrc: string;
  content: string;
}

interface CustomCarouselProps {
  data: CarouselData[];
  withNavigation?: boolean; // Optional prop to show navigation buttons
  basisNumber?: {
    sm?: number; // Small screen (sm)
    md?: number; // Medium screen (md)
    lg?: number; // Large screens (lg)
    xl?: number; // Extra large screen (xl)
    "2xl"?: number; // 2xl screens
    default?: number; // Default screen
  };
  imageDimensions?: {
    width?: string; // e.g., "500px", "100%"
    height?: string; // e.g., "300px", "auto"
    padding?: string; // e.g., "1rem", "16px"
  };
}

export default function CustomCarousel({
  data,
  withNavigation = false,
  basisNumber = {
    default: 1, // Default (for very small screens)
    sm: 2, // Small screens
    md: 3, // Medium screens
    lg: 4, // Large screens
    xl: 5, // Extra large screens
    "2xl": 6, // 2xl screens
  },
  imageDimensions = {
    width: "100%", // Default width
    height: "auto", // Default height
    padding: "0", // Default padding
  },
}: CustomCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = basisNumber.md || basisNumber.default || 1;
  const totalSlides = Math.ceil(data.length / itemsPerSlide);
  const carouselContentRef = useRef<HTMLDivElement | null>(null);

  const getBasisClass = (itemsPerRow: number | undefined) => {
    return itemsPerRow
      ? `basis-1/${Math.floor(12 / itemsPerRow)}`
      : "basis-1/1";
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    if (carouselContentRef.current) {
      const scrollPosition =
        index * itemsPerSlide * carouselContentRef.current.offsetWidth;
      carouselContentRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollPrev = () => {
    if (carouselContentRef.current) {
      const currentPosition = carouselContentRef.current.scrollLeft;
      carouselContentRef.current.scrollTo({
        left: currentPosition - 100, // Scroll by 100px for debugging
        behavior: "smooth",
      });
    }
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const scrollNext = () => {
    if (carouselContentRef.current) {
      const currentPosition = carouselContentRef.current.scrollLeft;
      carouselContentRef.current.scrollTo({
        left: currentPosition + 100, // Scroll by 100px for debugging
        behavior: "smooth",
      });
    }
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, totalSlides - 1));
  };

  return (
    <div className="w-full max-h-full">
      <Carousel
        ref={carouselContentRef}
        opts={{
          align: "start",
          loop: true,
        }}
        className="group"
      >
        <CarouselContent ref={carouselContentRef}>
          {data.map((item, index) => (
            <CarouselItem
              key={index}
              className={`${getBasisClass(
                basisNumber.default
              )} sm:${getBasisClass(basisNumber.sm)} md:${getBasisClass(
                basisNumber.md
              )} lg:${getBasisClass(basisNumber.lg)} xl:${getBasisClass(
                basisNumber.xl
              )} 2xl:${getBasisClass(basisNumber["2xl"])}`}
            >
              <div className="p-1">
                <Card className="h-full border-0 shadow-none">
                  <CardContent className="flex aspect-square items-center justify-center  h-full">
                    <img
                      src={item.imageSrc}
                      alt={`carousel-item-${index}`}
                      style={{
                        width: imageDimensions.width,
                        height: imageDimensions.height,
                      }}
                      className="object-cover rounded-lg"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="opacity-0 group-hover:opacity-100 duration-500">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>

      {withNavigation && (
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full mx-1 ${
                currentIndex === index ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

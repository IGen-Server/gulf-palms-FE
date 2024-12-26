/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Card, CardContent } from "@/components/ui/card";

interface CarouselData {
  imageSrc?: string;
  component?: React.ReactNode;
}

interface CustomCarouselProps {
  data: CarouselData[];
  withNavigation?: boolean;
  slidesToShow?: number; // Optional prop to customize slides to show, default is 4
  slidesToScroll?: number; // Optional prop to customize slides to scroll, default is 4
  imageDimensions?: {
    width?: string; // e.g., "500px", "100%"
    height?: string; // e.g., "300px", "auto"
    padding?: string; // e.g., "1rem", "16px"
  };
}

export default function CustomCarousel({
  data,
  slidesToShow = 4, // Default to 4 if not provided
  slidesToScroll = 4, // Default to 4 if not provided
  withNavigation = false, // Default to false
  imageDimensions = {
    width: "100%", // Default width
    height: "auto", // Default height
    padding: "0", // Default padding
  },
}: CustomCarouselProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll,
    arrows: withNavigation, // Enable slick's built-in navigation arrows if withNavigation is true
  };

  return (
    <div className="w-full max-h-full">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div className=" z-[10]" key={index}>
            {item.component ? (
              item.component
            ) : (
              <Card className="h-full border-0 shadow-none">
                <CardContent className="flex aspect-square items-center justify-center h-full">
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
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
}

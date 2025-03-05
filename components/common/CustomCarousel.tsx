/* eslint-disable @next/next/no-img-element */
"use client";

import type React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CarouselData {
  component?: React.ReactNode;
  imageSrc?: string;
  content?: string;
  width?: string;
  height?: string;
}

interface CustomCarouselProps {
  data: CarouselData[];
  dots?: boolean;
  autoPlay?: boolean;
  withNavigation?: boolean;
  slidesToShow?: number;
  slidesToScroll?: number;
  MobileSlidesNumber?: number;
}

export default function CustomCarousel({
  data,
  dots = true,
  slidesToShow = 4,
  slidesToScroll = 4,
  autoPlay = false,
  withNavigation = false,
  MobileSlidesNumber = 2,
}: CustomCarouselProps) {
  const NextArrow = ({ onClick }: { onClick?: () => void }) => (
    <div
      className="absolute right-[0px] md:-right-[22px] top-1/2 transform -translate-y-1/2 z-20 rounded-full cursor-pointer lg:overflow-hidden opacity-100 lg:opacity-0 group-hover:opacity-100 transition-all duration-1000"
      onClick={onClick}
    >
      <ChevronRight
        size={34}
        className="translate-x-[-20px] lg:translate-x-[100px] text-gray-600 lg:group-hover:translate-x-0 transition-transform duration-1000"
      />
    </div>
  );

  const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <div
      className="absolute  md:-left-[35px] top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full cursor-pointer opacity-100 lg:opacity-0 group-hover:opacity-100 transition-all duration-1000"
      onClick={onClick}
    >
      <ChevronLeft
        size={34}
        className="translate-x-[20px] lg:translate-x-[-100px] text-gray-600 lg:group-hover:translate-x-0 transition-transform duration-1000"
      />
    </div>
  );

  const settings = {
    dots: dots,
    infinite: true,
    speed: 300,
    slidesToShow,
    slidesToScroll,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: Math.min(3, slidesToShow),
          slidesToScroll: Math.min(3, slidesToScroll),
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(3, slidesToShow),
          slidesToScroll: Math.min(3, slidesToScroll),
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.min(2, slidesToShow),
          slidesToScroll: Math.min(2, slidesToScroll),
          dots: false,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: MobileSlidesNumber,
          slidesToScroll: MobileSlidesNumber,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="relative w-full min-h-[325px] h-fit group">
      <Slider autoplay={autoPlay} {...settings} className="w-full">
        {data.map((item, index) => (
          <div key={index} className="h-full">
            {item.component
              ? item.component
              : item.imageSrc && (
                  <img
                    src={item.imageSrc || "/placeholder.svg"}
                    alt="Carousel Item"
                    className={`${item.height || "h-auto"} ${
                      item.width || "w-[300px] md:w-full mx-auto"
                    }`}
                  />
                )}
          </div>
        ))}
      </Slider>
    </div>
  );
}

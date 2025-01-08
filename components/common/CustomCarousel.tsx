/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
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
  autoPlay?: boolean;
  withNavigation?: boolean;
  slidesToShow?: number; // Optional prop to customize slides to show, default is 4
  slidesToScroll?: number; // Optional prop to customize slides to scroll, default is 4
}

export default function CustomCarousel({
  data,
  slidesToShow = 4,
  slidesToScroll = 4,
  autoPlay = false,
  withNavigation = false,
}: CustomCarouselProps) {
  const NextArrow = ({ onClick }: { onClick?: () => void }) => (
    <div
      className="absolute -right-[22px] top-1/2 transform -translate-y-1/2 z-20 rounded-full cursor-pointer overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-1000"
      onClick={onClick}
    >
      <ChevronRight
        size={34}
        className="translate-x-[100px] text-gray-600 group-hover:translate-x-0 transition-transform duration-1000"
      />
    </div>
  );

  const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <div
      className="absolute -left-[35px] top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-1000"
      onClick={onClick}
    >
      <ChevronLeft
        size={34}
        className="translate-x-[-100px] text-gray-600 group-hover:translate-x-0 transition-transform duration-1000"
      />
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative w-full min-h-[420px] px-6 h-fit group">
      <Slider autoplay={autoPlay} {...settings} className="w-full ">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-center w-full">
            {item.imageSrc ? (
              <img
                src={item.imageSrc}
                alt="Carousel Item"
                className={`${item.height || "h-auto"} ${
                  item.width || "w-full"
                } `}
              />
            ) : (
              <div className="flex items-center justify-center w-full">
                {item.component}
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
}

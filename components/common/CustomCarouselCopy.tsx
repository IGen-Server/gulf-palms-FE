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
  dots?: boolean;
  arrow?: boolean;
  data: CarouselData[];
  title?: string;
  autoPlay?: boolean;
  withNavigation?: boolean;
  slidesToShow?: number;
  slidesToScroll?: number;
  MobileSlidesNumber?: number;
}

export default function CustomCarouselCopy({
  data,
  title,
  dots = true,
  arrow = true,
  slidesToShow = 4,
  slidesToScroll = 4,
  autoPlay = false,
  withNavigation = false,
  MobileSlidesNumber = 2,
}: CustomCarouselProps) {
  const NextArrow = ({ onClick }: { onClick?: () => void }) =>
    arrow ? (
      <div
        className="hidden lg:block absolute right-[0px] md:-right-[42px] top-1/2 transform -translate-y-1/2 z-20 rounded-full cursor-pointer lg:overflow-hidden opacity-100 lg:opacity-0 group-hover:opacity-100 transition-all duration-1000"
        onClick={onClick}
      >
        <ChevronRight
          size={34}
          className="translate-x-[-20px] lg:translate-x-[100px] text-gray-600 lg:group-hover:translate-x-0 transition-transform duration-1000"
        />
      </div>
    ) : null;

  const PrevArrow = ({ onClick }: { onClick?: () => void }) =>
    arrow ? (
      <div
        className="hidden lg:block absolute md:-left-[25px] top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full cursor-pointer opacity-100 lg:opacity-0 group-hover:opacity-100 transition-all duration-1000"
        onClick={onClick}
      >
        <ChevronLeft
          size={34}
          className="translate-x-[20px] lg:translate-x-[-80px] text-gray-600 lg:group-hover:translate-x-0 transition-transform duration-1000"
        />
      </div>
    ) : null;

  const settings = {
    dots: dots,
    infinite: true,
    speed: 500,
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
    <div className="relative w-full h-full">
      {title && (
        <h3 className="absolute -top-7 lg:top-10 left-0 font-semibold text-[1.375rem] leading-8 text-[#242424]">
          {title}
        </h3>
      )}
      <Slider
        autoplay={autoPlay}
        {...settings}
        className="w-full group mt-12 lg:mt-0"
      >
        {data.map((item, index) => (
          <div key={index} className="h-full overflow-hidden">
            {/* <span>{item.imageSrc}</span> */}
            {item.imageSrc ? (
              <img
                src={item.imageSrc || "/placeholder.svg"}
                alt="Carousel Item"
                className={`${item.height || "h-auto"} ${
                  item.width || "w-full lg:ml-5"
                }`}
              />
            ) : (
              <div className="h-full lg:ml-5 mr-2 lg:mr-0 group-first:ml-0">
                {item.component}
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
}

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
  autoPlay?: boolean;
  withNavigation?: boolean;
  compactArrow?: boolean;
  serviceComponent?: boolean;
  slidesToShow?: number;
  slidesToScroll?: number;
  MobileSlidesNumber?: number;
}

export default function CustomCarousel({
  data,
  arrow = true,
  dots = true,
  slidesToShow = 4,
  slidesToScroll = 4,
  autoPlay = false,
  withNavigation = false,
  MobileSlidesNumber = 2,
  compactArrow = false,
  serviceComponent = false,
}: CustomCarouselProps) {
  const NextArrow = ({ onClick }: { onClick?: () => void }) => (
    <div
      className={`${arrow ? "block" : "hidden"} absolute  top-1/2 transform -translate-y-1/2 z-20 rounded-full cursor-pointer lg:overflow-hidden opacity-100 lg:opacity-0 group-hover:opacity-100 transition-all duration-1000   ${compactArrow ? ' right-[0px] md:-right-[22px] ' : ' right-[10px] md:-right-[30px] '}`}
      onClick={onClick}
    >
      <ChevronRight
        size={34}
        className={`text-gray-600 transition-transform duration-1000  ${compactArrow ? ' translate-x-[-20px] lg:translate-x-[100px]  lg:group-hover:translate-x-[-10px] ' : ' translate-x-[-20px] lg:translate-x-[100px]  lg:group-hover:translate-x-[-10px]'}`}
      />
    </div>
  );

  const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <div
      className={`${arrow ? (serviceComponent ? "hidden lg:block" : "block") : "hidden"} absolute  top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full cursor-pointer opacity-100 lg:opacity-0 group-hover:opacity-100 transition-all duration-1000 ${compactArrow ? 'md:-left-[35px]' : 'md:-left-[50px]'}`}
      onClick={onClick}
    >
      <ChevronLeft
        size={34}
        className={`text-gray-600 transition-transform duration-1000  ${compactArrow ? ' translate-x-[20px] lg:translate-x-[-100px]  lg:group-hover:translate-x-[10px]  ' : ' translate-x-[20px] lg:translate-x-[-100px]  lg:group-hover:translate-x-[0px] '}`}
      />
    </div>
  );

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
          slidesToShow: Math.min(serviceComponent ? 2 : 3, slidesToShow),
          slidesToScroll: Math.min(serviceComponent ? 2 : 3, slidesToScroll),
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.min(serviceComponent ? 1 : 2, slidesToShow),
          slidesToScroll: Math.min(serviceComponent ? 1 : 2, slidesToScroll),
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
    <div className="relative w-full min-h-[300px] md:min-h-[420px] h-fit group">
      <Slider autoplay={autoPlay} {...settings} className="w-full">
        {data.map((item, index) => (
          <div key={index} className="h-full">
            {/* <span>{item.imageSrc}</span> */}
            {item.imageSrc ? (
              <img
                src={item.imageSrc || "/placeholder.svg"}
                alt="Carousel Item"
                className={`${item.height || "h-auto"} ${item.width || "w-full"
                  }`}
              />
            ) : (
              <div className={` h-full ${item.width || "w-full"
                }`}>{item.component}</div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
}

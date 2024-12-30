/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CarouselData {
  component?: React.ReactNode;
  imageSrc?: String;
  content?: String;
}

interface CustomCarouselProps {
  data: CarouselData[];
  withNavigation?: boolean;
  slidesToShow?: number; // Optional prop to customize slides to show, default is 4
  slidesToScroll?: number; // Optional prop to customize slides to scroll, default
}

export default function CustomCarousel({
  data,
  slidesToShow = 4,
  slidesToScroll = 4,
  withNavigation = false,
}: CustomCarouselProps) {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow,
    slidesToScroll,
    initialSlide: 0,
  };

  return (
    <div className="w-full h-full z-[100]">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div className="z-[10]" key={index}>
            {!!item.imageSrc ? (
              <img
                src={`${item?.imageSrc || ""}`}
                alt="image"
                className="w-[300px] h-[300px]"
              />
            ) : (
              item.component
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
}

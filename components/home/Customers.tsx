/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/ui/button";
import CustomCarousel from "../common/CustomCarousel";
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  date: string;
  rating: number;
  review: string;
  image: string;
  isRTL?: boolean;
}

export default function Customers() {
  const testimonials: Testimonial[] = [
    {
      name: "Chandana Rathnayaka",
      date: "2024-09-19",
      rating: 5,
      review: "Nice plants.",
      image: "https://lh3.googleusercontent.com/a-/ALV-UjUS50zhBgtsB-uSL0m3MqgYJw6T2yKarGAAtDR5uH5Op_GKZKtU=w128-h128-c-rp-mo-ba4-br100"
    },
    {
      name: "Shamlan Adel",
      date: "2024-08-21",
      rating: 5,
      review: "معرض منظور راقي يبدا من الشتلات و النباتات مرورا بمستلزمات الحدائق الخارجيه و كل ما يظهر جماليه الطبيعه الخضراء او الزهور اضافه الى رقي تعامل القائمين على المعرض و الموظفين 🌸",
      image: "https://lh3.googleusercontent.com/a-/ALV-UjUS50zhBgtsB-uSL0m3MqgYJw6T2yKarGAAtDR5uH5Op_GKZKtU=w128-h128-c-rp-mo-ba4-br100",
      isRTL: true
    },
    {
      name: "ahmed boushehri",
      date: "2024-06-04",
      rating: 5,
      review: "يمشاءه اشكثر زرع وطاحي اكثر شي",
      image: "https://lh3.googleusercontent.com/a-/ALV-UjUS50zhBgtsB-uSL0m3MqgYJw6T2yKarGAAtDR5uH5Op_GKZKtU=w128-h128-c-rp-mo-ba4-br100",
      isRTL: true
    }
  ];

  const createTestimonialSlide = (testimonial: Testimonial) => (
    <div className="px-4 py-6 h-full">
      <div className="bg-white rounded-lg shadow-sm p-6 h-full flex flex-col">
        <div className="flex flex-col justify-center items-center gap-4 mb-4">
          <div className="relative">
            <img 
              src={testimonial.image || "/placeholder.svg"} 
              alt={testimonial.name}
              className="w-12 h-12 rounded-full"
            />
            <img 
              src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"
              alt="Google"
              className="absolute -bottom-1 -right-1 w-5 h-5"
            />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
            <p className="text-sm text-gray-500">{testimonial.date}</p>
          </div>
        </div>
        <div className="flex mb-3 w-full justify-center">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className={`text-gray-600  ${testimonial.isRTL ? 'text-center' : 'text-center'}`}>
          {testimonial.review}
        </p>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 max-w-[1458px]">
        <div className="pb-[30px] space-y-2 md:space-y-6 max-w-[800px] ">
        <p className="text-[#777777] text-xl md:text-[30px] font-light font-sans">
          OUR SERVICES
        </p>
        <p className="text-[#242424] font-bold text-2xl md:text-[36px] font-arabic">
        WHAT OUR CUSTOMERS SAY ABOUT US
        </p>
        <p className="text-[#777777] text-sm md:text-[16px] font-sans">
        Gulf Palms provides you with a good experience. Check our customer reviews. We provide excellent quality and experience
        </p>
      </div>
      <div className="pb-8 md:pb-[50px]">
        <CustomCarousel
          slidesToScroll={1}
          slidesToShow={3}
          data={testimonials.map(testimonial => ({
            component: createTestimonialSlide(testimonial)
          }))}
          autoPlay={true}
        />
      </div>
    </div>
  );
}

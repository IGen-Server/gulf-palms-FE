"use client";

import Image from "next/image";
import { useState } from "react";

const BlogPostCard = () => {
  const [hovered, setHovered] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  const handleMouseEnter = () => {
    setIsLeaving(false);
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setIsLeaving(true);
    setHovered(false);
    setTimeout(() => {
      setIsLeaving(false);
    }, 600);
  };

  return (
    <div
      className="relative w-[388px] h-[273px] overflow-hidden mt-24"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`${
          hovered ? "scale-105" : "scale-100"
        } duration-700 cursor-pointer`}
      >
        <Image
          src="https://gulfpalms.com/wp-content/uploads/2021/08/wd-blog-1.jpg"
          alt="Blog image"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover rounded-lg"
        />

        <div
          className={`absolute inset-0 bg-black duration-700 ${
            hovered ? "bg-opacity-30" : "bg-opacity-0"
          } z-[1]`}
        ></div>

        {/* Bullet Points Animation */}
        <div className="absolute inset-0 flex items-center justify-center z-10 space-x-2">
          {[3, 2, 1].map((number) => (
            <p
              key={number}
              className="text-white text-2xl transition-all duration-300"
              style={{
                transitionDelay: `${number * 150}ms`,
                opacity: hovered ? 1 : 0,
                transform: isLeaving
                  ? `translateX(${40 + number * 20}px)` // Exit to right
                  : hovered
                  ? "translateX(0)" // Center when hovered
                  : `translateX(-${40 + number * 20}px)`, // Start from left
                visibility: !hovered ? "hidden" : "visible",
              }}
            >
              ●
            </p>
          ))}
        </div>
      </div>
      <div className="">
        <h2 className="font-medium text-2xl text-[#333] opacity-65">
          Exploring Atlanta’s modern homes
        </h2>
      </div>
    </div>
  );
};

export default BlogPostCard;

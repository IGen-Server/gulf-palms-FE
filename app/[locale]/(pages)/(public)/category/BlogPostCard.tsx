"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const BlogPostCard = ({
  post,
  slug,
}: {
  post: {
    slug: string;
    title: string;
    image: string;
    description: string;
    date?: number;
    month?: string;
  };
  slug: string;
}) => {
  const router = useRouter();
  const [hovered, setHovered] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  const text =
    "Vivamus enim sagittis aptent hac mi dui a per aptent suspendisse cras odio bibendum augue rhoncus laoreet dui praesent sodales sodales. Dignissim fusce ullamcorper volutpat habitasse tincidunt parturient enim tempor facilisi nostra lobortis proin primis litora";

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
      className="w-full mt-7 lg:mt-24 font-sans group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`relative w-full h-[273px] overflow-hidden duration-700 cursor-pointer shadow-md group-hover:shadow-lg`}
        onClick={() => router.push(post.slug)}
      >
        <Image
          src={post.image}
          alt="Blog image"
          width={0}
          height={0}
          sizes="100vw"
          className={`w-full h-full object-cover rounded-lg ${
            hovered ? "scale-105" : "scale-100"
          } duration-700`}
        />

        <p className="absolute left-3 top-3 w-max h-max bg-white px-3 py-1 text-2xl leading-6 text-[#333]">
          {post.date ?? 26} <br />{" "}
          <span className="text-xs uppercase leading-3">
            {post.month ?? "AUG"}
          </span>
        </p>

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

      <div className="relative flex flex-col items-center gap-2 shadow-sm group-hover:hadow-lg p-6 text-center group-hover:shadow-lg">
        <p className="absolute left-1/2 -translate-x-1/2 -top-3 bg-primary px-3 py-1 font-semibold text-xs text-white uppercase z-20">
          {slug.includes("-") ? slug.split("-").join(" ") : slug}
        </p>
        <Link
          href={post.slug}
          className="font-medium text-2xl text-[#333] font-serif"
        >
          {post.title}
        </Link>
        <div className="flex items-center gap-4">
          <p className="text-sm text-[#bbb]">By</p>
          <Image
            src="/images/users/avatar.jpg"
            alt="Avatar"
            width={24}
            height={24}
            className="rounded-full"
          />
          <p className="text-sm text-[#bbb]">Admin</p>
          <i className="relative fa-regular fa-message text-[#bbb]">
            <p className="absolute -right-1 -top-2 bg-[#bbb] rounded-full p-1 text-[.525rem] text-white">
              0
            </p>
          </i>{" "}
          <i className="fa-solid fa-share-nodes text-[#bbb]"></i>
        </div>
        <p className="text-sm text-lightGray">
          {post.description.length > 130
            ? post.description.slice(0, 130) + "..."
            : post.description}
        </p>
        <Link
          href={post.slug}
          className="flex items-end gap-1 font-semibold text-[.8125rem] text-primary uppercase mt-2 group"
        >
          Continue Reading
          <div className="opacity-0 group-hover:lg:opacity-100 flex gap-1 cursor-pointer pb-[.375rem]">
            <div className="dot w-[3px] h-[3px] bg-primary rounded-full" />
            <div className="dot w-[3px] h-[3px] bg-primary rounded-full" />
            <div className="dot w-[3px] h-[3px] bg-primary rounded-full" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BlogPostCard;

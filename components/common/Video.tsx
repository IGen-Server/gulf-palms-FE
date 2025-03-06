"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const Video = ({
  src,
  overlay = false,
}: {
  src: string;
  overlay?: boolean;
}) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVideoLoaded(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative overflow-hidden w-full inset-0 h-full">
      {/* Fallback Image */}
      <Image
        src="/images/showroom_fallback_image.png"
        alt="Home Page"
        layout="fill"
        objectFit="cover"
        priority
        className={`absolute inset-0 z-0 transition-opacity duration-500 ${
          isVideoLoaded ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Video background */}
      <div
        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
          isVideoLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <video
          className="object-cover w-full h-full"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={src} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>

      {overlay && (
        <div className="absolute inset-0 bg-black bg-opacity-50 z-[1]"></div>
      )}
    </div>
  );
};
export default Video;

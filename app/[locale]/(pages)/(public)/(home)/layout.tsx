/* eslint-disable react/jsx-no-duplicate-props */
"use client";

import { useEffect, useState } from "react";
import PublicNavbar from "@/components/navbar/public-navbar/public-navbar";
import { ReactNode } from "react";
import Image from "next/image";
import homePageImage from "@/assets/images/homePageImage.jpg";
import './video-container.css'
import Link from "next/link";
import { ChatIcon } from "@/assets/images/icon/ChatIcon";

function PublicPageLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVideoLoaded(true); 
    }, 2000);

    return () => clearTimeout(timeout); 
  }, []);

  return (
    <div className="w-[100vw] mx-auto">
      <div className="relative overflow-hidden w-full inset-0 h-[582px] lg:h-[948px] mb-[90px]">
        {/* Fallback Image */}
        <Image
          src={homePageImage || "/placeholder.svg"}
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
            <source src="/video/bgVideo.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="absolute inset-0 bg-black bg-opacity-50 z-[1]"></div>
      </div>
      <div className="content !overflow-x-hidden px-1 sm:px-4 xl:px-0 !max-w-[100vw] mx-auto">
        <PublicNavbar />
        <div>{children}</div>
      </div>
      {/* <Footer /> */}
      {isVisible && (
        <a
          href="#"
          className="scrollToTop button-show"
          aria-label="Scroll to top button"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
        ></a>
      )}
      <div className="fixed bottom-[75px] left-4 cursor-pointer z-[50]">
       <Link href='https://api.whatsapp.com/send/?phone=96560660378&text&type=phone_number&app_absent=0'> <ChatIcon /> </Link>
      </div>
    </div>
  );
}

export default PublicPageLayout;

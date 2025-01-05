/* eslint-disable react/jsx-no-duplicate-props */
"use client";

import { useEffect, useRef, useState } from "react";
import PublicNavbar from "@/components/navbar/public-navbar/public-navbar";
import { ReactNode } from "react";
import Footer from "@/components/footer/footer";
import Image from "next/image";
import homePageImage from "@/assets/images/homePageImage.jpg";
import Player from "@vimeo/player";

function PublicPageLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (playerRef.current) {
      const player = new Player(playerRef.current, {
        id: 835241101,
        autoplay: true,
        muted: true,
        loop: true,
        controls: false,
        background: true,
        height: 960,
        maxheight: 960,
        quality: "1080p",
        responsive: true,
      });

      // Set iframeLoaded to true when the video is loaded and ready
      player
        .ready()
        .then(() => {
          console.log("Player is ready!");
          setTimeout(() => {
            setIframeLoaded(true);
          }, 3000);
        })
        .catch((error) => {
          console.error("Error initializing player:", error);
        });

      // Debugging event listener for 'loaded'
      player.on("loaded", () => {
        console.log("Video fully loaded!");
        setTimeout(() => {
          setIframeLoaded(true);
        }, 3000);
      });

      return () => {
        player.destroy();
      };
    }
  }, []);

  return (
    <div className="w-screen ">
      <div className="relative overflow-hidden w-screen inset-0 lg:h-[865px] mb-[90px]">
        {!iframeLoaded && (
          <Image
            src={homePageImage}
            alt="Home Page"
            layout="fill"
            objectFit="cover"
            priority
            className="absolute inset-0 z-0"
          />
        )}

        <div
          ref={playerRef}
          className={` inset-0 z-10 transition-opacity duration-500 ${
            iframeLoaded ? "opacity-100" : "opacity-0"
          }`}
        ></div>

        <div className="absolute inset-0 bg-black bg-opacity-50 z-[1]"></div>
      </div>

      <div className="content overflow-x-hidden px-1 sm:px-4 xl:px-0 bg-white">
        <PublicNavbar />
        <div>{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default PublicPageLayout;

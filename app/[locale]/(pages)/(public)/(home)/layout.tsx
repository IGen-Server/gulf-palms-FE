/* eslint-disable react/jsx-no-duplicate-props */
"use client";

import { useEffect, useRef, useState } from "react";
import PublicNavbar from "@/components/navbar/public-navbar/public-navbar";
import { ReactNode } from "react";
import Image from "next/image";
import homePageImage from "@/assets/images/homePageImage.jpg";
import Player from "@vimeo/player";
import './video-container.css'
import Footer from "@/components/footer/Footer";

function PublicPageLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const playerRef = useRef<HTMLDivElement>(null);
  const ChatIcon = () => (
    <svg
      style={{
        pointerEvents: "none",
        display: "block",
        height: "50px",
        width: "50px",
      }}
      width="50px"
      height="50px"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <path
          id="htwasqicona-chat"
          d="M1023.941 765.153c0 5.606-.171 17.766-.508 27.159-.824 22.982-2.646 52.639-5.401 66.151-4.141 20.306-10.392 39.472-18.542 55.425-9.643 18.871-21.943 35.775-36.559 50.364-14.584 14.56-31.472 26.812-50.315 36.416-16.036 8.172-35.322 14.426-55.744 18.549-13.378 2.701-42.812 4.488-65.648 5.3-9.402.336-21.564.505-27.15.505l-504.226-.081c-5.607 0-17.765-.172-27.158-.509-22.983-.824-52.639-2.646-66.152-5.4-20.306-4.142-39.473-10.392-55.425-18.542-18.872-9.644-35.775-21.944-50.364-36.56-14.56-14.584-26.812-31.471-36.415-50.314-8.174-16.037-14.428-35.323-18.551-55.744-2.7-13.378-4.487-42.812-5.3-65.649-.334-9.401-.503-21.563-.503-27.148l.08-504.228c0-5.607.171-17.766.508-27.159.825-22.983 2.646-52.639 5.401-66.151 4.141-20.306 10.391-39.473 18.542-55.426C34.154 93.24 46.455 76.336 61.07 61.747c14.584-14.559 31.472-26.812 50.315-36.416 16.037-8.172 35.324-14.426 55.745-18.549 13.377-2.701 42.812-4.488 65.648-5.3 9.402-.335 21.565-.504 27.149-.504l504.227.081c5.608 0 17.766.171 27.159.508 22.983.825 52.638 2.646 66.152 5.401 20.305 4.141 39.472 10.391 55.425 18.542 18.871 9.643 35.774 21.944 50.363 36.559 14.559 14.584 26.812 31.471 36.415 50.315 8.174 16.037 14.428 35.323 18.551 55.744 2.7 13.378 4.486 42.812 5.3 65.649.335 9.402.504 21.564.504 27.15l-.082 504.226z"
        ></path>
      </defs>
      <linearGradient
        id="htwasqiconb-chat"
        gradientUnits="userSpaceOnUse"
        x1="512.001"
        y1=".978"
        x2="512.001"
        y2="1025.023"
      >
        <stop offset="0" stopColor="#61fd7d"></stop>
        <stop offset="1" stopColor="#2bb826"></stop>
      </linearGradient>
      <use
        href="#htwasqicona-chat"
        overflow="visible"
        style={{ fill: "url(#htwasqiconb-chat)" }}
      ></use>
      <g>
        <path
          style={{ fill: "#FFFFFF" }}
          d="M783.302 243.246c-69.329-69.387-161.529-107.619-259.763-107.658-202.402 0-367.133 164.668-367.214 367.072-.026 64.699 16.883 127.854 49.017 183.522l-52.096 190.229 194.665-51.047c53.636 29.244 114.022 44.656 175.482 44.682h.151c202.382 0 367.128-164.688 367.21-367.094.039-98.087-38.121-190.319-107.452-259.706zM523.544 808.047h-.125c-54.767-.021-108.483-14.729-155.344-42.529l-11.146-6.612-115.517 30.293 30.834-112.592-7.259-11.544c-30.552-48.579-46.688-104.729-46.664-162.379.066-168.229 136.985-305.096 305.339-305.096 81.521.031 158.154 31.811 215.779 89.482s89.342 134.332 89.312 215.859c-.066 168.243-136.984 305.118-305.209 305.118zm167.415-228.515c-9.177-4.591-54.286-26.782-62.697-29.843-8.41-3.062-14.526-4.592-20.645 4.592-6.115 9.182-23.699 29.843-29.053 35.964-5.352 6.122-10.704 6.888-19.879 2.296-9.176-4.591-38.74-14.277-73.786-45.526-27.275-24.319-45.691-54.359-51.043-63.543-5.352-9.183-.569-14.146 4.024-18.72 4.127-4.109 9.175-10.713 13.763-16.069 4.587-5.355 6.117-9.183 9.175-15.304 3.059-6.122 1.529-11.479-.765-16.07-2.293-4.591-20.644-49.739-28.29-68.104-7.447-17.886-15.013-15.466-20.645-15.747-5.346-.266-11.469-.322-17.585-.322s-16.057 2.295-24.467 11.478-32.113 31.374-32.113 76.521c0 45.147 32.877 88.764 37.465 94.885 4.588 6.122 64.699 98.771 156.741 138.502 21.892 9.45 38.982 15.094 52.308 19.322 21.98 6.979 41.982 5.995 57.793 3.634 17.628-2.633 54.284-22.189 61.932-43.615 7.646-21.427 7.646-39.791 5.352-43.617-2.294-3.826-8.41-6.122-17.585-10.714z"
        ></path>
      </g>
    </svg>
  );
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (playerRef.current) {
      const player = new Player(playerRef.current, {
        id: 835241101,
        autoplay: true,
        muted: true,
        loop: true,
        controls: false,
        background: true,
        height: 988,
        quality: "1080p",
      });

      // Set iframeLoaded to true when the video is loaded and ready
      player
        .ready()
        .then(() => {
          console.log("Player is ready!");
          setTimeout(() => {
            setIframeLoaded(true);
          }, 4000);
        })
        .catch((error) => {
          console.error("Error initializing player:", error);
        });

      // Debugging event listener for 'loaded'
      player.on("loaded", () => {
        console.log("Video fully loaded!");
        setTimeout(() => {
          setIframeLoaded(true);
        }, 4000);
      });

      return () => {
        player.destroy();
      };
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-screen ">
      <div className="relative overflow-hidden w-screen inset-0 h-[582px] lg:h-[948px] mb-[90px]">
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
          className={` inset-0 z-10 transition-opacity duration-100 h-[582px] lg:h-[948px] ${
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
        <ChatIcon />
      </div>
    </div>
  );
}

export default PublicPageLayout;

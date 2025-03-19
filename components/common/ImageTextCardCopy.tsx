/* eslint-disable @next/next/no-img-element */

"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

interface ButtonProps {
  text: string; // Button text
  bgColor?: string; // Background color for the button
  bgHoverColor?: string;
  height?: string; // Height of the button
  width?: string; // Width of the button
  textColor?: string; // Text color for the button
  textHoverColor?: string;
  fontWeight?: string; // Font weight for the button text
  borderRadius?: string; // Border radius of the button
  border?: string; // Border style (e.g., "1px solid")
  borderColor?: string; // Border color
  href?: string; // Hyperlink reference
  onClick?: () => void; // Click handler
}

interface ButtonsGroupProps {
  items: ButtonProps[]; // Array of button configurations
  type?: "row" | "col"; // Layout type: row or column
  gap?: string; // Gap between buttons
  align?: string; // Gap between buttons
}

interface ContentProps {
  type: "image" | "text" | "component" | "video";
  src?: string; // Image source if the type is "image"
  heading?: string; // Heading if the type is "text"
  headingSize?: string; // Font size for the heading
  headingColor?: string; // Font color for the heading
  headingWeight?: string; // Font weight for the heading
  subheading?: string; // Subheading if provided
  subheadingSize?: string; // Font size for the subheading
  subheadingColor?: string; // Font color for the subheading
  subheadingWeight?: string; // Font weight for the subheading
  bullets?: string[]; // Bullet points if the type is "text"
  bulletsSpan?: string;
  textSize?: string; // Font size for bullets
  textColor?: string; // Text color for bullets
  fontWeight?: string; // Font weight for bullets
  bgColor?: string; // Background color for this content
  buttons?: ButtonsGroupProps; // Buttons group configuration
  component?: React.JSX.Element; //
  textAlign?: string;
  imgHeight?: string;
  imgWidth?: string;
}

interface ImageTextCardCopyProps {
  leftContent: ContentProps;
  rightContent: ContentProps;
  size?: {
    width?: string; // Width of the card
    height?: string; // Height of the card
  };
  className?: string;
  colReversed?: boolean;
  imageFirst?: boolean;
}

export default function ImageTextCardCopy({
  leftContent,
  rightContent,
  size = { width: "max-w-[1200px]", height: "h-fit" },
  className = "",
  colReversed = false,
  imageFirst,
}: ImageTextCardCopyProps) {
  const { i18n: { language } } = useTranslation();
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVideoLoaded(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const renderButtons = (buttons: ButtonsGroupProps | undefined) => {
    if (!buttons || buttons.items.length === 0) return null;

    const layoutClass = buttons.type === "col" ? "flex-col" : "flex-row";
    const gapClass = buttons.gap || "gap-3";
    const alignClass = buttons.align && `justify-${buttons.align}`;

    return (
      <div
        className={`flex w-full items-center ${alignClass} ${layoutClass} ${gapClass}`}
      >
        {buttons.items.map((button, index) => (
          <button
            key={index}
            className={`px-3 py-2 duration-300 !cursor-pointer ${button.textHoverColor || "hover:text-white"
              } ${button.bgColor || "bg-primary"} ${button.bgHoverColor || "hover:bg-primary"
              } ${button.textColor || "text-white"} ${button.borderColor || "#777"
              }
              ${button.fontWeight || "font-medium"} ${button.borderRadius || "rounded"
              } `}
            style={{
              height: button.height || "auto",
              width: button.width || "auto",
              border: button.border || "",

              cursor: "pointer",
            }}
            onClick={button.onClick}
          >
            {button.href ? (
              <Link href={button.href} key={index} className="cursor-pointer">
                {button.text}
              </Link>
            ) : (
              button.text
            )}
          </button>
        ))}
      </div>
    );
  };

  const renderContent = (content: ContentProps) => {
    const textAlignClass = content.textAlign
      ? `text-${content.textAlign}`
      : "";

    if (content.type === "text") {
      return (
        <div className={`w-full space-y-[20px] p-[30px] ${textAlignClass}`}>
          {content.subheading && (
            <h3
              className={`${content.subheadingColor || "text-primary"} ${content.subheadingSize || "text-md"
                } 
              ${content.subheadingWeight || "font-medium"} mb-2`}
            >
              {content.subheading}
            </h3>
          )}
          {content.heading && (
            <h2
              className={`${content.headingColor || "text-black"} ${content.headingSize || "text-[30px]"
                } 
              ${content.headingWeight || "font-bold"} mb-2`}
            >
              {content.heading}
            </h2>
          )}

          {content.bullets && content.bullets.length === 1 ? (
            <p
              className={`${content.textColor || "text-secondary"} ${content.textSize || "text-sm"
                } 
              ${content.fontWeight || "font-normal"} mb-1`}
            >
              <span className="font-semibold">{content.bulletsSpan}</span>
              {content.bullets[0]}
            </p>
          ) : (
            content.bullets && (
              <div className="w-full h-full pl-3">
                <ul className="list-disc text-gray-600 space-y-3">
                  {content.bullets.map((bullet, index) => (
                    <li
                      key={index}
                      className={`${content.textColor || "text-secondary"} ${content.textSize || "text-sm"
                        }
                      ${content.fontWeight || "font-normal"} mb-1`}
                    >
                      <span className="font-semibold">
                        {content.bulletsSpan}
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}

          {content.buttons && renderButtons(content.buttons)}
        </div>
      );
    }

    if (content.type === "video" && content.src) {
      return (
        <div className="relative overflow-hidden w-full inset-0 h-[470px]">
          {/* Fallback Image */}
          <Image
            src="/images/showroom_fallback_image.png"
            alt="Home Page"
            layout="fill"
            objectFit="cover"
            priority
            className={`absolute inset-0 z-0 transition-opacity duration-500 ${isVideoLoaded ? "opacity-0" : "opacity-100"
              }`}
          />

          {/* Video background */}
          <div
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${isVideoLoaded ? "opacity-100" : "opacity-0"
              }`}
          >
            <video
              className="object-cover w-full h-full"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={content.src} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* <div className="absolute inset-0 bg-black bg-opacity-50 z-[1]"></div> */}
        </div>
      );
    }

    if (content.type === "image" && content.src) {
      return (
        <img
          src={content.src}
          alt="Content"
          className={`w-full ${content.imgHeight || "h-full"} object-cover`}
        />
      );
    }
    if (content.type === "component") {
      return content.component;
    }

    return null;
  };

  return (
    <div
      className={`w-full mx-auto ${size.width} ${size.height} gap-12 lg:gap-0 grid grid-cols-1 lg:grid-cols-2 gap-y-3 ${className} justify-between`}
    >
      {/* Left Content */}
      <div
        className={`relative flex flex-col items-start w-full ${language === "en" ? "text-left" : "text-right"}
          ${leftContent.bgColor || ""}
          ${colReversed ? "order-1 lg:order-2" : "order-1"}
          ${leftContent.type === "text" && "grid place-content-center"}
          ${imageFirst && leftContent.type === "text"
            ? "max-lg:order-2"
            : "order-1"
          }
        `}
      >
        {renderContent(leftContent)}
      </div>

      {/* Right Content */}
      <div
        className={`relative flex flex-col items-start w-full ${language === "en" ? "text-left" : "text-right"}
          ${rightContent.bgColor || ""}
          ${colReversed ? "order-2 lg:order-1" : "order-2"}
          ${rightContent.type === "text" && "grid place-content-center"}
          ${imageFirst && rightContent.type === "text"
            ? "max-lg:order-2"
            : "order-1"
          }

        `}
      >
        {renderContent(rightContent)}
      </div>
    </div>
  );
}

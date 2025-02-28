/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

interface ButtonProps {
  text: string; // Button text
  bgColor?: string; // Background color for the button
  height?: string; // Height of the button
  width?: string; // Width of the button
  textColor?: string; // Text color for the button
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

interface ImageTextCardProps {
  leftContent: ContentProps;
  rightContent: ContentProps;
  size?: {
    width?: string; // Width of the card
    height?: string; // Height of the card
  };
  className?: string;
  colReversed?: boolean;
}

export default function ImageTextCard({
  leftContent,
  rightContent,
  size = { width: "max-w-[1140px]", height: "h-fit" },
  className = "",
  colReversed = false,
}: ImageTextCardProps) {
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
            className={`px-3 py-2 ${button.bgColor || "bg-primary"} ${
              button.textColor || "text-white"
            } 
              ${button.fontWeight || "font-medium"} ${
              button.borderRadius || "rounded"
            } duration-300 !cursor-pointer hover:bg-primary hover:text-white`}
            style={{
              height: button.height || "auto",
              width: button.width || "auto",
              border: button.border || "none",
              borderColor: button.borderColor || "black",
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
      : "text-left";

    if (content.type === "text") {
      return (
        <div className={`w-full space-y-[20px] p-[30px] ${textAlignClass}`}>
          {content.subheading && (
            <h3
              className={`${content.subheadingColor || "text-primary"} ${
                content.subheadingSize || "text-md"
              } 
              ${content.subheadingWeight || "font-medium"} mb-2`}
            >
              {content.subheading}
            </h3>
          )}
          {content.heading && (
            <h2
              className={`${content.headingColor || "text-black"} ${
                content.headingSize || "text-[30px]"
              } 
              ${content.headingWeight || "font-bold"} mb-2`}
            >
              {content.heading}
            </h2>
          )}

          {content.bullets && content.bullets.length === 1 ? (
            <p
              className={`${content.textColor || "text-secondary"} ${
                content.textSize || "text-sm"
              } 
              ${content.fontWeight || "font-normal"} mb-1`}
            >
              {content.bullets[0]}
            </p>
          ) : (
            content.bullets && (
              <div className="w-full h-full pl-3">
                <ul className="list-disc text-gray-600 space-y-3">
                  {content.bullets.map((bullet, index) => (
                    <li
                      key={index}
                      className={`${content.textColor || "text-secondary"} ${
                        content.textSize || "text-sm"
                      } 
                      ${content.fontWeight || "font-normal"} mb-1`}
                    >
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
        <div className="w-full h-[470px] overflow-hidden">
          <iframe
            src={`${content.src.replace(
              "vimeo.com",
              "player.vimeo.com/video"
            )}?autoplay=1&background=1&loop=1&byline=0&title=0&portrait=0`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            className="absolute top-0 left-0 w-full h-full object-cover"
            allow="autoplay; fullscreen"
            frameBorder="0"
          ></iframe>
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
      className={`w-full mx-auto ${size.width} ${size.height} gap-12 lg:gap-0 grid grid-cols-1 lg:grid-cols-2 gap-y-7 ${className} justify-between`}
    >
      {/* Left Content */}
      <div
        className={`relative flex flex-col items-start w-full text-justify
          ${leftContent.bgColor || ""}
          ${colReversed ? "order-1 lg:order-2" : "order-1"}
          ${leftContent.type === "text" && "grid place-content-center"}
        `}
      >
        {renderContent(leftContent)}
      </div>

      {/* Right Content */}
      <div
        className={`relative flex flex-col items-start w-full text-justify
          ${rightContent.bgColor || ""}
          ${colReversed ? "order-2 lg:order-1" : "order-2"}
          ${rightContent.type === "text" && "grid place-content-center"}
        `}
      >
        {renderContent(rightContent)}
      </div>
    </div>
  );
}

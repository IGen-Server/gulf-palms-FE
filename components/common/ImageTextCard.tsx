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
}

interface ContentProps {
  type: "image" | "text";
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
}

interface ImageTextCardProps {
  leftContent: ContentProps;
  rightContent: ContentProps;
  size?: {
    width?: string; // Width of the card
    height?: string; // Height of the card
  };
  className?: string; // Optional additional styling classes
}

export default function ImageTextCard({
  leftContent,
  rightContent,
  size = { width: "max-w-[1140px]", height: "h-fit" },
  className = "",
}: ImageTextCardProps) {
  const renderButtons = (buttons: ButtonsGroupProps | undefined) => {
    if (!buttons || buttons.items.length === 0) return null;

    const layoutClass = buttons.type === "col" ? "flex-col" : "flex-row";
    const gapClass = buttons.gap || "gap-3";

    return (
      <div className={`flex ${layoutClass} ${gapClass}`}>
        {buttons.items.map((button, index) => {
          const ButtonContent = (
            <button
              key={index}
              className={`
                px-3 py-2 
                ${button.bgColor || "bg-primary"} 
                ${button.textColor || "text-white"} 
                ${button.fontWeight || "font-medium"} 
                ${button.borderRadius || "rounded"} 
                !cursor-pointer
              `}
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
                `${button.text}`
              )}
            </button>
          );

          return ButtonContent;
        })}
      </div>
    );
  };

  const renderContent = (content: ContentProps) => {
    if (content.type === "text") {
      return (
        <div className="space-y-[20px] p-[30px]">
          {content.subheading && (
            <h3
              className={`${content.subheadingColor || "text-primary"} ${
                content.subheadingSize || "text-md"
              } ${content.subheadingWeight || "font-medium"} mb-2`}
            >
              {content.subheading}
            </h3>
          )}
          {content.heading && (
            <h2
              className={`${content.headingColor || "text-black"} ${
                content.headingSize || "text-[30px]"
              } ${content.headingWeight || "font-bold"} mb-2`}
            >
              {content.heading}
            </h2>
          )}

          {content.bullets && content.bullets.length === 1 ? (
            <p
              className={`${content.textColor || "text-secondary"} ${
                content.textSize || "text-sm"
              } ${content.fontWeight || "font-normal"} mb-1`}
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
                      } ${content.fontWeight || "font-normal"} mb-1`}
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
    if (content.type === "image" && content.src) {
      return (
        <img
          src={content.src}
          alt="Content"
          className="w-full h-full object-cover"
        />
      );
    }
    return null;
  };

  return (
    <div
      className={`w-max mx-auto ${size.width} ${size.height} grid grid-cols-1 md:grid-cols-2 ${className} justify-between`}
    >
      {/* Left Content */}
      <div
        className={`flex flex-col items-start w-full text-justify ${
          leftContent.bgColor || ""
        }`}
      >
        {renderContent(leftContent)}
      </div>

      {/* Right Content */}
      <div
        className={`flex flex-col items-start w-full text-justify  ${
          rightContent.bgColor || ""
        }`}
      >
        {renderContent(rightContent)}
      </div>
    </div>
  );
}

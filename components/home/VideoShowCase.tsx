/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Play } from "lucide-react";

export default function VideoShowCase() {
  const renderImage = (url: any) => {
    const rendredImage = (
      <div className="w-full h-[400px] relative">
        <Play className="absolute top-0 left-0" />
        <img src={url} alt="img" />
      </div>
    );
    return rendredImage;
  };
  return (
    <div className="w-screen mx-auto absolute left-0 h-[306px]">
      <div className="flex">
        {renderImage(
          "https://gulfpalms.com/wp-content/uploads/sb-instagram-feed-images/448317886_1209369780235439_7245717242166709013_nfull.jpg"
        )}

        {renderImage(
          "https://gulfpalms.com/wp-content/uploads/sb-instagram-feed-images/448317886_1209369780235439_7245717242166709013_nfull.jpg"
        )}
      </div>
    </div>
  );
}

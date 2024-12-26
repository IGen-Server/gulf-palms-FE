/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Play } from "lucide-react";

export default function VideoShowCase() {
  const renderImage = (url: any) => {
    const rendredImage = (
      <div
        className="w-full h-[400px] "
        style={{
          backgroundImage: `url(${url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="grid place-content-center w-full h-full">
          <Play className=" text-white w-[48px] h-[42px] bg-white" />
        </div>
      </div>
    );
    return rendredImage;
  };
  return (
    <div className="w-screen mx-auto absolute left-0 min-h-[400px]">
      <div className="flex gap-3">
        {renderImage(
          "https://gulfpalms.com/wp-content/uploads/sb-instagram-feed-images/448317886_1209369780235439_7245717242166709013_nfull.jpg"
        )}

        {renderImage(
          "https://gulfpalms.com/wp-content/uploads/sb-instagram-feed-images/447071415_478665101276128_5988897200522755729_nfull.jpg"
        )}

        {renderImage(
          "https://gulfpalms.com/wp-content/uploads/sb-instagram-feed-images/447071415_478665101276128_5988897200522755729_nfull.jpg"
        )}

        {renderImage(
          "https://gulfpalms.com/wp-content/uploads/sb-instagram-feed-images/445641991_2845812738899265_2679236145107119745_nfull.jpg"
        )}

        {renderImage(
          "https://gulfpalms.com/wp-content/uploads/sb-instagram-feed-images/447071415_478665101276128_5988897200522755729_nfull.jpg"
        )}
        {renderImage(
          "https://gulfpalms.com/wp-content/uploads/sb-instagram-feed-images/447071415_478665101276128_5988897200522755729_nfull.jpg"
        )}
      </div>
    </div>
  );
}

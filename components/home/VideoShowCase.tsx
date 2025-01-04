/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function VideoShowCase() {
  const renderImage = (url: any) => {
    const rendredImage = (
      <div
        className="w-full h-[400px] grid place-content-center"
        style={{
          backgroundImage: `url(${url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-8 h-8 ">
          <svg
            style={{ color: "rgba(255,255,255,1)" }}
            className="svg-inline--fa fa-play fa-w-14 sbi_playbtn "
            aria-label="Play"
            aria-hidden="true"
            data-prefix="fa"
            data-icon="play"
            role="presentation"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="#ffffff"
              d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
            />
          </svg>
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

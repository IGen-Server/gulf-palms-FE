"use client";
import React from "react";

const MapStyle = {
  width: 1200,
  height: 500,
};

export default function Map() {
  return (
    <div className="w-full lg:w-[1200px] mx-auto grid place-content-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6957.800264107265!2d47.947506!3d29.314605!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9aee8dd72f25%3A0x13c1872301ebdf24!2sGulf%20Palms%20Center!5e0!3m2!1sen!2sus!4v1742391844690!5m2!1sen!2sus"
        width={MapStyle.width}
        height={MapStyle.height}
        style={{ border: 0 }}
        aria-hidden="false"
        title="Gulf Palms Center"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

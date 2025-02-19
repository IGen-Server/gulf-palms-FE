'use client'

import React from "react";
import './loader.css';

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-200/70 z-[999999]">
      <div className="loader" />
    </div>
  );
}

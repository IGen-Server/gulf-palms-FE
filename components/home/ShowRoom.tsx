import React from "react";

export default function ShowRoom() {
  return (
    <div className="w-screen mx-auto absolute left-0 min-h-[306px]">
      <div className="flex">
        <div className="text-white space-y-3 bg-[#6F803D] p-[50px] text-center w-full h-[306px] flex flex-col items-center justify-center">
          <p className="text-xl">ABDALI</p>
          <p className="text-2xl font-bold">ITTIHAD SHOWROOM FARM SHOWROOM</p>
          <button className="px-3 py-2 rounded-none bg-secondary text-gray-700">
            Get Location
          </button>
        </div>
        <div className="text-white space-y-3 bg-primary p-[50px] text-center w-full h-[306px] flex flex-col items-center justify-center">
          <p className="text-xl">RAI</p>
          <p className="text-2xl font-bold">MAIN BRANCH</p>
          <button className="px-3 py-2 rounded-none bg-secondary text-gray-700">
            Get Location
          </button>
        </div>
        <div className="text-white space-y-3 bg-[#6F803D] p-[50px] text-center w-full h-[306px] flex flex-col items-center justify-center">
          <p className="text-xl">WAFRAH</p>
          <p className="text-2xl font-bold">CORPORATE SHOWROOM FARM SHOWROOM</p>
          <button className="px-3 py-2 rounded-none bg-secondary text-gray-700">
            Get Location
          </button>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function ShowRoom() {
  return (
    <div className="w-screen mx-auto absolute left-0 min-h-[306px]">
      <div className="flex">
        <div className="text-white space-y-3 bg-[#6F803D] p-[50px] text-center w-full h-[306px] flex flex-col items-center justify-center">
          <p className="text-[30px] font-sans font-light">ABDALI</p>
          <p className="text-[29px] font-bold font-arabic h-[100px]">
            ITTIHAD SHOWROOM
            <br />
            FARM SHOWROOM
          </p>
          <button className="w-[132px] h-[42px]  grid place-content-center uppercase rounded-none bg-[#f3f3f3] text-gray-700 text-[13px] font-sans hover:bg-gray-200 font-semibold">
            Get Location
          </button>
        </div>
        <div className="text-white space-y-3 bg-primary p-[50px] text-center w-full h-[306px] flex flex-col items-center justify-center">
          <p className="text-[30px] font-sans font-light">RAI</p>
          <p className="text-[29px] font-bold font-arabic h-[100px]">
            MAIN BRANCH
          </p>
          <button className="w-[132px] h-[42px]  grid place-content-center uppercase rounded-none bg-[#f3f3f3] text-gray-700 text-[13px] font-sans hover:bg-gray-200 font-semibold">
            Get Location
          </button>
        </div>
        <div className="text-white space-y-3 bg-[#6F803D] p-[50px] text-center w-full h-[306px] flex flex-col items-center justify-center">
          <p className="text-[30px] font-sans font-light">WAFRAH</p>
          <p className="text-[29px] font-bold font-arabic h-[100px] ">
            CORPORATE SHOWROOM
            <br />
            FARM SHOWROOM
          </p>
          <button className="w-[132px] h-[42px] grid place-content-center uppercase rounded-none bg-[#f3f3f3] text-gray-700 text-[13px] font-sans hover:bg-gray-200 font-semibold">
            Get Location
          </button>
        </div>
      </div>
    </div>
  );
}

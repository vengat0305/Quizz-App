import React from "react";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center  bg-[#fff] backdrop-filter backdrop-blur-sm z-50">
      <div>
        <span className="relative flex h-8 w-8">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#000000] opacity-75  "></span>
          <p className="font-display text-[#020202] font-bold text-2xl animate-pulse ">
            Processing...
          </p>
          <span className="relative inline-flex rounded-full h-3 w-100 bg-[#686868]"></span>
        </span>
      </div>
    </div>
  );
};

export default Loading;

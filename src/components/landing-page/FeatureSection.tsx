import React from "react";
import { features } from "src/constants";

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-[#004AAD] text-white rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Feature
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide relative">
          <span className="relative z-10 text-[#004AAD]">Key Benefits </span>
          <span className="bg-gradient-to-r from-[#004AAD] to-[#004AAD] text-transparent bg-clip-text relative z-10">
            For Recruiters
          </span>
          <span className="absolute inset-0 text-black z-0" aria-hidden="true">
            Key Benefits For Recruiters
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-[#004AAD] text-white justify-center items-center rounded-full">
                {React.createElement(feature.icon)} {/* Correct way to render as a component */}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl text-[#101720]">
                  {feature.text}
                </h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;

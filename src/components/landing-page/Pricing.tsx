import { CheckCircle2 } from "lucide-react";
import React from "react";
import { pricingOptions } from "src/constants";

const Pricing = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl text-[#004AAD] sm:text-5xl lg:text-6xl text-center my-8 tracking-wide relative">
        <span className="relative z-10">Pricing</span>
        <span className="absolute inset-0 text-black z-0" aria-hidden="true">
          Pricing
        </span>
      </h2>

      <div className="flex flex-wrap mt-10">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 rounded-xl shadow-[0px_6px_15px_rgba(0,0,0,0.1),0px_-6px_15px_rgba(0,0,0,0.05)] hover:shadow-[0px_10px_20px_rgba(0,0,0,0.2),0px_-10px_20px_rgba(0,0,0,0.1)] transition-shadow duration-300 ease-in-out">
              <p className="text-4xl mb-8">
                {option.title}
                {option.title === "Pro" && (
                  <span className="bg-gradient-to-r from-[#004AAD] to-[#004AAD] text-transparent bg-clip-text text-xl mb-4 ml-2">
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                <span className="text-neutral-400 tracking-tight">/Month</span>
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl text-[#101720] hover:text-white bg-transparent hover:bg-[#004AAD] border border-[#004AAD] rounded-lg transition duration-200"
              >
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;

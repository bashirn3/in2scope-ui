import React from "react";
import Client1 from "../../assets/3.svg";
import Client2 from "../../assets/4.svg";

const Testimonials = () => {
  return (
    <div className="mt-20 px-4 lg:px-0 tracking-wide" id="review">
      {/* Heading */}
      <h2 className="text-3xl text-[#004AAD] sm:text-4xl lg:text-5xl text-center my-10 lg:my-16 relative">
        <span className="relative z-10 block">What People Are Saying</span>
        <span className="absolute inset-0 text-black opacity-20 z-0" aria-hidden="true">
          What People Are Saying
        </span>
      </h2>

      {/* Images */}
      <div className="flex flex-col md:flex-row justify-center gap-8 mt-10">
        <img
          className="w-full max-w-xs md:max-w-md lg:max-w-lg object-contain rounded-lg border border-neutral-300 shadow-md hover:shadow-lg transition-shadow duration-200"
          src={Client1}
          alt="Client 1"
        />
        <img
          className="w-full max-w-xs md:max-w-md lg:max-w-lg object-contain rounded-lg border border-neutral-300 shadow-md hover:shadow-lg transition-shadow duration-200"
          src={Client2}
          alt="Client 2"
        />
      </div>
    </div>
  );
};

export default Testimonials;

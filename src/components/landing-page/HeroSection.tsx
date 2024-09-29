import React from "react";
import HeroImg1 from "../../assets/HeroImg1.jpeg";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl text-center tracking-wide relative">
        Instant School Locator
      </h1>

     {/* Image Section */}
     <div className="w-full max-w-2xl mt-8 lg:mt-12">
        <div className="relative rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
          <img
            src={HeroImg1}
            alt="Hero"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Description and Call to Action */}
      <div className="text-center mt-8 lg:mt-12 space-y-6 max-w-3xl">
        <p className="text-base sm:text-lg text-gray-600">
          Made for Education Recruiters. <br />
          By Education Recruiters. <br />
          Find out EXACTLY where your candidates <br />
          can get to...instantly!
        </p>
        <a
          href="/Main"
          className="inline-block bg-[#004AAD] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
        >
          Try Now
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
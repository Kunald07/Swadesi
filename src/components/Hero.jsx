import React from 'react';

const images = ['/fruits.png', '/fruits2.png', '/fruits3.png'];

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-start justify-between px-6 py-14 bg-gradient-to-br from-green-50 via-green-100 to-lime-50">

      {/* Left Side - 80% of left half */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center">
        <div className="relative w-[95%] h-[500px] md:h-[500px]">
          <div className="absolute top-0 right-28 z-10 w-80 h-60 shadow-2xl rounded-xl overflow-hidden rotate-[6deg]">
            <img src={images[0]} alt="img1" className="w-full h-full object-cover" />
          </div>
          <div className="absolute top-20 left-0 z-20 w-80 h-60 shadow-2xl rounded-xl overflow-hidden rotate-[-4deg]">
            <img src={images[1]} alt="img2" className="w-full h-full object-cover" />
          </div>
          <div className="absolute top-40 left-32 z-30 w-80 h-60 shadow-2xl rounded-xl overflow-hidden rotate-[0deg]">
            <img src={images[2]} alt="img3" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Right Side - 90% of right half */}
      <div className="w-full md:w-1/2 flex justify-center items-center mt-0 py-14">
        <div className="w-[95%] bg-white/60 backdrop-blur-md border border-green-200 shadow-xl rounded-2xl p-8 md:p-10 text-center md:text-left transition-all duration-300 hover:shadow-2xl">
            <p className="text-4xl font-extrabold text-green-700 uppercase mb-4">
            Swadeshi Industries and Leasing Ltd
            </p>
            <h1 className="text-3xl md:text-2xl font-semibold text-gray-900 leading-tight mb-6">
            PRESERVATIVE - FREE NATURAL FOODS
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 italic">
            “āhāra-śuddhau, if the food is pure; <br /> sattva-śuddhiḥ, the mind is pure”
            </p>
        </div>
    </div>
    </section>
    // <verticals />
  );
};

export default Hero;
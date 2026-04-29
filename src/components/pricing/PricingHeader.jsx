import React from "react";
import heroBg from "../../assets/pricing/pricingHero.svg";

export default function PricingHeader() {
  return (
    <div className="relative text-center pt-48 pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <img
          src={heroBg}
          alt="background decoration"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 px-4">
        <h1 className="text-3xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
          Scale Faster with the{" "}
          <span className="relative inline-block">
            Right Plan
            <span className="absolute left-0 -bottom-2 w-full h-[6px] bg-gradient-to-r from-orange-500 to-red-600 rounded-full"></span>
          </span>
        </h1>
        <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto font-medium">
          For Garages & Workshops, we’ve got pricing that grows with you.
        </p>
      </div>
    </div>
  );
}

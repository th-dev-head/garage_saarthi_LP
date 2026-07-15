import React from "react";
import { FaPlay, FaCheck } from "react-icons/fa";
import { FRONTEND_URL } from "@/src/config/env";
import { trackEvent } from "@/src/utils/pixel";

export default function GEFreeTrial() {
  const handleTrialClick = () => {
    trackEvent("trial_cta_click", {
      page_path: "/solutions/garage-erp-software",
      page_type: "core_commercial",
      page_topic: "garage_erp_software",
      cta_location: "free_trial",
      cta_label: "Start Free Trial Now",
      destination: `${FRONTEND_URL}/signup`
    });
    window.open(`${FRONTEND_URL}/signup`, "_blank");
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-[#1E293B] text-white flex justify-center border-b border-slate-800">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div className="space-y-6">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7]/10 px-3 py-1 rounded-full">
            Free Trial Access
          </span>
          <h2 className="text-2xl md:text-4xl font-bold mt-2 leading-tight">
            Try GarageSaarthi ERP Free for 7 Days
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            Take a complete self-guided tour of the platform. Set up your staff profiles, upload your spare parts catalog, customize your GST billing serial numbers, and create live job cards.
          </p>
          <div className="space-y-3 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <FaCheck className="text-primary w-3.5 h-3.5" />
              <span>Full features unlocked immediately. No restriction.</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-primary w-3.5 h-3.5" />
              <span>No credit card or online payment details needed to sign up.</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-primary w-3.5 h-3.5" />
              <span>Convert trial directly into a quarterly or annual plan when ready.</span>
            </div>
          </div>
          <div className="pt-4">
            <button
              onClick={handleTrialClick}
              className="rounded-full bg-primary hover:bg-primary-hover text-white px-8 py-3 text-sm font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-lg"
            >
              Start Free Trial Now
              <FaPlay className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Right Side Video Mockup or image */}
        <div className="relative border border-slate-700/80 p-8 rounded-3xl bg-slate-900/50 flex flex-col justify-center items-center h-72">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none" />
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary cursor-pointer hover:scale-105 transition-transform duration-200" onClick={handleTrialClick}>
            <FaPlay className="w-6 h-6 ml-1" />
          </div>
          <span className="text-xs font-bold mt-4 tracking-wider uppercase text-slate-400">Watch Platform Overview</span>
        </div>
      </div>
    </section>
  );
}

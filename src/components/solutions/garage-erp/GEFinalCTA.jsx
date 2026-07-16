import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FRONTEND_URL } from "@/src/config/env";
import { trackEvent } from "@/src/utils/pixel";
import GradientUnderline from "../../common/GradientUnderline";

export default function GEFinalCTA() {
  const handleTrialClick = () => {
    trackEvent("trial_cta_click", {
      page_path: "/solutions/garage-erp-software",
      page_type: "core_commercial",
      page_topic: "garage_erp_software",
      cta_location: "final_cta",
      cta_label: "Try GarageSaarthi For Free",
      destination: `${FRONTEND_URL}/signup`
    });
    window.open(`${FRONTEND_URL}/signup`, "_blank");
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-900 text-center flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-4xl 2xl:max-w-full w-full space-y-6">
        <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
          Ready to Centralize and{" "}
          <GradientUnderline>Grow Your Garage Business?</GradientUnderline>
        </h2>
        <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Join hundreds of multi-brand workshops and garage chains across India using GarageSaarthi ERP to manage their business efficiently.
        </p>
        <div className="pt-4 flex justify-center">
          <button
            onClick={handleTrialClick}
            className="rounded-full bg-primary hover:bg-primary-hover text-white px-10 py-4 text-sm font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-lg"
          >
            Try GarageSaarthi For Free
            <FaArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
        <p className="text-[10px] text-slate-400">
          No credit card required. Free 7-day trial with full access.
        </p>
      </div>
    </section>
  );
}


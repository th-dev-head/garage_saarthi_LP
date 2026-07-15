import React from "react";
import { FaPlay, FaCheck } from "react-icons/fa";
import Button from "../common/Button";
import { FRONTEND_URL } from "@/src/config/env";
import { trackEvent } from "@/src/utils/pixel";
import GradientUnderline from "../common/GradientUnderline";

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
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-900 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div className="space-y-6">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Free Trial Access
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-2 leading-tight">
            Try GarageSaarthi ERP{" "}
            <GradientUnderline>Free for 7 Days</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Take a complete self-guided tour of the platform. Set up your staff profiles, upload your spare parts catalog, customize your GST billing serial numbers, and create live job cards.
          </p>
          <div className="space-y-3 text-xs text-slate-600">
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
            <Button
              variant="trial"
              onClick={handleTrialClick}
              icon={<FaPlay className="w-3 h-3" />}
            >
              Start Free Trial Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

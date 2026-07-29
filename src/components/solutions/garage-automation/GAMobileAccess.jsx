"use client";

import React from "react";
import Button from "../../common/Button";
import PlayStoreBadge from "../../common/PlayStoreBadge";
import { FRONTEND_URL } from "@/src/config/env";
import { trackEvent } from "@/src/utils/pixel";
import GradientUnderline from "../../common/GradientUnderline";
import { FaArrowRight } from "react-icons/fa";

export default function GAMobileAccess() {
  const handleTrialClick = () => {
    trackEvent("trial_cta_click", {
      page_path: "/solutions/garage-automation-software",
      page_name: "garage_automation_software",
      cta_location: "mobile_access",
      cta_label: "Start 7-Day Free Trial",
      destination: `${FRONTEND_URL}/signup`
    });
    window.open(`${FRONTEND_URL}/signup`, "_blank");
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-4xl w-full text-center space-y-6">
        <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
          Cloud Compatibility
        </span>
        <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
          Access Your Garage Automation System on <GradientUnderline>Web and Mobile</GradientUnderline>
        </h2>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          Manage your daily workshop operations anywhere. GarageSaarthi provides a secure <strong className="text-primary capitalize">cloud garage automation software</strong> workspace accessible via web browsers or our dedicated Android mobile application.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button variant="trial" onClick={handleTrialClick}>
            Start 7-Day Free Trial <FaArrowRight />
          </Button>
          <PlayStoreBadge />
        </div>
      </div>
    </section>
  );
}

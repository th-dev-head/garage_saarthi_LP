import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Button from "../../common/Button";
import { FRONTEND_URL } from "@/src/config/env";
import { trackEvent } from "@/src/utils/pixel";

export default function GRAFinalCTA() {
  const handleTrialClick = () => {
    trackEvent("reports_trial_cta_click", {
      page_path: "/solutions/garage-reports-analytics-software",
      cta_location: "final_cta",
      cta_label: "Start 7-Day Free Trial",
      destination: `${FRONTEND_URL}/signup`
    });
    window.open(`${FRONTEND_URL}/signup`, "_blank");
  };

  const handlePricingClick = () => {
    trackEvent("reports_pricing_click", {
      page_path: "/solutions/garage-reports-analytics-software",
      cta_location: "final_cta",
      cta_label: "View Pricing",
      destination: "/pricing"
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-900 text-white flex justify-center relative overflow-hidden">
      <div className="mx-auto max-w-full lg:max-w-4xl w-full text-center space-y-6 relative z-10">
        <h2 className="text-2xl md:text-4xl font-bold leading-tight">
          Ready to Understand Your Garage Business Better?
        </h2>
        <p className="text-slate-300 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
          Access structured business reports, track sales and payments collected, manage spare parts inventory, and organize multi-branch performance lists.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button variant="trial" onClick={handleTrialClick} icon={<FaArrowRight className="w-3.5 h-3.5" />}>
            Start 7-Day Free Trial
          </Button>
          <a href="/pricing" onClick={handlePricingClick} className="rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white px-8 py-3 text-sm font-semibold transition-all duration-200 flex items-center justify-center cursor-pointer h-11 text-center">
            View Pricing
          </a>
        </div>
      </div>
    </section>
  );
}
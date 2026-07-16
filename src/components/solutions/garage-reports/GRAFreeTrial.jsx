import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Button from "../../common/Button";
import { FRONTEND_URL } from "@/src/config/env";
import { trackEvent } from "@/src/utils/pixel";

export default function GRAFreeTrial() {
  const handleTrialClick = () => {
    trackEvent("reports_trial_cta_click", {
      page_path: "/solutions/garage-reports-analytics-software",
      cta_location: "free_trial_banner",
      cta_label: "Start 7-Day Free Trial",
      destination: `${FRONTEND_URL}/signup`
    });
    window.open(`${FRONTEND_URL}/signup`, "_blank");
  };

  const handlePricingClick = () => {
    trackEvent("reports_pricing_click", {
      page_path: "/solutions/garage-reports-analytics-software",
      cta_location: "free_trial_banner",
      cta_label: "View Pricing",
      destination: "/pricing"
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center border-b border-slate-200/60">
      <div className="mx-auto max-w-full lg:max-w-4xl w-full bg-gradient-to-br from-slate-900 to-orange-950 text-white rounded-3xl p-8 md:p-12 shadow-xl text-center space-y-6 relative overflow-hidden">
        <span className="text-xs uppercase tracking-wider text-orange-400 font-bold bg-orange-950/60 border border-orange-800/30 px-3 py-1 rounded-full">
          Get Started
        </span>
        <h2 className="text-2xl md:text-4xl font-bold leading-tight max-w-2xl mx-auto">
          Start Using Garage Reports Software with a 7-Day Free Trial
        </h2>
        <p className="text-slate-300 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
          Access complete dashboard metrics, sales charts, inventory movement sheets, and staff checks. No credit card required.
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
import React from "react";
import Link from "next/link";
import Button from "../../common/Button";
import { FaArrowRight } from "react-icons/fa";
import { FRONTEND_URL } from "@/src/config/env";
import { trackEvent } from "@/src/utils/pixel";

export default function GPFinalCTA() {
  const handleTrialClick = () => {
    trackEvent("payroll_trial_cta_click", {
      page_path: "/solutions/garage-payroll-software",
      cta_location: "final_cta",
      cta_label: "Start 7-Day Free Trial",
      destination: `${FRONTEND_URL}/signup`
    });
    window.open(`${FRONTEND_URL}/signup`, "_blank");
  };

  const handlePricingClick = () => {
    trackEvent("payroll_pricing_click", {
      page_path: "/solutions/garage-payroll-software",
      cta_location: "final_cta",
      cta_label: "View Pricing",
      destination: "/pricing"
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-900 text-white text-center flex justify-center relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="mx-auto max-w-full lg:max-w-3xl w-full space-y-6 relative z-10">
        <h2 className="text-2xl md:text-4xl font-extrabold leading-tight">
          Ready to Simplify Payroll Management for Your Garage?
        </h2>
        <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
          Manage mechanic salaries, daily wages, attendance records, leaves, and commissions within one unified workspace. Start using GarageSaarthi today.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center pt-4">
          <Button variant="trial" onClick={handleTrialClick} icon={<FaArrowRight className="w-3.5 h-3.5" />}>
            Start 7-Day Free Trial
          </Button>
          <Link href="/pricing" onClick={handlePricingClick} className="rounded-full border border-white/30 bg-white/5 hover:bg-white/10 text-white px-8 py-3 text-sm font-semibold transition-all duration-200 flex items-center justify-center cursor-pointer w-full sm:w-auto whitespace-nowrap h-11 text-center">
            View Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}

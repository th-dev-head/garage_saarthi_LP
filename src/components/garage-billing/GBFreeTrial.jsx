import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Button from "../common/Button";
import { FRONTEND_URL } from "@/src/config/env";
import { trackEvent } from "@/src/utils/pixel";
import GradientUnderline from "../common/GradientUnderline";

export default function GBFreeTrial() {
  const handleTrialClick = () => {
    trackEvent("billing_trial_cta_click", {
      page_path: "/solutions/garage-billing-software",
      cta_location: "pricing_section",
      cta_label: "Start 7-Day Free Trial",
      destination: `${FRONTEND_URL}/signup`
    });
    window.open(`${FRONTEND_URL}/signup`, "_blank");
  };

  const handlePricingClick = () => {
    trackEvent("billing_pricing_click", {
      page_path: "/solutions/garage-billing-software",
      cta_location: "pricing_section",
      cta_label: "View Pricing",
      destination: "/pricing"
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center border-b border-slate-200/60">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full text-center">
        <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
          Get Started
        </span>
        <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-6 leading-tight">
          Try Garage Invoicing{" "}
          <GradientUnderline>Free for 7 Days</GradientUnderline>
        </h2>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8 max-w-xl mx-auto">
          Explore complete access to our cloud dashboard, Android application, billing register logs, and payment reports. Billed in affordable INR options. No credit card required.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="trial"
            onClick={handleTrialClick}
            icon={<FaArrowRight className="w-3.5 h-3.5" />}
          >
            Start 7-Day Free Trial
          </Button>
          <Link
            href="/pricing"
            onClick={handlePricingClick}
            className="rounded-full bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 px-8 py-3 text-sm font-semibold transition-all duration-200 flex items-center justify-center cursor-pointer font-semibold"
          >
            View Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}

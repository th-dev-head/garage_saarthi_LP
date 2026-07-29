"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRight, FaCalendarCheck } from "react-icons/fa";
import Button from "../../common/Button";
import { FRONTEND_URL } from "@/src/config/env";
import { trackEvent } from "@/src/utils/pixel";
import GradientUnderline from "../../common/GradientUnderline";

export default function GIFreeTrial() {
  const handleTrialClick = () => {
    trackEvent("inventory_trial_cta_click", {
      page_path: "/solutions/garage-inventory-software",
      cta_location: "pricing_trial_section",
      cta_label: "Start 7-Day Free Trial",
      destination: `${FRONTEND_URL}/signup`,
      keyword_page_topic: "garage_inventory_software"
    });
    window.open(`${FRONTEND_URL}/signup`, "_blank");
  };

  const handlePricingClick = () => {
    trackEvent("inventory_pricing_click", {
      page_path: "/solutions/garage-inventory-software",
      cta_location: "pricing_trial_section",
      cta_label: "View Pricing",
      destination: "/pricing",
      keyword_page_topic: "garage_inventory_software"
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 flex bg-white justify-center">
      <div className="mx-auto max-w-full lg:max-w-4xl w-full bg-gradient-to-br from-slate-900 to-orange-950 text-white rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
        {/* Decorative Blur */}
        <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
          <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mx-auto text-primary border border-white/10">
            <FaCalendarCheck className="w-6 h-6 text-orange-400" />
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            Try Garage Inventory Management with a <GradientUnderline>7-Day Free Trial</GradientUnderline>
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8">
            Experience complete control over spare parts and stock levels. Set up your custom parts catalog, configure low-stock re-order thresholds, and link parts with supplier profiles immediately.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="trial"
              onClick={handleTrialClick}
              icon={<FaArrowRight className="w-3.5 h-3.5" />}
              className="w-full sm:w-auto"
            >
              Start 7-Day Free Trial
            </Button>
            <Link
              href="/pricing"
              onClick={handlePricingClick}
              className="rounded-full bg-transparent border border-white/30 hover:bg-white/10 text-white px-8 py-3 text-sm font-semibold transition-all duration-200 flex items-center justify-center cursor-pointer text-center w-full sm:w-auto whitespace-nowrap h-11"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


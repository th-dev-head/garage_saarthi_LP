import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Button from "../common/Button";
import { FRONTEND_URL } from "@/src/config/env";
import { trackEvent } from "@/src/utils/pixel";
import GradientUnderline from "../common/GradientUnderline";

export default function GIFinalCTA() {
  const handleTrialClick = () => {
    trackEvent("inventory_trial_cta_click", {
      page_path: "/solutions/garage-inventory-software",
      cta_location: "final_cta",
      cta_label: "Start 7-Day Free Trial",
      destination: `${FRONTEND_URL}/signup`,
      keyword_page_topic: "garage_inventory_software"
    });
    window.open(`${FRONTEND_URL}/signup`, "_blank");
  };

  const handlePricingClick = () => {
    trackEvent("inventory_pricing_click", {
      page_path: "/solutions/garage-inventory-software",
      cta_location: "final_cta",
      cta_label: "View Pricing",
      destination: "/pricing",
      keyword_page_topic: "garage_inventory_software"
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full bg-gradient-to-br from-slate-900 to-orange-950 text-white rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
        {/* Decorative Blur */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <h2 className="text-2xl md:text-4xl font-extrabold mb-6 leading-tight">
          Ready to Manage Your <GradientUnderline>Garage Inventory Digitally?</GradientUnderline>
        </h2>
        <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
          Start organizing your spare parts registry, track live stock quantities across branches, and stop losing money on misplaced workshop inventory.
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
            className="rounded-full bg-transparent border border-white/30 hover:bg-white/10 text-white px-8 py-3 text-sm font-semibold transition-all duration-200 flex items-center justify-center cursor-pointer text-center whitespace-nowrap h-11"
          >
            View Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}

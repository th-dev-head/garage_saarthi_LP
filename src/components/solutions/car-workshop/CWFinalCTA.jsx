import React from "react";
import Link from "next/link";
import Button from "../../common/Button";
import { FaArrowRight } from "react-icons/fa";
import { FRONTEND_URL } from "@/src/config/env";
import { trackEvent } from "@/src/utils/pixel";

export default function CWFinalCTA() {
  const handleTrialClick = () => {
    trackEvent("trial_cta_click", {
      page_path: "/solutions/car-workshop-software",
      cta_location: "final_cta",
      cta_label: "Start 7-Day Free Trial",
      destination: `${FRONTEND_URL}/signup`
    });
    window.open(`${FRONTEND_URL}/signup`, "_blank");
  };

  const handlePricingClick = () => {
    trackEvent("pricing_click", {
      page_path: "/solutions/car-workshop-software",
      cta_location: "final_cta",
      cta_label: "View Pricing",
      destination: "/pricing"
    });
  };

    return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full bg-gradient-to-br from-slate-900 to-orange-950 text-white rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        
        <h2 className="text-2xl md:text-4xl font-extrabold mb-6 leading-tight">
          Ready to Manage Your Car Workshop with GarageSaarthi?
        </h2>
        <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
          Bring job cards, customers, vehicles, inventory, billing, service reminders, and staff management under a single workshop-focused dashboard. Start using GarageSaarthi today.
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
            onClick={handlePricingClick} className="rounded-full bg-transparent border border-white/30 hover:bg-white/10 text-white px-8 py-3 text-sm font-semibold transition-all duration-200 flex items-center justify-center cursor-pointer"
          >
            View Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}

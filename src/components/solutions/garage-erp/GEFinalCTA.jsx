import Link from "next/link";
import Button from "../../common/Button";
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
    <section className="py-20 px-4 lg:px-15 2xl:px-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full bg-gradient-to-br from-slate-900 to-orange-950 text-white rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        
        <h2 className="text-2xl md:text-4xl font-extrabold mb-6 leading-tight">
          Ready to Centralize and{" "}
          <GradientUnderline>Grow Your Garage Business?</GradientUnderline>
        </h2>
        <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
          Join hundreds of multi-brand workshops and garage chains across India using GarageSaarthi ERP to manage their business efficiently.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="trial"
            onClick={() => window.open(`${FRONTEND_URL}/signup`, "_blank")}
            icon={<FaArrowRight className="w-3.5 h-3.5" />}
          >
            Start 7-Day Free Trial
          </Button>
          <Link
            href="/pricing"
            className="rounded-full bg-transparent border border-white/30 hover:bg-white/10 text-white px-8 py-3 text-sm font-semibold transition-all duration-200 flex items-center justify-center cursor-pointer"
          >
            View Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}


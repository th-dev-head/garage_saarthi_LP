"use client";

import React from "react";
import Link from "next/link";
import Button from "../../common/Button";
import { FaArrowRight } from "react-icons/fa";
import { FRONTEND_URL } from "@/src/config/env";
import { trackEvent } from "@/src/utils/pixel";

export default function GAPricing() {
  const handleTrialClick = () => {
    trackEvent("trial_cta_click", {
      page_path: "/solutions/garage-attendance-software/",
      cta_location: "pricing_section",
      cta_label: "Start 7-Day Free Trial",
      destination: `${FRONTEND_URL}/signup`
    });
    window.open(`${FRONTEND_URL}/signup`, "_blank");
  };

  const handlePricingClick = () => {
    trackEvent("pricing_click", {
      page_path: "/solutions/garage-attendance-software/",
      cta_location: "pricing_section",
      cta_label: "View Pricing",
      destination: "/pricing/"
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-4xl w-full text-white rounded-3xl p-8 md:p-12 shadow-xl text-center space-y-6 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #431407 100%)" }}>
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/20 rounded-full blur-2xl pointer-events-none" />
        <span className="text-xs uppercase tracking-wider text-orange-400 font-bold bg-orange-950/60 border border-orange-800/30 px-3 py-1 rounded-full">
          Get Started
        </span>
        <h2 className="text-2xl md:text-4xl font-bold leading-tight">
          Try GarageSaarthi Free for 7 Days
        </h2>
        <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          Start managing mechanic shifts, check-ins, leave balances, and salary commissions today. Enjoy full access to all features with no commitments.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center pt-2">
          <Button variant="hero" onClick={handleTrialClick} icon={<FaArrowRight className="w-3.5 h-3.5" />}>
            Start 7-Day Free Trial
          </Button>
          <Link href="/pricing/" onClick={handlePricingClick} className="rounded-full border border-white/30 bg-white/5 hover:bg-white/10 text-white px-8 py-3 text-sm font-semibold transition-all duration-200 flex items-center justify-center cursor-pointer w-full sm:w-auto whitespace-nowrap h-11 text-center">
            View Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}

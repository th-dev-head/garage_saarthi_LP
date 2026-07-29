"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Button from "../../common/Button";
import { FRONTEND_URL } from "@/src/config/env";
import { trackEvent } from "@/src/utils/pixel";

export default function MBHero() {
  const handleTrialClick = () => {
    trackEvent("multi_branch_trial_cta_click", {
      page_path: "/solutions/multi-branch-garage-software",
      cta_location: "hero",
      cta_label: "Start 7-Day Free Trial",
      destination: `${FRONTEND_URL}/signup`
    });
    window.open(`${FRONTEND_URL}/signup`, "_blank");
  };

  const handlePricingClick = () => {
    trackEvent("multi_branch_pricing_click", {
      page_path: "/solutions/multi-branch-garage-software",
      cta_location: "hero",
      cta_label: "View Pricing",
      destination: "/pricing"
    });
  };

  return (
    <section className="relative pt-48 pb-24 md:pt-45 md:pb-32 px-4 lg:px-15 2xl:px-50 bg-gradient-to-br from-slate-900 via-slate-800 to-orange-950 text-white overflow-hidden flex justify-center">
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-full lg:max-w-3xl w-full relative z-10 text-center flex flex-col items-center">
        <span className="text-xs uppercase tracking-widest bg-orange-600/30 text-orange-400 px-3 py-1.5 rounded-full border border-orange-500/20 font-semibold mb-6 inline-block">
          Multi-Location Control
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
          Multi Branch Garage Software to Manage Every Workshop Location
        </h1>
        <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
          Manage multiple garage branches, users, and daily workshop operations through one centralized, cloud-based platform. Access real-time data on web and mobile devices.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center w-full sm:w-auto">
          <Button variant="trial" onClick={handleTrialClick} icon={<FaArrowRight className="w-3.5 h-3.5" />} className="w-full sm:w-auto">
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
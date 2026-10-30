"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRight, FaShieldAlt, FaStar, FaWrench, FaCheckCircle } from "react-icons/fa";
import Button from "@/src/components/common/Button";
import PlayStoreBadge from "@/src/components/common/PlayStoreBadge";
import AppStoreBadge from "@/src/components/common/AppStoreBadge";
import GradientUnderline from "@/src/components/common/GradientUnderline";
import { FRONTEND_URL } from "@/src/config/env";
import { trackEvent } from "@/src/utils/pixel";

export default function CustomersHero() {
  const handleTrialClick = () => {
    trackEvent("trial_cta_click", {
      page_path: "/customers/",
      page_name: "customers_hub",
      cta_location: "hero",
      cta_label: "Start 7-Day Free Trial",
      destination: `${FRONTEND_URL}/signup`,
    });
    window.open(`${FRONTEND_URL}/signup`, "_blank");
  };

  const handleExploreClick = () => {
    trackEvent("feature_click", {
      page_path: "/customers/",
      page_name: "customers_hub",
      cta_location: "hero",
      cta_label: "View Customer Stories",
      feature_name: "Customer Stories",
    });
  };

  return (
    <section className="relative pt-48 pb-24 md:pt-45 md:pb-32 px-4 lg:px-15 2xl:px-50 bg-gradient-to-br from-slate-900 via-slate-800 to-orange-950 text-white overflow-hidden flex justify-center">
      {/* Decorative Blobs */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-full lg:max-w-5xl w-full relative z-10 text-center flex flex-col items-center">
        <div className="flex flex-col items-center text-center max-w-4xl">
          {/* Eyebrow Badge */}
          <span className="text-xs uppercase tracking-widest bg-orange-600/30 text-orange-400 px-3 py-1.5 rounded-full border border-orange-500/20 font-semibold mb-6 inline-block">
            Verified Customer Evidence
          </span>

          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            Trusted by Modern Garages,{" "}
            <GradientUnderline>Shop Floor Proven</GradientUnderline>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            Discover how multi-brand car workshops, bike service centers, and detailing studios across India eliminate manual job card delays, plug spare parts billing leakage, and boost revenue with GarageSaarthi.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center w-full sm:w-auto mb-10">
            <Button
              variant="trial"
              onClick={handleTrialClick}
              icon={<FaArrowRight className="w-3.5 h-3.5" />}
              className="w-full sm:w-auto"
            >
              Start 7-Day Free Trial
            </Button>

            <Link
              href="#stories"
              onClick={handleExploreClick}
              className="rounded-full border border-white/30 bg-white/5 hover:bg-white/10 text-white px-8 py-3 text-sm font-semibold transition-all duration-200 flex items-center justify-center cursor-pointer w-full sm:w-auto whitespace-nowrap h-11 text-center"
            >
              View Customer Stories
            </Link>

            <div className="flex items-center gap-4">
              <PlayStoreBadge />
              <AppStoreBadge />
            </div>
          </div>

          {/* Trust Highlights Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-6 text-xs text-slate-300">
            <div className="flex items-center justify-center gap-2">
              <FaCheckCircle className="text-emerald-400 w-3.5 h-3.5" />
              <span>Real Case Studies</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <FaStar className="text-amber-400 w-3.5 h-3.5" />
              <span>Google Verified Reviews</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <FaShieldAlt className="text-orange-400 w-3.5 h-3.5" />
              <span>100% Data Confidentiality</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <FaWrench className="text-orange-400 w-3.5 h-3.5" />
              <span>Tested on Active Bays</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

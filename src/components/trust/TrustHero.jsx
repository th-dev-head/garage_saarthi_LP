"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRight, FaShieldAlt, FaLock, FaUserSecret, FaServer } from "react-icons/fa";
import Button from "@/src/components/common/Button";
import PlayStoreBadge from "@/src/components/common/PlayStoreBadge";
import AppStoreBadge from "@/src/components/common/AppStoreBadge";
import GradientUnderline from "@/src/components/common/GradientUnderline";
import { FRONTEND_URL } from "@/src/config/env";
import { trackEvent } from "@/src/utils/pixel";

export default function TrustHero() {
  const handleTrialClick = () => {
    trackEvent("trial_cta_click", {
      page_path: "/trust/",
      page_name: "trust_centre",
      cta_location: "hero",
      cta_label: "Start 7-Day Free Trial",
      destination: `${FRONTEND_URL}/signup`,
    });
    window.open(`${FRONTEND_URL}/signup`, "_blank");
  };

  const handleExploreClick = () => {
    trackEvent("feature_click", {
      page_path: "/trust/",
      page_name: "trust_centre",
      cta_location: "hero",
      cta_label: "Explore Security Controls",
      feature_name: "Security Controls",
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
            Security, Privacy & Governance
          </span>

          {/* Main Title */}
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            Enterprise Data Protection,{" "}
            <GradientUnderline>Built for Modern Garages</GradientUnderline>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            Your vehicle service histories, customer phone records, and spare part margins belong strictly to you. Learn how GarageSaarthi protects workshop intelligence with bank-grade encryption and multi-tenant isolation.
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
              href="#security-pillars"
              onClick={handleExploreClick}
              className="rounded-full border border-white/30 bg-white/5 hover:bg-white/10 text-white px-8 py-3 text-sm font-semibold transition-all duration-200 flex items-center justify-center cursor-pointer w-full sm:w-auto whitespace-nowrap h-11 text-center"
            >
              Explore Security Pillars
            </Link>

            <div className="flex items-center gap-4">
              <PlayStoreBadge />
              <AppStoreBadge />
            </div>
          </div>

          {/* Trust Highlights Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-6 text-xs text-slate-300">
            <div className="flex items-center justify-center gap-2">
              <FaLock className="text-emerald-400 w-3.5 h-3.5" />
              <span>256-Bit SSL Encryption</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <FaUserSecret className="text-amber-400 w-3.5 h-3.5" />
              <span>Zero Data Monetization</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <FaServer className="text-orange-400 w-3.5 h-3.5" />
              <span>Daily Automated Backups</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <FaShieldAlt className="text-orange-400 w-3.5 h-3.5" />
              <span>Staff Privacy Guard</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


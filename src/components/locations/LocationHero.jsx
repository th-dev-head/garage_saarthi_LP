"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRight, FaShieldAlt, FaStar, FaCheckCircle } from "react-icons/fa";
import Button from "@/src/components/common/Button";
import PlayStoreBadge from "@/src/components/common/PlayStoreBadge";
import AppStoreBadge from "@/src/components/common/AppStoreBadge";
import GradientUnderline from "@/src/components/common/GradientUnderline";
import CountryFlag from "@/src/components/common/CountryFlag";
import { FRONTEND_URL } from "@/src/config/env";
import { trackEvent } from "@/src/utils/pixel";

export default function LocationHero({ location }) {
  const handleTrialClick = () => {
    trackEvent("trial_cta_click", {
      page_path: `/locations/${location.slug}/`,
      page_name: `location_${location.slug}`,
      cta_location: "hero",
      cta_label: "Start 7-Day Free Trial",
      destination: `${FRONTEND_URL}/signup`,
    });
    window.open(`${FRONTEND_URL}/signup`, "_blank");
  };

  return (
    <section className="relative pt-48 pb-24 md:pt-45 md:pb-32 px-4 lg:px-15 2xl:px-50 bg-gradient-to-br from-slate-900 via-slate-800 to-orange-950 text-white overflow-hidden flex justify-center">
      {/* Decorative Blobs */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-full lg:max-w-5xl w-full relative z-10 text-center flex flex-col items-center">
        <div className="flex flex-col items-center text-center max-w-4xl">
          {/* Eyebrow Badge */}
          <span className="text-xs uppercase tracking-widest bg-orange-600/30 text-orange-400 px-3.5 py-1.5 rounded-full border border-orange-500/20 font-semibold mb-6 inline-flex items-center gap-2">
            <CountryFlag code={location.code} name={location.countryName} className="w-5 h-3.5 rounded-[2px]" />
            <span>{location.hero.badge}</span>
          </span>

          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            {location.hero.titlePrefix}{" "}
            <GradientUnderline>{location.hero.highlightText}</GradientUnderline>
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-slate-300 mb-8 max-w-3xl leading-relaxed">
            {location.hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-10">
            <Button
              variant="hero"
              onClick={handleTrialClick}
              className="w-full sm:w-auto text-base !py-3.5 !px-8 cursor-pointer shadow-lg hover:shadow-orange-500/25 transition-all"
            >
              Start 7-Day Free Trial
              <FaArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Link
              href="/contact/"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-slate-600 text-sm font-semibold text-white hover:bg-slate-800/80 transition-colors"
            >
              Book a Live Demo
            </Link>
          </div>

          {/* App Store Badges */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mb-8">
            <PlayStoreBadge />
            <AppStoreBadge />
          </div>

          {/* Trust Highlights Strip */}
          <div className="pt-2 flex flex-wrap justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-2">
              <FaCheckCircle className="text-emerald-400 w-4 h-4" />
              <span>{location.taxType} Invoicing in {location.currency}</span>
            </span>
            <span className="flex items-center gap-2">
              <FaCheckCircle className="text-emerald-400 w-4 h-4" />
              <span>No Credit Card Required</span>
            </span>
            <span className="flex items-center gap-2">
              <FaCheckCircle className="text-emerald-400 w-4 h-4" />
              <span>Cloud Uptime 99.9%</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}


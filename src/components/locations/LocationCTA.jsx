"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRight, FaCheckCircle, FaCalendarCheck } from "react-icons/fa";
import Button from "@/src/components/common/Button";
import PlayStoreBadge from "@/src/components/common/PlayStoreBadge";
import AppStoreBadge from "@/src/components/common/AppStoreBadge";
import GradientUnderline from "@/src/components/common/GradientUnderline";
import CountryFlag from "@/src/components/common/CountryFlag";
import { FRONTEND_URL } from "@/src/config/env";
import { trackEvent } from "@/src/utils/pixel";

export default function LocationCTA({ location }) {
  const handleTrialClick = () => {
    trackEvent("trial_cta_click", {
      page_path: `/locations/${location.slug}/`,
      page_name: `location_${location.slug}`,
      cta_location: "bottom_cta",
      cta_label: "Start 7-Day Free Trial",
      destination: `${FRONTEND_URL}/signup`,
    });
    window.open(`${FRONTEND_URL}/signup`, "_blank");
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-orange-950 text-white rounded-2xl p-8 lg:p-14 text-center">
          {/* Subtle Glows */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            {/* Pill */}
            <span className="text-xs uppercase tracking-widest bg-orange-600/30 text-orange-400 px-3.5 py-1.5 rounded-full border border-orange-500/20 font-semibold mb-6 inline-flex items-center gap-2">
              <CountryFlag code={location.code} name={location.countryName} className="w-5 h-3.5 rounded-[2px]" />
              <span>Available Across {location.countryName}</span>
            </span>

            {/* Headline */}
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
              Ready to Modernize Your Workshop in{" "}
              <GradientUnderline>{location.countryName}?</GradientUnderline>
            </h2>

            {/* Description */}
            <p className="text-sm md:text-base text-slate-300 mb-8 leading-relaxed max-w-2xl">
              Join leading auto repair workshops and service centres using GarageSaarthi. Start your 7-day free trial today with full {location.currency} billing and {location.taxType} compliance.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-8">
              <Button
                variant="hero"
                onClick={handleTrialClick}
                className="w-full sm:w-auto text-base !py-3.5 !px-8 cursor-pointer shadow-lg hover:shadow-orange-500/25 transition-all"
              >
                Start 7-Day Free Trial
                <FaArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Link
                href="/contact-us"
                className="w-full sm:w-auto px-6 py-3.5 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-white text-sm font-semibold transition-all inline-flex items-center justify-center gap-2"
              >
                <FaCalendarCheck className="w-4 h-4 text-orange-400" />
                Schedule Consultation
              </Link>
            </div>

            {/* App Store Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2 w-full">
              <PlayStoreBadge />
              <AppStoreBadge />
            </div>

            {/* Assurance List */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <FaCheckCircle className="text-emerald-400" /> No credit card required
              </span>
              <span className="flex items-center gap-1.5">
                <FaCheckCircle className="text-emerald-400" /> Instant cloud setup
              </span>
              <span className="flex items-center gap-1.5">
                <FaCheckCircle className="text-emerald-400" /> Full {location.currency} support
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


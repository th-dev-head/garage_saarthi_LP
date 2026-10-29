"use client";

import React from "react";
import { FaArrowRight, FaCompass, FaLayerGroup, FaCheckCircle } from "react-icons/fa";
import { FRONTEND_URL } from "@/src/config/env";
import { trackEvent } from "@/src/utils/pixel";
import Button from "../common/Button";
import GradientUnderline from "../common/GradientUnderline";
import PlayStoreBadge from "../common/PlayStoreBadge";
import AppStoreBadge from "../common/AppStoreBadge";

export default function IndustryHero() {
  const handlePrimaryClick = () => {
    trackEvent("industries_hero_primary_cta_click", {
      page_path: "/industries/",
      cta_location: "hero",
      cta_label: "Explore GarageSaarthi",
      destination: `${FRONTEND_URL}/signup`,
    });
    window.open(`${FRONTEND_URL}/signup`, "_blank");
  };

  const handleScrollToIndustries = (e) => {
    e.preventDefault();
    trackEvent("industries_hero_secondary_scroll_click", {
      page_path: "/industries/",
      cta_location: "hero",
      cta_label: "Explore Industries",
    });
    const element = document.getElementById("industry-list");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-44 pb-20 md:pt-48 md:pb-28 lg:pt-52 px-4 lg:px-15 2xl:px-50 bg-gradient-to-br from-slate-900 via-slate-800 to-orange-950 text-white overflow-hidden flex justify-center">
      {/* Decorative Blobs */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-full lg:max-w-5xl w-full relative z-10 text-center flex flex-col items-center">
        {/* Badge Pill */}
        <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-xs font-semibold px-4 py-1.5 rounded-full border border-white/20 mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <FaLayerGroup className="text-orange-400 w-3.5 h-3.5" />
          <span>Automotive Industry Solutions</span>
        </div>

        {/* H1 Heading */}
        <h1 className="text-3xl md:text-5xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-tight max-w-4xl">
          Garage Management Software for{" "}
          <GradientUnderline>Every Automotive Business</GradientUnderline>
        </h1>

        {/* Supporting Copy */}
        <p className="text-slate-300 text-sm md:text-base lg:text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
          From independent garages and car workshops to two-wheeler service centres and fleet workshops, GarageSaarthi helps automotive businesses organize service operations, customer and vehicle records, job cards, billing and day-to-day workshop management.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center w-full sm:w-auto mb-10">
          <Button
            variant="trial"
            onClick={handlePrimaryClick}
            icon={<FaArrowRight className="w-3.5 h-3.5" />}
          >
            Explore GarageSaarthi
          </Button>

          <a
            href="#industry-list"
            onClick={handleScrollToIndustries}
            className="rounded-full px-6 py-3 text-sm md:text-base font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-all duration-200 inline-flex items-center gap-2 shadow-sm"
          >
            <FaCompass className="w-4 h-4 text-orange-400" />
            Explore Industries
          </a>
        </div>

        {/* App Store Badges & Highlights */}
        <div className="flex flex-col sm:flex-row items-center gap-6 text-xs text-slate-300 pt-6 w-full justify-center">
          <div className="flex items-center gap-3">
            <PlayStoreBadge />
            <AppStoreBadge />
          </div>
          <div className="hidden sm:block w-px h-5 bg-white/20" />
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="inline-flex items-center gap-1.5">
              <FaCheckCircle className="text-emerald-400 w-3.5 h-3.5" /> 7-Day Free Trial
            </span>
            <span className="inline-flex items-center gap-1.5">
              <FaCheckCircle className="text-emerald-400 w-3.5 h-3.5" /> Web &amp; Android App
            </span>
            <span className="inline-flex items-center gap-1.5">
              <FaCheckCircle className="text-emerald-400 w-3.5 h-3.5" /> No Credit Card Required
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

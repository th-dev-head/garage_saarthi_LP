"use client";

import React from "react";
import Link from "next/link";
import { FaBuilding } from "react-icons/fa";
import { trackEvent } from "@/src/utils/pixel";
import Button from "../../common/Button";
import GradientUnderline from "../../common/GradientUnderline";

// SECTION 10 - MULTI-BRANCH ERP
export default function GEMultiBranch() {
  const handleCtaClick = () => {
    trackEvent("solution_click", {
      page_path: "/solutions/garage-erp-software",
      page_type: "core_commercial",
      page_topic: "garage_erp_software",
      cta_location: "multi_branch",
      cta_label: "Explore Multi-Branch Garage Software",
      solution_name: "Multi-Branch Garage Software"
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Right text */}
        <div>
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Multi-Location
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-text-dark mt-4 mb-6 leading-tight">
            Centralize Multi-Branch{" "}
            <GradientUnderline>Garage Operations</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
            If you own multiple garage locations or are expanding your workshop network, keeping track of separate databases is a nightmare.
          </p>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
            GarageSaarthi provides multi-branch consolidated reporting, live branch comparison metrics, and centralized staff access controls. You can switch between branches, manage spare parts transfers, and monitor sales without visiting each center physically.
          </p>

          <Link href="/solutions/multi-branch-garage-software">
            <Button
              variant="hero"
              onClick={handleCtaClick}
            >
              Explore Multi-Branch Garage Software
            </Button>
          </Link>
        </div>

        {/* Left Card visual */}
        <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-3xl space-y-4">
          <div className="flex items-center gap-3">
            <FaBuilding className="text-primary w-6 h-6" />
            <h3 className="text-sm font-bold text-text-dark uppercase tracking-wide">Centralized multi-branch control</h3>
          </div>
          <div className="space-y-3">
            <div className="bg-white p-3 rounded-xl border border-slate-200/80 flex justify-between items-center text-xs">
              <span className="font-bold text-text-dark">Surat H.O. Branch</span>
              <span className="bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded">₹1,24,000 Today</span>
            </div>
            <div className="bg-white p-3 rounded-xl border border-slate-200/80 flex justify-between items-center text-xs">
              <span className="font-bold text-text-dark">Vadodara Center</span>
              <span className="bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded">₹85,500 Today</span>
            </div>
            <div className="bg-white p-3 rounded-xl border border-slate-200/80 flex justify-between items-center text-xs">
              <span className="font-bold text-text-dark">Ahmedabad Center</span>
              <span className="bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded">₹94,200 Today</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


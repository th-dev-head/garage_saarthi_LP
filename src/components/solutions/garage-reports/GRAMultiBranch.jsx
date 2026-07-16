import React from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { trackEvent } from "@/src/utils/pixel";

export default function GRAMultiBranch() {
  const handleBranchClick = () => {
    trackEvent("reports_multibranch_click", {
      page_path: "/solutions/garage-reports-analytics-software",
      cta_location: "multi_branch_section",
      cta_label: "Explore Multi-Branch Garage Software"
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center border-b border-slate-200/60">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Multi-Location Analytics
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Review Garage Performance Across Multiple Branches
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Operating a chain of auto centers or workshop franchise outlets? Switch between branch locations on the dashboard and track branch-level sales lists, stock details, and attendance logs. Consolidated analytics made simple.
          </p>
          <div className="pt-2">
            <Link href="/solutions/multi-branch-garage-software" onClick={handleBranchClick} className="rounded-full bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2">
              Explore Multi-Branch Garage Software <FaChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5 bg-slate-100 rounded-3xl overflow-hidden aspect-[4/3] flex items-center justify-center border border-slate-200">
          <div className="text-center space-y-2">
            <span className="text-4xl">🏢</span>
            <p className="text-xs font-bold text-slate-600">Branch Switcher UI</p>
            <p className="text-[10px] text-slate-400">Select branch from top menu to filter metrics</p>
          </div>
        </div>
      </div>
    </section>
  );
}
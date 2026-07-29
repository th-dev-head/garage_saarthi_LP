"use client";

import React from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { trackEvent } from "@/src/utils/pixel";
import GradientUnderline from "../../common/GradientUnderline";
import Button from "../../common/Button";

export default function MBBranchReports() {
  const handleReportsClick = () => {
    trackEvent("reports_feature_click", {
      page_path: "/solutions/multi-branch-garage-software",
      cta_location: "branch_reports_section",
      cta_label: "Explore Garage Reports"
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-text-dark">Available Branch Reports:</h3>
          <ul className="space-y-2.5 text-xs text-slate-500 leading-relaxed font-semibold">
            <li>• Branch-wise sales comparisons</li>
            <li>• Stock levels & spare parts ledgers by location</li>
            <li>• Employee attendance sheets by branch</li>
            <li>• Central payment modes collected statement</li>
          </ul>
        </div>
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Consolidated Analytics
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Understand Garage Operations with <GradientUnderline>Branch-Wise Reports</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Eliminate manual reports, Excel files, and calls. GarageSaarthi compiles branch-wise operational performance logs, letting you compare branches, analyze stock movements, and evaluate user efficiency charts centrally.
          </p>
          <div className="pt-2">
            <Link href="/features/reports" onClick={handleReportsClick}>
              <Button>
                Explore Garage Reports <FaChevronRight className="w-3.5 h-3.5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Button from "../../common/Button";
import GradientUnderline from "../../common/GradientUnderline";
import { trackEvent } from "@/src/utils/pixel";

const visibilityMetrics = [
  "Daily Inflow Breakdown",
  "Categorized Business Expenses",
  "Outstanding Balances Ledger"
];

export default function GFMVisibility() {
  const handleFeatureClick = () => {
    trackEvent("finance_report_click", {
      page_path: "/solutions/garage-finance-management-software",
      cta_location: "visibility_section",
      cta_label: "Explore Garage Reports",
      destination: "/features/reports"
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Financial Performance
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Understand Your Garage’s <GradientUnderline>Financial Performance</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Eliminate guesswork from your business decisions. By keeping all transaction logs organized, our garage profit tracking software provides immediate dashboard visibility into your daily, monthly, or yearly financial activity.
          </p>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Get clear financial reports detailing overall collections, spare part sales margins, mechanic payroll outputs, and pending dues. It acts as clean garage cash flow management software and revenue tracking without complex setups.
          </p>
          <div className="pt-2">
            <Link href="/features/reports" onClick={handleFeatureClick}>
              <Button>
                Explore Garage Reports <FaArrowRight className="w-3.5 h-3.5" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 bg-white border border-slate-200/50 rounded-3xl p-6 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-text-dark">Available Financial Metrics</h3>
          <div className="space-y-3">
            {visibilityMetrics.map((metric, idx) => (
              <div key={idx} className="flex justify-between items-center text-xs md:text-sm p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-slate-600 font-medium">{metric}</span>
                <span className="text-emerald-600 font-bold">Active</span>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-slate-400 text-center leading-normal">
            *Note: Reports provide operational visibility and are not audited statements.
          </p>
        </div>
      </div>
    </section>
  );
}


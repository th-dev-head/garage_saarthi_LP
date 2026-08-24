"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Button from "../../common/Button";
import GradientUnderline from "../../common/GradientUnderline";
import { trackEvent } from "@/src/utils/pixel";

export default function GACExpenseManagement() {
  const handleFeatureClick = () => {
    trackEvent("finance_feature_click", {
      page_path: "/solutions/garage-accounting-software/",
      cta_location: "expense_management_section",
      cta_label: "Explore Garage Finance Management",
      destination: "/features/finance/"
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Expense Tracker
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Track Garage Income and Expenses <GradientUnderline>More Clearly</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Record every transaction securely. By maintaining digital logs of spare parts orders, rent dues, and mechanic commissions inside GarageSaarthi, you remove dependencies on paper journals. Our garage expense management software maps expenses against categories and branches for clean records.
          </p>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Understand your daily operating ratios, track cash balances, and identify cost anomalies using our specialized workshop expense management software modules.
          </p>
          <div className="pt-2">
            <Link href="/features/finance/" onClick={handleFeatureClick}>
              <Button>
                Explore Garage Finance Management <FaArrowRight className="w-3.5 h-3.5" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 bg-white border border-slate-200/50 rounded-3xl p-6 shadow-sm flex flex-col justify-between aspect-[4/3] relative">
          <div className="space-y-4 my-auto">
            <div className="border-b border-slate-200/60 pb-3">
              <span className="text-xs text-slate-500 font-medium">Expense Log Entry</span>
              <p className="text-sm font-bold text-slate-800">Workshop Purchases</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-slate-600">
                <span>Category</span>
                <span className="font-semibold text-slate-800">Engine Oil wholesale</span>
              </div>
              <div className="flex justify-between text-xs text-slate-600">
                <span>Amount Paid</span>
                <span className="font-bold text-rose-500">₹45,000</span>
              </div>
              <div className="flex justify-between text-xs text-slate-600">
                <span>Payment Mode</span>
                <span className="text-slate-800 font-semibold">Bank Transfer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

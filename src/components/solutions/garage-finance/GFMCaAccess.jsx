"use client";

import React from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import Button from "../../common/Button";
import GradientUnderline from "../../common/GradientUnderline";
import { trackEvent } from "@/src/utils/pixel";

export default function GFMCaAccess() {
  const handleFeatureClick = () => {
    trackEvent("ca_access_feature_click", {
      page_path: "/solutions/garage-finance-management-software",
      cta_location: "ca_access_section",
      cta_label: "Explore CA Access",
      destination: "/features/ca-access"
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 bg-white border border-slate-200/50 rounded-3xl p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <span className="text-sm font-bold text-slate-800">User Permission Profile</span>
            <span className="text-xs text-amber-600 font-semibold bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200/50">Read-Only</span>
          </div>
          <div className="space-y-3 text-xs text-slate-600">
            <div className="flex justify-between items-center">
              <span>Roster/Permissions Type</span>
              <span className="font-semibold text-slate-800">Chartered Accountant</span>
            </div>
            <div className="flex justify-between items-center">
              <span>View Invoice Roster</span>
              <span className="text-emerald-600 font-bold">✓ Enabled</span>
            </div>
            <div className="flex justify-between items-center">
              <span>View Expense Logs</span>
              <span className="text-emerald-600 font-bold">✓ Enabled</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Edit / Delete Records</span>
              <span className="text-rose-500 font-bold">✕ Disabled</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Tax Audit Access
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Give Your CA Access to <GradientUnderline>Relevant Garage Records</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Stop collecting GST bills and manual registers at the end of every quarter. GarageSaarthi lets you invite your Chartered Accountant (CA) or tax assistant to log in securely under a restricted, read-only profile.
          </p>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            They can download raw invoice summaries, sales logs, and categorized expense records directly to prepare reports, without having permission to edit or delete any files in your live database.
          </p>
          <div className="pt-2">
            <Link href="/features/ca-access" onClick={handleFeatureClick}>
              <Button>
                Explore CA Access <FaChevronRight className="w-3.5 h-3.5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

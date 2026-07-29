"use client";

import React from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import Button from "../../common/Button";
import GradientUnderline from "../../common/GradientUnderline";
import { trackEvent } from "@/src/utils/pixel";

export default function GACMultiBranch() {
  const handleSolutionClick = () => {
    trackEvent("solution_click", {
      page_path: "/solutions/garage-accounting-software",
      cta_location: "multi_branch_section",
      cta_label: "Explore Multi-Branch Garage Software",
      destination: "/solutions/multi-branch-garage-software"
    });
  };

  const handleLinkClick = (name, url) => {
    trackEvent("finance_feature_click", {
      page_path: "/solutions/garage-accounting-software",
      cta_location: "multi_branch_section",
      cta_label: name,
      destination: url
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 bg-slate-50 border border-slate-200/50 rounded-3xl p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <span className="text-sm font-bold text-slate-800">Branch Cash Accounts</span>
            <span className="text-xs text-primary font-bold">Consolidated View</span>
          </div>
          <div className="space-y-2 text-xs text-slate-600">
            <div className="flex justify-between p-2 bg-white rounded-lg border border-slate-100">
              <span>Mumbai - West Branch</span>
              <span className="font-semibold text-slate-800">₹1,45,200</span>
            </div>
            <div className="flex justify-between p-2 bg-white rounded-lg border border-slate-100">
              <span>Pune - East Branch</span>
              <span className="font-semibold text-slate-800">₹98,450</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Multi-Location Accounting
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Manage Financial Operations Across <GradientUnderline>Multiple Garage Branches</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Operating multiple locations makes checking overall cash inflow/outflow schedules highly difficult. GarageSaarthi lets you manage separate cash registers and invoice runs categorized by branch location.
          </p>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Owners maintain centralized visibility, while staff logins can be restricted to their assigned branch. Explore our{" "}
            <Link href="/features/branches" onClick={() => handleLinkClick("Branches Page Link", "/features/branches")} className="font-semibold text-primary hover:underline">
              Branches
            </Link>{" "}
            and{" "}
            <Link href="/features/reports" onClick={() => handleLinkClick("Reports Page Link", "/features/reports")} className="font-semibold text-primary hover:underline">
              Reports
            </Link>{" "}
            workspaces.
          </p>
          <div className="pt-2">
            <Link href="/solutions/multi-branch-garage-software" onClick={handleSolutionClick}>
              <Button>
                Explore Multi-Branch Garage Software <FaChevronRight className="w-3.5 h-3.5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import Button from "../../common/Button";
import GradientUnderline from "../../common/GradientUnderline";
import { trackEvent } from "@/src/utils/pixel";

export default function GAWorkflow() {
  const handlePayrollClick = () => {
    trackEvent("payroll_feature_click", {
      page_path: "/solutions/garage-attendance-software",
      cta_location: "workflow_section",
      cta_label: "Explore Garage Payroll Management",
      destination: "/features/payroll"
    });
  };

  const handleLinkClick = (name, url) => {
    trackEvent("attendance_feature_click", {
      page_path: "/solutions/garage-attendance-software",
      cta_location: "workflow_section",
      cta_label: name,
      destination: url
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Unified Workflow
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Manage Attendance, Leave and Payroll from the <GradientUnderline>Same Garage Platform</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Attendance shouldn't exist as an isolated record. By recording daily shifts, leave balance parameters, and basic wages within one workspace, you get clean monthly salary preparations.
          </p>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Our platform provides integrated staff profiles so you can manage role permissions securely. Explore our{" "}
            <Link href="/features/leave-management" onClick={() => handleLinkClick("Leave Management Link", "/features/leave-management")} className="text-primary font-semibold hover:underline">
              Leave Management
            </Link>{" "}
            and{" "}
            <Link href="/features/user-management" onClick={() => handleLinkClick("User Management Link", "/features/user-management")} className="text-primary font-semibold hover:underline">
              User Permissions
            </Link>{" "}
            dashboards.
          </p>
          <div className="pt-2">
            <Link href="/features/payroll" onClick={handlePayrollClick}>
              <Button>
                Explore Garage Payroll Management <FaChevronRight className="w-3.5 h-3.5" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 bg-slate-50 border border-slate-200/50 rounded-3xl p-8 shadow-sm text-center space-y-6">
          <h3 className="text-base font-bold text-text-dark">Staff Payout Process</h3>
          <div className="flex flex-col items-center gap-2">
            <div className="bg-white border border-slate-200 rounded-xl px-4 py-2 text-xs font-semibold text-slate-800 shadow-sm w-full max-w-xs">
              📅 Log Daily Shift Check-Ins
            </div>
            <div className="text-slate-400 text-xs">↓</div>
            <div className="bg-white border border-slate-200 rounded-xl px-4 py-2 text-xs font-semibold text-slate-800 shadow-sm w-full max-w-xs">
              📝 Check Leave Balances
            </div>
            <div className="text-slate-400 text-xs">↓</div>
            <div className="bg-white border border-slate-200 rounded-xl px-4 py-2 text-xs font-semibold text-slate-800 shadow-sm w-full max-w-xs">
              💰 Calculate Salary & Commission
            </div>
            <div className="text-slate-400 text-xs">↓</div>
            <div className="bg-white border border-slate-200 rounded-xl px-4 py-2 text-xs font-semibold text-slate-800 shadow-sm w-full max-w-xs">
              👤 Central Employee Record File
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

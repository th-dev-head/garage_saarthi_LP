import React from "react";
import Link from "next/link";
import GradientUnderline from "../../common/GradientUnderline";
import { trackEvent } from "@/src/utils/pixel";

export default function GAFeatures() {
  const handleLinkClick = (name, url) => {
    trackEvent("attendance_feature_click", {
      page_path: "/solutions/garage-attendance-software",
      cta_location: "attendance_features",
      cta_label: name,
      destination: url
    });
  };

  return (
    <section id="attendance-features" className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Attendance Features
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Everything You Need to Manage <GradientUnderline>Workshop Attendance</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Discover how GarageSaarthi replaces disorganized paper templates with a streamlined digital tracker built specifically for mechanic workshops.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white border border-slate-200/50 rounded-3xl p-6 shadow-sm space-y-3">
            <span className="text-2xl">📅</span>
            <h3 className="text-base font-bold text-text-dark">Daily Staff Attendance</h3>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
              Log daily staff check-ins, record shift logins, and keep track of employee attendance software for garage records online.
            </p>
          </div>

          <div className="bg-white border border-slate-200/50 rounded-3xl p-6 shadow-sm space-y-3">
            <span className="text-2xl">🔧</span>
            <h3 className="text-base font-bold text-text-dark">Mechanic Attendance</h3>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
              Manage shift presence specifically for multi-brand car and bike mechanics, helpers, and technician profiles.
            </p>
          </div>

          <div className="bg-white border border-slate-200/50 rounded-3xl p-6 shadow-sm space-y-3">
            <span className="text-2xl">📂</span>
            <h3 className="text-base font-bold text-text-dark">Employee Attendance Records</h3>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
              Filter presence logs, check monthly stats, and maintain clear records of past shifts on our workshop employee attendance software database.
            </p>
          </div>

          <div className="bg-white border border-slate-200/50 rounded-3xl p-6 shadow-sm space-y-3">
            <span className="text-2xl">📍</span>
            <h3 className="text-base font-bold text-text-dark">Workshop Staff Tracking</h3>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
              Enable your desk manager to log check-ins, check active counts, and run workshop staff attendance tracking reports easily.
            </p>
          </div>

          <div className="bg-white border border-slate-200/50 rounded-3xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
            <div className="space-y-3">
              <span className="text-2xl">📝</span>
              <h3 className="text-base font-bold text-text-dark">Attendance & Leaves</h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                Connect daily shifts with employee leave records, paid leave balances, and absent ratios. Explore{" "}
                <Link href="/features/leave-management" onClick={() => handleLinkClick("Leave Management Link", "/features/leave-management")} className="text-primary font-semibold hover:underline">
                  Garage Leave Management
                </Link>.
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-200/50 rounded-3xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
            <div className="space-y-3">
              <span className="text-2xl">💳</span>
              <h3 className="text-base font-bold text-text-dark">Attendance & Payroll</h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                Verify salary payouts and mechanic commissions by linking daily shifts directly. Explore{" "}
                <Link href="/features/payroll" onClick={() => handleLinkClick("Payroll Management Link", "/features/payroll")} className="text-primary font-semibold hover:underline">
                  Garage Payroll Management
                </Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

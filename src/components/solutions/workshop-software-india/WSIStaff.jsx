import React from "react";
import Link from "next/link";
import { FaUserClock, FaCalendarCheck, FaPercentage, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const staffFeatures = [
  {
    icon: FaUserClock,
    title: "Mechanic Attendance Tracking",
    desc: "Log daily mechanic check-in and check-out times on mobile devices to maintain accurate attendance registers."
  },
  {
    icon: FaCalendarCheck,
    title: "Leave Approval System",
    desc: "Review and approve mechanic leave applications to plan repair bay shift coverage in advance."
  },
  {
    icon: FaPercentage,
    title: "Automated Job Commissions",
    desc: "Calculate mechanic labor commission percentages automatically based on completed digital job card tasks."
  }
];

export default function WSIStaff() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Staff Management
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Manage Workshop Staff, Attendance <GradientUnderline>and Payroll</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Eliminate loose slips and disputed commission payouts with automated mechanic attendance and payroll tracking.
          </p>
        </div>

        {/* 3 Grid Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {staffFeatures.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-slate-50 border border-slate-200/60 rounded-3xl p-6 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary text-base">
                  <Icon />
                </div>
                <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center">
          <Link
            href="/features/payroll"
            className="inline-flex items-center gap-2 font-bold text-primary hover:text-primary-hover text-sm transition-colors"
          >
            Explore Staff & Payroll Features <FaArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

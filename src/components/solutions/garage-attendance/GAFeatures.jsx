"use client";

import React from "react";
import Link from "next/link";
import GradientUnderline from "../../common/GradientUnderline";
import { trackEvent } from "@/src/utils/pixel";

const attendanceFeatures = [
  {
    icon: "📅",
    title: "Daily Staff Attendance",
    desc: "Log daily staff check-ins, record shift logins, and keep track of employee attendance software for garage records online."
  },
  {
    icon: "🔧",
    title: "Mechanic Attendance",
    desc: "Manage shift presence specifically for multi-brand car and bike mechanics, helpers, and technician profiles."
  },
  {
    icon: "📂",
    title: "Employee Attendance Records",
    desc: "Filter presence logs, check monthly stats, and maintain clear records of past shifts on our workshop employee attendance software database."
  },
  {
    icon: "📍",
    title: "Workshop Staff Tracking",
    desc: "Enable your desk manager to log check-ins, check active counts, and run workshop staff attendance tracking reports easily."
  },
  {
    icon: "📝",
    title: "Attendance & Leaves",
    descPrefix: "Connect daily shifts with employee leave records, paid leave balances, and absent ratios. Explore ",
    linkHref: "/features/leave-management",
    linkText: "Garage Leave Management",
    linkName: "Leave Management Link"
  },
  {
    icon: "💳",
    title: "Attendance & Payroll",
    descPrefix: "Verify salary payouts and mechanic commissions by linking daily shifts directly. Explore ",
    linkHref: "/features/payroll",
    linkText: "Garage Payroll Management",
    linkName: "Payroll Management Link"
  }
];

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
          {attendanceFeatures.map((item, idx) => (
            <div
              key={idx}
              className={`bg-white border border-slate-200/50 rounded-3xl p-6 shadow-sm ${
                item.linkHref ? "flex flex-col justify-between hover:shadow-md transition-shadow duration-200" : "space-y-3"
              }`}
            >
              <div className="space-y-3">
                <span className="text-2xl">{item.icon}</span>
                <h3 className="text-base font-bold text-text-dark">{item.title}</h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                  {item.desc ? item.desc : (
                    <>
                      {item.descPrefix}
                      <Link
                        href={item.linkHref}
                        onClick={() => handleLinkClick(item.linkName, item.linkHref)}
                        className="text-primary font-semibold hover:underline"
                      >
                        {item.linkText}
                      </Link>
                      .
                    </>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";
import { trackEvent } from "@/src/utils/pixel";

export default function GPLeaveStaffManagement() {
  const handleLinkClick = (name, url) => {
    trackEvent("payroll_feature_click", {
      page_path: "/solutions/garage-payroll-software",
      cta_location: "leave_staff_section",
      cta_label: name,
      destination: url
    });
  };

  const steps = [
    { title: "Attendance Management", desc: "Track daily login registers, present ratios, and active shifts for mechanics.", linkName: "Garage Attendance Management", url: "/features/attendance" },
    { title: "Leave Management", desc: "Log employee leave requests, paid/unpaid allocations, and balance records.", linkName: "Garage Leave Management", url: "/features/leave-management" },
    { title: "Payroll Management", desc: "Verify basic salaries, calculate mechanic commissions, and output salary slips.", linkName: "Payroll Dashboard", url: null },
    { title: "User Management", desc: "Configure role permissions for administrators, service advisors, and billing desks.", linkName: "Garage User Management", url: "/features/user-management" }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Staff Records
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Keep Leave, Attendance and <GradientUnderline>Payroll Records Organized</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            GarageSaarthi provides garage owners with staff management capabilities inside the same platform used to manage jobs. Keep your team details structured.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, idx) => (
            <div key={idx} className="bg-white border border-slate-200/50 rounded-3xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
              <div className="space-y-3">
                <span className="text-xs font-bold text-primary">0{idx + 1}.</span>
                <h3 className="text-base font-bold text-text-dark">{s.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{s.desc}</p>
              </div>
              <div className="pt-6">
                {s.url ? (
                  <Link href={s.url} onClick={() => handleLinkClick(s.linkName, s.url)} className="text-primary text-xs font-bold hover:underline inline-flex items-center gap-1.5">{s.linkName} <FaArrowRight className="w-3 h-3" /></Link>
                ) : (
                  <span className="text-slate-400 text-xs font-bold italic">
                    {s.linkName} Active
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

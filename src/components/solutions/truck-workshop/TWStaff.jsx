import React from "react";
import Link from "next/link";
import { FaUserClock, FaCalendarMinus, FaPercent, FaUserShield } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const truckStaffCards = [
  {
    icon: FaUserClock,
    title: "Track Staff Attendance",
    desc: "Log clock-ins of mechanics and heavy vehicle operators on a centralized cloud screen.",
    linkHref: "/features/attendance/",
    linkText: "Explore Attendance"
  },
  {
    icon: FaCalendarMinus,
    title: "Manage Leave Records",
    desc: "Manage leave parameters, approve time-off requests, and maintain shift coverage records.",
    linkHref: "/features/leave-management/",
    linkText: "Explore Leaves"
  },
  {
    icon: FaPercent,
    title: "Handle Workshop Payroll",
    desc: "Compute net salaries, deduct unpaid leaves, and add job commissions automatically.",
    linkHref: "/features/payroll/",
    linkText: "Explore Payroll"
  },
  {
    icon: FaUserShield,
    title: "Control User Access",
    desc: "Create dashboard logins for your advisors. Restrict billing data or stock pricing details.",
    linkHref: "/features/user-management/",
    linkText: "Explore Access Controls"
  }
];

export default function TWStaff() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Staff & Mechanics
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Manage Mechanics, Attendance, <GradientUnderline>Leave and Payroll</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Organize complex team structures. Track check-in logs, calculate work shifts, log leave records, and compute commissions automatically based on parts billed.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {truckStaffCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div key={idx} className="bg-white border border-slate-200/60 rounded-3xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary text-sm">
                    <Icon />
                  </div>
                  <h3 className="text-xs font-bold text-slate-900">{card.title}</h3>
                  <p className="text-[11px] text-slate-500 leading-normal">
                    {card.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 mt-4">
                  <Link href={card.linkHref} className="text-xs font-bold text-primary hover:underline">
                    {card.linkText}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


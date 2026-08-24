import React from "react";
import Link from "next/link";
import { FaUserClock, FaCalendarTimes, FaFileInvoice, FaLock, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const staffCards = [
  {
    icon: FaUserClock,
    title: "Track Staff Attendance",
    desc: "Log daily check-in/out times of mechanics and office staff on a simple web dashboard.",
    link: "/features/attendance/",
    linkText: "Explore Attendance"
  },
  {
    icon: FaCalendarTimes,
    title: "Manage Leave Records",
    desc: "Monitor leave history, sick days, and vacation parameters to schedule shift coverage.",
    link: "/features/leave-management/",
    linkText: "Explore Leaves"
  },
  {
    icon: FaFileInvoice,
    title: "Handle Workshop Payroll",
    desc: "Compute net salaries, deduct leaves, and add job card commissions for your mechanics.",
    link: "/features/payroll/",
    linkText: "Explore Payroll"
  },
  {
    icon: FaLock,
    title: "Control User Access",
    desc: "Create user logins. Restrict billing data or stock details based on employee roles.",
    link: "/features/user-management/",
    linkText: "Explore Access Controls"
  }
];

export default function BWStaff() {
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
            Eliminate disputes. Log mechanic attendance, process leaves, calculate commissions automatically based on service job cards, and manage role-based app logins.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {staffCards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white border border-slate-200/60 rounded-3xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary text-sm">
                    <Icon />
                  </div>
                  <h3 className="text-xs font-bold text-slate-900">{item.title}</h3>
                  <p className="text-[11px] text-slate-500 leading-normal">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 mt-4">
                  <Link href={item.link} className="text-xs font-bold text-primary hover:underline flex gap-2 items-center">
                    {item.linkText} <FaArrowRight />
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

import React from "react";
import GradientUnderline from "../../common/GradientUnderline";
import Link from "next/link";
import { FaUserClock, FaCalendarTimes, FaCoins, FaUserShield, FaArrowRight } from "react-icons/fa";

const cards = [
  {
    icon: <FaUserClock />,
    title: "Daily Attendance & Tracking",
    desc: "Log daily clock-in and clock-out times for mechanics, helpers, and front-desk staff. Monitor active work hours.",
  },
  {
    icon: <FaCalendarTimes />,
    title: "Leave & Advance Management",
    desc: "Manage salary advances, daily expenses, and employee leave requests. Automatically adjust payouts.",
  },
  {
    icon: <FaCoins />,
    title: "Automated Payroll & Slips",
    desc: "Generate monthly salary slips with one click based on working days, advances, commissions, and bonuses.",
  },
  {
    icon: <FaUserShield />,
    title: "Role-Based Permissions",
    desc: "Ensure data security by restricting access. Let managers view billing, while mechanics only see assigned job cards.",
  },
];

export default function WMStaff() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-4">
            Manage Staff, Attendance & Payroll{" "}
            <GradientUnderline>Without the Paperwork.</GradientUnderline>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base">
            Motivate your mechanics and eliminate internal disputes. Track daily attendance, manage advances, and compute payroll in seconds.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-slate-50 p-6 rounded-xl border border-slate-200/60 shadow-sm hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary mb-4 text-base">
                {card.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">{card.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link
            href="/features/role-based-access/"
            className="inline-flex items-center gap-2 font-bold text-primary hover:text-primary-hover transition-colors text-sm"
          >
            Explore Staff Management <FaArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}


import React from "react";
import Link from "next/link";
import { FaUserCheck, FaCalendarMinus, FaMoneyBillWave, FaArrowRight } from "react-icons/fa";

const features = [
  {
    icon: <FaUserCheck />,
    title: "Track Staff Attendance",
    desc: "Log daily helper logins, mechanic attendance slots, clock-in, and clock-out hours to keep shifts productive."
  },
  {
    icon: <FaCalendarMinus />,
    title: "Manage Employee Leave",
    desc: "Keep records of mechanic leaves, vacations, permission hours, and check wage deductions automatically."
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Handle Garage Payroll",
    desc: "Process base monthly mechanic salaries and track complete job commissions on repair cards."
  }
];

export default function ARSStaff() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Staff & Mechanics
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Manage Mechanics, Attendance,{" "}
            <span className="relative inline-block">
              Leave and Payroll
              <span className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-[linear-gradient(90deg,#B02E0C_0%,#FF643C_100%)]" />
            </span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Organize work shifts, track employee performance, and configure custom permissions for receptionists, storekeepers, and workshop advisors.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {features.map((item, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200/80 p-6 rounded-2xl flex flex-col justify-between h-full min-h-[200px]">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#EFE9E7] text-primary flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap gap-4 items-center justify-center">
          <Link
            href="/features/attendance"
            className="rounded-full bg-primary hover:bg-primary-hover text-white px-6 py-2.5 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
          >
            Explore Staff Management Features
            <FaArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/features/user-management"
            className="text-xs font-bold text-primary hover:underline"
          >
            Explore User Management & Roles
          </Link>
        </div>

      </div>
    </section>
  );
}
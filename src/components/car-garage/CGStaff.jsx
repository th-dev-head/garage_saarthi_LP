import React from "react";
import Link from "next/link";
import { FaUserClock, FaCalendarAlt, FaWallet, FaUserShield, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../common/GradientUnderline";

const features = [
  {
    icon: <FaUserClock className="w-5 h-5" />,
    title: "Staff Attendance",
    desc: "Track daily clock-in and clock-out records for mechanics, technicians, and other garage staff. Maintain a reliable digital attendance log instead of paper registers.",
    link: "/features/attendance",
  },
  {
    icon: <FaCalendarAlt className="w-5 h-5" />,
    title: "Leave Management",
    desc: "Record and approve employee leave requests. Maintain accurate leave balances and ensure your garage is never short-staffed without proper visibility into leave schedules.",
    link: "/features/leave-management",
  },
  {
    icon: <FaWallet className="w-5 h-5" />,
    title: "Payroll Management",
    desc: "Calculate monthly salaries based on attendance records, commissions, and advance deductions. Generate payroll summaries without manual spreadsheet calculations.",
    link: "/features/payroll",
  },
  {
    icon: <FaUserShield className="w-5 h-5" />,
    title: "User Management and Role-Based Access",
    desc: "Create individual logins for each team member. Assign appropriate roles so your front desk staff, mechanics, and managers only see what is relevant to their work.",
    link: "/features/user-management",
  },
];

export default function CGStaff() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Staff Management
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-6 leading-tight">
            Manage Mechanics and Garage Staff from the{" "}
            <GradientUnderline>Same Platform</GradientUnderline>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Running a car garage means managing people as much as managing vehicles. GarageSaarthi brings your mechanics, technicians, and support staff into the same management platform as your repair jobs and billing.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200/60 p-6 rounded-2xl flex flex-col justify-between shadow-sm hover:-translate-y-1 hover:shadow-md hover:bg-white hover:border-primary/20 transition-all duration-300 group"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[#EFE9E7] text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-sm font-extrabold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">{item.desc}</p>
              </div>
              <Link href={item.link} className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline">
                Learn more <FaArrowRight className="w-2.5 h-2.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

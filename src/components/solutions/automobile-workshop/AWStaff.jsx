import React from "react";
import Link from "next/link";
import { FaUserCheck, FaCalendarMinus, FaMoneyBillWave, FaTasks, FaShieldAlt, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const staffFeatures = [
  {
    icon: <FaUserCheck className="w-5 h-5 text-primary" />,
    title: "Attendance Management",
    desc: "Log daily attendance entries, clock-in times, and clock-out details for all workshop mechanics.",
    link: "/features/attendance/",
  },
  {
    icon: <FaCalendarMinus className="w-5 h-5 text-primary" />,
    title: "Leave Management",
    desc: "Track staff leaves, permission records, and calculate paid/unpaid leaves automatically.",
    link: "/features/leave-management/",
  },
  {
    icon: <FaMoneyBillWave className="w-5 h-5 text-primary" />,
    title: "Wage & Payroll",
    desc: "Manage salary payments, calculate fixed wages, and track commissions based on jobs completed.",
    link: "/features/payroll/",
  },
  {
    icon: <FaTasks className="w-5 h-5 text-primary" />,
    title: "Technician Productivity",
    desc: "Track how many job cards each mechanic completes, time taken per repair, and monitor service efficiency.",
    link: "/features/reports/",
  },
  {
    icon: <FaShieldAlt className="w-5 h-5 text-primary" />,
    title: "User Management & Roles",
    desc: "Create safe, role-based access logins for workshop receptionists, advisors, helpers, and storekeepers.",
    link: "/features/user-management/",
  },
];

export default function AWStaff() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Staff Management
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-6 leading-tight">
            Manage Workshop Staff, <GradientUnderline>Attendance and Payroll</GradientUnderline>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Organize your mechanics, receptionist, and advisors. Track daily work entries and process commissions automatically.
          </p>
        </div>

        {/* Features list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {staffFeatures.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-300 p-6 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">{item.desc}</p>
              </div>
              <Link
                href={item.link}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-hover transition-colors"
              >
                Learn details <FaArrowRight className="w-2.5 h-2.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


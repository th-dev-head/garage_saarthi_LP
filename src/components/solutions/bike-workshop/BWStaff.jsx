import React from "react";
import Link from "next/link";
import { FaUserClock, FaCalendarTimes, FaFileInvoice, FaLock } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

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
          {/* Card 1 - Attendance */}
          <div className="bg-white border border-slate-200/60 rounded-3xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary text-sm">
                <FaUserClock />
              </div>
              <h3 className="text-xs font-bold text-slate-900">Track Staff Attendance</h3>
              <p className="text-[11px] text-slate-500 leading-normal">
                Log daily check-in/out times of mechanics and office staff on a simple web dashboard.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 mt-4">
              <Link href="/features/attendance" className="text-xs font-bold text-primary hover:underline">
                Explore Attendance
              </Link>
            </div>
          </div>

          {/* Card 2 - Leave */}
          <div className="bg-white border border-slate-200/60 rounded-3xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary text-sm">
                <FaCalendarTimes />
              </div>
              <h3 className="text-xs font-bold text-slate-900">Manage Leave Records</h3>
              <p className="text-[11px] text-slate-500 leading-normal">
                Monitor leave history, sick days, and vacation parameters to schedule shift coverage.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 mt-4">
              <Link href="/features/leave-management" className="text-xs font-bold text-primary hover:underline">
                Explore Leaves
              </Link>
            </div>
          </div>

          {/* Card 3 - Payroll */}
          <div className="bg-white border border-slate-200/60 rounded-3xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary text-sm">
                <FaFileInvoice />
              </div>
              <h3 className="text-xs font-bold text-slate-900">Handle Workshop Payroll</h3>
              <p className="text-[11px] text-slate-500 leading-normal">
                Compute net salaries, deduct leaves, and add job card commissions for your mechanics.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 mt-4">
              <Link href="/features/payroll" className="text-xs font-bold text-primary hover:underline">
                Explore Payroll
              </Link>
            </div>
          </div>

          {/* Card 4 - User Access */}
          <div className="bg-white border border-slate-200/60 rounded-3xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary text-sm">
                <FaLock />
              </div>
              <h3 className="text-xs font-bold text-slate-900">Control User Access</h3>
              <p className="text-[11px] text-slate-500 leading-normal">
                Create user logins. Restrict billing data or stock details based on employee roles.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 mt-4">
              <Link href="/features/user-management" className="text-xs font-bold text-primary hover:underline">
                Explore Access Controls
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const staffList = [
  { name: "Ramesh Kumar (Mechanic)", status: "₹850 Commission", statusClass: "font-semibold text-slate-900" },
  { name: "Suresh Kumar (Mechanic)", status: "₹620 Commission", statusClass: "font-semibold text-slate-900" },
  { name: "Helper Attendance Login", status: "Logged In Today", statusClass: "text-green-600 font-semibold" }
];

export default function GAStaffManagement() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Visual Column */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm w-full max-w-md mx-auto md:max-w-none md:order-first order-last">
            <div className="flex justify-between items-center pb-4 mb-4 border-b border-slate-100">
              <span className="text-xs font-bold text-slate-800">Mechanic Commissions</span>
              <span className="text-[10px] text-green-600 bg-green-50 px-2 py-0.5 rounded font-semibold">Active</span>
            </div>
            <div className="space-y-3 text-xs text-slate-600">
              {staffList.map((item, idx) => (
                <div key={idx} className="flex justify-between">
                  <span>{item.name}</span>
                  <span className={item.statusClass}>{item.status}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
              Staff Tracker
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
              Manage Mechanics and Garage Staff{" "}
              <GradientUnderline>from the Same App</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
              Track mechanic job commissions, attendance, leave schedules, and set custom roles and permissions for storekeepers, billing advisors, and receptionists.
            </p>
            
            <div className="flex flex-wrap gap-4 items-center">
              <Link
                href="/features/attendance"
                className="rounded-full bg-primary hover:bg-primary-hover text-white px-6 py-2.5 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
              >
                Attendance Tracking
                <FaArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/features/payroll"
                className="text-xs font-bold text-primary hover:underline"
              >
                Commissions & Payroll
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}



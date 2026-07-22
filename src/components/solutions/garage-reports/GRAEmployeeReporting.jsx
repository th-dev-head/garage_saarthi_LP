import { FaArrowRight } from "react-icons/fa";
import React from "react";
import Link from "next/link";
import GradientUnderline from "../../common/GradientUnderline";

export default function GRAEmployeeReporting() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 bg-white border border-slate-200/60 rounded-3xl p-8 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-text-dark">Supported HR Reports:</h3>
          <ul className="space-y-2 text-xs text-slate-500 leading-relaxed">
            <li>• Daily attendance and leave registers</li>
            <li>• Monthly payroll statements</li>
            <li>• Authorized employee role permissions</li>
          </ul>
        </div>
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Staff Productivity
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Track Staff and Mechanic Performance with <GradientUnderline>Organized Reports</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Manage your garage crew easily. Keep daily checkin records, calculate monthly salaries, and manage permissions. Verify attendance and role logs centrally.
          </p>
          <div className="pt-2">
            <Link href="/features/attendance" className="text-xs text-primary font-bold hover:underline inline-flex items-center gap-1">Explore Staff Management Features <FaArrowRight className="w-3 h-3" /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
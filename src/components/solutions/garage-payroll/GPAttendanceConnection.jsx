import React from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import Button from "../../common/Button";
import GradientUnderline from "../../common/GradientUnderline";
import { trackEvent } from "@/src/utils/pixel";

export default function GPAttendanceConnection() {
  const handleAttendanceClick = () => {
    trackEvent("payroll_attendance_link_click", {
      page_path: "/solutions/garage-payroll-software",
      cta_location: "attendance_connection_section",
      cta_label: "Explore Attendance Management",
      destination: "/features/attendance"
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 bg-slate-50 border border-slate-200/50 rounded-3xl p-6 shadow-sm flex flex-col justify-between aspect-[4/3] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4">
            <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-0.5 rounded-full">
              Attendance Verified
            </span>
          </div>
          <div className="space-y-4 my-auto">
            <div className="border-b border-slate-200/60 pb-2">
              <p className="text-xs text-slate-500">Employee Profile</p>
              <p className="text-sm font-bold text-slate-800">Suresh Kumar (Senior Mechanic)</p>
            </div>
            <div className="grid grid-cols-2 gap-4 border-b border-slate-200/60 pb-2">
              <div>
                <p className="text-xs text-slate-500">Days Present</p>
                <p className="text-sm font-bold text-slate-800">26 Days</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Paid Leave</p>
                <p className="text-sm font-bold text-slate-800">2 Days</p>
              </div>
            </div>
            <div>
              <p className="text-xs text-slate-500">Attendance Period</p>
              <p className="text-xs font-semibold text-slate-600">01 July 2026 - 31 July 2026</p>
            </div>
          </div>
          <div className="bg-slate-200/50 rounded-2xl p-3 text-[11px] text-slate-600 text-center">
            🔗 Connected with payroll calculations
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Connected Records
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Connect Staff Attendance with <GradientUnderline>Garage Payroll Management</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Attendance shouldn't exist on a separate sheet. GarageSaarthi connects staff presence records directly with payroll calculations. When calculating monthly mechanic payouts, you can review total present days, unpaid leaves, and daily commissions in one file.
          </p>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            By keeping employee data unified, our garage employee payroll software reduces manual bookkeeping tasks and ensures transparent wage tracking for helpers, techs, and supervisors.
          </p>
          <div className="pt-2">
            <Link href="/features/attendance" onClick={handleAttendanceClick}>
              <Button>
                Explore Attendance Management <FaChevronRight className="w-3.5 h-3.5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

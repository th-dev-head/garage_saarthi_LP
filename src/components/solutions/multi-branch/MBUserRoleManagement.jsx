import React from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { trackEvent } from "@/src/utils/pixel";
import GradientUnderline from "../../common/GradientUnderline";

const staffRolesConfig = [
  { role: "Branch Manager (Ahmedabad)", permissions: "Billing, Stock, Attendance & Financials", badgeText: "Full Access", badgeStyle: "bg-emerald-100 text-emerald-800" },
  { role: "Service Advisor (Surat)", permissions: "Create Job Cards, Customer Followups", badgeText: "Custom Access", badgeStyle: "bg-blue-100 text-blue-800" },
  { role: "Mechanic Staff (Vadodara)", permissions: "View Assigned Repair Tasks Only", badgeText: "Restricted (No Billing)", badgeStyle: "bg-slate-200 text-slate-700" }
];

export default function MBUserRoleManagement() {
  const handleUserClick = () => {
    trackEvent("user_management_click", {
      page_path: "/solutions/multi-branch-garage-software",
      cta_location: "user_roles_section",
      cta_label: "Explore User Management"
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Staff Permissions
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Give the Right Access to <GradientUnderline>Your Garage Team</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Manage your garage team easily. Create logins for mechanics, billing staff, and managers, and restrict their visibility to their assigned location. The owner maintains centralized admin rights across all branches.
          </p>
          <div className="pt-2">
            <Link href="/features/user-management" onClick={handleUserClick} className="text-xs text-primary font-bold hover:underline inline-flex items-center gap-1">
              Explore User Management <FaChevronRight className="w-2.5 h-2.5" />
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5 bg-white border border-slate-200/80 rounded-3xl p-5 shadow-lg shadow-slate-100 space-y-4">
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></div>
              <span className="text-xs font-bold text-slate-800">Branch User & Role Permissions</span>
            </div>
            <div className="bg-blue-50 text-blue-700 text-[10px] font-bold px-2.5 py-1 rounded-lg border border-blue-200/60">
              🔒 Role Security
            </div>
          </div>

          {/* Role Access Matrix Mockup */}
          <div className="space-y-2 pt-1">
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Configured Staff Roles</p>
            {staffRolesConfig.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <div>
                  <p className="text-xs font-bold text-slate-800">{item.role}</p>
                  <p className="text-[10px] text-slate-500">{item.permissions}</p>
                </div>
                <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${item.badgeStyle}`}>
                  {item.badgeText}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
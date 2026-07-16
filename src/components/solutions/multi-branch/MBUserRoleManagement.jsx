import React from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { trackEvent } from "@/src/utils/pixel";
import GradientUnderline from "../../common/GradientUnderline";

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
        <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 shadow-sm aspect-[4/3] flex items-center justify-center">
          <div className="text-center space-y-2">
            <span className="text-4xl">🔐</span>
            <p className="text-xs font-bold text-slate-600">Role Permission Rules</p>
            <p className="text-[10px] text-slate-400">Limit branch staff view to local data only</p>
          </div>
        </div>
      </div>
    </section>
  );
}
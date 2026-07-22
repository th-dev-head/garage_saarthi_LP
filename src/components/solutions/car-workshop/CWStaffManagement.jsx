import React from "react";
import Link from "next/link";
import GradientUnderline from "../../common/GradientUnderline";
import { trackEvent } from "@/src/utils/pixel";

export default function CWStaffManagement() {
  const handleLinkClick = (name, url) => {
    trackEvent("feature_click", {
      page_path: "/solutions/car-workshop-software",
      cta_location: "staff_management_section",
      cta_label: name,
      destination: url
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 bg-white border border-slate-200/50 rounded-3xl p-6 shadow-sm flex flex-col justify-between aspect-[4/3] relative">
          <div className="space-y-4 my-auto">
            <div className="border-b border-slate-200/60 pb-3">
              <span className="text-xs text-slate-500 font-medium">User Role Management</span>
              <p className="text-sm font-bold text-slate-800">Mechanic Staff Profiles</p>
            </div>
            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>View Financial Reports</span>
                <span className="text-rose-500 font-bold">✕ Disabled</span>
              </div>
              <div className="flex justify-between">
                <span>Update Job Status</span>
                <span className="text-emerald-600 font-bold">✓ Enabled</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Staff Management
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Manage Mechanics and <GradientUnderline>Workshop Staff from the Same System</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Assign jobs to mechanics, track daily logins, and check leave balance records online. Our specialized role-based permissions allow admins to configure access parameters so staff sees only relevant directories.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-slate-800">Attendance & Leaves</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-normal">
                Log daily check-ins online. Explore{" "}
                <Link href="/features/attendance" onClick={() => handleLinkClick("Attendance Feature Link", "/features/attendance")} className="text-primary font-semibold hover:underline">
                  Attendance
                </Link>{" "}
                and{" "}
                <Link href="/features/leave-management" onClick={() => handleLinkClick("Leaves Feature Link", "/features/leave-management")} className="text-primary font-semibold hover:underline">
                  Leaves
                </Link>.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-bold text-slate-800">Workshop Payroll</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-normal">
                Manage commissions & salaries. Explore{" "}
                <Link href="/features/payroll" onClick={() => handleLinkClick("Payroll Feature Link", "/features/payroll")} className="text-primary font-semibold hover:underline">
                  Payroll
                </Link>.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-bold text-slate-800">User Access</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-normal">
                Configure staff login profiles. Explore{" "}
                <Link href="/features/user-management" onClick={() => handleLinkClick("User Management Link", "/features/user-management")} className="text-primary font-semibold hover:underline">
                  User Permissions
                </Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

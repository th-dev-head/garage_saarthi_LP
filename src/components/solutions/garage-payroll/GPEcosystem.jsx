import React from "react";
import Link from "next/link";
import GradientUnderline from "../../common/GradientUnderline";
import { trackEvent } from "@/src/utils/pixel";

export default function GPEcosystem() {
  const handleLinkClick = (name, url) => {
    trackEvent("payroll_feature_click", {
      page_path: "/solutions/garage-payroll-software",
      cta_location: "ecosystem_section",
      cta_label: name,
      destination: url
    });
  };

  const modules = [
    { name: "Job Cards", url: "/features/job-cards" },
    { name: "Inventory", url: "/features/inventory" },
    { name: "Customers", url: "/features/customers" },
    { name: "Vehicles", url: "/features/vehicles" },
    { name: "CRM & Alerts", url: "/features/crm" },
    { name: "Payments", url: "/features/payments" },
    { name: "Finance", url: "/features/finance" },
    { name: "Attendance", url: "/features/attendance" },
    { name: "Leave Logs", url: "/features/leave-management" },
    { name: "Reports", url: "/features/reports" },
    { name: "Service Alerts", url: "/features/service-alerts" },
    { name: "Branches", url: "/features/branches" }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Ecosystem Integration
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Manage Payroll Alongside Your <GradientUnderline>Daily Garage Operations</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            <Link href="/" onClick={() => handleLinkClick("Homepage Link", "/")} className="font-semibold text-slate-800 hover:underline">
              GarageSaarthi is an all-in-one garage management software that brings payroll and daily workshop operations into one platform.
            </Link>{" "}
            Instead of running a separate, generic corporate HR tool that has no understanding of mechanic work, you manage attendance, job cards, commissions, and salaries inside the same workspace.
          </p>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Every time a job card checkout occurs, labor allocations, inventory stock, and payment registers update. If a mechanic is assigned commission rates, those amounts log directly into their monthly salary ledger.
          </p>
        </div>

        <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-4">
          {modules.map((m, idx) => (
            <Link
              key={idx}
              href={m.url}
              onClick={() => handleLinkClick(m.name, m.url)}
              className="bg-white border border-slate-200/50 rounded-2xl p-4 shadow-sm text-center hover:border-primary/50 transition-colors flex items-center justify-center font-semibold text-xs md:text-sm text-slate-700"
            >
              {m.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

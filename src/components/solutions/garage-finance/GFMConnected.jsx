import React from "react";
import Link from "next/link";
import GradientUnderline from "../../common/GradientUnderline";
import { trackEvent } from "@/src/utils/pixel";

export default function GFMConnected() {
  const handleLinkClick = (name, url) => {
    trackEvent("finance_feature_click", {
      page_path: "/solutions/garage-finance-management-software",
      cta_location: "connected_finance_section",
      cta_label: name,
      destination: url
    });
  };

  const connections = [
    { activity: "Job Cards", desc: "Workshop repair work records", page: "Job Cards", url: "/features/job-card-management" },
    { activity: "Counter Sales", desc: "Direct spare part sales bills", page: "Counter Sales", url: "/features/counter-sales" },
    { activity: "Inventory", desc: "Warehouse stock values", page: "Inventory", url: "/features/inventory" },
    { activity: "Payments", desc: "Outstanding bills and collections logs", page: "Payments", url: "/features/payments" },
    { activity: "Payroll", desc: "Mechanic commissions & salaries logs", page: "Payroll", url: "/features/payroll" },
    { activity: "Loans", desc: "Capital loan installment schedules", page: "Loans", url: "/features/loans" },
    { activity: "Finance", desc: "Daily income & operating expense records", page: "Finance", url: "/features/finance" },
    { activity: "Reports", desc: "Business collection & profit graphs", page: "Reports", url: "/features/reports" }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-4xl w-full space-y-10 text-center">
        <div className="space-y-4">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Unified Ecosystem
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Connect Garage Finance with <GradientUnderline>Daily Workshop Operations</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
            GarageSaarthi is not a generic calculator or simple expense spreadsheet. It integrates your finances directly with daily workshop activities, meaning every job card bill updates your registers automatically.
          </p>
        </div>

        <div className="border border-slate-200/60 rounded-3xl overflow-hidden shadow-sm bg-white">
          <div className="grid grid-cols-3 bg-slate-50 px-6 py-4 border-b border-slate-100 text-xs md:text-sm font-bold text-left text-slate-500">
            <div>Operational Activity</div>
            <div>Description</div>
            <div>Connected Module</div>
          </div>
          <div className="divide-y divide-slate-100">
            {connections.map((c, idx) => (
              <div key={idx} className="grid grid-cols-3 p-6 text-xs md:text-sm text-left items-center hover:bg-slate-50/40 transition-colors">
                <div className="font-bold text-slate-900 border-l-2 border-primary/40 pl-3">{c.activity}</div>
                <div className="text-slate-500">{c.desc}</div>
                <div>
                  <Link href={c.url} onClick={() => handleLinkClick(c.page, c.url)} className="text-primary font-semibold hover:underline">
                    {c.page} Dashboard
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

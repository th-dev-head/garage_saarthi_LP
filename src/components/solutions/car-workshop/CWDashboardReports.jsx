import React from "react";
import Link from "next/link";
import GradientUnderline from "../../common/GradientUnderline";
import { trackEvent } from "@/src/utils/pixel";

export default function CWDashboardReports() {
  const handleLinkClick = (name, url) => {
    trackEvent("feature_click", {
      page_path: "/solutions/car-workshop-software",
      cta_location: "reports_section",
      cta_label: name,
      destination: url
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Workshop Analytics
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Understand Your Car Workshop with <GradientUnderline>Dashboard and Reports</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Track business metrics without manual Excel compilation. GarageSaarthi gathers invoicing data, job card times, and inventory logs to provide real-time reporting parameters on your dashboard.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="space-y-2">
              <h3 className="text-base font-bold text-slate-800">Car Workshop Dashboard</h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                Check active job status counts, today's collections, and pending delivery schedules. Explore{" "}
                <Link href="/features/workshop-management-dashboard" onClick={() => handleLinkClick("Dashboard Feature Link", "/features/workshop-management-dashboard")} className="text-primary font-semibold hover:underline">
                  Dashboard
                </Link>.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-bold text-slate-800">Workshop Reports</h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-normal">
                Export daily collections logs, parts consumption metrics, and tax registers. Explore{" "}
                <Link href="/features/reports" onClick={() => handleLinkClick("Reports Feature Link", "/features/reports")} className="text-primary font-semibold hover:underline">
                  Workshop Reports
                </Link>.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 bg-slate-50 border border-slate-200/50 rounded-3xl p-6 shadow-sm flex flex-col justify-between aspect-[4/3]">
          <div className="space-y-4 my-auto">
            <div className="border-b border-slate-200/60 pb-3">
              <span className="text-xs text-slate-500 font-medium">Business Visibility</span>
              <p className="text-sm font-bold text-slate-800">Operational Report Summary</p>
            </div>
            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>Job Card Turnaround Time</span>
                <span className="font-semibold text-slate-800">3.5 Hours Avg</span>
              </div>
              <div className="flex justify-between">
                <span>Total Collection Today</span>
                <span className="font-bold text-emerald-600">₹48,200</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

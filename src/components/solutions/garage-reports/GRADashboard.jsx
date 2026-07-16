import React from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { trackEvent } from "@/src/utils/pixel";
import GradientUnderline from "../../common/GradientUnderline";

export default function GRADashboard() {
  const handleDashboardClick = () => {
    trackEvent("reports_dashboard_click", {
      page_path: "/solutions/garage-reports-analytics-software",
      cta_location: "dashboard_section",
      cta_label: "Explore Garage Dashboard"
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center border-b border-slate-200/60">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Key Metrics
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            See Key Garage Performance Information from <GradientUnderline>One Dashboard</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            The central GarageSaarthi dashboard brings critical metrics together. Track closed invoices, active repair tasks, pending invoices, payments collected, stock levels, and total customer visits at a glance.
          </p>
          <div className="pt-2">
            <Link href="/features/dashboard" onClick={handleDashboardClick} className="rounded-full bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2">
              Explore Garage Dashboard <FaChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5 bg-slate-100 border border-slate-200 rounded-3xl p-6 shadow-sm aspect-[4/3] flex items-center justify-center">
          <div className="text-center space-y-2">
            <span className="text-4xl">📊</span>
            <p className="text-xs font-bold text-slate-600">Central Dashboard UI</p>
            <p className="text-[10px] text-slate-400">Visually review workshop KPIs on checkin</p>
          </div>
        </div>
      </div>
    </section>
  );
}
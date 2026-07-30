"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { trackEvent } from "@/src/utils/pixel";
import GradientUnderline from "../../common/GradientUnderline";
import Button from "../../common/Button";

const kpiBars = [
  { label: "Spare Parts Sales Share", val: "64% (₹2.19L)", valClass: "text-primary font-bold", width: "64%", bgClass: "bg-primary" },
  { label: "Labor & Service Charges", val: "36% (₹1.23L)", valClass: "text-emerald-600 font-bold", width: "36%", bgClass: "bg-emerald-500" }
];

export default function GRADashboard() {
  const handleDashboardClick = () => {
    trackEvent("reports_dashboard_click", {
      page_path: "/solutions/garage-reports-analytics-software",
      cta_location: "dashboard_section",
      cta_label: "Explore Garage Dashboard"
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
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
            <Link
              href="/features/workshop-management-dashboard"
              onClick={handleDashboardClick}
              className="rounded-full bg-primary hover:bg-primary-hover text-white px-8 py-3 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 cursor-pointer shadow-md"
            >
              Explore Garage Dashboard <FaArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5 bg-white border border-slate-200/80 rounded-3xl p-5 shadow-lg shadow-slate-100 space-y-4">
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></div>
              <span className="text-xs font-bold text-slate-800">Garage Performance KPIs</span>
            </div>
            <div className="bg-slate-100 text-slate-700 text-[10px] font-semibold px-2.5 py-1 rounded-lg border border-slate-200/60">
              📅 This Month
            </div>
          </div>

          {/* Top Metrics */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#EFE9E7]/40 border border-primary/10 rounded-xl p-3">
              <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Revenue Collected</p>
              <p className="text-base font-extrabold text-primary mt-0.5">₹3,42,800</p>
              <span className="text-[9px] font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded mt-1 inline-block">
                ↑ 148 Closed Invoices
              </span>
            </div>
            <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-3">
              <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Total Customer Visits</p>
              <p className="text-base font-extrabold text-slate-800 mt-0.5">215 Vehicles</p>
              <span className="text-[9px] font-medium text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded mt-1 inline-block">
                +18.4% vs last month
              </span>
            </div>
          </div>

          {/* KPI Bars */}
          <div className="space-y-3 pt-1">
            {kpiBars.map((bar, idx) => (
              <div key={idx}>
                <div className="flex justify-between text-[11px] font-semibold text-slate-700 mb-1">
                  <span>{bar.label}</span>
                  <span className={bar.valClass}>{bar.val}</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className={`${bar.bgClass} h-full rounded-full`} style={{ width: bar.width }}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Live Note */}
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-[10px] text-slate-500">
            <span>⚡ Active Repairs: <strong className="text-slate-800">18 Vehicles In Progress</strong></span>
            <span className="text-emerald-600 font-bold">Real-Time</span>
          </div>
        </div>
      </div>
    </section>
  );
}
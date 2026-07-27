import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { trackEvent } from "@/src/utils/pixel";
import Button from "../../common/Button";
import GradientUnderline from "../../common/GradientUnderline";

const outletMetrics = [
  { name: "Ahmedabad HQ", details: "24 Active Jobs • 8 Staff", revenue: "₹2,40,000", dotColor: "bg-primary", valClass: "text-primary", bgClass: "bg-primary/5 border border-primary/20" },
  { name: "Surat Outlet", details: "12 Active Jobs • 4 Staff", revenue: "₹1,60,000", dotColor: "bg-blue-500", valClass: "text-slate-700", bgClass: "bg-slate-50 border border-slate-100" },
  { name: "Vadodara Hub", details: "6 Active Jobs • 3 Staff", revenue: "₹82,500", dotColor: "bg-amber-500", valClass: "text-slate-700", bgClass: "bg-slate-50 border border-slate-100" }
];

export default function GRAMultiBranch() {
  const handleBranchClick = () => {
    trackEvent("reports_multibranch_click", {
      page_path: "/solutions/garage-reports-analytics-software",
      cta_location: "multi_branch_section",
      cta_label: "Explore Multi-Branch Garage Software"
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Multi-Location Analytics
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Review Garage Performance Across <GradientUnderline>Multiple Branches</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Operating a chain of auto centers or workshop franchise outlets? Switch between branch locations on the dashboard and track branch-level sales lists, stock details, and attendance logs. Consolidated analytics made simple.
          </p>
          <div className="pt-2">
            <Button href="/solutions/multi-branch-garage-software" onClick={handleBranchClick} icon={<FaChevronRight className="w-3.5 h-3.5" />}>
              Explore Multi-Branch Garage Software
            </Button>
          </div>
        </div>
        <div className="lg:col-span-5 bg-white border border-slate-200/80 rounded-3xl p-5 shadow-lg shadow-slate-100 space-y-4">
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-xs font-bold text-slate-800">Branch Location Selector</span>
            </div>
            <div className="bg-primary/10 text-primary text-[10px] font-bold px-2.5 py-1 rounded-lg border border-primary/20">
              ⚡ Multi-Outlet Mode
            </div>
          </div>

          {/* Active Location Dropdown Mockup */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 flex items-center justify-between">
            <div>
              <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Active Workspace</p>
              <p className="text-xs font-extrabold text-slate-800 mt-0.5">📍 Ahmedabad Main Branch (HQ)</p>
            </div>
            <span className="text-xs text-primary font-bold bg-white px-2 py-1 rounded-lg border border-slate-200">
              Switch ▾
            </span>
          </div>

          {/* Branch Comparison List */}
          <div className="space-y-2 pt-1">
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Live Outlet Metrics</p>
            {outletMetrics.map((row, idx) => (
              <div key={idx} className={`flex items-center justify-between p-2.5 rounded-xl ${row.bgClass}`}>
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${row.dotColor}`}></span>
                  <div>
                    <p className="text-xs font-bold text-slate-800">{row.name}</p>
                    <p className="text-[10px] text-slate-500">{row.details}</p>
                  </div>
                </div>
                <span className={`text-xs font-bold ${row.valClass}`}>{row.revenue}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
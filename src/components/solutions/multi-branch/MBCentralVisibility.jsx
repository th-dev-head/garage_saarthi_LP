import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

const branchPerformanceList = [
  { code: "B1", badgeStyle: "bg-primary/10 text-primary", name: "Ahmedabad Main", details: "24 Active Jobs • 8 Mechanics", revenue: "₹2.40 Lakh" },
  { code: "B2", badgeStyle: "bg-blue-50 text-blue-600", name: "Surat Workshop", details: "12 Active Jobs • 4 Mechanics", revenue: "₹1.60 Lakh" },
  { code: "B3", badgeStyle: "bg-amber-50 text-amber-600", name: "Vadodara Hub", details: "6 Active Jobs • 3 Mechanics", revenue: "₹82,500" }
];

export default function MBCentralVisibility() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Business Dashboard
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Get Central Visibility Across Your <GradientUnderline>Garage Business</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            As a garage business owner, you cannot be physically present at every branch. GarageSaarthi gathers operational updates centrally, showing you total job cards opened, bills generated, cash counters, and stock logs for each location on a clean dashboard.
          </p>
        </div>
        <div className="lg:col-span-5 bg-white border border-slate-200/80 rounded-3xl p-5 shadow-lg shadow-slate-100 space-y-4">
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-xs font-bold text-slate-800">Central HQ Dashboard</span>
            </div>
            <div className="bg-slate-100 text-slate-700 text-[11px] font-semibold px-2.5 py-1 rounded-lg border border-slate-200/60">
              📍 All Branches (3)
            </div>
          </div>

          {/* Top Stats */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#EFE9E7]/40 border border-primary/10 rounded-xl p-3">
              <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Total Revenue</p>
              <p className="text-base font-extrabold text-primary mt-0.5">₹4,82,500</p>
              <span className="text-[9px] font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded mt-1 inline-block">
                ↑ +14.2% this month
              </span>
            </div>
            <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-3">
              <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Active Job Cards</p>
              <p className="text-base font-extrabold text-slate-800 mt-0.5">42 Vehicles</p>
              <span className="text-[9px] font-medium text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded mt-1 inline-block">
                Across 3 Locations
              </span>
            </div>
          </div>

          {/* Branch Performance Summary */}
          <div className="space-y-2 pt-1">
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Branch Performance</p>
            {branchPerformanceList.map((branch, idx) => (
              <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50/80 border border-slate-100 hover:border-slate-200 transition-all">
                <div className="flex items-center gap-2.5">
                  <div className={`w-7 h-7 rounded-lg font-bold text-xs flex items-center justify-center ${branch.badgeStyle}`}>
                    {branch.code}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">{branch.name}</p>
                    <p className="text-[10px] text-slate-500">{branch.details}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-slate-800">{branch.revenue}</p>
                  <span className="text-[9px] text-emerald-600 font-semibold">Live</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
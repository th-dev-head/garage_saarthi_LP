import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

export default function MBCentralVisibility() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center border-b border-slate-200/60">
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
        <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 shadow-sm aspect-[4/3] flex items-center justify-center">
          <div className="text-center space-y-2">
            <span className="text-4xl">📊</span>
            <p className="text-xs font-bold text-slate-600">Central Dashboard View</p>
            <p className="text-[10px] text-slate-400">Filter metrics by location centrally</p>
          </div>
        </div>
      </div>
    </section>
  );
}
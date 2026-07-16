import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

export default function VSHAccessRecords() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center border-b border-slate-200/60">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Accessibility
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Access Vehicle Service Records When Your <GradientUnderline>Workshop Needs Them</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            In a busy garage, speed is essential. GarageSaarthi is optimized to search and fetch customer vehicle records in seconds. Simply input the vehicle registration number or customer phone number on the dashboard or app.
          </p>
          <ul className="space-y-3 text-xs md:text-sm text-slate-600">
            <li className="flex items-center gap-2">✓ Query by registration plate</li>
            <li className="flex items-center gap-2">✓ Query by owner name or mobile number</li>
            <li className="flex items-center gap-2">✓ View complete chronologically sorted job checklists</li>
          </ul>
        </div>
        <div className="lg:col-span-5 bg-white border border-slate-200/50 rounded-3xl p-6 shadow-sm flex items-center justify-center aspect-[4/3]">
          <div className="text-center space-y-2">
            <span className="text-4xl">🔍</span>
            <p className="text-xs font-bold text-slate-600">Instant Database Query</p>
            <p className="text-[10px] text-slate-400">Search by plate number to review past jobs</p>
          </div>
        </div>
      </div>
    </section>
  );
}
import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

export default function HistAccessRecords() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block">
            Accessibility
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
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
        <div className="md:col-span-5 bg-white border border-slate-200/80 rounded-3xl p-5 shadow-lg shadow-slate-100 space-y-4">
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></div>
              <span className="text-xs font-bold text-slate-800">Vehicle Database Query</span>
            </div>
            <div className="bg-primary/10 text-primary text-[10px] font-bold px-2.5 py-1 rounded-lg border border-primary/20">
              ⚡ Instant Lookup
            </div>
          </div>

          {/* Search Bar Input Mockup */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-slate-400 text-sm">🔍</span>
              <span className="text-xs font-bold text-slate-800">GJ05AB1234</span>
            </div>
            <span className="text-[10px] bg-primary text-white font-bold px-2.5 py-1 rounded-lg">
              Found (1 Record)
            </span>
          </div>

          {/* Search Results Preview */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
            <div className="flex justify-between items-center">
              <p className="text-xs font-extrabold text-slate-800 font-bold">Hyundai i20 Asta (Petrol)</p>
              <span className="text-[9px] text-slate-500 font-semibold">Owner: Rajesh Patel</span>
            </div>
            <p className="text-[10px] text-slate-500">Last Visit: 12 Jan 2026 • 3 Previous Job Cards Logged</p>

            <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-[10px]">
              <span className="text-emerald-600 font-bold">✓ Engine Oil Changed</span>
              <span className="text-emerald-600 font-bold">✓ Brake Pads Replaced</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

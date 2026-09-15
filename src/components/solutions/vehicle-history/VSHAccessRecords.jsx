import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

const accessRecordFeatures = [
  "Query by registration plate or chassis/engine number",
  "Query by owner name or mobile number",
  "Instant lookup for AMC contract validity, split OD/TP insurance & PUC dates",
  "1-click access to digital vehicle documents (RC, Insurance Policy, DL, PUC)",
  "View complete chronologically sorted job checklists and part replacements"
];

export default function VSHAccessRecords() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Accessibility
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Access Vehicle Service Records When Your <GradientUnderline>Workshop Needs Them</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            In a busy garage, speed is essential. GarageSaarthi is optimized to search and fetch customer vehicle records, AMC contract validity, split OD/TP insurance expiries, and digital RC/policy files in seconds.
          </p>
          <ul className="space-y-3 text-xs md:text-sm text-slate-600">
            {accessRecordFeatures.map((text, idx) => (
              <li key={idx} className="flex items-center gap-2">✓ {text}</li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-5 bg-white border border-slate-200/80 rounded-3xl p-5 shadow-lg shadow-slate-100 space-y-4">
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
              <span className="text-xs font-bold text-slate-800 font-mono">RJ31CB7732</span>
            </div>
            <span className="text-[10px] bg-primary text-white font-bold px-2.5 py-1 rounded-lg">
              Found (1 Record)
            </span>
          </div>

          {/* Search Results Preview */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-2.5">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs font-extrabold text-slate-800">Renault Kwid RXT (Petrol/CNG)</p>
                <p className="text-[10px] text-slate-500 font-medium">Owner: Amrinder Singh • 9181687255</p>
              </div>
              <span className="text-[9px] font-bold bg-orange-100 text-primary px-2 py-0.5 rounded-md border border-orange-200">
                AMC #2121 Active
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[9.5px] bg-white p-2 rounded-lg border border-slate-200/80">
              <div>
                <span className="text-slate-400 block">Insurance OD:</span>
                <span className="font-semibold text-slate-700">13/09/2026</span>
              </div>
              <div>
                <span className="text-slate-400 block">Digital Docs:</span>
                <span className="font-bold text-emerald-700">4 Files (RC, Policy)</span>
              </div>
            </div>

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
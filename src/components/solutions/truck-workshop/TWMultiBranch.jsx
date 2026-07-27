import React from "react";
import Link from "next/link";
import { FaBuilding, FaExchangeAlt, FaChartBar, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const truckBranchRows = [
  { branch: "Surat Branch", activeCards: "14 Active Cards" },
  { branch: "Ahmedabad Branch", activeCards: "8 Active Cards" },
  { branch: "Vadodara Branch", activeCards: "5 Active Cards" }
];

const truckBranchFeatures = [
  { icon: FaBuilding, text: "Centralized Branch Controls" },
  { icon: FaExchangeAlt, text: "Inter-Branch Stock Transfers" },
  { icon: FaChartBar, text: "Consolidated Analytics Reports" }
];

export default function TWMultiBranch() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual block - Left Column */}
          <div className="lg:col-span-5 bg-white border border-slate-200/50 rounded-3xl p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <span className="text-xs font-bold text-slate-800">Branch Management</span>
              <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full">3 Active</span>
            </div>
            <div className="space-y-3">
              {truckBranchRows.map((row, idx) => (
                <div key={idx} className="flex justify-between items-center text-xs">
                  <span className="text-slate-600 font-medium">{row.branch}</span>
                  <span className="text-slate-800 font-bold">{row.activeCards}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Content - Right Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
              Multi-Branch Operations
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-6 leading-tight">
              Manage Multiple Truck Workshop Branches <GradientUnderline>from One Platform</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Consolidate operations across multiple service hubs. Monitor branch-wise collections, transfer spare parts stock between branches, and define role-based access for local service managers centrally.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-600 pt-2">
              {truckBranchFeatures.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-center gap-2">
                    <Icon className="text-primary w-4 h-4" />
                    <span>{item.text}</span>
                  </div>
                );
              })}
            </div>

            <div className="pt-4">
              <Link
                href="/solutions/multi-branch-garage-software"
                className="inline-flex items-center gap-1.5 font-bold text-primary hover:text-primary-hover text-sm transition-colors"
              >
                Explore Multi-Branch Garage Software <FaArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


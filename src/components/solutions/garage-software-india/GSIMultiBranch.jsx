import React from "react";
import Link from "next/link";
import { FaBuilding, FaExchangeAlt, FaUserLock, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function GSIMultiBranch() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Multi-Location Growth
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Scale Your Indian Garage Business <GradientUnderline>to Multiple Branches</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Opening a second or third workshop location shouldn't mean managing separate disconnected software accounts.
          </p>
        </div>

        {/* 3 Grid Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary text-base">
              <FaBuilding />
            </div>
            <h3 className="text-sm font-bold text-slate-900">Centralized Owner Controls</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Switch between branch dashboards with a single click to monitor branch-wise collections, daily job sheet counts, and team workloads.
            </p>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary text-base">
              <FaExchangeAlt />
            </div>
            <h3 className="text-sm font-bold text-slate-900">Inter-Branch Stock Transfers</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Transfer spare parts inventory between workshop branches seamlessly, auditing transit status and stock valuation levels in real time.
            </p>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary text-base">
              <FaUserLock />
            </div>
            <h3 className="text-sm font-bold text-slate-900">Role-Based User Permissions</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Assign strict branch visibility so floor managers only access their assigned location while owners view consolidated financial analytics.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <Link
            href="/solutions/multi-branch-garage-software"
            className="inline-flex items-center gap-2 font-bold text-primary hover:text-primary-hover text-sm transition-colors"
          >
            Explore Multi-Branch Software <FaArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

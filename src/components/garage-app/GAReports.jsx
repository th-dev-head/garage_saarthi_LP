import React from "react";
import Link from "next/link";
import { FaChartLine, FaArrowRight } from "react-icons/fa";

export default function GAReports() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Visual Column */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm w-full max-w-md mx-auto md:max-w-none md:order-first order-last">
            <div className="flex justify-between items-center pb-4 mb-4 border-b border-slate-100">
              <span className="text-xs font-bold text-slate-800">Operational Report Preview</span>
              <span className="text-[10px] text-primary font-bold">This Month</span>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-xl text-xs text-slate-600">
                <p className="font-bold text-slate-900 mb-1">Daily Job Activity</p>
                <p>Completed cards: 142 Jobs</p>
              </div>
              <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-xl text-xs text-slate-600">
                <p className="font-bold text-slate-900 mb-1">Consolidated Net Sales</p>
                <p>Gross Billing: ₹1,85,400</p>
              </div>
            </div>
          </div>

          {/* Info */}
          <div>
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
              Consolidated Reports
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
              View Important Garage Reports{" "}
              <span className="relative inline-block">
                from Your Mobile
                <span className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-[linear-gradient(90deg,#B02E0C_0%,#FF643C_100%)]" />
              </span>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
              Track business sales performance, check active stock listings value, evaluate labor commission counts, and track daily job cards metrics inside your app dashboard.
            </p>
            
            <Link
              href="/features/reports"
              className="rounded-full bg-primary hover:bg-primary-hover text-white px-6 py-2.5 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
            >
              Check Reports Features
              <FaArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}

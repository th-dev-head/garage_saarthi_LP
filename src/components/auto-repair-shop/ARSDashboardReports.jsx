import React from "react";
import Link from "next/link";
import { FaChartLine, FaChartPie, FaArrowRight } from "react-icons/fa";

export default function ARSDashboardReports() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        
        {/* Header */}
        <div className="mb-12">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Business Insights
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Understand Your Repair Shop with{" "}
            <span className="relative inline-block">
              Dashboard and Reports
              <span className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-[linear-gradient(90deg,#B02E0C_0%,#FF643C_100%)]" />
            </span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-3xl">
            Gain a complete overview of your workshop operations. Monitor revenue streams, pending invoicing, customer ratings, parts values, and technician performance.
          </p>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* Details list */}
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-slate-200/80 flex items-center justify-center text-primary shadow-sm">
                <FaChartLine className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">View Daily Garage Activity</h3>
                <p className="text-xs text-slate-600">Track active vehicles, completed jobs, cash/UPI earnings, and new vehicle admissions in real time from a live panel.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-slate-200/80 flex items-center justify-center text-primary shadow-sm">
                <FaChartPie className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">Access Business Reports</h3>
                <p className="text-xs text-slate-600">Download profit statements, parts stock reports, and GST logs to manage accounting cleanly.</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 items-center pt-4">
              <Link
                href="/features/dashboard"
                className="rounded-full bg-primary hover:bg-primary-hover text-white px-6 py-2.5 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
              >
                Explore Garage Reports
                <FaArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Visual Column */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
            <h4 className="text-xs font-bold text-slate-800 mb-4">Workshop Daily Summary</h4>
            <div className="grid grid-cols-2 gap-4 text-xs text-slate-600">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                <span className="text-[10px] text-slate-500 block mb-1">REVENUE TODAY</span>
                <span className="text-base font-bold text-slate-800">₹14,500</span>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                <span className="text-[10px] text-slate-500 block mb-1">JOBS CLOSED</span>
                <span className="text-base font-bold text-slate-800">6 Vehicles</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
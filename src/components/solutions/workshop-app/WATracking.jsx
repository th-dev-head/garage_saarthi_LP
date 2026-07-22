import React from "react";
import Link from "next/link";
import { FaChartLine, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function WATracking() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Info */}
          <div>
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
              Operation Monitoring
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
              Keep Track of Your{" "}
              <GradientUnderline>Workshop Operations</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
              Track live job cards statuses, view cash vs digital payment splits, monitor inventory levels, and check employee clock-in hours directly from a unified live feed.
            </p>
            
            <div className="flex flex-wrap gap-4 items-center mb-6">
              <Link
                href="/features/dashboard"
                className="rounded-full bg-primary hover:bg-primary-hover text-white px-6 py-2.5 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
              >
                Dashboard Features
                <FaArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/features/reports"
                className="text-xs font-bold text-primary hover:underline"
              >
                Explore Report Metrics
              </Link>
            </div>
          </div>

          {/* Visual Column */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 shadow-sm w-full max-w-md mx-auto md:max-w-none md:order-last order-first">
            <span className="text-xs font-bold text-slate-800 mb-4 block text-center">Live Operations Stream</span>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200/80 text-xs text-slate-600 font-sans shadow-xs">
                <div className="flex justify-between mb-1 font-bold text-slate-800">
                  <span>General Service Complete</span>
                  <span className="text-green-600">Complete</span>
                </div>
                <p>GJ05AB1234 (Hyundai i20) is ready for pickup.</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200/80 text-xs text-slate-600 font-sans shadow-xs">
                <div className="flex justify-between mb-1 font-bold text-slate-800">
                  <span>Stock Alert</span>
                  <span className="text-red-500 font-bold">Low Stock</span>
                </div>
                <p>Synthetic Engine Oil 5W-30 is below minimum threshold (15 Liters left).</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}


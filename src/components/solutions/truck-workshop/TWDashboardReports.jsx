import React from "react";
import Link from "next/link";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const reportItems = [
  {
    title: "Commercial Jobs Audits",
    desc: "Monitor active repair timelines, average turnaround times, and completed job cards logs centrally.",
  },
  {
    title: "Financial Analytics Logs",
    desc: "Review total sales, trace pending payments from corporate transport clients, and audit collections split by mode.",
  },
  {
    title: "Parts Stock Valuation",
    desc: "Audit spare parts stock value, high-margin parts turnover, and consumable usage patterns to balance your workshop stock levels.",
  },
];

const realTimeTruckMetrics = [
  { label: "Active Trucks", val: "8", valClass: "text-slate-800" },
  { label: "Pending Dues", val: "₹45,200", valClass: "text-primary" },
  { label: "Spares Billed", val: "14", valClass: "text-slate-800" },
  { label: "Stock Alerts", val: "3", valClass: "text-red-600" }
];

export default function TWDashboardReports() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content - Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
              Analytics & Metrics
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
              Understand Your Truck Workshop with{" "}
              <GradientUnderline>Business Reports</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Get complete business visibility. Track collection registers, trace pending dues, and review stock valuation summaries instantly.
            </p>

            <div className="space-y-4 pt-2">
              {reportItems.map((point, idx) => (
                <div key={idx} className="flex gap-3">
                  <FaCheckCircle className="text-primary w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 mb-0.5">{point.title}</h3>
                    <p className="text-[11px] text-slate-500 leading-normal">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/features/reports/"
                className="inline-flex items-center gap-1.5 font-bold text-primary hover:text-primary-hover text-sm transition-colors"
              >
                Explore Garage Reports <FaArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Visual block - Right Column */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-sm">
            <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wide border-b border-slate-200/60 pb-3 mb-4">
              Real-Time Metrics
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {realTimeTruckMetrics.map((item, idx) => (
                <div key={idx} className="bg-white border border-slate-200/40 p-4 rounded-2xl shadow-xs">
                  <span className="text-[10px] text-slate-400 font-bold uppercase">{item.label}</span>
                  <p className={`text-lg font-bold mt-1 ${item.valClass}`}>{item.val}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


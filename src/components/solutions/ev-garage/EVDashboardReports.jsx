import React from "react";
import Link from "next/link";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const reportItems = [
  {
    title: "Workshop Activity Reports",
    desc: "Monitor active, pending, or completed job cards dynamically. Track job durations and mechanic performance indicators.",
  },
  {
    title: "Sales & Payments Logs",
    desc: "Review daily sales metrics, filter collections by Cash vs. Online, and audit invoices with direct payment link summaries.",
  },
  {
    title: "Inventory Stock Valuation",
    desc: "Audit spare parts stock value, high-margin parts turnover, and consumable usage patterns to balance your workshop stock levels.",
  },
];

export default function EVDashboardReports() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content - Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
              Analytics & metrics
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
              Understand Your EV Workshop with{" "}
              <GradientUnderline>Dashboard and Reports</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Ditch the guesswork. View clear reports on how your electric vehicle service center is performing. Audit parts stock, see mechanic collections, and view payments received in a few clicks.
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
                href="/features/reports"
                className="inline-flex items-center gap-1.5 font-bold text-primary hover:text-primary-hover text-sm transition-colors"
              >
                Explore Garage Reports <FaArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Visual Grid - Right Column */}
          <div className="lg:col-span-5 bg-white border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-sm">
            <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wide border-b border-slate-200/60 pb-3 mb-4">
              Real-Time Metrics
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 border border-slate-200/40 p-4 rounded-2xl shadow-xs">
                <span className="text-[10px] text-slate-400 font-bold uppercase">Active EV Cards</span>
                <p className="text-lg font-bold text-slate-800 mt-1">9</p>
              </div>
              <div className="bg-slate-50 border border-slate-200/40 p-4 rounded-2xl shadow-xs">
                <span className="text-[10px] text-slate-400 font-bold uppercase">Today's Sales</span>
                <p className="text-lg font-bold text-primary mt-1">₹5,200</p>
              </div>
              <div className="bg-slate-50 border border-slate-200/40 p-4 rounded-2xl shadow-xs">
                <span className="text-[10px] text-slate-400 font-bold uppercase">Converted Leads</span>
                <p className="text-lg font-bold text-slate-800 mt-1">38</p>
              </div>
              <div className="bg-slate-50 border border-slate-200/40 p-4 rounded-2xl shadow-xs">
                <span className="text-[10px] text-slate-400 font-bold uppercase">Low Stock Spares</span>
                <p className="text-lg font-bold text-red-600 mt-1">2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

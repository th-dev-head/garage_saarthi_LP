import React from "react";
import { FaFileInvoice, FaBoxes, FaUserCog, FaReceipt } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const rReportTypes = [
  {
    icon: FaFileInvoice,
    title: "Financial & Revenue Reports",
    desc: "Daily cash register logs, UPI collection reports, vendor payable accounts, and net profit & loss statements."
  },
  {
    icon: FaBoxes,
    title: "Inventory & Stock Velocity Reports",
    desc: "Stock valuation, fast-moving items, reorder quantity alerts, and spare parts margin distribution."
  },
  {
    icon: FaUserCog,
    title: "Mechanic & Labor Performance",
    desc: "Labor revenue generated, average job completion time, mechanic commission payouts, and efficiency scores."
  },
  {
    icon: FaReceipt,
    title: "Customer & Retention Analytics",
    desc: "Customer visit history, pending service due reminders, feedback ratings, and vehicle service logs."
  }
];

export default function RReportTypes() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side Features */}
        <div>
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Report Modules
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
            Comprehensive Reports for Every <GradientUnderline>Workshop Department</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
            Tailored reports designed specifically for auto repair shop operations, spare parts inventory, and financial auditing.
          </p>

          <div className="space-y-6">
            {rReportTypes.map((type, idx) => {
              const Icon = type.icon;
              return (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-primary shadow-xs">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">{type.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{type.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side Visual Reports Summary Card Mockup */}
        <div className="bg-slate-900 rounded-3xl p-6 shadow-xl border border-slate-800 text-white space-y-4 max-w-md mx-auto w-full">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs">
                KPI
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Monthly Analytics Summary</h4>
                <p className="text-[10px] text-slate-400">July 2026 Metrics</p>
              </div>
            </div>
            <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded font-semibold">1-Click PDF</span>
          </div>

          <div className="bg-slate-800/90 rounded-2xl p-4 space-y-3 text-xs border border-slate-700/60 font-sans">
            <div className="flex justify-between items-center pb-2 border-b border-slate-700">
              <span className="text-slate-300">Job Cards Completed</span>
              <span className="font-bold text-white">142 Invoices</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-slate-700">
              <span className="text-slate-300">Average Job Value</span>
              <span className="font-bold text-emerald-400">₹2,430.00</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-slate-700">
              <span className="text-slate-300">Top Spare Part Category</span>
              <span className="font-bold text-amber-400">Engine Oil & Filters</span>
            </div>
            <div className="flex justify-between items-center pt-1">
              <span className="font-bold text-white">Overall Workshop Net Profit</span>
              <span className="font-bold text-emerald-400 text-sm">₹84,500.00</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

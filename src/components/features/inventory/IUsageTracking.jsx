import React from "react";
import {
  FaHistory,
  FaWrench,
  FaShoppingCart,
  FaShieldAlt,
  FaChartLine,
  FaCar,
  FaCheckCircle,
  FaBoxes,
  FaUserCheck,
} from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const usageRecords = [
  {
    type: "Job Card",
    typeBadge: "bg-blue-50 text-blue-700 border-blue-200",
    icon: FaWrench,
    ref: "JC-2026-089",
    vehicle: "RJ 31 CB 7732 (Renault Kwid)",
    customer: "Amrinder Singh",
    qty: "3.5 L",
    unitPrice: "₹380",
    total: "₹1,330",
    handler: "Mechanic Ramesh K.",
    date: "12/09/2026",
  },
  {
    type: "Counter Sale",
    typeBadge: "bg-emerald-50 text-emerald-700 border-emerald-200",
    icon: FaShoppingCart,
    ref: "CS-1042",
    vehicle: "Retail Counter Sale",
    customer: "Walk-in (9829012345)",
    qty: "1.0 L",
    unitPrice: "₹420",
    total: "₹420",
    handler: "Advisor Sunita",
    date: "10/09/2026",
  },
  {
    type: "Job Card",
    typeBadge: "bg-blue-50 text-blue-700 border-blue-200",
    icon: FaWrench,
    ref: "JC-2026-074",
    vehicle: "FILE 2434 (Toyota Etios)",
    customer: "Satvinder Singh",
    qty: "4.0 L",
    unitPrice: "₹380",
    total: "₹1,520",
    handler: "Mechanic Irfan Ali",
    date: "08/09/2026",
  },
  {
    type: "Job Card",
    typeBadge: "bg-blue-50 text-blue-700 border-blue-200",
    icon: FaWrench,
    ref: "JC-2026-061",
    vehicle: "RJ 13 CF 2588 (Tata Tiago)",
    customer: "Saranjeet Kour",
    qty: "3.5 L",
    unitPrice: "₹380",
    total: "₹1,330",
    handler: "Mechanic Ramesh K.",
    date: "02/09/2026",
  },
];

const usagePillars = [
  {
    icon: FaHistory,
    title: "Complete Item Consumption History",
    desc: "Track every single unit consumed across Job Cards and Counter Sales with timestamps, vehicle numbers, and billing references.",
  },
  {
    icon: FaShieldAlt,
    title: "Zero Spare Theft & Floor Leakage",
    desc: "Every inventory deduction requires an authorized Job Card or Counter Sale bill, eliminating untracked inventory shrinkage.",
  },
  {
    icon: FaUserCheck,
    title: "Technician & Mechanic Accountability",
    desc: "Log which mechanic or service advisor requisitioned each part to maintain complete transparency across workshop service bays.",
  },
  {
    icon: FaChartLine,
    title: "Accurate Reordering & Velocity Forecasts",
    desc: "Analyze consumption velocity (litres/units per month) to calculate exact stock run-out dates and reorder before parts go out of stock.",
  },
];

const usageQuickMetrics = [
  { label: "Total Used", value: "128.5 L", valueClass: "text-slate-900" },
  { label: "Job Cards", value: "24 Jobs", valueClass: "text-primary" },
  { label: "Counter Sales", value: "8 Sales", valueClass: "text-emerald-700" },
  { label: "Consumed Val", value: "₹48,830", valueClass: "text-slate-900" },
];

const stockVelocityRows = [
  {
    label: "Monthly Consumption Rate",
    value: "42.5 L / month",
    boxClass: "bg-slate-50 border-slate-200/80",
    valClass: "text-slate-900",
  },
  {
    label: "Estimated Run-out Time",
    value: "31 Days Remaining",
    boxClass: "bg-slate-50 border-slate-200/80",
    valClass: "text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-md",
  },
  {
    label: "Purchase vs Selling Price",
    value: "₹260 buy → ₹380 sell",
    boxClass: "bg-slate-50 border-slate-200/80",
    valClass: "text-slate-900",
  },
  {
    label: "Gross Profit Margin",
    value: "+₹120 / L (31.5%)",
    boxClass: "bg-emerald-50 border-emerald-200 text-emerald-900",
    valClass: "text-emerald-900",
  },
];

export default function IUsageTracking() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Item Consumption &amp; Lifecycle Audit
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
            Track Exactly Where Every Spare Part is{" "}
            <GradientUnderline>Used and Consumed</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Eliminate inventory leakage and mystery stock shortages. Audit item-by-item consumption history across Job Cards and Counter Sales with vehicle-level traceability and mechanic accountability.
          </p>
        </div>

        {/* Dual Panel Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Panel: Item Usage History Table Mockup (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200/90 rounded-3xl p-5 sm:p-6 shadow-sm space-y-4">
            {/* Item Title Card */}
            <div className="bg-white border border-slate-200/80 p-3.5 rounded-2xl flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-9 h-9 rounded-xl bg-orange-100 text-primary flex items-center justify-center font-bold shrink-0">
                  <FaBoxes />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                    Mobil Super 3000 5W-30 Synthetic
                  </h3>
                  <p className="text-[10.5px] text-slate-500 font-mono">
                    Part #OIL-MOB-5W30 • Engine Lubricants
                  </p>
                </div>
              </div>
              <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full whitespace-nowrap">
                Stock: 45.0 L
              </span>
            </div>

            {/* Quick Metrics Bar (Looped) */}
            <div className="grid grid-cols-4 gap-2 text-center">
              {usageQuickMetrics.map((metric, idx) => (
                <div key={idx} className="bg-white p-2 rounded-xl border border-slate-200/70">
                  <span className="text-[10px] text-slate-400 block">{metric.label}</span>
                  <span className={`text-xs font-bold font-mono ${metric.valueClass}`}>
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Usage History Table */}
            <div className="overflow-x-auto border border-slate-200 rounded-2xl bg-white">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#FAF7F5] border-b border-slate-200 text-[10.5px] font-bold text-slate-700">
                  <tr>
                    <th className="p-2.5">Source &amp; Ref</th>
                    <th className="p-2.5">Vehicle / Customer</th>
                    <th className="p-2.5 text-center">Qty</th>
                    <th className="p-2.5 text-right">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {usageRecords.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-2.5 whitespace-nowrap">
                        <span
                          className={`text-[9px] font-bold px-1.5 py-0.2 rounded border inline-block mb-0.5 ${row.typeBadge}`}
                        >
                          {row.type}
                        </span>
                        <div className="font-mono font-bold text-slate-900 text-[11px]">{row.ref}</div>
                        <div className="text-[9.5px] text-slate-400">{row.date}</div>
                      </td>

                      <td className="p-2.5">
                        <div className="font-bold text-slate-800 text-[11px] truncate max-w-[150px]">
                          {row.vehicle}
                        </div>
                        <div className="text-[10px] text-slate-500 truncate max-w-[150px]">
                          {row.customer}
                        </div>
                        <div className="text-[9.5px] text-slate-400 font-medium">
                          👤 {row.handler}
                        </div>
                      </td>

                      <td className="p-2.5 text-center whitespace-nowrap">
                        <span className="font-mono font-bold text-slate-900 text-xs">{row.qty}</span>
                        <div className="text-[9.5px] text-slate-400">{row.unitPrice}/L</div>
                      </td>

                      <td className="p-2.5 text-right whitespace-nowrap">
                        <span className="font-mono font-bold text-primary text-xs">{row.total}</span>
                        <div className="text-[9px] text-emerald-600 font-medium">Billed ✓</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Panel: Live Consumption Analytics & Reorder Guard (5 Cols) */}
          <div className="lg:col-span-5 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-lg space-y-5">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <FaChartLine className="text-primary" /> Consumption Split &amp; Velocity
              </h3>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Real-time breakdown of internal workshop use vs retail counter sale
              </p>
            </div>

            {/* Consumption Progress Bars */}
            <div className="space-y-3 bg-[#FAF8F6] p-4 rounded-2xl border border-slate-200/70">
              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-slate-800">Job Card Consumption</span>
                  <span className="text-primary font-mono">82% (105.5 L)</span>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full w-[82%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-slate-800">Retail Counter Sales</span>
                  <span className="text-emerald-700 font-mono">18% (23.0 L)</span>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full w-[18%]" />
                </div>
              </div>
            </div>

            {/* Stock Velocity & Margin Intelligence (Looped) */}
            <div className="space-y-2.5 text-xs">
              {stockVelocityRows.map((row, idx) => (
                <div
                  key={idx}
                  className={`flex justify-between items-center p-2.5 rounded-xl border ${row.boxClass}`}
                >
                  <span className="font-medium text-slate-600">{row.label}</span>
                  <span className={`font-bold font-mono ${row.valClass}`}>{row.value}</span>
                </div>
              ))}
            </div>

            {/* Security Guarantee Note */}
            <div className="border border-slate-200/80 rounded-xl p-3 bg-white text-[11px] text-slate-600 flex items-start gap-2">
              <FaCheckCircle className="text-emerald-500 text-xs shrink-0 mt-0.5" />
              <span>
                <strong>100% Pilferage Protection:</strong> Every single item deducted must link to a valid Job Card ID or Counter Sale invoice.
              </span>
            </div>
          </div>
        </div>

        {/* 4 Value Pillars (Looped) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {usagePillars.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-2.5 shadow-2xs hover:border-primary/30 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-orange-100/70 text-primary flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">{feat.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

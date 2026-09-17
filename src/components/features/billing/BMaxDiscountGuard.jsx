import React from "react";
import {
  FaShieldAlt,
  FaPercentage,
  FaBan,
  FaCalculator,
  FaCheckCircle,
  FaExclamationTriangle,
  FaFileInvoiceDollar,
  FaLock,
} from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const marginItems = [
  {
    name: "Synthetic Engine Oil 5W-30 (3.5L)",
    category: "Spare Parts",
    sell: "₹1,330",
    buy: "₹910",
    margin: "+₹420",
  },
  {
    name: "Front Brake Pads Set (OEM)",
    category: "Spare Parts",
    sell: "₹2,400",
    buy: "₹1,650",
    margin: "+₹750",
  },
  {
    name: "AC Gas Top-Up & Cooling Flush",
    category: "Consumables",
    sell: "₹1,850",
    buy: "₹800",
    margin: "+₹1,050",
  },
  {
    name: "Periodic General Service Labor",
    category: "Labor Work",
    sell: "₹2,200",
    buy: "₹820",
    margin: "+₹1,380",
  },
];

const marginSummaryStats = [
  { label: "Total Revenue", value: "₹14,800", valueClass: "text-slate-900", labelClass: "text-slate-400" },
  { label: "Vendor Costs", value: "₹11,200", valueClass: "text-slate-600", labelClass: "text-slate-400" },
  { label: "Max Safe Discount", value: "₹3,600 (Margin)", valueClass: "text-emerald-700", labelClass: "text-emerald-700 font-bold" },
];

const paymentBreakdownRows = [
  { label: "Applied Safe Discount:", value: "₹1,500.00", isProfit: false },
  { label: "Customer Payable Amount:", value: "₹13,300.00", isProfit: false },
  { label: "Protected Net Profit:", value: "+₹2,100.00 ✓", isProfit: true },
];

const discountPillars = [
  {
    icon: FaShieldAlt,
    title: "Automated Profit Margin Protection",
    desc: "Every job card calculates live gross profit margins across parts and labor (Selling Price − Vendor Cost) to safeguard your revenue.",
  },
  {
    icon: FaBan,
    title: "Zero Loss-Making Bills",
    desc: "Service advisors cannot give unauthorized discounts that exceed the gross profit margin, completely eliminating negative cashflow jobs.",
  },
  {
    icon: FaCalculator,
    title: "Item-by-Item Vendor Cost Tracking",
    desc: "Compare actual supplier purchase prices against customer billing rates in real time for foolproof financial visibility.",
  },
  {
    icon: FaPercentage,
    title: "Capped Promotional Coupons & Offers",
    desc: "Set max discount ceiling limits (e.g., '20% off up to ₹500') on WhatsApp broadcasts, coupons, and seasonal festive campaigns.",
  },
];

export default function BMaxDiscountGuard() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Profit Guardrails &amp; Discount Control
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
            Protect Workshop Profit Margins with{" "}
            <GradientUnderline>Smart Max Discount Capping</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Stop giving away your profits. GarageSaarthi automatically computes real-time gross margins on every repair job and blocks discounts that exceed the net margin, preventing loss-making customer invoices.
          </p>
        </div>

        {/* Dual Panel Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Panel: Job Card Margin Breakdown (7 Cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-200/90 rounded-3xl p-5 sm:p-7 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                  <FaCalculator />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Job Card Cost &amp; Margin Ledger</h3>
                  <p className="text-[11px] text-slate-500 font-mono">JC-2026-089 • RJ 31 CB 7732</p>
                </div>
              </div>
              <span className="text-[10.5px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full font-mono">
                Total Bill: ₹14,800
              </span>
            </div>

            {/* Table Mockup */}
            <div className="overflow-x-auto border border-slate-200 rounded-2xl">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#FAF7F5] border-b border-slate-200 text-[10.5px] font-bold text-slate-700">
                  <tr>
                    <th className="p-2.5">Service / Spare Item</th>
                    <th className="p-2.5 text-right">Selling Price</th>
                    <th className="p-2.5 text-right">Vendor Cost</th>
                    <th className="p-2.5 text-right">Gross Margin</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {marginItems.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-2.5">
                        <div className="font-semibold text-slate-900 text-xs">{item.name}</div>
                        <div className="text-[10px] text-slate-400">{item.category}</div>
                      </td>
                      <td className="p-2.5 text-right font-mono text-slate-800 text-xs font-medium">
                        {item.sell}
                      </td>
                      <td className="p-2.5 text-right font-mono text-slate-500 text-xs">
                        {item.buy}
                      </td>
                      <td className="p-2.5 text-right font-mono font-bold text-emerald-700 text-xs">
                        {item.margin}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Summary Banner (Looped) */}
            <div className="bg-[#FAF8F6] border border-slate-200/90 rounded-2xl p-3.5 grid grid-cols-3 gap-2 text-center text-xs">
              {marginSummaryStats.map((stat, idx) => (
                <div key={idx}>
                  <span className={`text-[10px] block ${stat.labelClass}`}>{stat.label}</span>
                  <span className={`font-bold font-mono text-xs ${stat.valueClass}`}>{stat.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel: Live Guardrail Action Dialog (5 Cols) */}
          <div className="lg:col-span-5 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-xl space-y-4">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <FaLock className="text-primary" /> Discount Guardrail Active
              </h3>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Real-time validation during payment collection
              </p>
            </div>

            {/* Simulated Input Field with Max Limit Badge */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-slate-700">Discount Amount (₹)</span>
                <span className="text-[10.5px] font-bold text-primary bg-orange-50 border border-orange-200 px-2 py-0.2 rounded-md font-mono">
                  Max Cap: ₹3,600
                </span>
              </div>
              <div className="bg-rose-50/50 border border-rose-300 rounded-xl px-3 py-2 flex items-center justify-between text-xs">
                <span className="font-bold text-rose-800 font-mono text-sm">₹ 4,000.00</span>
                <FaExclamationTriangle className="text-rose-600" />
              </div>
            </div>

            {/* Error Guardrail Notification */}
            <div className="bg-rose-50 border border-rose-200 rounded-2xl p-3.5 space-y-1.5 text-xs text-rose-900">
              <div className="flex items-center gap-1.5 font-bold text-rose-800 text-xs">
                <FaBan className="text-rose-600" /> Discount Exceeds Profit Margin!
              </div>
              <p className="text-[11px] text-rose-700 leading-relaxed">
                Discount cannot exceed the profit margin of <strong>₹3,600.00</strong> (Selling Price − Purchase Price). This input would cause a loss of ₹400 on this job card.
              </p>
            </div>

            {/* Approved Discount Calculation (Looped) */}
            <div className="bg-[#FAF8F6] border border-slate-200 rounded-2xl p-3 space-y-2 text-xs">
              {paymentBreakdownRows.map((row, idx) => (
                <div
                  key={idx}
                  className={`flex justify-between ${
                    row.isProfit
                      ? "border-t border-slate-200/80 pt-2 font-bold text-emerald-800"
                      : "text-slate-600"
                  }`}
                >
                  <span>{row.label}</span>
                  <span
                    className={`font-mono ${
                      row.isProfit ? "font-bold text-emerald-800" : "font-bold text-slate-900"
                    }`}
                  >
                    {row.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Success Note */}
            <div className="text-[10.5px] text-emerald-700 font-medium flex items-center gap-1.5">
              <FaCheckCircle className="text-emerald-500" /> Automatic margin safeguards applied across all billing modes
            </div>
          </div>
        </div>

        {/* 4 Value Pillars (Looped) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {discountPillars.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 rounded-2xl p-6 space-y-2.5 shadow-2xs hover:border-primary/30 transition-colors flex flex-col justify-between"
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

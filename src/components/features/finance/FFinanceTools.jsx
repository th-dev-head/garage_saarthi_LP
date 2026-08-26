import React from "react";
import { FaFileInvoice, FaCoins, FaHandHoldingUsd, FaFileContract } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const fFinanceTools = [
  {
    icon: FaCoins,
    title: "Cashbook & Bank Book Sync",
    desc: "Separate cash register tracking from bank settlements to prevent discrepancies during audit."
  },
  {
    icon: FaHandHoldingUsd,
    title: "Vendor Credit & Outstanding Dues",
    desc: "Track pending balances owed to parts distributors and set due payment alerts."
  },
  {
    icon: FaFileInvoice,
    title: "Customer Credit (Udhar) Records",
    desc: "Log partial payments and customer pending balances with WhatsApp reminder links."
  },
  {
    icon: FaFileContract,
    title: "CA Export & GST Audit Reports",
    desc: "Export Excel & PDF reports formatted for GSTR-1, GSTR-3B, and Income Tax filing."
  }
];

export default function FFinanceTools() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side Features */}
        <div>
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Financial Modules
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
            Built for Real Workshop <GradientUnderline>Accounting Needs</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
            Simple accounting designed specifically for automotive garages without requiring complex Tally expertise.
          </p>

          <div className="space-y-6">
            {fFinanceTools.map((tool, idx) => {
              const Icon = tool.icon;
              return (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-primary shadow-xs">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">{tool.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{tool.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side Visual Financial Ledger Card Mockup */}
        <div className="bg-slate-900 rounded-3xl p-6 shadow-xl border border-slate-800 text-white space-y-4 max-w-md mx-auto w-full">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                P&L
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Daily Financial Ledger</h4>
                <p className="text-[10px] text-slate-400">July 2026 Summary</p>
              </div>
            </div>
            <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded font-semibold">Audited</span>
          </div>

          <div className="bg-slate-800/90 rounded-2xl p-4 space-y-3 text-xs border border-slate-700/60 font-sans">
            <div className="flex justify-between items-center pb-2 border-b border-slate-700">
              <span className="text-slate-300">Total Billing Revenue</span>
              <span className="font-bold text-emerald-400">₹1,24,500.00</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-slate-700">
              <span className="text-slate-300">Spare Parts Expense</span>
              <span className="font-bold text-rose-400">₹52,000.00</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-slate-700">
              <span className="text-slate-300">Mechanic Commissions</span>
              <span className="font-bold text-rose-400">₹14,500.00</span>
            </div>
            <div className="flex justify-between items-center pt-1">
              <span className="font-bold text-white">Net Workshop Profit</span>
              <span className="font-bold text-amber-400 text-sm">₹58,000.00 (46.5%)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

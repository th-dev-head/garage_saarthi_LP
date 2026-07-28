import React from "react";
import { FaLandmark, FaTools, FaHandHoldingUsd, FaCoins } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const lLoanTools = [
  {
    icon: FaLandmark,
    title: "Bank Business & Working Capital Loans",
    desc: "Track long-term business expansion loans and working capital credit lines."
  },
  {
    icon: FaTools,
    title: "Workshop Equipment Financing",
    desc: "Manage machinery loans for hydraulic car lifts, wheel aligners, paint booths, and OBD scanners."
  },
  {
    icon: FaHandHoldingUsd,
    title: "Partner & Private Debts",
    desc: "Log informal borrowings from business partners or private lenders with custom interest terms."
  },
  {
    icon: FaCoins,
    title: "Emergency Cash Reserve Planning",
    desc: "Connect upcoming EMI obligations with daily cash counter reserves to ensure smooth payouts."
  }
];

export default function LLoanTools() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side Features */}
        <div>
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Loan Categories
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
            Manage Every Type of <GradientUnderline>Workshop Debt</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
            Keep full visibility over equipment loans, business expansion credit, and private borrowings.
          </p>

          <div className="space-y-6">
            {lLoanTools.map((tool, idx) => {
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

        {/* Right Side Visual Loan Schedule Card Mockup */}
        <div className="bg-slate-900 rounded-3xl p-6 shadow-xl border border-slate-800 text-white space-y-4 max-w-md mx-auto w-full">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs">
                EMI
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Active Loan Tracker</h4>
                <p className="text-[10px] text-slate-400">August 2026 Installments</p>
              </div>
            </div>
            <span className="text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded font-semibold">2 Active Loans</span>
          </div>

          <div className="bg-slate-800/90 rounded-2xl p-4 space-y-3 text-xs border border-slate-700/60 font-sans">
            <div className="flex justify-between items-center pb-2 border-b border-slate-700">
              <div>
                <p className="font-bold text-white">Hydraulic Lift Equipment Loan</p>
                <p className="text-[10px] text-slate-400">Due: 5th Aug • HDFC Bank</p>
              </div>
              <span className="font-bold text-amber-400">₹14,200/mo</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-slate-700">
              <div>
                <p className="font-bold text-white">Workshop Expansion Loan</p>
                <p className="text-[10px] text-slate-400">Due: 10th Aug • ICICI Bank</p>
              </div>
              <span className="font-bold text-amber-400">₹22,500/mo</span>
            </div>
            <div className="flex justify-between items-center pt-1">
              <span className="font-bold text-white">Total Monthly EMI Liability</span>
              <span className="font-bold text-emerald-400 text-sm">₹36,700.00</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

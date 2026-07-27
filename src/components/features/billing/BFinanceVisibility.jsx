import React from "react";
import { FaCoins } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function BFinanceVisibility() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left card representation */}
        <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-3xl space-y-4 shadow-sm order-2 md:order-1">
          <div className="flex items-center gap-2 border-b border-slate-200 pb-4">
            <FaCoins className="text-primary w-5 h-5" />
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Collections Tracker</h3>
          </div>
          <div className="space-y-3.5 text-xs">
            <div className="flex justify-between items-center text-slate-600 font-medium">
              <span>Cash Register</span>
              <span className="font-bold text-slate-950">₹14,500.00</span>
            </div>
            <div className="flex justify-between items-center text-slate-600 font-medium">
              <span>UPI Payments</span>
              <span className="font-bold text-slate-950">₹32,200.00</span>
            </div>
            <div className="flex justify-between items-center text-slate-600 font-medium">
              <span>Unpaid Balance (Dues)</span>
              <span className="font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded">₹8,400.00</span>
            </div>
          </div>
        </div>

        {/* Right text */}
        <div className="order-1 md:order-2">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Collections Tracker
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
            Track Payments, Dues and Cash <GradientUnderline>Register Summaries</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
            Invoicing is only the first step. Track cash, UPI, card, and digital collections under specific registers to avoid cash mismatch.
          </p>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            For vehicles released before payment clearance, log outstanding balances as pending dues under the customer's permanent database profile. This ensures outstanding amounts are clearly highlighted during their next workshop check-in.
          </p>
        </div>
      </div>
    </section>
  );
}

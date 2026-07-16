import React from "react";
import { FaCoins } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function GBFinanceVisibility() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center border-b border-slate-200/60">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left card representation */}
        <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-3xl space-y-4 order-2 lg:order-1">
          <div className="flex items-center gap-2 border-b border-slate-200 pb-4">
            <FaCoins className="text-primary w-5 h-5" />
            <h3 className="text-sm font-bold text-text-dark uppercase tracking-wide">Collections tracker</h3>
          </div>
          <div className="space-y-3.5 text-xs">
            <div className="flex justify-between items-center text-slate-500 font-medium">
              <span>Cash Register</span>
              <span className="font-bold text-slate-700">₹14,500.00</span>
            </div>
            <div className="flex justify-between items-center text-slate-500 font-medium">
              <span>UPI Payments</span>
              <span className="font-bold text-slate-700">₹32,200.00</span>
            </div>
            <div className="flex justify-between items-center text-slate-500 font-medium">
              <span>Unpaid Balance (Dues)</span>
              <span className="font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded">₹8,400.00</span>
            </div>
          </div>
        </div>

        {/* Right text */}
        <div className="order-1 lg:order-2">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Collections Tracker
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-text-dark mt-4 mb-6 leading-tight">
            Track Payments, Dues and Cash{" "}
            <GradientUnderline>Register Summaries</GradientUnderline>
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


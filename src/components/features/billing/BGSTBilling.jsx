import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function BGSTBilling() {
  const points = [
    "Auto-split tax parameters (SGST, CGST, and IGST) on print sheets.",
    "Map standard HSN/SAC code rates to spare parts and service items.",
    "B2B & B2C billing with customer GSTIN and PAN verification on tax invoices.",
    "Custom invoice series prefix and running billing number configurations."
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left text */}
        <div>
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Tax Compliance
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
            GST-Compliant Invoicing <GradientUnderline>Built for Indian Regulations</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
            Tax compliance shouldn't add manual complexity to your busy garage. GarageSaarthi automatically tracks and applies GST taxes correctly with full B2B customer GSTIN and PAN support.
          </p>
          <div className="space-y-4 mb-8">
            {points.map((point, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <FaCheckCircle className="text-green-500 w-4 h-4 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-600 leading-relaxed">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right UI snippet */}
        <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-3xl shadow-sm space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Tax Summary View — Live</span>
            <span className="text-[9px] font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full">B2B Verified</span>
          </div>

          <div className="bg-white border border-slate-100 p-4 rounded-xl text-[11px] space-y-1 text-slate-600 font-mono">
            <div className="flex justify-between">
              <span>Customer GSTIN:</span>
              <strong className="text-slate-800">24AAAPC1234F1Z5</strong>
            </div>
            <div className="flex justify-between">
              <span>Customer PAN:</span>
              <strong className="text-slate-800">AAAPC1234F</strong>
            </div>
          </div>

          <div className="bg-white border border-slate-100 p-6 rounded-2xl space-y-3 text-xs">
            <div className="flex justify-between text-slate-600 font-medium">
              <span>Taxable Value (Labor + Spares)</span>
              <span className="font-bold text-slate-950">₹3,650.00</span>
            </div>
            <div className="flex justify-between text-slate-600 font-medium">
              <span>CGST (9%)</span>
              <span className="font-bold text-slate-950">₹328.50</span>
            </div>
            <div className="flex justify-between text-slate-600 font-medium">
              <span>SGST (9%)</span>
              <span className="font-bold text-slate-950">₹328.50</span>
            </div>
            <div className="flex justify-between border-t border-slate-100 pt-3 text-sm font-bold text-slate-950">
              <span>Grand Total</span>
              <span className="text-primary">₹4,307.00</span>
            </div>
          </div>
          <div className="text-center text-[11px] text-slate-400">
            Generate compliant B2B tax invoices with seamless Input Tax Credit (ITC).
          </div>
        </div>
      </div>
    </section>
  );
}

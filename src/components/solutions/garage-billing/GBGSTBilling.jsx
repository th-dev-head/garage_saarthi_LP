import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function GBGSTBilling() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left text */}
        <div>
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Tax Compliance
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-text-dark mt-4 mb-6 leading-tight">
            GST-Compliant Invoicing{" "}
            <GradientUnderline>Built for Indian Regulations</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
            Tax compliance shouldn't add manual complexity to your busy garage. GarageSaarthi automatically tracks and applies GST taxes correctly.
          </p>
          <div className="space-y-3 text-xs text-slate-600 mb-8">
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500 w-4 h-4 flex-shrink-0" />
              <span>Auto-split tax parameters (SGST, CGST, and IGST) on print sheets.</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500 w-4 h-4 flex-shrink-0" />
              <span>Map standard HSN code rates to spare parts and service items.</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500 w-4 h-4 flex-shrink-0" />
              <span>Custom invoice series prefix and running billing number configurations.</span>
            </div>
          </div>
        </div>

        {/* Right UI snippet */}
        <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-3xl space-y-4">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Tax summary view</span>
          <div className="bg-white border border-slate-100 p-4 rounded-xl space-y-2 text-xs">
            <div className="flex justify-between text-slate-500">
              <span>Taxable Value (Labour + Spares)</span>
              <span className="font-bold text-slate-700">₹3,650.00</span>
            </div>
            <div className="flex justify-between text-slate-500">
              <span>CGST (9%)</span>
              <span className="font-bold text-slate-700">₹328.50</span>
            </div>
            <div className="flex justify-between text-slate-500">
              <span>SGST (9%)</span>
              <span className="font-bold text-slate-700">₹328.50</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


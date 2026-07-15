import React from "react";
import { FaQuestionCircle } from "react-icons/fa";

export default function GBSelectionCriteria() {
  const points = [
    { title: "GST Compliance", desc: "Software must split tax rates (CGST/SGST/IGST) and HSN codes automatically." },
    { title: "Counter Sales Billing", desc: "Select software that handles direct spare parts sales without opening full job cards." },
    { title: "Job Card Connection", desc: "Avoid stand-alone counters. Billing should directly pull parts and labor entries from job cards." },
    { title: "CA Accounting Access", desc: "Verify you can invite your accountant to download sales sheets without exporting files manually." },
    { title: "Split Payment Management", desc: "Ensure the system logs payments through multiple modes like cash, card, and digital UPI." }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center border-b border-slate-200/60">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Buying Guide
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            How to Choose the Best Garage Billing Software
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Invoicing runs your business. Evaluate and select a billing system based on these five essential automotive billing parameters:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((p, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 shadow-sm">
              <h3 className="text-sm font-bold text-text-dark mb-2 flex items-center gap-2">
                <FaQuestionCircle className="text-primary w-4 h-4" />
                {p.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import GradientUnderline from "../common/GradientUnderline";

export default function GBWorkflow() {
  const steps = [
    { num: "01", title: "Open Job Card", desc: "Log vehicle attributes, fuel levels, symptoms, and estimated delivery times." },
    { num: "02", title: "Add Parts & Spares", desc: "Issue materials directly from inventory, adjusting stock levels in real-time." },
    { num: "03", title: "Log Labour Tasks", desc: "Add services rendered, repair priorities, and mechanic logs to the card." },
    { num: "04", title: "Generate Invoice", desc: "Tap to compile parts, taxes, and service charges directly into a GST invoice." }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center border-b border-slate-200/60">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Invoicing Flow
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            How Job Cards Convert to{" "}
            <GradientUnderline>Invoices Automatically</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Eliminate double data entry. See how GarageSaarthi automates the billing process from arrival to print-out:
          </p>
        </div>

        {/* Workflow Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <div key={idx} className="relative bg-white border border-slate-200/80 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold text-primary bg-[#EFE9E7] px-2.5 py-0.5 rounded">Step {s.num}</span>
                <span className="text-xl font-black text-slate-100">{s.num}</span>
              </div>
              <h3 className="text-sm font-bold text-text-dark mb-2">{s.title}</h3>
              <p className="text-xs text-slate-500 leading-normal">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

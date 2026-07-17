import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

export default function GACConnected() {
  const steps = [
    { title: "Customer & Vehicle", icon: "🚗", desc: "Add customer details & register vehicles." },
    { title: "Job Card Created", icon: "📋", desc: "Record complaints & list repair requirements." },
    { title: "Work Completed", icon: "🔧", desc: "Assign spares from stock & record mechanic hours." },
    { title: "GST Invoice Issued", icon: "📄", desc: "Populate tax bills and invoice series automatically." },
    { title: "Payment Recorded", icon: "💰", desc: "Record UPI/Cash mode and calculate margins." },
    { title: "Finance & Reports", icon: "📊", desc: "Check profit graphs, collections logs, and CA parameters." }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full space-y-12 text-center">
        <div className="space-y-4">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Ecosystem Workflow
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Connect Garage Finance with <GradientUnderline>Daily Workshop Operations</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
            Instead of running a separate accounting tool that doesn't understand mechanic work, GarageSaarthi connects financial parameters with daily workshop operations. Every transaction updates your dashboard.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 pt-4">
          {steps.map((s, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200/50 rounded-3xl p-5 shadow-sm text-center space-y-3 relative hover:shadow-md transition-shadow duration-200">
              <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center text-lg mx-auto shadow-sm">
                {s.icon}
              </div>
              <h3 className="text-xs md:text-sm font-bold text-slate-800 leading-snug">{s.title}</h3>
              <p className="text-[10px] text-slate-500 leading-normal">{s.desc}</p>
              {idx < 5 && (
                <div className="hidden lg:block absolute top-[30%] -right-4 translate-x-1/2 text-slate-300 text-lg font-bold pointer-events-none">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

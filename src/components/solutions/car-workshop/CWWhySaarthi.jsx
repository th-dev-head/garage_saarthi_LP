import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

export default function CWWhySaarthi() {
  const points = [
    { title: "Designed for Workshops", desc: "Built specifically around automobile repair, spare parts management, washing jobs, and mechanic commission logs." },
    { title: "Connected Job Cards Flow", desc: "Job card details populate spare parts usage, labor costs, and tax bills automatically." },
    { title: "Automatic WhatsApp Reminders", desc: "Send pre-populated service due alerts to customers with a single click." },
    { title: "Warehouse Inventory Control", desc: "Monitor low-stock items, register counter sales, and track spare parts consumption online." },
    { title: "Integrated Staff & Payroll", desc: "Manage check-ins, leave balance cards, basic wages, and payroll outputs centrally." },
    { title: "7-Day Free Trial", desc: "Log in with full access to job cards, billing, stock, and reports setup with no commitments." }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Differentiators
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Why Car Workshop Owners <GradientUnderline>Use GarageSaarthi</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Discover why multi-brand workshops across India choose our software to organize daily jobs, billing, and staff tracking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((p, idx) => (
            <div key={idx} className="bg-white border border-slate-200/50 rounded-3xl p-6 shadow-sm space-y-3">
              <h3 className="text-base font-bold text-text-dark flex items-center gap-2">
                <span className="text-primary">✓</span>
                <span>{p.title}</span>
              </h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

export default function GRAWhySaarthi() {
  const differentiators = [
    { title: "Designed for Auto Shops", desc: "Formulated specifically to manage service and counter sales data." },
    { title: "Consolidated Operations", desc: "No manual sync step. Invoices and stock logs auto-compile." },
    { title: "Centralized Dashboard", desc: "Access sales, due alerts, and collections centrally." },
    { title: "Multi-Branch Logging", desc: "Compare operations across branches under one login." },
    { title: "Role Permission Limits", desc: "Keep critical ledger access hidden from staff accounts." }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Differentiators
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Why Use GarageSaarthi for <GradientUnderline>Garage Reports and Analytics</GradientUnderline>?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {differentiators.map((d, idx) => (
            <div key={idx} className="bg-white border border-slate-200/50 rounded-2xl p-6 shadow-sm">
              <h3 className="text-sm font-bold text-text-dark mb-2">{d.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
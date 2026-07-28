import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

const fWhyPillars = [
  { title: "💵 100% Cash Flow Control", titleClass: "text-primary font-bold block mb-1", desc: "Track exact cash register balances and bank UPI settlements daily" },
  { title: "📑 Vendor Balance Ledger", titleClass: "text-orange-600 font-bold block mb-1", desc: "Manage credit balances with spare parts distributors & suppliers" },
  { title: "📊 Automated P&L Reports", titleClass: "text-emerald-600 font-bold block mb-1", desc: "View net profit margins after labor costs and spare parts expenses" },
  { title: "⚖️ GST & Non-GST Summary", titleClass: "text-amber-600 font-bold block mb-1", desc: "Export clean financial summaries for CA audit & tax filing" }
];

export default function FDefinition() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
              Financial Control System
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              Eliminate Financial Leakage with <GradientUnderline>Garage Finance Management</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
              <strong>Garage Finance Management Software</strong> provides workshop owners complete clarity over daily income, counter sales, spare parts purchase expenses, and mechanic commission payouts.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              No more manual ledger books or missing cash records. Every payment logged against a job card or counter sale is automatically reconciled into your daily cash and bank books.
            </p>
          </div>

          <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-3">
              Why Finance Management is Critical for Garages:
            </h3>
            <div className="grid grid-cols-2 gap-4 text-xs md:text-sm">
              {fWhyPillars.map((item, idx) => (
                <div key={idx} className="p-3 bg-white rounded-xl border border-slate-200">
                  <span className={item.titleClass}>{item.title}</span>
                  <span className="text-slate-600">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
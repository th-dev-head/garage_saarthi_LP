import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

const lWhyPillars = [
  { title: "📅 Zero Missed EMI Bounces", titleClass: "text-primary font-bold block mb-1", desc: "Automated EMI reminder software sending alerts 3 days before bank auto-debit dates" },
  { title: "🏦 Multi-Bank Loan Ledger", titleClass: "text-orange-600 font-bold block mb-1", desc: "Maintain loan register software for equipment financing, bank loans, and partner borrowings" },
  { title: "💡 Interest & Principal Split", titleClass: "text-emerald-600 font-bold block mb-1", desc: "Auto-calculate interest vs principal balance reduction for business loan tracker audits" },
  { title: "📉 Cash Flow & Debt Protection", titleClass: "text-amber-600 font-bold block mb-1", desc: "Complete debt management software ensuring sufficient bank reserves for installment management" }
];

export default function LDefinition() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
              Debt & Business EMI Management
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              Smarter <GradientUnderline>Garage Loan Management Software</GradientUnderline> & EMI Tracker
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
              <strong>GarageSaarthi Business Loan Management Software</strong> is a powerful <strong>garage loan EMI tracker</strong> and <strong>workshop loan tracker</strong> built specifically for auto repair workshops, detailing studios, and bike garages.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Track business finance tracker metrics, manage business loans, and monitor installment tracker schedules easily with our loan management app.
            </p>
          </div>

          <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-3">
              Why Loan Tracking is Essential for Garages:
            </h3>
            <div className="grid grid-cols-2 gap-4 text-xs md:text-sm">
              {lWhyPillars.map((item, idx) => (
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

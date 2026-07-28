import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

const caWhyPillars = [
  { title: "🔐 100% Read-Only Security", titleClass: "text-primary font-bold block mb-1", desc: "Accountants can view and download financial reports without editing garage settings" },
  { title: "📄 Zero Paper Bill Handover", titleClass: "text-orange-600 font-bold block mb-1", desc: "Eliminate monthly physical bill delivery or endless WhatsApp bill photo sharing" },
  { title: "📊 Instant GSTR Tax Filing", titleClass: "text-emerald-600 font-bold block mb-1", desc: "CA logs in anytime to download GSTR-1, GSTR-3B, and sales summary spreadsheets" },
  { title: "🧾 Complete Expense Auditing", titleClass: "text-amber-600 font-bold block mb-1", desc: "Provide your tax advisor full access to vendor invoices, purchase entries, and profit ledgers" }
];

export default function CADefinition() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
              Accountant Access Feature
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              Seamless Collaboration with Your <GradientUnderline>Chartered Accountant</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
              <strong>Garage CA Access Software</strong> provides a dedicated, secure login portal for your accountant, tax consultant, or auditor to access workshop financial data independently.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              No more searching through physical bill binders or emailing Excel files at the end of every month. Your CA gets instant, read-only visibility into sales, purchases, and GST returns.
            </p>
          </div>

          <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-3">
              Why CA Access Simplifies Workshop Tax Filing:
            </h3>
            <div className="grid grid-cols-2 gap-4 text-xs md:text-sm">
              {caWhyPillars.map((item, idx) => (
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

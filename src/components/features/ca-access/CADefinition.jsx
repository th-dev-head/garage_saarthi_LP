import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

const caWhyPillars = [
  { title: "🔐 100% Read-Only Security", titleClass: "text-primary font-bold block mb-1", desc: "Accountants view read only accountant access data without editing master garage settings" },
  { title: "📄 Zero Paper Bill Handover", titleClass: "text-orange-600 font-bold block mb-1", desc: "Export garage reports for CA auditing instead of emailing photo scans of paper bills" },
  { title: "📊 Instant GST Return Reports", titleClass: "text-emerald-600 font-bold block mb-1", desc: "Download GSTR-1, GSTR-3B, and garage GST return reports ready for government portal upload" },
  { title: "🧾 Workshop Bookkeeping & Ledger", titleClass: "text-amber-600 font-bold block mb-1", desc: "Complete workshop bookkeeping software ledgers for vendor invoices and expense reports" }
];

export default function CADefinition() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
              Accountant Access & Tax Management
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              Smarter <GradientUnderline>Garage Accounting Management</GradientUnderline> & CA Collaboration
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
              <strong>Garage CA Access Software</strong> provides a dedicated <strong>accountant portal for garage</strong> businesses, giving your tax consultant read-only login access to workshop financial management software.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Simplify monthly GST tax management, garage profit and loss reports, and garage balance sheet software metrics without manual paper bill sorting.
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

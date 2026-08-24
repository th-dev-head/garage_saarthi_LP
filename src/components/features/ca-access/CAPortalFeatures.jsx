import React from "react";
import { FaUserLock, FaFileInvoiceDollar, FaChartPie, FaCheckDouble } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const caPortalFeatures = [
  {
    icon: FaUserLock,
    title: "Granular Permission Control",
    desc: "Restrict accountant view strictly to financial ledgers, preventing access to customer contacts or technician settings."
  },
  {
    icon: FaFileInvoiceDollar,
    title: "GST B2B & B2C Breakdown",
    desc: "Separate B2B GST invoices (with customer GSTIN) from B2C retail counter bills automatically."
  },
  {
    icon: FaChartPie,
    title: "Input Tax Credit (ITC) Reconciliation",
    desc: "Match spare parts purchase GST invoices against supplier entries to claim full Input Tax Credit."
  },
  {
    icon: FaCheckDouble,
    title: "Multi-User Accounting Access",
    desc: "Add multiple financial users—such as internal bookkeepers, external auditors, and senior CAs."
  }
];

export default function CAPortalFeatures() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side Features */}
        <div>
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Accountant Portal Tools
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
            Designed Specifically for <GradientUnderline>Chartered Accountants</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
            Give your auditor the exact financial reports and export formats needed for fast, error-free tax filing.
          </p>

          <div className="space-y-6">
            {caPortalFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-primary shadow-xs">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">{feat.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side Visual CA Portal Permissions Card Mockup */}
        <div className="bg-slate-900 rounded-3xl p-6 shadow-xl border border-slate-800 text-white space-y-4 max-w-md mx-auto w-full">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                CA
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Accountant Role & Permissions</h4>
                <p className="text-[10px] text-slate-400">CA Portal • Read-Only Active</p>
              </div>
            </div>
            <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded font-semibold">Verified</span>
          </div>

          <div className="bg-slate-800/90 rounded-2xl p-4 space-y-3 text-xs border border-slate-700/60 font-sans">
            <div className="flex justify-between items-center pb-2 border-b border-slate-700">
              <span className="text-slate-300">Sales & Revenue Ledger</span>
              <span className="font-bold text-emerald-400">View & Export</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-slate-700">
              <span className="text-slate-300">GSTR-1 & 3B Spreadsheets</span>
              <span className="font-bold text-emerald-400">View & Export</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-slate-700">
              <span className="text-slate-300">Vendor Purchase Bills</span>
              <span className="font-bold text-emerald-400">View & Export</span>
            </div>
            <div className="flex justify-between items-center pt-1">
              <span className="text-slate-300">Master Garage Settings</span>
              <span className="font-bold text-rose-400 text-xs">Restricted (No Access)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { FaUserShield, FaLaptopHouse, FaFileCsv, FaCalculator, FaBook, FaHistory, FaReceipt, FaBalanceScale, FaUsers } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const caCoreCapabilities = [
  {
    icon: FaUserShield,
    title: "Read-Only Accountant Access",
    desc: "Grant your CA read only accountant access to garage reports and financial ledgers without admin edit rights."
  },
  {
    icon: FaLaptopHouse,
    title: "Accountant Dashboard for Garage",
    desc: "A dedicated accountant dashboard for garage software displaying sales, purchases, and tax breakdowns."
  },
  {
    icon: FaFileCsv,
    title: "GST Report & Return Exports",
    desc: "Export GSTR-1, GSTR-3B, and garage GST return reports formatted for direct CA audit and tax filing."
  },
  {
    icon: FaCalculator,
    title: "Garage Profit & Loss Reports",
    desc: "Generate automated garage profit and loss reports and workshop financial statements in real time."
  },
  {
    icon: FaBook,
    title: "Garage Bookkeeping & Expense Ledger",
    desc: "Powerful garage bookkeeping software and garage expense reports software for vendor and shop bills."
  },
  {
    icon: FaBalanceScale,
    title: "Garage Balance Sheet Software",
    desc: "Maintain precise workshop bookkeeping software ledgers and garage balance sheet software metrics."
  },
  {
    icon: FaUsers,
    title: "Multi-User Accounting Access",
    desc: "Multi user accounting access for internal bookkeepers, workshop accountants, and external CAs."
  },
  {
    icon: FaReceipt,
    title: "Accountant Friendly Garage Portal",
    desc: "Accountant friendly garage software allowing instant export of garage reports for CA auditing."
  },
  {
    icon: FaHistory,
    title: "Audit Trail & Tax Management",
    desc: "Complete workshop financial management software with 100% transparent audit trail logs."
  }
];

export default function CACoreCapabilities() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block">
            Core Capabilities
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
            Complete Toolkit for <GradientUnderline>Garage Accounting Management</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Everything your accountant needs for workshop accounting, GST report software, and financial statement verification.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caCoreCapabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/80 p-6 rounded-3xl hover:border-primary/40 hover:shadow-lg transition-all duration-300 space-y-3"
              >
                <div className="w-10 h-10 rounded-2xl bg-orange-100/60 text-primary flex items-center justify-center font-bold">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">{cap.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{cap.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

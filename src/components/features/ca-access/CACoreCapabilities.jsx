import React from "react";
import { FaUserShield, FaLaptopHouse, FaFileCsv, FaCalculator, FaBook, FaHistory } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const caCoreCapabilities = [
  {
    icon: FaUserShield,
    title: "Read-Only CA Credentials",
    desc: "Create dedicated login accounts for your Chartered Accountant with view-only permissions."
  },
  {
    icon: FaLaptopHouse,
    title: "Dedicated Accountant Dashboard",
    desc: "Clean dashboard showcasing sales registers, purchase invoices, and tax summaries."
  },
  {
    icon: FaFileCsv,
    title: "1-Click GSTR-1 & GSTR-3B Export",
    desc: "Export GST-compliant JSON, Excel, and CSV files pre-formatted for government GST portal filing."
  },
  {
    icon: FaCalculator,
    title: "Automated Profit & Loss Statement",
    desc: "Instant P&L ledgers splitting spare parts cost, labor margin, and operating expenses."
  },
  {
    icon: FaBook,
    title: "Vendor Invoice & Expense Ledger",
    desc: "Complete accounting books for distributor purchases, shop rent, electricity, and mechanic wages."
  },
  {
    icon: FaHistory,
    title: "Financial Audit Trail Logs",
    desc: "Track every payment modification, discount entry, and invoice cancellation for 100% audit integrity."
  }
];

export default function CACoreCapabilities() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block">
            Core Capabilities
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            Complete Toolkit for <GradientUnderline>Garage Accounting & Tax Audits</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Everything your accountant needs to file monthly GST returns and verify financial statements.
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

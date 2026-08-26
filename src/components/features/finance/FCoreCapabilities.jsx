import React from "react";
import { FaWallet, FaReceipt, FaUsers, FaChartLine, FaPercentage, FaFileInvoiceDollar } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const fCoreCapabilities = [
  {
    icon: FaWallet,
    title: "Daily Cash & UPI Settlement",
    desc: "Reconcile daily cash counter collections, Paytm/Google Pay UPI payments, and card swipe settlements."
  },
  {
    icon: FaReceipt,
    title: "Workshop Expense Manager",
    desc: "Record tea, electricity, rent, tool purchases, and miscellaneous operational costs easily."
  },
  {
    icon: FaUsers,
    title: "Supplier & Vendor Credit Accounts",
    desc: "Maintain detailed ledger accounts for spare parts distributors with purchase invoice logs."
  },
  {
    icon: FaChartLine,
    title: "Real-Time Profit & Loss (P&L)",
    desc: "View gross margins and net profitability broken down by labor, parts margin, and overheads."
  },
  {
    icon: FaPercentage,
    title: "GST Tax Calculation Reports",
    desc: "Separate CGST, SGST, and IGST tax collected for clean filing without manual accounting errors."
  },
  {
    icon: FaFileInvoiceDollar,
    title: "Mechanic Commission Payouts",
    desc: "Auto-calculate labor share and incentive commissions for technicians based on completed job cards."
  }
];

export default function FCoreCapabilities() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block">
            Core Capabilities
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
            Complete Financial Control for <GradientUnderline>Auto Workshops</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Everything your garage needs to track revenue, manage vendor payables, and maximize net profits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fCoreCapabilities.map((cap, idx) => {
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

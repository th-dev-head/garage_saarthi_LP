import React from "react";
import GradientUnderline from "../../common/GradientUnderline";
import { FaTruckLoading, FaFileInvoice, FaMoneyCheckAlt, FaFilePdf } from "react-icons/fa";

export default function VMDefinition() {
  const highlights = [
    {
      icon: FaTruckLoading,
      title: "Supplier KYC & Directory",
      description: "Store supplier phone numbers, GSTIN, bank details, credit terms, and item catalogs in one searchable database.",
    },
    {
      icon: FaFileInvoice,
      title: "Purchase Bill & Tax Inward",
      description: "Log spare parts purchase invoices, tax breakdowns (CGST/SGST/IGST), and stock additions with zero discrepancies.",
    },
    {
      icon: FaMoneyCheckAlt,
      title: "Flexible Payment Logging",
      description: "Record full or partial vendor payments made via Cash, Bank Transfer (NEFT/RTGS), UPI, or Cheque linked to workshop accounts.",
    },
    {
      icon: FaFilePdf,
      title: "Audit-Ready Statement Export",
      description: "Generate and export vendor account statements to PDF or Excel with running balance calculations in 1 click.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block">
              Procurement &amp; Payables Governance
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
              What is <GradientUnderline>Vendor Management</GradientUnderline> in GarageSaarthi?
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Auto workshops purchase parts daily from multiple local distributors, lubricant dealers, and battery suppliers. Tracking credit limits, unpaid bills, and disputed returns across hand-written diaries leads to overpayments and supplier friction.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              <strong>GarageSaarthi Vendor &amp; Supplier Management</strong> unifies your entire procurement ledger. Easily inward purchase bills, update inventory stocks automatically, record multi-mode supplier payments, and reconcile monthly statements without accounting headaches.
            </p>
          </div>

          {/* Right Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 hover:border-primary/40 transition-all shadow-sm hover:shadow-md"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-primary flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-text-dark mb-1.5">{item.title}</h3>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

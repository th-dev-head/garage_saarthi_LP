import React from "react";
import GradientUnderline from "../../common/GradientUnderline";
import {
  FaAddressBook,
  FaFileInvoiceDollar,
  FaHandHoldingUsd,
  FaCalculator,
  FaFileExport,
  FaUndoAlt,
} from "react-icons/fa";

export default function VMCoreCapabilities() {
  const capabilities = [
    {
      icon: FaAddressBook,
      title: "Supplier Directory & Bank Details",
      description: "Manage complete profiles for all OEM, aftermarket, oil, and battery suppliers including GSTIN, credit period, and bank account info.",
    },
    {
      icon: FaFileInvoiceDollar,
      title: "Purchase Bill & Stock Inward",
      description: "Enter purchase invoices with line-item discounts, GST tax slabs, batch numbers, and automatic stock level updates.",
    },
    {
      icon: FaHandHoldingUsd,
      title: "Multi-Mode Payment Recording",
      description: "Log payments made via Cash, Bank Transfer, UPI, or Cheque and link them directly to workshop expense accounts.",
    },
    {
      icon: FaCalculator,
      title: "Real-Time Running Balance Ledger",
      description: "View date-wise debit and credit entries with an automatic running balance calculation for each vendor.",
    },
    {
      icon: FaFileExport,
      title: "1-Click PDF & Excel Statements",
      description: "Filter transactions by date range and export comprehensive supplier statement reports to share on WhatsApp or print.",
    },
    {
      icon: FaUndoAlt,
      title: "Purchase Returns & Debit Notes",
      description: "Record damaged or wrong part returns to vendors and automatically deduct amounts from your outstanding balance.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Core Procurement Capabilities
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-4 leading-tight">
            Complete <GradientUnderline>Supplier &amp; Payables Control</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Everything your auto workshop needs to manage spare parts vendors, purchase bills, and payment settlements transparently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 hover:border-primary/40 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-primary flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-text-dark mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

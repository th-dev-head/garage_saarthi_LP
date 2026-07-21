import React from "react";
import Link from "next/link";
import { FaFileInvoiceDollar, FaBoxes, FaTag, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function WSIBillingInventory() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Financial & Stock Integration
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Manage GST Billing and Spare Parts <GradientUnderline>Inventory</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Eliminate stock leakage and invoice delays by linking spare parts checkout directly to digital job cards.
          </p>
        </div>

        {/* 3 Grid Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-6 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary text-base">
              <FaBoxes />
            </div>
            <h3 className="text-sm font-bold text-slate-900">Dynamic Stock Deductions</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              When spare parts are checked out for a vehicle job card, inventory levels deduct automatically in real time.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-6 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary text-base">
              <FaFileInvoiceDollar />
            </div>
            <h3 className="text-sm font-bold text-slate-900">Custom GST Invoice Series</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Generate GST-compliant bills with HSN/SAC tax breakdowns, labor rates, and custom numbering rules for your workshop.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-6 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary text-base">
              <FaTag />
            </div>
            <h3 className="text-sm font-bold text-slate-900">Counter Retail Sales</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Conduct quick retail counter sales for spare parts, oil bottles, and accessories without needing to open a full job card.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <Link
            href="/features/inventory"
            className="inline-flex items-center gap-2 font-bold text-primary hover:text-primary-hover text-sm transition-colors"
          >
            Explore Inventory & Billing <FaArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

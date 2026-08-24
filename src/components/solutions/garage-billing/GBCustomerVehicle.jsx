import React from "react";
import Link from "next/link";
import { FaHistory } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function GBCustomerVehicle() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left text */}
        <div>
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Linked History
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-text-dark mt-4 mb-6 leading-tight">
            Connect Invoices and Billing with{" "}
            <GradientUnderline>Vehicle Service History</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
            Unlike stand-alone billing counters, GarageSaarthi anchors invoices to customer and vehicle registry profiles.
          </p>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
            When a car or motorcycle returns to the workshop, typing their registration number instantly opens historical invoices, spare parts replaced, amounts paid, outstanding dues, and advisor recommendations from previous visits. This helps you track recurring problems easily.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <Link
              href="/features/customers/"
              className="text-xs text-primary font-bold hover:underline"
            >
              Customer Records
            </Link>
            <Link
              href="/features/vehicles/"
              className="text-xs text-primary font-bold hover:underline"
            >
              Vehicle Records
            </Link>
          </div>
        </div>

        {/* Right UI snippet */}
        <div className="bg-white border border-slate-200/80 p-8 rounded-3xl space-y-4 shadow-sm">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
            <FaHistory className="text-primary w-5 h-5" />
            <h3 className="text-sm font-bold text-text-dark uppercase tracking-wide">Historical Billing Logs</h3>
          </div>
          <div className="space-y-3.5 text-xs text-slate-600">
            <div className="bg-slate-50 p-3 rounded-xl">
              <div className="flex justify-between font-bold text-text-dark">
                <span>Invoice #GS-2026-0042</span>
                <span>₹4,307.00</span>
              </div>
              <p className="text-[10px] text-slate-400 mt-1">Paid: UPI | Date: May 24, 2026</p>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl">
              <div className="flex justify-between font-bold text-text-dark">
                <span>Invoice #GS-2025-0914</span>
                <span>₹2,100.00</span>
              </div>
              <p className="text-[10px] text-slate-400 mt-1">Paid: Cash | Date: Dec 12, 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


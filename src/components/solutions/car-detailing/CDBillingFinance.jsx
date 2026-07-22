import React from "react";
import Link from "next/link";
import { FaFileInvoiceDollar, FaRegCreditCard, FaUserTie } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function CDBillingFinance() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Billing & Invoicing
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Simplify Detailing Billing, <GradientUnderline>Invoices and Payments</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Generate clean, professional GST invoices for detailing jobs and counter sales. Log advance collections, track split payments, and audit cash vs. digital payments easily.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 - Invoices */}
          <div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary text-base">
                <FaFileInvoiceDollar />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Create Studio Invoices</h3>
              <p className="text-xs text-slate-500 leading-normal">
                Generate professional, tax-compliant GST invoices containing separate parts, labor items, discounts, and customer billing prefixes in seconds.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6">
              <Link href="/pricing" className="text-xs font-bold text-primary hover:underline">
                View Invoicing Setup
              </Link>
            </div>
          </div>

          {/* Card 2 - Payments & Finance */}
          <div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary text-base">
                <FaRegCreditCard />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Track Payments and Finance</h3>
              <p className="text-xs text-slate-500 leading-normal">
                Organize payments collected via cash, UPI, cards, or credit. Send payment links and digital invoice links straight to the customer's WhatsApp.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6">
              <Link href="/features/payments" className="text-xs font-bold text-primary hover:underline">
                Explore Payments
              </Link>
            </div>
          </div>

          {/* Card 3 - CA Access */}
          <div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary text-base">
                <FaUserTie />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Give Your CA Access</h3>
              <p className="text-xs text-slate-500 leading-normal">
                Invite your Chartered Accountant (CA) to log in and download GST spreadsheets directly, saving hours of manual billing coordination.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6">
              <Link href="/features/ca-access" className="text-xs font-bold text-primary hover:underline">
                Explore CA Access
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

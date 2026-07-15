import React from "react";
import Link from "next/link";
import { FaFileInvoice, FaCoins, FaMoneyCheckAlt, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../common/GradientUnderline";

export default function ARSBillingFinance() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        
        {/* Header */}
        <div className="mb-12">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            GST Billing & Finances
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Generate GST Invoices and Manage{" "}
            <GradientUnderline>Repair Shop Payments</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-3xl">
            GarageSaarthi provides billing capabilities tailored for automotive service shops. Create tax invoices, track labor items, manage credit books, and share invoices directly with customers via WhatsApp.
          </p>
        </div>

        {/* Grid Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* Features Column */}
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-slate-200/80 flex items-center justify-center text-primary shadow-sm">
                <FaFileInvoice className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">Create Professional GST Invoices</h3>
                <p className="text-xs text-slate-600">Generate clean invoice receipts with proper tax columns. Track items, SGST/CGST rules, and details automatically.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-slate-200/80 flex items-center justify-center text-primary shadow-sm">
                <FaCoins className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">Record Parts and Labour Charges</h3>
                <p className="text-xs text-slate-600">Ensure every spare component used and repair mechanic charge is billed accurately, reducing invoicing leaks.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-slate-200/80 flex items-center justify-center text-primary shadow-sm">
                <FaMoneyCheckAlt className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">Track Payments and Garage Finances</h3>
                <p className="text-xs text-slate-600">Log client payments via cash, card, and UPI. Keep tabs on outstanding client credit balances and pending dues.</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 items-center pt-4">
              <Link
                href="/features/payments"
                className="rounded-full bg-primary hover:bg-primary-hover text-white px-6 py-2.5 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
              >
                Explore Payments & Finance
                <FaArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/features/ca-access"
                className="text-xs font-bold text-primary hover:underline"
              >
                Share Data with CA
              </Link>
            </div>
          </div>

          {/* Visual Invoice Mockup */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
            <h4 className="text-xs font-extrabold text-slate-800 mb-4 pb-2 border-b border-slate-100">Tax Invoice Receipt</h4>
            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>Synthetic Engine Oil 5W-30 (3.5L)</span>
                <span className="font-semibold">₹2,850</span>
              </div>
              <div className="flex justify-between">
                <span>Oil Filter Replacement (Part)</span>
                <span className="font-semibold">₹350</span>
              </div>
              <div className="flex justify-between">
                <span>Oil Service Labour Charge</span>
                <span className="font-semibold">₹400</span>
              </div>
              <hr className="border-slate-100 my-2" />
              <div className="flex justify-between font-extrabold text-slate-800">
                <span>Total Bill (incl. GST)</span>
                <span>₹3,600</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
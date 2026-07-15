import React from "react";
import Link from "next/link";
import { FaFileInvoice, FaMoneyBillWave, FaChartLine, FaUserTie, FaArrowRight } from "react-icons/fa";  
import GradientUnderline from "../common/GradientUnderline";


export default function AWBillingFinance() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Billing & Accounts
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-6 leading-tight">
            Manage Workshop Billing and Finances from the <GradientUnderline>Same Platform</GradientUnderline>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Generate clean customer invoices, log vendor bills, track miscellaneous expenses, and manage workshop balances centrally.
          </p>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white border border-slate-200/60 p-6 rounded-2xl flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary mb-4">
                <FaFileInvoice className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">GST Billing & Invoices</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">Create professional GST invoices. Auto-calculate state/central taxes (SGST, CGST, IGST) based on parts and service rates.</p>
            </div>
            <Link href="/features/billing" className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline">
              Explore Billing <FaArrowRight className="w-2.5 h-2.5" />
            </Link>
          </div>

          <div className="bg-white border border-slate-200/60 p-6 rounded-2xl flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary mb-4">
                <FaMoneyBillWave className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Payments & Finance</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">Log incoming cash, UPI, cards, and bank transfer payments. Keep transparent records of pending credits and outstanding customer dues.</p>
            </div>
            <div className="flex gap-4">
              <Link href="/features/payments" className="text-xs font-bold text-primary hover:underline">Payments</Link>
              <Link href="/features/finance" className="text-xs font-bold text-primary hover:underline">Finance</Link>
            </div>
          </div>

          <div className="bg-white border border-slate-200/60 p-6 rounded-2xl flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary mb-4">
                <FaChartLine className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Expenses & Cash Flow</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">Record operational expenses like electricity bills, rent, tea, or tool purchases. Monitor your daily cash register balances.</p>
            </div>
            <div className="flex gap-4">
              <Link href="/features/expenses" className="text-xs font-bold text-primary hover:underline">Expenses</Link>
              <Link href="/features/cash-management" className="text-xs font-bold text-primary hover:underline">Cash</Link>
            </div>
          </div>

          <div className="bg-white border border-slate-200/60 p-6 rounded-2xl flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary mb-4">
                <FaUserTie className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">CA Access & Reports</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">Give read-only login access to your accountant or CA. Allow them to directly download sales, purchase, and GST summaries.</p>
            </div>
            <Link href="/features/ca-access" className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline">
              Explore CA Access <FaArrowRight className="w-2.5 h-2.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

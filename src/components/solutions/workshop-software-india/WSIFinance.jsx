import React from "react";
import Link from "next/link";
import { FaWallet, FaUserShield, FaChartLine, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function WSIFinance() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Financial Visibility
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Keep Workshop Finances Organized <GradientUnderline>with CA Access</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Maintain complete visibility over daily revenue, cash registers, online payments, and GST filing ledgers.
          </p>
        </div>

        {/* 3 Grid Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary text-base">
              <FaWallet />
            </div>
            <h3 className="text-sm font-bold text-slate-900">Cash & Digital Ledgers</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Log daily cash transactions, UPI QR payments, card collections, and supplier expense entries.
            </p>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary text-base">
              <FaUserShield />
            </div>
            <h3 className="text-sm font-bold text-slate-900">View-Only CA Portal</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Invite your accountant or CA to log in and export monthly GST sales ledgers without exposing operational settings.
            </p>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary text-base">
              <FaChartLine />
            </div>
            <h3 className="text-sm font-bold text-slate-900">Profit & Expense Analytics</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              View clear profit reports, supplier payment balances, and job-wise profit margins to guide business decisions.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <Link
            href="/features/ca-access"
            className="inline-flex items-center gap-2 font-bold text-primary hover:text-primary-hover text-sm transition-colors"
          >
            Explore CA Access Portal <FaArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

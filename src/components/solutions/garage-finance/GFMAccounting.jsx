"use client";

import React from "react";
import Link from "next/link";
import GradientUnderline from "../../common/GradientUnderline";
import { trackEvent } from "@/src/utils/pixel";

export default function GFMAccounting() {
  const handleLinkClick = (name, url) => {
    trackEvent("finance_feature_click", {
      page_path: "/solutions/garage-finance-management-software/",
      cta_location: "accounting_records_section",
      cta_label: name,
      destination: url
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-4xl w-full text-center space-y-6">
        <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
          Operations & Accounting
        </span>
        <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
          Keep Garage Financial Records <GradientUnderline>Better Organized</GradientUnderline>
        </h2>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
          GarageSaarthi helps you transition away from manual mechanic shop accounting software methods and disorganized books. By registering billing records, invoice outputs, and customer payments within the system, you maintain a structured digital ledger.
        </p>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
          Get secure cloud record keeping designed for car, bike, and vehicle workshop accounting software needs. Instead of scanning files, your CA can log in securely to review financial statements and tax summaries.
        </p>
        
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/50 max-w-2xl mx-auto text-left text-xs md:text-sm text-slate-500 space-y-2 leading-relaxed">
          <p className="font-semibold text-slate-700">📌 Content Disclaimer:</p>
          <p>
            GarageSaarthi helps organize workshop financial records and provides secure CA Access. It is built specifically to support daily garage operations and finance management and should not be considered a replacement for professional accounting, tax auditing, or statutory filings.
          </p>
        </div>

        <div className="pt-4 flex flex-wrap gap-6 justify-center text-xs md:text-sm font-semibold text-primary">
          <Link href="/features/finance/" onClick={() => handleLinkClick("Finance Feature", "/features/finance/")} className="hover:underline">
            Finance Management
          </Link>
          <span className="text-slate-300">|</span>
          <Link href="/features/ca-access/" onClick={() => handleLinkClick("CA Access Feature", "/features/ca-access/")} className="hover:underline">
            CA Access Dashboard
          </Link>
          <span className="text-slate-300">|</span>
          <Link href="/features/reports/" onClick={() => handleLinkClick("Reports Feature", "/features/reports/")} className="hover:underline">
            Financial Reports
          </Link>
        </div>
      </div>
    </section>
  );
}

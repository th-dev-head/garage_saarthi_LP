"use client";

import React from "react";
import GradientUnderline from "../../common/GradientUnderline";
import Link from "next/link";
import { trackEvent } from "@/src/utils/pixel";

export default function GACDefinition() {
  const handleLinkClick = (name, url) => {
    trackEvent("finance_feature_click", {
      page_path: "/solutions/garage-accounting-software/",
      cta_location: "product_definition",
      cta_label: name,
      destination: url
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Workshop Ledgers
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Accounting and Finance Management <GradientUnderline>Designed Around Your Garage</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Generic accounting software packages understand basic debits and credits, but they fail to capture the operational context of an active workshop. Keeping track of vehicle models, parts inventory stock levels, job cards progress, and invoicing files across separate registers leads to mismatched records.
          </p>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            GarageSaarthi provides a specialized garage accounting software solution that integrates financial tracking directly into daily operations. Link job cards, counter sales, billing records, and expenses in one cloud system.
          </p>
          <div className="pt-2 flex gap-4 text-xs md:text-sm font-semibold text-primary">
            <Link href="/" onClick={() => handleLinkClick("Garage Management Homepage", "/")} className="hover:underline">
              garage management software
            </Link>
            <span className="text-slate-300">|</span>
            <Link href="/features/finance/" onClick={() => handleLinkClick("Finance Feature Page", "/features/finance/")} className="hover:underline">
              Finance Module Details
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5 bg-slate-50 border border-slate-200/60 rounded-3xl p-8 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-text-dark">Operational Integration</h3>
          <ul className="space-y-3 text-xs md:text-sm text-slate-600">
            <li className="flex items-start gap-2.5">
              <span className="text-red-500 font-bold">✕</span>
              <span><strong>Isolated ledger:</strong> Buying parts and assigning job card labor doesn't update your accounting ledger automatically.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-red-500 font-bold">✕</span>
              <span><strong>Duplicate files:</strong> Manually recreating invoices and cash outlays inside a separate tool.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-green-500 font-bold">✓</span>
              <span><strong>Centralized records:</strong> Link daily work logs directly to payments and finance dashboard fields.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import Button from "../../common/Button";
import GradientUnderline from "../../common/GradientUnderline";
import { trackEvent } from "@/src/utils/pixel";

export default function GFMBilling() {
  const handleBillingClick = () => {
    trackEvent("billing_page_click", {
      page_path: "/solutions/garage-finance-management-software",
      cta_location: "gst_billing_section",
      cta_label: "Explore Garage Billing Features",
      destination: "/solutions/garage-billing-software"
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 bg-white border border-slate-200/50 rounded-3xl p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <span className="text-sm font-bold text-slate-800">GST Invoice</span>
            <span className="text-xs text-primary font-semibold">Series Active</span>
          </div>
          <div className="space-y-2 text-xs text-slate-600">
            <div className="flex justify-between">
              <span>Job Invoice #</span>
              <span className="font-semibold text-slate-800">GS-2026-0012</span>
            </div>
            <div className="flex justify-between">
              <span>CGST (9%)</span>
              <span>₹450.00</span>
            </div>
            <div className="flex justify-between">
              <span>SGST (9%)</span>
              <span>₹450.00</span>
            </div>
            <div className="border-t border-slate-100 pt-2 flex justify-between font-bold text-slate-800 text-sm">
              <span>Total Invoice Amount</span>
              <span>₹5,900.00</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Invoicing & GST
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Manage GST Billing and Invoice Records <GradientUnderline>with Your Garage Operations</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Eliminate double entry by linking invoice records directly with vehicle jobs. When a mechanic updates job details, GarageSaarthi automatically populates the checkout invoice. Configure custom invoice series formats with standard CGST, SGST, and IGST breakdowns.
          </p>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            *Note: While GarageSaarthi manages billing files and compiles taxes, it does not support direct return filing on the GSTN government portal.
          </p>
          <div className="pt-2">
            <Link href="/solutions/garage-billing-software" onClick={handleBillingClick}>
              <Button>
                Explore Garage Billing Features <FaChevronRight className="w-3.5 h-3.5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

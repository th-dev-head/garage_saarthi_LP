"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Button from "../../common/Button";
import GradientUnderline from "../../common/GradientUnderline";
import { trackEvent } from "@/src/utils/pixel";

export default function GACBilling() {
  const handleBillingClick = () => {
    trackEvent("billing_page_click", {
      page_path: "/solutions/garage-accounting-software",
      cta_location: "billing_section",
      cta_label: "Explore Garage Billing Features",
      destination: "/solutions/garage-billing-software"
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 bg-slate-50 border border-slate-200/50 rounded-3xl p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <span className="text-sm font-bold text-slate-800">Custom Invoice Prefix</span>
            <span className="text-xs text-primary font-bold">Series Active</span>
          </div>
          <div className="space-y-2 text-xs text-slate-600">
            <div className="flex justify-between">
              <span>Standard Format Prefix</span>
              <span className="font-semibold text-slate-800">GS-IN-2026-</span>
            </div>
            <div className="flex justify-between">
              <span>Next Invoice Number</span>
              <span className="font-semibold text-slate-800">0085</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Invoicing & Tax
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Create GST Bills and Organize <GradientUnderline>Garage Invoice Series</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Every transaction starts with a professional invoice. GarageSaarthi lets you generate custom billing series containing separate prefixes for counter sales and vehicle services. Tax settings populate CGST, SGST, or IGST dynamically.
          </p>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            By using our specialized{" "}
            <Link href="/solutions/garage-billing-software" onClick={handleBillingClick} className="font-semibold text-primary hover:underline">
              garage billing software
            </Link>{" "}
            module, you eliminate manual errors and keep your financial registers accurate.
          </p>
          <div className="pt-2">
            <Link href="/solutions/garage-billing-software" onClick={handleBillingClick}>
              <Button>
                Explore Garage Invoicing Features <FaArrowRight className="w-3.5 h-3.5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

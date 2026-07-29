"use client";

import React from "react";
import Link from "next/link";
import { trackEvent } from "@/src/utils/pixel";
import GradientUnderline from "../../common/GradientUnderline";

export default function GJCInventoryBilling() {
  const handleLinkClick = (label) => {
    trackEvent("job_card_inventory_link_click", {
      page_path: "/solutions/garage-job-card-software",
      cta_location: "inventory_billing_connection",
      cta_label: label
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left card composition */}
        <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-3xl space-y-4 order-2 lg:order-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Real-time mapping</span>
          <div className="space-y-3">
            <div className="bg-white p-3 rounded-xl border border-slate-200/80 flex justify-between items-center text-xs">
              <span className="font-bold text-text-dark">Issue Brake Pad to Creta Job Card</span>
              <span className="text-red-500 font-bold bg-red-50 px-2 py-0.5 rounded">-1 in Parts Stock</span>
            </div>
            <div className="bg-white p-3 rounded-xl border border-slate-200/80 flex justify-between items-center text-xs">
              <span className="font-bold text-text-dark">Auto-Map to Invoicing Sheet</span>
              <span className="text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded">Ready to Bill (₹1,850)</span>
            </div>
          </div>
        </div>

        {/* Right text */}
        <div className="order-1 lg:order-2">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Ecosystem Integration
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-text-dark mt-4 mb-6 leading-tight">
            Connect Job Cards with{" "}
            <GradientUnderline>Garage Inventory and Billing</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
            Workshop billing and spare parts inventories shouldn't operate in silos. In GarageSaarthi, when your team issues parts or documents services on a digital job card, the system connects it directly to inventory levels and the billing desk.
          </p>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
            When the job is complete, the billing counter can generate a final invoice with parts, prices, HSN numbers, and labor charges already populated — saving double-entry time and preventing bill leakages.
          </p>

          <div className="flex gap-4">
            <Link
              href="/features/inventory"
              onClick={() => handleLinkClick("Garage Inventory Management")}
              className="text-xs text-primary font-bold hover:underline"
            >
              Garage Inventory Management
            </Link>
            <Link
              href="/solutions/garage-billing-software"
              onClick={() => handleLinkClick("Garage Billing Software")}
              className="text-xs text-primary font-bold hover:underline"
            >
              Garage Invoicing &amp; Billing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


import React from "react";
import Link from "next/link";
import { FaBoxes } from "react-icons/fa";
import { trackEvent } from "@/src/utils/pixel";
import Button from "../common/Button";

export default function GBInventoryConnection() {
  const handleLinkClick = () => {
    trackEvent("billing_feature_link_click", {
      page_path: "/solutions/garage-billing-software",
      cta_location: "inventory_connection",
      cta_label: "Garage Inventory Management",
      destination: "/garage-inventory-software"
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center border-b border-slate-200/60">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left text */}
        <div>
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Stock Connection
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-text-dark mt-4 mb-6 leading-tight">
            Connect Billing with Spare Parts Inventory Management
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
            In manual workshop systems, there is zero sync between inventory purchases and invoice details. Spares are handed out of cabinets without being recorded on invoices, causing stock shrinkage.
          </p>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
            GarageSaarthi connects your billing terminal with spare parts stock lists. Adding parts to a job card or direct counter sale invoice auto-updates current stock counts, registers tax calculations, and applies pre-saved retail prices.
          </p>

          <Link href="/garage-inventory-software">
            <Button
              variant="hero"
              onClick={handleLinkClick}
            >
              Garage Inventory Management
            </Button>
          </Link>
        </div>

        {/* Right card visualization */}
        <div className="bg-white border border-slate-200/80 p-8 rounded-3xl space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
            <FaBoxes className="text-primary w-5 h-5" />
            <h3 className="text-sm font-bold text-text-dark uppercase tracking-wide">Live Stock Adjustments</h3>
          </div>
          <div className="space-y-3.5 text-xs text-slate-600">
            <div className="bg-slate-50 p-3 rounded-xl flex justify-between items-center font-bold">
              <span>Brembo Brake Pads (Issued to creta)</span>
              <span className="text-red-500 font-bold bg-red-50 px-2 py-0.5 rounded">-1 in Parts Stock</span>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl flex justify-between items-center font-bold">
              <span>Auto-Populated on Creta Invoice</span>
              <span className="text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded">Ready to Bill (₹1,850)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

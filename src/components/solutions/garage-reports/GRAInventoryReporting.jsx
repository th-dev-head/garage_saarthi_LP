import React from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { trackEvent } from "@/src/utils/pixel";

export default function GRAInventoryReporting() {
  const handleInventoryClick = () => {
    trackEvent("reports_inventory_click", {
      page_path: "/solutions/garage-reports-analytics-software",
      cta_location: "inventory_section",
      cta_label: "Explore Inventory Management"
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center border-b border-slate-200/60">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Stock Auditing
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Understand Garage Inventory and Spare Parts Activity
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Verify stock levels without manually visiting the store. GarageSaarthi compiles current stock logs, item movements, counter spare parts sales, and supplier histories. Get low-stock indicators automatically.
          </p>
          <div className="pt-2">
            <Link href="/features/inventory" onClick={handleInventoryClick} className="text-xs text-primary font-bold hover:underline inline-flex items-center gap-1">
              Explore Inventory Management <FaChevronRight className="w-2.5 h-2.5" />
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5 bg-slate-50 border border-slate-200/60 rounded-3xl p-6 shadow-sm aspect-[4/3] flex items-center justify-center">
          <div className="text-center space-y-2">
            <span className="text-4xl">📦</span>
            <p className="text-xs font-bold text-slate-600">Stock Reports Dashboard</p>
            <p className="text-[10px] text-slate-400">View low-stock parts alerts centrally</p>
          </div>
        </div>
      </div>
    </section>
  );
}
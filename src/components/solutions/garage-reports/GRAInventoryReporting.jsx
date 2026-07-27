import React from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { trackEvent } from "@/src/utils/pixel";
import GradientUnderline from "../../common/GradientUnderline";

const lowStockQueue = [
  { item: "Engine Oil (5W-30 Synthetic)", stock: "Cur. Stock: 4 Canisters (Min: 15)", isWarning: true },
  { item: "Front Brake Pads (Maruti)", stock: "Cur. Stock: 2 Sets (Min: 10)", isWarning: false }
];

export default function GRAInventoryReporting() {
  const handleInventoryClick = () => {
    trackEvent("reports_inventory_click", {
      page_path: "/solutions/garage-reports-analytics-software",
      cta_location: "inventory_section",
      cta_label: "Explore Inventory Management"
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Stock Auditing
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Understand Garage Inventory and <GradientUnderline>Spare Parts Activity</GradientUnderline>
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
        <div className="lg:col-span-5 bg-white border border-slate-200/80 rounded-3xl p-5 shadow-lg shadow-slate-100 space-y-4">
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"></div>
              <span className="text-xs font-bold text-slate-800">Inventory & Spare Parts Logs</span>
            </div>
            <div className="bg-amber-50 text-amber-700 text-[10px] font-bold px-2.5 py-1 rounded-lg border border-amber-200/60">
              ⚠️ 3 Low-Stock Alerts
            </div>
          </div>

          {/* Top Stock Overview */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-3">
              <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Total Stock Value</p>
              <p className="text-base font-extrabold text-slate-800 mt-0.5">₹6,85,000</p>
              <span className="text-[9px] font-medium text-slate-500 mt-1 inline-block">
                420 SKUs Managed
              </span>
            </div>
            <div className="bg-[#EFE9E7]/40 border border-primary/10 rounded-xl p-3">
              <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Monthly Part Sales</p>
              <p className="text-base font-extrabold text-primary mt-0.5">₹2,19,400</p>
              <span className="text-[9px] font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded mt-1 inline-block">
                Fast Moving Items
              </span>
            </div>
          </div>

          {/* Low Stock Items List */}
          <div className="space-y-2 pt-1">
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Low-Stock Reorder Queue</p>
            {lowStockQueue.map((row, idx) => (
              <div key={idx} className={`flex items-center justify-between p-2.5 rounded-xl ${row.isWarning ? "bg-amber-50/50 border border-amber-200/60" : "bg-slate-50 border border-slate-100"}`}>
                <div>
                  <p className="text-xs font-bold text-slate-800">{row.item}</p>
                  <p className="text-[10px] text-slate-500">{row.stock}</p>
                </div>
                <span className="text-[9px] font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">
                  Reorder
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
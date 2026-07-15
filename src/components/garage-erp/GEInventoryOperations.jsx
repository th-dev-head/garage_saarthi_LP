import React from "react";
import Link from "next/link";
import { FaBoxes } from "react-icons/fa";
import { trackEvent } from "@/src/utils/pixel";
import Button from "../common/Button";
import GradientUnderline from "../common/GradientUnderline";

// SECTION 06 - INVENTORY AND WORKSHOP OPERATIONS
export default function GEInventoryOperations() {
  const handleCtaClick = () => {
    trackEvent("feature_click", {
      page_path: "/solutions/garage-erp-software",
      page_type: "core_commercial",
      page_topic: "garage_erp_software",
      cta_location: "inventory",
      cta_label: "Explore Inventory Management",
      destination: "/features/inventory"
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left text */}
        <div>
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Inventory Connection
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-text-dark mt-4 mb-6 leading-tight">
            Connect Workshop Operations with{" "}
            <GradientUnderline>Inventory Management</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
            In a traditional workshop, spare parts inventory is completely separated from job records, leading to parts going missing, billing leakages, or wrong stock records. 
          </p>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
            With GarageSaarthi workshop ERP, your parts store is directly linked to the workshop floor. Parts issued to active job cards are mapped in real-time, helping you check current stock levels, trace mechanics using spares, perform counter sales billing instantly, and set automatic low-stock alarms.
          </p>

          <Link href="/features/inventory">
            <Button
              variant="hero"
              onClick={handleCtaClick}
            >
              Explore Inventory Management
            </Button>
          </Link>
        </div>

        {/* Right card */}
        <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-3xl relative overflow-hidden">
          <div className="flex items-center gap-3 mb-6">
            <FaBoxes className="text-primary w-6 h-6" />
            <h3 className="text-sm font-bold text-text-dark uppercase tracking-wide">E-Inventory Dashboard</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-xl border border-slate-200/80 flex justify-between items-center">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400">Part Description</span>
                <span className="block text-xs font-bold text-text-dark mt-0.5">Mobil 5W-30 Engine Oil (1L)</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] uppercase font-bold text-slate-400">Stock Count</span>
                <span className="block text-xs font-bold text-green-600 mt-0.5">24 Bottles Available</span>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200/80 flex justify-between items-center">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400">Part Description</span>
                <span className="block text-xs font-bold text-text-dark mt-0.5">Brembo Brake Pads (Front)</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] uppercase font-bold text-slate-400">Stock Count</span>
                <span className="block text-xs font-bold text-orange-500 mt-0.5">2 Packs (Low Stock)</span>
              </div>
            </div>
            
            <p className="text-[10px] text-slate-400 italic">
              *Parts issued to digital job cards or counter sales are adjusted to reflect active inventory stock.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

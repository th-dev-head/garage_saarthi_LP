import React from "react";
import Link from "next/link";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const inventoryPoints = [
  {
    title: "Track Workshop Inventory",
    desc: "Maintain detailed stock count for heavy truck consumables (engine oils, lubricants, gear oils), brake drums, air filters, wheel bearings, and electrical components.",
  },
  {
    title: "Manage Counter Sales",
    desc: "Process fast retail billing for direct parts, lubricants, or tires sold straight to walk-in logistics or commercial clients without blocking a workshop service bay.",
  },
  {
    title: "Link Stock to Job Cards",
    desc: "Subtract spare parts directly as they are checked out by mechanics for a specific repair card, keeping your stock register updated automatically.",
  },
];

const truckSparesRegistry = [
  { name: "Heavy Duty Engine Oil 15W-40 (5L)", qty: "14 Units", qtyClass: "text-primary font-bold" },
  { name: "Air Brake Valve Assy", qty: "4 Units", qtyClass: "text-primary font-bold" },
  { name: "Front Hub Bearing", qty: "8 Units", qtyClass: "text-primary font-bold" },
  { name: "Commercial Air Filter", qty: "Low (2 Units)", qtyClass: "text-emerald-600 font-bold" },
  { name: "Trailer Connector Cable", qty: "6 Units", qtyClass: "text-primary font-bold" }
];

export default function TWInventory() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content - Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
              Inventory & Spares
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
              Manage Truck Spare Parts and{" "}
              <GradientUnderline>Workshop Inventory</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Heavy vehicle parts are expensive. Prevent leakage and audit stock valuation dynamically. GarageSaarthi syncs spare parts checkouts straight to job cards and invoices.
            </p>

            <div className="space-y-4 pt-2">
              {inventoryPoints.map((point, idx) => (
                <div key={idx} className="flex gap-3">
                  <FaCheckCircle className="text-primary w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 mb-0.5">{point.title}</h3>
                    <p className="text-[11px] text-slate-500 leading-normal">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/features/inventory"
                className="inline-flex items-center gap-1.5 font-bold text-primary hover:text-primary-hover text-sm transition-colors"
              >
                Explore Inventory Management <FaArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Visual block - Right Column */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-sm">
            <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wide border-b border-slate-200/60 pb-3 mb-4">
              Truck Spares Registry
            </h4>
            <div className="space-y-3">
              {truckSparesRegistry.map((item, idx) => (
                <div key={idx} className={`flex justify-between text-xs ${idx < truckSparesRegistry.length - 1 ? "border-b border-slate-200/40 pb-2" : ""}`}>
                  <span className="font-medium text-slate-700">{item.name}</span>
                  <span className={item.qtyClass}>{item.qty}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


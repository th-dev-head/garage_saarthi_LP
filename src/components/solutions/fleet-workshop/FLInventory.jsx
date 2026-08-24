import React from "react";
import Link from "next/link";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const inventoryPoints = [
  {
    title: "Track Workshop Inventory",
    desc: "Maintain detailed logs for specialized fleet parts, filters, lubricants, gear oils, drums, bearings, and trailer connector cords.",
  },
  {
    title: "Manage Counter Sales",
    desc: "Process fast retail billing for direct spare items or consumables sold straight to logistics or corporate buyers without blocking a workshop service bay.",
  },
  {
    title: "Link Stock to active Job Cards",
    desc: "Automatically deduct parts stock as they are checked out by mechanics for active repair sheets, keeping your stock register updated automatically.",
  },
];

export default function FLInventory() {
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
              Manage Fleet Spare Parts and{" "}
              <GradientUnderline>Workshop Inventory</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Ditch manual registers. Prevent spare parts leakage and audit stock valuation dynamically. GarageSaarthi links parts checkouts straight to active job cards and billing.
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
                href="/features/inventory/"
                className="inline-flex items-center gap-1.5 font-bold text-primary hover:text-primary-hover text-sm transition-colors"
              >
                Explore Inventory Management <FaArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Visual block - Right Column */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-sm">
            <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wide border-b border-slate-200/60 pb-3 mb-4">
              Fleet Spares Registry
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between text-xs border-b border-slate-200/40 pb-2">
                <span className="font-medium text-slate-700">Gear Lubricant Oil 80W-90 (5L)</span>
                <span className="text-primary font-bold">14 Units</span>
              </div>
              <div className="flex justify-between text-xs border-b border-slate-200/40 pb-2">
                <span className="font-medium text-slate-700">Heavy Duty Air Filter</span>
                <span className="text-primary font-bold">8 Units</span>
              </div>
              <div className="flex justify-between text-xs border-b border-slate-200/40 pb-2">
                <span className="font-medium text-slate-700">Wheel Hub Bearing (Rear Axle)</span>
                <span className="text-primary font-bold">12 Units</span>
              </div>
              <div className="flex justify-between text-xs border-b border-slate-200/40 pb-2">
                <span className="font-medium text-slate-700">Trailer Connector Cord</span>
                <span className="text-emerald-600 font-bold">Low (3 Units)</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="font-medium text-slate-700">Heavy Duty Brake Drum</span>
                <span className="text-primary font-bold">6 Units</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

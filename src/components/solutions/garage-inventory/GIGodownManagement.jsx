"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaWarehouse,
  FaExchangeAlt,
  FaBoxes,
  FaCheckCircle,
  FaHistory,
  FaFileImport,
  FaShieldAlt,
  FaArrowRight,
  FaUserCheck
} from "react-icons/fa";
import { trackEvent } from "@/src/utils/pixel";
import Button from "../../common/Button";
import GradientUnderline from "../../common/GradientUnderline";

const godownCapabilities = [
  {
    icon: FaWarehouse,
    title: "Dual-Layer Godown & Shop Isolation",
    desc: "Keep bulk drums, batteries, and cartons organized in your Godown warehouse while maintaining active, lean stocks on workshop floor bays."
  },
  {
    icon: FaExchangeAlt,
    title: "1-Tap Inter-Location Transfers",
    desc: "Transfer items between Godown and Shop floor with live projected balances (e.g. Godown: 60 ➔ 40, Shop: 12 ➔ 32) and instant stock validation."
  },
  {
    icon: FaFileImport,
    title: "Purchase Order Intake to Godown",
    desc: "Route newly received distributor purchase invoices or Excel catalog uploads directly into Godown warehouse or Shop inventory."
  },
  {
    icon: FaHistory,
    title: "Audit Ledger & Shrinkage Prevention",
    desc: "Every inter-location movement is permanently recorded with timestamp, staff authorizer, transfer notes, and post-transfer balances."
  }
];

const sampleItems = [
  {
    name: "Motul 7100 4T 10W-50 (1L)",
    sku: "MOT-7100-1L",
    godown: 60,
    shop: 12,
    transfer: 20,
    unit: "Ltr"
  },
  {
    name: "Bosch Premium Oil Filter",
    sku: "BSH-OF-0451",
    godown: 48,
    shop: 6,
    transfer: 15,
    unit: "Pcs"
  },
  {
    name: "Brembo Front Ceramic Brake Pads",
    sku: "BRM-BP-9921",
    godown: 25,
    shop: 4,
    transfer: 8,
    unit: "Sets"
  }
];

export default function GIGodownManagement() {
  const [selectedItemIdx, setSelectedItemIdx] = useState(0);
  const activeItem = sampleItems[selectedItemIdx];

  const handleCtaClick = () => {
    trackEvent("feature_click", {
      page_path: "/solutions/garage-inventory-software/",
      page_type: "solution_page",
      page_topic: "garage_inventory_software",
      cta_location: "godown_management",
      cta_label: "Explore Godown & Inventory Features",
      destination: "/features/inventory/"
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-flex items-center gap-1.5">
            <FaWarehouse className="w-3.5 h-3.5" /> Godown &amp; Warehouse Management
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Separate Godown Warehouse Stock from{" "}
            <GradientUnderline>Active Workshop Floor Racks</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Eliminate workshop floor clutter, keep bulk supplies secure in your backroom warehouse, and transfer spare parts to active job card bays with 1-tap simplicity and full audit tracking.
          </p>
        </div>

        {/* Dual Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Panel: Live Transfer Mockup Card */}
          <div className="lg:col-span-6 bg-white border border-slate-200/90 rounded-3xl p-6 md:p-8 shadow-md space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                  <FaExchangeAlt className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                    Godown ➔ Shop Stock Transfer
                  </h3>
                  <p className="text-[10px] text-slate-400">Live multi-location balance recalculation</p>
                </div>
              </div>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                Active Audit Log
              </span>
            </div>

            {/* Quick Item Switcher */}
            <div className="grid grid-cols-3 gap-2">
              {sampleItems.map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedItemIdx(idx)}
                  className={`p-2 rounded-xl text-left border transition-all cursor-pointer ${
                    selectedItemIdx === idx
                      ? "border-primary bg-primary/5 text-primary font-bold shadow-2xs"
                      : "border-slate-200 hover:border-slate-300 text-slate-600 bg-white"
                  }`}
                >
                  <span className="text-[11px] block truncate font-bold">{item.name}</span>
                  <span className="text-[9px] text-slate-400 font-mono">{item.sku}</span>
                </button>
              ))}
            </div>

            {/* Selected Item Transfer Visual Card */}
            <div className="p-4 bg-slate-900 text-white rounded-2xl space-y-4 border border-slate-800">
              <div className="flex justify-between items-center text-xs">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Item Selected</span>
                  <h4 className="font-bold text-sm text-white">{activeItem.name}</h4>
                </div>
                <span className="text-xs font-mono text-primary-light bg-primary/20 px-2 py-0.5 rounded">
                  {activeItem.sku}
                </span>
              </div>

              {/* Balances Before Transfer */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">🏢 Godown Warehouse</span>
                  <span className="text-sm font-bold text-amber-400 block mt-0.5">
                    {activeItem.godown} {activeItem.unit} Available
                  </span>
                </div>
                <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">🏪 Shop Floor (Active)</span>
                  <span className="text-sm font-bold text-emerald-400 block mt-0.5">
                    {activeItem.shop} {activeItem.unit} Current
                  </span>
                </div>
              </div>

              {/* Transfer Direction & Projected Preview */}
              <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 text-xs space-y-2">
                <div className="flex justify-between items-center text-slate-300">
                  <span className="font-semibold flex items-center gap-1.5">
                    <FaExchangeAlt className="w-3 h-3 text-primary" /> Transfer Qty:
                  </span>
                  <span className="font-bold text-white text-sm">+{activeItem.transfer} {activeItem.unit}</span>
                </div>

                <div className="border-t border-slate-800 pt-2 flex justify-between items-center text-[11px]">
                  <span className="text-slate-400">Projected Balances:</span>
                  <div className="font-mono text-slate-200">
                    Godown: <span className="text-amber-400 font-bold">{activeItem.godown - activeItem.transfer}</span> | Shop:{" "}
                    <span className="text-emerald-400 font-bold">{activeItem.shop + activeItem.transfer} {activeItem.unit}</span>
                  </div>
                </div>
              </div>

              {/* Recent Transfer Audit Snippet */}
              <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-800">
                <span className="flex items-center gap-1">
                  <FaUserCheck className="w-3 h-3 text-emerald-400" /> Authorized by Rajesh S. (Storekeeper)
                </span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <FaCheckCircle className="w-2.5 h-2.5" /> Transferred
                </span>
              </div>
            </div>
          </div>

          {/* Right Panel: 4 Solution Pillars & CTA */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              {godownCapabilities.map((cap, idx) => {
                const Icon = cap.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex items-start gap-3.5 hover:border-primary/30 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#EFE9E7] text-primary flex items-center justify-center font-bold shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">{cap.title}</h3>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{cap.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2">
              <Link href="/features/inventory/">
                <Button
                  variant="hero"
                  onClick={handleCtaClick}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2"
                >
                  Explore Godown &amp; Inventory Features <FaArrowRight className="w-3.5 h-3.5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import {
  FaBarcode,
  FaPrint,
  FaCamera,
  FaBolt,
  FaBoxes,
  FaCheckCircle,
  FaPlus,
  FaCopy,
  FaSearch,
  FaLayerGroup
} from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const labelSizes = [
  { id: "50x25", label: "50mm × 25mm (Thermal)" },
  { id: "50x38", label: "50mm × 38mm (Large Sticker)" },
  { id: "a4", label: "A4 Grid (30 Labels)" }
];

const itemStats = [
  { label: "Current Stock", value: "14 Liters", valColor: "text-emerald-600 font-bold" },
  { label: "Rack / Location", value: "Rack A • Shelf 2 • Bin 14", valColor: "text-slate-800 font-semibold" },
  { label: "Purchase Rate", value: "₹ 620.00", valColor: "text-slate-700 font-semibold" },
  { label: "Selling MRP", value: "₹ 850.00", valColor: "text-primary font-bold" }
];

const barcodePillars = [
  {
    icon: FaBarcode,
    title: "Instant Code-128 Auto Generation",
    desc: "Generate high-precision vector barcodes automatically whenever you add new spare parts or accessories to your workshop catalog."
  },
  {
    icon: FaPrint,
    title: "Thermal & A4 Sticker Printing",
    desc: "1-Click printing for 50×25mm and 50×38mm thermal label rolls or 30-label A4 sheets for spare parts packaging and storage bin racks."
  },
  {
    icon: FaBolt,
    title: "Hardware USB & Bluetooth Scanner Guns",
    desc: "Plug-and-play compatibility with any standard 2.4GHz wireless, Bluetooth, or USB barcode scanner gun with rapid <40ms keystroke capture."
  },
  {
    icon: FaCamera,
    title: "Mobile Camera & Webcam Scanner",
    desc: "Scan barcodes using your smartphone camera or tablet with live viewfinder and flashlight support during workshop floor audits."
  }
];

export default function IBarcodeManagement() {
  const [selectedSize, setSelectedSize] = useState("50x25");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-flex items-center gap-1.5">
            <FaBarcode className="w-3 h-3" /> Barcode &amp; Gun Scanner Ecosystem
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Auto Barcode Generation, Label Printing &amp;{" "}
            <GradientUnderline>Scanner Hub</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Generate unique barcodes for spare parts automatically. Print professional thermal barcode stickers for storage bins, and use hardware scanner guns or mobile cameras for 1-second stock lookups and quick stock-in.
          </p>
        </div>

        {/* Interactive Dual Mockup Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Thermal Barcode Sticker & Print Studio */}
          <div className="lg:col-span-6 bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-2xs">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
                <div className="flex items-center gap-2 text-slate-800 font-bold text-sm">
                  <FaPrint className="text-primary" />
                  <span>Thermal Barcode Sticker Studio</span>
                </div>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                  Code-128 Vector
                </span>
              </div>

              {/* Label Size Selector Tabs */}
              <div className="flex flex-wrap gap-2">
                {labelSizes.map((size) => {
                  const isActive = selectedSize === size.id;
                  return (
                    <button
                      key={size.id}
                      onClick={() => setSelectedSize(size.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer outline-none focus:outline-none focus:ring-0 focus-visible:outline-none select-none border ${
                        isActive
                          ? "bg-white text-slate-900 shadow-xs border-slate-300"
                          : "border-transparent text-slate-500 hover:text-slate-900 hover:bg-white/60"
                      }`}
                    >
                      {size.label}
                    </button>
                  );
                })}
              </div>

              {/* Thermal Sticker Visual Card */}
              <div className="bg-white border-2 border-dashed border-slate-300 rounded-2xl p-5 shadow-xs text-center space-y-2 max-w-sm mx-auto">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">GARAGE SAARTHI AUTO CARE</p>
                <h4 className="text-xs font-bold text-slate-900 leading-snug">
                  Motul 7100 4T 10W-50 Engine Oil (1L)
                </h4>
                <p className="text-[10px] text-slate-500 font-medium">SKU: MOT-7100-10W50 • Rack A-02 / Bin 14</p>

                {/* SVG Barcode Graphic Mockup */}
                <div className="py-2 flex flex-col items-center justify-center space-y-1 bg-slate-50/80 rounded-lg p-2 border border-slate-100">
                  <svg className="w-48 h-12 text-slate-900" viewBox="0 0 160 40" fill="currentColor">
                    <rect x="5" y="0" width="2" height="35" />
                    <rect x="9" y="0" width="4" height="35" />
                    <rect x="15" y="0" width="1" height="35" />
                    <rect x="18" y="0" width="3" height="35" />
                    <rect x="23" y="0" width="2" height="35" />
                    <rect x="27" y="0" width="4" height="35" />
                    <rect x="33" y="0" width="1" height="35" />
                    <rect x="36" y="0" width="3" height="35" />
                    <rect x="41" y="0" width="2" height="35" />
                    <rect x="45" y="0" width="4" height="35" />
                    <rect x="51" y="0" width="2" height="35" />
                    <rect x="55" y="0" width="1" height="35" />
                    <rect x="58" y="0" width="4" height="35" />
                    <rect x="64" y="0" width="2" height="35" />
                    <rect x="68" y="0" width="3" height="35" />
                    <rect x="73" y="0" width="1" height="35" />
                    <rect x="76" y="0" width="4" height="35" />
                    <rect x="82" y="0" width="2" height="35" />
                    <rect x="86" y="0" width="3" height="35" />
                    <rect x="91" y="0" width="1" height="35" />
                    <rect x="94" y="0" width="4" height="35" />
                    <rect x="100" y="0" width="2" height="35" />
                    <rect x="104" y="0" width="3" height="35" />
                    <rect x="109" y="0" width="2" height="35" />
                    <rect x="113" y="0" width="4" height="35" />
                    <rect x="119" y="0" width="1" height="35" />
                    <rect x="122" y="0" width="3" height="35" />
                    <rect x="127" y="0" width="2" height="35" />
                    <rect x="131" y="0" width="4" height="35" />
                    <rect x="137" y="0" width="2" height="35" />
                    <rect x="141" y="0" width="3" height="35" />
                    <rect x="146" y="0" width="2" height="35" />
                    <rect x="150" y="0" width="4" height="35" />
                  </svg>
                  <span className="font-mono text-[10px] tracking-widest text-slate-700 font-bold">
                    GS-MOT-710010W50
                  </span>
                </div>

                <div className="flex justify-between items-center text-xs pt-1">
                  <span className="text-[10px] text-slate-500">Retail Rate:</span>
                  <span className="font-bold text-slate-900 text-sm">₹ 850.00 (Incl. GST)</span>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-2">  
              <button
                type="button"
                className="flex-1 bg-primary hover:bg-primary/90 text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                <FaPrint className="text-xs" /> Print Thermal Sticker
              </button>
              <button
                type="button"
                onClick={handleCopy}
                className="bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 font-semibold py-2.5 px-3 rounded-xl text-xs flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <FaCopy className="text-xs text-slate-400" />
                <span>{copied ? "Copied!" : "Copy SKU"}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Live Scanner Hub & Quick Stock-In */}
          <div className="lg:col-span-6 bg-slate-900 text-white border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-5 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Scanner Hub &amp; Quick Stock In</span>
                </div>
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  USB Gun Active
                </span>
              </div>

              {/* Scanned Barcode Search Bar */}
              <div className="bg-slate-800/90 border border-slate-700 rounded-2xl p-3 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <FaBarcode className="text-sm text-slate-400" />
                  <span className="tracking-wider">GS-MOT-710010W50</span>
                </div>
                <span className="text-[10px] bg-slate-700 text-slate-300 px-2 py-0.5 rounded font-semibold flex items-center gap-1">
                  <FaBolt className="text-amber-400 text-[9px]" /> 35ms Auto-Lookup
                </span>
              </div>

              {/* Matched Spare Part Card */}
              <div className="bg-slate-800/60 border border-slate-700/80 rounded-2xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-white">Motul 7100 4T 10W-50 Engine Oil</h4>
                    <p className="text-[10px] text-slate-400">Category: Engine Oils &amp; Lubricants</p>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                    Matched
                  </span>
                </div>

                {/* Stock Stats Grid */}
                <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                  {itemStats.map((stat, idx) => (
                    <div key={idx} className="bg-slate-900/60 p-2 rounded-xl border border-slate-800">
                      <span className="text-[10px] text-slate-400 block">{stat.label}</span>
                      <span className={`text-xs ${stat.valColor}`}>{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stock-In Form */}
              <div className="bg-slate-800/40 border border-slate-700/60 rounded-2xl p-4 space-y-3">
                <span className="text-xs font-bold text-slate-300 block">Quick Stock In (1-Tap Entry)</span>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="space-y-1">
                    <label className="text-[10px] text-slate-400">Add Quantity</label>
                    <div className="bg-slate-900 border border-slate-700 px-3 py-2 rounded-xl font-bold text-emerald-400 flex items-center justify-between">
                      <span>+ 10 Units</span>
                      <FaPlus className="text-[10px] text-slate-500" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] text-slate-400">Purchase Rate</label>
                    <div className="bg-slate-900 border border-slate-700 px-3 py-2 rounded-xl font-semibold text-slate-200">
                      ₹ 620.00
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Button */}
            <button
              type="button"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
            >
              <FaCheckCircle /> Update Stock (+10 Liters)
            </button>
          </div>
        </div>

        {/* 4 Value Pillars Grid (Looped) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {barcodePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-2.5 shadow-2xs hover:border-primary/30 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-orange-100/70 text-primary flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">{pillar.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

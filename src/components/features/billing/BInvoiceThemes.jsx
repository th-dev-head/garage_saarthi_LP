"use client";

import React, { useState } from "react";
import { FaPalette, FaCheckCircle, FaPrint, FaQrcode, FaFileInvoiceDollar, FaCheck } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const invoiceThemesList = [
  {
    id: "modern",
    name: "Modern GST",
    tag: "Popular • Corporate",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
    desc: "Clean contemporary layout with itemized parts & labour breakdown, tax split table, and embedded SBI/UPI QR code for instant scan-and-pay.",
    accent: "#1E293B",
    preview: {
      border: "border-slate-800",
      headerBg: "bg-slate-900 text-white",
      brandName: "GARAGE SAARTHI",
      brandSub: "GST NO: 24BFOPJ0342C1ZZ",
      titleBg: "bg-slate-100 text-slate-900",
      totalBg: "bg-slate-900 text-white",
      qrText: "Scan & Pay",
      sampleTotal: "₹3,450.00"
    }
  },
  {
    id: "luxury",
    name: "Luxury Royal",
    tag: "Premium • Detailing",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
    desc: "Crafted with royal gold/amber borders and elegant serif typography. Perfect for premium auto care, detailing studios, and luxury car workshops.",
    accent: "#B02E0C",
    preview: {
      border: "border-[#B02E0C]/40 bg-[#FFFDF9]",
      headerBg: "bg-[#B02E0C] text-white",
      brandName: "ROYAL AUTO CARE",
      brandSub: "Luxury & Supercar Specialists",
      titleBg: "bg-[#FEF3C7] text-[#92400E]",
      totalBg: "bg-[#FEF3C7] text-[#92400E] border border-amber-300",
      qrText: "UPI Verified",
      sampleTotal: "₹8,900.00"
    }
  },
  {
    id: "stylish",
    name: "Stylish Purple",
    tag: "Modern • Sleek",
    badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
    desc: "Striking gradient header with vivid purple accents and card-style sections for workshops wanting a distinct, high-tech brand identity.",
    accent: "#7C3AED",
    preview: {
      border: "border-purple-300 bg-purple-50/20",
      headerBg: "bg-gradient-to-r from-purple-600 to-indigo-600 text-white",
      brandName: "AUTO SPEED HUB",
      brandSub: "Smart Multi-Brand Garage",
      titleBg: "bg-purple-100/70 text-purple-950",
      totalBg: "bg-purple-600 text-white",
      qrText: "Instant Pay",
      sampleTotal: "₹4,200.00"
    }
  },
  {
    id: "simple",
    name: "Simple / Minimal",
    tag: "High Contrast • Clean",
    badgeColor: "bg-slate-100 text-slate-800 border-slate-300",
    desc: "Crisp black and white layout with clear typography. Maximum readability and ink-efficient for standard laser printing.",
    accent: "#000000",
    preview: {
      border: "border-black bg-white",
      headerBg: "bg-black text-white",
      brandName: "PATEL AUTO WORKS",
      brandSub: "General Repairs & Service",
      titleBg: "bg-gray-100 text-black",
      totalBg: "bg-black text-white",
      qrText: "UPI QR",
      sampleTotal: "₹2,100.00"
    }
  },
  {
    id: "classic_gst",
    name: "Classic GST",
    tag: "Official • Industrial",
    badgeColor: "bg-slate-200 text-slate-800 border-slate-300",
    desc: "Traditional multi-column tax invoice structure featuring full HSN, SAC, CGST, SGST, IGST tax grids trusted by commercial fleet workshops.",
    accent: "#334155",
    preview: {
      border: "border-slate-700 bg-white",
      headerBg: "bg-slate-700 text-white",
      brandName: "BHARAT MOTORS",
      brandSub: "Authorized Service Center",
      titleBg: "bg-slate-200 text-slate-900",
      totalBg: "bg-slate-800 text-white",
      qrText: "GST / QR",
      sampleTotal: "₹5,620.00"
    }
  },
  {
    id: "billbook",
    name: "Billbook Classic",
    tag: "Ledger • Traditional",
    badgeColor: "bg-orange-100 text-orange-800 border-orange-200",
    desc: "Mimics classic Indian workshop paper billbook style with structured table borders, estimate reference numbers, and physical signature space.",
    accent: "#1E293B",
    preview: {
      border: "border-slate-600 bg-white",
      headerBg: "bg-slate-800 text-white",
      brandName: "SHREE RAM AUTOMOBILES",
      brandSub: "Job Estimate & Tax Invoice",
      titleBg: "bg-slate-100 text-slate-800",
      totalBg: "bg-slate-100 text-slate-900 border-t-2 border-black",
      qrText: "Scan Pay",
      sampleTotal: "₹3,150.00"
    }
  },
  {
    id: "compact_a5",
    name: "Compact A5",
    tag: "Paper Saver • Eco",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    desc: "Landscape half-page format engineered to cut paper costs by 50%. Prints complete job breakdown on a single A5 sheet.",
    accent: "#059669",
    preview: {
      border: "border-emerald-500 bg-emerald-50/20",
      headerBg: "bg-emerald-700 text-white",
      brandName: "SPEEDY CAR CLINIC",
      brandSub: "A5 Compact Invoice",
      titleBg: "bg-emerald-100 text-emerald-950",
      totalBg: "bg-emerald-700 text-white",
      qrText: "A5 Pay",
      sampleTotal: "₹1,850.00"
    }
  },
  {
    id: "thermal",
    name: "Quick Receipt",
    tag: "Fast • Counter Sales",
    badgeColor: "bg-sky-100 text-sky-800 border-sky-300",
    desc: "Compact receipt slip format ideal for rapid spare parts sales, oil change counter bills, and quick washing express checkouts.",
    accent: "#0284C7",
    preview: {
      border: "border-dashed border-slate-400 bg-white",
      headerBg: "bg-sky-800 text-white",
      brandName: "EXPRESS AUTO SPARES",
      brandSub: "Counter Sale Receipt",
      titleBg: "bg-sky-50 text-sky-900",
      totalBg: "bg-sky-900 text-white",
      qrText: "UPI QR",
      sampleTotal: "₹950.00"
    }
  }
];

export default function BInvoiceThemes() {
  const [selectedTheme, setSelectedTheme] = useState(invoiceThemesList[0]);

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center border-y border-slate-200/60">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Invoice Customization
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-4 leading-tight">
            Choose from 8+ <GradientUnderline>Professional Invoice Themes</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Match your workshop branding with customizable invoice templates. Switch themes in 1-click, display your garage logo, authorized signature, and live UPI payment QR codes.
          </p>
        </div>

        {/* Interactive Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Theme Selector (8 Col / Tabs) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {invoiceThemesList.map((theme) => {
              const isSelected = selectedTheme.id === theme.id;
              return (
                <div
                  key={theme.id}
                  onClick={() => setSelectedTheme(theme)}
                  className={`p-4 rounded-2xl cursor-pointer transition-all duration-200 border text-left flex flex-col justify-between ${
                    isSelected
                      ? "bg-white border-primary shadow-md scale-[1.01]"
                      : "bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white shadow-xs"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
                        {theme.name}
                        {isSelected && <FaCheck className="text-primary text-xs" />}
                      </span>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${theme.badgeColor}`}>
                        {theme.tag.split("•")[0].trim()}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {theme.desc}
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400 font-medium flex items-center gap-1">
                      <FaPrint className="text-slate-400 text-[10px]" /> WhatsApp & Print
                    </span>
                    <span className={`font-bold ${isSelected ? "text-primary" : "text-slate-500 hover:text-slate-800"}`}>
                      {isSelected ? "Active Preview" : "Preview Theme →"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Live Visual Card (5 Col) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-lg space-y-4">
              <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <FaPalette className="text-primary text-sm" />
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    {selectedTheme.name} Preview
                  </span>
                </div>
                <span className="bg-emerald-50 text-emerald-700 font-bold text-[10px] px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                  <FaCheckCircle className="text-[9px]" /> GST & UPI Ready
                </span>
              </div>

              {/* Mock Invoice Sheet Render */}
              <div className={`p-4 rounded-2xl border-2 transition-all duration-300 shadow-xs space-y-3 font-sans ${selectedTheme.preview.border}`}>
                {/* Header */}
                <div className={`p-3 rounded-xl flex justify-between items-center ${selectedTheme.preview.headerBg}`}>
                  <div>
                    <h4 className="font-bold text-xs tracking-wider uppercase">{selectedTheme.preview.brandName}</h4>
                    <p className="text-[9px] opacity-80 mt-0.5">{selectedTheme.preview.brandSub}</p>
                  </div>
                  <div className="text-right text-[8px] opacity-90 leading-tight">
                    <span>Inv #GS-2026</span><br />
                    <span>26 Aug 2026</span>
                  </div>
                </div>

                {/* Customer Meta */}
                <div className="grid grid-cols-2 gap-2 text-[10px] p-2 bg-slate-50 rounded-lg border border-slate-100">
                  <div>
                    <span className="text-slate-400 block text-[8px] uppercase font-bold">Customer</span>
                    <strong className="text-slate-800">Rajesh Sharma</strong>
                    <div className="text-slate-500 text-[9px]">+91 98765 12340</div>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[8px] uppercase font-bold">Vehicle</span>
                    <strong className="text-slate-800">Hyundai Creta</strong>
                    <div className="text-slate-500 text-[9px]">GJ 01 AB 1234</div>
                  </div>
                </div>

                {/* Items Breakdown Table */}
                <div className="space-y-1.5 text-[10px]">
                  <div className={`px-2.5 py-1 rounded font-bold text-[9px] flex justify-between ${selectedTheme.preview.titleBg}`}>
                    <span>SERVICE / SPARE ITEM</span>
                    <span>AMOUNT</span>
                  </div>
                  <div className="px-2.5 py-1 flex justify-between text-slate-700 text-[10px] border-b border-slate-100">
                    <span>Periodic Service & Diagnostics</span>
                    <span className="font-semibold">₹1,450.00</span>
                  </div>
                  <div className="px-2.5 py-1 flex justify-between text-slate-700 text-[10px] border-b border-slate-100">
                    <span>Engine Oil Synthetic 5W30 (3.5L)</span>
                    <span className="font-semibold">₹1,650.00</span>
                  </div>
                  <div className="px-2.5 py-1 flex justify-between text-slate-700 text-[10px]">
                    <span>GST (SGST 9% + CGST 9%)</span>
                    <span className="font-semibold">₹350.00</span>
                  </div>
                </div>

                {/* Bottom QR & Grand Total */}
                <div className="pt-2 border-t border-slate-200 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 bg-slate-900 text-white rounded-lg flex flex-col items-center justify-center text-[7px] font-bold p-1 leading-none shadow-xs">
                      <FaQrcode className="text-base" />
                    </div>
                    <div className="text-[9px] text-slate-500 leading-tight">
                      <strong className="text-slate-800 block text-[10px]">{selectedTheme.preview.qrText}</strong>
                      Instant UPI Payment
                    </div>
                  </div>
                  <div className={`px-3 py-1.5 rounded-xl font-bold font-black text-xs shadow-xs ${selectedTheme.preview.totalBg}`}>
                    TOTAL: {selectedTheme.preview.sampleTotal}
                  </div>
                </div>
              </div>

              {/* Highlights below preview */}
              <div className="grid grid-cols-2 gap-2 text-center text-[10px] text-slate-600 pt-1">
                <div className="bg-slate-50 p-2 rounded-xl border border-slate-100">
                  <span className="text-primary font-bold block">✓ 1-Click WhatsApp PDF</span>
                  Instant share with customer
                </div>
                <div className="bg-slate-50 p-2 rounded-xl border border-slate-100">
                  <span className="text-primary font-bold block">✓ Custom Garage Logo</span>
                  Signature & bank details included
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

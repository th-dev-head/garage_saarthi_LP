"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRight, FaTruck, FaFileInvoiceDollar, FaBuilding, FaCheckCircle } from "react-icons/fa";
import { FRONTEND_URL } from "@/src/config/env";
import PlayStoreBadge from "../../common/PlayStoreBadge";
import AppStoreBadge from "../../common/AppStoreBadge";
import { trackEvent } from "@/src/utils/pixel";

export default function VMHero() {
  const handleTrialClick = () => {
    trackEvent("vendor_management_feature_trial_cta_click", {
      page_path: "/features/vendor-management/",
      cta_location: "hero",
      cta_label: "Start 7-Day Free Trial",
      destination: `${FRONTEND_URL}/register`,
    });
    window.open(`${FRONTEND_URL}/register`, "_blank");
  };

  return (
    <section className="relative pt-48 pb-24 md:pt-45 md:pb-32 px-4 lg:px-15 2xl:px-50 bg-gradient-to-br from-slate-900 via-slate-800 to-orange-950 text-white overflow-hidden flex justify-center">
      {/* Decorative Blobs */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Hero Text */}
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest bg-orange-600/30 text-orange-400 px-3 py-1.5 rounded-full border border-orange-500/20 font-semibold mb-2 inline-block">
              Spare Parts Procurement &amp; Vendor Ledger
            </span>
            <h1 className="text-2xl md:text-4xl font-bold tracking-tight leading-tight">
              Vendor &amp; Supplier{" "}
              <span className="relative inline-block">
                Management Software
                <span className="absolute -bottom-2 left-0 w-full h-[4px] rounded-full bg-[linear-gradient(90deg,#B02E0C_0%,#FF643C_100%)]" />
              </span>
            </h1>
            <p className="text-slate-300 text-sm md:text-base max-w-xl leading-relaxed">
              Track spare parts purchases, manage vendor payments, monitor live outstanding balances, and generate audit-ready supplier ledgers and statement exports with zero paperwork confusion.
            </p>

            <div className="flex flex-wrap gap-4 items-center pt-4">
              <button
                onClick={handleTrialClick}
                className="rounded-full px-6 py-3 text-base font-bold text-white shadow-lg bg-[linear-gradient(92.52deg,#B22F0E_2.1%,#D73D17_105.99%)] hover:opacity-95 active:scale-[0.98] cursor-pointer inline-flex items-center justify-center gap-2"
              >
                Start 7-Day Free Trial
                <FaArrowRight className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-4">
                <PlayStoreBadge />
                <AppStoreBadge />
              </div>
            </div>
          </div>

          {/* Right Column: Glassmorphism Vendor Card */}
          <div className="flex justify-center md:justify-end w-full">
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl w-full max-w-[340px] lg:max-w-md">
              <div className="flex justify-between items-center pb-4 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold text-white">Live Supplier Statement</span>
                </div>
                <span className="text-[10px] text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded font-mono font-bold border border-amber-500/20">
                  GST Verified
                </span>
              </div>

              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] text-slate-400 block mb-0.5">SUPPLIER</span>
                      <span className="text-sm font-bold text-white block">Metro Auto Spares &amp; Lubricants</span>
                    </div>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-semibold">
                      Active Vendor
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-mono block mt-1">
                    GSTIN: 24AAACM8821F1Z8 • Surat
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/5 p-3.5 rounded-xl border border-white/5">
                    <span className="text-[10px] text-slate-400 block">Total Purchases</span>
                    <span className="text-sm font-bold text-white">₹2,45,000</span>
                    <span className="text-[9px] text-slate-400">18 Invoices</span>
                  </div>
                  <div className="bg-white/5 p-3.5 rounded-xl border border-white/5">
                    <span className="text-[10px] text-slate-400 block">Total Paid</span>
                    <span className="text-sm font-bold text-emerald-400">₹2,02,150</span>
                    <span className="text-[9px] text-emerald-300">Bank &amp; UPI</span>
                  </div>
                </div>

                <div className="bg-rose-500/10 p-3.5 rounded-xl border border-rose-500/20 flex justify-between items-center">
                  <div>
                    <span className="text-[10px] text-rose-300 block font-semibold">CURRENT OUTSTANDING</span>
                    <span className="text-base font-black text-rose-400">₹42,850</span>
                  </div>
                  <span className="text-[10px] bg-rose-500/20 text-rose-200 px-2.5 py-1 rounded font-bold">
                    Pay Now
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

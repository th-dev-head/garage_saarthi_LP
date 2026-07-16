import React from "react";
import Link from "next/link";
import { FaArrowRight, FaBoxes, FaMobileAlt, FaList, FaWarehouse } from "react-icons/fa";
import Button from "../common/Button";
import { FRONTEND_URL } from "@/src/config/env";
import { trackEvent } from "@/src/utils/pixel";
import PlayStoreBadge from "../common/PlayStoreBadge";

export default function GIHero() {
  const handleTrialClick = () => {
    trackEvent("inventory_trial_cta_click", {
      page_path: "/solutions/garage-inventory-software",
      cta_location: "hero",
      cta_label: "Start 7-Day Free Trial",
      destination: `${FRONTEND_URL}/signup`,
      keyword_page_topic: "garage_inventory_software"
    });
    window.open(`${FRONTEND_URL}/signup`, "_blank");
  };

  const handleExploreClick = () => {
    trackEvent("inventory_feature_click", {
      page_path: "/solutions/garage-inventory-software",
      cta_location: "hero",
      cta_label: "Explore Inventory Features",
      feature_name: "Inventory Features",
      keyword_page_topic: "garage_inventory_software"
    });
  };

  return (
    <section className="relative pt-48 pb-24 md:pt-56 md:pb-32 lg:pt-60 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-orange-950 text-white overflow-hidden flex justify-center">
      {/* Decorative Blobs */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-full lg:max-w-6xl w-full relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <span className="text-xs uppercase tracking-widest bg-orange-600/30 text-orange-400 px-3 py-1.5 rounded-full border border-orange-500/20 font-semibold mb-6 inline-block">
            Inventory & Stock
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            Garage Inventory Software for Smarter Spare Parts Management
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
            Manage spare parts, workshop stock, and automotive inventory from a centralized system. Connect stock records with daily garage operations and billing automatically.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-start items-center">
            <Button
              variant="trial"
              onClick={handleTrialClick}
              icon={<FaArrowRight className="w-3.5 h-3.5" />}
              className="w-full sm:w-auto"
            >
              Start 7-Day Free Trial
            </Button>
            <Link
              href="#inventory-features"
              onClick={handleExploreClick}
              className="rounded-full border border-white/30 bg-white/5 hover:bg-white/10 text-white px-8 py-3 text-sm font-semibold transition-all duration-200 flex items-center justify-center cursor-pointer w-full sm:w-auto whitespace-nowrap h-11 text-center"
            >
              Explore Inventory Features
            </Link>
            <PlayStoreBadge />
          </div>
        </div>

        {/* Right UI Preview Card */}
        <div className="relative flex justify-center md:justify-end">
          <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl max-w-lg w-full relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[4px] bg-[linear-gradient(90deg,#B02E0C_0%,#FF643C_100%)]" />

            {/* Header */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" />
                <span className="text-xs font-bold text-slate-200 uppercase tracking-wide">
                  Inventory Insights
                </span>
              </div>
              <span className="text-[9px] font-extrabold text-green-400 bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded-full uppercase tracking-wider">
                Live Sync
              </span>
            </div>

            {/* Total Valuation Card */}
            <div className="text-center mb-6 bg-white/[0.02] border border-white/5 rounded-2xl p-5 shadow-inner">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                Total Stock Valuation
              </span>
              <span className="text-3xl font-black text-white bg-gradient-to-r from-orange-400 to-[#FF643C] bg-clip-text text-transparent">
                ₹4,82,900.00
              </span>
              <div className="mt-2 text-[9px] text-green-400 font-semibold flex items-center justify-center gap-1">
                <span>▲ +12.4% vs last month</span>
              </div>
            </div>

            {/* Progress Bars for Categories */}
            <div className="space-y-4 mb-6">
              <span className="text-[10px] uppercase font-extrabold text-slate-400 tracking-wider block">
                Category Stock Allocation
              </span>

              <div className="space-y-1.5">
                <div className="flex justify-between text-[11px] text-slate-300 font-semibold">
                  <span>Engine Oils & Lubricants</span>
                  <span className="text-slate-100">65% (₹3,13,885)</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-2.5 overflow-hidden border border-white/5 p-0.5">
                  <div className="bg-[linear-gradient(90deg,#B02E0C_0%,#FF643C_100%)] h-full rounded-full" style={{ width: "65%" }} />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-[11px] text-slate-300 font-semibold">
                  <span>Brake Pads & Assemblies</span>
                  <span className="text-slate-100">40% (₹1,93,160)</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-2.5 overflow-hidden border border-white/5 p-0.5">
                  <div className="bg-[linear-gradient(90deg,#B02E0C_0%,#FF643C_100%)] h-full rounded-full" style={{ width: "40%" }} />
                </div>
              </div>
            </div>

            {/* Quick Metrics Flex Container */}
            <div className="flex justify-between items-center  text-center">
              <div className="flex-1">
                <span className="block text-base font-black text-slate-100">1,240</span>
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wide">Active SKUs</span>
              </div>
              <div className="flex-1 border-x border-white/10">
                <span className="block text-base font-black text-orange-400">05</span>
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wide">Low Stock</span>
              </div>
              <div className="flex-1">
                <span className="block text-base font-black text-slate-100">14</span>
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wide">Suppliers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

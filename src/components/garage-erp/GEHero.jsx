import React from "react";
import Link from "next/link";
import { FaArrowRight, FaTools } from "react-icons/fa";
import { FRONTEND_URL } from "@/src/config/env";
import { trackEvent } from "@/src/utils/pixel";
import PlayStoreBadge from "../common/PlayStoreBadge";

export default function GEHero() {
  const handleTrialClick = () => {
    trackEvent("trial_cta_click", {
      page_path: "/solutions/garage-erp-software",
      page_name: "garage_erp_software",
      cta_location: "hero",
      cta_label: "Start 7-Day Free Trial",
      destination: `${FRONTEND_URL}/signup`
    });
    window.open(`${FRONTEND_URL}/signup`, "_blank");
  };

  const handleExploreClick = () => {
    trackEvent("feature_click", {
      page_path: "/solutions/garage-erp-software",
      page_name: "garage_erp_software",
      cta_location: "hero",
      cta_label: "Explore ERP Features",
      feature_name: "ERP Features"
    });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-orange-950 text-white py-24 md:py-32 px-4 flex justify-center">
      {/* Decorative Blobs */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-full lg:max-w-6xl w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <span className="text-xs uppercase tracking-widest text-primary font-bold bg-[#EFE9E7] text-slate-800 px-3 py-1 rounded-full inline-block mb-6">
            Workshop ERP
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            Garage ERP Software to Manage Workshop Operations
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
            Connect your workshop floor job cards, spare parts inventory, CRM leads, employee schedules, payments billing, and multi-branch networks into one unified dashboard.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-start items-center">
            <button
              onClick={handleTrialClick}
              className="rounded-full bg-primary hover:bg-primary-hover text-white px-8 py-3 text-sm font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-lg w-full sm:w-auto justify-center"
            >
              Start 7-Day Free Trial
              <FaArrowRight className="w-3.5 h-3.5" />
            </button>
            <Link
              href="#garage-erp-modules"
              onClick={handleExploreClick}
              className="rounded-full border border-white/30 bg-white/5 hover:bg-white/10 text-white px-8 py-3 text-sm font-semibold transition-all duration-200 flex items-center justify-center cursor-pointer w-full sm:w-auto whitespace-nowrap h-11 text-center"
            >
              Explore ERP Features
            </Link>
            <PlayStoreBadge />
          </div>
        </div>

        {/* Right UI Preview Column */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-3xl shadow-2xl max-w-lg w-full relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[4px] bg-[linear-gradient(90deg,#B02E0C_0%,#FF643C_100%)]" />
            <div className="flex items-center gap-2 pb-4 border-b border-white/10 mb-4">
              <FaTools className="text-primary w-4 h-4" />
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wide">
                Workshop ERP Operations
              </span>
            </div>

            <div className="space-y-3.5 text-xs">
              <div className="bg-white/5 p-3 rounded-xl border border-white/5 flex justify-between items-center text-slate-300">
                <span>Active Job Cards</span>
                <span className="font-bold text-white">12 Pending</span>
              </div>
              <div className="bg-white/5 p-3 rounded-xl border border-white/5 flex justify-between items-center text-slate-300">
                <span>Low Stock Spare Parts</span>
                <span className="font-bold text-orange-400">4 Items</span>
              </div>
              <div className="bg-white/5 p-3 rounded-xl border border-white/5 flex justify-between items-center text-slate-300">
                <span>Active Branches</span>
                <span className="font-bold text-green-400">3 Locations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

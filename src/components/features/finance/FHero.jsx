import React from "react";
import Link from "next/link";
import { FaArrowRight, FaWallet } from "react-icons/fa";
import { FRONTEND_URL } from "@/src/config/env";
import PlayStoreBadge from "../../common/PlayStoreBadge";
import { trackEvent } from "@/src/utils/pixel";

const fHeroBlocks = [
  { label: "DAILY REVENUE", title: "₹48,500.00 Collected Today", titleClass: "text-xs font-bold text-emerald-400 block" },
  { label: "EXPENSES & PARTS PURCHASE", title: "₹18,200.00 Paid to Vendors", titleClass: "text-xs font-bold text-rose-400 block" },
  { label: "NET PROFIT MARGIN", title: "₹30,300.00 Net Daily Profit ✅", titleClass: "text-xs text-amber-400 font-semibold block" }
];

export default function FHero() {
  const handleTrialClick = () => {
    trackEvent("finance_management_feature_trial_cta_click", {
      page_path: "/features/finance",
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
          {/* Hero Left Info */}
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest bg-orange-600/30 text-orange-400 px-3 py-1.5 rounded-full border border-orange-500/20 font-semibold mb-2 inline-block">
              Garage Finance Management
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Real-Time Workshop Cash Flow &{" "}
              <span className="relative inline-block">
                Profit Tracker
                <span className="absolute -bottom-2 left-0 w-full h-[4px] rounded-full bg-[linear-gradient(90deg,#B02E0C_0%,#FF643C_100%)]" />
              </span>
            </h1>
            <p className="text-slate-300 text-sm md:text-base max-w-xl leading-relaxed">
              Track daily counter cash, UPI digital payments, vendor credit dues, mechanics labor payouts, and net profit margins in real time with GarageSaarthi.
            </p>

            <div className="flex flex-wrap gap-4 items-center pt-4">
              <button
                onClick={handleTrialClick}
                className="rounded-full px-6 py-3 text-base font-bold text-white shadow-lg bg-[linear-gradient(92.52deg,#B22F0E_2.1%,#D73D17_105.99%)] hover:opacity-95 active:scale-[0.98] cursor-pointer inline-flex items-center justify-center gap-2"
              >
                Start 7-Day Free Trial
                <FaArrowRight className="w-4 h-4" />
              </button>
              <PlayStoreBadge />
            </div>
          </div>

          {/* Hero Right Visual Column */}
          <div className="flex justify-center md:justify-end w-full">
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl w-full max-w-[340px] lg:max-w-md">
              <div className="flex justify-between items-center pb-4 mb-4 border-b border-white/10">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <FaWallet className="text-amber-400 w-4 h-4" /> Financial Summary
                </span>
                <span className="text-[10px] text-green-400 bg-green-500/10 px-2 py-0.5 rounded font-semibold">Live Real-Time</span>
              </div>
              <div className="space-y-4">
                {fHeroBlocks.map((block, idx) => (
                  <div key={idx} className="bg-white/5 p-4 rounded-xl border border-white/5">
                    <span className="text-[10px] text-slate-400 block mb-0.5">{block.label}</span>
                    <span className={block.titleClass || "text-sm font-bold text-white"}>{block.title}</span>
                    {block.sub && <span className="text-[10px] text-slate-300 block mt-0.5">{block.sub}</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

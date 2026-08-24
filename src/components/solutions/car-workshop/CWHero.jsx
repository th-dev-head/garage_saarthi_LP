"use client";

import React from "react";
import Link from "next/link";
import PlayStoreBadge from "../../common/PlayStoreBadge";
import AppStoreBadge from "../../common/AppStoreBadge";
import { FaArrowRight } from "react-icons/fa";
import Button from "../../common/Button";
import { FRONTEND_URL } from "@/src/config/env";
import { trackEvent } from "@/src/utils/pixel";

export default function CWHero() {
  const handleTrialClick = () => {
    trackEvent("trial_cta_click", {
      page_path: "/solutions/car-workshop-software/",
      cta_location: "hero",
      cta_label: "Start 7-Day Free Trial",
      destination: `${FRONTEND_URL}/signup`
    });
    window.open(`${FRONTEND_URL}/signup`, "_blank");
  };

  const handleAndroidClick = () => {
    trackEvent("android_download_click", {
      page_path: "/solutions/car-workshop-software/",
      cta_location: "hero",
      cta_label: "Download Android App"
    });
  };

  return (
    <section className="relative pt-48 pb-24 md:pt-45 md:pb-32 px-4 lg:px-15 2xl:px-50 bg-gradient-to-br from-slate-900 via-slate-800 to-orange-950 text-white overflow-hidden flex justify-center">
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-full lg:max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
          <span className="text-xs uppercase tracking-widest bg-orange-600/30 text-orange-400 px-3 py-1.5 rounded-full border border-orange-500/20 font-semibold mb-6 inline-block">
            Auto Repair Solutions
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            Car Workshop Software to Manage Your Entire Workshop
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8 max-w-2xl">
            Manage digital job cards, vehicle service history, spare parts stock, billing, and automated WhatsApp reminders. Designed for multi-brand car workshops in India.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full sm:w-auto items-center">
            <Button variant="trial" onClick={handleTrialClick} icon={<FaArrowRight className="w-3.5 h-3.5" />} className="w-full sm:w-auto">
              Start 7-Day Free Trial
            </Button>
            <div className="flex items-center gap-4">
<PlayStoreBadge />
<AppStoreBadge />
</div>
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center">
          <div className="bg-slate-800/80 border border-slate-700/50 rounded-3xl p-6 shadow-2xl w-full max-w-md relative overflow-hidden backdrop-blur-sm">
            <div className="flex items-center justify-between border-b border-slate-700/50 pb-4 mb-4">
              <span className="text-xs font-bold text-slate-400">Workshop Dashboard</span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <div className="space-y-4">
              <div className="bg-slate-900/50 rounded-2xl p-4 border border-slate-700/30">
                <p className="text-xs text-slate-400">Active Job Cards</p>
                <p className="text-2xl font-bold text-emerald-400 mt-1">18 Cars</p>
              </div>
              <div className="bg-slate-900/50 rounded-2xl p-4 border border-slate-700/30">
                <p className="text-xs text-slate-400">Pending Dues</p>
                <p className="text-2xl font-bold text-amber-400 mt-1">₹34,500</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

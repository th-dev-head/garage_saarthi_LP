"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRight, FaShieldAlt, FaFileInvoiceDollar, FaUserTie, FaCheckCircle, FaCarCrash } from "react-icons/fa";
import { FRONTEND_URL } from "@/src/config/env";
import PlayStoreBadge from "../../common/PlayStoreBadge";
import AppStoreBadge from "../../common/AppStoreBadge";
import { trackEvent } from "@/src/utils/pixel";

export default function IMHero() {
  const handleTrialClick = () => {
    trackEvent("insurance_feature_trial_cta_click", {
      page_path: "/features/insurance-management/",
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
              Bodyshop &amp; Accidental Claims
            </span>
            <h1 className="text-2xl md:text-4xl font-bold tracking-tight leading-tight">
              Garage Insurance &amp; Cashless{" "}
              <span className="relative inline-block">
                Claim Management
                <span className="absolute -bottom-2 left-0 w-full h-[4px] rounded-full bg-[linear-gradient(90deg,#B02E0C_0%,#FF643C_100%)]" />
              </span>
            </h1>
            <p className="text-slate-300 text-sm md:text-base max-w-xl leading-relaxed">
              Streamline accidental job cards, surveyor coordination, estimate approvals, depreciation calculations, and insurance company payment reconciliations. Eliminate paperwork delays and get claim payouts faster.
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

          {/* Hero Right Visual Column */}
          <div className="flex justify-center md:justify-end w-full">
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl w-full max-w-[340px] lg:max-w-md">
              <div className="flex justify-between items-center pb-4 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <FaShieldAlt className="text-amber-400 text-sm" />
                  <span className="text-xs font-bold text-white">ICICI Lombard Cashless Claim</span>
                </div>
                <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded font-semibold border border-emerald-500/20">
                  Approved &bull; ₹64,200
                </span>
              </div>
              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] text-slate-400 block mb-0.5">CLAIM NO: #CLM-2026-9041</span>
                      <span className="text-sm font-bold text-white block">MH 02 CK 9821 • Creta 1.5</span>
                    </div>
                    <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded font-semibold">
                      Spot Survey Done
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-300 block mt-1">Surveyor: Rajesh Mehta (+91 98200 44551)</span>
                </div>

                <div className="bg-white/5 p-4 rounded-xl border border-white/5 grid grid-cols-2 gap-3">
                  <div>
                    <span className="text-[10px] text-slate-400 block">INSURANCE SHARE</span>
                    <span className="text-sm font-bold text-emerald-400">₹56,400</span>
                    <span className="text-[9px] text-slate-400">Cashless Direct Payout</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">CUSTOMER LIABILITY</span>
                    <span className="text-sm font-bold text-amber-400">₹7,800</span>
                    <span className="text-[9px] text-slate-400">Compulsory + Salvage</span>
                  </div>
                </div>

                <div className="bg-white/5 p-3.5 rounded-xl border border-white/5 flex justify-between items-center text-xs">
                  <span className="text-slate-300 text-[11px] flex items-center gap-1.5">
                    <FaCheckCircle className="text-emerald-400" /> Documents: 6/6 Uploaded
                  </span>
                  <span className="text-[10px] text-amber-400 font-semibold">Repairs in Bay 3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

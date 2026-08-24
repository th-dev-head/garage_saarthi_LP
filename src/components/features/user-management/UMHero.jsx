"use client";

import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FRONTEND_URL } from "@/src/config/env";
import PlayStoreBadge from "../../common/PlayStoreBadge";
import AppStoreBadge from "../../common/AppStoreBadge";
import { trackEvent } from "@/src/utils/pixel";

export default function UMHero() {
  const handleTrialClick = () => {
    trackEvent("user_management_trial_cta_click", {
      page_path: "/features/user-management/",
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
              Staff & User Access Control
            </span>
            <h1 className="text-2xl md:text-4xl font-bold tracking-tight leading-tight">
              Workshop User Management &{" "}
              <span className="relative inline-block">
                Staff Login Control
                <span className="absolute -bottom-2 left-0 w-full h-[4px] rounded-full bg-[linear-gradient(90deg,#B02E0C_0%,#FF643C_100%)]" />
              </span>
            </h1>
            <p className="text-slate-300 text-sm md:text-base max-w-xl leading-relaxed">
              Protect your garage financial data, eliminate billing leaks, and restrict sensitive report views. Assign customized role permissions to mechanics, advisors, cashiers, and administrators.
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
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl w-full max-w-[340px] lg:max-w-md space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-white/10">
                <span className="text-xs font-bold text-white">Access Permissions Editor</span>
                <span className="text-[10px] text-green-400 bg-green-500/10 px-2 py-0.5 rounded font-semibold">Active</span>
              </div>
              <div className="space-y-3 text-xs">
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <span>Admin Dashboard Access</span>
                  <span className="text-green-400 font-bold">Enabled</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <span>View Net Profit &amp; Reports</span>
                  <span className="text-orange-400 font-bold">Owner Only</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <span>Delete Invoices &amp; Bills</span>
                  <span className="text-red-400 font-bold">Disabled for Staff</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

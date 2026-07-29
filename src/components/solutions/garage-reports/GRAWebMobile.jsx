"use client";

import React from "react";
import GradientUnderline from "../../common/GradientUnderline";
import PlayStoreBadge from "../../common/PlayStoreBadge";
import Button from "../../common/Button";
import { FRONTEND_URL } from "@/src/config/env";
import { trackEvent } from "@/src/utils/pixel";

const mobileReportPreviewItems = [
  { label: "Today's Total Cash Collections", value: "₹28,500 (12 Job Cards)", valClass: "text-slate-800", badgeText: "Live" },
  { label: "Monthly Profit Overview", value: "₹1,42,800 Net Profit", valClass: "text-primary", badgeText: "Updated" }
];

export default function GRAWebMobile() {
  const handleTrialClick = () => {
    trackEvent("reports_trial_cta_click", {
      page_path: "/solutions/garage-reports-analytics-software",
      cta_location: "web_mobile_section",
      cta_label: "Start Free Trial",
      destination: `${FRONTEND_URL}/signup`
    });
    window.open(`${FRONTEND_URL}/signup`, "_blank");
  };

  const handleAndroidClick = () => {
    trackEvent("reports_android_download_click", {
      page_path: "/solutions/garage-reports-analytics-software",
      cta_location: "web_mobile_section",
      cta_label: "Download Android App"
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Cloud Sync
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Access Garage Reports on <GradientUnderline>Web and Mobile</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            GarageSaarthi is a cloud-based reporting system. View invoice stats on your browser dashboard or check active repair card counts from the Android application on the road.
          </p>
          <div className="flex flex-wrap gap-4 items-center pt-4">
            <Button variant="trial" onClick={handleTrialClick}>
              Start Free Trial
            </Button>
            <div onClick={handleAndroidClick}>
              <PlayStoreBadge />
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 bg-white border border-slate-200/80 rounded-3xl p-5 shadow-lg shadow-slate-100 space-y-4">
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-xs font-bold text-slate-800">Mobile Reports & Analytics</span>
            </div>
            <div className="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2.5 py-1 rounded-lg border border-emerald-200/60">
              📱 Android Live
            </div>
          </div>

          {/* Mobile Metrics Preview */}
          <div className="space-y-2.5">
            {mobileReportPreviewItems.map((item, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">{item.label}</p>
                  <p className={`text-sm font-extrabold mt-0.5 ${item.valClass}`}>{item.value}</p>
                </div>
                <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">{item.badgeText}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
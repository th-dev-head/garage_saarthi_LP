import React from "react";
import GradientUnderline from "../../common/GradientUnderline";
import PlayStoreBadge from "../../common/PlayStoreBadge";
import Button from "../../common/Button";
import { FRONTEND_URL } from "@/src/config/env";
import { trackEvent } from "@/src/utils/pixel";

const historySyncPlatforms = [
  { icon: "💻", title: "Web Portal (Front Office)", desc: "Invoicing & Detailed History Check", badgeText: "Synced" },
  { icon: "📱", title: "Android App (Bay Mechanic)", desc: "Quick Vehicle History & Check-In", badgeText: "Synced" }
];

export default function VSHWebMobile() {
  const handleTrialClick = () => {
    trackEvent("trial_cta_click", {
      page_path: "/solutions/vehicle-service-history-software",
      cta_location: "web_mobile_section",
      cta_label: "Start 7-Day Free Trial",
      destination: `${FRONTEND_URL}/signup`
    });
    window.open(`${FRONTEND_URL}/signup`, "_blank");
  };

  const handleAndroidClick = () => {
    trackEvent("android_download_click", {
      page_path: "/solutions/vehicle-service-history-software",
      cta_location: "web_mobile_section",
      cta_label: "Download Android App"
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 bg-white border border-slate-200/80 rounded-3xl p-5 shadow-lg shadow-slate-100 space-y-4">
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-xs font-bold text-slate-800">Cloud Sync Active</span>
            </div>
            <div className="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2.5 py-1 rounded-lg border border-emerald-200/60">
              ⚡ Live Cross-Device
            </div>
          </div>

          {/* Sync Platform Cards Mockup */}
          <div className="space-y-2.5">
            {historySyncPlatforms.map((plat, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-lg">{plat.icon}</span>
                  <div>
                    <p className="text-xs font-bold text-slate-800">{plat.title}</p>
                    <p className="text-[10px] text-slate-500">{plat.desc}</p>
                  </div>
                </div>
                <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">{plat.badgeText}</span>
              </div>
            ))}
          </div>

          {/* Live Sync Footer */}
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-[10px] text-slate-500">
            <span>🔄 <strong className="text-slate-800">Auto-Sync Enabled</strong></span>
            <span className="text-emerald-600 font-bold">100% Uptime</span>
          </div>
        </div>
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Platform Availability
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Manage Vehicle Service History on <GradientUnderline>Web and Mobile</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Mechanics on the bay can check previous service details on the Android mobile application, while the front office accesses the complete web dashboard for invoicing. All inputs sync in real-time.
          </p>
          <div className="flex flex-wrap gap-4 items-center pt-4">
            <Button variant="trial" onClick={handleTrialClick}>
              Start 7-Day Free Trial
            </Button>
            <div onClick={handleAndroidClick}>
              <PlayStoreBadge />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
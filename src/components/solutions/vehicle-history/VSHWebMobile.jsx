import React from "react";
import PlayStoreBadge from "../../common/PlayStoreBadge";
import Button from "../../common/Button";
import { FRONTEND_URL } from "@/src/config/env";
import { trackEvent } from "@/src/utils/pixel";

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
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center border-b border-slate-200/60">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 bg-slate-100 rounded-3xl overflow-hidden aspect-[4/3] flex items-center justify-center border border-slate-200">
          <div className="text-center space-y-2">
            <span className="text-4xl">💻</span>
            <p className="text-xs font-bold text-slate-600">Cloud Sync Active</p>
            <p className="text-[10px] text-slate-400">Manage histories on Web and Mobile App</p>
          </div>
        </div>
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Platform Availability
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Manage Vehicle Service History on Web and Mobile
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
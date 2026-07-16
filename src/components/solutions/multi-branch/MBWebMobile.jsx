import React from "react";
import PlayStoreBadge from "../../common/PlayStoreBadge";
import Button from "../../common/Button";
import { FRONTEND_URL } from "@/src/config/env";
import { trackEvent } from "@/src/utils/pixel";
import GradientUnderline from "../../common/GradientUnderline";

export default function MBWebMobile() {
  const handleTrialClick = () => {
    trackEvent("multi_branch_trial_cta_click", {
      page_path: "/solutions/multi-branch-garage-software",
      cta_location: "web_mobile_section",
      cta_label: "Start 7-Day Free Trial",
      destination: `${FRONTEND_URL}/signup`
    });
    window.open(`${FRONTEND_URL}/signup`, "_blank");
  };

  const handleAndroidClick = () => {
    trackEvent("android_download_click", {
      page_path: "/solutions/multi-branch-garage-software",
      cta_location: "web_mobile_section",
      cta_label: "Download Android App"
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 shadow-sm aspect-[4/3] flex items-center justify-center">
          <div className="text-center space-y-2">
            <span className="text-4xl">📱</span>
            <p className="text-xs font-bold text-slate-600">Central Cloud Sync</p>
            <p className="text-[10px] text-slate-400">Access data via web browser and Android app</p>
          </div>
        </div>
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Cloud Platform
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Access Your Multi-Location Garage Software on <GradientUnderline>Web and Mobile</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Manage your garage business from anywhere. Whether checking reports on your browser dashboard or reviewing active job card queues on the Android mobile app, all entries are stored safely in a central cloud database.
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
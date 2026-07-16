import React from "react";
import GradientUnderline from "../../common/GradientUnderline";
import PlayStoreBadge from "../../common/PlayStoreBadge";
import { trackEvent } from "@/src/utils/pixel";

export default function SRApp() {
  const handleAndroidClick = () => {
    trackEvent("android_download_click", {
      page_path: "/solutions/service-reminder-software",
      cta_location: "app_section",
      cta_label: "Download GarageSaarthi on Android"
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Mobile Access
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Manage Service Reminders with the <GradientUnderline>GarageSaarthi App</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Access due service alerts directly from your smartphone. Staff can log comments, set call back dates, and review customer files on the go. Available for web and Android devices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start pt-4">
            <div onClick={handleAndroidClick}>
              <PlayStoreBadge />
            </div>
            <a href="https://app.garagesaarthi.com/register" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 px-8 py-3 text-sm font-semibold transition-all duration-200 flex items-center justify-center cursor-pointer h-11">
              Use GarageSaarthi on Web
            </a>
          </div>
        </div>
        <div className="lg:col-span-5 bg-slate-200 rounded-3xl overflow-hidden aspect-[4/3] flex items-center justify-center p-8 border border-slate-300/50">
          <div className="text-center space-y-2">
            <span className="text-4xl">📱</span>
            <p className="text-xs font-bold text-slate-600">GarageSaarthi Android Interface</p>
            <p className="text-[10px] text-slate-400">View & call due customers from your phone</p>
          </div>
        </div>
      </div>
    </section>
  );
}
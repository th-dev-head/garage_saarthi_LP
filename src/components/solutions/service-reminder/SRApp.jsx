import React from "react";
import GradientUnderline from "../../common/GradientUnderline";
import PlayStoreBadge from "../../common/PlayStoreBadge";
import { trackEvent } from "@/src/utils/pixel";
import { FRONTEND_URL } from "@/src/config/env";
import Link from "next/link";

const todayRemindersList = [
  { name: "Rajesh Patel (GJ05AB1234)", details: "Hyundai i20 • Periodic Oil Service Due" },
  { name: "Ankit Verma (GJ09BK0001)", details: "Maruti Baleno • Wheel Alignment Due" },
  { name: "Vikram Shah (GJ01CD5678)", details: "Honda City • Brake Inspection Due" }
];

export default function SRApp() {
  const handleAndroidClick = () => {
    trackEvent("android_download_click", {
      page_path: "/solutions/service-reminder-software",
      cta_location: "app_section",
      cta_label: "Download GarageSaarthi on Android"
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
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
            <Link href={`${FRONTEND_URL}/register`} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 px-8 py-3 text-sm font-semibold transition-all duration-200 flex items-center justify-center cursor-pointer h-11">
              Use GarageSaarthi on Web
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 bg-white border border-slate-200/80 rounded-3xl p-5 shadow-lg shadow-slate-100 space-y-4">
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-xs font-bold text-slate-800">GarageSaarthi Mobile App</span>
            </div>
            <div className="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2.5 py-1 rounded-lg border border-emerald-200/60">
              📱 Android & Web Sync
            </div>
          </div>

          {/* Mobile App Reminder List Mockup */}
          <div className="space-y-2 pt-1">
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Today's Service Reminders</p>
            {todayRemindersList.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <div>
                  <p className="text-xs font-bold text-slate-800">{item.name}</p>
                  <p className="text-[10px] text-slate-500">{item.details}</p>
                </div>
                <span className="text-[10px] font-bold bg-green-500 text-white px-2.5 py-1 rounded-lg flex items-center gap-1 cursor-pointer">
                  WhatsApp
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
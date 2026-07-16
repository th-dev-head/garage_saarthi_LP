import React from "react";
import { FaLaptop, FaAndroid, FaCloud, FaArrowRight } from "react-icons/fa";
import Button from "../../common/Button";
import { FRONTEND_URL } from "@/src/config/env";
import { trackEvent } from "@/src/utils/pixel";
import PlayStoreBadge from "../../common/PlayStoreBadge";
import GradientUnderline from "../../common/GradientUnderline";

export default function GIAccess() {
  const handleTrialClick = () => {
    trackEvent("inventory_trial_cta_click", {
      page_path: "/solutions/garage-inventory-software",
      cta_location: "web_mobile_section",
      cta_label: "Start 7-Day Free Trial",
      destination: `${FRONTEND_URL}/signup`,
      keyword_page_topic: "garage_inventory_software"
    });
    window.open(`${FRONTEND_URL}/signup`, "_blank");
  };

  const handleDownloadClick = () => {
    trackEvent("inventory_android_download_click", {
      page_path: "/solutions/garage-inventory-software",
      cta_location: "web_mobile_section",
      cta_label: "Download Android App",
      destination: "Google Play Store Link",
      keyword_page_topic: "garage_inventory_software"
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side Visual Representation */}
        <div className="bg-slate-50 border border-slate-200/80 p-6 md:p-8 rounded-3xl space-y-6 shadow-sm order-2 md:order-1">
          <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wide border-b border-slate-200/60 pb-3 flex items-center gap-2">
            <FaCloud className="text-primary w-4 h-4" />
            Cloud Database Synchronizer
          </h4>

          <div className="space-y-4">
            <div className="flex gap-3 items-center bg-white p-3 rounded-xl border border-slate-200/60 text-xs">
              <FaLaptop className="text-primary w-5 h-5 flex-shrink-0" />
              <div>
                <span className="font-bold text-slate-800 block">Desktop Web Dashboard</span>
                <span className="text-[10px] text-slate-500">Perfect for desk-based billing, supplier check-in logs, and audits.</span>
              </div>
            </div>

            <div className="flex gap-3 items-center bg-white p-3 rounded-xl border border-slate-200/60 text-xs">
              <FaAndroid className="text-green-500 w-5 h-5 flex-shrink-0" />
              <div>
                <span className="font-bold text-slate-800 block">Android Mobile Application</span>
                <span className="text-[10px] text-slate-500">Advisors check items at the vehicle racks and scan stock on-the-go.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Text and CTAs */}
        <div className="order-1 md:order-2">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Cloud Synchronized
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-text-dark mt-4 mb-6 leading-tight">
            Access Garage Inventory on <GradientUnderline>Web and Mobile</GradientUnderline>
          </h2>

          <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed mb-8">
            <p>
              Your stock metrics shouldn't be trapped on a single local computer. GarageSaarthi utilizes a secure, cloud-based network architecture to keep counts updated on both desktops and mobile devices simultaneously.
            </p>
            <p>
              Advisors can scan, search, and assign parts using the live Android application while mechanics perform the physical repair, and the dashboard synchronizes instantly.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Button
              variant="trial"
              onClick={handleTrialClick}
              icon={<FaArrowRight className="w-3.5 h-3.5" />}
              className="w-full sm:w-auto"
            >
              Start 7-Day Free Trial
            </Button>
            <div onClick={handleDownloadClick} className="w-full sm:w-auto">
              <PlayStoreBadge />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


import React from "react";
import Button from "../../common/Button";
import PlayStoreBadge from "../../common/PlayStoreBadge";
import { FaArrowRight } from "react-icons/fa";
import { FRONTEND_URL } from "@/src/config/env";
import { trackEvent } from "@/src/utils/pixel";
import GradientUnderline from "../../common/GradientUnderline";

export default function GPWebMobile() {
  const handleTrialClick = () => {
    trackEvent("payroll_trial_cta_click", {
      page_path: "/solutions/garage-payroll-software",
      cta_location: "web_mobile_section",
      cta_label: "Start 7-Day Free Trial",
      destination: `${FRONTEND_URL}/signup`
    });
    window.open(`${FRONTEND_URL}/signup`, "_blank");
  };

  const handleAndroidClick = () => {
    trackEvent("payroll_android_download_click", {
      page_path: "/solutions/garage-payroll-software",
      cta_location: "web_mobile_section",
      cta_label: "Download Android App"
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 bg-white border border-slate-200/50 rounded-3xl p-6 shadow-sm flex items-center justify-center aspect-[4/3]">
          <div className="text-center space-y-3">
            <span className="text-5xl">💻</span>
            <h3 className="text-base font-bold text-text-dark">Cloud Sync Active</h3>
            <p className="text-xs text-slate-500 max-w-xs">
              Attendance records logged on the Android mobile app sync automatically with the owner's web dashboard payroll workspace.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Mobile Access
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Access Garage Payroll Records on <GradientUnderline>Web and Mobile</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Record employee parameters or verify monthly wage statuses on any screen. GarageSaarthi works as an online payroll app for garage networks, offering a full browser dashboard alongside our specialized Android mobile application.
          </p>
          <p className="text-slate-500 text-xs">
            *Note: The iOS version of the app is coming soon. Web dashboard access works across all mobile browsers.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-center pt-2">
            <Button variant="trial" onClick={handleTrialClick} icon={<FaArrowRight className="w-3.5 h-3.5" />} className="w-full sm:w-auto">
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

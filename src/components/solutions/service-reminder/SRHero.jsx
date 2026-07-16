import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Button from "../../common/Button";
import { FRONTEND_URL } from "@/src/config/env";
import { trackEvent } from "@/src/utils/pixel";
import PlayStoreBadge from "../../common/PlayStoreBadge";

export default function SRHero() {
  const handleTrialClick = () => {
    trackEvent("service_reminder_trial_click", {
      page_path: "/solutions/service-reminder-software",
      cta_location: "hero",
      cta_label: "Start 7-Day Free Trial",
      destination: `${FRONTEND_URL}/signup`
    });
    window.open(`${FRONTEND_URL}/signup`, "_blank");
  };

  const handleFeatureClick = () => {
    trackEvent("service_alert_feature_click", {
      page_path: "/solutions/service-reminder-software",
      cta_location: "hero",
      cta_label: "Explore Service Alerts",
      feature_name: "Service Alerts"
    });
  };

  return (
    <section className="relative pt-48 pb-24 md:pt-56 md:pb-32 lg:pt-60 px-4 lg:px-15 2xl:px-50 bg-gradient-to-br from-slate-900 via-slate-800 to-orange-950 text-white overflow-hidden flex justify-center">
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-full lg:max-w-3xl w-full relative z-10 text-center flex flex-col items-center">
        <span className="text-xs uppercase tracking-widest bg-orange-600/30 text-orange-400 px-3 py-1.5 rounded-full border border-orange-500/20 font-semibold mb-6 inline-block">
          Automated Reminders
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
          Service Reminder Software for Garages and Workshops
        </h1>
        <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
          Track upcoming service due dates, identify next due services, follow up with customers, and send WhatsApp service reminders. Keep your customer and vehicle details connected in one system.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center w-full sm:w-auto">
          <Button variant="trial" onClick={handleTrialClick} icon={<FaArrowRight className="w-3.5 h-3.5" />} className="w-full sm:w-auto">
            Start 7-Day Free Trial
          </Button>
          <a href="/features/service-alerts" onClick={handleFeatureClick} className="rounded-full border border-white/30 bg-white/5 hover:bg-white/10 text-white px-8 py-3 text-sm font-semibold transition-all duration-200 flex items-center justify-center cursor-pointer w-full sm:w-auto whitespace-nowrap h-11 text-center">
            View Service Alerts
          </a>
          <PlayStoreBadge />
        </div>
      </div>
    </section>
  );
}
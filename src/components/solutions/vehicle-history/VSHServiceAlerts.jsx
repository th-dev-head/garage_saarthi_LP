import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { trackEvent } from "@/src/utils/pixel";

export default function VSHServiceAlerts() {
  const handleFeatureClick = () => {
    trackEvent("service_alerts_click", {
      page_path: "/solutions/vehicle-service-history-software",
      cta_location: "service_alerts_section",
      cta_label: "Explore Service Alerts",
      feature_name: "Service Alerts"
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center border-b border-slate-200/60">
      <div className="mx-auto max-w-full lg:max-w-4xl w-full text-center space-y-6">
        <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
          Customer Retention
        </span>
        <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
          Use Vehicle Service Records for Better Service Follow-Ups
        </h2>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          Keeping digital service records makes it easy to schedule next check-ins. GarageSaarthi lets you set automated service alerts and coordinate reminders via WhatsApp template tools. Reduce missed bookings and keep bays busy.
        </p>
        <div className="pt-4 flex justify-center">
          <a href="/features/service-alerts" onClick={handleFeatureClick} className="rounded-full bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 text-sm font-semibold transition-all duration-200 flex items-center justify-center cursor-pointer gap-2">
            Explore Service Alerts <FaChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
import React from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { trackEvent } from "@/src/utils/pixel";
import GradientUnderline from "../../common/GradientUnderline";
import Button from "../../common/Button";

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
    <section className="py-20 px-4 lg:px-15 2xl:px-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-4xl w-full text-center space-y-6">
        <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
          Customer Retention
        </span>
        <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
          Use Vehicle Service Records for Better <GradientUnderline>Service Follow-Ups</GradientUnderline>
        </h2>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          Keeping digital service records makes it easy to schedule next check-ins. GarageSaarthi lets you set automated service alerts and coordinate reminders via WhatsApp template tools. Reduce missed bookings and keep bays busy.
        </p>
        <Link href="/features/service-alerts" onClick={handleFeatureClick} className="pt-4 flex justify-center">
          <Button href="/features/service-alerts" onClick={handleFeatureClick}>
            Explore Service Alerts <FaChevronRight className="w-3.5 h-3.5" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Button from "../../common/Button";
import { FRONTEND_URL } from "@/src/config/env";
import { trackEvent } from "@/src/utils/pixel";
import GradientUnderline from "../../common/GradientUnderline";

export default function GCCustomerFollowUps() {
  const handleTrialClick = () => {
    trackEvent("trial_cta_click", {
      page_path: "/solutions/garage-crm-software",
      page_name: "garage_crm_software",
      cta_location: "follow_ups",
      cta_label: "Start 7-Day Free Trial",
      destination: `${FRONTEND_URL}/signup`
    });
    window.open(`${FRONTEND_URL}/signup`, "_blank");
  };

  const handleAlertsClick = () => {
    trackEvent("service_alert_click", {
      page_path: "/solutions/garage-crm-software",
      page_name: "garage_crm_software",
      cta_location: "follow_ups",
      cta_label: "Explore Service Alerts",
      destination: "/features/service-alerts"
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center border-b border-slate-200/60">
      <div className="mx-auto max-w-full lg:max-w-4xl w-full text-center">
        <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
          Follow-Up Tracking
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-text-dark mt-4 mb-6 leading-tight">
          Make Garage Customer{" "}
          <GradientUnderline>Follow-Ups Easier to Manage</GradientUnderline>
        </h2>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
          In a busy garage, leads are often lost. Customer enquiries are forgotten, call back dates are missed, and advisors depend on memory. GarageSaarthi provides a structured CRM workflow to organize customer and lead follow-ups.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="trial"
            onClick={handleTrialClick}
            icon={<FaArrowRight className="w-3.5 h-3.5" />}
          >
            Start 7-Day Free Trial
          </Button>
          <Link
            href="/features/service-alerts"
            onClick={handleAlertsClick}
            className="rounded-full bg-slate-50 border border-slate-300 hover:bg-slate-100 text-slate-700 px-8 py-3 text-sm font-semibold transition-all duration-200 flex items-center justify-center cursor-pointer"
          >
            Explore Service Alerts
          </Link>
        </div>
      </div>
    </section>
  );
}


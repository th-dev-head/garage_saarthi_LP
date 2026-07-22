import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Button from "../../common/Button";
import { FRONTEND_URL } from "@/src/config/env";
import { trackEvent } from "@/src/utils/pixel";
import GradientUnderline from "../../common/GradientUnderline";

export default function GWNFreeTrial() {
  const handleTrialClick = () => {
    trackEvent("trial_cta_click", {
      page_path: "/solutions/garage-whatsapp-notification-software",
      page_name: "garage_whatsapp_notification_software",
      cta_location: "free_trial_banner",
      cta_label: "Start 7-Day Free Trial",
      destination: `${FRONTEND_URL}/signup`
    });
    window.open(`${FRONTEND_URL}/signup`, "_blank");
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 flex justify-center bg-white">
      <div className="mx-auto max-w-full lg:max-w-4xl w-full text-center space-y-6">
        <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
          Start Sending Organized Garage <GradientUnderline>Service Reminders</GradientUnderline>
        </h2>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          Start using GarageSaarthi's <strong className="text-primary capitalize">garage whatsapp notification software</strong> features today. 
          Manage customer and vehicle registers, track upcoming maintenance tasks, and configure WhatsApp template flows.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button
            variant="trial"
            onClick={handleTrialClick}
            icon={<FaArrowRight className="w-3.5 h-3.5" />}
          >
            Start 7-Day Free Trial
          </Button>
          <Link
            href="/pricing"
            className="rounded-full bg-slate-50 border border-slate-300 hover:bg-slate-50 text-slate-700 px-8 py-3 text-sm font-semibold transition-all duration-200 flex items-center justify-center cursor-pointer h-11"
          >
            View Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Button from "../../common/Button";
import { FRONTEND_URL } from "@/src/config/env";
import { trackEvent } from "@/src/utils/pixel";
import GradientUnderline from "../../common/GradientUnderline";
import { FaArrowRight } from "react-icons/fa";

export default function GWNProductDefinition() {
  const handleTrialClick = () => {
    trackEvent("trial_cta_click", {
      page_path: "/solutions/garage-whatsapp-notification-software/",
      page_name: "garage_whatsapp_notification_software",
      cta_location: "product_definition",
      cta_label: "Start Free Trial",
      destination: `${FRONTEND_URL}/signup`
    });
    window.open(`${FRONTEND_URL}/signup`, "_blank");
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full text-center space-y-6">
        <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
          Product Details
        </span>
        <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight max-w-3xl mx-auto">
          WhatsApp Notification Software Built for <GradientUnderline>Garages and Workshops</GradientUnderline>
        </h2>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          GarageSaarthi is not a disconnected bulk messaging application. It is an all-in-one garage management platform that links customer information, vehicle profile histories, and upcoming maintenance schedules directly with your WhatsApp sending options.
        </p>

        <p className="text-slate-600 text-xs md:text-sm leading-relaxed max-w-2xl mx-auto">
          Whenever a repair is logged, the system automatically schedules the subsequent periodic check date. When the alert becomes due, you can launch pre-configured template alerts from our <strong className="text-primary capitalize">workshop whatsapp software</strong> dashboard, keeping communication highly relevant.
        </p>

        <div className="pt-4 flex justify-center">
          <Button variant="trial" onClick={handleTrialClick}>
            Start Free Trial <FaArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
}

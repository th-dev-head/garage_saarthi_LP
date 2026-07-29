"use client";

import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";
import { trackEvent } from "@/src/utils/pixel";
import GradientUnderline from "../../common/GradientUnderline";

const retentionFeatures = [
  "Maintain organized service records connected to vehicle profiles.",
  "Track upcoming service requirements based on calendar alerts.",
  "Help improve customer follow-ups and marketing coupons distribution."
];

const retentionAlertRows = [
  { label: "Customer", value: "Ramesh Patel", valueClass: "text-slate-900 font-bold" },
  { label: "Alert Type", value: "Next Service Due (6 Months)", valueClass: "text-primary font-bold" }
];

export default function GCRetention() {
  const handleLinkClick = (label, dest) => {
    trackEvent("service_alert_click", {
      page_path: "/solutions/garage-crm-software",
      page_name: "garage_crm_software",
      cta_location: "customer_retention",
      cta_label: label,
      destination: dest
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left text */}
        <div>
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Customer Retention
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-text-dark mt-4 mb-6 leading-tight">
            Turn Service Records into <GradientUnderline>Better Customer Retention</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
            Workshop relationships should continue after the vehicle is delivered. GarageSaarthi helps you support customer retention efforts and stay connected with existing customers:
          </p>
          <div className="space-y-4 mb-8 text-xs text-slate-600">
            {retentionFeatures.map((text, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500 w-4 h-4 flex-shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <Link
              href="/features/service-reminders"
              onClick={() => handleLinkClick("Explore Service Alerts", "/features/service-reminders")}
              className="text-xs text-primary font-bold hover:underline"
            >
              Explore Service Alerts
            </Link>
            <Link
              href="/features/offers-promotions"
              onClick={() => handleLinkClick("Offers & Promotions", "/features/offers-promotions")}
              className="text-xs text-primary font-bold hover:underline"
            >
              Offers &amp; Promotions
            </Link>
          </div>
        </div>

        {/* Right card mockup representation */}
        <div className="bg-white border border-slate-200/80 p-8 rounded-3xl text-center space-y-4 shadow-sm">
          <span className="text-[10px] uppercase font-bold text-slate-400">Retention Alert</span>
          <div className="border border-slate-100 p-6 rounded-2xl bg-slate-50/50 space-y-3">
            {retentionAlertRows.map((row, idx) => (
              <div key={idx} className="flex justify-between text-xs text-slate-600 font-medium">
                <span>{row.label}</span>
                <span className={row.valueClass}>{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



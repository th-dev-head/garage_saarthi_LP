"use client";

import React from "react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import Button from "../../common/Button";
import { FRONTEND_URL } from "@/src/config/env";
import { trackEvent } from "@/src/utils/pixel";
import GradientUnderline from "../../common/GradientUnderline";

export default function GEWhySaarthi() {
  const handleTrialClick = () => {
    trackEvent("trial_cta_click", {
      page_path: "/solutions/garage-erp-software/",
      page_type: "core_commercial",
      page_topic: "garage_erp_software",
      cta_location: "why_garagesaarthi",
      cta_label: "Start 7-Day Free Trial",
      destination: `${FRONTEND_URL}/signup`
    });
    window.open(`${FRONTEND_URL}/signup`, "_blank");
  };

  const reasons = [
    "Designed specifically for multi-brand automotive workshops.",
    "Brings job cards, inventory, CRM, and billing into one screen.",
    "Ties customer profiles directly with vehicle histories.",
    "Integrated spare parts counter sales module.",
    "Low-stock alerts to prevent parts run-outs.",
    "Automated service alerts on WhatsApp for customer retention.",
    "Internal attendance, leave, and payroll manager for staff.",
    "Role-based login permissions (mechanic, advisor, owner).",
    "Operational payment logs & CA accounting report access.",
    "Multi-branch network consolidated reporting dashboard.",
    "Android mobile app synchronized in real-time.",
    "7-day trial with full access to all features.",
    "Transparent pricing plans billed in INR.",
    "No complex installation or technical training needed.",
    "Dedicated support options based in India."
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left text */}
        <div>
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Differentiators
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-text-dark mt-4 mb-6 leading-tight">
            Why Choose GarageSaarthi as Your{" "}
            <GradientUnderline>Garage ERP System?</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
            GarageSaarthi balances operational depth with simplicity. We build tools that help workshop owners run their entire business from one place without being bogged down by complex setups.
          </p>

          <Button
            variant="trial"
            onClick={handleTrialClick}
            icon={<FaArrowRight className="w-3.5 h-3.5" />}
          >
            Start 7-Day Free Trial
          </Button>
        </div>

        {/* Right checklist grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reasons.map((r, idx) => (
            <div key={idx} className="flex items-start gap-2.5 bg-slate-50 p-4 rounded-xl border border-slate-200/80">
              <FaCheckCircle className="text-primary w-4 h-4 mt-0.5 flex-shrink-0" />
              <span className="text-xs font-semibold text-text-dark leading-normal">{r}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


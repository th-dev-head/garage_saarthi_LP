import React from "react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { FRONTEND_URL } from "@/src/config/env";
import { trackEvent } from "@/src/utils/pixel";

export default function GCWhySaarthi() {
  const handleTrialClick = () => {
    trackEvent("trial_cta_click", {
      page_path: "/solutions/garage-crm-software",
      page_name: "garage_crm_software",
      cta_location: "why_garagesaarthi",
      cta_label: "Start 7-Day Free Trial",
      destination: `${FRONTEND_URL}/signup`
    });
    window.open(`${FRONTEND_URL}/signup`, "_blank");
  };

  const differentiators = [
    "Built specifically for automotive garages and workshops.",
    "Lead management connected with garage operations.",
    "Centralized customer and vehicle records.",
    "Complete vehicle service history logs.",
    "Structured customer follow-up calendars.",
    "Service alerts and reminder logs.",
    "Offers and promotions coupons manager.",
    "Web and mobile cloud access sync.",
    "Multi-branch customer logs control.",
    "Part of an all-in-one garage management system.",
    "7-day trial with full access to all features.",
    "India-focused pricing plans set in local INR."
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center border-b border-slate-200/60">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left text */}
        <div>
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Why Saarthi
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-text-dark mt-4 mb-6 leading-tight">
            Why Use GarageSaarthi for Garage Customer Management?
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
            Stop using generic sales CRMs that don't understand mechanics or mileage logs. GarageSaarthi connects customer profiles directly to vehicle history, active job cards, and billing.
          </p>

          <button
            onClick={handleTrialClick}
            className="rounded-full bg-primary hover:bg-primary-hover text-white px-8 py-3 text-sm font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-lg"
          >
            Start 7-Day Free Trial
            <FaArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Right differentiators checklist */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {differentiators.map((diff, idx) => (
            <div key={idx} className="flex items-start gap-2 bg-slate-50 p-4 rounded-xl border border-slate-200/40">
              <FaCheckCircle className="text-primary w-4 h-4 mt-0.5 flex-shrink-0" />
              <span className="text-xs font-semibold text-text-dark leading-normal">{diff}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

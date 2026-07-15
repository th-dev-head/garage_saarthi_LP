import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Button from "../common/Button";
import { FRONTEND_URL } from "@/src/config/env";
import { trackEvent } from "@/src/utils/pixel";
import GradientUnderline from "../common/GradientUnderline";

export default function GCLeadManagement() {
  const handleTrialClick = () => {
    trackEvent("trial_cta_click", {
      page_path: "/solutions/garage-crm-software",
      page_name: "garage_crm_software",
      cta_location: "lead_management",
      cta_label: "Manage Garage Leads with GarageSaarthi",
      destination: `${FRONTEND_URL}/signup`
    });
    window.open(`${FRONTEND_URL}/signup`, "_blank");
  };

  const handleLinkClick = () => {
    trackEvent("crm_feature_click", {
      page_path: "/solutions/garage-crm-software",
      page_name: "garage_crm_software",
      cta_location: "lead_management",
      cta_label: "CRM Feature Link Clicked",
      feature_name: "CRM"
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center border-b border-slate-200/60">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Lead Management
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Track Every Garage Lead from <GradientUnderline>Enquiry to Customer</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Record customer service inquiries, track follow-up tasks, and monitor conversion lists centrally using the CRM leads board:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
            <h3 className="text-base font-bold text-text-dark mb-3">Add and Organize Garage Leads</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Log incoming phone enquiries, walk-in repair requests, customer complaints, and vehicle specifications into CRM folders.
            </p>
          </div>
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
            <h3 className="text-base font-bold text-text-dark mb-3">Track Lead Progress</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Use actual CRM statuses (Follow-up, Converted, Cancelled) to monitor lead stages, ensuring no inquiry goes forgotten.
            </p>
          </div>
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
            <h3 className="text-base font-bold text-text-dark mb-3">Keep Follow-Ups Organized</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Add follow-up date stamps and reminders to log customer interactions and schedule call backs on time.
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-4 flex-wrap items-center">
          <Button
            variant="trial"
            onClick={handleTrialClick}
            icon={<FaArrowRight className="w-3.5 h-3.5" />}
          >
            Manage Garage Leads with GarageSaarthi
          </Button>
          <Link
            href="/features/crm"
            onClick={handleLinkClick}
            className="text-xs text-primary font-bold hover:underline"
          >
            CRM Lead Spotlight
          </Link>
        </div>
      </div>
    </section>
  );
}

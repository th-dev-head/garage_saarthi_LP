"use client";

import React from "react";
import Link from "next/link";
import GradientUnderline from "../../common/GradientUnderline";
import { trackEvent } from "@/src/utils/pixel";

const workflowSteps = [
  {
    title: "Digital Job Cards",
    desc: "Log services and repair activities on our web or mobile app dashboard. Explore ",
    href: "/features/job-card-management",
    linkText: "Digital Job Cards",
    label: "Job Cards Feature Link"
  },
  {
    title: "Customer Records",
    desc: "Track phone numbers, billing profiles, and active cars centrally. Explore ",
    href: "/features/customers",
    linkText: "Customer Records",
    label: "Customers Feature Link"
  },
  {
    title: "Vehicle History",
    desc: "Review past invoice records, spare part bills, and checklists. Explore ",
    href: "/features/vehicles",
    linkText: "Vehicle History",
    label: "Vehicles Feature Link"
  }
];

export default function CWJobCardWorkflow() {
  const handleLinkClick = (name, url) => {
    trackEvent("feature_click", {
      page_path: "/solutions/car-workshop-software",
      cta_location: "job_card_workflow_section",
      cta_label: name,
      destination: url
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 bg-white border border-slate-200/50 rounded-3xl p-6 shadow-sm flex flex-col justify-between aspect-[4/3] relative">
          <div className="space-y-4 my-auto">
            <div className="border-b border-slate-200/60 pb-3">
              <span className="text-xs text-slate-500 font-medium">Digital Job Card</span>
              <p className="text-sm font-bold text-slate-800">Job Card #GSJC-0845</p>
            </div>
            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>Vehicle Model</span>
                <span className="font-semibold text-slate-800">Hyundai i20</span>
              </div>
              <div className="flex justify-between">
                <span>Services Assigned</span>
                <span className="font-semibold text-slate-800">Engine Oil + Wheel Alignment</span>
              </div>
            </div>
          </div>
          <div className="bg-slate-100 rounded-2xl p-3 text-[11px] text-slate-600 text-center">
            🔗 Linked to service history logs
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Job Cards Workflow
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Create and Manage Digital Job Cards for <GradientUnderline>Every Car</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Record customer requests, list repair instructions, and monitor mechanic assignments digitally. When a vehicle enters your workshop, log check-in details immediately to avoid manual transcription errors.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {workflowSteps.map((step, idx) => (
              <div key={idx} className="space-y-2">
                <h3 className="text-sm font-bold text-slate-800">{step.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {step.desc}
                  <Link
                    href={step.href}
                    onClick={() => handleLinkClick(step.label, step.href)}
                    className="text-primary font-semibold hover:underline"
                  >
                    {step.linkText}
                  </Link>.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

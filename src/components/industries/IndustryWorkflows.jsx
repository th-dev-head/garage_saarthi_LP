"use client";

import React from "react";
import {
  FaCheckCircle,
  FaFileAlt,
  FaCogs,
  FaFileInvoiceDollar,
  FaUserClock
} from "react-icons/fa";
import GradientUnderline from "../common/GradientUnderline";

const workflows = [
  {
    step: "01",
    title: "Service Intake & Job Tracking",
    description: "Capture customer phone numbers, vehicle registration, fuel gauge status, and existing body scratches in under a minute to start jobs without delay.",
    icon: FaFileAlt,
    points: ["Quick vehicle search & lookup", "Digital job card creation", "Visual damage & scratch marking"],
  },
  {
    step: "02",
    title: "Repair Progress & Service History",
    description: "Assign mechanics, issue spare parts from stock, log repair stages, and access past workshop service logs instantly on web or mobile.",
    icon: FaCogs,
    points: ["Mechanic task assignment", "Real-time parts consumption", "Complete past service timeline"],
  },
  {
    step: "03",
    title: "Estimates, Invoices & Billing",
    description: "Send digital estimates for customer approval via WhatsApp, produce GST-compliant tax invoices, and record multiple payment modes seamlessly.",
    icon: FaFileInvoiceDollar,
    points: ["WhatsApp estimate approvals", "GST-compliant tax invoices", "Digital gate pass verification"],
  },
  {
    step: "04",
    title: "Customer Follow-ups & Reminders",
    description: "Automate periodic maintenance reminders, service due notifications, and collect customer feedback to build lasting loyalty.",
    icon: FaUserClock,
    points: ["Automated WhatsApp service alerts", "Inspection & insurance expiry logs", "Customer review collection"],
  },
];

export default function IndustryWorkflows() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-slate-50">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#EFE9E7] text-primary text-xs font-bold px-3.5 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            Operational Workflows
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark tracking-tight mb-4">
            Built Around Your Workshop&apos;s{" "}
            <GradientUnderline>Day-to-Day Work</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Whether your team handles routine servicing, repairs, detailing or commercial-vehicle maintenance, start with the workflow your business needs to manage. Explore the relevant solution page to see how GarageSaarthi can fit your operations.
          </p>
        </div>

        {/* 4 Workflows Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflows.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-orange-50 text-primary flex items-center justify-center text-lg font-bold">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-black text-slate-400 bg-slate-100 px-2.5 py-1 rounded-md">
                      STEP {item.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-5">
                    {item.description}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-slate-100">
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs text-slate-700">
                      <FaCheckCircle className="text-primary w-3.5 h-3.5 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

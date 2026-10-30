"use client";

import React from "react";
import Link from "next/link";
import { FaFileAlt, FaUserShield, FaDoorClosed, FaBoxes, FaWhatsapp, FaReceipt, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "@/src/components/common/GradientUnderline";

export default function CustomerWorkflowOutcomes() {
  const workflows = [
    {
      icon: FaFileAlt,
      title: "Digital Job Card Intake",
      problem: "Paper job slips get smudged with grease, lost across bays, or lack pre-existing dent documentation.",
      outcome: "Mechanics take 45 seconds to create a digital job card on any phone with 360° intake photos and VIN lookup.",
      link: "/features/job-card-management/",
      linkText: "Explore Job Cards",
    },
    {
      icon: FaUserShield,
      title: "Staff Privacy & Anti-Proxy",
      problem: "Floor mechanics seeing purchase costs and customer margins, or buddy-punching paper attendance registers.",
      outcome: "Selfie-verified facial check-in and restricted bay view—technicians see labor instructions only, not margins.",
      link: "/features/attendance/",
      linkText: "Explore Attendance",
    },
    {
      icon: FaDoorClosed,
      title: "Restricted Gate Pass Exits",
      problem: "Vehicles rolled out by eager drivers while invoices were pending, causing delayed or lost payments.",
      outcome: "System locks digital gate exit until the invoice is marked paid and mandatory delivery photos are captured.",
      link: "/features/gate-pass/",
      linkText: "Explore Gate Pass",
    },
    {
      icon: FaBoxes,
      title: "Spare Parts & Stock Control",
      problem: "Parts taken from shelves without counter bills, causing stock discrepancies and year-end inventory loss.",
      outcome: "Barcode scanning and direct job card parts deduction ensure every spare part is billed to the customer.",
      link: "/features/inventory/",
      linkText: "Explore Inventory",
    },
    {
      icon: FaWhatsapp,
      title: "Automated WhatsApp Alerts",
      problem: "Calling 50+ customers daily for estimate approvals, vehicle readiness, and periodic oil change reminders.",
      outcome: "Automatic WhatsApp updates for estimate approval, live status, and proactive 90-day service reminders.",
      link: "/solutions/garage-whatsapp-notification-software/",
      linkText: "Explore WhatsApp Sync",
    },
    {
      icon: FaReceipt,
      title: "1-Click GST & Split Billing",
      problem: "Slow desktop billing software causing customer queues and manual GST reconciliation headaches.",
      outcome: "Instant GST-compliant invoices with split payment (cash, UPI, card), PDF download, and thermal printing.",
      link: "/features/billing/",
      linkText: "Explore Billing",
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-24 px-4 lg:px-15 2xl:px-50">
      <div className="mx-auto max-w-6xl 2xl:max-w-7xl">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Shop Floor Friction Solved
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Proven Outcomes by{" "}
            <GradientUnderline>Daily Workshop Workflow</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto">
            See how GarageSaarthi replaces fragmented registers and spreadsheets with interconnected operational tools.
          </p>
        </div>

        {/* Workflow Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workflows.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/80 rounded-xl p-6 flex flex-col justify-between hover:border-[#B02E0C]/30 hover:shadow-md transition-all duration-200"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#EFE9E7] text-[#B02E0C] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-3">
                    {item.title}
                  </h3>

                  <div className="space-y-3 mb-6 text-xs sm:text-sm">
                    <div className="text-slate-500">
                      <strong className="text-slate-700 block mb-0.5">Common Friction:</strong>
                      {item.problem}
                    </div>
                    <div className="text-slate-700">
                      <strong className="text-emerald-700 block mb-0.5">Verified Outcome:</strong>
                      {item.outcome}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200/60">
                  <Link
                    href={item.link}
                    className="inline-flex items-center text-xs font-bold text-[#B02E0C] hover:text-[#902408] transition-colors"
                  >
                    <span>{item.linkText}</span>
                    <FaArrowRight className="ml-1.5 w-3 h-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

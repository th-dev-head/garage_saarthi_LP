"use client";

import { FRONTEND_URL } from "@/src/config/env";
import React from "react";
import Link from "next/link";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import Button from "../../common/Button";
import GradientUnderline from "../../common/GradientUnderline";

const decisionPoints = [
  "Manage digital job cards with pre-repair complaints & labor rates",
  "Generate GST invoices with custom invoice numbering series",
  "Track spare parts inventory and dynamic checkout deductions",
  "Maintain searchable customer profiles and vehicle service histories",
  "Organize sales lead enquiries inside an integrated Garage CRM",
  "Automate WhatsApp service due alerts and promotional messages",
  "Log mechanic attendance, leave requests, and labor commissions",
  "Monitor cash vs online payment ledgers and offer CA export access",
  "Manage multiple workshop branches with role-based permissions",
  "Access workshop operations on web browsers and Android mobile devices",
];

export default function BWSDecisionSummary() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Quick Decision Summary
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Is GarageSaarthi the Right Workshop <GradientUnderline>Management Software for You?</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            GarageSaarthi is a strong fit if you want to consolidate these core operational capabilities into one unified system.
          </p>
        </div>

        {/* Grid layout */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-8 shadow-sm max-w-4xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {decisionPoints.map((text, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <FaCheckCircle className="text-primary w-4 h-4 mt-0.5 flex-shrink-0" />
                <p className="text-xs md:text-sm text-slate-700 font-medium leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <Button
            variant="primary"
            icon={<FaArrowRight className="w-3.5 h-3.5" />}
            onClick={() => window.open(`${FRONTEND_URL}/signup`, "_blank")}
          >
            Start 7-Day Free Trial
          </Button>
          <Link
            href="/pricing"
            className="rounded-full bg-transparent text-slate-800 border border-slate-300 hover:bg-slate-100 px-6 py-2.5 text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer h-11"
          >
            View Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}

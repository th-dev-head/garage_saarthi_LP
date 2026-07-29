"use client";

import { FRONTEND_URL } from "@/src/config/env";
import React from "react";
import Link from "next/link";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import Button from "../../common/Button";
import GradientUnderline from "../../common/GradientUnderline";

const differentiators = [
  "Built specifically around automotive and commercial workshop repair workflows",
  "India-focused product positioning custom-tailored for local garage operations",
  "Generates digital job cards with pre-repair complaints and parts assignments",
  "Supports custom GST billing, invoice series, and multiple payment options",
  "Tracks spare parts stock levels and enables retail counter sales",
  "Maintains complete customer and vehicle service history records",
  "Manages contract quotes inside a dedicated Garage CRM module",
  "Automates WhatsApp service due reminders and promotional messages",
  "Integrates mechanic attendance, leave management, and payroll commissions",
  "Tracks cash/online ledgers, loans, and offers CA export access",
  "Provides cloud web platform access and native Android mobile application",
  "Supports multi-branch controls with role-based staff access permissions",
  "Offers a fully functional 7-day free trial with zero registration fee",
];

export default function BGSWhyUs() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Product Positioning
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Why Consider GarageSaarthi <GradientUnderline>for Your Garage?</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            GarageSaarthi is designed for garage and workshop owners who want to manage operational, customer, staff, and financial workflows from one unified platform.
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 max-w-4xl mx-auto mb-12">
          {differentiators.map((text, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <FaCheckCircle className="text-primary w-4 h-4 mt-1 flex-shrink-0" />
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-medium">
                {text}
              </p>
            </div>
          ))}
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
            View Pricing Plans
          </Link>
        </div>
      </div>
    </section>
  );
}

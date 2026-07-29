"use client";

import { FRONTEND_URL } from "@/src/config/env";
import React from "react";
import Link from "next/link";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import Button from "../../common/Button";
import GradientUnderline from "../../common/GradientUnderline";

const smallGaragePoints = [
  "Simple, fast setup requiring zero dedicated IT expertise",
  "Quick digital job sheet creation in under a minute on mobile",
  "Organized customer & vehicle service history databases",
  "Instant GST billing and receipt sharing on WhatsApp",
  "Basic spare parts inventory tracking to prevent stockouts",
  "Automated service due alerts to bring local clients back",
  "Affordable monthly and annual subscription options that scale",
];

export default function BGSSmallGarages() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content - Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
              Small Business Evaluation
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
              What Is the Best Garage Management Software for a{" "}
              <GradientUnderline>Small Garage?</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              If you operate an independent or small garage, avoid choosing software based only on the sheer length of its feature list. Instead, look for value, simplicity, and ease of daily use.
            </p>

            <div className="space-y-3 pt-2">
              {smallGaragePoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <FaCheckCircle className="text-primary w-4 h-4 mt-0.5 flex-shrink-0" />
                  <p className="text-xs md:text-sm text-slate-700 font-medium leading-relaxed">{point}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 items-center pt-4">
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
                View GarageSaarthi Pricing
              </Link>
            </div>
          </div>

          {/* Visual Card - Right Column */}
          <div className="lg:col-span-5 bg-white border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-sm space-y-4">
            <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wide border-b border-slate-200/60 pb-3">
              Designed for Small & Growing Garages
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              GarageSaarthi allows small garage operators to start with essential job cards, billing, and customer logs today, while seamlessly unlocking CRM, staff payroll, and multi-branch modules as the workshop expands.
            </p>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/60 space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-800">
                <span>Value Focus</span>
                <span className="text-primary">High Operational ROI</span>
              </div>
              <p className="text-[11px] text-slate-500">
                Zero bloated features, zero hidden charges. Clear subscription plans designed for Indian workshop budgets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

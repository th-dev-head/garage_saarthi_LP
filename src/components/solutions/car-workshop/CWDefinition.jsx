"use client";

import React from "react";
import GradientUnderline from "../../common/GradientUnderline";
import Link from "next/link";
import { trackEvent } from "@/src/utils/pixel";
import { FaArrowRight } from "react-icons/fa";

export default function CWDefinition() {
  const handleExploreClick = () => {
    trackEvent("feature_click", {
      page_path: "/solutions/car-workshop-software/",
      cta_location: "product_definition",
      cta_label: "Explore Features",
      destination: "/features/"
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Workshop Operations
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            One Car Workshop Management Software for <GradientUnderline>Daily Operations</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Running a modern multi-brand car workshop brings multiple administrative challenges. Managing repair schedules, assigning jobs to mechanics, tracking spare parts consumption, generating GST invoices, and following up on pending payments across manual notebooks leads to errors and lost revenue.
          </p>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            GarageSaarthi consolidates your car workshop operations into a single secure cloud dashboard. Track active jobs, manage warehouse stocks, and send automatic WhatsApp reminder files to boost retention rates.
          </p>
          <div className="pt-2">
            <Link href="/features/" onClick={handleExploreClick} className="text-primary font-bold hover:underline text-xs md:text-sm flex items-center gap-1">
              Explore GarageSaarthi Features <FaArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5 bg-slate-50 border border-slate-200/60 rounded-3xl p-8 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-text-dark">Say Goodbye To</h3>
          <ul className="space-y-3 text-xs md:text-sm text-slate-600">
            <li className="flex items-start gap-2.5">
              <span className="text-red-500 font-bold">✕</span>
              <span><strong>Paper Job Cards:</strong> Hard-to-read handwriting and lost records.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-red-500 font-bold">✕</span>
              <span><strong>Excel Stock Logs:</strong> Mismatched inventory figures and zero low-stock alerts.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-green-500 font-bold">✓</span>
              <span><strong>Centralized System:</strong> Instantly check history, stocks, and sales lists online.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

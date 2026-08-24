"use client";

import { FRONTEND_URL } from "@/src/config/env";
import React from "react";
import Link from "next/link";
import { FaLaptop, FaMobileAlt, FaArrowRight } from "react-icons/fa";
import Button from "../../common/Button";
import PlayStoreBadge from "../../common/PlayStoreBadge";
import AppStoreBadge from "../../common/AppStoreBadge";
import GradientUnderline from "../../common/GradientUnderline";

export default function FLCloudAccess() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual block - Left Column */}
          <div className="lg:col-span-5 bg-white border border-slate-200/50 rounded-3xl p-8 shadow-sm flex flex-col justify-center min-h-[300px]">
            <div className="max-w-xs w-full mx-auto space-y-6">
              <div className="flex items-center gap-4 text-slate-800">
                <FaLaptop className="text-4xl text-primary flex-shrink-0" />
                <div className="text-left">
                  <h4 className="text-xs font-bold">Cloud Web Portal</h4>
                  <p className="text-[10px] text-slate-400">For Billing, Invoicing & Reports</p>
                </div>
              </div>
              <div className="border-t border-slate-100" />
              <div className="flex items-center gap-4 text-slate-800">
                <FaMobileAlt className="text-4xl text-primary flex-shrink-0" />
                <div className="text-left">
                  <h4 className="text-xs font-bold">Android & iOS Mobile App</h4>
                  <p className="text-[10px] text-slate-400">For Quick Job Cards & Floor Operations</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content - Right Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
              Web & Mobile Platform
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-6 leading-tight">
              Manage Your Fleet Workshop on <GradientUnderline>Web and Mobile</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Access your workshop records from any device. Open digital job cards, verify spares inventory, or generate invoices right beside the vehicle using the Android & iOS apps, or use the detailed web panel from your office desk.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 items-center">
              <Button
                variant="primary"
                icon={<FaArrowRight className="w-3.5 h-3.5" />}
                onClick={() => window.open(`${FRONTEND_URL}/signup`, "_blank")}
              >
                Start 7-Day Free Trial
              </Button>
              <div className="flex items-center gap-4">
<PlayStoreBadge />
<AppStoreBadge />
</div>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}

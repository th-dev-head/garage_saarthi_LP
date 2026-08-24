"use client";

import { FRONTEND_URL } from "@/src/config/env";
import React from "react";
import Link from "next/link";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import Button from "../../common/Button";
import GradientUnderline from "../../common/GradientUnderline";

export default function BWSAffordability() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full bg-slate-900 text-white rounded-3xl p-10 md:p-14 shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto space-y-6 text-center">
          <span className="text-xs uppercase tracking-wider text-orange-400 font-bold bg-orange-950/60 border border-orange-800/30 px-3 py-1 rounded-full inline-block">
            Value & Pricing Transparency
          </span>
          <h2 className="text-2xl md:text-4xl font-bold leading-tight text-white">
            Affordable Workshop Management Software Should Still{" "}
            <span className="text-orange-400 block sm:inline">Cover Daily Operations</span>
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Using separate software for billing, staff attendance, customer records, and inventory creates fragmented data and extra monthly costs. GarageSaarthi combines all essential workshop modules into one affordable subscription package.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-left text-xs md:text-sm text-slate-300 pt-2 pb-4">
            <div className="flex items-center gap-2">
              <FaCheck className="text-orange-400 flex-shrink-0" />
              <span>Full 7-Day Free Trial Access</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-orange-400 flex-shrink-0" />
              <span>Flexible Plan Durations</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-orange-400 flex-shrink-0" />
              <span>No Per-Job Card Extra Charges</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/pricing/"
              className="rounded-full bg-white text-slate-900 hover:bg-slate-100 px-6 py-2.5 text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap h-11"
            >
              View GarageSaarthi Pricing
            </Link>
            <Button
              variant="hero"
              icon={<FaArrowRight className="w-4 h-4" />}
              onClick={() => window.open(`${FRONTEND_URL}/signup`, "_blank")}
            >
              Start 7-Day Free Trial
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { FRONTEND_URL } from "@/src/config/env";
import GradientUnderline from "../../common/GradientUnderline";

export default function ARSFreeTrialCTA() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-4xl 2xl:max-w-full w-full text-center bg-white border border-slate-200/80 rounded-3xl p-8 md:p-12 shadow-sm">
        <h2 className="text-2xl md:text-4xl font-extrabold text-text-dark leading-tight mb-4">
          Try GarageSaarthi for Your{" "}
          <GradientUnderline>Auto Repair Shop</GradientUnderline>
        </h2>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-8">
          Get complete access to digital job cards, spare parts inventory control, customer WhatsApp reminders, staff payroll, and GST invoicing free for 7 days without paying a single rupee.
        </p>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <Link
            href={FRONTEND_URL + "/register"}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary hover:bg-primary-hover text-white px-6 py-3 text-base font-bold shadow-md transition-all inline-flex items-center gap-2"
          >
            Start 7-Day Free Trial
            <FaArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/pricing"
            className="rounded-full bg-transparent text-slate-700 border border-slate-300 hover:bg-slate-50 px-6 py-3 text-sm font-semibold transition-all"
          >
            View Pricing Plans
          </Link>
        </div>
      </div>
    </section>
  );
}

import { FRONTEND_URL } from "@/src/config/env";
import React from "react";
import Link from "next/link";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import Button from "../../common/Button";
import GradientUnderline from "../../common/GradientUnderline";


const benefits = [
  "Full access to all features (no limitations)",
  "No credit card required for registration",
  "Set up and add your mechanics in under 60 seconds",
  "Includes free data import assistance from Excel sheets",
  "Access on desktop browsers and mobile app",
];

export default function AWPricing() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="bg-white border border-slate-200/80 rounded-3xl p-8 md:p-12 shadow-sm max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
                7-Day Free Trial
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-text-dark mt-4 mb-4 leading-tight">
                Try GarageSaarthi Automobile Workshop Software <GradientUnderline>Free for 7 Days</GradientUnderline>
              </h2>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6">
                Test all premium modules — digital job cards, spare parts inventory control, customer WhatsApp notifications, staff payroll, and GST invoicing without paying a rupee.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Button
                  variant="hero"
                  icon={<FaArrowRight className="w-4 h-4" />}
                  onClick={() => window.open(`${FRONTEND_URL}/signup`, "_blank")}
                >
                  Start 7-Day Free Trial
                </Button>
                <Link
                  href="/pricing"
                  className="rounded-full bg-transparent text-slate-800 border border-slate-300 hover:bg-slate-50 px-6 py-2.5 text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer h-11 whitespace-nowrap"
                >
                  View Pricing Plans
                </Link>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/60">
              <h3 className="text-sm font-bold text-slate-900 mb-4">What's included in the trial?</h3>
              <ul className="space-y-3">
                {benefits.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <FaCheckCircle className="text-primary w-4.5 h-4.5 mt-0.5 flex-shrink-0" />
                    <span className="text-xs md:text-sm text-slate-700 font-semibold leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


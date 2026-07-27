import { FRONTEND_URL } from "@/src/config/env";
import React from "react";
import Link from "next/link";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import Button from "../../common/Button";

const trialTruckBenefits = [
  "Full Access to All Features",
  "Support Web & Android App",
  "Cancel Anytime, No Questions"
];

export default function TWPricing() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full bg-gradient-to-br from-slate-900 via-slate-800 to-orange-950 text-white rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
        {/* Decorative Blur */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-orange-600/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <span className="text-xs uppercase tracking-wider text-orange-400 font-bold bg-orange-950/60 border border-orange-800/30 px-3 py-1 rounded-full inline-block">
            Start Today
          </span>
          <h2 className="text-2xl md:text-4xl font-bold leading-tight text-white">
            Start Managing Your Truck Workshop with a{" "}
            <span className="text-orange-400 block sm:inline">7-Day Free Trial</span>
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Test all tools with your daily heavy vehicle repair workflow. Create digital job cards, track bulk parts inventory, log payment collections, and manage mechanic payroll. No credit card required.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-left text-xs md:text-sm text-slate-300 pt-4 pb-6">
            {trialTruckBenefits.map((text, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <FaCheck className="text-orange-400 flex-shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="hero"
              icon={<FaArrowRight className="w-4 h-4" />}
              onClick={() => window.open(`${FRONTEND_URL}/signup`, "_blank")}
            >
              Start 7-Day Free Trial
            </Button>
            <Link
              href="/pricing"
              className="rounded-full bg-transparent text-white border border-white hover:bg-white/10 px-6 py-2.5 text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap h-11"
            >
              View Pricing Plans
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


import { FRONTEND_URL } from "@/src/config/env";
import React from "react";
import Link from "next/link";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import Button from "../../common/Button";
import GradientUnderline from "../../common/GradientUnderline";

const trialBenefits = [
  "Full 7-Day Free Trial",
  "Web & Android App Access",
  "Zero Credit Card Required"
];

export default function GSIPricing() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full bg-gradient-to-br from-slate-900 via-slate-800 to-orange-950 text-white rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <span className="text-xs uppercase tracking-wider text-orange-400 font-bold bg-orange-950/60 border border-orange-800/30 px-3 py-1 rounded-full inline-block">
            Transparent Indian Pricing
          </span>
          <h2 className="text-2xl md:text-4xl font-bold leading-tight text-white">
            Start Your Garage Management Software{" "}
            <span className="text-orange-400 block sm:inline">Free Trial Today</span>
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Test all features with your actual daily workshop tasks. Create digital job sheets, manage spare parts stock, generate GST invoices, and calculate mechanic commissions. Flexible subscription packages (1, 3, 6, 12, or 24 months) designed for Indian garage budgets.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-left text-xs md:text-sm text-slate-300 pt-4 pb-6">
            {trialBenefits.map((text, idx) => (
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
              className="rounded-full bg-white text-slate-900 hover:bg-slate-100 px-6 py-2.5 text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap h-11"
            >
              View Pricing Plans
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


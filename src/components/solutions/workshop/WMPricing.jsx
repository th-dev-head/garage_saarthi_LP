import { FRONTEND_URL } from "@/src/config/env";
import React from "react";
import Link from "next/link";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import Button from "../../common/Button";
import GradientUnderline from "../../common/GradientUnderline";

const trialFeatures = [
  "All features unlocked for 7 days",
  "No credit card required",
  "GST billing & invoicing",
  "Inventory & job card management",
  "Android app access",
  "Staff management tools",
];

export default function WMPricing() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left — messaging */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
              Try Before You Commit
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-snug">
              Start Your{" "}
              <GradientUnderline>7-Day Free Trial.</GradientUnderline>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8 text-sm md:text-base">
              Experience the full power of GarageSaarthi workshop management software for 7 days — absolutely free. No credit card, no commitment. See how it transforms your workshop before you subscribe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="hero"
                onClick={() => window.open(`${FRONTEND_URL}/signup`, "_blank")}
              >
                Start Free Trial <FaArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Link
                href="/pricing"
                className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-full whitespace-nowrap border border-slate-300 text-sm font-medium text-slate-700 hover:border-primary/40 hover:text-primary transition-colors"
              >
                View Pricing Plans
              </Link>
            </div>
          </div>

          {/* Right — trial features card */}
          <div className="bg-gradient-to-tr from-slate-900 via-slate-800 to-orange-950 rounded-2xl p-8 text-white border border-slate-700/50 shadow-lg relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl" />
            <h3 className="text-lg font-bold text-orange-400 mb-2">What You Get Free</h3>
            <p className="text-slate-300 text-sm mb-6">Full access to all features for 7 days. No restrictions.</p>
            <ul className="space-y-3">
              {trialFeatures.map((f, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                    <FaCheck className="w-2.5 h-2.5 text-orange-400" />
                  </div>
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-5 border-t border-slate-700/60 flex items-center justify-between">
              <span className="text-xs text-slate-400">After trial</span>
              <span className="text-xs font-bold text-orange-400 bg-orange-950/40 px-3 py-1 rounded-full whitespace-nowrap border border-orange-500/20">
                Affordable Plans Available
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


import React from "react";
import Link from "next/link";
import { FaPlay, FaCheckCircle, FaArrowRight } from "react-icons/fa";
import Button from "../../common/Button";
import { FRONTEND_URL } from "@/src/config/env";
import { trackEvent } from "@/src/utils/pixel";
import GradientUnderline from "../../common/GradientUnderline";

const trialBenefits = [
  "Full access to all ERP features — no limitations",
  "No credit card or online payment details needed to sign up",
  "Convert trial directly into a quarterly or annual plan when ready",
  "Free onboarding & excel inventory import support",
  "Live support & mechanic training help",
];

export default function GEFreeTrial() {
  const handleTrialClick = () => {
    trackEvent("trial_cta_click", {
      page_path: "/solutions/garage-erp-software",
      page_type: "core_commercial",
      page_topic: "garage_erp_software",
      cta_location: "free_trial",
      cta_label: "Start Free Trial Now",
      destination: `${FRONTEND_URL}/signup`
    });
    window.open(`${FRONTEND_URL}/signup`, "_blank");
  };

  const handlePricingClick = () => {
    trackEvent("pricing_click", {
      page_path: "/solutions/garage-erp-software",
      page_type: "core_commercial",
      page_topic: "garage_erp_software",
      cta_location: "free_trial",
      cta_label: "View Pricing",
      destination: "/pricing"
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 md:p-12 shadow-sm max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Side */}
            <div className="space-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
                  Free Trial Access
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-text-dark mt-4 mb-4 leading-tight">
                  Try GarageSaarthi ERP{" "}
                  <GradientUnderline>Free for 7 Days</GradientUnderline>
                </h2>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6">
                  Take a complete self-guided tour of the platform. Set up your staff profiles, upload your spare parts catalog, customize your GST billing serial numbers, and create live job cards.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Button
                  variant="trial"
                  onClick={handleTrialClick}
                  icon={<FaPlay className="w-3 h-3" />}
                  className="w-full sm:w-auto"
                >
                  Start Free Trial Now
                </Button>
                <Link
                  href="/pricing"
                  onClick={handlePricingClick}
                  className="rounded-full bg-transparent text-slate-800 border border-slate-300 hover:bg-slate-100 px-6 py-2.5 text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer h-11 whitespace-nowrap w-full sm:w-auto"
                >
                  View Pricing
                </Link>
              </div>
            </div>

            {/* Right Side Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 mb-4">What is included in the ERP trial?</h3>
              <ul className="space-y-3">
                {trialBenefits.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <FaCheckCircle className="text-primary w-4 h-4 mt-0.5 flex-shrink-0" />
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


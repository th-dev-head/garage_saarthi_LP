import React from "react";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { FRONTEND_URL } from "@/src/config/env";
import PlayStoreBadge from "../../common/PlayStoreBadge";
import { trackEvent } from "@/src/utils/pixel";

const fCtaGuarantees = [
  "7-Day Full Free Access",
  "No Credit Card Required",
  "100% Financial Accuracy"
];

export default function FFinalCTA() {
  const handleCtaClick = () => {
    trackEvent("finance_management_feature_final_cta_click", {
      page_path: "/features/finance",
      cta_location: "final_cta",
      cta_label: "Start 7-Day Free Trial",
      destination: `${FRONTEND_URL}/register`,
    });
    window.open(`${FRONTEND_URL}/register`, "_blank");
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-gradient-to-br from-slate-900 via-slate-800 to-orange-950 text-white text-center relative overflow-hidden flex justify-center">
      {/* Decorative Blobs */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-full lg:max-w-4xl relative z-10 space-y-6">
        <span className="text-xs uppercase tracking-widest bg-orange-600/30 text-orange-400 px-3 py-1.5 rounded-full border border-orange-500/20 font-semibold inline-block">
          Take Control of Your Garage Finances
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
          Ready to Track Your Workshop Cash Flow & Net Profits?
        </h2>
        <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Join thousands of garage owners using GarageSaarthi to stop financial leakage, manage vendor credit, and track daily profit margins.
        </p>

        <div className="flex flex-wrap justify-center gap-4 items-center pt-4">
          <button
            onClick={handleCtaClick}
            className="rounded-full px-8 py-3.5 text-base font-bold text-white shadow-xl bg-[linear-gradient(92.52deg,#B22F0E_2.1%,#D73D17_105.99%)] hover:opacity-95 active:scale-[0.98] cursor-pointer inline-flex items-center justify-center gap-2"
          >
            Start 7-Day Free Trial
            <FaArrowRight className="w-4 h-4" />
          </button>
          <PlayStoreBadge />
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-400 pt-4">
          {fCtaGuarantees.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <FaCheckCircle className="text-emerald-400 w-3.5 h-3.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

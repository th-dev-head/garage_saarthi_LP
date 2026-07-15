import React from "react";
import Link from "next/link";
import { FaArrowRight, FaFileInvoiceDollar } from "react-icons/fa";
import { FRONTEND_URL } from "@/src/config/env";
import { trackEvent } from "@/src/utils/pixel";
import Button from "../common/Button";
import PlayStoreBadge from "../common/PlayStoreBadge";

export default function GBHero() {
  const handleTrialClick = () => {
    trackEvent("billing_trial_cta_click", {
      page_path: "/solutions/garage-billing-software",
      cta_location: "hero",
      cta_label: "Start 7-Day Free Trial",
      destination: `${FRONTEND_URL}/signup`
    });
    window.open(`${FRONTEND_URL}/signup`, "_blank");
  };

  const handlePricingClick = () => {
    trackEvent("billing_pricing_click", {
      page_path: "/solutions/garage-billing-software",
      cta_location: "hero",
      cta_label: "View Pricing",
      destination: "/pricing"
    });
  };

  return (
    <section className="relative pt-48 pb-24 md:pt-56 md:pb-32 lg:pt-60 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-orange-950 text-white overflow-hidden flex justify-center">
      {/* Decorative Blobs */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-full lg:max-w-6xl w-full relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-semibold px-4 py-1.5 rounded-full border border-white/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            Garage Billing Software India
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            Garage Billing Software for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Automotive Workshops
            </span>{" "}
            in India
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
            Generate professional GST invoices, manage spare parts billing, track customer payments, and connect workshop job cards with billing — all from one centralized platform.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-start items-center">
            <Button
              variant="trial"
              onClick={handleTrialClick}
              icon={<FaArrowRight className="w-3.5 h-3.5" />}
              className="w-full sm:w-auto"
            >
              Start 7-Day Free Trial
            </Button>
            <Link
              href="/pricing"
              onClick={handlePricingClick}
              className="rounded-full border border-white/30 bg-white/5 hover:bg-white/10 text-white px-8 py-3 text-sm font-semibold transition-all duration-200 flex items-center justify-center cursor-pointer w-full sm:w-auto whitespace-nowrap h-11"
            >
              View Pricing
            </Link>
            <PlayStoreBadge />
          </div>
        </div>

        {/* Right Preview Card */}
        <div className="relative flex justify-center md:justify-end">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-3xl shadow-2xl max-w-lg w-full relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[4px] bg-[linear-gradient(92.52deg,#B22F0E_2.1%,#D73D17_105.99%)]" />
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <div className="flex items-center gap-2">
                <FaFileInvoiceDollar className="text-primary w-4 h-4" />
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wide">
                  GST Invoice Creator
                </span>
              </div>
              <span className="text-[10px] font-bold text-green-500 uppercase">GST Compliant</span>
            </div>

            <div className="space-y-3.5 text-xs">
              <div className="flex justify-between items-center text-slate-300">
                <span>Labour Charge (General Service)</span>
                <span className="font-bold text-white">₹1,200.00</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span>Mobil 5W-30 Engine Oil (3.5L)</span>
                <span className="font-bold text-white">₹2,450.00</span>
              </div>
              <div className="border-t border-white/10 pt-3 flex justify-between items-center text-sm font-bold text-white">
                <span>Total Bill Amount (Incl. GST)</span>
                <span className="text-primary text-base">₹4,307.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

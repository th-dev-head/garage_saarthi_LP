import React from "react";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { trackEvent } from "@/src/utils/pixel";
import Button from "../common/Button";

export default function GEIndiaPositioning() {
  const handleCtaClick = () => {
    trackEvent("pricing_click", {
      page_path: "/solutions/garage-erp-software",
      page_type: "core_commercial",
      page_topic: "garage_erp_software",
      cta_location: "india_positioning",
      cta_label: "View GarageSaarthi Pricing",
      destination: "/pricing"
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center border-b border-slate-200/60">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Made For India
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-text-dark mt-4 mb-6 leading-tight">
            Garage ERP Software Built for Workshops in India
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
            We designed our software from scratch around the requirements of Indian garage owners and mechanics. 
          </p>
          <div className="space-y-3 mb-8 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <FaCheck className="text-green-500 w-3.5 h-3.5" />
              <span>GST-compliant invoicing (SGST, CGST, and IGST calculations).</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-green-500 w-3.5 h-3.5" />
              <span>Pricing plans set in affordable INR ranges with quarterly/annual durations.</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-green-500 w-3.5 h-3.5" />
              <span>Indian workshop workflow structures (mechanic logs, parts margins).</span>
            </div>
          </div>

          <Link href="/pricing">
            <Button
              variant="hero"
              onClick={handleCtaClick}
            >
              View GarageSaarthi Pricing
            </Button>
          </Link>
        </div>

        {/* Right Composition */}
        <div className="bg-white border border-slate-200/80 p-8 rounded-3xl text-center space-y-4">
          <span className="text-[10px] uppercase font-bold text-slate-400">Indian Workshop Billing</span>
          <div className="border border-slate-100 p-6 rounded-2xl bg-slate-50/50 space-y-3">
            <div className="flex justify-between text-xs text-slate-600 font-medium">
              <span>GST Invoicing</span>
              <span className="text-green-600 font-bold">100% Tax Compliant</span>
            </div>
            <div className="flex justify-between text-xs text-slate-600 font-medium">
              <span>WhatsApp Alerts</span>
              <span className="text-green-600 font-bold">Local Numbers Supported</span>
            </div>
            <div className="flex justify-between text-xs text-slate-600 font-medium">
              <span>Pricing Plans</span>
              <span className="text-slate-900 font-bold">INR Billing Setup</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

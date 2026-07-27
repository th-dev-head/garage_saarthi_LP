import React from "react";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { trackEvent } from "@/src/utils/pixel";
import Button from "../../common/Button";
import GradientUnderline from "../../common/GradientUnderline";

const checkItems = [
  "GST-compliant invoicing (SGST, CGST, and IGST calculations).",
  "Pricing plans set in affordable INR ranges with quarterly/annual durations.",
  "Indian workshop workflow structures (mechanic logs, parts margins)."
];

const billingCardRows = [
  { label: "GST Invoicing", value: "100% Tax Compliant", valueClass: "text-green-600 font-bold" },
  { label: "WhatsApp Alerts", value: "Local Numbers Supported", valueClass: "text-green-600 font-bold" },
  { label: "Pricing Plans", value: "INR Billing Setup", valueClass: "text-slate-900 font-bold" }
];

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
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Top: Badge, Heading, Paragraph */}
        <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
          Made For India
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-text-dark mt-4 mb-6 leading-tight">
          Garage ERP Software Built for{" "}
          <GradientUnderline>Workshops in India</GradientUnderline>
        </h2>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
          We designed our software from scratch around the requirements of Indian garage owners and mechanics.
        </p>

        {/* Flex row: Checklist + Billing Card */}
        <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
          {/* Checklist */}
          <div className="space-y-3 text-xs text-slate-600 flex-1">
            {checkItems.map((text, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <FaCheck className="text-green-500 w-3.5 h-3.5" />
                <span>{text}</span>
              </div>
            ))}
            {/* Button */}
            <div className="pt-2">
              <Link href="/pricing">
                <Button variant="hero" onClick={handleCtaClick}>
                  View GarageSaarthi Pricing
                </Button>
              </Link>
            </div>
          </div>

          {/* Billing Card */}
          <div className="bg-white border border-slate-200/80 p-6 rounded-3xl text-center space-y-4 flex-1">
            <span className="text-[10px] uppercase font-bold text-slate-400">Indian Workshop Billing</span>
            <div className="border border-slate-100 p-4 rounded-2xl bg-slate-50/50 space-y-3">
              {billingCardRows.map((row, idx) => (
                <div key={idx} className="flex justify-between text-xs text-slate-600 font-medium">
                  <span>{row.label}</span>
                  <span className={row.valueClass}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



"use client";

import React from "react";
import Link from "next/link";
import GradientUnderline from "../../common/GradientUnderline";
import { trackEvent } from "@/src/utils/pixel";

export default function CWBilling() {
  const handleLinkClick = (name, url) => {
    trackEvent("feature_click", {
      page_path: "/solutions/car-workshop-software",
      cta_location: "billing_section",
      cta_label: name,
      destination: url
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 bg-white border border-slate-200/50 rounded-3xl p-6 shadow-sm flex flex-col justify-between aspect-[4/3] relative">
          <div className="space-y-4 my-auto">
            <div className="border-b border-slate-200/60 pb-3">
              <span className="text-xs text-slate-500 font-medium">GST Billing</span>
              <p className="text-sm font-bold text-slate-800">GST Invoice Active</p>
            </div>
            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex justify-between font-semibold">
                <span>SGST (9%)</span>
                <span>₹360.00</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>CGST (9%)</span>
                <span>₹360.00</span>
              </div>
            </div>
          </div>
          <div className="bg-slate-100 rounded-2xl p-3 text-[11px] text-slate-600 text-center">
            🔒 Invoices records synchronized online
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Billing & Finance
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Handle Workshop Billing, <GradientUnderline>GST Invoices and Payments</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Record every transaction securely. GarageSaarthi lets you generate detailed tax-compliant invoices. When repair tasks are completed, populate the job card billing parameters automatically. Specify CGST, SGST, or IGST rates easily.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="space-y-2">
              <h3 className="text-base font-bold text-slate-800">Workshop Billing</h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                Generate professional bills, configure custom invoice series, and log payments mode details securely.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-bold text-slate-800">Payment & Finance</h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-normal">
                Check pending dues, log expenses, and maintain digital accounts sheets. Explore{" "}
                <Link href="/features/billing" onClick={() => handleLinkClick("Payments Feature Link", "/features/billing")} className="text-primary font-semibold hover:underline">
                  Payments
                </Link>{" "}
                and{" "}
                <Link href="/features/finance" onClick={() => handleLinkClick("Finance Feature Link", "/features/finance")} className="text-primary font-semibold hover:underline">
                  Finance Management
                </Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

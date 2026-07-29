"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Button from "../../common/Button";
import GradientUnderline from "../../common/GradientUnderline";
import { trackEvent } from "@/src/utils/pixel";

const paymentCardFields = [
  { label: "Customer Name", value: "Amit Sharma", valueClass: "text-sm font-bold text-slate-800", border: true },
  { label: "Vehicle Number", value: "GJ-01-AB-1234", valueClass: "text-sm font-semibold text-slate-700", border: true },
  { label: "Outstanding Balance", value: "₹8,450", valueClass: "text-lg font-extrabold text-rose-500", border: false }
];

export default function GFMPayments() {
  const handleFeatureClick = () => {
    trackEvent("payment_feature_click", {
      page_path: "/solutions/garage-finance-management-software",
      cta_location: "payments_section",
      cta_label: "Explore Payment Management",
      destination: "/features/billing"
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 bg-slate-50 border border-slate-200/50 rounded-3xl p-6 shadow-sm flex flex-col justify-between aspect-[4/3] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4">
            <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded-full">
              Pending Dues
            </span>
          </div>
          <div className="space-y-4 my-auto">
            {paymentCardFields.map((field, idx) => (
              <div key={idx} className={field.border ? "border-b border-slate-200/60 pb-3" : ""}>
                <p className="text-xs text-slate-500">{field.label}</p>
                <p className={field.valueClass}>{field.value}</p>
              </div>
            ))}
          </div>
          <div className="bg-slate-200/50 rounded-2xl p-3 text-[11px] text-slate-600 text-center">
            🔒 Garage payment tracking active
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Payment Tracking
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Keep Track of <GradientUnderline>Garage Payments</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Stop losing track of unpaid bills. GarageSaarthi's garage payment tracking software keeps records connected with daily workshop operations. You can see at a glance which customers have pending balances, and record payments directly against job cards or invoice numbers.
          </p>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Record payments across cash, card, UPI, or online bank transfers. By maintaining clean client accounts, our workshop payment management software makes garage accounts management software audits fast and stress-free.
          </p>
          <div className="pt-2">
            <Link href="/features/billing" onClick={handleFeatureClick}>
              <Button>
                Explore Payment Management <FaArrowRight className="w-3.5 h-3.5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


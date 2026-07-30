"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { trackEvent } from "@/src/utils/pixel";
import GradientUnderline from "../../common/GradientUnderline";

export default function GRASalesRevenue() {
  const handleFinanceClick = () => {
    trackEvent("reports_finance_click", {
      page_path: "/solutions/garage-reports-analytics-software",
      cta_location: "sales_revenue_section",
      cta_label: "Explore Garage Finance Management"
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 order-last lg:order-first bg-white border border-slate-200/60 rounded-3xl p-8 shadow-sm">
          <h3 className="text-base font-bold text-text-dark mb-4">Financial Reports Supported:</h3>
          <ul className="space-y-3 text-xs md:text-sm text-slate-600">
            <li>• Daily sales billing summaries</li>
            <li>• Mode of payment logs (Cash, UPI, Cards)</li>
            <li>• Counter sales reports and invoice lists</li>
            <li>• Expense categories and tracking</li>
          </ul>
        </div>
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Financial Health
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Track Garage Sales, Revenue and <GradientUnderline>Financial Performance</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Monitor billing trends over custom date ranges. Understand cash flow dynamics by checking reports categorized by payment modes, service bills, and counters sales. Perfect for tax calculation and CA auditing.
          </p>
          <div className="pt-2">
            <Link
              href="/features/finance"
              onClick={handleFinanceClick}
              className="rounded-full bg-primary hover:bg-primary-hover text-white px-8 py-3 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 cursor-pointer shadow-md"
            >
              Explore Garage Finance Management <FaArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
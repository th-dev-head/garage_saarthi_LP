"use client";

import React from "react";
import GradientUnderline from "../../common/GradientUnderline";
import Link from "next/link";
import Button from "../../common/Button";
import { trackEvent } from "@/src/utils/pixel";

const challenges = [
  { isPositive: false, title: "Manual calculations:", desc: "High risk of errors in writing down income and daily expenses." },
  { isPositive: false, title: "Scattered payments:", desc: "No centralized record of pending client and supplier dues." },
  { isPositive: true, title: "Connected operations:", desc: "Auto-link job card payments directly into financial dashboards." }
];

export default function GFMDefinition() {
  const handleFeatureClick = () => {
    trackEvent("finance_feature_click", {
      page_path: "/solutions/garage-finance-management-software",
      cta_location: "product_definition",
      cta_label: "Explore Finance Features",
      destination: "/features/finance"
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Centralized Finance
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Manage Your Garage Finances from <GradientUnderline>One Central system</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Many garage owners struggle to understand their true financial performance because records are scattered across paper registers, billing notebooks, Excel sheets, and bank transaction summaries. This fragmentation makes tracking daily cash flow and managing outstanding payments highly stressful.
          </p>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            GarageSaarthi provides a workshop-focused finance management system that integrates transactions, bills, payments, and loans. You can easily record income, track business expenses, and configure roles to give your CA read-only visibility.
          </p>
          <div className="pt-2">
            <Link href="/features/finance" onClick={handleFeatureClick}>
              <Button variant="secondary">
                Explore Finance Features
              </Button>
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5 bg-slate-50 border border-slate-200/60 rounded-3xl p-8 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-text-dark">Financial Challenges Solved</h3>
          <ul className="space-y-3 text-xs md:text-sm text-slate-600">
            {challenges.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className={item.isPositive ? "text-green-500 font-bold" : "text-red-500 font-bold"}>
                  {item.isPositive ? "✓" : "✕"}
                </span>
                <span><strong>{item.title}</strong> {item.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}


"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Button from "../../common/Button";
import { FRONTEND_URL } from "@/src/config/env";
import { trackEvent } from "@/src/utils/pixel";

const heroPayoutRows = [
  { label: "Employee Name:", value: "Rahul Patel", valueClass: "font-semibold text-slate-200", borderTop: false },
  { label: "Payroll Period:", value: "July 2026", valueClass: "font-semibold text-slate-200", borderTop: false },
  { label: "Basic Salary:", value: "₹25,000", valueClass: "font-semibold text-slate-200", borderTop: false },
  { label: "Mechanic Commission:", value: "₹8,450", valueClass: "font-semibold text-slate-200", borderTop: false },
  { label: "Total Payout:", value: "₹33,450", valueClass: "font-bold text-emerald-400", borderTop: true }
];

export default function GPHero() {
  const handleTrialClick = () => {
    trackEvent("payroll_trial_cta_click", {
      page_path: "/solutions/garage-payroll-software/",
      cta_location: "hero",
      cta_label: "Start 7-Day Free Trial",
      destination: `${FRONTEND_URL}/signup`
    });
    window.open(`${FRONTEND_URL}/signup`, "_blank");
  };

  const handlePricingClick = () => {
    trackEvent("payroll_pricing_click", {
      page_path: "/solutions/garage-payroll-software/",
      cta_location: "hero",
      cta_label: "View Pricing",
      destination: "/pricing/"
    });
  };

  return (
    <section className="relative pt-48 pb-24 md:pt-45 md:pb-32 px-4 lg:px-15 2xl:px-50 bg-gradient-to-br from-slate-900 via-slate-800 to-orange-950 text-white overflow-hidden flex justify-center">
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-full lg:max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
          <span className="text-xs uppercase tracking-widest bg-orange-600/30 text-orange-400 px-3 py-1.5 rounded-full border border-orange-500/20 font-semibold mb-6 inline-block">
            Staff & Payroll
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            Garage Payroll Software for Mechanics and Workshop Staff
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8 max-w-2xl">
            Manage mechanic salaries, daily wages, attendance, and employee leave records digitally. Keep your garage staff operations organized within the same workshop management system.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full sm:w-auto">
            <Button variant="trial" onClick={handleTrialClick} icon={<FaArrowRight className="w-3.5 h-3.5" />} className="w-full sm:w-auto">
              Start 7-Day Free Trial
            </Button>
            <Link href="/pricing/" onClick={handlePricingClick} className="rounded-full border border-white/30 bg-white/5 hover:bg-white/10 text-white px-8 py-3 text-sm font-semibold transition-all duration-200 flex items-center justify-center cursor-pointer w-full sm:w-auto whitespace-nowrap h-11 text-center">
              View Pricing
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center">
          <div className="bg-slate-800/80 border border-slate-700/50 rounded-3xl p-6 shadow-2xl w-full max-w-md relative overflow-hidden backdrop-blur-sm">
            <div className="flex items-center justify-between border-b border-slate-700/50 pb-4 mb-4">
              <span className="text-xs font-bold text-slate-400">Employee Payroll Screen</span>
              <span className="bg-orange-500/30 text-orange-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-orange-500/20">Active</span>
            </div>
            <div className="space-y-4">
              {heroPayoutRows.map((row, idx) => (
                <div key={idx} className={`flex justify-between items-center text-xs md:text-sm ${row.borderTop ? "border-t border-slate-700/50 pt-3" : ""}`}>
                  <span className={`text-slate-400 ${row.borderTop ? "font-bold" : ""}`}>{row.label}</span>
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


"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaCalculator,
  FaArrowRight,
  FaChevronRight,
  FaInfoCircle,
  FaFileInvoiceDollar,
} from "react-icons/fa";
import PageLayout from "@/src/components/common/PageLayout";
import Button from "@/src/components/common/Button";
import GradientUnderline from "@/src/components/common/GradientUnderline";
import PlayStoreBadge from "@/src/components/common/PlayStoreBadge";
import AppStoreBadge from "@/src/components/common/AppStoreBadge";
import AccordionFAQ from "@/src/components/common/AccordionFAQ";
import PromoCTA from "@/src/components/common/PromoCTA";
import { FRONTEND_URL } from "@/src/config/env";
import { trackEvent } from "@/src/utils/pixel";

export default function ProfitMarginCalculatorView() {
  const [currency, setCurrency] = useState("₹");
  const [revenue, setRevenue] = useState(500000);
  const [partsCost, setPartsCost] = useState(180000);
  const [mechanicWages, setMechanicWages] = useState(90000);
  const [overheadCost, setOverheadCost] = useState(110000);

  // Computations
  const totalCogs = Number(partsCost) + Number(mechanicWages);
  const grossProfit = Math.max(0, Number(revenue) - totalCogs);
  const grossMarginPct = revenue > 0 ? ((grossProfit / revenue) * 100).toFixed(1) : 0;

  const netProfit = Number(revenue) - totalCogs - Number(overheadCost);
  const netMarginPct = revenue > 0 ? ((netProfit / revenue) * 100).toFixed(1) : 0;

  const isHealthy = netMarginPct >= 20;
  const isModerate = netMarginPct >= 10 && netMarginPct < 20;

  const handleTrialClick = () => {
    trackEvent("trial_cta_click", {
      page_path: "/resources/tools/garage-profit-margin-calculator/",
      page_name: "profit_margin_calculator",
      cta_location: "calculator_cta",
      cta_label: "Start 7-Day Free Trial",
      destination: `${FRONTEND_URL}/signup`,
    });
    window.open(`${FRONTEND_URL}/signup`, "_blank");
  };

  const calculatorFaqs = [
    {
      question: "What is an ideal gross profit margin for an automotive workshop?",
      answer:
        "High-performing workshops typically aim for a 55% to 65% gross profit margin. Labour typically yields 70%–80% gross margin, while spare parts markup usually delivers 30%–45% gross margin.",
    },
    {
      question: "What is the difference between Gross Margin and Net Margin in a garage?",
      answer:
        "Gross Margin measures revenue minus direct job costs (spare parts and technician wages). Net Margin deducts all fixed workshop overheads (shop rent, electricity, software subscriptions, insurance, and equipment EMI) from Gross Margin.",
    },
    {
      question: "Can GarageSaarthi calculate these profit numbers automatically per job card?",
      answer:
        "Yes! GarageSaarthi automatically tracks spare parts purchase cost versus billing price and computes mechanic billable hours per job card, giving you real-time profit reports without manual spreadsheets.",
    },
  ];

  return (
    <PageLayout>
      {/* 1. Hero: Dark gradient with pt-48 matching rest of site */}
      <section className="relative pt-48 pb-20 md:pt-45 md:pb-24 px-4 lg:px-15 2xl:px-50 bg-gradient-to-br from-slate-900 via-slate-800 to-orange-950 text-white overflow-hidden flex justify-center">
        {/* Decorative Blobs */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-full lg:max-w-5xl w-full relative z-10 flex flex-col items-center text-center">
          {/* Breadcrumbs */}
          <nav className="flex items-center justify-center gap-2 text-xs text-slate-400 mb-6 font-medium flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <FaChevronRight className="w-2 h-2 text-slate-500" />
            <Link href="/resources/" className="hover:text-white transition-colors">
              Resources
            </Link>
            <FaChevronRight className="w-2 h-2 text-slate-500" />
            <Link href="/resources/tools/" className="hover:text-white transition-colors">
              Tools
            </Link>
            <FaChevronRight className="w-2 h-2 text-slate-500" />
            <span className="text-orange-400 font-semibold">Profit Margin Calculator</span>
          </nav>

          {/* Eyebrow Badge */}
          <span className="text-xs uppercase tracking-widest bg-orange-600/30 text-orange-400 px-3.5 py-1.5 rounded-full border border-orange-500/20 font-semibold mb-6 inline-flex items-center gap-2">
            <FaCalculator className="w-3.5 h-3.5" />
            <span>Free Interactive Automotive Financial Tool</span>
          </span>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight max-w-4xl">
            Workshop Profit Margin &{" "}
            <GradientUnderline>Markup Calculator</GradientUnderline>
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-slate-300 mb-8 max-w-2xl leading-relaxed">
            Enter your monthly revenue, parts costs, mechanic wages, and shop overhead to calculate your real Gross & Net Profit margins instantly.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-8">
            <Button
              variant="hero"
              onClick={handleTrialClick}
              className="w-full sm:w-auto text-base !py-3.5 !px-8 cursor-pointer shadow-lg hover:shadow-orange-500/25 transition-all"
            >
              Start 7-Day Free Trial
              <FaArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Link
              href="/resources/templates/"
              className="w-full sm:w-auto px-6 py-3.5 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-white text-sm font-semibold transition-all inline-flex items-center justify-center"
            >
              Download Job Card Templates
            </Link>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 w-full">
            <PlayStoreBadge />
            <AppStoreBadge />
          </div>
        </div>
      </section>

      {/* 2. Calculator Body */}
      <section className="py-16 md:py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
        <div className="mx-auto max-w-full lg:max-w-5xl w-full">
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            {/* Left Inputs Column */}
            <div className="lg:col-span-7 p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-slate-100">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <FaFileInvoiceDollar className="text-[#B02E0C] w-4 h-4" /> Monthly Workshop Financials
                </h2>

                {/* Currency Selector */}
                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-bold text-slate-700">
                  {["₹", "$", "AED", "SAR", "£"].map((curr) => (
                    <button
                      key={curr}
                      onClick={() => setCurrency(curr)}
                      className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                        currency === curr ? "bg-[#B02E0C] text-white shadow-xs" : "hover:text-black"
                      }`}
                    >
                      {curr}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                {/* Revenue */}
                <div>
                  <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-2">
                    <label htmlFor="revenueInput">Total Monthly Revenue (Parts + Labour)</label>
                    <span className="text-[#B02E0C] font-mono">{currency} {Number(revenue).toLocaleString()}</span>
                  </div>
                  <input
                    id="revenueInput"
                    type="number"
                    value={revenue}
                    onChange={(e) => setRevenue(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#B02E0C] text-sm font-semibold"
                  />
                </div>

                {/* Parts Cost */}
                <div>
                  <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-2">
                    <label htmlFor="partsCostInput">Monthly Parts & Fluids Purchase Cost (COGS)</label>
                    <span className="text-slate-600 font-mono">{currency} {Number(partsCost).toLocaleString()}</span>
                  </div>
                  <input
                    id="partsCostInput"
                    type="number"
                    value={partsCost}
                    onChange={(e) => setPartsCost(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#B02E0C] text-sm font-semibold"
                  />
                </div>

                {/* Mechanic Wages */}
                <div>
                  <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-2">
                    <label htmlFor="wagesInput">Direct Technician & Mechanic Wages</label>
                    <span className="text-slate-600 font-mono">{currency} {Number(mechanicWages).toLocaleString()}</span>
                  </div>
                  <input
                    id="wagesInput"
                    type="number"
                    value={mechanicWages}
                    onChange={(e) => setMechanicWages(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#B02E0C] text-sm font-semibold"
                  />
                </div>

                {/* Fixed Overheads */}
                <div>
                  <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-2">
                    <label htmlFor="overheadInput">Monthly Fixed Overheads (Rent, Utilities, Software)</label>
                    <span className="text-slate-600 font-mono">{currency} {Number(overheadCost).toLocaleString()}</span>
                  </div>
                  <input
                    id="overheadInput"
                    type="number"
                    value={overheadCost}
                    onChange={(e) => setOverheadCost(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#B02E0C] text-sm font-semibold"
                  />
                </div>
              </div>
            </div>

            {/* Right Live Results Column */}
            <div className="lg:col-span-5 bg-slate-50 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Calculated Results
                  </span>
                  <span
                    className={`text-[11px] font-extrabold px-3 py-1 rounded-full ${
                      isHealthy
                        ? "bg-emerald-100 text-emerald-800"
                        : isModerate
                        ? "bg-amber-100 text-amber-800"
                        : "bg-rose-100 text-rose-800"
                    }`}
                  >
                    {isHealthy ? "Healthy Performance" : isModerate ? "Moderate Margin" : "Margin Alert"}
                  </span>
                </div>

                {/* Gross Margin Card */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 mb-4 shadow-xs">
                  <p className="text-xs font-semibold text-slate-500">Gross Profit (Revenue - Direct Costs)</p>
                  <div className="flex items-baseline justify-between mt-1">
                    <span className="text-2xl font-black text-slate-900 font-mono">
                      {currency} {grossProfit.toLocaleString()}
                    </span>
                    <span className="text-sm font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-lg">
                      {grossMarginPct}% Margin
                    </span>
                  </div>
                </div>

                {/* Net Profit Card */}
                <div
                  className={`p-5 rounded-2xl border mb-6 shadow-xs ${
                    netProfit >= 0 ? "bg-white border-slate-200/80" : "bg-rose-50 border-rose-200"
                  }`}
                >
                  <p className="text-xs font-semibold text-slate-500">Net Operating Profit (After Overheads)</p>
                  <div className="flex items-baseline justify-between mt-1">
                    <span
                      className={`text-2xl font-black font-mono ${
                        netProfit >= 0 ? "text-[#B02E0C]" : "text-rose-600"
                      }`}
                    >
                      {currency} {netProfit.toLocaleString()}
                    </span>
                    <span
                      className={`text-sm font-bold px-2 py-0.5 rounded-lg ${
                        isHealthy
                          ? "bg-emerald-100 text-emerald-700"
                          : isModerate
                          ? "bg-amber-100 text-amber-700"
                          : "bg-rose-100 text-rose-700"
                      }`}
                    >
                      {netMarginPct}% Net Margin
                    </span>
                  </div>
                </div>

                {/* Benchmark Advice */}
                <div className="text-xs text-slate-600 leading-relaxed space-y-2 p-4 bg-white rounded-2xl border border-slate-200/60 shadow-xs">
                  <p className="font-bold text-slate-800 flex items-center gap-1.5">
                    <FaInfoCircle className="text-[#B02E0C] w-3 h-3" /> Workshop Benchmark Insights:
                  </p>
                  {isHealthy ? (
                    <p>
                      Your net profit margin ({netMarginPct}%) meets or exceeds the target of 20%+. Focus on recurring customer retention and maximizing technician billable bay hours.
                    </p>
                  ) : isModerate ? (
                    <p>
                      Your net margin ({netMarginPct}%) is acceptable but leaves little cushion. Consider increasing parts markup on fast-moving filters and fluids by 5%–10%.
                    </p>
                  ) : (
                    <p className="text-rose-700">
                      Your net margin ({netMarginPct}%) is below sustainable levels. You likely have unbilled mechanic idle hours or unrecovered shop overheads.
                    </p>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <Button
                  variant="hero"
                  onClick={handleTrialClick}
                  className="w-full !py-3 !px-4 text-xs cursor-pointer shadow-md flex items-center justify-center gap-2"
                >
                  Automate Financial Reports in GarageSaarthi
                  <FaArrowRight className="w-3 h-3 ml-1" />
                </Button>
              </div>
            </div>
          </div>

          {/* Explainer Card */}
          <div className="mt-12 bg-white rounded-2xl p-8 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
              Financial Benchmark Guide
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              How Automotive Repair Margins are Computed
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Many independent auto workshops price repairs based on gut feeling without factoring in their real bay overhead absorption. By separating direct job costs (parts + direct technician hours) from shop overhead (rent, electricity, software subscriptions), you ensure every job card is profitable.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70">
                <h4 className="text-xs font-bold text-slate-900 uppercase">Gross Margin Formula</h4>
                <p className="text-xs text-slate-600 mt-2 font-mono bg-white p-2.5 rounded-xl border border-slate-200">
                  ((Revenue - (Parts + Wages)) / Revenue) × 100
                </p>
                <p className="text-[11px] text-slate-500 mt-2">Target Benchmark: 55% to 65%</p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70">
                <h4 className="text-xs font-bold text-slate-900 uppercase">Net Margin Formula</h4>
                <p className="text-xs text-slate-600 mt-2 font-mono bg-white p-2.5 rounded-xl border border-slate-200">
                  ((Gross Profit - Overheads) / Revenue) × 100
                </p>
                <p className="text-[11px] text-slate-500 mt-2">Target Benchmark: 20% to 25%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAQ Section */}
      <AccordionFAQ
        className="bg-white border-t border-slate-100"
        title="Frequently Asked"
        titleHighlight="Questions"
        subtitle="Learn how to track and optimize workshop profit margins."
        faqs={calculatorFaqs}
      />

      {/* 4. Bottom Promo CTA */}
      <PromoCTA
        title="Ready to Put Your Garage Profits on Autopilot?"
        subtitle="Automate job card margins, track technician billable hours, and plug spare parts leakages with GarageSaarthi."
        bgClass="bg-slate-50"
      />
    </PageLayout>
  );
}

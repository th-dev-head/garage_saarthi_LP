"use client";

import React, { useState } from "react";
import {
  FaTags,
  FaChartPie,
  FaCirclePlus,
  FaArrowTrendUp,
  FaArrowTrendDown,
  FaFilter,
  FaWallet,
  FaLayerGroup,
  FaCircleCheck,
  FaCoins
} from "react-icons/fa6";
import GradientUnderline from "../../common/GradientUnderline";

const analyticsTabs = [
  { id: "all", label: "All Overview" },
  { id: "expense", label: "Expense Categories", color: "text-rose-600" },
  { id: "income", label: "Income Categories", color: "text-emerald-600" }
];

const kpiStats = [
  {
    label: "Total Income",
    value: "₹ 23,133.00",
    subtext: "3 entries recorded",
    icon: FaArrowTrendUp,
    iconBg: "bg-emerald-50 text-emerald-600",
    valueColor: "text-emerald-600"
  },
  {
    label: "Total Expenses",
    value: "₹ 1,40,650.00",
    subtext: "26 expense items",
    icon: FaArrowTrendDown,
    iconBg: "bg-rose-50 text-rose-600",
    valueColor: "text-rose-600"
  },
  {
    label: "Net Cashflow",
    value: "- ₹ 1,17,517.00",
    subtext: "Margin: -508.0%",
    icon: FaWallet,
    iconBg: "bg-rose-50 text-rose-500",
    valueColor: "text-rose-600"
  },
  {
    label: "Top Spending",
    value: "Supplier Payment",
    subtext: "₹ 1,06,600.00 (76% of expenses)",
    icon: FaCoins,
    iconBg: "bg-amber-50 text-amber-600",
    valueColor: "text-slate-900"
  }
];

const expenseCategoryBreakdown = [
  { name: "Supplier Payment", percentage: 76, amount: "₹ 1,06,600", color: "#ef4444", barWidth: "76%" },
  { name: "Salary", percentage: 13, amount: "₹ 18,250", color: "#f97316", barWidth: "13%" },
  { name: "Cash Deposit", percentage: 4, amount: "₹ 5,600", color: "#f59e0b", barWidth: "4%" },
  { name: "Cash Withdrawal", percentage: 4, amount: "₹ 5,600", color: "#eab308", barWidth: "4%" },
  { name: "Shop Maintenance", percentage: 1, amount: "₹ 1,400", color: "#84cc16", barWidth: "1%" },
  { name: "Tea/Coffee & Staff", percentage: 1, amount: "₹ 1,400", color: "#06b6d4", barWidth: "1%" },
  { name: "Shop Rent", percentage: 1, amount: "₹ 1,800", color: "#3b82f6", barWidth: "1%" }
];

const incomeCategoryBreakdown = [
  { name: "Bhangar / Scrap Sales", percentage: 48, amount: "₹ 11,100", color: "#8b5cf6", barWidth: "48%" },
  { name: "Cash Deposit", percentage: 25, amount: "₹ 5,783", color: "#3b82f6", barWidth: "25%" },
  { name: "Cash Withdrawal", percentage: 24, amount: "₹ 5,550", color: "#6366f1", barWidth: "24%" },
  { name: "Putha & Waste Packing", percentage: 3, amount: "₹ 700", color: "#06b6d4", barWidth: "3%" }
];

const featureHighlights = [
  {
    icon: FaLayerGroup,
    title: "Multi-Level Category & Subcategory",
    desc: "Organize expenses (e.g. Spare Parts > Engine Oils, Brake Pads) and incomes (e.g. Scrap > Metal, Battery) with unlimited nested subcategories."
  },
  {
    icon: FaCirclePlus,
    title: "Instant Inline Quick-Add",
    desc: "Create new categories or subcategories directly on the fly while recording daily entries without navigating away from the form."
  },
  {
    icon: FaChartPie,
    title: "Visual Category Distribution Analytics",
    desc: "Interactive doughnut distributions and percentage breakdowns highlight exactly where your workshop funds originate and leak."
  },
  {
    icon: FaCircleCheck,
    title: "P&L & Tax Audit Ready Reports",
    desc: "Generate categorized expense statements formatted for GST filing, CA audits, and monthly workshop operational reviews."
  }
];

export default function FCategoryAnalytics() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-flex items-center gap-1.5">
            <FaTags className="w-3 h-3" /> Category & Subcategory Intelligence
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Categorized Incomes & Expenses with <GradientUnderline>Real-Time Analytics</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Stop losing track of petty cash and vendor payables. Group every transaction into customized categories and subcategories to uncover hidden expenses and maximize workshop cash flow.
          </p>
        </div>

        {/* Interactive Category Analytics Dashboard Mockup */}
        <div className="bg-slate-50/80 border border-slate-200 rounded-3xl p-4 md:p-8 shadow-sm space-y-6">
          {/* Top Control Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {analyticsTabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all cursor-pointer outline-none focus:outline-none focus:ring-0 focus-visible:outline-none select-none border ${
                      isActive
                        ? "bg-white text-slate-900 shadow-xs border-slate-200/90"
                        : "border-transparent text-slate-500 hover:text-slate-900 hover:bg-white/60"
                    }`}
                  >
                    <span className={tab.color || ""}>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Time Filter Mockup */}
            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl border border-slate-200 text-xs text-slate-700 shadow-2xs">
              <FaFilter className="w-3 h-3 text-slate-400" />
              <span className="font-semibold">Period: All Time</span>
            </div>
          </div>

          {/* KPI Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {kpiStats.map((kpi, idx) => {
              const Icon = kpi.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/90 rounded-2xl p-4 space-y-2 shadow-2xs hover:shadow-xs transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500">{kpi.label}</span>
                    <div className={`w-6 h-6 rounded-lg ${kpi.iconBg} flex items-center justify-center text-xs`}>
                      <Icon className="w-3 h-3" />
                    </div>
                  </div>
                  <div className={`text-lg md:text-xl font-bold ${kpi.valueColor}`}>
                    {kpi.value}
                  </div>
                  <p className="text-[11px] text-slate-400 font-medium">{kpi.subtext}</p>
                </div>
              );
            })}
          </div>

          {/* Dual Category Breakdown Visuals */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Expense Breakdown Card */}
            {(activeTab === "all" || activeTab === "expense") && (
              <div className="bg-white border border-slate-200/90 rounded-2xl p-5 space-y-4 shadow-2xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                    <h3 className="text-sm font-bold text-slate-900">Expense by Category</h3>
                  </div>
                  <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-1 rounded-lg border border-rose-100">
                    Total ₹ 1,40,650.00
                  </span>
                </div>

                <div className="space-y-3">
                  {expenseCategoryBreakdown.map((cat, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: cat.color }}
                          />
                          <span className="font-semibold text-slate-700">{cat.name}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-slate-400 font-medium">{cat.amount}</span>
                          <span className="font-bold text-slate-800 w-10 text-right">{cat.percentage}%</span>
                        </div>
                      </div>
                      <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{
                            width: cat.barWidth,
                            backgroundColor: cat.color
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Income Breakdown Card */}
            {(activeTab === "all" || activeTab === "income") && (
              <div className="bg-white border border-slate-200/90 rounded-2xl p-5 space-y-4 shadow-2xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    <h3 className="text-sm font-bold text-slate-900">Income by Category</h3>
                  </div>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-100">
                    Total ₹ 23,133.00
                  </span>
                </div>

                <div className="space-y-3">
                  {incomeCategoryBreakdown.map((cat, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: cat.color }}
                          />
                          <span className="font-semibold text-slate-700">{cat.name}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-slate-400 font-medium">{cat.amount}</span>
                          <span className="font-bold text-slate-800 w-10 text-right">{cat.percentage}%</span>
                        </div>
                      </div>
                      <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{
                            width: cat.barWidth,
                            backgroundColor: cat.color
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Value Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureHighlights.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/80 p-6 rounded-3xl space-y-3 shadow-2xs hover:border-primary/40 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-2xl bg-orange-100/70 text-primary flex items-center justify-center font-bold">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 leading-snug">{feature.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

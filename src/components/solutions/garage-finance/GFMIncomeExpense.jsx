"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Button from "../../common/Button";
import GradientUnderline from "../../common/GradientUnderline";
import { FRONTEND_URL } from "@/src/config/env";
import { trackEvent } from "@/src/utils/pixel";

const incomeExpenseCards = [
  {
    icon: "💰",
    iconBg: "bg-emerald-100 text-emerald-600",
    title: "Record Garage Income with Categories",
    desc: "Track service revenue, spare parts sales, counter cash, and scrap disposal (Bhangar/Putha). Group into custom categories & subcategories for complete revenue clarity."
  },
  {
    icon: "📉",
    iconBg: "bg-rose-100 text-rose-600",
    title: "Categorized Workshop Expenses",
    desc: "Log supplier payments, technician salaries, shop rent, utility bills, and tea/coffee. Tag subcategories to detect exactly where operational costs are spiking."
  },
  {
    icon: "📊",
    iconBg: "bg-amber-100 text-amber-600",
    title: "Category Analytics & Visual Breakdowns",
    desc: "Get automated doughnut charts, percentage distribution cards, and month-over-month trends comparing income vs expenses for data-backed profit decisions."
  },
  {
    icon: "📁",
    iconBg: "bg-orange-100 text-primary",
    title: "Audit & CA Export Ready Ledgers",
    desc: "Keep digital financial records organized across garage branches. Export categorized P&L statements ready for GST audit and Chartered Accountant review."
  }
];

export default function GFMIncomeExpense() {
  const handleTrialClick = () => {
    trackEvent("finance_trial_cta_click", {
      page_path: "/solutions/garage-finance-management-software/",
      cta_location: "income_expense_section",
      cta_label: "Start Managing Garage Finances",
      destination: `${FRONTEND_URL}/signup`
    });
    window.open(`${FRONTEND_URL}/signup`, "_blank");
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Income & Expenses
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Track Garage Income and Expenses <GradientUnderline>in One Place</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Maintain high-precision daily financial records using our garage income and expense software. Stop searching for missing paper slips and maintain professional-grade expense logs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {incomeExpenseCards.map((card, idx) => (
            <div key={idx} className="bg-white border border-slate-200/50 rounded-3xl p-6 shadow-sm space-y-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl font-bold ${card.iconBg}`}>
                {card.icon}
              </div>
              <h3 className="text-base font-bold text-text-dark">{card.title}</h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-4">
          <Button variant="trial" onClick={handleTrialClick} icon={<FaArrowRight className="w-3.5 h-3.5" />}>
            Start Managing Garage Finances
          </Button>
        </div>
      </div>
    </section>
  );
}


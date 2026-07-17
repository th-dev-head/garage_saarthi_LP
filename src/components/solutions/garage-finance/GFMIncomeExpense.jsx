import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Button from "../../common/Button";
import GradientUnderline from "../../common/GradientUnderline";
import { FRONTEND_URL } from "@/src/config/env";
import { trackEvent } from "@/src/utils/pixel";

export default function GFMIncomeExpense() {
  const handleTrialClick = () => {
    trackEvent("finance_trial_cta_click", {
      page_path: "/solutions/garage-finance-management-software",
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-slate-200/50 rounded-3xl p-8 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 text-xl font-bold">
              💰
            </div>
            <h3 className="text-lg font-bold text-text-dark">Record Garage Income</h3>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              Track overall service revenue, spare parts billing, counter sales, and extra services. Get real-time insight into garage revenue management software records and keep your cash inflows clear.
            </p>
          </div>

          <div className="bg-white border border-slate-200/50 rounded-3xl p-8 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-rose-100 rounded-2xl flex items-center justify-center text-rose-600 text-xl font-bold">
              📉
            </div>
            <h3 className="text-lg font-bold text-text-dark">Record Workshop Expenses</h3>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              Manage operating costs, supplier payments, utility invoices, and salary outlays using our garage expense management software. Maintain a detailed garage expense tracker log without manual journals.
            </p>
          </div>

          <div className="bg-white border border-slate-200/50 rounded-3xl p-8 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 text-xl font-bold">
              📁
            </div>
            <h3 className="text-lg font-bold text-text-dark">Keep Financial Records Organized</h3>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              Keep your digital records unified. Linking expenses directly to specific garage branches or categories ensures your garage income management software files remain up to date and audit-ready.
            </p>
          </div>
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

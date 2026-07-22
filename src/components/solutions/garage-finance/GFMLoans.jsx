import React from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import Button from "../../common/Button";
import GradientUnderline from "../../common/GradientUnderline";
import { trackEvent } from "@/src/utils/pixel";

export default function GFMLoans() {
  const handleFeatureClick = () => {
    trackEvent("loan_feature_click", {
      page_path: "/solutions/garage-finance-management-software",
      cta_location: "loan_section",
      cta_label: "Explore Loan Management",
      destination: "/features/loans"
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Loans Module
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Keep Garage <GradientUnderline>Loan Records Organized</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Many workshop owners utilize business expansion loans or borrow capital for machinery purchases. Keeping track of repayment schedules and outstanding balances can get highly disorganized. Our Loans module lets you record repayment schedules, log EMIs, and keep track of your active liabilities.
          </p>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed text-slate-500 text-xs">
            *Disclaimer: GarageSaarthi is a workshop management software tool and does not provide, broker, approve, or sell loans. We are not a financial or lending institution.
          </p>
          <div className="pt-2">
            <Link href="/features/loans" onClick={handleFeatureClick}>
              <Button>
                Explore Loan Management <FaChevronRight className="w-3.5 h-3.5" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 bg-slate-50 border border-slate-200/50 rounded-3xl p-6 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-text-dark">Loan Outstanding Ledger</h3>
          <div className="space-y-3">
            <div className="p-3 bg-white rounded-xl border border-slate-100 flex justify-between text-xs md:text-sm">
              <span className="text-slate-600 font-medium">Compressor Machine Loan</span>
              <span className="text-rose-500 font-bold">₹1,20,000</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-100 flex justify-between text-xs md:text-sm">
              <span className="text-slate-600 font-medium">Monthly EMI Paid</span>
              <span className="text-slate-800 font-semibold">₹15,000 / Month</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-100 flex justify-between text-xs md:text-sm">
              <span className="text-slate-600 font-medium">Remaining Installments</span>
              <span className="text-slate-800 font-semibold">8 Months</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

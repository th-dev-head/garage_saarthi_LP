import React from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import Button from "../../common/Button";
import GradientUnderline from "../../common/GradientUnderline";
import { trackEvent } from "@/src/utils/pixel";

export default function GACCapabilities() {
  const handleFeatureClick = (name, url) => {
    trackEvent("finance_feature_click", {
      page_path: "/solutions/garage-accounting-software",
      cta_location: "capabilities_section",
      cta_label: name,
      destination: url
    });
  };

  const cards = [
    { title: "Track Garage Payments", desc: "Manage outstanding client balances, UPI/Card payment modes, and log invoices payouts.", linkName: "Explore Payments", url: "/features/payments" },
    { title: "Manage Income & Expenses", desc: "Track operational cash inflow, store purchase bills, and check expenses logs dynamically.", linkName: "Explore Finance Management", url: "/features/finance" },
    { title: "GST Billing & Invoices", desc: "Generate tax-compliant bills with custom invoice series, CGST, and SGST parameters.", linkName: "Explore Billing Features", url: "/features/counter-sales" },
    { title: "Give Your CA Access", desc: "Invite your Chartered Accountant (CA) under a restricted, read-only profile to audit files.", linkName: "Explore CA Access", url: "/features/ca-access" },
    { title: "Manage Garage Loans", desc: "Record machinery loan liabilities, repayment EMI dates, and outstanding calculations.", linkName: "Explore Loan Management", url: "/features/loans" },
    { title: "View Financial Reports", desc: "Get real-time operational collections data, payment mode audits, and monthly metrics.", linkName: "Explore Garage Reports", url: "/features/reports" }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Financial Features
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Manage Your Garage Finances <GradientUnderline>from One Platform</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Discover how GarageSaarthi helps workshops streamline billing, structure expense logs, and manage active loans online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((c, idx) => (
            <div key={idx} className="bg-white border border-slate-200/50 rounded-3xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
              <div className="space-y-3">
                <span className="text-2xl">📊</span>
                <h3 className="text-base font-bold text-text-dark">{c.title}</h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">{c.desc}</p>
              </div>
              <div className="pt-6">
                <Link href={c.url} onClick={() => handleFeatureClick(c.linkName, c.url)}>
                  <Button variant="secondary" className="w-full text-xs">
                    {c.linkName} <FaChevronRight className="w-2.5 h-2.5" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

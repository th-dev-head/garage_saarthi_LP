import React from "react";
import Link from "next/link";
import { FaCreditCard, FaCoins, FaHandHoldingUsd, FaUserTie, FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function FinancePromo() {
  const financeFeatures = [
    { icon: <FaCreditCard className="w-5 h-5" />, label: "Payments Tracking", desc: "Track cash, card, and UPI collections.", link: "/features/billing" },
    { icon: <FaCoins className="w-5 h-5" />, label: "Finance & Expenses", desc: "Log daily shop expenses and vendor bills.", link: "/features/finance" },
    { icon: <FaHandHoldingUsd className="w-5 h-5" />, label: "Credit & Loans", desc: "Record advances and customer balances.", link: "/features/loans" },
    { icon: <FaUserTie className="w-5 h-5" />, label: "CA Access Reports", desc: "Download consolidated data for tax audit.", link: "/features/ca-access" }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-4">
            Keep Garage Finances Organized <span className="relative inline-block">and Give Your CA Access.<span className="absolute -bottom-1 left-0 w-full h-1 rounded-full bg-[linear-gradient(90deg,#B02E0C_0%,#FF643C_100%)]"></span></span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Keep your workshop cash flows under control. Generate audit-ready reports and share them with your chartered accountant.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {financeFeatures.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 p-6 rounded-xl border border-slate-200/60 shadow-sm hover:border-primary/30 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-950 mb-2">{item.label}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{item.desc}</p>
              </div>
              <Link
                href={item.link}
                className="text-xs font-bold text-primary hover:text-primary-hover transition-colors inline-flex items-center gap-1"
              >
                Explore <FaArrowRight />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

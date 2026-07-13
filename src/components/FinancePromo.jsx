import React from "react";
import Link from "next/link";
import { FaCreditCard, FaCoins, FaHandHoldingUsd, FaUserTie } from "react-icons/fa";

export default function FinancePromo() {
  const financeFeatures = [
    { icon: <FaCreditCard className="w-5 h-5" />, label: "Payments Tracking", desc: "Track cash, card, and UPI collections.", link: "/features/payments" },
    { icon: <FaCoins className="w-5 h-5" />, label: "Finance & Expenses", desc: "Log daily shop expenses and vendor bills.", link: "/features/finance" },
    { icon: <FaHandHoldingUsd className="w-5 h-5" />, label: "Credit & Loans", desc: "Record advances and customer balances.", link: "/features/loans" },
    { icon: <FaUserTie className="w-5 h-5" />, label: "CA Access Reports", desc: "Download consolidated data for tax audit.", link: "/features/ca-access" }
  ];

  return (
    <section className="py-20 px-4 bg-white border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-4">
            Keep Garage Finances Organized and Give Your CA Access
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Keep your workshop cash flows under control. Generate audit-ready reports and share them with your chartered accountant.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {financeFeatures.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 p-6 rounded-xl border border-slate-200/60 shadow-sm hover:border-orange-200 transition-colors flex flex-col justify-between"
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
                Explore &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Link from "next/link";
import { FaFileInvoiceDollar, FaCreditCard, FaLock, FaChartBar, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const financeCards = [
  {
    icon: <FaFileInvoiceDollar />,
    title: "GST-Compliant Invoicing",
    desc: "Generate professional job card invoices with multi-item GST taxation. Supports HSN codes and service charges.",
  },
  {
    icon: <FaCreditCard />,
    title: "Multi-Mode Payments",
    desc: "Track payments via cash, UPI, cards, and digital wallets. Keep clean settlement records for every invoice.",
  },
  {
    icon: <FaLock />,
    title: "Read-Only CA Access",
    desc: "Provide secure, restricted login access to your CA/accountant to download GST data and tax-ready reports.",
  },
  {
    icon: <FaChartBar />,
    title: "Profit & Loss Reports",
    desc: "Get instant day-end, monthly, and yearly reports on revenue, expenses, outstanding payments, and profit margins.",
  },
];

export default function WMFinance() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-4">
            Simplify Workshop Billing &{" "}
            <GradientUnderline>Accounts Management.</GradientUnderline>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base">
            No more manual spreadsheet accounting. Manage customer invoices, vendor purchase bills, other expenses, and get clear tax-ready statements.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {financeCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-slate-50 p-6 rounded-xl border border-slate-200/60 shadow-sm hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary mb-4 text-base">
                  {card.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{card.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">{card.desc}</p>
              </div>
              <Link
                href="/features/billing"
                className="text-xs font-bold text-primary hover:text-primary-hover transition-colors inline-flex items-center gap-1"
              >
                Explore Billing <FaArrowRight className="w-3 h-3" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


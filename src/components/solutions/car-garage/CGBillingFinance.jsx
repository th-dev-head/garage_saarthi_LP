import React from "react";
import Link from "next/link";
import { FaFileInvoice, FaMoneyBillWave, FaChartLine, FaUserTie, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const cards = [
  {
    icon: <FaFileInvoice className="w-5 h-5" />,
    title: "Create Garage Invoices",
    desc: "Generate professional, GST-compliant invoices for every car repair and service. Auto-calculate SGST, CGST, and IGST on spare parts and mechanic labour. Share via WhatsApp in one click.",
    links: [
      { label: "Explore Billing", href: "/features/billing/" },
    ],
  },
  {
    icon: <FaMoneyBillWave className="w-5 h-5" />,
    title: "Track Customer Payments",
    desc: "Log cash, UPI, card, and digital wallet payments against each job. Track outstanding balances, customer credit history, and pending dues — all in real time.",
    links: [
      { label: "Payments", href: "/features/billing/" },
    ],
  },
  {
    icon: <FaChartLine className="w-5 h-5" />,
    title: "Organize Garage Finances",
    desc: "Record vendor purchases, operational expenses, and daily cash movement. Get a clear view of your garage's financial position without needing a separate accounting tool.",
    links: [
      { label: "Finance", href: "/features/finance/" },
      { label: "Loans", href: "/features/loans/" },
    ],
  },
  {
    icon: <FaUserTie className="w-5 h-5" />,
    title: "Give Your CA Access",
    desc: "Provide read-only access to your accountant or chartered accountant. Let them download sales reports, purchase records, and GST summaries directly — without sharing full system access.",
    links: [
      { label: "CA Access", href: "/features/ca-access/" },
    ],
  },
];

export default function CGBillingFinance() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Billing & Finance
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-6 leading-tight">
            Manage Garage Billing, Payments and Finances in{" "}
            <GradientUnderline>One System</GradientUnderline>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            From the first repair job invoice to the last payment entry of the day, GarageSaarthi connects your car garage billing and financial records in one place.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-white border border-slate-200/60 p-6 rounded-2xl flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary mb-4">
                  {card.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{card.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">{card.desc}</p>
              </div>
              <div className="flex gap-3 flex-wrap">
                {card.links.map((l, i) => (
                  <Link key={i} href={l.href} className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline">
                    {l.label} <FaArrowRight className="w-2.5 h-2.5" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/features/finance/"
            className="rounded-full bg-primary hover:bg-primary-hover text-white px-6 py-2.5 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
          >
            Explore Garage Finance Management
            <FaArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}


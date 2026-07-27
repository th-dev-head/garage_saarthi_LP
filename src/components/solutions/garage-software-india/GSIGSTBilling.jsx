import React from "react";
import Link from "next/link";
import { FaFileInvoiceDollar, FaUserShield, FaQrcode, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const gstBillingCards = [
  {
    icon: FaFileInvoiceDollar,
    title: "Custom GST Invoice Series",
    desc: "Configure custom invoice numbering rules, separate tax rates for labor vs spare parts, and generate clean GST-compliant bills instantly."
  },
  {
    icon: FaQrcode,
    title: "UPI & Cash Payments",
    desc: "Record cash, Google Pay, PhonePe, Paytm, card swipes, and credit ledger balances dynamically to keep cash drawers balanced."
  },
  {
    icon: FaUserShield,
    title: "View-Only CA Access Portal",
    desc: "Grant direct view-only access to your accountant or CA so they can download monthly GST sales and purchase reports without bothering you."
  }
];

export default function GSIGSTBilling() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Indian GST Compliance
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            GST Billing and Financial Management <GradientUnderline>for Indian Garages</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Filing GST returns shouldn't require days of manual paper reconciliation at the end of every month.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {gstBillingCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div key={idx} className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary text-base">
                  <Icon />
                </div>
                <h3 className="text-sm font-bold text-slate-900">{card.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center">
          <Link
            href="/features/ca-access"
            className="inline-flex items-center gap-2 font-bold text-primary hover:text-primary-hover text-sm transition-colors"
          >
            Explore GST Invoicing & CA Access <FaArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}


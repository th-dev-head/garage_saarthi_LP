import React from "react";
import Link from "next/link";
import { FaAddressCard, FaCar, FaBell, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const wsiCustomerCards = [
  {
    icon: FaAddressCard,
    title: "Customer Profiles",
    desc: "Store customer phone numbers, names, address details, and contact preferences linked directly to their vehicles."
  },
  {
    icon: FaCar,
    title: "Permanent Service History",
    desc: "Review past vehicle repair logs, odometer readings, and replaced spare parts during subsequent workshop visits."
  },
  {
    icon: FaBell,
    title: "Automated Service Alerts",
    desc: "Schedule upcoming periodic maintenance dates and trigger WhatsApp service due notifications automatically."
  }
];

export default function WSICustomerService() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Customer History
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Keep Customer and Vehicle Service <GradientUnderline>Records Organized</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Build long-term customer trust by keeping full service histories accessible in a searchable database.
          </p>
        </div>

        {/* 3 Grid Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {wsiCustomerCards.map((card, idx) => {
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
            href="/features/customers/"
            className="inline-flex items-center gap-2 font-bold text-primary hover:text-primary-hover text-sm transition-colors"
          >
            Explore Customer Records <FaArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}


import React from "react";
import Link from "next/link";
import { FaTasks, FaUserFriends, FaWarehouse, FaPercent, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const operCards = [
  {
    icon: <FaTasks />,
    title: "Track Active Detailing Jobs",
    desc: "Monitor paint correction steps, ceramic curing times, and PPF installations on a live central screen.",
  },
  {
    icon: <FaUserFriends />,
    title: "Customer & Vehicle Logs",
    desc: "Maintain detailed historical logs containing coating types, warranty years, and inspection intervals.",
  },
  {
    icon: <FaWarehouse />,
    title: "Detailing Inventory Check",
    desc: "Audit liquids, compounds, pads, and film roll counts, subtracting stock as items are used.",
  },
  {
    icon: <FaPercent />,
    title: "Detailer Commissions",
    desc: "Allocate commissions to detailers automatically based on jobs completed, avoiding payroll confusion.",
  },
];

export default function CDOperations() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Operations Flow
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Manage Detailing Studio Operations <GradientUnderline>from One System</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Eliminate operational confusion. From booking to delivery, coordinate washing bays, detailers, paint correction steps, chemical inventory, and invoicing centrally.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {operCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-slate-50 p-6 rounded-3xl border border-slate-200/60 shadow-sm hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary mb-4 text-base">
                  {card.icon}
                </div>
                <h3 className="text-sm font-bold text-slate-900 leading-snug">{card.title}</h3>
                <p className="text-xs text-slate-500 leading-normal">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-2">
          <Link
            href="/features/"
            className="inline-flex items-center gap-1.5 font-bold text-primary hover:text-primary-hover text-sm transition-colors"
          >
            Explore Detailing Features <FaArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

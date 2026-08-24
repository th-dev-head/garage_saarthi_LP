import React from "react";
import Link from "next/link";
import { FaBoxOpen, FaClipboardList, FaShoppingCart, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const cards = [
  {
    icon: <FaBoxOpen />,
    title: "Maintain Spare Parts Inventory",
    desc: "Maintain a live list of auto parts, engine oils, and accessories. Track current stock counts and values across branches."
  },
  {
    icon: <FaClipboardList />,
    title: "Monitor Stock Across Garage Operations",
    desc: "Always know if oil filters or brake pads are in stock before starting a repair job to avoid vehicle diagnostic delays."
  },
  {
    icon: <FaShoppingCart />,
    title: "Manage Counter Sales",
    desc: "Invoice spare parts and engine lubricants directly to walk-in customers without creating a full workshop job card."
  }
];

export default function ARSInventory() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Spare Parts Control
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Track Spare Parts and Inventory Used in{" "}
            <GradientUnderline>Repair Jobs</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Running out of basic components delays vehicle deliveries, while over-stocking blocks capital. Keep your inventory organized and handle purchase entries easily.
          </p>
        </div>

        {/* Visual & Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {cards.map((item, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200/80 p-6 rounded-2xl flex flex-col justify-between h-full min-h-[220px]">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#EFE9E7] text-primary flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Links */}
        <div className="mt-8 flex flex-wrap gap-4 items-center justify-center">
          <Link
            href="/features/inventory/"
            className="rounded-full bg-primary hover:bg-primary-hover text-white px-6 py-2.5 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
          >
            Explore Inventory Management
            <FaArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/features/counter-sales/"
            className="text-xs font-bold text-primary hover:underline"
          >
            Explore Counter Sales
          </Link>
        </div>

      </div>
    </section>
  );
}

import React from "react";
import Link from "next/link";
import { FaBoxOpen, FaCashRegister, FaEye, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const items = [
  {
    icon: <FaBoxOpen className="w-5 h-5" />,
    title: "Track Garage Inventory",
    desc: "Maintain a live catalogue of all spare parts, lubricants, and accessories stocked in your car garage. Set low-stock thresholds and get warnings before fast-moving items run out.",
    link: "/features/inventory",
    linkLabel: "Explore Inventory",
  },
  {
    icon: <FaCashRegister className="w-5 h-5" />,
    title: "Manage Counter Sales",
    desc: "Record direct spare parts sales to walk-in customers at the counter — separate from job card repairs. Maintain accurate stock deduction and billing for every counter transaction.",
    link: "/features/counter-sales",
    linkLabel: "Explore Counter Sales",
  },
  {
    icon: <FaEye className="w-5 h-5" />,
    title: "Improve Stock Visibility",
    desc: "See exactly what is available in your car garage inventory at any moment. Track purchase history, parts consumption per job card, and closing stock across your workshop.",
    link: "/features/inventory",
    linkLabel: "Explore Stock Reports",
  },
];

export default function CGInventory() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="mb-12">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Inventory & Counter Sales
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Manage Spare Parts Inventory and{" "}
            <GradientUnderline>Counter Sales</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-3xl">
            Keep every spare part accounted for. GarageSaarthi connects your car garage inventory directly to job cards and billing, so you always know what is in stock and what has been used.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200/60 p-6 rounded-2xl flex flex-col justify-between shadow-sm hover:-translate-y-1 hover:shadow-md hover:bg-white hover:border-primary/20 transition-all duration-300 group"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[#EFE9E7] text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">{item.desc}</p>
              </div>
              <Link
                href={item.link}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-hover transition-colors"
              >
                {item.linkLabel} <FaArrowRight className="w-2.5 h-2.5" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/features/inventory"
            className="rounded-full bg-primary hover:bg-primary-hover text-white px-6 py-2.5 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
          >
            Explore Inventory Management
            <FaArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}


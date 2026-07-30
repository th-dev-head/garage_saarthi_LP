import React from "react";
import Link from "next/link";
import { FaBoxOpen, FaClipboardList, FaShoppingCart, FaStore, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const featureList = [
  {
    icon: <FaBoxOpen className="w-5 h-5 text-primary" />,
    title: "Inventory Management",
    desc: "Maintain a live catalog of spare parts, engine oils, and accessories. Track current stock counts and values.",
    link: "/features/inventory",
  },
  {
    icon: <FaClipboardList className="w-5 h-5 text-primary" />,
    title: "Parts Requisition",
    desc: "Track parts issued to technicians for specific job cards. Ensure spare parts are correctly billed to the job.",
    link: "/features/inventory",
  },
  {
    icon: <FaShoppingCart className="w-5 h-5 text-primary" />,
    title: "Purchases",
    desc: "Record spare parts purchases, log vendor details, track purchase bills, and update stock counts automatically.",
    link: "/features/inventory",
  },
  {
    icon: <FaStore className="w-5 h-5 text-primary" />,
    title: "Counter Sales",
    desc: "Sell spare parts and lubricants directly over the counter without opening a job card. Generate bills instantly.",
    link: "/features/counter-sales",
  },
];

export default function AWInventory() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Spare Parts Control
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-6 leading-tight">
            Keep Workshop Inventory and <GradientUnderline>Spare Parts Organized</GradientUnderline>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Running out of basic spares like brake pads or filters delays repairs. Over-stocking expensive items blocks capital. Manage inventory seamlessly.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featureList.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200/80 p-6 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">{item.desc}</p>
              </div>
              <Link
                href={item.link}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-hover transition-colors"
              >
                Learn details <FaArrowRight className="w-2.5 h-2.5" />
              </Link>
            </div>
          ))}
        </div>

        {/* Main CTA */}
        <div className="text-center">
          <Link
            href="/features/inventory"
            className="rounded-full bg-primary hover:bg-primary-hover text-white px-6 py-2.5 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 cursor-pointer whitespace-nowrap"
          >
            Explore Inventory Management
            <FaArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}


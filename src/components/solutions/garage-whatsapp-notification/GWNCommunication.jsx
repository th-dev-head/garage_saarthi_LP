import React from "react";
import Link from "next/link";
import { FaUserPlus, FaCar, FaSearch, FaGift, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function GWNCommunication() {
  const cards = [
    {
      icon: <FaUserPlus className="text-blue-600" />,
      title: "Customer Records",
      link: "/features/customers",
      anchor: "Customer Management",
      desc: "Log customer contact details, query comments, preferences, and messaging history."
    },
    {
      icon: <FaCar className="text-orange-500" />,
      title: "Vehicle Records",
      link: "/features/vehicles",
      anchor: "Vehicle Management",
      desc: "Link odometer readings, insurance papers, chassis details, and repair checklists directly."
    },
    {
      icon: <FaSearch className="text-green-600" />,
      title: "Garage CRM",
      link: "/features/crm",
      anchor: "Garage CRM",
      desc: "Manage leads, walk-ins, and schedule follow-up dates and pipeline statuses."
    },
    {
      icon: <FaGift className="text-purple-500" />,
      title: "Offers & Promotions",
      link: "/features/offers-promotions",
      anchor: "Offers & Promotions",
      desc: "Create and dispatch special coupons, monsoon packages, and loyalty discounts."
    }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            All-In-One Communication
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Keep Garage Customer Communication <GradientUnderline>Organized</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            By connecting notifications directly to your core workshop databases, GarageSaarthi keeps customer and vehicle relationship history consolidated.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((cd, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 shadow-xs flex flex-col justify-between hover:shadow-sm transition-shadow duration-200">
              <div className="space-y-4">
                <div className="bg-white w-9 h-9 rounded-xl border border-slate-200/80 flex items-center justify-center text-sm shadow-xs">
                  {cd.icon}
                </div>
                <h3 className="text-xs font-bold text-slate-900">{cd.title}</h3>
                <p className="text-[10px] text-slate-500 leading-relaxed">{cd.desc}</p>
              </div>
              <div className="pt-4 mt-auto">
                <Link href={cd.link} className="text-primary font-bold text-[10px] hover:underline flex items-center gap-2">
                  {cd.anchor} <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

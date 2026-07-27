import React from "react";
import Link from "next/link";
import { FaTags, FaPercent, FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const offerUseCases = [
  {
    icon: FaCalendarAlt,
    title: "Seasonal Checkup Specials",
    desc: "Launch monsoon safety checks, summer AC service packages, or Diwali festive discount coupons for your customer database."
  },
  {
    icon: FaPercent,
    title: "Service Package Discounts",
    desc: "Bundle oil changes, wheel alignment, and foam washing into attractive discounted package rates for loyal clients."
  },
  {
    icon: FaTags,
    title: "Structured Campaign Management",
    desc: "Track offer validity dates, active promotion codes, and response rates inside your central garage dashboard."
  }
];

export default function GMOffers() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Core Differentiator
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Create Garage Offers and Promotions <GradientUnderline>for Your Customers</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            GarageSaarthi provides garage owners with a structured tool to create, manage, and share promotional offers directly with workshop clients.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {offerUseCases.map((card, idx) => {
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
            href="/features/offers-promotions"
            className="inline-flex items-center gap-2 font-bold text-primary hover:text-primary-hover text-sm transition-colors"
          >
            Explore Offers & Promotions <FaArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}


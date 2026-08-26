import React from "react";
import Link from "next/link";
import { FaTags, FaPercent, FaGift } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const offerCards = [
  {
    badgeText: "Birthday & Occasion",
    badgeClass: "bg-purple-100 text-purple-700 font-bold px-2 py-0.5 rounded text-[8px] uppercase tracking-wider",
    iconBg: "bg-purple-100 text-purple-700",
    icon: FaGift,
    title: "Birthday / Anniversary Gift",
    desc: "Auto-sent greeting with 10% discount on labor or free foam wash.",
    code: "CODE: BDAYGIFT"
  },
  {
    badgeText: "Festive Special",
    badgeClass: "bg-primary/10 text-primary font-bold px-2 py-0.5 rounded text-[8px] uppercase tracking-wider",
    iconBg: "bg-orange-100 text-primary",
    icon: FaTags,
    title: "Monsoon Check-up",
    desc: "Free wiper blades change + washing with every general maintenance.",
    code: "CODE: RAIN100"
  },
  {
    badgeText: "Loyalty Perk",
    badgeClass: "bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded text-[8px] uppercase tracking-wider",
    iconBg: "bg-green-100 text-green-700",
    icon: FaPercent,
    title: "Wheel Alignment Free",
    desc: "Complimentary wheel alignment and balancing for 3rd service visits.",
    code: "CODE: LOYALTYALIGN"
  }
];

export default function GCEOffers() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Column Left */}
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
              Promotions
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
              Reconnect with Customers Through Garage Offers and <GradientUnderline>Promotions</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Create coupons and workshop packages to re-engage dormant customers. Using <strong className="text-primary capitalize">garage customer loyalty software</strong> strategies keeps your workshop top-of-mind during festive seasons or monsoon periods.
            </p>
            
            <p className="text-slate-600 text-sm leading-relaxed">
              Identify customers who haven't visited for more than 90 days, select a campaign template (e.g. free general check-up or AC service discount), and share the notification via WhatsApp. Track coupon usage to build a high-converting <strong className="text-primary capitalize">customer retention software for workshop</strong> workflow.
            </p>

            <div className="pt-4">
              <Link
                href="/features/offers-promotions/"
                className="rounded-full bg-primary hover:bg-primary-hover text-white px-8 py-3 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 cursor-pointer shadow-md"
              >
                Explore <span className="font-bold">Offers & Promotions</span>
              </Link>
            </div>
          </div>

          {/* Visual Column Right (Mock Offer Cards) */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 shadow-sm">
            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block mb-4">
              Active Campaigns
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-xs">
              {offerCards.map((offer, idx) => {
                const Icon = offer.icon;
                return (
                  <div key={idx} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3 relative overflow-hidden">
                    <div className={`absolute top-0 right-0 w-12 h-12 ${offer.iconBg} rounded-bl-full flex items-center justify-center font-bold text-[10px]`}>
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className={offer.badgeClass}>
                      {offer.badgeText}
                    </span>
                    <h4 className="font-bold text-slate-900 text-sm">{offer.title}</h4>
                    <p className="text-[10px] text-slate-500">{offer.desc}</p>
                    <div className="bg-slate-50 p-2 rounded-xl text-[9px] font-bold text-slate-700 text-center border border-dashed border-slate-300">
                      {offer.code}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


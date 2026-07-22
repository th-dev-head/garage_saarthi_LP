import React from "react";
import Link from "next/link";
import { FaTags, FaPercent } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function GCEOffers() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
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
                href="/features/offers-promotions"
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
              
              {/* Offer Card 1 */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-12 h-12 bg-orange-100 rounded-bl-full flex items-center justify-center text-primary font-bold text-[10px]">
                  <FaTags className="w-3.5 h-3.5" />
                </div>
                <span className="bg-primary/10 text-primary font-bold px-2 py-0.5 rounded text-[8px] uppercase tracking-wider">
                  Festive Special
                </span>
                <h4 className="font-bold text-slate-900 text-sm">Monsoon Check-up</h4>
                <p className="text-[10px] text-slate-500">Free wiper blades change + washing with every general maintenance.</p>
                <div className="bg-slate-50 p-2 rounded-xl text-[9px] font-bold text-slate-700 text-center border border-dashed border-slate-300">
                  CODE: RAIN100
                </div>
              </div>

              {/* Offer Card 2 */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-12 h-12 bg-green-100 rounded-bl-full flex items-center justify-center text-green-700 font-bold text-[10px]">
                  <FaPercent className="w-3.5 h-3.5" />
                </div>
                <span className="bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded text-[8px] uppercase tracking-wider">
                  Loyalty Perk
                </span>
                <h4 className="font-bold text-slate-900 text-sm">Wheel Alignment Free</h4>
                <p className="text-[10px] text-slate-500">Complimentary wheel alignment and balancing for 3rd service visits.</p>
                <div className="bg-slate-50 p-2 rounded-xl text-[9px] font-bold text-slate-700 text-center border border-dashed border-slate-300">
                  CODE: LOYALTYALIGN
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

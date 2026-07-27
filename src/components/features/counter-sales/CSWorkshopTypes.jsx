import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function CSWorkshopTypes() {
  const types = [
    { title: "Spare Parts Retail Shops", desc: "Sell automotive spare parts, engine oil, components, and accessories directly to walk-in customers with HSN-compliant billing.", url: "/solutions/garage-billing-software" },
    { title: "Multi-Brand Car Workshops", desc: "Speed up counter transactions for oil changes or single parts sales without opening a full service job card.", url: "/solutions/car-garage-software" },
    { title: "Two-Wheeler Service Centers", desc: "Quick retail checkout for helmets, spark plugs, lubricants, and cables directly from the POS interface.", url: "/solutions/bike-workshop-software" }
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Workshop Models
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Counter Sales POS for <GradientUnderline>Diverse Automotive Retail</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Our counter sales software adapts perfectly to different automotive spare parts and retail operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {types.map((t, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-200 hover:border-primary/30">
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-slate-900">{t.title}</h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">{t.desc}</p>
              </div>
              <div className="pt-6 border-t border-slate-100 mt-6">
                <Link href={t.url} className="text-primary text-xs font-bold hover:underline inline-flex items-center gap-1">
                  Explore Solution <FaArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

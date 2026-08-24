import React from "react";
import Link from "next/link";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const inventoryPoints = [
  {
    title: "Track Two-Wheeler Stock",
    desc: "Maintain detailed records for bike parts including spark plugs, engine oil (Castrol, Motul, etc.), clutch cables, air filters, brake shoes, sprockets, and bulbs.",
  },
  {
    title: "Automate Stock Deductions",
    desc: "When a mechanic checks out a brake pad or spark plug and links it to a job card, the stock count reduces immediately, ensuring real-time stock levels.",
  },
  {
    title: "Direct Counter Sales",
    desc: "Sell lubricants, helmets, or specific accessories directly to customers as walk-in retail counter sales without creating a full job card repair sheet.",
  },
];

export default function BWInventory() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content - Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
              Inventory & Spare Parts
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
              Manage Bike Spare Parts and{" "}
              <GradientUnderline>Workshop Inventory</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Stop leakage of costly spare parts. GarageSaarthi connects your parts inventory directly with your job cards, counter sales, and invoices, giving you absolute control over your workshop stock.
            </p>

            <div className="space-y-4 pt-2">
              {inventoryPoints.map((point, idx) => (
                <div key={idx} className="flex gap-3">
                  <FaCheckCircle className="text-primary w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 mb-0.5">{point.title}</h3>
                    <p className="text-[11px] text-slate-500 leading-normal">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/features/inventory/"
                className="inline-flex items-center gap-1.5 font-bold text-primary hover:text-primary-hover text-sm transition-colors"
              >
                Explore Inventory Management <FaArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Visual card - Right Column */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-sm">
            <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wide border-b border-slate-200/60 pb-3 mb-4">
              Parts Stock Quick Reference
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between text-xs border-b border-slate-200/40 pb-2">
                <span className="font-medium text-slate-700">4T Engine Oil 10W-30 (1L)</span>
                <span className="text-primary font-bold">18 Units</span>
              </div>
              <div className="flex justify-between text-xs border-b border-slate-200/40 pb-2">
                <span className="font-medium text-slate-700">Premium Spark Plug</span>
                <span className="text-primary font-bold">42 Units</span>
              </div>
              <div className="flex justify-between text-xs border-b border-slate-200/40 pb-2">
                <span className="font-medium text-slate-700">Front Brake Shoes (Drum)</span>
                <span className="text-primary font-bold">12 Units</span>
              </div>
              <div className="flex justify-between text-xs border-b border-slate-200/40 pb-2">
                <span className="font-medium text-slate-700">Clutch Cable (Standard)</span>
                <span className="text-emerald-600 font-bold">Low (3 Units)</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="font-medium text-slate-700">Air Filter (Foam Type)</span>
                <span className="text-primary font-bold">15 Units</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

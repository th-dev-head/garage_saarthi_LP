import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

export default function IDefinition() {
  const highlights = [
    { title: "📦 Auto Stock Sync", desc: "Deducts on job card creation", color: "text-primary" },
    { title: "⚠️ Low-Stock Alerts", desc: "Prevents out-of-stock delays", color: "text-orange-600" },
    { title: "🔍 Barcode Scan", desc: "Fast SKU & part lookup", color: "text-emerald-600" },
    { title: "💰 Stock Valuation", desc: "Know exact inventory asset value", color: "text-amber-600" }
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
              Spare Parts Inventory Management
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              Real-Time Stock Tracking & <GradientUnderline>Spare Parts Control</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
              <strong>Garage Inventory Software</strong> gives workshop owners complete visibility over spare parts, lubricants, filters, and accessories stored across your shop drawers and warehouses.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Every time a mechanic issues a spare part to a job card or counter sale, stock levels deduct automatically. Get instant alerts before high-demand items run out, avoiding service delays.
            </p>
          </div>

          <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-3">
              Why Track Garage Inventory Digitally:
            </h3>
            <div className="grid grid-cols-2 gap-4 text-xs md:text-sm">
              {highlights.map((item, idx) => (
                <div key={idx} className="p-3 bg-white rounded-xl border border-slate-200">
                  <span className={`${item.color} font-bold block mb-1`}>{item.title}</span>
                  <span className="text-slate-600">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

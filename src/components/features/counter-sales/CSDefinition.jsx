import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

export default function CSDefinition() {
  const highlights = [
    { title: "🚀 Fast Billing", desc: "30-second retail checkout", color: "text-primary" },
    { title: "📦 Auto Stock Sync", desc: "Instant inventory deduction", color: "text-orange-600" },
    { title: "🧾 GST Compliant", desc: "HSN & tax rates pre-loaded", color: "text-emerald-600" },
    { title: "📲 WhatsApp Receipts", desc: "Send digital bill on phone", color: "text-amber-600" }
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
              What is Workshop Counter Sales POS?
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              Fast Over-The-Counter Billing for <GradientUnderline>Spare Parts & Oils</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
              <strong>Garage Counter Sales Software</strong> (or Spare Parts POS) is a specialized billing system designed for auto repair shops and spare parts retailers to sell items directly to walk-in buyers without opening a vehicle job card.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              When a customer comes only to buy engine oil, brake fluid, or spare components, generate a GST-compliant retail bill in seconds. Inventory levels deduct automatically so your stock counts remain 100% accurate.
            </p>
          </div>

          <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-3">
              Key Features of Counter Sales POS:
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

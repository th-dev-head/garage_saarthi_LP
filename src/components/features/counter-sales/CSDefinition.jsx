import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

export default function CSDefinition() {
  const highlights = [
    { title: "🚀 Garage POS Software", desc: "30-second retail checkout", color: "text-primary" },
    { title: "📦 Spare Parts POS Software", desc: "Instant inventory deduction", color: "text-orange-600" },
    { title: "🧾 GST Billing Software for Garage", desc: "HSN & tax rates pre-loaded", color: "text-emerald-600" },
    { title: "📲 Garage Cash Counter Software", desc: "Send digital bill on phone", color: "text-amber-600" }
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
              Fast <GradientUnderline>Garage Counter Sales Software</GradientUnderline> & Spare Parts POS
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
              <strong>GarageSaarthi Counter Sales Software</strong> is an all-in-one <strong>garage billing POS software</strong> and <strong>workshop sales management software</strong> built for auto workshops, spare parts counters, and retail lubricant stores.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Generate <strong>retail billing software for garage</strong> invoices in under 30 seconds with <strong>counter billing software for garage</strong> and automatic inventory deduction.
            </p>
          </div>

          <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-slate-900">
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

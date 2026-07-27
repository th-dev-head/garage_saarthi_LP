import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

export default function BDefinition() {
  const highlights = [
    { title: "🧾 1-Click Invoice", desc: "Convert job card in 1s", color: "text-primary" },
    { title: "🏛️ GST Compliant", desc: "Pre-loaded HSN & SAC codes", color: "text-orange-600" },
    { title: "📲 WhatsApp PDF", desc: "Send digital bill instantly", color: "text-emerald-600" },
    { title: "💳 Multi-Mode Payment", desc: "Track Cash, UPI, Card, Dues", color: "text-amber-600" }
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
              Garage Billing & Invoicing
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              1-Click GST Invoicing for <GradientUnderline>Auto Repair Workshops</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
              <strong>Garage Billing Software</strong> automates vehicle repair invoicing by linking job cards, spare parts, labor charges, and GST tax rates into a clean, professional invoice.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              No more calculating CGST/SGST on paper calculators or writing manual receipt books. Generate itemized invoices, track partial/advance payments, and share PDF invoices directly on WhatsApp in one click.
            </p>
          </div>

          <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-3">
              Key Highlights of Garage Invoicing:
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

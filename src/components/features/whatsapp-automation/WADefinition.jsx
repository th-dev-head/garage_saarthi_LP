import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

const waWhyPillars = [
  { title: "📱 95%+ Read Rate", titleClass: "text-primary font-bold block mb-1", desc: "Customers open WhatsApp instantly compared to SMS" },
  { title: "📄 1-Click PDF Invoices", titleClass: "text-orange-600 font-bold block mb-1", desc: "Share clean branded bills & estimate copies" },
  { title: "💳 Instant UPI Payments", titleClass: "text-emerald-600 font-bold block mb-1", desc: "Collect payments faster with integrated QR links" },
  { title: "🚀 Instant Approvals", titleClass: "text-amber-600 font-bold block mb-1", desc: "Speed up customer repair approvals by 80%" }
];

export default function WADefinition() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
              WhatsApp Communication System
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
              Speed Up Repair Approvals & Invoicing with <GradientUnderline>WhatsApp Automation</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
              <strong>WhatsApp Automation Software</strong> bridges the gap between workshop mechanics and vehicle owners. No more calling busy clients multiple times for estimate approvals.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              With GarageSaarthi, every repair update, inspection photo, final bill, and payment receipt is automatically sent to the customer's WhatsApp in seconds.
            </p>
          </div>

          <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-slate-900">
              Why WhatsApp Automation is Essential for Garages:
            </h3>
            <div className="grid grid-cols-2 gap-4 text-xs md:text-sm">
              {waWhyPillars.map((item, idx) => (
                <div key={idx} className="p-3 bg-white rounded-xl border border-slate-200">
                  <span className={item.titleClass}>{item.title}</span>
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

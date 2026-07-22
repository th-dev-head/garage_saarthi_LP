import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

export default function GACWhySaarthi() {
  const points = [
    { title: "Designed for Workshops", desc: "Tailored specifically for car, bike, EV, and truck garages, avoiding generic corporate bookkeeping templates." },
    { title: "Connected to Daily Jobs", desc: "Commissions, invoices, and stock updates link directly to payment and finance ledger records automatically." },
    { title: "Restricted CA Access", desc: "Let your CA review and audit invoices without exposing your main administrative credentials." },
    { title: "Custom GST Invoicing", desc: "Raise professional-grade CGST, SGST, or IGST invoices with custom prefixes easily." },
    { title: "Full Web & Android Sync", desc: "Log shift check-ins or review daily collections sheets easily on web or mobile screens." },
    { title: "7-Day Free Trial", desc: "Log in with full access to invoicing, billing, expenses, and loan modules with no commitments." }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Differentiators
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Why Use Garage Accounting Software <GradientUnderline>Instead of Separate Finance Records?</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Discover why workshops across India choose GarageSaarthi to organize their bookkeeping registers and manage transactions online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((p, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200/50 rounded-3xl p-6 shadow-sm space-y-3">
              <h3 className="text-base font-bold text-text-dark flex items-center gap-2">
                <span className="text-primary">✓</span>
                <span>{p.title}</span>
              </h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

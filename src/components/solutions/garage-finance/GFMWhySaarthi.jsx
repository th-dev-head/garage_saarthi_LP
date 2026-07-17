import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

export default function GFMWhySaarthi() {
  const points = [
    { title: "Designed for Workshops", desc: "Tailored specifically for automobile garages, EV centers, and truck/bike workshops, not corporate HR." },
    { title: "Direct Operational Link", desc: "Finance data connects automatically with active job cards, spare parts logs, and invoice entries." },
    { title: "Restricted CA Access", desc: "Let your CA review and audit invoices without exposing your administrative credentials." },
    { title: "Loan Outstanding Ledger", desc: "Track machinery or business loan EMI structures, interest codes, and outstanding liabilities." },
    { title: "Multi-Branch Support", desc: "Manage distinct cash inflow/outflow registers across multiple workshop locations centrally." },
    { title: "Full Web & Android Sync", desc: "Input expense details or review revenue analytics seamlessly on your phone or browser." }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Differentiators
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Why Manage Garage Finances <GradientUnderline>with GarageSaarthi?</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Discover why workshops across India choose our software to organize their bookkeeping records, streamline billing, and manage financial transactions.
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

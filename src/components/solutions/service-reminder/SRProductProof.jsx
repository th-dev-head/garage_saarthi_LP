import React from "react";

export default function SRProductProof() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center border-b border-slate-200/60">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full text-center space-y-8">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Product Verification
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            See How GarageSaarthi Helps Workshops Manage Service Follow-Ups
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Review live dashboard capabilities, service alerts layouts, and communication approval steps:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Service Alerts Dashboard", desc: "Organized next due calendar lists." },
            { title: "WhatsApp Alert Approval", desc: "Simple customer message verification." },
            { title: "Customer & Vehicle Files", desc: "Synchronized historical maintenance sheets." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-slate-200/50 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
              <div className="bg-slate-100 rounded-2xl aspect-[4/3] mb-6 flex items-center justify-center border border-slate-200/60">
                <span className="text-xs text-slate-400">UI Screen Screenshot</span>
              </div>
              <h3 className="text-sm font-bold text-text-dark mb-2">{item.title}</h3>
              <p className="text-xs text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

export default function JCMDefinition() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-cente">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
              What is Digital Job Card Management?
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              Replace Paper Registers with <GradientUnderline>Digital Repair Orders</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
              <strong>Job Card Management Software</strong> enables garage owners and service advisors to record customer complaints, vehicle fuel/mileage levels, estimated delivery times, and required repair work digitally on a phone or computer.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Eliminate handwritten paper slips that get greasy, lost, or misplaced. Send instant PDF repair estimates and inspection photos directly to your customer's WhatsApp in one click.
            </p>
          </div>

          <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-3">
              Why Digital Job Cards Matter:
            </h3>
            <div className="grid grid-cols-2 gap-4 text-xs md:text-sm">
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <span className="text-primary font-bold block mb-1">⚡ Fast Creation</span>
                <span className="text-slate-600">Create repair order in 60s</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <span className="text-orange-600 font-bold block mb-1">📲 WhatsApp Estimate</span>
                <span className="text-slate-600">Send instant PDF quotes</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <span className="text-emerald-600 font-bold block mb-1">📷 Photo Attachment</span>
                <span className="text-slate-600">Log before & after photos</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <span className="text-amber-600 font-bold block mb-1">🧾 1-Click Billing</span>
                <span className="text-slate-600">Convert job card to GST invoice</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

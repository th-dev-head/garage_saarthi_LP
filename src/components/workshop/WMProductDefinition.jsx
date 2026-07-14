import React from "react";
import { FaCheck } from "react-icons/fa";

const capabilities = [
  "Digital job card creation and tracking",
  "GST invoicing and payment collection",
  "Spare parts inventory management",
  "Customer and vehicle history records",
  "Staff attendance and payroll",
  "Service reminders via WhatsApp",
  "Multi-branch central control",
  "Real-time workshop dashboard reports",
];

export default function WMProductDefinition() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
              What is Workshop Management Software
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-snug">
              GarageSaarthi is Your{" "}
              <span className="relative inline-block">
                All-in-One Workshop Operating System.
                <span className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-[linear-gradient(90deg,#B02E0C_0%,#FF643C_100%)]" />
              </span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6 text-sm md:text-base">
              Workshop management software is a digital platform that replaces paper-based processes in automobile workshops. GarageSaarthi brings every operation — from opening a job card to closing the invoice — into one connected, cloud-based system that works on both web and Android.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              Designed for Indian automobile workshops of all sizes — single-bay garages to multi-branch chains — GarageSaarthi is built to fit the way you already work, without complicated setup or technical expertise.
            </p>
          </div>

          {/* Right — capability checklist */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200/60 p-8">
            <p className="text-sm font-bold text-slate-700 mb-5 uppercase tracking-wide">
              What GarageSaarthi Manages
            </p>
            <ul className="space-y-3">
              {capabilities.map((cap, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary mt-0.5">
                    <FaCheck className="w-2.5 h-2.5" />
                  </div>
                  <span className="text-sm text-slate-700 font-medium">{cap}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

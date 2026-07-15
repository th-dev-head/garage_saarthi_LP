import React from "react";
import Link from "next/link";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { FRONTEND_URL } from "@/src/config/env";
import GradientUnderline from "../common/GradientUnderline";


const highlights = [
  "GST-ready invoicing (CGST, SGST, IGST calculations).",
  "Indian Rupee (INR) based currency support.",
  "Tailored localized terminologies (e.g. Job Cards, Spare parts, Labour charges).",
  "Direct WhatsApp templates for estimates, reminders, and updates."
];

export default function ARSIndiaPositioning() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* Left Column */}
          <div>
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
              Built for India
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
              Auto Repair Shop Software{" "}
              <GradientUnderline>Built for Indian Workshops</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
              GarageSaarthi understands the Indian automobile market. Whether you run a local multi-brand car workshop, an authorized electric two-wheeler service center, or a premium detailing shop, we provide features that fit your business needs.
            </p>
            <Link
              href={FRONTEND_URL + "/register"}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-primary hover:bg-primary-hover text-white px-6 py-2.5 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
            >
              Start Your Free Trial
              <FaArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Right Column Checklist */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-8 shadow-sm">
            <h3 className="text-sm font-extrabold text-slate-900 mb-6">Local Capabilities</h3>
            <ul className="space-y-4">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <FaCheckCircle className="text-primary w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-xs md:text-sm font-semibold text-slate-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
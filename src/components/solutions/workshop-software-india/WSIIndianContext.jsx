import React from "react";
import Link from "next/link";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const indianContextPoints = [
  "Custom GST billing series and HSN/SAC breakdown for labor and spare parts",
  "View-only CA portal access for monthly tax filing and invoice exports",
  "Direct WhatsApp sharing for digital job sheet estimates and final invoices",
  "Automated WhatsApp service due notifications to boost customer retention",
  "Mechanic staff attendance, leave approval, and job-based commission tracking",
  "Cash vs UPI payment collection registers to keep daily balances clear",
  "Android and iOS mobile apps for quick bay floor operation on local smartphones",
];

export default function WSIIndianContext() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Localized Operations
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Built for the Way Automobile Workshops <GradientUnderline>Operate in India</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            GarageSaarthi understands how Indian automotive repair businesses handle job cards, stock, staff, and customer communication daily.
          </p>
        </div>

        {/* Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-12">
          {indianContextPoints.map((text, idx) => (
            <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-200/60 shadow-sm">
              <FaCheckCircle className="text-primary w-4 h-4 mt-0.5 flex-shrink-0" />
              <p className="text-xs md:text-sm text-slate-700 font-medium leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xs md:text-sm text-slate-600">
            Explore our specialized{" "}
            <Link href="/solutions/automobile-workshop-software/" className="font-bold text-primary hover:underline">
              automobile workshop software
            </Link>{" "}
            solution.
          </p>
        </div>
      </div>
    </section>
  );
}

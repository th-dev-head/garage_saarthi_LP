import React from "react";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import Link from "next/link";
import GradientUnderline from "../../common/GradientUnderline";

const retentionFields = [
  { label: "Customer", val: "Ramesh Patel", valClass: "text-slate-900 font-bold" },
  { label: "Vehicle", val: "Honda City • GJ 05 CD 5678", valClass: "text-slate-900 font-bold" },
  { label: "Alert Type", val: "Next Service Due (6 Months)", valClass: "text-primary font-bold" },
  { label: "Action", val: "WhatsApp Reminder Sent ✅", valClass: "text-emerald-600 font-bold" }
];

export default function CRMRetention() {
  const checkPoints = [
    "Maintain organized service records connected to customer & vehicle profiles.",
    "Track upcoming service requirements based on calendar alerts and mileage.",
    "Help improve customer follow-ups and marketing coupon distribution."
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left text */}
        <div>
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Customer Retention
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
            Turn Service Records into <GradientUnderline>Better Customer Retention</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
            Workshop relationships should continue after the vehicle is delivered. GarageSaarthi helps you support customer retention efforts and stay connected with existing customers:
          </p>
          <div className="space-y-4 mb-8">
            {checkPoints.map((point, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <FaCheckCircle className="text-green-500 w-4 h-4 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-600 leading-relaxed">{point}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <Link
              href="/features/service-reminders"
              className="text-xs text-primary font-bold hover:underline"
            >
              Explore Service Alerts <FaArrowRight />
            </Link>
            <Link
              href="/features/customer-reviews"
              className="text-xs text-primary font-bold hover:underline"
            >
              Customer Review Collection <FaArrowRight />
            </Link>
          </div>
        </div>

        {/* Right card mockup */}
        <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-3xl shadow-sm space-y-4">
          <span className="text-[10px] uppercase font-bold text-slate-400 block">Retention Alert — Live</span>
          <div className="border border-slate-100 p-6 rounded-2xl bg-white space-y-3">
            {retentionFields.map((field, idx) => (
              <div key={idx} className="flex justify-between text-xs text-slate-600 font-medium">
                <span>{field.label}</span>
                <span className={field.valClass}>{field.val}</span>
              </div>
            ))}
          </div>
          <div className="text-center text-[11px] text-slate-400 mt-2">
            GarageSaarthi automatically sends retention alerts — no manual effort needed.
          </div>
        </div>
      </div>
    </section>
  );
}


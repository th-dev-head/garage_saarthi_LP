import React from "react";
import Link from "next/link";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

const benefits = [
  {
    title: "Create Digital Job Cards",
    desc: "Record customer details, vehicle registration, complaints, and mechanic assignments in under a minute. No more paper job cards getting lost on the garage floor.",
  },
  {
    title: "Record Car Repair Work",
    desc: "Log repair tasks, spare parts used, labor charges, and delivery estimates directly within the job card. Keep every car repair job organized and transparent.",
  },
  {
    title: "Keep Vehicle Work Organized",
    desc: "Each job card links to the customer's vehicle profile. See the full repair timeline for any car at a glance, so your advisors are always informed.",
  },
  {
    title: "Maintain Car Service History",
    desc: "Access complete service history for returning vehicles. Know what was replaced, what was serviced, and what the customer was advised during past visits.",
  },
];

export default function CGJobCards() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="mb-12">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Car Repair Management
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Create and Track Digital Job Cards for{" "}
            <span className="relative inline-block">
              Every Car Repair
              <span className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-[linear-gradient(90deg,#B02E0C_0%,#FF643C_100%)]" />
            </span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-3xl">
            From the moment a customer drives into your car garage to the final delivery, GarageSaarthi keeps every job card, vehicle record, and service note organized digitally — accessible from any device.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Feature List */}
          <div className="space-y-6">
            {benefits.map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary shadow-sm">
                  <FaCheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/features/job-cards"
                className="rounded-full bg-primary hover:bg-primary-hover text-white px-6 py-2.5 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 cursor-pointer whitespace-nowrap"
              >
                Explore Digital Job Cards
                <FaArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="/features/vehicles" className="text-xs font-bold text-primary hover:underline self-center">
                Vehicle Management →
              </Link>
              <Link href="/features/customers" className="text-xs font-bold text-primary hover:underline self-center">
                Customer Records →
              </Link>
            </div>
          </div>

          {/* Visual Card */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-center pb-4 mb-4 border-b border-slate-100 gap-4">
              <span className="text-xs font-bold text-slate-800">Job Card #CGS-4071</span>
              <span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded whitespace-nowrap">
                In Progress
              </span>
            </div>
            <div className="space-y-3 text-xs text-slate-600 break-words">
              <p><strong>Customer:</strong> Amit Sharma</p>
              <p><strong>Vehicle:</strong> Maruti Swift (RJ14 CX 7890)</p>
              <p><strong>Mechanic:</strong> Suresh Kumar</p>
              <p><strong>Complaints:</strong> Engine oil service, AC gas refill, front brake pads replacement</p>
              <p><strong>Delivery Estimate:</strong> Today, 6:00 PM</p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100">
              <p className="text-[10px] text-slate-500 font-medium">Previous Visit: 15 Jan 2025 — Periodic service + tyre rotation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

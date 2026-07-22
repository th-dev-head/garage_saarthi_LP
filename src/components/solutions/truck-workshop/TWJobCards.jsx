import React from "react";
import Link from "next/link";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const benefits = [
  {
    title: "Create Digital Truck Job Cards",
    desc: "Record commercial vehicle license numbers, driver reports, and vehicle complaints in seconds. Allocate technicians or mechanics instantly.",
  },
  {
    title: "Record Repair Work and Job Details",
    desc: "Log major repair tasks, assigned labor items, spare parts substitutes, and progress notes inside the active job card.",
  },
  {
    title: "Keep Workshop Jobs Organized",
    desc: "Get central dashboard visibility on active truck repairs, pending approvals, and completed jobs, reducing garage floor delays.",
  },
];

export default function TWJobCards() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="mb-12">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Job Cards & Workflow
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Create and Track Digital Job Cards for{" "}
            <GradientUnderline>Truck Repairs</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-3xl">
            Streamline your heavy vehicle repair workflow. Log vehicle parameters, assign tasks, and invoice clients digitally — keeping everyone aligned.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left - Benefits */}
          <div className="lg:col-span-7 space-y-6">
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

            <div className="pt-4">
              <Link
                href="/features/job-cards"
                className="inline-flex items-center gap-1.5 font-bold text-primary hover:text-primary-hover text-sm transition-colors"
              >
                Digital Job Card Software <FaArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right - Details list */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-sm">
            <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wide border-b border-slate-200/60 pb-3 mb-4">
              Typical Truck Service Log
            </h4>
            <ul className="space-y-3 text-xs text-slate-600">
              <li className="flex justify-between border-b border-slate-200/40 pb-2">
                <span className="font-bold text-slate-800">Job Card #TW-449</span>
                <span className="bg-orange-100 text-orange-800 px-2 py-0.5 rounded-full text-[9px] font-bold">Active</span>
              </li>
              <li className="flex justify-between border-b border-slate-200/40 pb-2">
                <span>Vehicle: Ashok Leyland 1618</span>
                <span>Mechanic: Rajesh K.</span>
              </li>
              <li className="flex justify-between border-b border-slate-200/40 pb-2">
                <span>Task: Air Brake Line Bleeding</span>
                <span>Labor: ₹1,200</span>
              </li>
              <li className="flex justify-between border-b border-slate-200/40 pb-2">
                <span>Parts: Brake Pads Set (Front)</span>
                <span>Inventory Deducted</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

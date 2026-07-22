import React from "react";
import Link from "next/link";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const benefits = [
  {
    title: "Create Digital Job Cards",
    desc: "Generate professional job cards detailing repair tasks (like wheel alignment, brake overhaul, or scheduled engine maintenance) in under a minute on vehicle arrival.",
  },
  {
    title: "Track Fleet Repair Progress",
    desc: "Monitor ongoing tasks, check mechanic allocations, and track expected delivery dates dynamically on the workshop floor.",
  },
  {
    title: "Keep Fleet Job Records Organized",
    desc: "Ditch manual logs. Map bulk parts used, labor rates, and driver checklists straight to the digital job card.",
  },
];

const services = [
  "Scheduled Preventative Maintenance",
  "Wheel Alignment & Balancing",
  "Air Brake Line Overhauls",
  "Clutch & Gearbox Repair",
  "Engine Reconditioning",
  "Electrical & Wiring Fixes",
  "Accidental Damage Repair",
  "Hub Greasing & Suspension",
];

export default function FLJobCards() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="mb-12">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Fleet Work Orders
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Create and Track Digital Job Cards for{" "}
            <GradientUnderline>Fleet Repairs</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-3xl">
            Track preventative maintenance checkups and major overhauls digitally. Detail driver complaints, pre-repair inspections, and parts allocation instantly.
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
                Explore Digital Job Cards <FaArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right - Simulation log */}
          <div className="lg:col-span-5 bg-white border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-sm">
            <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wide border-b border-slate-200/60 pb-3 mb-4">
              Typical Fleet Work Order
            </h4>
            <div className="space-y-3 text-xs text-slate-600">
              <div className="flex justify-between border-b border-slate-200/40 pb-2">
                <span className="font-bold text-slate-800">Job Card #FL-2049</span>
                <span className="bg-orange-100 text-orange-800 px-2 py-0.5 rounded-full text-[9px] font-bold">Active</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/40 pb-2">
                <span>Vehicle: Ashok Leyland 1618</span>
                <span>Driver: Rajesh Singh</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/40 pb-2">
                <span>Task: Front Hub Greasing</span>
                <span>Labor: ₹900</span>
              </div>
              <div className="flex justify-between">
                <span>Parts: Hub Bearing & Grease</span>
                <span>Inventory Billed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Link from "next/link";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../common/GradientUnderline";


const benefits = [
  { title: "Record Customer Complaints and Repair Details", desc: "Log engine warnings, brake issues, scratching, and basic check-in details easily." },
  { title: "Track Parts and Labour for Each Job", desc: "Allocate repair items, lubricants, spark plugs, and technician labor hours directly." },
  { title: "Keep Repair Records Organized Digitally", desc: "No more searching paper job cards. Save full customer details, vehicle registration numbers, and estimated delivery dates." }
];

export default function ARSJobCards() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">

        {/* Header */}
        <div className="mb-12">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Repair Management
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Create and Track Digital Job Cards for{" "}
            <GradientUnderline>Every Repair</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-3xl">
            Streamline your front-office operations when a vehicle arrives. Record full check-in particulars, allocate mechanics, and update progress states digitally in real-time.
          </p>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

          {/* Feature List */}
          <div className="space-y-6">
            {benefits.map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-slate-200/80 flex items-center justify-center text-primary shadow-sm">
                  <FaCheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
            <Link
              href="/features/job-cards"
              className="rounded-full bg-primary hover:bg-primary-hover text-white px-6 py-2.5 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 cursor-pointer whitespace-nowrap mt-4 inline-block"
            >
              Explore Digital Job Cards
              <FaArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Visual Column */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm w-full max-w-md mx-auto md:max-w-none">
            <div className="flex justify-between items-center pb-4 mb-4 border-b border-slate-100 gap-4">
              <span className="text-xs font-bold text-slate-800">Job Card #ARS-2098</span>
              <span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded whitespace-nowrap">In Progress</span>
            </div>
            <div className="space-y-3 text-xs text-slate-600 break-words">
              <p><strong>Customer:</strong> Ramesh Malaviya</p>
              <p><strong>Vehicle:</strong> Hyundai i20 (GJ05AB1234)</p>
              <p><strong>Mechanic:</strong> Ramesh Kumar</p>
              <p><strong>Complaints:</strong> Periodic oil service, front brake squeal, tyre rotation</p>
              <p><strong>Delivery Estimate:</strong> Today, 5:30 PM</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
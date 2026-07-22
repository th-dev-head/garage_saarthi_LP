import React from "react";
import Link from "next/link";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";


const benefits = [
  "Record customer name, contact details, and vehicle details.",
  "Document vehicle complaints, scratches, and fuel levels.",
  "Assign jobs to specific mechanics/technicians instantly.",
  "Set estimated delivery dates and times for customers.",
  "Update job progress status (Pending, In Progress, Complete).",
  "Convert estimates to live job cards without re-typing data.",
];

export default function AWJobCards() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">

        {/* Section Header — full width */}
        <div className="mb-12">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Automobile Job Cards
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Replace Paper Job Cards with <GradientUnderline>Digital Workshop Job Management</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-3xl">
            Handwritten job cards are easily lost, stained, or misread by mechanics. GarageSaarthi provides a digital job card system that stores vehicle information, customer details, and repair checklists in the cloud.
          </p>
        </div>

        {/* Feature info + Visual Card — side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

          {/* Benefits Checklist Column */}
          <div>
            <ul className="space-y-3 mb-8">
              {benefits.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <FaCheckCircle className="text-primary w-4.5 h-4.5 mt-0.5 flex-shrink-0" />
                  <span className="text-xs md:text-sm text-slate-700 font-semibold leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/features/job-cards"
              className="rounded-full bg-primary hover:bg-primary-hover text-white px-6 py-2.5 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 cursor-pointer whitespace-nowrap"
            >
              Explore Digital Job Cards
              <FaArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Visual Simulation Column */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-center pb-4 mb-4">
              <span className="text-xs font-extrabold text-slate-800">Job Card GS-1082</span>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-primary bg-[#EFE9E7] px-2.5 py-1 rounded-full">
                In Progress
              </span>
            </div>
            <div className="space-y-3 text-xs text-slate-600">
              <p><strong>Customer Name:</strong> Ramesh Malaviya</p>
              <p><strong>Vehicle:</strong> Maruti Baleno (GJ 09 BK 0001)</p>
              <p><strong>Allocated Mechanic:</strong> Ramesh Kumar</p>
              <p><strong>Complaints:</strong> Engine noise, front brake pad replacement, general service</p>
              <p><strong>Delivery Estimate:</strong> Today, 5:30 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


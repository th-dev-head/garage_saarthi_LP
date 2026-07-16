import React from "react";
import Link from "next/link";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const benefits = [
  { title: "Select or Add Customer Details", desc: "Input name, phone number, and branch coordinates." },
  { title: "Select or Add Vehicle Logs", desc: "Save registration number, fuel indicators, and scratches." },
  { title: "Create Job Card and Add Items", desc: "Allocate labor tasks, spare components, and billing parameters." },
  { title: "Track Progress & Status Flows", desc: "Update cards from Pending to In Progress and Completed." }
];

export default function GAJobCardUseCase() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Info */}
          <div>
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
              Job Card App
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
              Create and Track Digital Job Cards{" "}
              <GradientUnderline>from the Garage App</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
              Create digital job sheets in under a minute when a vehicle rolls into the garage. Keep everyone updated on check-in checklists, diagnostics, and repairs.
            </p>
            
            <div className="space-y-4 mb-6">
              {benefits.map((item, idx) => (
                <div key={idx} className="flex gap-3">
                  <FaCheckCircle className="text-primary w-4.5 h-4.5 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-0.5">{item.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/features/job-cards"
              className="rounded-full bg-primary hover:bg-primary-hover text-white px-6 py-2.5 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
            >
              Explore Job Card Management
              <FaArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Visual Column */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 shadow-sm w-full max-w-md mx-auto md:max-w-none">
            <div className="flex justify-between items-center pb-4 mb-4 border-b border-slate-200/60 gap-4">
              <span className="text-xs font-bold text-slate-800">Job Card #GA-1082</span>
              <span className="text-[10px] font-bold text-primary bg-[#EFE9E7] px-2.5 py-1 rounded-full whitespace-nowrap">In Progress</span>
            </div>
            <div className="space-y-3 text-xs text-slate-600 break-words">
              <p><strong>Customer:</strong> Smit Koladiya</p>
              <p><strong>Vehicle:</strong> Maruti Baleno (GJ09BK0001)</p>
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


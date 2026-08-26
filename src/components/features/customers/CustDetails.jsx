import React from "react";
import Link from "next/link";
import GradientUnderline from "../../common/GradientUnderline";

const custRecordSections = [
  {
    title: "Customer Records & Occasions",
    borderStyle: "border-l-4 border-primary",
    desc: "Store contact details, communication history, Birthday and Anniversary dates to trigger automated celebration greetings and loyalty offers."
  },
  {
    title: "Vehicle Records",
    borderStyle: "border-l-4 border-slate-300",
    desc: "Link multiple vehicles under one customer. Log chassis numbers, fuel types, insurance info, and odometer records inside our vehicle database."
  },
  {
    title: "Service History",
    borderStyle: "border-l-4 border-slate-300",
    desc: "Review past invoices, components changed, mechanics assigned, and payments. A full service log helps team members engage customers with high-quality context."
  }
];

const linkedVehiclesList = [
  { model: "Hyundai Creta (DL3C-AB-1234)", info: "Last Service: 15 Dec 2025 • Odometer: 42,300 km" },
  { model: "Honda Activa (DL3S-XY-7890)", info: "Last Service: 20 Jan 2026 • Odometer: 12,800 km" }
];

export default function CustDetails() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Comparison Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Column */}
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
              Centralized Data
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
              Keep Every Garage Customer and Vehicle Record <GradientUnderline>Organized</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Automate customer tracking with a dedicated customer database. Centralizing your workshop information makes communication smooth and helps build better relations.
            </p>

            <div className="space-y-6 pt-4">
              {custRecordSections.map((section, idx) => (
                <div key={idx} className={`${section.borderStyle} pl-4`}>
                  <h3 className="text-base font-bold text-slate-900">
                    {section.title}
                  </h3>
                  <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                    {section.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Representation Column */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 shadow-sm">
            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block mb-4">
              Customer Registry View
            </span>
            {/* Mock UI for Customer and Vehicle profile */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-xs font-sans text-xs">
              <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Amir Khan (VIP Client)</h4>
                  <p className="text-slate-400 text-[10px]">Customer ID: #CUST-9821</p>
                </div>
                <span className="bg-green-100 text-green-700 font-semibold px-2.5 py-0.5 rounded-full text-[10px]">
                  Active Account
                </span>
              </div>

              <div className="space-y-2">
                <p className="text-slate-600">
                  <strong>Phone Number:</strong> +91 98765 43210
                </p>
                <div className="flex justify-between items-center bg-purple-50/60 border border-purple-100 p-2 rounded-lg text-slate-700 text-[11px]">
                  <span>🎂 <strong>Birthday:</strong> 14 August</span>
                  <span className="text-[9px] font-bold text-purple-700 bg-purple-100 px-2 py-0.5 rounded-full">Auto-Wish Active</span>
                </div>
                <p className="text-slate-600">
                  <strong>Linked Vehicles:</strong>
                </p>
                {linkedVehiclesList.map((veh, idx) => (
                  <div key={idx} className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 space-y-1">
                    <p className="text-slate-700 font-medium font-bold">{veh.model}</p>
                    <p className="text-[10px] text-slate-500">{veh.info}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


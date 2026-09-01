import React from "react";
import Link from "next/link";
import GradientUnderline from "../../common/GradientUnderline";

const custRecordSections = [
  {
    title: "Customer Records, Tax & Occasions",
    borderStyle: "border-l-4 border-primary",
    desc: "Store mobile numbers, GSTIN registration, PAN card details, communication history, and Birthday / Anniversary dates for automated greetings and tax invoices."
  },
  {
    title: "Vehicle Records, Insurance & PUC",
    borderStyle: "border-l-4 border-slate-300",
    desc: "Link multiple vehicles under one customer. Log chassis numbers, fuel types, Odometer KM, motor insurance policy expiry, and PUC certificate validation for automated renewal alerts."
  },
  {
    title: "Service History",
    borderStyle: "border-l-4 border-slate-300",
    desc: "Review past invoices, components changed, mechanics assigned, and payments. A full service log helps team members engage customers with high-quality context."
  }
];

const linkedVehiclesList = [
  {
    model: "Hyundai Creta (DL3C-AB-1234)",
    info: "Last Service: 15 Dec 2025 • Odometer: 42,300 km",
    insurance: "Insurance: 15 Oct 2026",
    puc: "PUC: 28 Sep 2026"
  },
  {
    model: "Honda Activa (DL3S-XY-7890)",
    info: "Last Service: 20 Jan 2026 • Odometer: 12,800 km",
    insurance: "Insurance: 10 Nov 2026",
    puc: "PUC: Valid"
  }
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

              <div className="space-y-2.5">
                <div className="flex flex-wrap items-center justify-between text-slate-600 gap-1">
                  <span><strong>Phone:</strong> +91 98765 43210</span>
                  <span className="text-[10px] text-slate-500 font-mono bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">
                    PAN: AAAPC1234F
                  </span>
                </div>
                <div className="text-[10px] text-slate-600 font-mono bg-blue-50/50 p-1.5 rounded-lg border border-blue-100 flex items-center justify-between">
                  <span><strong>GSTIN:</strong> 24AAAPC1234F1Z5</span>
                  <span className="text-[9px] font-bold text-blue-700 bg-blue-100 px-1.5 py-0.2 rounded">B2B Verified</span>
                </div>
                <div className="flex justify-between items-center bg-purple-50/60 border border-purple-100 p-2 rounded-lg text-slate-700 text-[11px]">
                  <span>🎂 <strong>Birthday:</strong> 14 August</span>
                  <span className="text-[9px] font-bold text-purple-700 bg-purple-100 px-2 py-0.5 rounded-full">Auto-Wish Active</span>
                </div>
                <p className="text-slate-600 pt-1 font-semibold">
                  Linked Vehicles:
                </p>
                {linkedVehiclesList.map((veh, idx) => (
                  <div key={idx} className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/70 space-y-1.5">
                    <div className="flex justify-between items-center">
                      <p className="text-slate-800 font-bold">{veh.model}</p>
                      <span className="text-[9px] font-semibold text-emerald-700 bg-emerald-100/70 px-1.5 py-0.5 rounded">
                        Active
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-500">{veh.info}</p>
                    <div className="flex flex-wrap gap-1.5 pt-1 border-t border-slate-200/60 text-[9.5px]">
                      <span className="bg-amber-50 text-amber-800 border border-amber-200 px-2 py-0.5 rounded-md font-medium flex items-center gap-1">
                        🛡️ {veh.insurance} <strong className="text-[8px] text-amber-600 uppercase font-bold">• Auto-Alert</strong>
                      </span>
                      <span className="bg-teal-50 text-teal-800 border border-teal-200 px-2 py-0.5 rounded-md font-medium flex items-center gap-1">
                        🌱 {veh.puc} <strong className="text-[8px] text-teal-600 uppercase font-bold">• WhatsApp Due</strong>
                      </span>
                    </div>
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


import React from "react";
import { FaUsers } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const serviceLogs = [
  "May 24, 2026: General Service & Oil Filter change",
  "Dec 12, 2025: Front Brake Pads replacement"
];

export default function GECustomerVehicle() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left card representation */}
        <div className="bg-white border border-slate-200/80 p-8 rounded-3xl space-y-6 order-2 lg:order-1">
          <div className="flex items-center gap-3">
            <FaUsers className="text-primary w-6 h-6" />
            <h3 className="text-sm font-bold text-text-dark uppercase tracking-wide">Linked customer & vehicle profile</h3>
          </div>
          
          <div className="space-y-4">
            <div className="border-b border-slate-100 pb-3">
              <span className="text-[10px] uppercase font-bold text-slate-400">Customer Details</span>
              <span className="block text-xs font-bold text-text-dark mt-0.5">Ramesh Patel (Surat)</span>
            </div>
            <div className="border-b border-slate-100 pb-3">
              <span className="text-[10px] uppercase font-bold text-slate-400">Vehicle Models</span>
              <span className="block text-xs font-bold text-text-dark mt-0.5">Hyundai Creta (GJ-05-AB-1234)</span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400">Service Logs</span>
              <ul className="text-xs text-slate-500 mt-2 space-y-1.5 list-disc pl-4 leading-relaxed">
                {serviceLogs.map((log, idx) => (
                  <li key={idx}>{log}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right text */}
        <div className="order-1 lg:order-2">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Linked Profiles
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-text-dark mt-4 mb-6 leading-tight">
            Keep Customer and Vehicle{" "}
            <GradientUnderline>Records Connected</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
            Workshop CRM database systems work best when customer data and vehicle attributes are joined. When a customer registers, their profile is tied directly to their cars or bikes.
          </p>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Whenever a vehicle is brought in, your service advisor can instantly pull up the customer's phone number, exact make and model, previous service history logs, past complaints, and automated next-service reminders. This lets your team work efficiently without manual search delays.
          </p>
        </div>
      </div>
    </section>
  );
}



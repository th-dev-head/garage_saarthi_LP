import React from "react";
import Link from "next/link";
import GradientUnderline from "../../common/GradientUnderline";

export default function GCERecords() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        {/* Comparison Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Column */}
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
              Centralized Data
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
              Keep Every Garage Customer and Vehicle Record <GradientUnderline>Organized</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Automate customer tracking with a dedicated <strong className="text-primary capitalize">customer engagement platform for garage</strong> operations. Centralizing your workshop information makes communication smooth and helps build better relations.
            </p>

            <div className="space-y-6 pt-4">
              {/* Customer Records */}
              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-base font-bold text-slate-900">
                  Customer Records
                </h3>
                <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                  Store contact details, communication history, preferences, and logs. Access the comprehensive{" "}
                  <Link href="/features/customers" className="text-primary font-bold hover:underline">
                    Customer Management
                  </Link>{" "}
                  hub anytime to view customer details.
                </p>
              </div>

              {/* Vehicle Records */}
              <div className="border-l-4 border-slate-300 pl-4">
                <h3 className="text-base font-bold text-slate-900">
                  Vehicle Records
                </h3>
                <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                  Link multiple vehicles under one customer. Log chassis numbers, fuel types, insurance info, and odometer records inside our{" "}
                  <Link href="/features/vehicles" className="text-primary font-bold hover:underline">
                    Vehicle Management
                  </Link>{" "}
                  database.
                </p>
              </div>

              {/* Service History */}
              <div className="border-l-4 border-slate-300 pl-4">
                <h3 className="text-base font-bold text-slate-900">
                  Service History
                </h3>
                <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                  Review past invoices, components changed, mechanics assigned, and payments. A full service log helps team members engage customers with high-quality context.
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual Representation Column */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 shadow-sm">
            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block mb-4">
              Product Visual Context
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
                  <strong className="text-primary capitalize">Phone Number:</strong> +91 98765 43210
                </p>
                <p className="text-slate-600">
                  <strong className="text-primary capitalize">Linked Vehicles:</strong>
                </p>
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 space-y-1">
                  <p className="text-slate-700 font-medium">Hyundai Creta (DL3C-AB-1234)</p>
                  <p className="text-[10px] text-slate-500">Last Service: 15 Dec 2025 • Odometer: 42,300 km</p>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 space-y-1">
                  <p className="text-slate-700 font-medium">Honda Activa (DL3S-XY-7890)</p>
                  <p className="text-[10px] text-slate-500">Last Service: 20 Jan 2026 • Odometer: 12,800 km</p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200 text-center">
                <span className="text-[10px] text-slate-400">
                  Organized records supporting better <strong className="text-primary capitalize">automotive customer engagement software</strong> workflows
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

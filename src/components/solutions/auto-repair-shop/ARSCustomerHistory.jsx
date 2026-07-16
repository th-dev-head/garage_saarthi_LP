import React from "react";
import Link from "next/link";
import { FaUserAlt, FaHistory, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function ARSCustomerHistory() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        
        {/* Header */}
        <div className="mb-12">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Customer Records
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Keep Customer, Vehicle and Repair History in{" "}
            <GradientUnderline>One Place</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-3xl">
            Build client loyalty and repeat orders. Do not waste hours searching physical booklets when old customers return to your auto repair shop.
          </p>
        </div>

        {/* Grid columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* Info list */}
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-50 border border-slate-200/80 flex items-center justify-center text-primary shadow-sm">
                <FaUserAlt className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">Maintain Customer & Vehicle Records</h3>
                <p className="text-xs text-slate-600">Save client contact details, multiple vehicle registration plates, makes, models, and diagnostic records.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-50 border border-slate-200/80 flex items-center justify-center text-primary shadow-sm">
                <FaHistory className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">Track Vehicle Repair History</h3>
                <p className="text-xs text-slate-600">Review past service logs, parts replaced, diagnostic checklists, and billing statements instantly when a car returns.</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 items-center pt-4">
              <Link
                href="/features/customers"
                className="rounded-full bg-primary hover:bg-primary-hover text-white px-6 py-2.5 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
              >
                Explore Customer Management
                <FaArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/features/vehicles"
                className="text-xs font-bold text-primary hover:underline"
              >
                Explore Vehicles
              </Link>
            </div>
          </div>

          {/* Visual Registry Card */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 shadow-xs">
            <h4 className="text-xs font-bold text-slate-800 mb-4">Past Service Logs</h4>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded-xl border border-slate-200/80 text-xs">
                <div className="flex justify-between font-bold text-slate-800 mb-1">
                  <span>Job #ARS-1092</span>
                  <span>18-Nov-2025</span>
                </div>
                <p className="text-slate-500">Service: Wheel alignment, front disc replacement</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200/80 text-xs">
                <div className="flex justify-between font-bold text-slate-800 mb-1">
                  <span>Job #ARS-0814</span>
                  <span>04-Jun-2025</span>
                </div>
                <p className="text-slate-500">Service: General oil changes, coolant top-up</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

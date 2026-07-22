import React from "react";
import Link from "next/link";
import { FaUser, FaPlug, FaHistory } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function EVCustomerVehicle() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            EV Profiles & Data
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Keep EV Customer and Vehicle <GradientUnderline>Records Organized</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Record comprehensive details for electric scooters, e-bikes, and electric cars. Search histories dynamically instead of shifting through notebooks or paper registers.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 - Customer Records */}
          <div className="bg-white border border-slate-200/60 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary text-base">
                <FaUser />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Manage EV Customer Records</h3>
              <p className="text-xs text-slate-500 leading-normal">
                Maintain profile records containing customer names, contact numbers, active WhatsApp details, and previous visit logs securely.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6">
              <Link href="/features/customers" className="text-xs font-bold text-primary hover:underline">
                Explore Customer Management
              </Link>
            </div>
          </div>

          {/* Card 2 - Vehicle Info */}
          <div className="bg-white border border-slate-200/60 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary text-base">
                <FaPlug />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Keep Vehicle Information Organized</h3>
              <p className="text-xs text-slate-500 leading-normal">
                Log EV registration codes, chassis numbers, motor capacities, battery serial configurations, and odometer readings.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6">
              <Link href="/features/vehicles" className="text-xs font-bold text-primary hover:underline">
                Explore Vehicle Management
              </Link>
            </div>
          </div>

          {/* Card 3 - History */}
          <div className="bg-white border border-slate-200/60 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary text-base">
                <FaHistory />
              </div>
              <h3 className="text-sm font-bold text-slate-900">View Service History</h3>
              <p className="text-xs text-slate-500 leading-normal">
                Track previous diagnostic logs, labor records, and parts checkouts to maintain transparency on repeating repair visits.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6">
              <Link href="/solutions/vehicle-service-history-software" className="text-xs font-bold text-primary hover:underline">
                Explore Service History
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

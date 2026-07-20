import React from "react";
import Link from "next/link";
import { FaUser, FaCar, FaHistory } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function CDCustomerVehicle() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Customer & Vehicle Logs
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Keep Detailing Customer and Vehicle <GradientUnderline>Records Organized</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Record comprehensive details for paint coatings, PPF rolls, and polish services. Search histories dynamically instead of shifting through notebooks or paper registers.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 - Customer Profiles */}
          <div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary text-base">
                <FaUser />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Manage Customer Profiles</h3>
              <p className="text-xs text-slate-500 leading-normal">
                Maintain profile files containing customer names, contact numbers, active WhatsApp details, and previous visit logs securely.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6">
              <Link href="/features/customers" className="text-xs font-bold text-primary hover:underline">
                Explore Customer Profiles
              </Link>
            </div>
          </div>

          {/* Card 2 - Vehicle Info */}
          <div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary text-base">
                <FaCar />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Keep Vehicle Info Organized</h3>
              <p className="text-xs text-slate-500 leading-normal">
                Log car registration codes, chassis numbers, paint specifications, pre-treatment observations, and odometer readings.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6">
              <Link href="/features/vehicles" className="text-xs font-bold text-primary hover:underline">
                Explore Vehicle Logs
              </Link>
            </div>
          </div>

          {/* Card 3 - Detailing History */}
          <div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary text-base">
                <FaHistory />
              </div>
              <h3 className="text-sm font-bold text-slate-900">View Detailing History</h3>
              <p className="text-xs text-slate-500 leading-normal">
                Track previous polishing grades, warranty years, coating specs, and detailer notes to maintain transparency on repeating studio visits.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6">
              <Link href="/solutions/vehicle-service-history-software" className="text-xs font-bold text-primary hover:underline">
                Explore Detailing History
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

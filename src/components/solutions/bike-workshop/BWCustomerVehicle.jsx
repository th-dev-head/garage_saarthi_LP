import React from "react";
import Link from "next/link";
import { FaUser, FaMotorcycle, FaHistory } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function BWCustomerVehicle() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Customer & Bike Records
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Keep Customer, Bike and <GradientUnderline>Service Records in One Place</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Quickly search customer files and vehicle records on your phone or tablet. Never search through paper folders orRegisters again when a customer asks about their previous service.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 - Customer Info */}
          <div className="bg-white border border-slate-200/60 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary text-base">
                <FaUser />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Keep Customer Information Organized</h3>
              <p className="text-xs text-slate-500 leading-normal">
                Maintain profile files containing customer names, contact numbers, active WhatsApp details, and previous visit dates securely in the cloud.
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
                <FaMotorcycle />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Manage Bike and Vehicle Records</h3>
              <p className="text-xs text-slate-500 leading-normal">
                Log vehicle registration number, brand, model, chassis numbers, odometer readings, and engine numbers for returning two-wheelers.
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
                Track previous engine adjustments, parts substituted, labor records, and technician notes, building customer trust with total operational transparency.
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

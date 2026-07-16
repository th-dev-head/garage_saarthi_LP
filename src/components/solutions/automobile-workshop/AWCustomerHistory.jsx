import React from "react";
import Link from "next/link";
import { FaUserPlus, FaCar, FaHistory } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function AWCustomerHistory() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">

        {/* Section Header — full width */}
        <div className="mb-12">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Customer & Vehicle Profiles
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Keep Customer, Vehicle and <GradientUnderline>Service Records Connected</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-3xl">
            A customer profiles database connects contact info, registered vehicles, and entire service history records under one platform. Auto-pull past job sheets, check parts replaced, and review pending balances instantly when they return to your automobile workshop.
          </p>
        </div>

        {/* Feature info + Visual Card — side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

          {/* Feature List */}
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-primary shadow-sm">
                <FaUserPlus className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">Customer Management</h3>
                <p className="text-xs text-slate-600">Save client details, mobile numbers, and check client balances on any device.</p>
                <Link href="/features/customers" className="text-xs font-bold text-primary hover:underline mt-1 inline-block">
                  Explore Customers
                </Link>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-primary shadow-sm">
                <FaCar className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">Vehicle Management</h3>
                <p className="text-xs text-slate-600">Link multiple cars or bikes to a single customer, log registration numbers, and chassis numbers.</p>
                <Link href="/features/vehicles" className="text-xs font-bold text-primary hover:underline mt-1 inline-block">
                  Explore Vehicles
                </Link>
              </div>
            </div>
          </div>

          {/* Visual Simulation Column */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
            <h3 className="text-sm font-extrabold text-slate-900 mb-4 flex items-center gap-2">
              <FaHistory className="text-primary w-4 h-4" />
              Service History Registry
            </h3>
            <div className="space-y-4">
              <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-xl">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-slate-800">Job Card #GS-1002</span> 
                  <span className="text-[10px] text-slate-500 font-semibold">12-Jun-2026</span>
                </div>
                <p className="text-xs text-slate-600 mb-1"><strong>Service Type:</strong> General Service + Oil Change</p>
                <p className="text-xs text-slate-600"><strong>Parts Used:</strong> Engine Oil (3.5L), Oil Filter</p>
              </div>

              <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-xl">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-slate-800">Job Card #GS-0849</span>
                  <span className="text-[10px] text-slate-500 font-semibold">05-Mar-2026</span>
                </div>
                <p className="text-xs text-slate-600 mb-1"><strong>Service Type:</strong> Brake Pad Replacement</p>
                <p className="text-xs text-slate-600"><strong>Parts Used:</strong> Front Brake Pads (Set of 2)</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


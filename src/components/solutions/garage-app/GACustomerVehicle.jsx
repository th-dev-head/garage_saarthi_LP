import React from "react";
import Link from "next/link";
import { FaUserPlus, FaHistory, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function GACustomerVehicle() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Visual Column */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm w-full max-w-md mx-auto md:max-w-none md:order-first order-last">
            <div className="flex justify-between items-center pb-4 mb-4 border-b border-slate-100">
              <span className="text-xs font-bold text-slate-800">Vehicle Service Records</span>
              <span className="text-[10px] text-green-600 bg-green-50 px-2 py-0.5 rounded font-semibold">Active</span>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-xl text-xs text-slate-600">
                <p className="font-bold text-slate-900 mb-1">Ramesh Malaviya (Surat)</p>
                <p>Contact: +91 9999955555</p>
              </div>
              <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-xl text-xs text-slate-600">
                <p className="font-bold text-slate-900 mb-1">Service Visit Logs</p>
                <ul className="space-y-1 mt-1.5 list-disc list-inside">
                  <li>20 Oct 2025: Engine Oil Replacement</li>
                  <li>15 Dec 2025: Brake Lining Cleaning</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Info */}
          <div>
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
              Customer Registry
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
              Keep Customer and Vehicle Records{" "}
              <GradientUnderline>in Your Garage App</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
              Track detailed vehicle maintenance histories, check previous job card reports, view parts consumption, and schedule vehicle check-in procedures accurately.
            </p>

            <div className="flex flex-wrap gap-4 items-center mb-6">
              <Link
                href="/features/customers/"
                className="rounded-full bg-primary hover:bg-primary-hover text-white px-6 py-2.5 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
              >
                Customer Features
                <FaArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/features/vehicles/"
                className="text-xs font-bold text-primary hover:underline"
              >
                Explore Vehicle History Features
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}


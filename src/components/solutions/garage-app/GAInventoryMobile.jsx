import React from "react";
import Link from "next/link";
import { FaBox, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function GAInventoryMobile() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Info */}
          <div>
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
              Stock Visibility
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
              Manage Garage Inventory and{" "}
              <GradientUnderline>Spare Parts from the App</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
              Track spare parts catalog, inventory counts, counter sales relationships, and manage spare components issued to job sheets easily.
            </p>
            
            <div className="flex flex-wrap gap-4 items-center mb-6">
              <Link
                href="/features/inventory"
                className="rounded-full bg-primary hover:bg-primary-hover text-white px-6 py-2.5 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
              >
                Explore Inventory Management
                <FaArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/features/counter-sales"
                className="text-xs font-bold text-primary hover:underline"
              >
                Explore Counter Sales
              </Link>
            </div>
          </div>

          {/* Visual Column */}
          <div className="bg-slate-50 rounded-2xl p-8 flex flex-col justify-center items-center text-center w-full max-w-md mx-auto md:max-w-none md:order-last order-first">
            <span className="text-xs font-bold text-slate-800 mb-4 block">Garage Inventory Mobile Screen</span>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80 w-full mx-auto" style={{ maxWidth: "280px" }}>
              <div className="flex justify-between items-center pb-2 mb-4 border-b text-xs font-bold text-slate-800">
                <span>Spare Parts List</span>
                <span>Stock Count</span>
              </div>
              <div className="space-y-3 text-[10px] text-slate-600 font-sans text-left">
                <div className="flex justify-between">
                  <span>Synthetic Engine Oil 5W-30 (3.5L)</span>
                  <span className="font-bold text-slate-900">45 Liters</span>
                </div>
                <div className="flex justify-between">
                  <span>Oil Filter (Part)</span>
                  <span className="font-bold text-slate-900">12 Units</span>
                </div>
                <div className="flex justify-between">
                  <span>Brake Pads Replacement (Part)</span>
                  <span className="font-bold text-slate-900">8 Units</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}


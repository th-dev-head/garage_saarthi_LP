import React from "react";
import Link from "next/link";
import { FaBoxes } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function GAInventory() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Column Left */}
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
              Inventory Controls
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
              Manage Garage Inventory and Spare Parts <GradientUnderline>Digitally</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Leakage of spare parts is a common source of lost workshop profits. Bringing stock items into a digital <strong className="text-primary capitalize">garage automation platform</strong> dashboard enables strict control over inventory.
            </p>

            <div className="space-y-4 pt-2 text-xs">
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Maintain Spare Parts Inventory</h3>
                <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                  Log part IDs, numbers, categories, rack allocations, and supplier purchase records centrally.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 text-sm">Track Available Stock</h3>
                <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                  Avoid under-ordering or over-ordering components. Monitor actual stock quantities and purchase invoices.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 text-sm">Connect Inventory with Garage Operations</h3>
                <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                  Link spares directly under our active job cards or track counter sales inside the consolidated{" "}
                  <Link href="/features/inventory" className="text-primary font-bold hover:underline">
                    Inventory Management
                  </Link>{" "}
                  registers.
                </p>
              </div>
            </div>
          </div>

          {/* Visual Column Right */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-8 shadow-sm">
            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block mb-4">
              Spare Parts Catalog
            </span>
            <div className="space-y-3 font-sans text-xs">
              
              {/* Spares List Item 1 */}
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 flex justify-between items-center">
                <div>
                  <p className="font-bold text-slate-900">Synthetic Engine Oil (5W-30)</p>
                  <p className="text-[9px] text-slate-400">Part No: OIL-SY5W30 • Rack: B-3</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-slate-900">12 Liters</p>
                  <p className="text-[9px] text-green-600">In Stock</p>
                </div>
              </div>

              {/* Spares List Item 2 */}
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 flex justify-between items-center">
                <div>
                  <p className="font-bold text-slate-900">Front Brake Pads (Creta)</p>
                  <p className="text-[9px] text-slate-400">Part No: BRK-CRE-F1 • Rack: A-12</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-slate-900">4 Sets</p>
                  <p className="text-[9px] text-orange-500">Low Stock</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

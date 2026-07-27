import React from "react";
import Link from "next/link";
import { FaBoxes } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const inventoryFeatures = [
  {
    title: "Maintain Spare Parts Inventory",
    desc: "Log part IDs, numbers, categories, rack allocations, and supplier purchase records centrally."
  },
  {
    title: "Track Available Stock",
    desc: "Avoid under-ordering or over-ordering components. Monitor actual stock quantities and purchase invoices."
  },
  {
    title: "Connect Inventory with Garage Operations",
    descPrefix: "Link spares directly under our active job cards or track counter sales inside the consolidated ",
    linkHref: "/features/inventory",
    linkText: "Inventory Management",
    descSuffix: " registers."
  }
];

const catalogItems = [
  {
    name: "Synthetic Engine Oil (5W-30)",
    details: "Part No: OIL-SY5W30 • Rack: B-3",
    qty: "12 Liters",
    status: "In Stock",
    statusClass: "text-[9px] text-green-600"
  },
  {
    name: "Front Brake Pads (Creta)",
    details: "Part No: BRK-CRE-F1 • Rack: A-12",
    qty: "4 Sets",
    status: "Low Stock",
    statusClass: "text-[9px] text-orange-500"
  }
];

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
              {inventoryFeatures.map((item, idx) => (
                <div key={idx}>
                  <h3 className="font-bold text-slate-900 text-sm">{item.title}</h3>
                  <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                    {item.desc ? item.desc : (
                      <>
                        {item.descPrefix}
                        <Link href={item.linkHref} className="text-primary font-bold hover:underline">
                          {item.linkText}
                        </Link>
                        {item.descSuffix}
                      </>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Column Right */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-8 shadow-sm">
            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block mb-4">
              Spare Parts Catalog
            </span>
            <div className="space-y-3 font-sans text-xs">
              {catalogItems.map((item, idx) => (
                <div key={idx} className="bg-slate-50 rounded-xl p-3 border border-slate-200 flex justify-between items-center">
                  <div>
                    <p className="font-bold text-slate-900">{item.name}</p>
                    <p className="text-[9px] text-slate-400">{item.details}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-slate-900">{item.qty}</p>
                    <p className={item.statusClass}>{item.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


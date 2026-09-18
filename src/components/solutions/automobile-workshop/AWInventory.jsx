import React from "react";
import Link from "next/link";
import { FaBoxOpen, FaClipboardList, FaShoppingCart, FaStore, FaArrowRight, FaWarehouse, FaBarcode } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const featureList = [
  {
    icon: <FaWarehouse className="w-5 h-5 text-primary" />,
    title: "Godown & Stock Transfers",
    desc: "Maintain separate backroom Godown warehouse stock, execute 1-tap transfers to active shop racks with live projected balance previews.",
    link: "/features/inventory/",
  },
  {
    icon: <FaBarcode className="w-5 h-5 text-primary" />,
    title: "Auto Barcode & Scanner Hub",
    desc: "Generate Code-128 barcodes, print 50x25mm thermal stickers, and scan via hardware scanner guns or mobile cameras.",
    link: "/features/inventory/",
  },
  {
    icon: <FaBoxOpen className="w-5 h-5 text-primary" />,
    title: "Live Inventory & Storage Bins",
    desc: "Maintain a live catalog of spare parts, engine oils, and accessories mapped to Warehouse, Rack, and Bin locations.",
    link: "/features/inventory/",
  },
  {
    icon: <FaClipboardList className="w-5 h-5 text-primary" />,
    title: "Parts Requisition & Usage Audit",
    desc: "Track parts issued to technicians for specific job cards with full vehicle-level consumption history and accountability.",
    link: "/features/inventory/",
  },
  {
    icon: <FaShoppingCart className="w-5 h-5 text-primary" />,
    title: "Vendor Purchases & Intake",
    desc: "Record spare parts purchases, route stock directly to Godown or Shop Floor, and track purchase bill pricing trends.",
    link: "/features/inventory/",
  },
  {
    icon: <FaStore className="w-5 h-5 text-primary" />,
    title: "Counter Sales Billing",
    desc: "Sell spare parts and lubricants directly over the counter without opening a job card with instant GST invoices.",
    link: "/features/counter-sales/",
  },
];

export default function AWInventory() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Spare Parts Control
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-6 leading-tight">
            Keep Workshop Inventory and <GradientUnderline>Spare Parts Organized</GradientUnderline>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Running out of basic spares like brake pads or filters delays repairs. Over-stocking expensive items blocks capital. Manage inventory seamlessly.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featureList.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200/80 p-6 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">{item.desc}</p>
              </div>
              <Link
                href={item.link}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-hover transition-colors"
              >
                Learn details <FaArrowRight className="w-2.5 h-2.5" />
              </Link>
            </div>
          ))}
        </div>

        {/* Main CTA */}
        <div className="text-center">
          <Link
            href="/features/inventory/"
            className="rounded-full bg-primary hover:bg-primary-hover text-white px-6 py-2.5 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 cursor-pointer whitespace-nowrap"
          >
            Explore Inventory Management
            <FaArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}


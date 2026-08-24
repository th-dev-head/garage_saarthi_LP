import React from "react";
import { FaBoxes, FaExclamationTriangle, FaBarcode, FaTruckLoading, FaChartLine, FaSearch } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function ICoreCapabilities() {
  const capabilities = [
    {
      icon: <FaBoxes className="w-6 h-6 text-primary" />,
      title: "Real-Time Stock Deduction",
      description: "Spare parts, engine oils, and lubricants deduct automatically when issued to job cards or sold via counter sales POS.",
      badge: "Auto Deduct"
    },
    {
      icon: <FaExclamationTriangle className="w-6 h-6 text-orange-600" />,
      title: "Automated Low-Stock Alerts",
      description: "Set minimum threshold levels for critical spare parts and get automatic notifications before stock runs out.",
      badge: "Reorder Alerts"
    },
    {
      icon: <FaBarcode className="w-6 h-6 text-emerald-600" />,
      title: "Barcode Scanner & SKU Lookup",
      description: "Scan product barcodes on parts packaging or search by OEM part number to check current stock and price.",
      badge: "Barcode Ready"
    },
    {
      icon: <FaTruckLoading className="w-6 h-6 text-amber-600" />,
      title: "Vendor Purchase Order Tracking",
      description: "Log purchase invoices from spare parts distributors, update purchase rates, and track vendor payment dues.",
      badge: "Vendor Logs"
    },
    {
      icon: <FaChartLine className="w-6 h-6 text-purple-600" />,
      title: "Inventory Stock Valuation",
      description: "Track total inventory asset value, cost of goods sold (COGS), and profit margins per spare part category.",
      badge: "Stock Valuation"
    },
    {
      icon: <FaSearch className="w-6 h-6 text-teal-600" />,
      title: "Master Spare Parts Catalog",
      description: "Organize parts by category (Engine, Brakes, Suspension, Oils) with pre-filled HSN codes and MRP pricing.",
      badge: "Master Catalog"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Powerful Inventory Features
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
            Key Capabilities of Garage <GradientUnderline>Inventory Management</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Everything your workshop needs to track spare parts, prevent inventory leaks, and order stock on time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((item, index) => (
            <div
              key={index}
              className="p-6 md:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

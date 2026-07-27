import React from "react";
import { FaCashRegister, FaBoxes, FaFileInvoiceDollar, FaBarcode, FaWhatsapp, FaUserTag } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function CSCoreCapabilities() {
  const capabilities = [
    {
      icon: <FaCashRegister className="w-6 h-6 text-primary" />,
      title: "Fast Counter Sales Checkout",
      description: "Generate retail invoices for walk-in buyers in under 30 seconds. Select parts by name, SKU, or category without creating a job card.",
      badge: "Express Checkout"
    },
    {
      icon: <FaBoxes className="w-6 h-6 text-orange-600" />,
      title: "Real-Time Stock Deduction",
      description: "Sold spare parts, lubricants, and accessories are deducted immediately from your central garage inventory valuation.",
      badge: "Inventory Sync"
    },
    {
      icon: <FaFileInvoiceDollar className="w-6 h-6 text-emerald-600" />,
      title: "GST Invoicing & Tax Calculations",
      description: "Pre-loaded HSN codes, SAC categories, CGST/SGST/IGST tax rates, and customizable retail invoice templates.",
      badge: "GST Compliant"
    },
    {
      icon: <FaBarcode className="w-6 h-6 text-amber-600" />,
      title: "Barcode & Part Search",
      description: "Scan product barcodes or search parts by manufacturer number to pull up pricing and stock levels instantly.",
      badge: "Barcode Ready"
    },
    {
      icon: <FaWhatsapp className="w-6 h-6 text-purple-600" />,
      title: "Digital WhatsApp Invoices",
      description: "Send PDF invoices and payment receipts directly to your customer's WhatsApp, saving paper and printing costs.",
      badge: "Eco-Friendly Receipts"
    },
    {
      icon: <FaUserTag className="w-6 h-6 text-teal-600" />,
      title: "Walk-in & Retail Customer Database",
      description: "Capture walk-in customer mobile numbers and purchase histories to offer customized loyalty discounts and offers.",
      badge: "Customer Profiles"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-cente">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Powerful Counter Billing Features
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Key Capabilities of Garage <GradientUnderline>Counter Sales Software</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Everything your garage cash counter needs to speed up sales, eliminate manual tax math, and track stock accurately.
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

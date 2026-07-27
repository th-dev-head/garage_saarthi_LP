import React from "react";
import GradientUnderline from "../../common/GradientUnderline";
import { FaSearch, FaListAlt, FaPercent, FaMoneyBillWave, FaPaperPlane } from "react-icons/fa";

export default function CSWorkflow() {
  const steps = [
    {
      num: "01",
      icon: <FaSearch className="w-5 h-5 text-primary" />,
      title: "Part / Item Lookup",
      desc: "Search spare parts or lubricants by name, SKU, or scan product barcode."
    },
    {
      num: "02",
      icon: <FaListAlt className="w-5 h-5 text-orange-600" />,
      title: "Add Quantity & Pricing",
      desc: "Select item quantity. Prices, GST rates, and HSN codes load automatically."
    },
    {
      num: "03",
      icon: <FaPercent className="w-5 h-5 text-emerald-600" />,
      title: "Apply Discounts & Tax",
      desc: "Apply optional trade discounts or promo codes. Tax is itemized instantly."
    },
    {
      num: "04",
      icon: <FaMoneyBillWave className="w-5 h-5 text-amber-600" />,
      title: "Select Payment Mode",
      desc: "Record payment via UPI (GPay/PhonePe), Cash, Card, or Net Banking."
    },
    {
      num: "05",
      icon: <FaPaperPlane className="w-5 h-5 text-purple-600" />,
      title: "Auto Stock Sync & WhatsApp Bill",
      desc: "Stock deducts from inventory automatically. Send digital invoice on WhatsApp."
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Express Counter POS Workflow
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            5-Step Over-The-Counter <GradientUnderline>Billing Process</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Fast, simple, and 100% accurate. Sell spare parts in seconds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between relative hover:border-primary/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-slate-300">{step.num}</span>
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

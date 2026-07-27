import React from "react";
import { FaBoxes, FaClipboardCheck, FaTags } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const sparePartsFeatures = [
  {
    icon: FaBoxes,
    title: "Organize Spare Parts Inventory",
    desc: "Avoid clutter. Maintain a structured catalog of auto parts with unique identifiers, models, manufacturer details, and pricing guidelines using our **Spare Parts Inventory Software**."
  },
  {
    icon: FaTags,
    title: "Manage Spare Parts from One System",
    desc: "Manage stock levels from check-in to sales invoices. Shift to a centralized **Garage Spare Parts Management System** to prevent revenue leaks on the service floor."
  },
  {
    icon: FaClipboardCheck,
    title: "Maintain Better Parts Records",
    desc: "Log purchase prices and retail margins. With our **Garage Spare Parts Software**, you'll have complete history records of which vendor supplied which part."
  }
];

const mockSparePartsItems = [
  {
    name: "Spark Plug (NGK CPR7EA-9)",
    price: "₹135.00",
    suitable: "Hero Glamour, Honda Activa | Category: Ignition",
    rack: "C-12",
    qty: "24 Units"
  },
  {
    name: "Oil Filter (Hyundai OEM)",
    price: "₹280.00",
    suitable: "Creta, i20 Petrol | Category: Filters",
    rack: "B-04",
    qty: "18 Units"
  }
];

export default function ISpareParts() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Text and Features */}
        <div>
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Spare Parts Management
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
            Keep Garage Spare Parts <GradientUnderline>Organized and Easy to Track</GradientUnderline>
          </h2>

          <div className="space-y-6">
            {sparePartsFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-primary shadow-xs">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">{feat.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Visual Mockup Card */}
        <div className="bg-slate-50 border border-slate-200/80 p-6 md:p-8 rounded-3xl space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-200/60 pb-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">Spare Parts Registry</h4>
            <span className="text-[10px] text-slate-500 font-medium">102 Total Items</span>
          </div>

          <div className="space-y-2 text-xs text-slate-600">
            {mockSparePartsItems.map((item, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200/80">
                <div className="flex justify-between font-bold text-slate-900 mb-1">
                  <span>{item.name}</span>
                  <span className="text-primary font-bold">{item.price}</span>
                </div>
                <p className="text-[10px] text-slate-400">Suitable for: {item.suitable}</p>
                <div className="mt-2 flex justify-between items-center text-[10px] border-t border-slate-100 pt-2">
                  <span>Rack: {item.rack}</span>
                  <span className="text-slate-700 font-semibold bg-slate-100 px-2.5 py-0.5 rounded">Qty: {item.qty}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


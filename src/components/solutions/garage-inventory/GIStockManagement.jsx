import React from "react";
import { FaExclamationTriangle, FaSearch, FaHistory, FaAddressBook, FaArrowUp, FaArrowDown } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function GIStockManagement() {
  const stockCapabilities = [
    {
      icon: <FaSearch className="text-primary w-4 h-4" />,
      title: "Current Stock Quantity",
      desc: "Instantly check exact quantities in stock from any system dashboard without visiting the physical storage rack."
    },
    {
      icon: <FaExclamationTriangle className="w-4 h-4" style={{ color: "#f97316" }} />,
      title: "Low-Stock Alerts",
      desc: "Receive proactive notifications when critical replacement parts fall below safety re-order levels."
    },
    {
      icon: <FaHistory className="text-green-500 w-4 h-4" />,
      title: "Stock Adjustments & Movements",
      desc: "Log manual quantity corrections for scrap parts, return-to-vendor parts, or internal usage audits."
    },
    {
      icon: <FaAddressBook className="w-4 h-4" style={{ color: "#3b82f6" }} />,
      title: "Supplier & Purchase Info",
      desc: "Link parts directly with vendor profiles, making it simple to repeat orders at verified wholesale purchase rates."
    }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side Visual Mockup */}
        <div className="bg-white border border-slate-200/80 p-6 md:p-8 rounded-3xl space-y-4 shadow-md order-2 md:order-1">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">Stock Alerts</span>
            </div>
            <span 
              className="text-[10px] font-bold px-2 py-0.5 rounded-full"
              style={{ color: "#dc2626", backgroundColor: "#fef2f2" }}
            >
              2 Low Stock
            </span>
          </div>

          <div className="space-y-3">
            <div 
              className="border p-3 rounded-xl flex justify-between items-center text-xs"
              style={{ backgroundColor: "rgba(254, 242, 242, 0.4)", borderColor: "#fecaca" }}
            >
              <div>
                <h5 className="font-bold text-slate-900">4T Engine Oil 1L (Motul)</h5>
                <p className="text-[10px] text-slate-400">Supplier: Star Distributors</p>
              </div>
              <div className="text-right">
                <span className="font-bold block" style={{ color: "#dc2626" }}>4 Ltr Left</span>
                <span className="text-[9px] text-slate-400">Re-order level: 10 Ltr</span>
              </div>
            </div>

            <div className="border border-slate-200/80 p-3 rounded-xl flex justify-between items-center text-xs">
              <div>
                <h5 className="font-bold text-slate-900">Tubeless Tyre 90/90-12 (MRF)</h5>
                <p className="text-[10px] text-slate-400">Supplier: Apex Tyres & Spares</p>
              </div>
              <div className="text-right">
                <span className="font-bold text-slate-800 block">15 Units</span>
                <span className="text-[9px] text-slate-400">Safe Stock</span>
              </div>
            </div>
          </div>

          {/* Adjustment Log Mini Panel */}
          <div className="">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-2">Recent Adjustment Logs</span>
            <div className="space-y-2 text-[10px]">
              <div className="flex justify-between items-center text-slate-600">
                <span className="flex items-center gap-1"><FaArrowUp className="text-green-500 w-2 h-2" /> Purchase Inflow</span>
                <span className="font-semibold text-slate-900">+50 Engine Oils</span>
              </div>
              <div className="flex justify-between items-center text-slate-600">
                <span className="flex items-center gap-1"><FaArrowDown className="text-red-500 w-2 h-2" /> Job Card Use</span>
                <span className="font-semibold text-slate-900">-1 Tyre (JC-2342)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="order-1 md:order-2">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Stock Management
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-text-dark mt-4 mb-6 leading-tight">
            Get Better Visibility into <GradientUnderline>Your Garage Stock</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
            Manual stock counts waste mechanic hours and slow down repairs. Centralizing stock reports using a dedicated **Garage Stock Management Software** guarantees transparency on the workshop floor:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stockCapabilities.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <h3 className="text-xs font-bold text-text-dark flex items-center gap-2">
                  {item.icon}
                  {item.title}
                </h3>
                <p className="text-[11px] text-slate-500 leading-normal">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


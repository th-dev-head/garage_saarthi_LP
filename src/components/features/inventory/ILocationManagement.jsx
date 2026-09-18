import React from "react";
import { FaWarehouse, FaMapPin, FaSearch, FaPlus, FaEdit, FaTrashAlt, FaCheckCircle, FaBoxes, FaLayerGroup } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const locationRecords = [
  {
    warehouse: "bapu (Main Workshop)",
    shelf: "ran-1",
    bin: "459",
    notes: "Engine Oils & Fast Moving Filters",
  },
  {
    warehouse: "Main Workshop",
    shelf: "Rack A-04",
    bin: "102",
    notes: "Front Ceramic Brake Pads & Caliper Pins",
  },
  {
    warehouse: "Secondary Yard",
    shelf: "Shelf B-12",
    bin: "88",
    notes: "Spark Plugs, Relays & Sensors",
  },
];

const locatorPartExamples = [
  {
    part: "Brake Pad Set (Ceramic)",
    cat: "Braking System",
    stock: "24 Units",
    location: "Main Workshop • Rack A-04 • Bin 102",
  },
  {
    part: "Synthetic Engine Oil 5W30",
    cat: "Lubricants",
    stock: "45 Cans",
    location: "bapu (Main Workshop) • ran-1 • Bin 459",
  },
  {
    part: "NGK Iridium Spark Plug",
    cat: "Ignition",
    stock: "60 Pcs",
    location: "Secondary Yard • Shelf B-12 • Bin 88",
  },
];

const locationBenefits = [
  {
    icon: FaMapPin,
    title: "Instant Part Retrieval in 2 Seconds",
    desc: "Mechanics and helpers instantly see the exact Shelf/Rack and Bin on their mobile job cards, cutting retrieval time by 80%.",
  },
  {
    icon: FaLayerGroup,
    title: "Warehouse, Rack & Bin Hierarchy",
    desc: "Structure multiple branches, physical warehouses, vertical racks, and numbered bin boxes for complete storage order.",
  },
  {
    icon: FaBoxes,
    title: "Zero Misplaced or Duplicate Purchases",
    desc: "Prevent technicians from assuming parts are out of stock when they are simply stored in a different rack or secondary room.",
  },
];

export default function ILocationManagement() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Storage Location & Bin Management
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
            Find Every Spare Part Fast with <GradientUnderline>Warehouse, Rack & Bin Tracking</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Eliminate chaotic parts rooms and misplaced spares. Organize your inventory by Warehouse, Shelf/Rack, and Bin/Box so any mechanic can locate the exact part in seconds.
          </p>
        </div>

        {/* 2-Column Mockups */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Location Manager Dialog Mockup */}
          <div className="lg:col-span-7 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                  <FaWarehouse />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Manage Storage Locations</h3>
                  <p className="text-[10.5px] text-slate-400">Define standard Warehouses, Shelves/Racks, and Bins</p>
                </div>
              </div>
            </div>

            {/* Search + Add Action Bar */}
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 flex items-center gap-2 text-xs text-slate-400">
                <FaSearch className="text-slate-400 text-[11px]" />
                <span className="text-slate-500">Search by warehouse, shelf, bin...</span>
              </div>
              <button className="bg-primary hover:bg-orange-700 text-white font-bold text-xs px-3.5 py-2 rounded-xl flex items-center gap-1.5 transition-colors shadow-2xs">
                <FaPlus className="text-[10px]" /> Add Location
              </button>
            </div>

            {/* Table Mockup */}
            <div className="overflow-x-auto border border-slate-200/80 rounded-2xl">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#FAF7F5] border-b border-slate-200/80 text-[11px] font-bold text-slate-700">
                  <tr>
                    <th className="p-3">Warehouse</th>
                    <th className="p-3">Shelf / Rack</th>
                    <th className="p-3">Bin / Box</th>
                    <th className="p-3">Notes</th>
                    <th className="p-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-sans">
                  {locationRecords.map((loc, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-3 font-semibold text-slate-900 flex items-center gap-1.5">
                        <FaMapPin className="text-red-500 text-[11px] shrink-0" />
                        <span>{loc.warehouse}</span>
                      </td>
                      <td className="p-3">
                        <span className="bg-slate-100 text-slate-700 border border-slate-200 px-2 py-0.5 rounded text-[11px] font-mono font-medium">
                          {loc.shelf}
                        </span>
                      </td>
                      <td className="p-3">
                        <span className="bg-blue-50 text-blue-700 border border-blue-200 px-2 py-0.5 rounded-full text-[10.5px] font-mono font-bold">
                          {loc.bin}
                        </span>
                      </td>
                      <td className="p-3 text-slate-500 text-[11px] truncate max-w-[140px]">
                        {loc.notes}
                      </td>
                      <td className="p-3 text-right">
                        <div className="flex items-center justify-end gap-2 text-slate-400">
                          <FaEdit className="hover:text-slate-700 cursor-pointer text-xs" />
                          <FaTrashAlt className="hover:text-red-500 cursor-pointer text-xs" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-[11px] text-slate-500 flex items-center justify-between">
              <span>Supports infinite warehouses, racks & storage bins</span>
              <span className="text-primary font-bold">Zero Misplaced Stock</span>
            </div>
          </div>

          {/* Right: Live Part Locator Card */}
          <div className="lg:col-span-5 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-sm space-y-4">
            <div className="border-b border-slate-200 pb-3">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                <FaBoxes className="text-emerald-600" /> Live Inventory Part Locator
              </h3>
              <p className="text-[10.5px] text-slate-400">How mechanics locate items during repair work</p>
            </div>

            <div className="space-y-3">
              {locatorPartExamples.map((item, idx) => (
                <div key={idx} className="p-3 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-1.5">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">{item.part}</h4>
                      <span className="text-[10px] text-slate-400">{item.cat}</span>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                      {item.stock}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white p-2 rounded-xl border border-slate-200 text-[11px] font-medium text-slate-700">
                    <FaMapPin className="text-primary text-[10px] shrink-0" />
                    <span className="font-mono text-[10.5px] text-slate-900">{item.location}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 text-[11px] text-emerald-700 font-bold flex items-center gap-1.5">
              <FaCheckCircle className="text-emerald-500" /> Automatically printed on mechanic job sheets
            </div>
          </div>
        </div>

        {/* 3 Value Pillars (Looped) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {locationBenefits.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 rounded-2xl p-6 space-y-2.5 shadow-2xs hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-primary flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">{feat.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{feat.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
